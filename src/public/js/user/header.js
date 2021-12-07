// const loginBtn = document.getElementById('loginBtn');
// const signupBtn = document.getElementById('registryBtn');
// const loginForm = document.getElementById('login-form');
// let mouseInside;
// const signupForm = document.getElementById('signup-form');
// const btnLogout = document.getElementById('btnLogout');

// if (loginBtn) {
//     loginBtn.onclick = function () {
//         loginForm.style.display = 'flex';
//         loginForm.style.right = '725px';
//     };
// }

// if (loginForm) {
//     loginForm.onmouseover = function () {
//         mouseInside = true;
//     };

//     loginForm.onmouseout = function () {
//         mouseInside = false;
//     };
// }

// document.querySelector('body').onmouseup = function () {
//     if (!mouseInside) {
//         loginForm.style.display = 'none';
//         signupForm.style.display = 'none';
//     }
// };
// if (signupBtn) {
//     signupBtn.onclick = function () {
//         signupForm.style.display = 'flex';
//         signupForm.style.right = '815px';
//     };
// }

// if (signupForm) {
//     signupForm.onmouseover = function () {
//         mouseInside = true;
//     };

//     signupForm.onmouseout = function () {
//         mouseInside = false;
//     };
// }

// if (btnLogout) {
//     btnLogout.onclick = (event) => {
//         event.preventDefault();
//         axios
//             .post('/auth/logout')
//             .then((response) => {
//                 console.log('object');
//                 location.reload();
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
// }
