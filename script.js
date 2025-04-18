// ===== CZAT =====
function loadChat() {
    const chatBox = document.getElementById('chat-box');
    const chatData = JSON.parse(localStorage.getItem('chatMessages')) || [];

    chatData.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${message.name}:</strong> ${message.message}`;
        chatBox.appendChild(messageElement);
    });
}

function sendMessage() {
    const name = document.getElementById('chat-name').value;
    const message = document.getElementById('chat-message').value;

    if (name && message) {
        const chatData = JSON.parse(localStorage.getItem('chatMessages')) || [];
        chatData.push({ name, message });
        localStorage.setItem('chatMessages', JSON.stringify(chatData));

        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${name}:</strong> ${message}`;
        chatBox.appendChild(messageElement);

        document.getElementById('chat-message').value = ''; // clear message input
    }
}

// ===== KOMENTARZE =====
function loadComments() {
    const commentsBox = document.getElementById('comments-box');
    const commentsData = JSON.parse(localStorage.getItem('comments')) || [];

    commentsData.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>${comment.name}:</strong> ${comment.text}`;
        commentsBox.appendChild(commentElement);
    });
}

function addComment() {
    const name = document.getElementById('comment-name').value;
    const text = document.getElementById('comment-text').value;

    if (name && text) {
        const commentsData = JSON.parse(localStorage.getItem('comments')) || [];
        commentsData.push({ name, text });
        localStorage.setItem('comments', JSON.stringify(commentsData));

        const commentsBox = document.getElementById('comments-box');
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>${name}:</strong> ${text}`;
        commentsBox.appendChild(commentElement);

        document.getElementById('comment-text').value = ''; // clear comment input
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadChat();
    loadComments();
});
