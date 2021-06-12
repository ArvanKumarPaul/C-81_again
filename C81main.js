canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.rect(90 , 143 , 430 , 230);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.arc( 160 , 210 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 3;
ctx.arc( 210 , 250 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.arc( 260 , 210 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.arc( 310 , 250 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.arc( 360 , 210 , 40 , 0 , 2 * Math.PI);
ctx.stroke();
