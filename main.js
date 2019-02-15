//VARIABLES
let car = {
	make: 'Tesla',
	model: 'Roadster',
	color: 'red',
	mileage: 0,
	isWorking: true,

	driveToWork() {
		alert(`Old Mileage: ${this.mileage}`);
		this.mileage += 10;
		alert(`New Mileage: ${this.mileage}`);
	},

	driveAroundUSA() {
		alert(`Old Mileage: ${this.mileage}`);
		this.mileage += 7000;
		alert(`New Mileage: ${this.mileage}`);
		alert('Car needs a tune up!');
		this.isWorking = false;
	},

	getTuneUp() {
		alert('Car is fixed and ready to go!');
		this.isWorking = true;
	},

	honk() {
		alert('Beep! Beep!');
	},
}

//FUNCTIONS
//logs all our cars current stats to the console
const rewriteStats=() => {
	console.log(`Make: ${car.make}`);
	console.log(`Make: ${car.model}`);
	console.log(`Make: ${car.color}`);
	console.log(`Make: ${car.mileage}`);
	console.log(`Make: ${car.isWorking}`);
	console.log('-----------------------');

}

//MAIN PROCESS
//captures keyboard input depending on the letter pressed it will "call" (execute) at different functions 
 document.onkeyup = (event)=>{
 	//captures the key press. converts it to lowercase and sends it to the variable 
 	let letter = String.fromCharCode(event.keyCode).toLowerCase();

 	if (letter === 'd') {
 		car.driveToWork();
 		rewriteStats();
 	}

 	if (letter === 'r') {
 		car.driveAroundUSA();
 		rewriteStats();
 	}

 	if (letter === 't') {
 		car.getTuneUp();
 		rewriteStats();
 	}

 	if (letter === 'h') {
 		car.honk();
 		rewriteStats();
 	}
 }