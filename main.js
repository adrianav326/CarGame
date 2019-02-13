//Variables
let car = {
	make: 'Tesla',
	model: 'Roadster',
	color: 'red',
	mileage: 0,
	isWorking: true,

	driveToWork() {
		alert(`Old Mileage: ${this.mileage}`);
		this.mileage = this.mileage + 10;
		alert(`New Mileage: ${this.mileage}`);
	};

}

//Functions
//logs all our cars current stats to the console
const rewriteStats() => {

}

//Main Process
//captures keyboard input depending on the letter pressed it will "call" (execute) at different functions 
 const document.onkeyup(event)=>{
 	//captures the key press. converts it to lowercase and sends it to the variable 
 	let letter = string.fromCarCode(events.keyCode).toLowerCase();

 	if (letter === 'd'){
 		car.driveToWork();
 		rewriteStats();
 	}
 }