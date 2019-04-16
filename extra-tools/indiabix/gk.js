const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const writeFile = true;
const fileName = 'gk.txt';
var differentiatingChar = '@';

async function algorithm(startInd, lastInd, page) {
	console.log('running algorithm');
	(startInd = parseInt(startInd)), (lastInd = parseInt(lastInd));
	console.log(startInd, lastInd);
	for (var k = startInd; k <= lastInd; k++) {
		var primaryUri = 'https://www.indiabix.com/general-knowledge/basic-general-knowledge/';
		if (startInd.toString().length > 4) {
			primaryUri = primaryUri + '0' + k.toString().trim();
		} else {
			primaryUri = primaryUri + '00' + k.toString().trim();
		}

		console.log('working on ...', primaryUri);
		await page.goto(primaryUri);
		await page.waitForSelector('.bix-td-qtxt');

		const sections = await page.$$('.bix-div-container');
		console.log(sections.length);

		var arr = [];
		for (const section of sections) {
			const qc = await section.$('.bix-td-qtxt');
			const que = await qc.$eval('p', (p) => p.innerText);

			const trs = await section.$$('.bix-tbl-options > tbody > tr');
			const obj = { question: que };

			if (writeFile) {
				await fs.appendFile(fileName, `${que}${differentiatingChar}`);
			}
			for (var i = 0; i < trs.length; i++) {
				const opt = await trs[i].$eval('td[width="99%"]', (td) => td.textContent);

				obj[i] = opt;

				if (writeFile) {
					var str = '';
					// if (i % 3 == 0 && i != 0) {
					// 	str = `${opt}`;
					// } else {
					// 	str = `${opt}${differentiatingChar}`;
					// }

					str = `${opt}${differentiatingChar}`;

					await fs.appendFile(fileName, `${str}`);
				}
			}

			const ansDiv = await section.$$('.bix-div-answer > p');
			const ansCharInd = await ansDiv[0].$eval('.jq-hdnakqb', (span) => span.textContent);
			var ansInd = 0;
			switch (ansCharInd.trim()) {
				case 'A':
					ansInd = 0;
					break;
				case 'B':
					ansInd = 1;
					break;
				case 'C':
					ansInd = 2;
					break;
				case 'D':
					ansInd = 3;
					break;
				// code block
			}

			//console.log(obj[ansInd]);
			if (writeFile) {
				await fs.appendFile(fileName, `${obj[ansInd]}\n`);
				//await fs.appendFile(fileName, '\n');
			}
			await arr.push(obj);
			await console.log(obj);
		}
	}
}

(async function main() {
	try {
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		var userAgentString =
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36';

		await page.setUserAgent(userAgentString);
		//var urisuff = ['011001','011002','011003','011004'];

		if (writeFile) {
			await fs.writeFile(
				fileName,
				`question${differentiatingChar}option1${differentiatingChar}option2${differentiatingChar}option3${differentiatingChar}option4${differentiatingChar}correctAnswer\n`
			);
		}

		// var startInd = parseInt('025001');
		// var lastInd = parseInt('025014');

		const inds = [
			[ '005001', '005013' ],
			[ '006001', '006015' ],
			[ '007001', '007014' ],
			[ '008001', '008014' ],
			[ '019001', '019013' ],
			[ '020001', '020014' ],
			[ '021001', '021013' ],
			[ '022001', '022014' ],
			[ '023001', '023013' ],
			[ '024001', '024015' ]
		];
		for (var i = 0; i < inds.length; i++) {
			var startInd = inds[i][0];
			var lastInd = inds[i][1];
			//	console.log(startInd, lastInd);
			await algorithm(startInd, lastInd, page);
		}
		console.log('Done!');
		process.exit();
	} catch (e) {
		console.log('custom error ', e);
	}
})();
