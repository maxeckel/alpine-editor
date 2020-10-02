export function findNode(node) {
    if (node instanceof HTMLElement) {
        return node;
    }

    let foundNode = document.getElementById(node);
    
    if (!foundNode) throw new Error(`Could not find an Element with ID: ${node}`);

    return foundNode;
}