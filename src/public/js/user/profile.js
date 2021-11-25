const imageUploadBtn = document.getElementById('image-upload-btn');
const imageUploadRaiser = document.getElementById('image-upload-raiser');
const userImgAvatar = document.querySelector('.user-image-avatar');
const cancelBtn = document.getElementById('cancel-btn');
const cancelLink = document.getElementById('cancel-link');
const saveBtn = document.getElementById('save-btn');
const userInfoForm = document.querySelector('.user-information-form');

imageUploadRaiser.onclick = () => {
    imageUploadBtn.click();
};

imageUploadBtn.onchange = (evt) => {
    userImgAvatar.src = URL.createObjectURL(evt.target.files[0]);
};

userInfoForm.onchange = () => {
    cancelBtn.removeAttribute('disabled');
    cancelLink.setAttribute('href', '/profile');
    saveBtn.removeAttribute('disabled');
};
