let signUpButton;
let signInButton;
let container;

export default function initsignup () {
    signUpButton = document.getElementById('signUp');
    signInButton = document.getElementById('signIn');
    container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}