document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Handle registration
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            fetch('account.json')
                .then(response => response.json())
                .then(data => {
                    // Check if the user already exists
                    if (data.users.find(user => user.username === username)) {
                        alert('Username already exists');
                    } else {
                        // Add new user to the data
                        data.users.push({ username: username, password: password });
                        alert('Registered successfully');
                        // Ideally, save data to the server here
                    }
                });
        });
    }

    // Handle login
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('account.json')
                .then(response => response.json())
                .then(data => {
                    // Find user with matching username and password
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
