import { toggleMark } from "prosemirror-commands"
import MenuItem from "./MenuItem";

export default class MenuItemMark extends MenuItem {
    constructor(itemNode, editorView, options = {}) {
        super(itemNode, editorView, options);

        this.run = toggleMark(this.type);
    }

    resolveType(command) {
        return this.schema.marks[`${command}`];
    }

    update() {
        const containsClass = this.menuItemNode.classList.contains(this.activeClass);

        if (!this.isActive() && containsClass) {
            this.menuItemNode.classList.remove(this.activeClass);
        }

        if (this.isActive() && !containsClass) {
            this.menuItemNode.classList.add(this.activeClass);
        }
    }

    isActive() {
        let type = this.type;

        let {from, $from, to, empty} = this.state.selection
        if (empty) return type.isInSet(this.state.storedMarks || $from.marks()) ? true : false;
        else return this.state.doc.rangeHasMark(from, to, type)
    }

    exec() {
        this.run(this.state, this.editorView.dispatch);
    }
}