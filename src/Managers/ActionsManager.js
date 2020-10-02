export default class ActionsManager {
    constructor() {
        this.actionsRegistry = {};
    }

    addAction(key, action) {
        this.actionsRegistry[key] = action;
    }

    hasAction(key) {
        return this.actionsRegistry.hasOwnProperty(key);
    }

    getAction(key) {
        if (this.hasAction(key)) {
            return this.actionsRegistry[key];
        }

        return false;
    }
}