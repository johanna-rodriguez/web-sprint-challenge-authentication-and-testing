# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup

- [ ] Run `npm install` to install your dependencies.
- [ ] Run tests locally executing `npm test`.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

### MVP

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [ ] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [ ] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [ ] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**IMPORTANT Notes:**

- Do not exceed 2^8 rounds of hashing with `bcryptjs`.
- If you use environment variables make sure to provide fallbacks in the code (e.g. `process.env.SECRET || "shh"`).
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. Do not update existing packages.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `<firstName-lastName>` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

In the session based authentication, the server will create a session for the user after the user logs in. The session id is then stored on a cookie on the user’s browser. While the user stays logged in,
the cookie would be sent along with every subsequent request. The server can then compare the session id stored on the cookie against the session information stored in the memory to verify user’s identity 
and sends response with the corresponding state and for JSON Web Tokens authentication to authenticate a user, a client application must send a JSON Web Token (JWT) in the authorization header of the HTTP 
request to your backend API. API Gateway validates the token on behalf of your API, so you don't have to add any code in your API to process the authentication.


2. What does `bcryptjs` do to help us store passwords in a secure manner?


Using bcrypt is a secured way to store passwords in my database regardless of whatever language my app's backend is built in — PHP, Ruby, Python, Node. js, etc. Salted hashing 
Generating random bytes (the salt) and combining it with the password before hashing creates unique hashes across each user's password.



3. How are unit tests different from integration and end-to-end testing?


        Integration testing
- Integration testing starts at the very early stages of development. Bugs are caught earlier, rather than later, in the cycle.
- It's easy to integrate with daily builds and easy to test in the development environment.
- Tests run faster compared to end-to-end tests.
- Aims to test how external systems work with internal modules, one by one.
- Used to test a single process from third-party software that will be used in conjunction with your software.

        End-to-end testing
- End-to-end testing is done when the product is almost ready for release.  
- It may be impossible to perform until the product is nearing completion.
- Tests run slower compared to integration testing.
- Aims to test the user experience from start to finish.
- Can be used for either a single process being executed from start to finish or various different processes involving different applications.



4. How does _Test Driven Development_ change the way we write applications and tests?


Test driven development (TDD) is an iterative development process. Developers write a test before they write just enough production code to fulfill that test and the subsequent refactoring. 
Developers use the specifications and first write test describing how the code should behave. It is a rapid cycle of testing, coding, and refactoring.


