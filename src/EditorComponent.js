import { DOMParser, Schema } from "prosemirror-model";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { baseKeymap } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import initMenuPlugin from "./Menu/MenuPlugin";
import ActionsManager from "./Managers/ActionsManager";
import CommandsManager from "./Managers/CommandsManager";
import initNodes from "./Nodes/Nodes";
import debounce from "lodash-es/debounce";
import EditorConfig from "./EditorConfig";
import generateBaseSchema from "./Schema/Default";

export default class EditorComponent extends HTMLElement {
    constructor() {
        super();

        this.state = null;
        this.view = null;
        this.editorNode = null;
        this.actionsManager = new ActionsManager();
        this.commandsManager = new CommandsManager();

        this.debouncedEventHandler = debounce(this.dispatchCustomInputEvent.bind(this), 250);
    }

    connectedCallback() {
        setTimeout(() => {
            this.init();
        }, 10);
    }

    init() {
        this.initRootNode();
        this.initMenuNode();
        this.initConfig();
        this.initSchema();
        this.initTools();
        this.generateEditorState();
        this.createEditorView();
    }

    initRootNode() {
        let el = this.querySelector('div[data-type="editor"]');
        this.editorNode = el;
        this.editorNode.innerHTML = this.value;
    }

    initMenuNode() {
        this.menuNode = this.querySelector('div[data-type="menu"]');
    }

    initConfig() {
        this.config = new EditorConfig(this);
        this.config.init();
    }

    initSchema() {
        this.schema = generateBaseSchema(this);
    }

    generateEditorState() {
        this.state = EditorState.create({
            doc: DOMParser.fromSchema(this.schema).parse(this.editorNode),
            plugins: this.getPluginsList(this.menuNode),
        });
    
        this.editorNode.innerText = "";
    }

    createEditorView() {
        let attributes = {};

        if (this.dataset.editorClasses) {
            attributes.class = this.dataset.editorClasses;
        }

        this.view = new EditorView(this.editorNode, {
            state: this.state,
            attributes
        });

        this.view.dom.addEventListener('input', this.handleInputEvent.bind(this));
    }

    handleInputEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        
        this.debouncedEventHandler();
    }

    dispatchCustomInputEvent() {
        let inputEvent = new CustomEvent('input', {
            detail: this.editorNode.firstChild.innerHTML
        });

        this.editorNode.dispatchEvent(inputEvent);
    }

    initTools() {
        initNodes(this);
    }

    getPluginsList() {
        return [
            keymap(baseKeymap),
            initMenuPlugin(this),
        ];
    }
}