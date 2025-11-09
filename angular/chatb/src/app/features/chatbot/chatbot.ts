import { Component, inject, signal, OnInit } from '@angular/core';
import { GeminiService } from '../../core/services/gemini';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Define the structure for a single message in the chat history
interface ChatMessage {
  text: string;
  sender: 'user' | 'gemini';
}


@Component({
  selector: 'app-chatbot', // Standard Angular selector naming convention
  standalone: true, // IMPORTANT: Enables use in other standalone components
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
})
export class Chatbot {
  private geminiService = inject(GeminiService);

  // State signals
  userPrompt = signal('');
  isLoading = signal(false);

  // Message history signal
  messages = signal<ChatMessage[]>([
    {
      text: "Hello! I can tell you about cab costs and driver status. Try asking: 'What is the cost of cab booking?'",
      sender: 'gemini',
    },
  ]);

  /**
   * Handles user input submission, calls the Gemini service, and updates the chat history.
   */
  async submitPrompt() {
    const prompt = this.userPrompt().trim();
    if (!prompt || this.isLoading()) return;

    this.isLoading.set(true);
    this.userPrompt.set(''); // Clear input immediately

    // 1. Add user message to history
    this.messages.update((msgs) => [...msgs, { text: prompt, sender: 'user' }]);

    try {
      // 2. Call the service to get the AI response (responseText is the clean string, e.g., "$25")
      const responseText = await this.geminiService.generateContent(prompt);

      // 3. Add Gemini response to history
      this.messages.update((msgs) => [
        ...msgs,
        { text: responseText, sender: 'gemini' },
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);
      this.messages.update((msgs) => [
        ...msgs,
        {
          text: 'Failed to connect to the AI service. Check your API key and console for errors.',
          sender: 'gemini',
        },
      ]);
    } finally {
      this.isLoading.set(false);
      // Optional: scroll to the bottom of the chat window after a response
      this.scrollToBottom();
    }
  }

  /**
   * Helper function to scroll the chat display to the bottom after a new message.
   */
  private scrollToBottom() {
    // Note: In a real app, you'd use ViewChild to get the element ref
    // For this environment, we rely on the DOM structure:
    setTimeout(() => {
      const chatDisplay = document.querySelector('.chat-display');
      if (chatDisplay) {
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
      }
    }, 0);
  }
}

