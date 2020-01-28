class Canvas {
    constructor() {
        this.dom = null;
        this.ctx = null;

        this.renderList = [];
    }

    setCanvas(dom) {
        this.dom = dom;
        this.ctx = this.dom.getContext("2d");
    }

    addRender(func, options = {}) {
        const num = options.num || this.renderList.length;
        this.renderList.splice(num, 0, {
            name: options.name || "Render" + this.renderList.length,
            num: num,
            update: func,
        });
    }

    deleteRender(num) {
        if (!num) {
            num = this.renderList.length - 1;
        }
        this.renderList.splice(num, 1);
    }

    update() {
        if (!this.ctx) {
            throw new Error("not canvas setting");
        }
        const renderList = this.renderList.sort((a, b) => {
            return a.num - b.num;
        });
        for (const render of renderList) {
            render.update(this.ctx);
        }
    }

    cleanRender() {
        this.renderList = [];
        this.ctx.clearRect(0, 0, this.dom.width, this.dom.height);
    }


}
