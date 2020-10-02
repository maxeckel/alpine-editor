import { Plugin } from "prosemirror-state";
import MenuBar from "./MenuBar";

export default function initMenuPlugin(menuNode, editor) {
    return new Plugin({
        view(editorView) {
            return new MenuBar(menuNode, editor, editorView);
        }
    });
}