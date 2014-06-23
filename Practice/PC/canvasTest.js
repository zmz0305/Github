function captureCoordinates(e)
{
    if(!e)
        e=window.event;

}
function drawT()
{
    //var mouseX = 0;
    //var mouseY = 0;
    var canvas = document.getElementById("myCanvas");
    if (canvas == null)
        return;
    var context = canvas.getContext("2d");
    context.fillStyle = "#00FFFF";
    context.canvas.addEventListener("mousemove", function () {
        //event = window.event;
        mouseX = event.clientX - context.canvas.offsetLeft;
        mouseY = event.clientY - context.canvas.offsetTop;
        
    }
    );
    context.fillText(mouseX, 100, 100);
    context.fillText(mouseY, 100, 150);
}
function draw()
{
    var canvas = document.getElementById("myCanvas");
    if (canvas == null)
        return;
    var context = canvas.getContext("2d");
    context.fillStyle = "#CCC";
    context.fillRect(0, 0, 150, 75);

}