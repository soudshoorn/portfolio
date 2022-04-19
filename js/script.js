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
    loading.classList += ' contact__overlay--visible';

    emailjs
        .sendForm(
            'service_rl5ih3f',
            'template_x75vr9n',
            event.target,
            'k-Py2NOiNbQ06lq8a'
        ).then(() =>{
            loading.classList.remove('contact__overlay--visible');
            success.classList += ' contact__overlay--visible';
            console.log('Email sent!')
        }).catch(() => {
            loading.classList.remove('contact__overlay--visible');
            alert('Something went wrong, please try again later. Or contact me directly on: sennaoudshoorn@gmail.com');
        })
}

function toggleContact() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("contact--open");
    }
    window.scrollTo(0, 0);
    isModalOpen = true;
    document.body.classList += " contact--open";
}