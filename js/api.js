


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

  $.getJSON (url, function ( response ) {
      $.each (response, function (index, repos) {

        if (repos.fork === false) {
          var commitURL = "https://api.github.com/repos/"+repos.full_name+"/commits"
          // $('.text').append('<p>' + commitURL + '</p>');

          var currentRepo = "";

          $.getJSON ( commitURL,function ( commitResponse ) {
            $.each ( commitResponse, function (index, commitData) {
            // console.log( index + ' ' + commitData.commit.committer.name + ' ' + repos.owner.login );
              if ( commitData.commit.committer.name === repos.owner.login && repos.name != currentRepo ) {
                $('.text').append('<p>' + repos.name + '</p>');
                currentRepo = repos.name;

              } // end commits if statement
            }) // end .each commitResponse loop

          }) // end getJSON commitURL callback function

          // repoName += '<p>' + repos.full_name + '</p>';
          // $('.text').append('<p>' + repos.full_name + '</p>');        }
        // $('.text').text( repoName );

      } // end repos.fork if statement
    }) // end .each response callback function
  }) // end main response callback
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
