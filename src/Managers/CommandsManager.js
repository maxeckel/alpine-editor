export default class CommandsManager {
    constructor() {
        this.commandsRegistry = {};
    }

    addCommand(key, action) {
        this.commandsRegistry[key] = action;
    }

    hasCommand(key) {
        return this.commandsRegistry.hasOwnProperty(key);
    }

    getCommand(key) {
        if (this.hasCommand(key)) {
            return this.commandsRegistry[key];
        }

        return false;
    }
}