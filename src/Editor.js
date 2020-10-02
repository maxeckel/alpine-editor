import { DOMParser, Schema } from "prosemirror-model";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { schema } from "prosemirror-schema-basic";
import { findNode } from "./Utils";
import { baseKeymap } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import initMenuPlugin from "./Menu/MenuPlugin";
import ActionsManager from "./Managers/ActionsManager";
import CommandsManager from "./Managers/CommandsManager";
import initLists from "./Lists/Lists";
import initNodes from "./Nodes/Nodes";

export default class AlpineEditor
{
    constructor(element, menu, config) {
        this.config = config;

        const menuNode = findNode(menu);

        this.state = null;
        this.view = null;
        this.editorNode = null;
        this.actionsManager = new ActionsManager();
        this.commandsManager = new CommandsManager();
        this.schemaNodeSpec = schema.spec.nodes;

        this.init(element, menuNode);
    }

    init(element, menuNode) {
        this.initRootNode(element);
        this.generateEditorState(menuNode);
        this.createEditorView();
    }

    initRootNode(element) {
        this.editorNode = findNode(element);

        if (this.config.content) {
            this.editorNode.innerHTML = this.config.content;
        }
    }

    generateEditorState(menuNode) {
        this.initTools();

        let editorSchema = new Schema({
            nodes: this.schemaNodeSpec,
            marks: schema.spec.marks
        });

        this.state = EditorState.create({
            doc: DOMParser.fromSchema(editorSchema).parse(this.editorNode),
            plugins: this.getPluginsList(menuNode),
        });

        this.editorNode.innerText = "";
    }

    createEditorView() {
        this.view = new EditorView(this.editorNode, {
            state: this.state, 
            attributes: {
                class: this.config.editorClasses || ""
            }
        });

        this.view.dom.addEventListener('input', this.handleInputEvent.bind(this));
    }

    handleInputEvent() {
        let node = this.editorNode.firstChild;

        console.log(`Editor: ${node.innerHTML}`);

        this.config.content = node.innerHTML;
    }

    initTools() {
        this.schemaNodeSpec = initLists(this);
        initNodes(this);
    }

    getPluginsList(menuNode) {
        return [
            keymap(baseKeymap),
            initMenuPlugin(menuNode, this),
        ];
    }
}