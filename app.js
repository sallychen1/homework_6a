function changePrice() {
    var x = document.getElementById("qty-select").value * 4.99;
    document.getElementById("price").innerHTML = "$ " + x;
}