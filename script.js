var _a;
//listing element//
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // type assertion//
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //*****/
    var usernameElement = document.getElementById("username");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/|s+/g, ''), "_cv.html");
        //create resume Output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> <span id=\"edit.name\" class=\"editable\">".concat(name_1, " </span></p>\n    <p><strong>Email:</strong> <span id=\"edit.email\" class=\"editable\">").concat(email, "</span> </p>\n    <p><strong>Phone:</strong><span id=\"edit.phone\" class=\"editable\"> ").concat(phone, " </span></p>\n    \n    <h3>Education</h3>\n    <p id=\"edit.education\" class=\"editable\">").concat(education, "</p>\n    \n    <h3>Work Experience</h3>\n    <p id=\"edit.experience\" class=\"editable\">").concat(experience, "</p>\n    \n\n    <h3>Skills</h3>\n    <pid=\"edit.skills\" class=\"editable\">").concat(skills, "</p>\n    ");
        var downloadlink = document.createElement('a');
        downloadlink.href = 'data:text/HTMLAllCollection;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadlink.download = uniquePath;
        downloadlink.textContent = 'Download Your 2024 REsume';
        //Display the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadlink);
            makeEditable();
        }
        else {
            console.error('the resume output element are missing');
        }
    }
    else {
        console.error('the resume output element are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content//
            if (currentElement.tagName === "p" || currentElement.tagName === 'span') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
