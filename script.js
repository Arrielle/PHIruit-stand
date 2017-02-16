$(document).ready(function(){

	var fruitDivArray = ['apple', 'orange', 'banana', 'pears', 'starfruit']; //created array of client fruit

	//for loop to append button to each fruit div on the DOM
	for (var i = 0; i < fruitDivArray.length; i++) {
		$('#' + fruitDivArray[i]).append('<button class="buyButton" id="' + fruitDivArray[i] + '" > I want buy ' + fruitDivArray[i] + ' </button>');
	}
	// variables declared for random number operations
	var centIncrement = randomNumber(1, 50);
	var plusOrMinus = randomNumber(0, 1);
	var newMarketPrice = randomNumber(1,9);
	// console.log(newMarketPrice);

newRandomMarketPrice();

setInterval(newRandomMarketPrice, 1500); //sets price to refresh every 15 seconds

	// function for parameters of new random market price to avoid errors
	function randomMarketPrice () {
		newMarketPrice = randomNumber(1,9);
		centIncrement = randomNumber(1,50);
		if (newMarketPrice <= 0.5) {
			newMarketPrice += centIncrement/100;
		}else if (newMarketPrice >= 9.49){
			newMarketPrice -= centIncrement/100;
		}else if (plusOrMinus == 0) {
			newMarketPrice += centIncrement/100;
		}else if (plusOrMinus == 1){
			newMarketPrice -= centIncrement/100;
		}
		return newMarketPrice;
	}

	// for loop to generate new random market price
	//wrap in function yes!
	function newRandomMarketPrice(){
		for (var i = 0; i < fruitDivArray.length; i++) {
			newMarketPrice = randomMarketPrice();
			newMarketPrice *= 100;
			Math.round(newMarketPrice);
			newMarketPrice = parseInt(newMarketPrice)/100;
			$('#' + fruitDivArray[i]).find('h3').text("New Market Price: $" + newMarketPrice);
		}
	}


	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}


});
