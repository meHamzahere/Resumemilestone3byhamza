// dynamic_script.ts
document.getElementById('resumeForm')?.addEventListener('submit', function (e: Event): void {
    e.preventDefault();

    // Get the input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Handle image upload
    const profilePicInput = (document.getElementById('profilePic') as HTMLInputElement);
    let profilePicURL = '';
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicURL = e.target?.result as string;
            generateResume(name, email, education, experience, skills, profilePicURL);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        generateResume(name, email, education, experience, skills, '');
    }
});

function generateResume(name: string, email: string, education: string, experience: string, skills: string, profilePicURL: string): void {
    const skillsList = skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
    const profilePicHTML = profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture">` : '';

    const resume = `
        ${profilePicHTML}
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <ul>${skillsList}</ul>
    `;

    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resume;
        resumeOutput.classList.add('active');  // Apply the fade-in animation
    }
}
