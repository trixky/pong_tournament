function wdh(number)
{
    var canvs = document.getElementById("pongBoard");
    number = number / 100 * canvs.width;
    return number;
}

function hgt(number)
{
    var canvs = document.getElementById("pongBoard");
    number = number / 100 * canvs.height;
    return number;
}

class Player
{
    constructor()
    {
        this.object = new createjs.Shape();
        this.score = 0;
        this.up = 0;
        this.down = 0;
    };
}

class Ball
{
    constructor(max_speed, x_dir, y_dir)
    {
        this.object = new createjs.Shape();
        this.y_dir = y_dir;
        this.x_dir = x_dir;
        this.max_speed = max_speed;
    };
    reset(height, middle)
    {
        this.y_dir = (this.object.y - middle) / (height / 2) * (this.max_speed * 0.75);
        this.x_dir = Math.sqrt(Math.pow(this.max_speed, 2) - Math.pow(this.y_dir, 2));
    };
}

class Game
{
    constructor (width, height, max_score, stage)
    {
        this.player_width = width;
        this.player_height = height;
        this.max_score = max_score;
        this.wait = 0;
        this.stage = new createjs.Stage(stage);
    };
    width()
    {
        return (this.player_width)
    };
    height()
    {
        return (this.player_height)
    };
}

export {Player, Game, Ball}