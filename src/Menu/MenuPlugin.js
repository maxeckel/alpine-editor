import { Plugin } from "prosemirror-state";
import MenuBar from "./MenuBar";

export default function initMenuPlugin(editor) {
    return new Plugin({
        view(editorView) {
            return new MenuBar(editor, editorView);
        }
    });
}