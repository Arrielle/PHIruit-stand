$(document).ready(function(){

	var fruitDivArray = ['apple', 'orange', 'banana', 'grapes'];

	for (var i = 0; i < fruitDivArray.length; i++) {
		$('#' + fruitDivArray[i]).append('<button class="buyButton" id="' + fruitDivArray[i] + '" > I want buy ' + fruitDivArray[i] + ' </button>');
	}

	var centIncrement = randomNumber(1, 50) / 100;
	var plusOrMinus = randomNumber(0, 1);
	var newMarketPrice = 1;
	// console.log(newMarketPrice);











	function randomMarketPrice () {
		if (newMarketPrice <= 0.5) {
			newMarketPrice += centIncrement;
		}else if (newMarketPrice == 9.99){
			newMarketPrice -= centIncrement;
		}else if (plusOrMinus == 0) {
			newMarketPrice += centIncrement;
		}else if (plusOrMinus == 1){
			newMarketPrice -= centIncrement;
		}
		return newMarketPrice;
	}

	// console.log(newMarketPrice);

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}


});
