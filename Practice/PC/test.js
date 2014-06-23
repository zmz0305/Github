function displayKey(e)
{
    if (e.keyCode) keycode = e.keyCode;
    else keychode = e.which;
    charactor = String.fromCharCode(keycode);
    k = document.getElementById("keys");
    k.innerHTML += charactor;
}