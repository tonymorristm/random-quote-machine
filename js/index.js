// get and display current date
document.getElementById("date").innerHTML = new Date().toDateString();


$(document).ready(function(){

// array of quotes
	var quotes = ['"A year from now you may wish you had started today." <p class="auth">Karen Lamb</p>', 
								
								'"Passion is not something you follow. It\u0027s something that will follow you as you put in the hard work to become valuable 									 to the world." <p class ="auth">Cal Newport</p>',
								
								'"Wisdom is not a product of schooling but of the lifelong attempt to acquire it." <p class="auth">Albert Einstein</p>',
								
								'"I tell the kids, somebody\u0027s gotta win, somebody\u0027s gotta lose. Just don\u0027t fight about it. Just try to get 	  										 better." <p class="auth">Yogi Berra</p>',
								
								'"I\u0027m not going to buy my kids an encyclopedia. Let them walk to school like I did." <p class="auth">Yogi Berra</p>',  
								
								'"Isn\u0027t it funny how day by day nothing changes but when you look back, everything is different?" <p class="auth">C.S. Lewis</p>',
								
								'"God bless my mother, all that I am or ever hope to be I owe to her."" <p class="auth">Abraham Lincoln</p>', 
								
								'"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times." <p 												 class="auth">Bruce Lee</p>',
								
								'"If I take care of my character, my reputation will take care of itself."" <p class="auth">D.L. Moody</p>',

								'"Believe you can and you’re halfway there." <p class="auth">Theodore Roosevelt</p>', 
			
								'"If today was the last day of my life would I want to do what I’m about to do today?" <p class="auth">Steve Jobs</p>',
			
								'"Life is 10% what happens to you and 90% how you react to it." <p class="auth">Charles R. Swindoll</p>', 
			
								'"The secret of getting ahead is getting started." <p class="auth">Mark Twain</p>', 
			
								'"People rarely succeed unless they have fun in what they are doing." <p class="auth">Dale Carnegie</p>', 
			
								'"Our greatest fear should not be of failure but of succeeding at things in life that don\u0027t really matter." <p 															 class="auth">Francis Chan</p>' ];

	
// function to generate a random number that is in within the number of quotes using quotes.length		
function getQuoteNum() { 
    return Math.floor(Math.random() * (quotes.length));	
}

// picks a random quote based on the getQuoteNum from above
$('#quoteGen').click(function() {
  $('#quote').fadeIn(1000);	$('#quote').html(quotes[getQuoteNum()], function(){
	});
	$(".btn-default.twitter") .fadeIn(2500);
	});
	
// generates text from quote for tweeting
$('#tweetQuote').click(function(){	
	quote = $('#quote').text();
	$('#tweetQuote').attr("href", 'https://twitter.com/intent/tweet?text=' + quote);
		//console.log(quote);
	}); 
	
});



// Tweet Script
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter"));