import commandList from '../commands/index.js';
import { handleInput, invalid } from "../helpers/index.js";

export default () => {

    //listen for "input" event
    process.stdin.on('data', (input) => {

        // Handle user input
        const command = handleInput(input);

        // Check the user's command
        (commandList[command] || invalid)();

    });

    // Listen for the Ctrl+C event
    process.on('SIGINT', () => commandList[".exit"]());

};