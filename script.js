const education = document.getElementById('edu');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const accomp = document.getElementById('accomp');
const contact = document.getElementById('contact');




function changeText(){
    document.getElementById("text").innerHTML = "My name is Rodaina Aldahshan. I am a Web development intern at Prodigy InfoTech. Feel free to explore my skills and projects. Feel free to contact me.";
}

function changeEdu(){
    document.getElementById("text").innerHTML = "    <h1>Education</h1> <p>I'm an ex-IGCSE student. I am currently in my second year of college studying Computing and Information Systems at EUI.</p>";
}

function changeSkills(){
    document.getElementById("text").innerHTML = `
     <h1>Skills</h1>
        <p>Skills I have acquired as a web developer:</p>
        <ul>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Responsive Web Design</li>
            <li>To do list web application</li>
        </ul>
    `;
}

function changeProjects(){
    document.getElementById("text").innerHTML = `
        <h1>Projects</h1>
        <p>Projects I have worked on:</p>
        <ul>
            <li>Responsive Landing Page</li>
            <li>Stopwatch Application</li>
            <li>Tic-Tac-Toe Game</li>
        </ul>
        <h3 id="linkgithub">Check out the projects' codes on <a href="https://github.com/dashboard" alt="github account">Github</a>!</h3>
    `;

}

function changeAccomp(){
    document.getElementById("text").innerHTML = `
        <h1>Accomplishments</h1>
        <p>Throughout my journey as a web developer, I've had the opportunity to achieve the following:</p>
        <ul>
            <li>Successfully developed a <strong>Tic-Tac-Toe Game</strong> using HTML, CSS, and JavaScript.</li>
            <li>Created a <strong>Stopwatch Application</strong> that accurately tracks time with start, stop, and reset functionalities.</li>
            <li>Designed and developed a <strong>Personal Portfolio Website</strong> to showcase my skills, projects, and professional background.</li>
        </ul>
    `;
}

function changeContact(){
    document.getElementById("text").innerHTML = `
        <h1>Contact</h1>
        <p>Phone number: +20#########</p>
        <p>Email: rodaina@gmail.com</p>
        <p>Or leave a message </p>
        <input type="email" placeholder="Enter your email">
        <input type="text" placeholder="your message"> <button>Submit</button>
    `;

}

contact.style.cssText = 'p {font-size:10px;}'
