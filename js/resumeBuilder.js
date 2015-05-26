//$("#main").append(["Jeremy Willes "])

//console.log("Jeremy Willes");

//var awesomeThoughts = "I am Jeremy and I am AWESOME!";

//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);

var name = "Jeremy Willes";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);


var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//if we used .append, is appended AFTER the header tag
//order matters, prepend works backward

var skills = ["Sales", "Big Data", "FE Developer"];

$("#main").append(skills);

