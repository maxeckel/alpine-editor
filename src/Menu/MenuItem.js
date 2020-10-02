export default class MenuItem {
    constructor(itemNode, editorView, options, attrs) {
        this.menuItemNode = itemNode;
        this.editorView = editorView;
        this.attrs = attrs;
        this.options = options;

        this.type = this.resolveType(options.command);

        this.registerClickListener();
    }

    isActive() {};

    resolveType(command) {};

    update() {};

    exec() {};

    destroy() {
        this.unregisterClickListener();
    }

    registerClickListener() {
        this.menuItemNode.addEventListener('mousedown', this.handleClickEvent.bind(this))
    }

    unregisterClickListener() {
        this.menuItemNode.removeEventListener('mousedown', this.handleClickEvent);
    }

    handleClickEvent(event) {
        event.preventDefault();
            
        this.exec();

        this.editorView.dom.dispatchEvent(new InputEvent('input'));
    }

    get state() {
        return this.editorView.state;
    }

    get schema() {
        return this.state.schema;
    }

    get activeClass() {
        if (this.options.hasOwnProperty('activeClass')) {
            return this.options.activeClass;
        }

        return "";
    }
}