document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            fetch('account.json')
                .then(response => response.json())
                .then(data => {
                    if (data.users.find(user => user.username === username)) {
                        alert('Username already exists');
                    } else {
                        data.users.push({ username: username, password: password });
                        alert('Registered successfully');
                        // Ideally, save data to the server here
                    }
                });
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('account.json')
                .then(response => response.json())
                .then(data => {
                    const user = data.users.find(user => user.username === username && user.password === password);
                    if (user) {
                        alert('Login successful');
                        // Redirect to another page or perform some action
                    } else {
                        alert('Invalid username or password');
                    }
                });
        });
    }
});
