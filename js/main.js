/* 

what do we need for our zodiac object to work?
1. A way to take user info (probably input tag)
2. a way to run the app (button)
3. we need a function that executes the application 
	a. save what sign they chose
	b. return corresponding horoscope info
		- Need an object for eery horoscope sign
		- each obhect needs: IMG, horoscope reading, horoscope sign
	c. put all 12 objects into an array - to loop through easily
	d. if statement that compares user inut to the name of the sign
		- inside of the for loop
	e. display information on the screen
		- HTML elements with IDs
		- use innerHTML to change the insides of those elements to data from the objects

*/

$(document).ready(function() {
	$.support.cors = true;
	$('.btn').click(
		function() {
			var sign = $(this).text().toLowerCase().trim()
			var url = `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today/`
			$.getJSON(url)
			.done(
				function(data){
					var s = data.horoscope
					var n = s.indexOf('(')
					s = s.substring(0, n != -1 ? n : s.length)
					$('#content').text(s)
				}
			)
		}
	),
	$('.card').mouseenter(function() {
    	$(this).effect('shake', 2000)
	})
	
})

 