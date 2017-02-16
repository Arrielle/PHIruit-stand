$(document).ready(function(){

	var fruitDivArray = ['apple', 'orange', 'banana', 'pears', 'starfruit']; //created array of client fruit

	//for loop to append button to each fruit div on the DOM
	for (var i = 0; i < fruitDivArray.length; i++) {
		$('#' + fruitDivArray[i]).append('<button class="buyButton" id="' + fruitDivArray[i] + '" >Buy ' + fruitDivArray[i] + ' </button>');
	}
	// variables declared for random number operations
	var centIncrement = randomNumber(1, 50);
	var plusOrMinus = randomNumber(0, 1);
	var newMarketPrice = randomNumber(1,9);

	var userCash = 100; // defines starting user cash

	$('#userCash').text(userCash); // adding user cash new amount to DOM by changing text

newRandomMarketPrice(); // calling RandomMarketPrice function

setInterval(newRandomMarketPrice, 15000); //sets price to refresh every 15 seconds


var averageApplePrice = 0;
var appleTotalSpent = 0;
var numApplesBought = 0;

$('button').on('click', function(){ // button click event listener
	var priceAtMoment = parseFloat($(this).parent().find('h3').find('span').text());
	userCash -= priceAtMoment; //subtracting fruit price from total cash
	$('#userCash').text(userCash); // updating user cash on DOM

	numApplesBought++;
	appleTotalSpent+=priceAtMoment;

	averageApplePrice = appleTotalSpent/numApplesBought;

	console.log(averageApplePrice);

});



	// function for parameters of new random market price to avoid errors
	function randomMarketPrice () {
		// newMarketPrice = randomNumber(1,9);
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
			$('#' + fruitDivArray[i]).find('h3').find('span').text(newMarketPrice);
		}
	}


	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}


});
