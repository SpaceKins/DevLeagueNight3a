function youGetTaco(action){
	return action + " TACOS";
}

function isNumberGreaterThan(first, second){
	return (first>second);
}

function isTrue(val){
	return (!!val);
}

function isFalse(val){
	return !(isTrue(val));
}

function isEqual(firstWord, secondWord){
	return (firstWord===secondWord?'AWWWWRIGHT':'Y U NO MATCH!');
}

function isNotEqual(firstWord, secondWord){
	return (firstWord!==secondWord?'AWWWWRIGHT':'Y U NO MATCH!');
}

function doubleEquals(firstWord, secondWord){
	return (firstWord && secondWord);
}

function totalOver30(first, second, third){
	return ((first + second + third)>30);
}

function totalUnderWhat(first, second, third, fourth){
	return ((first + second + third)<fourth);
}

function looptoNumber(limit){
	for(var i=0;i<limit;i++)
	{
		console.log(i);
	}
}

function showEachValue(characters){
	var charactersCount=characters.length;

	for(var i=0;i<charactersCount;i++)
	{
		console.log(characters[i]);
	}
}

function createArrayFromString(word){
	var wordCount=word.length;
	var newArray=[];

	for(var i=0;i<wordCount;i++)
	{
		if(word[i]!=='a')
		{
			newArray.push(word[i]);
		}
	}

	console.log(newArray);
}

function greatSummator(numberList){
	var numberListCount=numberList.length;
	var resultSum=0;

	for(var i=0;i<numberListCount;i++)
	{
		resultSum+=numberList[i];
	}

	return resultSum;
}

function totalUnderWhatFor(numberList, total){
	return (greatSummator(numberList)<total);
}

function checkTrueValues(boolList){
	var boolListCount=boolList.length;
	var lastBool=true;

	for(var i=0;i<boolListCount;i++)
	{
		lastBool =doubleEquals(isTrue(boolList[i]),lastBool);
	}

	return (lastBool);
}

createArrayFromString("testaTest");
console.log(greatSummator([1,2,3,4,5]));

console.log(totalUnderWhatFor([1,2,3,4,5],15));




console.log(youGetTaco("eat"));
console.log(isNumberGreaterThan(3,10));

console.log(isTrue(1/'a'));
console.log(isFalse(1/'a'));

console.log(checkTrueValues([true,true,1,'a']));

console.log("Verify Values");
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue(NaN));

console.log(isTrue(1));
console.log(isTrue("f"));
console.log(isTrue("NaN"));
console.log(isTrue(null));

console.log("Verify Values");
console.log(isFalse(false));
console.log(isFalse(0));
console.log(isFalse(""));
console.log(isFalse(null));
console.log(isFalse(undefined));
console.log(isFalse(NaN));