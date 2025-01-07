import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {
    private chatbot = new Chatbot();

    constructor() {}

    // Get a response from the chatbot
    public getResponse(userInput: string): string {
        return this.chatbot.getResponse(userInput);
    }
}

// Chatbot class (defined above)
class Chatbot {
    private responses: { [key: string]: string } = {
        greeting: "Hello! How can I help you today?",
        farewell: "Goodbye! Have a great day!",
        thanks: "You're welcome! Let me know if you need anything else.",
        transport_schedule: "The bus 12 runs every 15 minutes from 6 AM to 10 PM.",
        transport_route: "Bus 8 starts from the central station and stops at A, B, and C.",
        transport_fare: "A bus ticket costs $1.50. Monthly passes are also available.",
        unknown: "I'm sorry, I don't understand. Can you rephrase that?"
    };

    private recognizeIntent(userInput: string): string {
        userInput = userInput.toLowerCase();

        if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("hey")) {
            return "greeting";
        } else if (userInput.includes("bye") || userInput.includes("goodbye") || userInput.includes("see you")) {
            return "farewell";
        } else if (userInput.includes("thank you") || userInput.includes("thanks") || userInput.includes("appreciate it")) {
            return "thanks";
        } else if (userInput.includes("schedule") || userInput.includes("bus") || userInput.includes("time")) {
            return "transport_schedule";
        } else if (userInput.includes("route") || userInput.includes("stops") || userInput.includes("bus 8")) {
            return "transport_route";
        } else if (userInput.includes("fare") || userInput.includes("cost") || userInput.includes("price")) {
            return "transport_fare";
        } else {
            return "unknown";
        }
    }

    public getResponse(userInput: string): string {
        const intent = this.recognizeIntent(userInput);
        return this.responses[intent] || this.responses["unknown"];
    }
}