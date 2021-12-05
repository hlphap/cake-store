const btnChangePassword = document.getElementById('btn-change-password');
const formChangePassword = document.getElementById('form-change-password');

formChangePassword.addEventListener('submit', (event) => {
    event.preventDefault();
    $('#modal-confirm-change-password').modal('hide');
    const dataChangePassword = {
        passwordPre: event.target.passwordPre.value,
        passwordNew: event.target.passwordNew.value,
        rePasswordNew: event.target.rePasswordNew.value,
    };
    axios
        .post('/auth/change-password', dataChangePassword, {
            headers: {
                authorization: `Bearer ${window.getCookie('token')}`,
            },
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            // $('#alert').html('<p>123123</p>');
            console.log(error.response.data.message);
        });
});

btnChangePassword.onclick = () => {
    document.getElementById('btn-submit').click();
};
