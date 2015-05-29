//bio, work, education and projects objects to be completed. 
//everything else can be deleted


var bio = {
	"name": "Jeremy Willes",
	"role": "Aspiring Front End Engineer",
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
}

var work = {
	"company": [
		{
			"name": "Infobright, Inc.",
			"city": "Chicago, Il",
			"role": "Account Executive",
			"years": "2012 - Present",
			"description": "Responsible for selling and negotiating contracts with OEM partners across the globe. "
		
		},
		{
			"name": "IBM",
			"city": "Chicago, Il",
			"role": "Account Representative",
			"years": "2010 - 2012",
			"description": "Consultative selling to mid­market commercial accounts within the United States."
		},
		{
			"name": "SPSS Inc.",
			"city": "Chicago, Il",
			"role": "Account Representative",
			"years": "2004 - 2010",
			"description": "Consultative selling to Department of Defense accounts within the United States."
		}]
}



var education = {
	"schools" : [
		{
			"name": "Northern Illinois University",
			"city": "Naperville, Illinois",
			"degree": "MBA",
			"major" : "Information Systems",
			"years": "2008 - 2011"

		},
		{
			"name": "University of Phoenix",
			"city": "Warrenville, Illinois",
			"degree": "BA",
			"major" : "Business Management and Administration",
			"years": "2004 - 2007"

		}
	], 

	"onlineCourses":[
		{
			"title": "FrontEnd Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}, 
		{
			"title": "6.00.1x Introduction to Computer Science and Programming Using Python",
			"school": "MITx",
			"dates": 2014,
			"url": "https://verify.edx.org/cert/51e9fc684e0049509da60fe6d6ee47dd"
		}, 
		{
			"title": "6.00.2x: Introduction to Computational Thinking and Data Science",
			"school": "MITx",
			"dates": 2014,
			"url": "https://verify.edx.org/cert/51e9fc684e0049509da60fe6d6ee47dd"
		},
		{
			"title": "Python I, II, III",
			"school": "Rice University - Coursera",
			"dates": 2014,
			"url": "https://www.coursera.org/specialization/fundamentalscomputing2/37"
		}


	]
}

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
var formattedbioPic = HTMLbioPic.replace("%data%", bio["picture"]);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

$('#header').append(formattedbioPic);

if (bio.skills.length > 0){
	
	$("#header").append(HTMLskillsStart);

	//var formattedSkills = HTMLskillsStart.replace("%data%",bio.skills);
	
	for(skill in bio.skills){
		var skills2 = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(skills2);
	}
} 

var displayWork = function(){
	for (job in work.company){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.company[job].name);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.company[job].role);
		var formattedEmployerTitle = formattedEmployer + formattedTitle
		var formattedDates = HTMLworkDates.replace("%data%", work.company[job].years);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.company[job].city);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.company[job].description)
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);

	//var formattedDates = HTMLworkDates.replace("%data%", work.company[job].years);
	//$(".")
	}	
}

displayWork();


