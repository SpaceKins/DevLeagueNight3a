function youGetTaco(action){
	return action + " TACOS";
}

function isNumberGreaterThan(first, second){
	return (first>second);
}

function isTrue(val){
	return val;
}

function isFalse(val){
	return val;
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

createArrayFromString("test");




console.log(youGetTaco("eat"));
console.log(isNumberGreaterThan(3,10));