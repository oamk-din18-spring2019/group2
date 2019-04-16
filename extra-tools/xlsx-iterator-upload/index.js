var Excel = require('exceljs');

var querystring = require('querystring');
var request = require('request');

// const sequelize = require('./database');
// sequelize
// 	.sync()
// 	.then((result) => {
// 		// console.log(result);
// 		console.log('MySQL DB connected...');
// 		console.log('Sequelize models synced...');
// 	})
// 	.catch((err) => {
// 		console.log('Error in sequelize syncing ' + err);
// 	});
var workbook = new Excel.Workbook();
workbook.xlsx.readFile('indiabix.xlsx').then(() => {
	var worksheet = workbook.getWorksheet('inventions');

	worksheet.eachRow(function(row, rowNumber) {
		//  console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));

		console.log(rowNumber, row.values);

		var values = row.values;
		var obj = {};
		obj['question'] = values[1];
		obj['correctAnswer'] = values[6];
		var ind = 0;

		for (var i = 2; i <= 5; i++) {
			if (values[i] != values[6]) {
				ind++;
				obj['option' + ind.toString()] = values[i];
			}
		}

		obj['category'] = 3;
		obj['categoryTitle'] = 'Inventions';

		console.log(obj);

		// request.post('https://www.joelmaenpaa.com/api/addQuestion', { json: { key: 'value' } }, function(
		// 	error,
		// 	response,
		// 	body
		// ) {
		// 	if (!error && response.statusCode == 200) {
		// 		console.log(body);
		// 	}
		// });

		var formData = querystring.stringify(obj);
		var contentLength = formData.length;

		request.post(
			{
				url: 'https://www.joelmaenpaa.com/api/addQuestion',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Content-Length': contentLength
				},
				body: formData
			},
			function optionalCallback(err, httpResponse, body) {
				if (err) {
					return console.error('upload failed:', err);
				}
				console.log('Upload successful!  Server responded with:', body);
			}
		);

		// request(
		// 	{
		// 		url: 'https://www.joelmaenpaa.com/api/addQuestion',
		// 		method: 'POST',
		// 		json: true, // <--Very important!!!
		// 		body: obj
		// 	},
		// 	function(error, response, body) {
		// 		if (error) {
		// 			console.log(error);
		// 		}
		// 	}
		// );
	});
});
