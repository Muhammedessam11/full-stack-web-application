# Full-Stack Application with Kubernetes and Jenkins Pipeline

## Overview
This project is a full-stack web application with a **React frontend**, **Node.js backend**, and a **MySQL database**. The application is containerized using Docker, orchestrated with Kubernetes (K8s), and includes a CI/CD pipeline implemented using Jenkins.

---

## Project Structure
```
project/
├── backend/
│   ├── Dockerfile            # Dockerfile for backend
│   ├── server.js             # Node.js backend server
│   ├── package.json          # Dependencies for backend
│   └── knexfile.js           # Knex.js configuration for DB migrations
├── frontend/
│   ├── Dockerfile            # Dockerfile for frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.js            # Main React app
│   │   ├── index.js          # React entry point
│   │   └── styles.css        # CSS for styling
│   └── package.json          # Dependencies for frontend
├── database/
│   └── init.sql              # Initial MySQL database schema
├── docker-compose.yml         # Docker Compose file for local development
├── k8s/
│   ├── backend-deployment.yml   # Kubernetes Deployment for backend
│   ├── frontend-deployment.yml  # Kubernetes Deployment for frontend
│   ├── mysql-deployment.yml     # Kubernetes Deployment for MySQL
│   ├── backend-service.yml      # Kubernetes Service for backend
│   ├── frontend-service.yml     # Kubernetes Service for frontend
│   └── mysql-service.yml        # Kubernetes Service for MySQL
├── Jenkinsfile                # CI/CD pipeline script
└── README.md                  # Documentation
```

---

## Prerequisites

1. **Docker** and **Docker Compose** installed locally.
2. Kubernetes cluster (e.g., Minikube, Kind, or a cloud provider).
3. Jenkins server installed and configured.
4. Node.js and npm installed (for local development).
5. MySQL database client (optional for direct interaction).

---

## Setup Instructions

### **Step 1: Clone the Repository**
```bash
git clone <repository-url>
cd project
```

### **Step 2: Setup Environment Variables**
Create a `.env` file in the `backend/` directory with the following content:
```
DB_HOST=mysql
DB_USER=root
DB_PASSWORD=example
DB_NAME=my_database
```

### **Step 3: Initialize the Database**
Run the SQL script to initialize the database schema:
```bash
docker exec -i <mysql-container-name> mysql -u root -pexample < database/init.sql
```

### **Step 4: Run Locally Using Docker Compose**
To start the application locally:
```bash
docker-compose up --build
```
Access the application:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## Kubernetes Deployment

### **Step 1: Apply Kubernetes Manifests**
Ensure your Kubernetes context is set correctly and apply the manifests:
```bash
kubectl apply -f k8s/
```

### **Step 2: Verify Deployments**
Check that all pods are running:
```bash
kubectl get pods
```
Check services for external access:
```bash
kubectl get services
```

### **Step 3: Access the Application**
If using Minikube, enable the service:
```bash
minikube service frontend-service
```

---

## CI/CD Pipeline

### **Pipeline Overview**
The CI/CD pipeline performs the following steps:
1. Pull source code from GitHub.
2. Build Docker images for the frontend and backend.
3. Push Docker images to Docker Hub.
4. Deploy the application to the Kubernetes cluster.

### **Jenkins Pipeline Configuration**
1. Install the required plugins:
   - Kubernetes
   - Docker
   - Git
2. Create a new Jenkins pipeline and link it to the `Jenkinsfile` in the repository.
3. Add credentials for Docker Hub and Kubernetes access.

---

## Technologies Used

### **Frontend**
- React.js
- CSS

### **Backend**
- Node.js
- Express.js
- Knex.js (for database migrations)

### **Database**
- MySQL

### **Containerization and Orchestration**
- Docker
- Kubernetes

### **CI/CD**
- Jenkins

---

## Testing

### **Unit Testing**
- Backend: Use a testing framework like Jest.
- Frontend: Use React Testing Library.

### **Integration Testing**
1. Ensure services communicate properly (e.g., backend connects to MySQL).
2. Use tools like Postman to test API endpoints.


---

## Contributors
- **Muhammad Essam**

