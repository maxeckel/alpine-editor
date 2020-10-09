import MenuItemMark from "./MenuItemMark";
import MenuItemNode from "./MenuItemNode";
import MenuItemAction from "./MenuItemAction";

const ACCEPTED_DATA_ATTRIBUTES = [
    'level',
];

const OPTIONS_DATA_ATTRIBUTES = [
    'command',
    'activeClass',
];

export default class MenuBar
{
    constructor(editor, editorView) {
        this.editor = editor;
        this.editorView = editorView;
        this.actionsManager = editor.actionsManager;
        this.commandsManager = editor.commandsManager;
        this.menuItems = [];

        this.initMenuNode(editor.menuNode);
    }

    initMenuNode(menuNode) {
        menuNode.querySelectorAll("button[data-command]").forEach(child => {
            let menuItem;
            let attrs = this.extractNodeAttributes(child);
            let options = this.extractNodeOptionsFromData(child);

            if (this.schema.marks[`${options.command}`]) {
                menuItem = new MenuItemMark(child, this.editorView, options);
            } else if (this.commandsManager.hasCommand(options.command)) {
                let command = this.commandsManager.getCommand(options.command);
                options.run = command.action;
                options.hideable = command.hideable;
                options.activatable = command.activatable;

                menuItem = new MenuItemNode(child, this.editorView, options, attrs);
            } else if (this.actionsManager.hasAction(options.command)) {
                options.run = this.actionsManager.getAction(options.command);

                menuItem = new MenuItemAction(child, this.editorView, options, attrs);
            } else {
                throw new Error(`Could not find Mark, Command or Action for: ${options.command}`);
            }

            menuItem.update();

            this.menuItems.push(
                menuItem
            );
        });
    }

    extractNodeAttributes(node) {
        let attrs = {};

        ACCEPTED_DATA_ATTRIBUTES.forEach(attr => {
            if (! node.dataset.hasOwnProperty(attr)) {
                return;
            }

            attrs[attr] = node.dataset[attr];
        });

        return attrs;
    }

    extractNodeOptionsFromData(node) {
        let options = {};

        OPTIONS_DATA_ATTRIBUTES.forEach(attr => {
            if (! node.dataset.hasOwnProperty(attr)) {
                return;
            }

            options[attr] = node.dataset[attr];
        });

        return options;
    }

    get schema() {
        return this.editorView.state.schema;
    }

    update() {
        this.menuItems.forEach(menuItem => menuItem.update());
    }

    destroy() {
        this.menuItems.forEach(menuItem => menuItem.destroy());
    }
}