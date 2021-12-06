document.addEventListener('DOMContentLoaded', function() {
    let loginBtn = document.getElementById('loginBtn');
    let signupBtn = document.getElementById('registryBtn');
    let loginForm = document.getElementById('login-form');
    let mouseInside;
    let signupForm = document.getElementById('signup-form');
    let userContainer = document.querySelector('.user-container-nav-item');
    let userNav = document.querySelector('.user-nav')

    loginBtn.onclick = function () {
        loginForm.style.display = 'flex';
    };

    loginForm.onmouseover = function () {
        mouseInside = true;
    };

    loginForm.onmouseout = function () {
        mouseInside = false;
    };

    signupBtn.onclick = function () {
        signupForm.style.display = 'flex';
    };

    signupForm.onmouseover = function () {
        mouseInside = true;
    };

    signupForm.onmouseout = function () {
        mouseInside = false;
    };

    userNav.onmouseover = function () {
        mouseInside = true;
    };

    userNav.onmouseout = function () {
        mouseInside = false;
    };


    document.querySelector('body').onmouseup = function () {
        if (!mouseInside) {
            loginForm.style.display = 'none';
            signupForm.style.display = 'none';
            userNav.style.display = 'none';
        }
    };

    userContainer.onclick = function () {
        userNav.style.display = 'block';
    }

    function closeForm() { 
        document.getElementById("signup-form").style.display = "none"; 
        document.getElementById("login-form").style.display = "none";
    }
})