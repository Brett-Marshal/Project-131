function back()
{
    window.location = "index.html";
}

function setup()
{
    canvas = createCanvas(500,500);
    canvas.center()
}

function draw()
{
    image(tv, 0, 0, 500, 500);
    
}

function preload()
{
    tv = loadImage("tv.webp");
}