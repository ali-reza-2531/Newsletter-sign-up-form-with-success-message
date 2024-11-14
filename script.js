
const form = document.getElementById('form');
const signUpContainer = document.querySelector('.sign-up-container');
const successBox = document.querySelector('.success-box');
const massage = document.querySelector('.massage');
const DissmissedButton = successBox.querySelector('button');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const email_field = e.target.querySelector('#email');
    const email = email_field.value;
    const massageContainEmail = `A confirmation email has been sent to <strong>${email}</strong>. Please open
        it and click the button inside to confirm your subscription.`;
        if (validateEmail(email)) {
            document.getElementById("email-error").textContent = '';
            email_field.classList.remove("error");
            signUpContainer.classList.add('hidden');
            successBox.classList.remove('hidden');
            massage.innerHTML = massageContainEmail;
        } else {
            document.getElementById("email-error").textContent = "Valid email required";
            email_field.classList.add("error");

        }

})
DissmissedButton.addEventListener('click',() => {
  location.reload();
})

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}