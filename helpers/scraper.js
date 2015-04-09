var urllib = require('urllib');
var cheerio = require('cheerio');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var viewState;

var URL = "http://www.scpp.fr/SCPP/Accueil/REPERTOIRE/Catalogue/Choix_catalogue/BasePhonogrammes/tabid/81/language/en-US/Default.aspx";

var params = {
	method: 'GET',
}

urllib.request(URL, { method: 'GET'	}, function (err, data, res) {
		var textChunk = decoder.write(data);
		var $ = cheerio.load(textChunk);

		$('#__VIEWSTATE').each(function () {
			viewState = $(this)[0].attribs.value;
			console.log(viewState);
		})

})