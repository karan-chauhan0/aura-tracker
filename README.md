AuraTracker

AuraTracker is a web app for tracking progress, managing tasks, and achieving goals with ease. It offers a user-friendly dashboard, secure authentication, and a responsive design.

Features

Auth0 Authentication: Secure login/logout with social options.
Dashboard Access: Personalized dashboard with user progress.
Responsive Design: Seamless experience across devices.
Protected Routes: Restricted access for unauthenticated users.
Technologies

React for the front-end
Auth0 for secure authentication
React Router for navigation
Vite for fast development and production builds
CSS for styling
Getting Started

Clone the repository:
git clone https://github.com/your-username/AuraTracker.git
cd AuraTracker
cd codebench

Install dependencies:
npm install

Configure Auth0:
Sign up on Auth0.

Create an app, and get the Domain and Client ID.
Add these to your environment config.

Run the app:
npm run dev

├── src
│   ├── App.js               # Main application file
│   ├── index.js             # Entry point
│   ├── Components
│   │   ├── Navbar
│   │   │   ├── Navbar.js    # Navbar component
│   │   │   ├── Navbar.css   # Navbar styles
│   │   ├── Dashboard
│   │   │   ├── Dashboard.js # Dashboard component
│   │   │   ├── Dashboard.css# Dashboard styles
│   │   └── Login
│   │       ├── Login.js     # Login component
│   │       ├── Login.css    # Login styles
│   └── ProtectedRoute.js    # Component to handle route protection


Fork the project.
Create your feature branch: git checkout -b feature/AmazingFeature
Commit changes: git commit -m 'Add AmazingFeature'
Push to branch: git push origin feature/AmazingFeature
Open a pull request.
License

Distributed under the MIT License.
