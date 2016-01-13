
/*
presidents which contains the first 5 presidents' last names: Washington, Adams, Jefferson, Madison, Monroe.

Now write a FOR loop which iterates through this Array.

Within the FOR loop, use console.log to:

Log the value of i. Use a message like Value of i is: and append the value of i to this String
Log what is at index i in the array. Use a message like Value at Index is: and append the value stored within the Array at that index.
*/

var presidents=["Washington","Adams"," Jefferson"," Madison"," Monroe"];

for(var i=0;i<presidents.length;i++)
{
	//console.log("Value of " +i +" is:" + presidents[i]);
	printContent (i, presidents[i]);
}

function printContent (index, president)
{
	console.log("Value of " + index +" is:" + president);
}

/*
stringOfNumbers and set it's value to '' (an empty String).
Then write a FOR loop that appends a Number value to that string starting from 10 all the way up to and including 20.

After the FOR loop, use console.log to inspect your variable. In the end your String should look like this 1011121314151617181920
*/


var stringOfNumbers='';

for(var i=10;i<=20;i++)
{
	//stringOfNumbers+=i;
	appendToString(i);
}

console.log(stringOfNumbers);


function appendToString (toAppend)
{
	stringOfNumbers+=toAppend;
}

var evenNumberArray=[];

for(var i=0;i<50;i++)
{
	evenNumberArray.push(i*2);
}

console.log(evenNumberArray);

//Use a FOR loop to add only even numbers to an Array. Add 50 even numbers to the evenNumberArray starting with the value 0.s


var oopsArray=[ 'turn' ,'' , 'down' ,'' , 'for' ,'' , 'what' ]; //   set it's value to be: [ 'turn' , , 'down' , , 'for' , , 'what' ]

//using a FOR loop, add the string 'nope' to every odd index.

//Example result should look like:

for(var i=1;i<oopsArray.length;i+=2)
{
	oopsArray[i]='nope';
}

console.log(oopsArray);


for(var i=oopsArray.length-1;i>-1;i--)
{
	console.log(oopsArray[i]);
}

/********* Is Nap Time *********************/

var isNapTime=false;
var napSchedule=[false, false, true, false, true, true];

function  nap(schedule)
{
	if(schedule)
	{
		console.log('ZzZzZzZz');
	}
	else
	{
		console.log('Gotta get to work!');
		isNapTime=true;
	}
}

for(var i=0;i<napSchedule.length;i++)
{
	nap(napSchedule[i]);
}

var copyOfValuesArray = [];
var valuesArray =  [99, 66, 829, 1941, 8, 76];

function copyArray(originArray,destinationArray)
{
	for(var i=0;i<originArray.length;i++)
	{
		destinationArray.push(originArray[i]);
	}
}
copyArray(valuesArray, copyOfValuesArray);
console.log(valuesArray);
console.log(copyOfValuesArray); 

var miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ];

function generateArrayOfStrings(storage)
{
	var stringsOnlyArray=[];

	for(var i=0;i<storage.length;i++)
	{
		if(typeof storage[i]=="string")
		{
			stringsOnlyArray.push(storage[i]);
		}
	}

	return stringsOnlyArray;
}

console.log(generateArrayOfStrings(miscStorage));

var currentClass = [
{
	name: 'Doug',
	graduated: false,
	enrolled: true
},
{
	name: 'Pat',
	graduated: false,
	enrolled: false
},
{
	name: 'Marsha',
	graduated: false,
	enrolled: false
},
{
	name: 'Moira',
	graduated: false,
	enrolled: true
},
{
	name: 'Ben',
	graduated: false,
	enrolled: true
},
{
	name: 'Nigel the Giraffe',
	graduated: false,
	enrolled: false
},
{
	name: 'Brandon the Shark',
	graduated: false,
	enrolled: true
}
];

function graduateAndSetNewClass(thisClass)
{
	for(var i=0;i<thisClass.length;i++)
	{
		if(typeof thisClass[i] == 'object' && ("enrolled" in thisClass[i])) // (thisClass[i].enrolled))
{
	if(thisClass[i].enrolled)
	{
		thisClass[i].graduated=true;
	}
	else
	{
		thisClass[i].enrolled=(!thisClass[i].enrolled);
	}
}
}
}

graduateAndSetNewClass(currentClass);


console.log(currentClass); 