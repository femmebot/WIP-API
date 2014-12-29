


/*************************************/
/* Github API display raw data       */
/*************************************/

//
// $('.btn').click(function() {
//
//   $('.text').text('loading . . .');
//
//   $.ajax({
//     type:"GET",
//     url:"https://api.github.com/users/femmebot/repos",
//     success: function(data) {
//       $('.text').html('');
//       $('.text').text(JSON.stringify(data));
//     },
//     dataType: 'jsonp',
//   });
//
// });


/******************************************/
/* Github API display contributions       */
/******************************************/

/* Use repos + commits to determine repos contributed to */
/* https://api.github.com/repos/<username>/<repo name>/commits */


$('.btn').click(function() {

  $('.text').text('loading . . .');

  var url = "https://api.github.com/users/femmebot/repos";
  var repoName = "";

  $.getJSON (url, function (response) {
      $.each (response, function (index, repos) {
        if (repos.fork === false) {
          // repoName += '<p>' + repos.full_name + '</p>';
          $('.text').append('<p>' + repos.full_name + '</p>');        }
        // $('.text').text( repoName );
      })
  });

});

/********************************/
/* Meetup City Listing example  */
/********************************/
//
// $('.btn').click(function() {
//
//   $('.text').text('loading . . .');
//
//   $.ajax({
//     type:"GET",
//     url:"https://api.meetup.com/2/cities",
//     success: function(data) {
//       $('.text').html('');
//       for (var i = 0; i < data.results.length; i++) {
//         var place = data.results[i].city + ", " + data.results[i].state
//         $('.text').append('<p>' + place + '</p>');
//       }
//
//     },
//     dataType: 'jsonp',
//   });
//
// });
