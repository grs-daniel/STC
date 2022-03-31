"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = __importDefault(require("./message/Message"));
class App {
    constructor() {
        this.messages = [
            new Message_1.default('Josh', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
            new Message_1.default('Hoch', 'Vivamus id elit sed nisl fermentum pretium.'),
            new Message_1.default('Jake', 'Nulla faucibus metus et lorem dictum pretium.'),
            new Message_1.default('Paul', 'Curabitur consectetur metus semper gravida lacinia.'),
            new Message_1.default('Logan', 'Maecenas eget libero varius, porta ligula in, imperdiet dui.'),
            new Message_1.default('Kate', 'Nunc nec velit accumsan, condimentum libero non, condimentum nisl.'),
            new Message_1.default('Steve', 'Mauris ultricies massa pellentesque, venenatis massa non, ornare enim.'),
            new Message_1.default('Bill', 'Ut at arcu finibus, vehicula justo vel, suscipit arcu.')
        ];
        console.log('Messages:');
        this.messages.forEach(message => {
            console.log(message.getAuthor(), 'said:', message.getMessage());
        });
        console.log('End of messages!');
    }
}
exports.default = App;
