canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight = 80;
backgroundImage = "mars.jpg";
roverImage = "rover.png";
rover_x = 10;
rover_y = 10;
function add(){
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = backgroundImage;
    rover_image_tag = new Image();
    rover_image_tag.onload = uploadrover;
    rover_image_tag.src = roverImage;
}
function uploadBackground() 
{ 
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() 
{ 
    ctx.drawImage(rover_image_tag, rover_x, rover_y,roverWidth , roverHeight);
}

window.addEventListener("keydown", my_keydown); 
function my_keydown(e)
{
keyPressed = e.keyCode; 
console.log(keyPressed); 
if(keyPressed == '38')
 { 
     up(); 
     console.log("up"); 
} 
if(keyPressed == '40') 
{ 
    down(); 
    console.log("down"); 
} 
if(keyPressed == '37') 
{ 
    left(); 
    console.log("left"); 
} 
if(keyPressed == '39') 
    { right(); 
    console.log("right"); 
} 
}
function up() 
{ if(rover_y >=0) 
    { rover_y = rover_y - 10; 
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadBackground(); 
        uploadrover(); 
    } 
}

function down() 
{ if(rover_y <=500) 
    { rover_y =rover_y+ 10; 
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadBackground(); 
        uploadrover(); 
    } 
}
function left() 
{ if(rover_x >= 0) 
    { rover_x =rover_x - 10; 
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadBackground(); 
        uploadrover(); 
    } 
}

function right() 
{ if(rover_x <= 700) 
    { rover_x =rover_x + 10; 
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadBackground(); 
        uploadrover(); 
    } 
}