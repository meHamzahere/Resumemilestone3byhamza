var _a;
// dynamic_script.ts
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get the input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Handle image upload
    var profilePicInput = document.getElementById('profilePic');
    var profilePicURL = '';
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            generateResume(name, email, education, experience, skills, profilePicURL);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    else {
        generateResume(name, email, education, experience, skills, '');
    }
});
function generateResume(name, email, education, experience, skills, profilePicURL) {
    var skillsList = skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
    var profilePicHTML = profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\">") : '';
    var resume = "\n        ".concat(profilePicHTML, "\n        <h2>").concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <ul>").concat(skillsList, "</ul>\n    ");
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resume;
        resumeOutput.classList.add('active'); // Apply the fade-in animation
    }
}
