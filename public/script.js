function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

// LocalStorage + API dla komentarzy
async function loadComments() {
  const res = await fetch('/api/comments');
  const comments = await res.json();
  const list = document.getElementById('commentsList');
  list.innerHTML = '';
  comments.forEach(c => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${c.name}</strong>: ${c.text}`;
    list.appendChild(div);
  });
}

async function addComment() {
  const name = document.getElementById('commentName').value.trim();
  const text = document.getElementById('commentText').value.trim();
  if (!name || !text) return;

  await fetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, text })
  });

  loadComments();
  document.getElementById('commentName').value = '';
  document.getElementById('commentText').value = '';
}

// Czat (też z API + LocalStorage jako cache)
async function loadMessages() {
  const res = await fetch('/api/messages');
  const messages = await res.json();
  const box = document.getElementById('chatBox');
  box.innerHTML = '';
  messages.forEach(m => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${m.name}</strong>: ${m.message}`;
    box.appendChild(div);
  });
}

async function sendMessage() {
  const name = document.getElementById('chatName').value.trim();
  const message = document.getElementById('chatMessage').value.trim();
  if (!name || !message) return;

  await fetch('/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, message })
  });

  loadMessages();
  document.getElementById('chatMessage').value = '';
}

// Initial load
window.onload = () => {
  showTab('blog');
  loadComments();
  loadMessages();
};
