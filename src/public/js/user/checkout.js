const carts = JSON.parse(window.localStorage.getItem('cart'));
const checkout = document.getElementById('checkout-menu');
const totalPriceClass = document.getElementsByClassName('totalPrice');

let htmlInsert = '';
let totalPrice = 0;

for (let i = 0; i < carts.length; i++) {
    totalPrice += carts[i].cake.priceDiscount;
    htmlInsert += `<tr>
                                        <td style="width: 60px;">
                                            <img class="pen_img" src="/image/checkout/pen.png" />
                                        </td>
                                        <td style="width: 550px;">
                                            <b>${carts[i].quantity} x ${carts[i].cake.name}</b>
                                            <br />
                                            Note: ${carts[i].note}
                                            <div><button class="btn_del">Xóa</button></div>
                                        </td>
                                        <td>
                                            ${carts[i].cake.priceDiscount}đ
                                        </td>
                                    </tr>`;
}

checkout.innerHTML = htmlInsert;

for (let i = 0; i < totalPriceClass.length; i++) {
    totalPriceClass[i].innerHTML = `${totalPrice}đ`;
}

$('#btn-DatHang').click(() => {
    console.log('object');
    $('#alert').html(`<div class="alert alert-success fade show" id='alertLog' role="alert">
                                    Đặt hàng thành công
                            </div>`);
    setTimeout(() => {
        $('#alertLog').alert('close');
    }, 4000);
});
