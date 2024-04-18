class AppError extends Error {

    constructor(name, statusCode, message, explanation) {

        super();
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;

    }
}

module.exports = AppError;