document.getElementById("createResume").addEventListener("click", myWindow)
function myWindow()
{
    userName = document.getElementById("userName").value;
    userAddress = document.getElementById("userAddress").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    skillsOne = document.getElementById("skillsOne").value;
    skillsTwo = document.getElementById("skillsTwo").value;
    skillsThree = document.getElementById("skillsThree").value;
    otherSkills = document.getElementById("otherSkills").value;
    school = document.getElementById("school").value;
    schoolLoc = document.getElementById("schoolLoc").value;
    degree = document.getElementById("degree").value;
    graduation = document.getElementById("graduation").value;
    edDetails = document.getElementById("edDetails").value;
    jobLoc1 = document.getElementById("jobLoc1").value;
    job1 = document.getElementById("job1").value;
    hireDate1 = document.getElementById("hireDate1").value;
    endDate1 = document.getElementById("endDate1").value;
    jobDetails1 = document.getElementById("jobDetails1").value;
    jobLoc2 = document.getElementById("jobLoc2").value;
    job2 = document.getElementById("job2").value;
    hireDate2 = document.getElementById("hireDate2").value;
    endDate2 = document.getElementById("endDate2").value;
    jobDetails2 = document.getElementById("jobDetails2").value;
    jobLoc3 = document.getElementById("jobLoc3").value;
    job3 = document.getElementById("job3").value;
    hireDate3 = document.getElementById("hireDate3").value;
    endDate3 = document.getElementById("endDate3").value;
    jobDetails3 = document.getElementById("jobDetails3").value;
    jobRef = document.getElementById("jobRef").value;
    otherSkills2 = document.getElementById("otherSkills2").value;
    job1Resp1 = document.getElementById("job1Resp1").value;
    job1Resp2 = document.getElementById("job1Resp2").value;
    job2Resp1 = document.getElementById("job2Resp1").value;
    job2Resp2 = document.getElementById("job2Resp2").value;
    job3Resp1 = document.getElementById("job3Resp1").value;
    job3Resp2 = document.getElementById("job3Resp2").value;

    if (email != "ex. example@gmail.com") {
        myText = ("<html>\n<head>\n<title>Resume</title>\n<link rel='stylesheet' href='index.css'/>\n</head>\n<body>\n");
        myText += ("<header class='banner'>\n<h1>" + userName + "</h1>\n<h2>" + userAddress + " - " + phone + " - " + email + "</h2>\n</header>\n");
        myText += ("<h3>Skills</h3>\n<hr>\n<ul>\n<li>" + skillsOne + "</li>\n<li>" + skillsTwo + "</li>\n<li>" + skillsThree + "</li>\n</ul>\n");
        myText += ("<h3>Toolbox</h3>\n<hr>\n<h5 class='left'>Technical Skills:</h5>\n<p class='right'>" + otherSkills + "</p>\n<h5 class='left'>Other skills:</h5>\n<p class='right'>" + otherSkills2 + "</p>\n");
        myText += ("<h3>Education</h3>\n<hr>\n<h4>" + school + " - " + schoolLoc + "</h4>\n<p>" + degree + ", " + graduation + "</p>\n<p>" + edDetails + "</p>\n");
        myText += ("<h3>Employment</h3>\n<hr>\n<h4>" + jobLoc1 + "</h4>\n<p class='bold'>" + job1 + ", " + hireDate1 + " to " + endDate1 + "</p>\n<p>" + jobDetails1 + "</p>\n<ul>\n<li>" + job1Resp1 + "</li>\n<li>" + job1Resp2 + "</li>\n</ul>\n");
        if (job2 != "ex. Customer Service") {
            myText += ("<h4>" + jobLoc2 + "</h4>\n<p class='bold'>" + job2 + ", " + hireDate2 + " to " + endDate2 + "</p>\n<p>" + jobDetails2 + "</p>\n<ul>\n<li>" + job2Resp1 + "</li>\n<li>" + job2Resp2 + "</li>\n</ul>\n");
        };
        if (job3 != "ex. Customer Service") {
            myText += ("<h4>" + jobLoc3 + "</h4>\n<p class='bold'>" + job3 + ", " + hireDate3 + " to " + endDate3 + "</p>\n<p>" + jobDetails3 + "</p>\n<ul>\n<li>" + job3Resp1 + "</li>\n<li>" + job3Resp2 + "</li>\n</ul>\n");
        };
        myText += ("<h3>Reference</h3>\n<hr>\n<p>" + jobRef + "</p>\n");
        myText += ("</body>\n</html>");
        

    flyWindow = window.open('about:blank','myPop','width=1600,height=800,left=200,top=200');
    flyWindow.document.write(myText);
    } else {
        alert("Error: Please enter an email")
    };

}

