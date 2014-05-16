$(document).ready(function(){

	var words_WDI = ["relationships", "craigsy", "jonesy", "come on Bessy", "you go Glenn Coco", "have the best time, seriously", "butterflies", "Have you seen my face? Do I have a face?", "see you along!", "let's have a mating party", "computers!", "more styling", "I love styling", "cool beans", "BEERS", "the beer fridge is locked", "is it beer o'clock yet?", "oreo cupcake", "I fucking hate the BeeGees", "Sharknado 2", "Avalanche sharks", "Harpo", "Chico", "Groucho", "Did you just call me fat?!", "Coffee?!", "let's have morning tea now", "apparently I smell like snails", "bad hair day predictor", "I'll give you my front-end mojo if you give me your back-end mojo", "What's the symbol for a symbol?", "How you doin", "he's fucking my sister", "WDI gang sign", "GA", "mkdir", "I'm gonna touch a file", "I'm a genius", "blurb", "it's twelve o'clock", "I'll send you the link on HipChat", "don't forget to pull before you push", "fart", "baguette", "debugging ukuleles", "Did you send me your homework guys?", "your morning exercise is on HipChat", "kitkat chunky cookies and cream", "yeah man", "I hate suits", "I judge you all so hard", "Idiots.gif", "infinite loop", "in theory", "i love guns"];

	//Shuffles the array when clicking on button
	$('#button').click(function(){
		var paragraphs = ''
		//Grabs the input from the user to determine the number of paragraphs.
		var number_paragraphs = $('#paragraph-count').val();

		//Display alert if user input is superior to 99.
		if(number_paragraphs.length > 2){
			alert("WOW! You asked for too much awesome man!");
		} else {
			var words = [];
			words = words_WDI;

			//Randomise the number of sentences in each paragraph.
			var number_sentences = Math.floor((Math.random()+4) /3);

			//For loop to generate a number of sentences per group
			for(var i = 0; i < number_paragraphs; i++){
				var sentence_group = '';
				for(var j = 0; j < number_sentences; j++){
					for(var z = 0; z < words_WDI.length; z++){
						var shuffleIpsum = shuffle(words_WDI);
						var sentence = shuffleIpsum.toString().replace(/,/g, ' ') + '. ';

						//Capitalizes the first letter of every sentence.
						var capitalizeLetter = function(string){
							return string.charAt(0).toUpperCase() + string.slice(1);
						}
						var sentence_capitalized = capitalizeLetter(sentence);
					}
					sentence_group += sentence_capitalized;
				}
				paragraphs += '<p>' + sentence_group + '</p>' + '<br>';
			}
			$('#ipsum').empty().html(paragraphs);
		}
		return false;
	});

	//Shuffle the array of words base on the Fisher-Yates algorithm.
	var shuffle = function(array){
		var currentIndex = array.length, temporaryValue, randomIndex;

		//While there is still elements, execute this code
		while(0 != currentIndex){
			//Pick a remaining element
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -=1;

			//Swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
});

//TODO: Check ZeroClipboard to copy WDI Ipsum easily.