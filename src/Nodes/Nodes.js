import { setBlockType, wrapIn } from "prosemirror-commands";

export default function initNodes(editor) {
    editor.commandsManager.addCommand('heading', {action: setBlockType, toggle: 'activatable'});
    editor.commandsManager.addCommand('paragraph', {action: setBlockType, toggle: 'activatable'});
    editor.commandsManager.addCommand('blockquote', {action: wrapIn, toggle: 'activatable'});
    editor.commandsManager.addCommand('code_block', {action: setBlockType, toggle: 'activatable'});

    return editor.schemaNodeSpec;
}