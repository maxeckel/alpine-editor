import { joinDown, joinUp, lift } from "prosemirror-commands";
import { addListNodes, wrapInList } from "prosemirror-schema-list";
    
export default function initLists(editor) {
    editor.commandsManager.addCommand('bullet_list', {action: wrapInList, toggle: 'hideable'});
    editor.commandsManager.addCommand('ordered_list', {action: wrapInList, toggle: 'hideable'});
    editor.commandsManager.addCommand('list_item', {action: wrapInList, toggle: 'hideable'});

    editor.actionsManager.addAction('lift', lift);
    editor.actionsManager.addAction('join_up', joinUp);
    editor.actionsManager.addAction('join_down', joinDown);

    return addListNodes(editor.schemaNodeSpec, "paragraph block*", "block");
}