// ===== CZAT =====
function loadChat() {
    const chatBox = document.getElementById('chat-box');
    const chatData = JSON.parse(localStorage.getItem('chatMessages')) || [];
    chatBox.innerHTML = '';
    chatData.reverse().forEach(msg => {
        const newMsg = document.createElement('p');
        newMsg.innerHTML = `<strong>${msg.name}:</strong> ${msg.text}`;
        chatBox.appendChild(newMsg);
    });
}

function sendMessage() {
    const name = document.getElementById('chat-name').value.trim();
    const message = document.getElementById('chat-message').value.trim();
    if (name && message) {
        const chatData = JSON.parse(localStorage.getItem('chatMessages')) || [];
        chatData.push({ name, text: message });
        localStorage.setItem('chatMessages', JSON.stringify(chatData));
        loadChat();
        document.getElementById('chat-message').value = '';
    }
}

function clearChat() {
    if (confirm("Czy na pewno chcesz wyczyścić cały czat?")) {
        localStorage.removeItem('chatMessages');
        loadChat();
    }
}

// ===== KOMENTARZE =====
function loadComments() {
    const commentBox = document.getElementById('comments-box');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    commentBox.innerHTML = '';
    comments.reverse().forEach(com => {
        const newComment = document.createElement('p');
        newComment.innerHTML = `<strong>${com.name}:</strong> ${com.text}`;
        commentBox.appendChild(newComment);
    });
}

function addComment() {
    const name = document.getElementById('comment-name').value.trim();
    const comment = document.getElementById('comment-text').value.trim();
    if (name && comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ name, text: comment });
        localStorage.setItem('comments', JSON.stringify(comments));
        loadComments();
        document.getElementById('comment-text').value = '';
    }
}

function clearComments() {
    if (confirm("Czy na pewno chcesz wyczyścić wszystkie komentarze?")) {
        localStorage.removeItem('comments');
        loadComments();
    }
}

// ===== START =====
window.addEventListener('load', () => {
    loadChat();
    loadComments();
});
