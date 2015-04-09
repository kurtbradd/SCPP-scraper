var request 		= require('request');
var cheerio 		= require('cheerio');
var config 			= require('./config.js'); 

var headersInTable = function ($, table) {
	return table.find('.TableHeader').find('th').map(function () {
  	return $(this).text();
  })
}

var rowDataFromTable = function ($, table, headers) {
  return table.find('tr').map(function (rowNum, tr) {
  	if (rowNum) return dataInRow($, this, headers);
  }).get();
}

var dataInRow = function ($, row, headers) {
	var data = {};
	$(row).children().each(function (i) {
		data[headers[i]] = $(this).text().replace(/[\r\n\t]([  ]+)*/g, '');
	});
	return data;
}

var parseBody = function (body) {
  var $ 						= cheerio.load(body);
  var resultsTable 	= $('.ResultatTable');
  var headers 			= headersInTable($, resultsTable);
  return rowDataFromTable($, resultsTable, headers);
}

var callback = function (err, res, body) {
 	if (err || res.statusCode != 200) return
  var results = parseBody(body);
	if (results) console.log(results);
}

request.post(config, callback);