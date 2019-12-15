function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

class Human {
	constructor(name, lastName) {
		this.name = name;
		this.lastName = lastName;
		this._appealPrefix = 'Hello';
	}

	get appealToPerson() {
		return `${this._appealPrefix}, ${this.name} ${this.lastName}`
	}

	set appealPrefix(prefix) {
		this._appealPrefix = prefix;
	}
}

class AgingHuman extends Human {
	constructor(name, lastName, age=null) {
		super(name, lastName);
		this._age = age;
		this._moo = function*() {
			yield 'Come on, humans don\'t moo';
			yield 'Seriously, do you really expect me to moo?';
			yield 'Not gonna happen!';
			yield 'Still not gonna moo';
			yield '...';
			yield '...';
			yield Math.random() < 0.5 ? 'mooooo' : 'I\'m tired of this. Go bother someone else';
		}();
	}

	get age() { 
		return this._age 
	};
	set age(age) { 
		if (age < 0) {
			throw 'Humans cant be negative years old!';
		}
		this._age = age;
	}

	get moo() {
		var response = this._moo.next();
		if (response.done) {
			return 'There is nothing to see here';
		}
		return response.value;
	}

	get isAdult() {
		if (!this._age) {
			throw "Age is not set";
		}
		return this._age >= 18;
	}

	get bio() {
		return `${this.name} ${this.lastName}, ${this.age}`
	}
}

var names = ['Joe', 'William', 'Mary', 'Lucy', 'Boris'];
var lastNames = ['Jones', 'Stuart', 'Smith'];

var agingList = []
for (var i=0; i < 10; i++) {
	var newHuman = new AgingHuman(
		names[getRandomInt(names.length)],
		lastNames[getRandomInt(lastNames.length)],
		getRandomInt(99)
	);
	agingList.push(newHuman);
}

var evenOnly = agingList.filter((el, idx) => idx % 2 == 0);
var adultOnly = agingList.filter(el => el.isAdult);
var underagedNamesOnly = agingList.map(
		function(el) {
			if (!el.isAdult) {
				return el.name;
			}
		} 
	).filter(el => !!el);

console.log(agingList.map(el => el.bio).join('; ')); 
console.log(evenOnly.map(el => el.bio).join('; '));
console.log(underagedNamesOnly.join(', '));

var h = new Human('Adolf', 'Hitler');
var underagedHuman = new AgingHuman('Billy', 'Milligan', 12);
console.log(h.appealToPerson);
h.appealPrefix = 'Go fuck yourself'
console.log(h.appealToPerson);
console.log(underagedHuman.bio);