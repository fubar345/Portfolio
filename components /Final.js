//asking if the user wants to play
(function play () {
	var useranswer = prompt("Hello! Would you like to play?").toLowerCase();
	if(useranswer === "yes"){
		console.log("Ok! Have fun and good luck!");
		Name();
	} else if(useranswer === "no"){
		console.log("Aww thats too bad.");
		return;
	} else if( useranswer !== "yes" || useranswer !== "no"){
		console.log("Sorry didn't understand that.");
		return;		
	};
})();

//creating user name and choosing random name
function Name () {
	var userAnswer2 = prompt("Would you like to name your character? If you dont want to a random name will be given.").toLowerCase();
	var charactername = new CharacterName();
	if(userAnswer2 === "yes"){
		charactername.name = prompt("Please enter the name of your character.");
		console.log("Your character's name is " + character.name + ".");
		choice1();
	} else if(userAnswer2 === "no"){
		console.log("Ok then a name will be given.");
		console.log("Your character's given name is " + charactername.name + ".");
	} else if(userAnswer2 !== "yes" || useranswer !== "no" ){
		console.log("Sorry didnt understand that.");
		return;

	};
};

//User's first choice
function choice1 () {
	var useranswer3 = prompt( charactername.name + " walks down a heavily forested path. They reach a fork in the path. Will they go right or left?").toLowerCase();
	if(useranswer3 === "right"){
		console.log( charactername.name + " has reached the end of the right pathway. A massive mountain stands in their way and they cannot return the way they came. Your character has reached the end of their journey.");
		console.log("GAME OVER!");
		return;
	} else if( useranswer3 === "left"){
		console.log(charactername.name + " wanders down the left path. They reach a clearing in the dense forest.");
		choice2();
	}else if (useranswer3 !== "right" || useranswer3 !== "left"){
		console.log("Sorry didn't understand that.");
		return;
	};

};
//User's second choice
function choice2 (){
	var useranswer4 = prompt("Will " + charactername.name + " enter the clearing?").toLowerCase();
	if(useranswer4 === "yes"){
		console.log( charactername.name + " enters the clearing. After about an hour of traveling in the open they come to the end of the clearing and the forest!");
		console.log("Your character has made it out of the forest! You win!");
	} else if (useranswer4 === "no"){
		var useranswer5 = prompt("Will you return to the first path?");
		if(useranswer5 === "yes"){
			choice1();
		} else if (useranswer5 === "no"){
			console.log(charactername.name + " has gotten lost in the forest.");
			console.log("GAME OVER!");
			return;
		};
	}else if(useranswer4 !== "yes" || useranswer4 !== "no"){
		console.log("Sorry didn't understand that.");
		return;
	};
};



// random name generation
function CharacterName(name){
	this.names = ["bob", "jim", "Kalgormac"];
	if(name === "" || typeof name === "undefined"){
		this.name = this.names[Math.floor(Math.random() * 3)];
	} 

};