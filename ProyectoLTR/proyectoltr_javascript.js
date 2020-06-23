$(document).ready(function () {
  $('#divRss').FeedEk({
FeedUrl: 'https://www.loteriasyapuestas.es/es/la%2Dprimitiva/resultados/.formatoRSS', MaxCount: 2
});

$('#divRss2').FeedEk({
FeedUrl: 'https://jquery-plugins.net/rss', MaxCount: 3, ShowDesc: true, ShowPubDate: false, DescCharacterLimit: 100
});
$('#divRss3').FeedEk({
FeedUrl: 'https://jquery-plugins.net/rss', MaxCount: 4, ShowDesc: false
});

$('#divRss4').FeedEk({
FeedUrl: 'https://jquery-plugins.net/rss', MaxCount: 2, DateFormat: 'd', DateFormatLang: 'en'
});

$('#divRss5').FeedEk({
FeedUrl: 'https://jquery-plugins.net/rss', MaxCount: 2, DateFormat: 'D', DateFormatLang: 'fr-FR'
});
$('#divRss6').FeedEk({
FeedUrl: 'https://jquery-plugins.net/rss', MaxCount: 2, DateFormat: 'f', DateFormatLang: 'en'
});

$('#divRss10').FeedEk({
FeedUrl: 'https://jquery-plugins.net/rss', MaxCount: 2, DateFormat: 'MM-dd-yyyy HH:mm', DateFormatLang: 'en'
});
$('#divRss11').FeedEk({
FeedUrl: 'https://jquery-plugins.net/rss', MaxCount: 2, DateFormat: 'dd MMMM yyyy', DateFormatLang: 'en'
});
$('#divRss12').FeedEk({
FeedUrl: 'https://jquery-plugins.net/rss', MaxCount: 2, DateFormat: 'MM/dd/yyyy'
});
});