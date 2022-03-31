"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(author, message) {
        this.author = author;
        this.message = message;
    }
    /**
     * Getter author
     * @return {string}
     */
    getAuthor() {
        return this.author;
    }
    /**
     * Getter message
     * @return {string}
     */
    getMessage() {
        return this.message;
    }
}
exports.default = Message;
