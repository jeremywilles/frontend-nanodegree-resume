//$("#main").append(["Jeremy Willes"]);

//console.log("Jeremy Willes");

//var awesomeThoughts = "I am Jeremy and I am AWESOME!";

//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);

//var name = "Jeremy Willes";
//var role = "Web Developer";
var bio = {
	"name": "Jeremy Willes",
	"role": "Account Executive",
	"contact": {
		"email": "jeremywilles@gmail.com",
		"mobile": "630-818-7810",
		"twitter": "@jeremywilles",
		"github" : "jeremywilles",
		"location": "Chicago, IL"
	},
	"picture": "images/fry.jpg",
	"message": "Greetings!",
	"skills" : ["Sales", "Big Data", "FE Developer"]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);

var formattedPic = HTMLbioPic.replace("%data%", bio.picture);

$("#header").prepend(formattedRole);
$("#header").prepend([formattedName]);
$("#header").append(formattedPic);
$("#header").append([formattedMobile, formattedEmail, formattedTwitter]);
//$("#header").append(formattedEmail);
//$("#header").append(formattedTwitter);


//if we used .append, is appended AFTER the header tag
//order matters, prepend works backward

//var skills = ["Sales", "Big Data", "FE Developer"];













