const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const writeFile = true;
const fileName = 'indiabix-worldGeography-sec1.txt';
const differentiatingChar = '@';

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

		var startInd = parseInt('004001');
		var lastInd = parseInt('004013');
		for (var k = startInd; k <= lastInd; k++) {
			var primaryUri = 'https://www.indiabix.com/general-knowledge/world-geography/00' + k.toString().trim();

			console.log('working on ...', primaryUri);
			await page.goto(primaryUri);
			await page.waitForSelector('.bix-td-qtxt');

			const sections = await page.$$('.bix-div-container');
			//console.log(sections.length);

			var arr = [];
			for (const section of sections) {
				const qc = await section.$('.bix-td-qtxt');

				const queDivsTexts = await qc.$$eval('p', (p) => p.map((elem) => elem.innerText));

				const que = queDivsTexts[1];
				// document.querySelector('p').innerText);

				// const textsArray = await queDivs.map((elem) => elem.innerText);
				// console.log('texts array ', textsArray);
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

				// console.log(obj);
				if (writeFile) {
					await fs.appendFile(fileName, `${obj[ansInd]}\n`);
					//await fs.appendFile(fileName, '\n');
				}
				await arr.push(obj);
				//await console.log(obj);
			}
		}

		console.log('Done!');
		process.exit();
	} catch (e) {
		console.log('custom error ', e);
	}
})();
