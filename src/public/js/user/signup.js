const selectProvinces = document.getElementById('provinces');
const selectDistricts = document.getElementById('districts');
const selectWards = document.getElementById('wards');
const btnRegister = document.getElementById('btnRegister');
const formRegister = document.getElementById('formRegister');

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

formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
        email: event.target.email.value,
        password: event.target.password.value,
        rePassword: event.target.rePassword.value,
        fullName: event.target.fullName.value,
        birthday: event.target.birthday.value,
        address: {
            province: event.target.province.value,
            district: event.target.district.value,
            ward: event.target.ward.value,
        },
    };
    axios
        .post('/auth/register', user)
        .then((response) => {
            location.reload();
        })
        .catch((error) => console.error(error));
});
