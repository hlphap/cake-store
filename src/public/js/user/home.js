const btnAddCakeToCart = document.getElementsByClassName('btnAddCakeToCart');

for (let i = 0; i < btnAddCakeToCart.length; i++) {
    btnAddCakeToCart[i].onclick = function (event) {
        event.preventDefault();
        axios
            .get(`/api/cakes/${btnAddCakeToCart[i].value}`)
            .then((response) => {
                let carts = [];
                const newCake = response.data.cake;
                if (localStorage.getItem('cart')) {
                    carts = JSON.parse(localStorage.getItem('cart'));
                }

                // Check da add cake
                const foundIndexItem = carts.findIndex((item) => item.cake._id === newCake._id);
                let item = {};
                if (foundIndexItem == '-1') {
                    item = {
                        cake: newCake,
                        quantity: 1,
                        note: '',
                    };
                    carts.push(item);
                } else {
                    carts[foundIndexItem].quantity++;
                }

                localStorage.setItem('cart', JSON.stringify(carts));
            })
            .catch((error) => {
                console.log(error);
            });
    };
}
