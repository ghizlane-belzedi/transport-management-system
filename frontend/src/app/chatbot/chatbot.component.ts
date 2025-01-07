import { Component } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';

@Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
    userInput: string = ''; // Holds the user's input
    messages: { text: string, isUser: boolean }[] = []; // Stores chat messages
    isChatOpen: boolean = false; // Controls chat window visibility

    constructor(private chatbotService: ChatbotService) {}

    // Toggle chat window visibility
    toggleChat() {
        this.isChatOpen = !this.isChatOpen;
    }

    // Send user message and get chatbot response
    sendMessage() {
        if (!this.userInput.trim()) return; // Ignore empty messages

        // Add user message to chat
        this.messages.push({ text: this.userInput, isUser: true });

        // Get chatbot response
        const response = this.chatbotService.getResponse(this.userInput);

        // Add chatbot response to chat
        this.messages.push({ text: response, isUser: false });

        // Clear the input field
        this.userInput = '';

        // Scroll to the bottom of the chat window
        this.scrollToBottom();
    }

    // Scroll to the bottom of the chat window
    private scrollToBottom() {
        setTimeout(() => {
            const chatBody = document.querySelector('.chat-body');
            if (chatBody) {
                chatBody.scrollTop = chatBody.scrollHeight;
            }
        }, 100);
    }
}