document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('registryBtn');
    const loginForm = document.getElementById('login-form');
    let mouseInside;
    const signupForm = document.getElementById('signup-form');
    const userContainer = document.querySelector('.user-container-nav-item');
    const userNav = document.querySelector('.user-nav');
    const btnLogout = document.getElementById('btnLogout');

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
    };

    function closeForm() {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
    }

    // kkkalsdakls
    if (btnLogout) {
        btnLogout.onclick = (event) => {
            event.preventDefault();
            axios
                .post('/auth/logout')
                .then((response) => {
                    console.log('object');
                    location.reload();
                })
                .catch((error) => {
                    console.error(error);
                });
        };
    }
});
