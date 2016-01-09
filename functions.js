/****  Functions ****/

var a=5;
var b=8;

/****  Add ****/
function addThese(a,b){
	return a+b;
}

/****  Difference ****/
function differenceThese(a,b){
	return a+b;
}

/****  Product ****/
function productThese(a,b){
	return a*b;
}


/****  checkDifference ****/
function checkDifference(differenceToCheck){
	return "My football team lost " + differenceToCheck + " times this week";
}

/****  checkSum ****/
function checkSum(sumToCheck){
	console.log("I CAN ADDZ " + sumToCheck + " NUMBERS");
}

/****  checkProduct ****/
function checkProduct(productToCheck, difference){
	console.log(productToCheck * difference);
}

/****  addThenSubtract ****/
function addThenSubtract(num1, num2, num3){
	var sumFirst=addThese(num1,num2);
	var thenDifference=differenceThese(sumFirst,num3);
	outTrace("addThenSubtract");
}

/****  addThenMultiply ****/
function addThenMultiply(num1, num2, num3){
	var sumFirst=addThese(num1,num2);
	var thenMultiply=productThese(sumFirst,num3);
	outTrace("addThenMultiply");

	return thenMultiply;
}

/****  createFullName ****/
function createFullName(firstName, lastName){
	outTrace("createFullName");
	return firstName + " " + lastName ;
}

/****  verifyDrinkingAge ****/
function verifyDrinkingAge(age){
	outTrace("verifyDrinkingAge");
	return (age>=21);
}

/****  throwParty ****/
function throwParty(checkCanDrinkBeer){
	outTrace("thowParty");
	console.log(checkCanDrinkBeer?"This Party will have an open bar": "The Party will have tons of Cake!");
}

/****  eatFood ****/
function eatFood(firstName, lastName, food){
	var fullName=createFullName(firstName, lastName);

	console.log(fullName + " loves to eat " + food);
}

/****  repeater ****/
function repeater(canDrinkBeer,howMany){
	var reply;

	if(canDrinkBeer)
	{
		reply="Bacon Pancakes, makin' Bacon Pancakes...";
	}
	else
	{
		reply="Let it go.... LET IT GOOOOOOoOoOoOo...";
	}

	outTrace("howMany="+howMany);

	while((howMany--)>0)
	{
		console.log(reply);
	}
}

function outTrace(message){
	//console.log(message);
}

var sum=addThese(a,b);
var difference=differenceThese(a,b);
var product=productThese(a,b);

checkDifference(difference);

checkSum(sum);
checkProduct(product,difference);

addThenSubtract(1,2,3);
var howMany=addThenMultiply(1,2,3);
var myFullName=createFullName("Steven","Yamashiro");
var canDrinkBeer=verifyDrinkingAge(34);
throwParty(canDrinkBeer);

eatFood("John", "Papa", "Pizza");

outTrace("howMany="+howMany);
repeater(canDrinkBeer,howMany);

/// Test git diff
