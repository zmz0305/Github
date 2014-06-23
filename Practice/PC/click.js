// JavaScript source code
function mouseStatus(e)
{
    if (!e) e = window.event;
    btn = e.button;
    whichone = (btn < 2) ? "left" : "right";
    message = e.type + ": " + whichone + "\n";
    document.form1.info.value += message;
}
obj = document.getElementById("testlink");
obj.onmousedown = mouseStatus;
obj.onmouseup = mouseStatus;
obj.onclick = mouseStatus;
obj.ondblclick = mouseStatus;