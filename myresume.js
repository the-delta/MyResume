
var education = {
  "schools": [
    {
      "SchoolName" : "Shri Vaishnav Academy",
      "YearJoined" : "2001",
      "YearLeft" : "2003",
      "Location" : "Indore"
    },
    {
      "SchoolName" : "Shri Kasera Bajar Vidya Niketan",
      "YearJoined" : "2003",
      "YearLeft" : "2005",
      "Location" : "Indore"
    },
    {
      "SchoolName" : "Chattrapati Shivaji Public School",
      "YearJoined" : "2005",
      "YearLeft" : "2008",
      "Location" : "Indore"
    },
    {
      "SchoolName" : "Chameli Devi Public School",
      "YearJoined" : "2008",
      "YearLeft" : "2015",
      "Location" : "Indore"
    }
  ],
  "college": [
    {
      "CollegeName" : "Shri Vaishnav Institute of Technology and Science",
      "YearJoined" : "2015",
      "Degree" : "B.E",
      "Location" : "Indore"
    }
  ],
  "online": [
		{
			"onlineTitle": "Learning HTML & CSS",
			"onlineSchool": "Udemy",
			"onlineDates": 2016,
			"onlineURL": "https://www.udemy.com/how-i-landed-a-web-development-job-earned-5k-freelancing/learn/v4/"
		},
		{
			"onlineTitle": "Intro to JavaScript: Drawing And Animation",
			"onlineSchool": "Khan Academy",
			"onlineDates": 2016,
			"onlineURL": "https://www.khanacademy.org/computing/computer-programming/programming"
		},
		{
			"onlineTitle": "JavaScript Basics",
			"onlineSchool": "Udacity",
			"onlineDates": 2016,
			"onlineURL": "https://classroom.udacity.com/courses/ud804"
		},
		{
			"onlineTitle": "Programming Foundations with Python",
			"onlineSchool": "Udacity",
			"onlineDates": 2016,
			"onlineURL": "https://classroom.udacity.com/courses/ud036"
		},
		{
			"onlineTitle": "How to use GIT and Github",
			"onlineSchool": "Udacity",
			"onlineDates": 2016,
			"onlineURL": "https://classroom.udacity.com/courses/ud775"
		},
		{
			"onlineTitle": "Web Development",
			"onlineSchool": "Udacity",
			"onlineDates": 2016,
			"onlineURL": "https://classroom.udacity.com/courses/cs253"
		},
		{
			"onlineTitle": "Introduction to Public Speaking",
			"onlineSchool": "Coursera",
			"onlineDates": 2016,
			"onlineURL": "https://www.coursera.org/"
		}
	],
  "skills": [
    "HTML",
    "CSS",
    "BootStrap",
    "JavaScript",
    "JQuery",
    "Python",
    "C",
    "C++",
    "Java",
    "MySQL"
  ]
}

//var title = '%data%';
//var container = '';
//var nameTitle = '<div class="nameTitle">%data%</div>';
//var degree = '<div class="degree">%data%</div>';
//var url = '<div class="url"><span class="link">Link : </span>%data%</div>';





//Functions to append or prepend content
function buildOpenWindowSchool() {
  document.getElementById('openWindow').style.display = "block";
  document.getElementById('openWindow').style.backgroundImage = 'url("myimages/school.png")';
  var heading = document.createElement("H2");
  heading.className = 'containerTitle containerTitleSchools';
  var title = document.createTextNode("Schools");
  heading.appendChild(title);
  document.getElementById('openWindow').appendChild(heading);
  var school;
  var count = 0;
  for(school in education.schools)
  {
    var container = document.createElement("DIV");
    container.className = 'containerInContainer containerInContainerSchool';
    document.getElementById('openWindow').appendChild(container);

    var nameTitleContainer = document.createElement("DIV");
    nameTitleContainer.className = 'nameTitleContainerSchools';
    var nameTitle = document.createTextNode(education.schools[school].SchoolName);
    nameTitleContainer.appendChild(nameTitle);
    var dateContainer = document.createElement("DIV");
    dateContainer.className = 'dateContainer';
    var date = document.createTextNode(education.schools[school].YearJoined +"-"+ education.schools[school].YearLeft);
    dateContainer.appendChild(date);
    var locationContainer = document.createElement("DIV");
    locationContainer.className = 'locationContainer';
    var location = document.createTextNode("Location : "+education.schools[school].Location);
    locationContainer.appendChild(location);
    document.getElementsByClassName('containerInContainerSchool')[count].appendChild(nameTitleContainer);
    document.getElementsByClassName('containerInContainerSchool')[count].appendChild(dateContainer);
    document.getElementsByClassName('containerInContainerSchool')[count].appendChild(locationContainer);
    count++;
  }
}

