//$("#main").append(["Jeremy Willes "])

//console.log("Jeremy Willes");

//var awesomeThoughts = "I am Jeremy and I am AWESOME!";

//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);

var name = "Jeremy Willes";
var role = "Web Developer";



var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//if we used .append, is appended AFTER the header tag
//order matters, prepend works backward

//var skills = ["Sales", "Big Data", "FE Developer"];

var bio = {
	"fname": "Jeremy Willes",
	"krole": "Account Executive",
	"contact": {
		"email": "jeremywilles@gmail.com",
		"mobile": "630-818-7810",
		"twitter": "@jeremywilles",
		"github" : "jeremywilles",
		"location": "Chicago, IL"
	},
	"picture": "",
	"message": "Greetings!"
	"skills" : ["Sales", "Big Data", "FE Developer"]
};









