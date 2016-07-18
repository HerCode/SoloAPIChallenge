$(function(){

var movieArray = ['Claudine', 'Gloria', 'Goodfellas', 'Casino', 'The Professional', 'The Town'];

$(function(){
  var getMovies = '';

movieData('claudine');
movieData('gloria');
movieData('goodfellas');
movieData('casino');
movieData('the+professional');
movieData('the+town');

$('.button').on('click', function(){
  getMovies = $('#search').val().split(' ').join('+');
  movieData(movie);
});

$.ajax({url: 'http://www.omdbapi.com/?t=Claudine&y=1974&plot=short&r=json'}).then(function(data){

  var title = data.Movie;
  var poster = data.Poster;
  var plot = data.Plot;
  var director = data.Director;
  var claudine = 1;

  $('.claudine').append('<h1>' + title + '</h1>');
  $('.claudine').append('<div id="firstPoster"><img id="poster1" src="' + poster + '"</div>');
  $('.claudine').append('<p>' + plot + '</p>');
  $('.claudine').append('<h3>' + director + '</h3>');

(console.log(data.movie, data.Poster, data.Plot, data.Director));

}).catch(function(){
  (console.log('Error'));
});

  $.ajax({url: 'http://www.omdbapi.com/?t=Gloria&y=1980&plot=short&r=json'}).then(function(data){

    var title = data.Movie;
    var poster = data.Poster;
    var plot = data.Plot;
    var director = data.Director;
    var gloria = 2;

    $('.gloria').append('<h1>' + title + '</h1>');
    $('.gloria').append('<div id="secondPoster"><img id="poster2" src="' + poster + '"</div>');
    $('.gloria').append('<p>' + plot + '</p>');
    $('.gloria').append('<h3>' + director + '</h3>');

  (console.log(data.movie, data.Poster, data.Plot, data.Director));

  }).catch(function(){
    (console.log('Error'));
  });

  $.ajax({url: 'http://www.omdbapi.com/?t=Goodfellas&y=1990&plot=short&r=json'}).then(function(data){

    var title = data.Movie;
    var poster = data.Poster;
    var plot = data.Plot;
    var director = data.Director;
    var goodfellas = 3;

    $('.goodfellas').append('<h1>' + title + '</h1>');
    $('.goodfellas').append('<div id="thirdPoster"><img id="poster3" src="' + poster + '"</div>');
    $('.goodfellas').append('<p>' + plot + '</p>');
    $('.goodfellas').append('<h3>' + director + '</h3>');

  (console.log(data.movie, data.Poster, data.Plot, data.Director));

  }).catch(function(){
    (console.log('Error'));
  });

  $.ajax({url: 'http://www.omdbapi.com/?t=Casino&y=1995&plot=short&r=json'}).then(function(data){

    var title = data.Movie;
    var poster = data.Poster;
    var plot = data.Plot;
    var director = data.Director;
    var casino = 4;

    $('.casino').append('<h1>' + title + '</h1>');
    $('.casino').append('<div id="fourthPoster"><img id="poster4" src="' + poster + '"</div>');
    $('.casino').append('<p>' + plot + '</p>');
    $('.casino').append('<h3>' + director + '</h3>');

  (console.log(data.movie, data.Poster, data.Plot, data.Director));

  }).catch(function(){
    (console.log('Error'));
  });

  $.ajax({url: 'http://www.omdbapi.com/?t=The+Professional&y=2003&plot=short&r=json'}).then(function(data){

    var title = data.Movie;
    var poster = data.Poster;
    var plot = data.Plot;
    var director = data.Director;
    var professional = 5;

    $('.professional').append('<h1>' + title + '</h1>');
    $('.professional').append('<div id="fifthPoster"><img id="poster5" src="' + poster + '"</div>');
    $('.professional').append('<p>' + plot + '</p>');
    $('.professional').append('<h3>' + director + '</h3>');

  (console.log(data.movie, data.Poster, data.Plot, data.Director));

  }).catch(function(){
    (console.log('Error'));
  });

  $.ajax({url: 'http://www.omdbapi.com/?t=The+Town&y=2010&plot=short&r=json'}).then(function(data){

    var title = data.Movie;
    var poster = data.Poster;
    var plot = data.Plot;
    var director = data.Director;
    var town = 6;

    $('.town').append('<h1>' + title + '</h1>');
    $('.town').append('<div id="sixthPoster"><img id="poster6" src="' + poster + '"</div>');
    $('.town').append('<p>' + plot + '</p>');
    $('.town').append('<h3>' + director + '</h3>');

  (console.log(data.movie, data.Poster, data.Plot, data.Director));

  }).catch(function(){
    (console.log('Error'));
  });
});
});
