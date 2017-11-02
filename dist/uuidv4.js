"use strict";
export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var n = c === 'x' ? r : (0x8 | (r & 0x3));
        return n.toString(16);
    });
}
