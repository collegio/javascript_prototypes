/*

	Learn to Code JavaScript: Lesson 4
	Prototypes and Function Expressions

	Let's level-up our objects by creating some Prototypes and seeing some function
	expressions

*/

// Let's start by adding a method to any new strings we create
// that will give us the vowel and consonant count

// Note: these are also examples of function expressions!
String.prototype.vowelCount = function() {
	var count = 0;
	for (var i = 0; i < this.length; i++) {
		if (this.charAt(i).toLowerCase() == 'a' || this.charAt(i).toLowerCase() == 'e' || this.charAt(i).toLowerCase() == 'i' || this.charAt(i).toLowerCase() == 'o' || this.charAt(i).toLowerCase() == 'u') {
		    count++;
		}
	}

	return count; 
};

String.prototype.consonantCount = function() {
	var count = 0;
	for (var i = 0; i < this.length; i++) {
		if (this.charAt(i).toLowerCase() != 'a' && this.charAt(i).toLowerCase() != 'e' && this.charAt(i).toLowerCase() != 'i' && this.charAt(i).toLowerCase() != 'o' && this.charAt(i).toLowerCase() != 'u') {
		    count++;
		}
	}

	return count; 
};

// Now, whenever we create a string, we can get the vowel count
var newString = "This is a new string, how many vowels does it have?";
var newString2 = "Another new string, woohoo!";

console.log("Vowel Count");
console.log(newString.vowelCount());
console.log(newString2.vowelCount());

console.log("Consonant Count");
console.log(newString.consonantCount());
console.log(newString2.consonantCount());

// Prototypes are very useful when you know you'll be using a function with an
// object often

// Let's build an object of our own
var coat = {
	size: 'L',
	gender: 'mens',
	material: 'wool'
};

// now, let's use our parent coat object to create a child object
var summerCoat = Object.create(coat);
summerCoat.isWaterproof = true;
summerCoat.material = 'polyester';

console.log("Coat and Summer Coat Materials");
console.log(coat.material);
console.log(summerCoat.material);

// use isPrototypeOf to see if an object is a prototype of another object
console.log(summerCoat.isPrototypeOf(coat));	// false!
console.log(coat.isPrototypeOf(summerCoat));	// true!

// Let's create a constructor function for our coat, so that we're
// not always stuck with the same initial variables
function Coat(size, gender, material) {
	this.size = size;
	this.gender = gender;
	this.material = material;
	this.coatInfo = function() {
		console.log("The "+this.gender+"'s coat is size "+this.size+" and made of "+this.material+".");
	};
}

console.log("My Coat");
var myCoat = new Coat('S', 'women', 'cotton');
myCoat.coatInfo();

// we can now add a new attributes and methods to the Coat prototype
Coat.prototype = {
	isCoatWaterproof: function() {
		if (this.isWaterproof) {
			console.log("It is waterproof");
		}
		else {
			console.log("It isn't waterproof");
		}
	}
}

console.log("New Summer Coat");
var newSummerCoat = new Coat('M', 'mens', 'nylon');
newSummerCoat.isWaterproof = true;
newSummerCoat.coatInfo();
newSummerCoat.isCoatWaterproof();
