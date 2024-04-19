# Welcome to the Quiz App

## Project Setup
- clone the project on your local.
- Execute `npm install` in the root directory.
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT = 3000`
    - `Secrete_Key = <Write Secrete key for JWT Authentication purpose>`
    - `Static_File_Path = <Actual path for Static File>`
      
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of JSON

```
{
  "development": {
    "username": "<database_username>",
    "password": "<database_password>",
    "database": "QuizDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize-cli db:create`

- After creating the database by executing the above command, now create all the tables by executing `npx sequelize-cli db:migrate:all` in the src folder.

- Now execute `npx sequelize-cli  db:seed:all` to add the record(questions) in the question field.
```
- DB Design
  - User Table
  - Question Table
  - Response Table

  - A response belongs to a user.
  - A user can have many responses according to different questions.
  - A question can have many responses according to different users.

- API 
  - CRUD API for Question and Response
  - Score and Feedback API is also included after submitting the responses using
    create or bulkResponses API
  - User SignIn and SignUp API are also included.
```
- Finally, Run the `npm start` in the root directory to run the Server.
- Now open [QuizApp](http://localhost:3000/)

### Note ->
- In src/config/server-config.js `DB_SYNC = false` for syncing the database initially make it true, after executing once change it to false because we don't want to do syncing every time we start the server. 
