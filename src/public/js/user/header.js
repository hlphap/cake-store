const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('registryBtn');
const loginForm = document.getElementById('login-form');
let mouseInside;
const closeBtn = document.getElementById('close-btn');
const signupForm = document.getElementById('signup-form');

loginBtn.onclick = function () {
    loginForm.style.display = 'flex';
    loginForm.style.right = '725px';
};

loginForm.onmouseover = function () {
    mouseInside = true;
};

loginForm.onmouseout = function () {
    mouseInside = false;
};

document.querySelector('body').onmouseup = function () {
    if (!mouseInside) {
        loginForm.style.display = 'none';
        signupForm.style.display = 'none';
    }
};

signupBtn.onclick = function () {
    signupForm.style.display = 'flex';
    signupForm.style.right = '815px';
};

signupForm.onmouseover = function () {
    mouseInside = true;
};

signupForm.onmouseout = function () {
    mouseInside = false;
};

closeBtn.onclick = function () {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
};
