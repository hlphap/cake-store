document.addEventListener('DOMContentLoaded', () => {
    // logout
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
