
var canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 760;


function Jesus(context) {
    var normal = document.getElementById('normal');
    var middle = document.getElementById('middle');
    var closed = document.getElementById('closed');
    this.frames = [
        {frame: normal, settings: {dx: 0, dy: 0}},
        {frame: normal, settings: {dx: 0, dy: 0}},
        {frame: normal, settings: {dx: 3, dy: 0}},
        {frame: normal, settings: {dx: 3, dy: 0}},
        {frame: normal, settings: {dx: 3, dy: 0}},
        {frame: middle, settings: {dx: 0, dy: 0}},
        {frame: middle, settings: {dx: 1, dy: 0}},
        {frame: middle, settings: {dx: 2, dy: 0}},
        {frame: closed, settings: {dx: 0, dy: 0}},
        {frame: closed, settings: {dx: 1, dy: 0}},
    ];
    this.currentFrame = 0;
    this.ctx = context;
}

Jesus.prototype.update = function() {
    var oldFrame = this.frames[this.currentFrame];
    this.ctx.clearRect(oldFrame.settings.dx, 0, oldFrame.frame.width * 3, oldFrame.frame.height * 3);

    this.currentFrame = (this.currentFrame + 1) % this.frames.length;

    var newFrame = this.frames[this.currentFrame];
    this.ctx.drawImage(newFrame.frame, newFrame.settings.dx, newFrame.settings.dy, newFrame.frame.width * 3, newFrame.frame.height * 3);
}




window.onload = function() {
    var context = canvas.getContext("2d");
    var jesus = new Jesus(context);

    setInterval(jesus.update.bind(jesus), 100);
}

