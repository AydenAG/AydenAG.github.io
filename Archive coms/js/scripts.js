document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the send button
    document.getElementById('sendButton').addEventListener('click', function() {
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('messageInput').value;

        if (email && message) {
            displayMessage(email, message);
            document.getElementById('messageInput').value = ''; // Clear input
        }
    });

    // Function to display messages in the chat box
    function displayMessage(email, message) {
        const chatBox = document.getElementById('chatBox');

        const msgDiv = document.createElement('div');
        msgDiv.className = 'message ' + (email === 'you@example.com' ? 'user' : 'other');
        msgDiv.textContent = `${email}: ${message}`;

        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
});

