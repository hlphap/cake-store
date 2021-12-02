let loginBtn = document.getElementById("loginBtn")
let signupBtn = document.getElementById("registryBtn")
let loginForm = document.getElementById("login-form")
let mouse_is_inside
let closeBtn = document.getElementById("close-btn")
let signupForm = document.getElementById("signup-form")

loginBtn.onclick = function() {
    loginForm.style.display = 'flex'
    loginForm.style.right = '725px'
}

loginForm.onmouseover = function(){ 
    mouse_is_inside = true;
}
    
loginForm.onmouseout = function(){ 
    mouse_is_inside = false
}

document.querySelector("body").onmouseup = function(){ 
    if(! mouse_is_inside) {
        loginForm.style.display = 'none'
        signupForm.style.display = 'none'
    }
};

signupBtn.onclick = function() {
    signupForm.style.display = 'flex'
    signupForm.style.right = '815px'
}

signupForm.onmouseover = function(){ 
    mouse_is_inside = true;
}
    
signupForm.onmouseout = function(){ 
    mouse_is_inside = false
}

closeBtn.onclick = function(){ 
    loginForm.style.display = 'none'
    signupForm.style.display = 'none'
}