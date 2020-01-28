/* global CanvasEngin */

class Sprite_Test {
    constructor(color, num) {
        CanvasEngin.addRender(this.draw(color, num));
    }

    draw(color, num) {
        return (ctx) => {
            // console.log(this.constructor.name + " : " + num);
            ctx.fillStyle = color;
            ctx.fillRect(50 + 50 * num, 50 + 50 * num, 100, 100);
        };
    }
}
