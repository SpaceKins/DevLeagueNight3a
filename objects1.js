var plainBox = {};


plainBox.color = "green";
plainBox.size = 15;
plainBox.contents = [];

var stockCar = {
    model: "Ford",
    year: 1965,
    automaticTransmission: true,
    driver: null,
    passengers: []
};

var plainPerson = [];

var buildPerson = function(person, nameString, age) {
    person.name = nameString;
    person.age = age;

    return person.name;
};

var getPerson = buildPerson(plainPerson, "Tester", 99);

console.log(plainPerson);
console.log(plainPerson.name);
console.log(plainPerson.age);


var arrayOfObjects = [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];

function printProcessedOrdersand(orders) {
    for (var i = 0; i < orders.length; i++) {
        for (var key in orders[i]) {
            console.log(key + ":" + orders[i][key]);
        }

        console.log("=====");
    }
}

printProcessedOrdersand(arrayOfObjects);

var objectToSum = {
    a: 1,
    b: 2,
    result: 0
};


var sumIt = function(useObject) {
    useObject.result = useObject.a + useObject.b;
    return useObject;
};

var testSum = sumIt(objectToSum);
console.log(testSum);

var sumMesseger = function(useObjectToSum) {
    useObjectToSum.output = useObjectToSum.a + ' + ' + useObjectToSum.b + ' = ' + useObjectToSum.result;
    return useObjectToSum;
};


console.log(sumMesseger(objectToSum).output);


var set10RandomNumbersToObject = function(useObject) {
    useObject.contents = [];
    for (var i = 0; i < 10; i++) {
        useObject.contents.push(Math.floor(Math.random()* 10));
    }

    return useObject;
};

console.log(set10RandomNumbersToObject(plainBox));


var checkTransmissionType=function(car)
{
	return "This car has " + (car.automaticTransmission?" an automatic transmission":" a manual transmission");
};


var thisCar={automaticTransmission:false};

console.log(checkTransmissionType(thisCar));


var setDriver=function(car,person)
{
   car.driver=person;
   return car;
};

var stockCarWithDriver=setDriver(stockCar,plainPerson);

console.log(stockCarWithDriver);

var passengerList = ['Jon', 'Jason', 'Tony', 'Joe', 'Jesse', 'Nigel', 'Kelli', 'Marifel', 'Victor'];
var passengerAges = [19, 12, 21, 22, 16, 9, 19, 20, 15];

var setCarPassengers=function(car, names, ages)
{
    for(var i=0;i<passengerList.length;i++)
    {
    	var newPerson={};
    	buildPerson(newPerson, names[i], ages[i]);
    	car.passengers.push(newPerson);
    }

	return car;
};
console.log(setCarPassengers(stockCar,passengerList,passengerAges));

var whoIsRiding=function(car)
{
	for(var i=0;i<car.passengers.length;i++)
	{
		console.log(car.passengers[i].name + ', age ' + car.passengers[i].age +', is riding dirty!');
	}
};

whoIsRiding(stockCar);