function buildOpenWindowCollege() {
  document.getElementById('openWindow').style.display = "block";
  document.getElementById('openWindow').style.backgroundImage = 'url("myimages/svits.png")';
  var heading = document.createElement("H2");
  heading.className = 'containerTitle containerTitleCollege';
  var title = document.createTextNode("College");
  heading.appendChild(title);
  document.getElementById('openWindow').appendChild(heading);
  var college;
  var count = 0;
  for(college in education.college)
  {
    var container = document.createElement("DIV");
    container.className = 'containerInContainer containerInContainerCollege';
    document.getElementById('openWindow').appendChild(container);

    var nameTitleContainer = document.createElement("DIV");
    nameTitleContainer.className = 'nameTitleContainer nameTitleContainerCollege';
    var nameTitle = document.createTextNode(education.college[college].CollegeName);
    nameTitleContainer.appendChild(nameTitle);
    var dateContainer = document.createElement("DIV");
    dateContainer.className = 'dateContainer';
    var date = document.createTextNode(education.college[college].YearJoined);
    dateContainer.appendChild(date);
    var degreeContainer = document.createElement("DIV");
    degreeContainer.className = 'degreeContainer';
    var degree = document.createTextNode("Degree : "+education.college[college].Degree);
    degreeContainer.appendChild(degree);
    var locationContainer = document.createElement("DIV");
    locationContainer.className = 'locationContainer';
    var location = document.createTextNode("Location : "+education.college[college].Location);
    locationContainer.appendChild(location);
    document.getElementsByClassName('containerInContainerCollege')[count].appendChild(nameTitleContainer);
    document.getElementsByClassName('containerInContainerCollege')[count].appendChild(dateContainer);
    document.getElementsByClassName('containerInContainerCollege')[count].appendChild(degreeContainer);
    document.getElementsByClassName('containerInContainerCollege')[count].appendChild(locationContainer);
    count++;
  }
}

function buildOpenWindowOnline() {
  document.getElementById('openWindow').style.display = "block";
  document.getElementById('openWindow').style.backgroundImage = 'url("myimages/online.png")';
  document.getElementById('openWindow').style.backgroundRepeat = 'no-repeat';
  document.getElementById('openWindow').style.backgroundSize = '100% 100%';
  var heading = document.createElement("H2");
  heading.className = 'containerTitle containerTitleOnline';
  var title = document.createTextNode("Online Courses");
  heading.appendChild(title);
  document.getElementById('openWindow').appendChild(heading);
  var online;
  var count = 0;
  for(online in education.online)
  {
    var container = document.createElement("DIV");
    container.className = 'containerInContainer containerInContainerOnline';
    document.getElementById('openWindow').appendChild(container);

    var nameTitleContainer = document.createElement("DIV");
    nameTitleContainer.className = 'nameTitleContainer nameTitleContainerOnline';
    var nameTitle = document.createTextNode(education.online[online].onlineTitle);
    console.log("hello");
    nameTitleContainer.appendChild(nameTitle);
    var onlineSchoolContainer = document.createElement("DIV");
    onlineSchoolContainer.className = 'onlineSchoolContainer';
    var onlineSchools = document.createTextNode("School : "+education.online[online].onlineSchool);
    onlineSchoolContainer.appendChild(onlineSchools);
    var dateContainer = document.createElement("DIV");
    dateContainer.className = 'dateContainer';
    var date = document.createTextNode(education.online[online].onlineDates);
    dateContainer.appendChild(date);
    var linkContainer = document.createElement("DIV");
    linkContainer.className = 'linkContainer';
    var link = document.createTextNode("Link : "+education.online[online].onlineURL);
    linkContainer.appendChild(link);
    document.getElementsByClassName('containerInContainerOnline')[count].appendChild(nameTitleContainer);
    document.getElementsByClassName('containerInContainerOnline')[count].appendChild(onlineSchoolContainer);
    document.getElementsByClassName('containerInContainerOnline')[count].appendChild(dateContainer);
    document.getElementsByClassName('containerInContainerOnline')[count].appendChild(linkContainer);
    count++;
  }
}

function buildOpenWindowSkills() {
  document.getElementById('openWindow').style.display = "block";
  document.getElementById('openWindow').style.backgroundImage = 'url("myimages/skills.png")';
  document.getElementById('openWindow').style.backgroundRepeat = 'no-repeat';
  document.getElementById('openWindow').style.backgroundSize = '100% 100%';
  var heading = document.createElement("H2");
  heading.className = 'containerTitle containerTitleSkills';
  var title = document.createTextNode("Skills");
  heading.appendChild(title);
  document.getElementById('openWindow').appendChild(heading);
  var skill;
  var count = 0;
  for(skill in education.skills)
  {
    var container = document.createElement("DIV");
    container.className = 'containerInContainer containerInContainerSkills';
    document.getElementById('openWindow').appendChild(container);

    var nameTitleContainer = document.createElement("DIV");
    nameTitleContainer.className = 'nameTitleContainer nameTitleContainerSkills';
    var nameTitle = document.createTextNode(education.skills[skill]);
    nameTitleContainer.appendChild(nameTitle);
    document.getElementsByClassName('containerInContainerSkills')[count].appendChild(nameTitleContainer);
    count++;
  }
}

function closeOpenWindow() {
  document.getElementById('openWindow').innerHTML = '<div onclick="closeOpenWindow()" id="backButton">&#171;</div>';
  document.getElementById('openWindow').style.display = "none";
}
