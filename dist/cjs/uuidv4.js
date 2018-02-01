"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const n = c === 'x' ? r : (0x8 | (r & 0x3));
        return n.toString(16);
    });
}
exports.uuidv4 = uuidv4;
