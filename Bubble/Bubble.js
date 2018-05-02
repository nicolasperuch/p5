function Bubble(x, y){
    this.x = x;
    this.y = y;
    this.radius = random(5, 55);
    this.color = color(random(0, 255), random(0, 255), random(0, 255))
    this.ySpeed = random(-1, 3);
    this.xSpeed = random(-1, 1);

    this.show = function (){
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.radius, this.radius)
    }

    this.move = function (){
        this.y -= this.ySpeed + this.variation();
        this.x -= this.xSpeed + this.variation();
    }

    this.variation = function (){
        return random(-2, 2)
    }

    this.getX = function (){
        return this.x
    }

    this.getY = function (){
        return this.y;
    }
    
    this.getRadius = function (){
        return this.radius;
    }
}