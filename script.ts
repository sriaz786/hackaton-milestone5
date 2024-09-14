//listing element//
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();
    // type assertion//
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    //*****/
    const usernameElement = document.getElementById(
        "username"
    ) as HTMLInputElement;
    
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement)  
    {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/|s+/g,'')}_cv.html`
    
    //create resume Output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> <span id="edit.name" class="editable">${name} </span></p>
    <p><strong>Email:</strong> <span id="edit.email" class="editable">${email}</span> </p>
    <p><strong>Phone:</strong><span id="edit.phone" class="editable"> ${phone} </span></p>
    
    <h3>Education</h3>
    <p id="edit.education" class="editable">${education}</p>
    
    <h3>Work Experience</h3>
    <p id="edit.experience" class="editable">${experience}</p>
    

    <h3>Skills</h3>
    <pid="edit.skills" class="editable">${skills}</p>
    `;

    const downloadlink = document.createElement('a')
    downloadlink.href = 'data:text/HTMLAllCollection;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadlink.download = uniquePath;
downloadlink.textContent ='Download Your 2024 REsume';


    //Display the resume output
    
const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput;
    resumeOutputElement.appendChild(downloadlink)
    makeEditable();
}
else {
    console.error('the resume output element are missing')
}
    } 
    else 
{
    console.error('the resume output element are missing')
}
    
});
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click' ,function() {
        const currentElement = element as HTMLElement;
        const currentValue = currentElement.textContent || "";

        // replace content//
        if(currentElement.tagName === "p" || currentElement.tagName ==='span')
        {
            const input = document.createElement('input')
            input.type = 'text'
            input.value = currentValue
            input.classList.add('editing-input')


            input.addEventListener('blur', function(){
                currentElement.textContent = input.value ;
                currentElement.style.display = 'inline'
                input.remove()
            })
            currentElement.style.display = 'none'
            currentElement.parentNode?.insertBefore(input,currentElement)
            input.focus()
        }
        })
})
}

