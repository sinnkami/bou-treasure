/* global CanvasEngin */

class Sprite_Character {
    constructor() {
        CanvasEngin.addRender(() => {
            return function(ctx) {
                ctx.fillRect(100, 100, 100, 100);
            };
        });
    }
}
