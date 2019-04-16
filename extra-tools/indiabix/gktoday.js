const puppeteer = require("puppeteer");

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    var userAgentString =
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36";

    page.setUserAgent(userAgentString);

    var primaryUri =
      "https://www.gktoday.in/gk-current-affairs-quiz-april-05-2019/";

    await page.goto(primaryUri);
    await page.waitForSelector(".ques_txt");

    // const sections = await page.$$(".bix-div-container");
    // console.log(sections.length);

    for (var i = 0; i < 10; i++) {
      var str = ".question_list question_no_" + i.toString();

      const section = await page.$(str);

      //   const qc = await section.$(".bix-td-qtxt");
      //   const que = await qc.$eval("p", p => p.innerText);
      //   // const opts = await section.$$(".bix-tbl-container");
      //   //   const opts = await section.$$(".bix-td-option");
      //   const trs = await section.$$(".bix-tbl-options > tbody > tr");

      //   for (var i = 0; i < trs.length; i++) {
      //     // if (i % 2 == 0) {
      //     //   filteredTds.push(tds[i]);
      //     // }

      //     // const opt = await trs[i].$eval("td", td => td.textContent);
      //     const opt = await trs[i].$eval("td", td => td.textContent);
      //     console.log(opt);
      //     // const tds = await trs[i].$$("td");
      //     // for (var j = 0; j < tds.length; j++) {
      //     //   const opt = await tds[j].$eval("td", td => td.textContent);
      //     //   console.log(opt);
      //     // }
      //   }
      //   // console.log(que, filteredTds.length);
      //   //   for (var i = 0; i < tds.length; i++) {
      //   //     const opt = await tds[i].$eval(".td", td => td.textContent);
      //   //     console.log(opt);
      //   //   }
    }
  } catch (e) {
    console.log("custom error ", e);
  }
})();
