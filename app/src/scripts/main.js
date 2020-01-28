/* global Game_Manager */
/* global Config_Manager */
/* global Scene_Manager */
/* global Canvas */

const GameManager = new Game_Manager();
const ConfigManager = new Config_Manager();
const SceneManager = new Scene_Manager();
const CanvasEngin = new Canvas();

window.onload = () => {

    const canvasDom = document.getElementById("canvas");
    CanvasEngin.setCanvas(canvasDom);

    GameManager.init();
    GameManager.gameStart();
};
