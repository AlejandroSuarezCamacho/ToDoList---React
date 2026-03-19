import Task from "./Task.js";

export default class TaskList {
    constructor() {
        this.tasks = [];
    }

    add(text) {
        if (!text.trim()) return false;
        this.tasks = [...this.tasks, new Task(text)];
        return true;
    }

    remove(id) {
        this.tasks = this.tasks.filter((t) => t.id !== id);
    }

    toggle(id) {
        this.tasks = this.tasks.map((t) => {
            if (t.id !== id) return t;
            const updated = Object.assign(new Task(t.text), t);
            updated.done = !t.done;
            return updated;
        });
    }

    getAll() {
        return [...this.tasks];
    }
}
