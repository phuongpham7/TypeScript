var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    var shape: iShape;
    for (var i: number = 0; i < shape_array.length; i++) {
        shape = shape_array[i];
        shape.draw();
        shape.x = shape.x + 1;
    }
}

var shape_array = new Array<iShape>();

interface iShape {
    x: number;
    y: number;
    color: string;
    lineWidth: number;
    draw(): void;
}

class cPoint {
    public x: number = 0;
    public y: number = 0;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class cAsteroid implements iShape {
    public x: number = 0;
    public y: number = 0;
    public lineWidth: number = 5;
    public color: string = "white";
    public size: number = 20;
    public rotation: number = 0;
    public pointList: Array<cPoint> = new Array<cPoint>();

    constructor(x: number, y: number, size: number, color: string = "white", lineWidth: number = 2) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.pointList.push(new cPoint(0, 3 * size));
        this.pointList.push(new cPoint(-1 * size, 2 * size));
        this.pointList.push(new cPoint(-2 * size, 2 * size));
        this.pointList.push(new cPoint(-3.5 * size, size));
        this.pointList.push(new cPoint(-3 * size, size));
        this.pointList.push(new cPoint(-4 * size, 0));
        this.pointList.push(new cPoint(-1 * size, -3 * size));
        this.pointList.push(new cPoint(2 * size, -4 * size));
        this.pointList.push(new cPoint(2 * size, -3 * size));
        this.pointList.push(new cPoint(4 * size, -2 * size));
        this.pointList.push(new cPoint(4 * size, size));
        this.pointList.push(new cPoint(3 * size, 2 * size));

        this.color = color;
        this.lineWidth = lineWidth;
    }

    public draw = (): void => {
        this.rotation += 0.02;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        
        ctx.moveTo(this.x + this.pointList[this.pointList.length - 1].x, this.y + this.pointList[this.pointList.length - 1].y);

        for (var i: number = 0; i < this.pointList.length; i++) {
            ctx.lineTo(this.pointList[i].x, this.pointList[i].y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
}

class cSpaceShip implements iShape {
    public x: number = 0;
    public y: number = 0;
    public lineWidth: number = 5;
    public color: string = "white";
    public size: number = 20;
    public pointList: Array<cPoint> = new Array<cPoint>();

    constructor(x: number, y: number, size: number, color: string = "white", lineWidth: number = 2) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.pointList.push(new cPoint(3 * size, 0));
        this.pointList.push(new cPoint(-2 * size, -2 * size));
        this.pointList.push(new cPoint(-1 * size, 0));
        this.pointList.push(new cPoint(-2 * size, 2 * size));
        
        this.color = color;
        this.lineWidth = lineWidth;
    }

    public draw = (): void => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;

        ctx.moveTo(this.x + this.pointList[this.pointList.length - 1].x, this.y + this.pointList[this.pointList.length - 1].y);

        for (var i: number = 0; i < this.pointList.length; i++) {
            ctx.lineTo(this.x + this.pointList[i].x, this.y + this.pointList[i].y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
}

class cRectangle implements iShape {
    public x: number = 0;
    public y: number = 0;
    public lineWidth: number = 5;
    public width: number = 0;
    public height: number = 0;
    public color: string = "blue";

    constructor(x: number, y: number, width: number, height: number, color: string = "blue", lineWidth: number = 2) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineWidth = lineWidth;
    }

    public draw = (): void => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.restore();
    }
}

class cCircle implements iShape {
    public x: number = 0;
    public y: number = 0;
    public radius: number = 10;
    public lineWidth: number = 2;
    public color: string = "red";
    constructor(x: number, y: number, radius: number, color: string = "red", lineWidth: number = 2) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = lineWidth;
    }

    public draw = (): void => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
    }
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    ctx = canvas.getContext("2d");

    shape_array.push(new cCircle(500, 500, 50));
    shape_array.push(new cCircle(70, 500, 20, "pink", 4));
    shape_array.push(new cRectangle(200, 200, 200, 100));
    shape_array.push(new cRectangle(900, 300, 150, 30, "purple"));
    shape_array.push(new cAsteroid(850, 600, 20));
    shape_array.push(new cSpaceShip(200, 450, 20));
    gameLoop();
}