'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const questions = [
      {
        question: 'What is Node.js?',
        options: JSON.stringify(['A web framework', 'A JavaScript runtime', 'A database management system', 'A programming language']),
        correct_answer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Which of the following best describes the event loop in Node.js?',
        options: JSON.stringify(['A loop that continuously checks for new events', 'A loop that handles asynchronous callbacks', 'A loop that iterates over arrays', 'A loop that synchronously executes code']),
        correct_answer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'How does Node.js handle asynchronous operations?',
        options: JSON.stringify(['By blocking the main thread', 'By using multi-threading', 'By using event-driven, non-blocking I/O', 'By using synchronous functions']),
        correct_answer: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is a module in Node.js?',
        options: JSON.stringify(['A built-in JavaScript function', 'A function that handles HTTP requests', 'A reusable piece of code encapsulated in a file', 'A type of data structure']),
        correct_answer: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Which module in Node.js is used for working with file systems?',
        options: JSON.stringify(['fs', 'http', 'path', 'url']),
        correct_answer: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is the purpose of the "require" function in Node.js?',
        options: JSON.stringify(['To include external libraries or modules', 'To define a new variable', 'To create a new event listener', 'To call a function asynchronously']),
        correct_answer: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Which of the following is true about callbacks in Node.js?',
        options: JSON.stringify(['They are always synchronous', 'They are passed as arguments to asynchronous functions', 'They can only be used with the "setTimeout" function', 'They are used to define global variables']),
        correct_answer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'How can you handle errors in Node.js asynchronous functions?',
        options: JSON.stringify(['By using try-catch blocks', 'By using the "return" keyword', 'By using the "throw" keyword', 'By using the "await" keyword']),
        correct_answer: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is the purpose of the "exports" object in Node.js modules?',
        options: JSON.stringify(['To import external modules', 'To define variables and functions that can be accessed by other modules', 'To handle HTTP requests', 'To create a new instance of a module']),
        correct_answer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Which of the following is true about the "global" object in Node.js?',
        options: JSON.stringify(['It is accessible only in the main module', 'It is used to define global variables and functions', 'It is used to import external modules', 'It is a reserved keyword and cannot be used in user-defined code']),
        correct_answer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is the purpose of the "process" object in Node.js?',
        options: JSON.stringify(['To handle HTTP requests', 'To provide information about the current Node.js process', 'To define new variables', 'To create child processes']),
        correct_answer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'How can you read environment variables in a Node.js application?',
        options: JSON.stringify(['By using the "env" module', 'By using the "process.env" object', 'By using the "require" function', 'By using the "readFile" function']),
        correct_answer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is the purpose of the "Buffer" class in Node.js?',
        options: JSON.stringify(['To store binary data', 'To manipulate strings', 'To handle file operations', 'To parse JSON data']),
        correct_answer: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Which of the following is true about streams in Node.js?',
        options: JSON.stringify(['They can only be used for reading data', 'They are used to handle large amounts of data efficiently', 'They can only be used with file systems', 'They are synchronous by default']),
        correct_answer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'How can you install external packages in a Node.js application?',
        options: JSON.stringify(['By using the "npm install" command', 'By including a <script> tag in the HTML file', 'By using the "require" function', 'By using the "install" module']),
        correct_answer: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Questions', questions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
