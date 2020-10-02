import MenuItem from "./MenuItem";

export default class MenuItemAction extends MenuItem{
    constructor(itemNode, editorView, options = {}, attrs = {}) {
        super(itemNode, editorView, options, attrs);

        this.run = options.run;
    }

    isActive() {
        return this.run(this.state);
    }

    update() {
        this.menuItemNode.style.display = this.isActive() ? "" : "none"
    }

    exec() {
        return this.run(this.state, this.editorView.dispatch);
    }
}