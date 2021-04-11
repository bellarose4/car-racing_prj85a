canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
backgroundimage = "canvas_bkg.jpg";
car1image = "car1.png";
car2image = "car2.png";

car1width = 120;
car1height = 70;

car2width = 120;
car2height = 70;

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 100;

function add(){
    backgroundimgtag = new Image();
    backgroundimgtag.onload = uploadracefunction;
    backgroundimgtag.src = backgroundimage;

    car1imgtag = new Image();
    car1imgtag.onload = uploadcar1function;
    car1imgtag.src = car1image;

    car2imgtag = new Image();
    car2imgtag.onload = uploadcar2function;
    car2imgtag.src = car2image;
}

function uploadracefunction() {
    ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1function() {
    ctx.drawImage(car1imgtag,car1_x,car1_y,car1width, car1height);
}

function uploadcar2function() {
    ctx.drawImage(car2imgtag,car2_x,car2_y,car2width, car2height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38'){

car1_up();
console.log("car1-up");
}
if(keyPressed == '40')
{
car1_down();
console.log("car1-down");
}
if(keyPressed == '37')
{
car1_left();
console.log("car1-left");
}
if(keyPressed == '39')
{
car1_right();
console.log("car1-right");
}
if(keyPressed == '87'){

    car2_up();
    console.log("car2-up");
    }
    if(keyPressed == '83')
    {
    car2_down();
    console.log("car2-down");
    }
    if(keyPressed == '65')
    {
    car2_left();
    console.log("car2-left");
    }
    if(keyPressed == '68')
    {
    car2_right();
    console.log("car2-right");
    }
    
    if(car1_x > 700)
    {
        console.log("car1 won");
        document.getElementById('game_status').innerHTML = "Car 1 Won!!";
    }

    if(car2_x > 700)
    {
        console.log("car2 won");
        document.getElementById('game_status').innerHTML = "Car 2 Won!!";
    }
}

function car1_up()
{
    if(car1_y>=0)
    {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x =" + car1_x + " | y =" +car1_y);
        uploadracefunction();
        uploadcar1function();
        uploadcar2function();
    }
}

function car1_down()
{
    if(car1_y<=500)
    {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x =" + car1_x + " | y =" +car1_y);
        uploadracefunction();
        uploadcar1function();
        uploadcar2function();
    }
}

function car1_left()
{
    if(car1_x>=0)
    {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x =" + car1_x + " | y =" +car1_y);
        uploadracefunction();
        uploadcar1function();
        uploadcar2function();
    }
}

function car1_right()
{
    if(car1_x<=700)
    {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x =" + car1_x + " | y =" +car1_y);
        uploadracefunction();
        uploadcar1function();
        uploadcar2function();
    }
}

function car2_up()
{
    if(car2_y>=0)
    {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, x =" + car2_x + " | y =" +car2_y);
        uploadracefunction();
        uploadcar1function();
        uploadcar2function();
    }
}

function car2_down()
{
    if(car2_y<=500)
    {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x =" + car2_x + " | y =" +car2_y);
        uploadracefunction();
        uploadcar1function();
        uploadcar2function();
    }
}

function car2_left()
{
    if(car2_x>=0)
    {
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed, x =" + car2_x + " | y =" +car2_y);
        uploadracefunction();
        uploadcar1function();
        uploadcar2function();
    }
}

function car2_right()
{
    if(car2_x<=700)
    {
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed, x =" + car2_x + " | y =" +car2_y);
        uploadracefunction();
        uploadcar1function();
        uploadcar2function();
    }
}