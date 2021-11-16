let imageUploadBtn = document.getElementById("image-upload-btn")
let imageUploadRaiser = document.getElementById("image-upload-raiser")
let userImgAvatar = document.querySelector(".user-image-avatar")
let cancelBtn = document.getElementById("cancel-btn")
let cancelLink = document.getElementById("cancel-link")
let saveBtn = document.getElementById("save-btn")
let userInfoForm = document.querySelector(".user-information-form")

imageUploadRaiser.onclick = () => {
    imageUploadBtn.click()
}

imageUploadBtn.onchange = (evt) => {
    userImgAvatar.src = URL.createObjectURL(evt.target.files[0])
}

userInfoForm.onchange = () => {
    cancelBtn.removeAttribute("disabled")
    cancelLink.setAttribute("href", "/profile")
    saveBtn.removeAttribute("disabled")
}