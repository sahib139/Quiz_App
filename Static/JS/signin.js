async function validateSignInForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Email and password are required');
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
        const response = await axios.post("http://localhost:3000/api/v1/user/signIn",{
            email,
            password
        });
        setCookie("token",response.data.data,3);// expires in 3 days
        window.location.href="Html/quizPage.html";
    } catch (error) {
        console.log(error);
        return false;
    }
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function SignUp(){
    window.location.href="Html/signup.html";
} 