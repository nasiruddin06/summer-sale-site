
let sum = 0;

function CalculatePrice (target){
    const pickItem = target.querySelector('.item-name');
    const itemName = pickItem.innerText;

    const picklistContainer = document.getElementById('items-name');

    const li = document.createElement('li');
    li.innerText = itemName;
    picklistContainer.appendChild(li);


    const pickItemPrice = target.querySelector('#product-price');
    const itemPrice =pickItemPrice.innerText;

    sum = parseFloat(sum) + parseFloat(itemPrice);
    const totalPrice = sum.toFixed(2);

    const pickTotalField = document.getElementById('total-price');
    pickTotalField.innerText = totalPrice;

    const pickPaymentbtn = document.getElementById('payment-btn');

    if (totalPrice > 0){
        pickPaymentbtn.removeAttribute('disabled')
    }
    else{
        pickPaymentbtn.setAttribute("disabled", "true");
    }


    const pickApplyBtn = document.getElementById('apply-btn');

    if(totalPrice >= 200){
        pickApplyBtn.removeAttribute('disabled')
    }
    else{
        pickApplyBtn.setAttribute("disabled", "true");
    }


    const pickCouponField = document.getElementById('coupon-field');
    // const couponCode = pickCouponField.value;

    const pickDiscountField = document.querySelector('#discount-value');

    pickApplyBtn.addEventListener('click', function(){
        const couponCode = pickCouponField.value;
        if(couponCode == "SELL200" ){
            const discountCalculate = totalPrice *.2;
            pickDiscountField.innerText = discountCalculate.toFixed(2);
            document.getElementById('total').innerText = (totalPrice - discountCalculate).toFixed(2);
        }
        else{
            alert("you input invalid coupon");
            document.getElementById('total').innerText = totalPrice;

        }
    })

}

function goHome(){
    window.location.href = "index.html"
}








   // const pickDiscountField = document.querySelector('#discount-value');
    // const discountCalculate = totalPrice *.2;

    // if(totalPrice >= 200){
    //     // const discountCalculate = totalPrice *.2;
    //     pickDiscountField.innerText = discountCalculate;
    // }
    // else{
    //     discountCalculate = 0;
    // }

    // document.getElementById('total').innerText = totalPrice - discountCalculate;

