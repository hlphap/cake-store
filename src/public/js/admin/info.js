const selectProvinces = document.getElementById('provinces');
const selectDistricts = document.getElementById('districts');
const selectWards = document.getElementById('wards');
const formChangeInfo = document.getElementById('form-change-info');

axios
    .get('/address/provinces')
    .then((response) => {
        response.data.forEach((province) => {
            const option = document.createElement('option');
            option.setAttribute('value', province._id);
            option.innerHTML = province.name;
            selectProvinces.appendChild(option);
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

selectDistricts.onchange = (event) => {
    const optionWards = document.querySelectorAll('#wards option');
    optionWards.forEach((option) => option.remove());
    axios
        .get(`/address/districts/${event.target.value}/wards`)
        .then((response) => {
            response.data.forEach((ward) => {
                const option = document.createElement('option');
                option.setAttribute('value', ward._id);
                option.innerHTML = ward.name;
                selectWards.appendChild(option);
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
