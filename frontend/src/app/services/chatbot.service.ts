import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ChatbotService {
    // Define responses for different intents
    private responses: { [key: string]: string } = {
        "hello": "Hello! How can I assist you today?",
        "hi": "Hi there! How can I help you?",
        "how are you": "I'm just a chatbot, but I'm here to help!",
        "bye": "Goodbye! Have a great day!",
        "comment je peux acceder pour acheter un ticket": "Veuillez consulter la rubrique 'Acheter un ticket' et remplir les champs requis.",
        "comment je peux acceder pour voir les trajets": "Veuillez consulter la rubrique 'Voir les trajets' pour visualiser les trajets disponibles.",
        "donner moi les trajets": "Veuillez consulter la rubrique 'Voir les trajets' pour visualiser tous les trajets.",
        "unknown": "Je suis désolé, je n'ai pas compris. Pouvez-vous reformuler votre question ?"
    };

    constructor() {}

    // Get a response based on user input
    getResponse(userInput: string): string {
        const lowerCaseInput = userInput.toLowerCase();

        // Check for specific intents
        if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
            return this.responses["hello"];
        } else if (lowerCaseInput.includes('how are you')) {
            return this.responses["how are you"];
        } else if (lowerCaseInput.includes('bye')) {
            return this.responses["bye"];
        } else if (lowerCaseInput.includes('acheter un ticket') || lowerCaseInput.includes('accéder pour acheter un ticket')) {
            return this.responses["comment je peux acceder pour acheter un ticket"];
        } else if (lowerCaseInput.includes('voir les trajets') || lowerCaseInput.includes('accéder pour voir les trajets')) {
            return this.responses["comment je peux acceder pour voir les trajets"];
        } else if (lowerCaseInput.includes('donner moi les trajets') || lowerCaseInput.includes('trajets')) {
            return this.responses["donner moi les trajets"];
        } else {
            return this.responses["unknown"];
        }
    }
}