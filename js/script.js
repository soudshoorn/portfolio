import projects from './projects.js';
const projectsList = document.querySelector('.project__list');

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    console.log('test');
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    } else {
        document.body.classList.remove("dark-theme");
    }
}

// function loadProjects() {
//     projects.map((project) => {
//         projectsList.innerHTML += "
//         <li class='project'>
//         <div class='project__wrapper'>
//             <img src='./assets/project-tictactoe.jpg' class='project__img' alt=''>
//             <div class='project__description'>
//                 <span class='project__type'>Featured Project</span>
//                 <h3 class='project__description--title'>
//                     Tic Tac Toe
//                 </h3>
//                 <h4 class='project__description--sub-title'>
//                     HTML, CSS, Javascript
//                 </h4>
//                 <p class='project__description--para'>
//                     A web app for playing a game of tic tac toe. Play against a friend or the computer
//                     (the computer is pretty dumb), choose how many rounds you want to play. Till the 
//                     winner will be decided. This was my first javascript project and learned alot from it. 
//                 </p>
//                 <div class='project__description--links'>
//                     <a href='https://github.com/soudshoorn/tictactoe' target='_blank'
//                         class='project__description--link'>
//                         <i class='fab fa-github'></i>
//                     </a>
//                     <a href='https://tictactoe-zeta-seven.vercel.app/' target='_blank'
//                         class='project__description--link'>
//                         <i class='fas fa-external-link-alt'></i>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </li>";
//     });
// }


function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.contact__overlay--loading');
    const success = document.querySelector('.contact__overlay--success');
    const form = document.querySelector('.contact__form--wrapper');
    loading.style.display = 'block';
    emailjs
        .sendForm(
            'service_rl5ih3f',
            'template_x75vr9n',
            event.target,
            'k-Py2NOiNbQ06lq8a'
        ).then(() =>{
            loading.style.display = 'none';
            success.style.display = 'block';
            form.style.display = 'none';
        }).catch(() => {
            loading.style.display = 'block';
            form.style.display = 'none';
            alert('Something went wrong, please try again later. Or contact me directly on: sennaoudshoorn@gmail.com');
        })
}

function moveBackground(event) {
    const clouds = document.querySelectorAll('.cloud');
    const x = event.clientX / 50;
    const y = event.clientY / 50;
    console.log(x, y);

    for (i = 0; i < clouds.length; i++) {
        const isOdd = i % 2 !== 0;
        const oddInteger = isOdd ? -1 : 1;
        clouds[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`;
    }
}