const yearOfBirth = function(age) { 
	try { 
		if (age < 0) { 
			throw new Error("Age can not be negative"); 
		} 
	} catch(error) { 
		console.error(error); 
	}
	return 2018 - age; }

const whoAmI = function(name, age){
	let yearOfBirth = 2018 - age;
	if (typeof name !== 'string' || typeof age !== 'number' || age < 0 ) {
		throw new Error("Arguments not valid");
	}
	console.log(`Hi My name is ${name} and I am ${age} years old`);
	console.log(`I was born in ${yearOfBirth}`);
}
whoAmI('Trent', 25);

// console.log(yearOfBirth(-2));