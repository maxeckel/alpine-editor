import MenuItem from "./MenuItem";

export default class MenuItemNode extends MenuItem {
    constructor(itemNode, editorView, options = {}, attrs = {}) {
        super(itemNode, editorView, options, attrs);

        this.run = options.run(this.type, attrs);
    }

    resolveType(command) {
        return this.schema.nodes[`${command}`];
    }

    isActive() {
        if (this.options.hideable) {
            return this.run(this.state);
        } else if (this.options.activatable) {
            let {$from, to, node} = this.state.selection
            if (node) return node.hasMarkup(this.type, this.attrs)
            return to <= $from.end() && $from.parent.hasMarkup(this.type, this.attrs)
        }
    }

    update() {
        if (this.options.hideable) {
            this.menuItemNode.style.display = this.isActive() ? "" : "none"
        } else if (this.options.activatable) {
            const containsClass = this.menuItemNode.classList.contains(this.activeClass);

            if (!this.isActive() && containsClass) {
                this.menuItemNode.classList.remove(this.activeClass);
            }

            if (this.isActive() && !containsClass) {
                this.menuItemNode.classList.add(this.activeClass);
            }
        }
    }

    exec() {
        this.run(this.state, this.editorView.dispatch);
    }
}