// defines behavior of app
import { EventEmitter } from './helpers';
//
class Model extends EventEmitter {
    constructor(items = []) {
        super();
        // items - array, which describes model's state
        this.items = items;
    }

    // gets note from models state
    getItem(id) {
        return this.items.find(item => item.id == id);
    }

    // adds note to the models state
    addItem(item) {
        this.items.push(item);
        this.emit('change', this.items);
        return item;
    }

    // updates state of specific note
    updateItem(id, data) {
        const item = this.getItem(id);

        Object.keys(data).forEach(prop => item[prop] = data[prop]);

        this.emit('change', this.items);

        return item;
    }

    // removes note from items
    removeItem(id) {
        const index = this.items.findIndex(item => item.id == id);

        if (index > -1) {
            this.items.splice(index, 1);
            this.emit('change', this.items);
        }
    }
}

export default Model;