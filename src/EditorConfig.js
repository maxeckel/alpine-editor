export default class EditorConfig {
    constructor(editor) {
        this.editor = editor;
    }

    init() {
        for(let item in this.editor.dataset) {
            this[item] = this.editor.dataset[item];
        }
    }
}