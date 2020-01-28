/* global GameManager */
/* global ConfigManager */
/* global SceneManager */
/* global CanvasEngin */

class Scene_Main {
    constructor() {
        this.interval = null;
    }

    start() {
        this.interval = setInterval(() => {
            this.update();
        }, 1000 / ConfigManager.FPS);

        return this.interval;
    }

    update() {
        console.log("update");
        CanvasEngin.cleanRender();
        SceneManager.getCurrentScreen().update();
        CanvasEngin.update();
    }

    stop() {
        return clearInterval(this.interval);
    }
}
