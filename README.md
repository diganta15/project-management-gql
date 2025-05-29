# Project Management GraphQL Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A full-stack project management system built with React frontend, GraphQL API, and MongoDB database. This application enables tracking clients and projects with real-time updates through Apollo Client state management[4][6].

![App Screenshot](https://via.placeholder.com/800x400?text=Project+Management+Demo)

## Features ✨
- **Client Management**: Add/delete clients with contact information using GraphQL mutations[4]
- **Project Tracking**: Create projects linked to clients with status updates (Not Started/In Progress/Completed)[4]
- **Real-Time Updates**: Apollo Client caching and automatic UI refresh on data changes[4]
- **GraphQL API**: Flexible queries with filtering and nested relationships[4][16]
- **Responsive UI**: React components with modal forms and error handling[4]

## Tech Stack 🛠️
### Frontend
- React 19.1.0 with Create React App
- Apollo Client 3.13.8 for GraphQL integration
- React Router 7.6.0 for navigation
- React Icons 5.5.0 for UI elements

### Backend
- Express 5.1.0 server
- GraphQL 15.10.1 with express-graphql middleware
- Mongoose 8.13.2 for MongoDB ORM
- MongoDB Atlas cloud database

## Getting Started 🚀

### Prerequisites
- Node.js ≥16.x
- MongoDB Atlas account or local instance
- Git version control

### Installation
1. Clone the repository:
git clone https://github.com/diganta15/project-management-gql.git
cd project-management-gql


2. Install server dependencies:
cd server && npm install


### Configuration
1. Create `.env` file in `server` directory:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/project-mngt?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development


2. Seed sample data (optional):
node server/sampleData.js


## Running the Application ▶️
1. Start GraphQL server:
cd server && npm run dev


2. Start React client:
cd ../client && npm start


**Access:**
- Frontend: `http://localhost:3000`
- GraphiQL IDE: `http://localhost:5000/graphql`

## Project Structure 📂
project-management-gql/
├── client/ # React frontend
│ ├── public/ # Static assets (favicon, index.html)
│ └── src/
│ ├── components/ # Reusable UI components
│ ├── mutations/ # GraphQL mutation definitions
│ ├── queries/ # GraphQL query operations
│ ├── pages/ # Main application views
│ └── App.js # Root component
│
├── server/ # GraphQL backend
│ ├── config/ # Database configuration
│ ├── models/ # Mongoose schemas
│ ├── schema/ # GraphQL type definitions
│ └── index.js # Server entry point
│
├── .gitignore # Version control exclusions
└── LICENSE # MIT License file


## API Documentation 📚
### Example Queries
Get all clients with their projects

query GetClientsWithProjects {
clients {
id
name
email
projects {
id
name
status
}
}
}
Filter projects by status

query GetInProgressProjects {
projects(status: "IN_PROGRESS") {
id
name
description
client {
name
}
}
}


### Example Mutations
Add new client

mutation AddClient($input: ClientInput!) {
addClient(input: $input) {
id
name
email
}
}
Update project status

mutation UpdateProjectStatus($id: ID!, $status: ProjectStatus!) {
updateProjectStatus(id: $id, status: $status) {
id
status
updatedAt
}
}


## Contributing 🤝
1. Fork the project repository
2. Create feature branch:
git checkout -b feature/amazing-feature
3. Commit changes using GitHub CLI[5]:
gh auth login --scopes "repo"
git commit -m 'Add amazing feature'
4. Push to branch:
git push origin feature/amazing-feature
5. Open a Pull Request with detailed description

## License 📄
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Coding!** 👨💻👩💻
