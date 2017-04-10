var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    var shape;
    for (var i = 0; i < shape_array.length; i++) {
        shape = shape_array[i];
        shape.draw();
        shape.x = shape.x + 1;
    }
}
var shape_array = new Array();
var cPoint = (function () {
    function cPoint(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    return cPoint;
}());
var cAsteroid = (function () {
    function cAsteroid(x, y, size, color, lineWidth) {
        var _this = this;
        if (color === void 0) { color = "white"; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.x = 0;
        this.y = 0;
        this.lineWidth = 5;
        this.color = "white";
        this.size = 20;
        this.rotation = 0;
        this.pointList = new Array();
        this.draw = function () {
            _this.rotation += 0.02;
            ctx.save();
            ctx.translate(_this.x, _this.y);
            ctx.rotate(_this.rotation);
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.moveTo(_this.x + _this.pointList[_this.pointList.length - 1].x, _this.y + _this.pointList[_this.pointList.length - 1].y);
            for (var i = 0; i < _this.pointList.length; i++) {
                ctx.lineTo(_this.pointList[i].x, _this.pointList[i].y);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };
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
    return cAsteroid;
}());
var cSpaceShip = (function () {
    function cSpaceShip(x, y, size, color, lineWidth) {
        var _this = this;
        if (color === void 0) { color = "white"; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.x = 0;
        this.y = 0;
        this.lineWidth = 5;
        this.color = "white";
        this.size = 20;
        this.pointList = new Array();
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.moveTo(_this.x + _this.pointList[_this.pointList.length - 1].x, _this.y + _this.pointList[_this.pointList.length - 1].y);
            for (var i = 0; i < _this.pointList.length; i++) {
                ctx.lineTo(_this.x + _this.pointList[i].x, _this.y + _this.pointList[i].y);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };
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
    return cSpaceShip;
}());
var cRectangle = (function () {
    function cRectangle(x, y, width, height, color, lineWidth) {
        var _this = this;
        if (color === void 0) { color = "blue"; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.x = 0;
        this.y = 0;
        this.lineWidth = 5;
        this.width = 0;
        this.height = 0;
        this.color = "blue";
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.rect(_this.x, _this.y, _this.width, _this.height);
            ctx.stroke();
            ctx.restore();
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    return cRectangle;
}());
var cCircle = (function () {
    function cCircle(x, y, radius, color, lineWidth) {
        var _this = this;
        if (color === void 0) { color = "red"; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.lineWidth = 2;
        this.color = "red";
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        };
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    return cCircle;
}());
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    shape_array.push(new cCircle(500, 500, 50));
    shape_array.push(new cCircle(70, 500, 20, "pink", 4));
    shape_array.push(new cRectangle(200, 200, 200, 100));
    shape_array.push(new cRectangle(900, 300, 150, 30, "purple"));
    shape_array.push(new cAsteroid(850, 600, 20));
    shape_array.push(new cSpaceShip(200, 450, 20));
    gameLoop();
};
//# sourceMappingURL=app.js.map