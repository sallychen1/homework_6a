function changePrice() {
    var x = document.getElementById("qty-select").value;
    document.getElementById("price").innerHTML = "$ " + x;
}