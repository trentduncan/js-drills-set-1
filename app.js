
const yearOfBirth = function(age) {
	let yearOfBirth = 2018 - age;
	console.log(yearOfBirth);

}

const whoAmI = function(name, age){
	let yearOfBirth = 2018 - age;
	console.log(`Hi My name is ${name} and I am ${age} years old`);
	console.log(`I was born in ${yearOfBirth}`);
}
whoAmI('Trent', 25);

yearOfBirth(25);

