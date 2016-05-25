//asking if the user wants to play
(function play () {
var useranswer = prompt("Hello! Would you like to play?").toLowerCase();
if(useranswer === "yes"){
	console.log("Ok! Have fun and good luck!");
} else if(useranswer === "no"){
  console.log("Aww thats too bad.");
  return;
} else if( useranswer !== "yes" || useranswer !== "no"){
  console.log("Sorry didn't understand that.")
};

})();

//creating user name and choosing random name
var userAnswer2 = prompt("Would you like to name your character? If you dont want to a random name will be given.").toLowerCase();
if(userAnswer2 === "yes"){
  var name = prompt("Please enter the name of your character.");
  console.log("Your character's name is " + name + ".");
} else if(userAnswer2 === "no"){
	console.log("Ok then a name will be given.");
    CharacterName();
    console.log("Your character's name is " + CharacterName() + ".")

} else if(userAnswer2 !== "yes" || useranswer !== "no" ){
     console.log("Sorry didnt understand that.");
};

// random name generation
function CharacterName(name){
	this.names = ["bob", "jim", "Kalgormac"];
	if(name === "" || typeof name === "undefined"){
     this.name = this.names[Math.random() * 3].length;
	} 
	
};