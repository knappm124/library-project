function showCheckoutForm() {
    document.querySelector('#checkoutAdminForm').classList.add('hidden');
    document.querySelector('#checkOutBookButton').classList.add('hidden');
    document.querySelector('#checkoutForm').classList.remove('hidden');
    document.querySelector('#goBackButton').classList.remove('hidden');
}

function showCheckedOutBooks() {
    document.querySelector('#checkedOutBooksButton').classList.add('hidden');
    document.querySelector('#checkedOutBooks').classList.remove('hidden');
    document.querySelector('#goBackButton').classList.add('hidden');
    document.querySelector('#goBackButton2').classList.remove('hidden');
}

function hideCheckout() {
    document.querySelector('#checkoutAdminForm').classList.remove('hidden');
    document.querySelector('#checkOutBookButton').classList.remove('hidden');
    document.querySelector('#checkoutForm').classList.add('hidden');
    document.querySelector('#goBackButton').classList.add('hidden');
}

function hideCheckedOutBooks() {
    document.querySelector('#checkedOutBooksButton').classList.remove('hidden');
    document.querySelector('#checkedOutBooks').classList.add('hidden');
    document.querySelector('#goBackButton').classList.remove('hidden');
    document.querySelector('#goBackButton2').classList.add('hidden');

}