const selectAddTypeCake = document.getElementById('addTypeCake');
const selectEditTypeCake = document.getElementById('editTypeCake');
const selectTypeCakeDrop = document.getElementById('typeCakeDrop');
const formChangeInfo = document.getElementById('form-change-info');

axios
    .get('/api/type-cakes')
    .then((response) => {
        response.data.typeCakes.forEach((typecake) => {
            const option = document.createElement('option');
            option.setAttribute('value', typecake._id);
            option.innerHTML = typecake.name;
            selectAddTypeCake.appendChild(option);
        });
    })
    .catch((error) => {
        console.log(error);
    });
axios
    .get('/api/type-cakes')
    .then((response) => {
        response.data.typeCakes.forEach((typecake) => {
            const option = document.createElement('option');
            option.setAttribute('value', typecake._id);
            option.innerHTML = typecake.name;
            selectEditTypeCake.appendChild(option);
        });
    })
    .catch((error) => {
        console.log(error);
    });
axios
    .get('/api/type-cakes')
    .then((response) => {
        response.data.typeCakes.forEach((typecake) => {
            const option = document.createElement('option');
            option.setAttribute('value', typecake._id);
            option.innerHTML = typecake.name;
            selectTypeCakeDrop.appendChild(option);
        });
    })
    .catch((error) => {
        console.log(error);
    });

selectProvinces.onchange = (event) => {
    const optionDistrict = document.querySelectorAll('#districts option');
    optionDistrict.forEach((option) => option.remove());
    axios
        .get(`/address/provinces/${event.target.value}/districts`)
        .then((response) => {
            response.data.forEach((district) => {
                const option = document.createElement('option');
                option.setAttribute('value', district._id);
                option.innerHTML = district.name;
                selectDistricts.appendChild(option);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

formChangeInfo.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
        email: event.target.email.value,
        fullName: event.target.fullName.value,
        birthday: event.target.birthday.value,
        address: {
            province: event.target.province.value,
            district: event.target.district.value,
            ward: event.target.ward.value,
        },
    };
    axios
        .put(`/users/${window.getCookie('userID')}`, user)
        .then((response) => {
            $('#alert').html(`<div class="alert alert-success fade show" id='test123' role="alert">
                                    Thay đổi thông tin thành công
                            </div>`);
            setTimeout(() => {
                $('#test123').alert('close');
            }, 4000);
        })
        .catch((error) => {
            $('#alert').html(`<div class="alert alert-danger fade show" id='test123' role="alert">
                                    ${error.response.data.message}
                            </div>`);
            setTimeout(() => {
                $('#test123').alert('close');
            }, 4000);
        });
});
