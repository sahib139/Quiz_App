const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkSignUp(req, res, next) {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            throw 'Username, email, and password are required';
        }
        if (!emailRegex.test(email)) {
            throw "Invalid email format";
        }
        if (password.length < 8) {
            throw 'Password must be at least 8 characters long';
        }
        next();
    } catch (error) {
        return res.status(400).json({ 
            message: "Bad Request!",
            err:error, 
        });
    }
}

function checkSignIn(req, res, next) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw 'Email and password are required';
        }
        if (!emailRegex.test(email)) {
            throw 'Invalid email format';
        }
        if (password.length < 8) {
            throw 'Password must be at least 8 characters long';
        }
        next();
    } catch (error) {
        return res.status(400).json({ 
            message: "Bad Request!",
            err:error, 
        });
    }
}

module.exports={
    checkSignIn,
    checkSignUp,
}