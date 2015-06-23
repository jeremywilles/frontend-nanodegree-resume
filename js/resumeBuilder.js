
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
};

bio.displayBio = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
	var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio["picture"]);
	var formattedMobile = HTMLmobile.replace("%data%", bio["contact"]["mobile"]);
	var formattedEmail = HTMLemail.replace("%data%", bio["contact"]["email"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio["contact"]["twitter"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio["contact"]["github"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio["contact"]["location"]);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio["message"]);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#topContacts').append(formattedMobile, formattedEmail,formattedTwitter,
		formattedGithub,formattedLocation);
	$('#header').append(formattedbioPic);
	$('#header').append(formattedWelcome);
		
	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills){
			var skills2 = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills:last").append(skills2);
		}
	} 
	$('#footerContacts').append(formattedMobile, formattedEmail,formattedTwitter,
		formattedGithub,formattedLocation);
};

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
};

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
	}	
};

var education = {
	"schools" : [
		{
			"name": "Northern Illinois University",
			"location": "Naperville, Illinois",
			"degree": "MBA",
			"major" : "Information Systems",
			"years": 2011
		},
		{
			"name": "University of Phoenix",
			"location": "Warrenville, Illinois",
			"degree": "BA",
			"major" : "Business Management and Administration",
			"years": 2007
		}], 

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
		}]
};

education.displayEdu = function(){
	
	var len = education.schools.length;
	$('#education').append(HTMLschoolStart);
	for(var i = 0; i<len; i++){
		var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[i].years);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		var nameTitle = formattedName+formattedDegree;
		$(".education-entry").append(nameTitle);
		$(".education-entry").append(formattedDate);
		$(".education-entry").append(formattedLocation);
		$(".education-entry").append(formattedMajor);
	}

	var len2 = education.onlineCourses.length;
	if(len2 > 0){
		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLschoolStart);
		
		for(var i = 0; i<len2; i++){
			var formattedOnline = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
			var fullName = formattedOnline+formattedSchool;
			$(".education-entry:last").append(fullName);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);
		}
	}
	
};

var projects = {
	"list" : [
		{
			"title": "Portfolio Site",
			"dates": "May 2015",
			"description": "Udacity Front End Nanodegree project showcasing HTML, CSS, Bootstrap, and Responsive Design",
			"image": "images/port.jpg"
		},
		{
			"title": "Online Resume",
			"dates": "May 2015",
			"description": "Udacity Front End Nanodegree project showcasing Javascript and jQuery",
			"image": "images/resume.jpg"
		}]

};

projects.displayProj = function(){
		
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
};


bio.displayBio();

work.displayWork();

projects.displayProj();

education.displayEdu();

$("#mapDiv").append(googleMap);


