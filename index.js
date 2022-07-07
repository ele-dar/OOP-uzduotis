import chalk from 'chalk';

function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const grauztukai = new Map();

class Vaisius {
	constructor() {
		this.dydis = rand(5, 25);
		this.id = rand(1000000, 9999999);
		this.prakastas = false;
	}
	prakasti() {
		this.prakastas = true;
		return this;
	}
}

class Krepsys {
	static vaisiai = [];
	static pripildyti() {
		while (this.vaisiai.length < 20) {
			this.vaisiai.push(new Vaisius());
			this.vaisiai.sort((a, b) => b.dydis - a.dydis);
		}
		return this;
	}
	static isimti() {
		return this.vaisiai.shift();
	}
}

const ismesti = (vaisius) => {
	vaisius.prakasti();
	grauztukai.set(vaisius.id, vaisius);
};

console.log(chalk.bgBlueBright('Pripildom krepšį:'));
console.log(Krepsys.pripildyti().vaisiai);

console.log(chalk.bgBlueBright('Išimam kažkiek vaisių ir sudedam prie graužtukų:'));
ismesti(Krepsys.isimti());
ismesti(Krepsys.isimti());
ismesti(Krepsys.isimti());
ismesti(Krepsys.isimti());
ismesti(Krepsys.isimti());
console.log(grauztukai);

console.log(chalk.bgBlueBright('Krepšyje liko šie vaisiai:'));
console.log(Krepsys.vaisiai);

console.log(chalk.bgBlueBright('Vėl pripildom krepšį:'));
console.log(Krepsys.pripildyti().vaisiai);
