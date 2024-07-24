KVWN News Frontend

KVWN News is a React-based web application for browsing, reading, and interacting with news articles. This project uses React, React Router, Axios, and Vite for development, along with a custom context for user authentication.


Make sure you have the following installed on your machine:

Node.js (>=16.x.x)

npm (>=8.x.x)


Installation
Clone the repository:

Copy code
git clone https://github.com/yourusername/kvwn-news-frontend.git

cd kvwn-news-frontend


Install the dependencies:

Copy code

npm install

Development


Running the App
To start the development server:

Copy code

npm run dev

This will start the Vite development server and open the app in your default browser. Any changes you make will automatically reload the browser.


API Integration

This project uses Axios for making HTTP requests to the backend API.

API functions are defined in src/utils/api.js:

getUsers()

getArticles(params)

getTopics()

getArticleById(id)

getCommentsById(id)

voteOnArticle(id, voteType)

addComment(id, comment)

deleteComment(id)

User Authentication

User authentication is managed using the UserContext. The context provides user state and methods to set the user. It leverages localStorage to persist the user session.


Protected Routes
Routes are protected using the ProtectedRoute component. If a user is not logged in, they are redirected to the login page.


Example usage in App.jsx:

jsx

Copy code

<Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />


