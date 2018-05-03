let stars = [];
let canvas = 0;
const amountOfStars = 500;

function setup() { 
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index','-1')
    
    for(let i = 0; i < amountOfStars; i++){
        stars[i] = new Star()
    }


} 
  
function draw() { 
    background(0)
    translate(width/2, height/2)
    for(let i = 0; i < stars.length; i++){
        stars[i].update()
        stars[i].show()
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}