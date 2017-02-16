$(document).ready(function(){

	var fruitDivArray = ['apple', 'orange', 'banana', 'pear']; //created array of client fruit
	// var fruitObjectsArraygit = [{name: , price:, spent:, bought:}];

	function Phiruit(inName, inNumBought, inPrice, inAvgPrice) {
		this.name = inName;
		this.numBought = inNumBought;
		this.price = inPrice;
		this.avgPrice = inAvgPrice;
	}

	//for loop to append button to each fruit div on the DOM
	for (var i = 0; i < fruitDivArray.length; i++) {
		$('#' + fruitDivArray[i]).append('<button class="buyButton" id="' + fruitDivArray[i] + '" >Buy ' + fruitDivArray[i] + ' </button>');
		//new fruit goes here
		//need data to reference back to the fruit
	}
	// variables declared for random number operations
	var centIncrement = randomNumber(1, 50);
	var plusOrMinus = randomNumber(0, 1);
	var newMarketPrice = randomNumber(1,9);

	var userCash = 50; // defines starting user cash

	$('#userCash').text(userCash); // adding user cash new amount to DOM by changing text

	newRandomMarketPrice(); // calling RandomMarketPrice function

	setInterval(newRandomMarketPrice, 15000); //sets price to refresh every 15 seconds

// setting each fruit's behavior for average purchase price
	var averageApplePrice = 0;
	var appleTotalSpent = 0;
	var numApplesBought = 0;
	$('#apple').on('click', 'button', function(){ // button click event listener
		var priceAtMoment = parseFloat($(this).parent().find('h3').find('span').text());
		userCash -= priceAtMoment; //subtracting fruit price from total cash
		$('#userCash').text(Math.round(userCash*100)/100); // updating user cash on DOM;
		numApplesBought++;
		appleTotalSpent+=priceAtMoment;
		averageApplePrice = Math.round(appleTotalSpent/numApplesBought*100)/100;
		isUserALoser();

		$(this).parent().find('h4').find('span').text(averageApplePrice);

		$('#numApplesBought').text('You bought ' + numApplesBought  + ' apple(s)!')

	}); //ends APPLE on click

	var averageOrangePrice = 0;
	var orangeTotalSpent = 0;
	var numOrangeBought = 0;

	$('#orange').on('click', 'button', function(){ // button click event listener
		var priceAtMoment = parseFloat($(this).parent().find('h3').find('span').text());
		userCash -= priceAtMoment; //subtracting fruit price from total cash
		$('#userCash').text(Math.round(userCash*100)/100); // updating user cash on DOM

		numOrangeBought++;
		orangeTotalSpent+=priceAtMoment;
		averageOrangePrice = orangeTotalSpent/numOrangeBought;
		averageOrangePrice = Math.round(orangeTotalSpent/numOrangeBought*100)/100;
		isUserALoser();
		$(this).parent().find('h4').find('span').text(averageOrangePrice);

		$('#numOrangeBought').text('You bought ' + numOrangeBought  + ' orange(s)!')

	}); //ends ORANGE on click

		var averageBananaPrice = 0;
		var bananaTotalSpent = 0;
		var numBananaBought = 0;

	$('#banana').on('click', 'button', function(){ // button click event listener
		var priceAtMoment = parseFloat($(this).parent().find('h3').find('span').text());
		userCash -= priceAtMoment; //subtracting fruit price from total cash
		$('#userCash').text(Math.round(userCash*100)/100); // updating user cash on DOM

		numBananaBought++;
		bananaTotalSpent+=priceAtMoment;
		averageBananaPrice = bananaTotalSpent/numBananaBought;
		averageBananaPrice = Math.round(bananaTotalSpent/numBananaBought*100)/100;
		isUserALoser();
		$(this).parent().find('h4').find('span').text(averageBananaPrice);

		$('#numBananaBought').text('You bought ' + numBananaBought  + ' banana(s)!')

	}); //ends BANANA on click

	var averagePearPrice = 0;
	var pearTotalSpent = 0;
	var numPearBought = 0;

$('#pear').on('click', 'button', function(){ // button click event listener
	var priceAtMoment = parseFloat($(this).parent().find('h3').find('span').text());
	userCash -= priceAtMoment; //subtracting fruit price from total cash
	$('#userCash').text(Math.round(userCash*100)/100);

	numPearBought++;
	pearTotalSpent+=priceAtMoment;
	averagePearPrice = pearTotalSpent/numPearBought;
	averagePearPrice = Math.round(pearTotalSpent/numPearBought*100)/100;
	isUserALoser();
	$(this).parent().find('h4').find('span').text(averagePearPrice);

	$('#numPearBought').text('You bought ' + numPearBought + ' pear(s)!')

}); //ends PEAR on click
	//
	// var averageStarfruitPrice = 0;
	// var starfruitTotalSpent = 0;
	// var numStarfruitBought = 0;
	//
	// $('#starfruit').on('click', 'button', function(){ // button click event listener
	// 	var priceAtMoment = parseFloat($(this).parent().find('h3').find('span').text());
	// 	userCash -= priceAtMoment; //subtracting fruit price from total cash
	// 	$('#userCash').text(userCash); // updating user cash on DOM
	//
	// 	numStarfruitBought++;
	// 	starfruitTotalSpent+=priceAtMoment;
	// 	averageStarfruitPrice = starfruitTotalSpent/numStarfruitBought;
	//
	// 	$(this).parent().find('h4').find('span').text(averageStarfruitPrice);
	//
	// 	$('#numStarfruitBought').text('You bought ' + numStarfruitBought  + ' starfruit!')
	//
	// }); //ends STARFRUIT on click



	function isUserALoser(){
		if (userCash <= newMarketPrice){
			$('button').remove();
			// $('button').delete();
			console.log("user IS a loozer");
		}
	};

	// function for parameters of new random market price to avoid errors
	function randomMarketPrice () {
		// newMarketPrice = randomNumber(1,9);
		centIncrement = randomNumber(1,25);
		if (newMarketPrice <= 0.25) {
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
