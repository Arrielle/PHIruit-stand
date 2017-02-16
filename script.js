$(document).ready(function(){

	var fruitDivArray = ['apple', 'orange', 'banana', 'pears', 'starfruit'];

	for (var i = 0; i < fruitDivArray.length; i++) {
		$('#' + fruitDivArray[i]).append('<button class="buyButton" id="' + fruitDivArray[i] + '" > I want buy ' + fruitDivArray[i] + ' </button>');
	}

	var centIncrement = randomNumber(1, 50);
	var plusOrMinus = randomNumber(0, 1);
	var newMarketPrice = randomNumber(1,9);
	// console.log(newMarketPrice);


for (var i = 0; i < fruitDivArray.length; i++) {
	newMarketPrice = randomMarketPrice();
	newMarketPrice *= 100;
	Math.round(newMarketPrice);
	newMarketPrice = parseInt(newMarketPrice)/100;
	$('#' + fruitDivArray[i]).find('h3').text("New Market Price: $" + newMarketPrice);

}



	function randomMarketPrice () {
		centIncrement = randomNumber(1,50);
		if (newMarketPrice <= 0.5) {
			newMarketPrice += centIncrement/100;
		}else if (newMarketPrice >= 9.99){
			newMarketPrice -= centIncrement/100;
		}else if (plusOrMinus == 0) {
			newMarketPrice += centIncrement/100;
		}else if (plusOrMinus == 1){
			newMarketPrice -= centIncrement/100;
		}
		return newMarketPrice;
	}

	// console.log(newMarketPrice);

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}


});
