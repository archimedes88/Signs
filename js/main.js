var costPerLetter = 5;
var stateTax = 0.06;
var fullName = $('#fullName');
var specialChars = $('#specialChars');
var totalDisplay = $('#totalDisplay');
var shipping = $('#shipping');
var sub = $('#sub');
var tax = $('#tax');
var addShip = $('#addShip');
var withTax = $('#withTax');

$('#button').on('click',calculate);

function calculate() {
    // Code Goes here

    var nameLength = fullName.val().length;
    console.log(nameLength);

    if (nameLength == 0) {
        alert('You need to put your name...')
        return false;
    }

    var charTotal = parseInt(specialChars.val());

    if (charTotal < 0) {
        alert('Your not making it cheaper...')
        return false;
    }

    var shipCost = parseFloat(shipping.val());
    var subTotal = (nameLength + charTotal) * costPerLetter;
    var taxIs = subTotal * stateTax;
    var withStTax = subTotal + taxIs;
    var grandTotal = subTotal + taxIs + shipCost;

    sub.html('<p>Subtotal: $' + subTotal.toFixed(2) + '</p>');
    tax.html('<p>-Tax: $' + taxIs.toFixed(2) + '</p>');
    withTax.html('<p>-With Tax: $' + withStTax.toFixed(2) + '</p>');
    addShip.html('<p>-Shipping Cost: $' + shipCost.toFixed(2) + '</p>');
    totalDisplay.html('<p><strong>Total:</strong> $' + grandTotal.toFixed(2) + '</p>');

    return false;
};
