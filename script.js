const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');
const signUpLink = document.querySelector('#sign-up-link');

signUpLink.addEventListener('click', () => {
    signInForm.style.transform = 'translateX(-100%)';
    signUpForm.style.transform = 'translateX(0)';
});

document.querySelector('#sign-up-btn').addEventListener('click', () => {
    signUpForm.style.transform = 'translateX(100%)';
    signInForm.style.transform = 'translateX(0)';
});
