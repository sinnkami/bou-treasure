/* global Scene_Main */

class Game_Manager {
    init() {
        console.log("aaa");
    }

    gameStart() {
        const SceneMain = new Scene_Main();
        SceneMain.start();
    }
}
