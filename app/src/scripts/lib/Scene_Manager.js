/* global Scene_Title */
/* global Scene_Test */

class Scene_Manager {
    constructor() {
        this.screen = {
            // "1": new Scene_Title(),
            999: new Scene_Test(),
        };

        // TODO: 直接指定をしないようにする
        this.currentScreen = 999;
    }

    getCurrentScreen() {
        const currentScreen = this.screen[this.currentScreen];
        return currentScreen;
    }
}
