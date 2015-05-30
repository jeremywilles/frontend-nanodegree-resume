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
			"location": "Chicago, Il",
			"role": "Account Executive",
			"years": "2012 - Present",
			"description": "Responsible for selling and negotiating contracts with OEM partners across the globe. "
		
		},
		{
			"name": "IBM",
			"location": "Chicago, Il",
			"role": "Account Representative",
			"years": "2010 - 2012",
			"description": "Consultative selling to mid­market commercial accounts within the United States."
		},
		{
			"name": "SPSS Inc.",
			"location": "Chicago, Il",
			"role": "Account Representative",
			"years": "2004 - 2010",
			"description": "Consultative selling to Department of Defense accounts within the United States."
		}]
}

work.displayWork = function(){
	for (job in work.company){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.company[job].name);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.company[job].role);
		var formattedEmployerTitle = formattedEmployer + formattedTitle
		var formattedDates = HTMLworkDates.replace("%data%", work.company[job].years);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.company[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.company[job].description)
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);

	//var formattedDates = HTMLworkDates.replace("%data%", work.company[job].years);
	//$(".")
	}	
}



var education = {
	"schools" : [
		{
			"name": "Northern Illinois University",
			"location": "Naperville, Illinois",
			"degree": "MBA",
			"major" : "Information Systems",
			"years": "2008 - 2011"

		},
		{
			"name": "University of Phoenix",
			"location": "Warrenville, Illinois",
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

var projects = {
	"list" : [
		{
			"title": "Portfolio Site",
			"dates": "May 2015",
			"description": "Udacity Front End Nanodegree project showcasing HTML, CSS, Bootstrap, and Responsive Design",
			"image": "images/fry.jpg"
		},
		{
			"title": "Online Resume",
			"dates": "May 2015",
			"description": "Udacity Front End Nanodegree project showcasing Javascript and jQuery",
			"image": "images/fry.jpg"
		}

	]


}

projects.display = function(){
		
	for (proj in projects.list){
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.list[proj].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.list[proj].dates);
		var formattedDescription= HTMLprojectDescription.replace("%data%", projects.list[proj].description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.list[proj].image);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImage);
	}
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





work.displayWork();

projects.display();

function inName(name){
	name = name.trim().split();
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+
	name[0].slice(1).toLowerCase();


	return name[0] + " " + name[1];

}

$('.main').append(internationalizeButton);

$("#mapDiv").append(googleMap);


