var URL = "http://www.scpp.fr/SCPP/Accueil/REPERTOIRE/Catalogue/Choix_catalogue/BasePhonogrammes/tabid/81/language/en-US/Default.aspx";

var headers = {
  'Host' : 'www.scpp.fr',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:39.0) Gecko/20100101 Firefox/39.0',
  'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language':'en-US,en;q=0.5',
  'X-MicrosoftAjax' : 'Delta=true',
  'Cache-Control' : 'no-cache',
  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
  'Referer' : "http://www.scpp.fr/SCPP/Accueil/REPERTOIRE/Catalogue/Choix_catalogue/BasePhonogrammes/tabid/81/language/en-US/Default.aspx",
  'Cookie': '.ASPXANONYMOUS=5hQa7f2n0AEkAAAAODFiNjhkNTMtY2QyZS00MGU3LWIyYzUtNTM0NzI5NzFjYjU20; DotNetNukeAnonymous=277c292f-6f31-4109-810b-fbff0b1331aa; ASP.NET_SessionId=gs1ivm45pu1pxz551s2tk3vt; language=en-US; __utma=95097886.528949418.1428436226.1428436226.1428436226.1; __utmb=95097886.13.10.1428436226; __utmc=95097886; __utmz=95097886.1428436226.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1',
  'Connection' : 'keep-alive',
  'Pragma' : 'no-cache'
}

var body = {  
  ScriptManager : "dnn$ctr487$XSM_UP|dnn$ctr487$XSM$ctl00$BFind",
  __EVENTTARGET : "",
  __EVENTARGUMENT : "",
  __LASTFOCUS : "",
  __VIEWSTATE : "/wEPZwUPOGQyM2ZlZjQzZDUyNDk2TaqjD+Xd6b01GayLCZB3kBGKtNA=",
  dnn$PageHeader$MLLANGUAGESELECTOR$cboSelectLanguage : "en-US",
  dnn$ctr404$SearchInput$txtSearch  : "",
  dnn$ctr487$XSM$ctl00$TxtTitre : "",
  dnn$ctr487$XSM$ctl00$TxtInterprete  : "",
  dnn$ctr487$XSM$ctl00$Txtreference : "",
  dnn$ctr487$XSM$ctl00$TxtISRC :  "USGJP1300325",
  dnn$ctr487$XSM$ctl00$TxtNomAlbum  : "",
  dnn$ctr487$XSM$ctl00$TxtBarcode : "",
  dnn$ctr487$XSM$ctl00$ytbAnnFix$tbYear : "",
  dnn$ctr487$XSM$ctl00$DdPaysFix  : "",
  dnn$ctr487$XSM$ctl00$ytbAnnPub$tbYear : "",
  dnn$ctr487$XSM$ctl00$DdPaysPub  : "",
  dnn$ctr487$XSM$ctl00$TxtMarque  : "",
  dnn$ctr487$XSM$ctl00$ddGenres : "",
  ScrollTop : "",
  __dnnVariable : "",
  dnn$ctr487$XSM$ctl00$BFind :"Search"
}

module.exports = {
  url: URL,
  headers: headers,
  form: body
}