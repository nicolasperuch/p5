let canvas;
let bubbles = [];
let lifecicle = 0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0, 0)
    canvas.style('z-index', '-1')
}

function draw() {
    background(0)
    
    if(lifecicle == 20){
        for(let i = 0; i < 3; i++){
            bubbles.push(new Bubble(random(0, windowWidth-1), windowHeight))
        }
        lifecicle = 0;
    }
    
    if(bubbles != null){
        for(let i = 0; i < bubbles.length; i++){
            bubbles[i].show()
            bubbles[i].move()
        }
    }
    lifecicle++;
    
    if(mouseIsPressed){
        for(let i = 0; i < bubbles.length; i++){
            if(shouldExplode(bubbles[i])){
                bubbles.splice(i, 1)
                break;
            }
        }
    }

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function shouldExplode(bubble){
    let radius = bubble.getRadius();
    let x = bubble.getX();
    let y = bubble.getY();

    return mouseX > x - radius &&
           mouseX < x + radius &&
           mouseY > y - radius &&
           mouseY < y + radius;  
}