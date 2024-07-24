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


Key Components

React.js Frontend: Utilizes React.js, a popular JavaScript library for building user interfaces, to create a dynamic and responsive front end.

Component-Based Architecture: Follows a component-based architecture, allowing for reusable and maintainable UI components.

State Management: Uses Context API and React Hooks for efficient state management across the application.

Routing: Implements React Router for handling client-side routing, enabling seamless navigation between different pages and views.

API Integration: Communicates with the backend API using Axios for data fetching, ensuring a smooth and interactive user experience.

Styling: Incorporates CSS Modules and styled-components for modular and scoped styling, maintaining consistency and ease of maintenance.

Forms and Validation: Utilizes libraries like Formik and Yup for building and validating forms, providing a robust solution for user input handling.

Error Handling: Includes error boundaries and global error handling mechanisms to ensure the application gracefully handles and displays errors.

Testing: Employs testing libraries such as Jest and React Testing Library to ensure the reliability and correctness of UI components and functionalities.

Responsive Design: Ensures the application is fully responsive and mobile-friendly, providing an optimal user experience across various devices and screen sizes.

User Authentication: Implements user authentication and authorization mechanisms to secure the application and restrict access to certain features and pages.


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


