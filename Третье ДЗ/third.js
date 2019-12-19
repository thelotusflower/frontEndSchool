/**
* реализовать функцию-конструктор копилки
* - номер счета - 3-х значное число, начиная с 1
* - если номер меньше трехзначного числа, слева заполняем нулями
* - состояние счета при создании, учитывается в транзакциях
*/
function Moneybox(accountNumber, balance) {
	this.accountNumber = (
		(accountNumber) => {
			if (accountNumber < 1 || accountNumber > 999) {
				throw "accountNumber must be greater than 1 and less than 999";
			}
			accountNumber = '' + accountNumber;

			return '' + '0'.repeat(3 - accountNumber.length) + accountNumber;
		})(accountNumber || 1);
	this.balance = balance || 0;
	this.transactions = [];
}

/**
* реализовать получение информации о состоянии копилки
* вывод должен быть в формате
*
* ***
* Номер: 001
* На счету: 150
* Транзакции: 200, -100, 50
* ***
*/
function getMoneyboxInfo() {
	return '***\n' + 
		   `Номер: ${this.accountNumber}\n` +
		   `На счету: ${this.balance}\n` +
		   `Транзакции: ${this.transactions.join(', ') || '...'}\n` +
		   '***\n'
}

/**
* реализовать добавление в копилку
*/
function addToMoneybox() {
	this.moneybox.balance += this.amount;
	this.moneybox.transactions.push(this.amount);
}

/**
* реализовать изъятие из копилки
*/
function takeFromMoneybox() {
	this.moneybox.balance -= this.amount;
	this.moneybox.transactions.push(this.amount);	
}

const moneybox1 = new Moneybox(100);
const moneybox2 = new Moneybox;

/**
* пиши код ниже
*/

function add100ToMoneybox1() {
	var obj = {
		amount: 100,
		moneybox: moneybox1,
		addToMoneybox: addToMoneybox
	}
	obj.addToMoneybox();
}

function addToMoneybox2(amount) {
	var obj = {
		amount: amount,
		moneybox: moneybox2,
		addToMoneybox: addToMoneybox
	}
	obj.addToMoneybox();
}

function take250FromMoneybox2() {
	var obj = {
		amount: 250,
		moneybox: moneybox2,
		takeFromMoneybox: takeFromMoneybox
	}
	obj.takeFromMoneybox();
}


function take10FromMoneybox1() {
	var obj = {
		amount: 10,
		moneybox: moneybox1,
		takeFromMoneybox: takeFromMoneybox
	}
	obj.takeFromMoneybox();
}

/**
* пиши код выше
*/


/**
* используя addToMoneybox и takeFromMoneybox определи следующие функции
*/
add100ToMoneybox1();    // добавит 100 в moneybox1
addToMoneybox2(500);    // добавит 500 в moneybox2
take250FromMoneybox2(); // изымает 250 из moneybox2
take10FromMoneybox1();  // изымает 10 из moneybox1
console.log(getMoneyboxInfo.call(moneybox1));
console.log(getMoneyboxInfo.call(moneybox2));