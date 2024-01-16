document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Send a POST request to the server
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        alert('アカウントが作成されました：' + data.username);
        // アカウント作成後にlogin.htmlへ遷移
        window.location.href = 'login.html';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});