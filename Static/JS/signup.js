async function validateSignUpForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!username || !email || !password) {
        alert('Username, email, and password are required');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return false;
    }
    
    try {
        await axios.post("http://localhost:3000/api/v1/user/signUp",{
            username,
            email,
            password
        });
        window.location.href="/";
    } catch (error) {
        console.log(error);
        return false;
    }
    
}

function SignIn(){
    window.location.href="/";
}