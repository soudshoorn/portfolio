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