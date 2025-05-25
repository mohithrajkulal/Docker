# 🐳 Docker Basics: From Dockerizing Apps to Pushing on Docker Hub

This repository contains step-by-step instructions and examples to learn Docker fundamentals, including:
- Writing a Dockerfile
- Building a Docker image
- Running a container
- Pushing to Docker Hub

## 📦 What is Docker?

Docker is a platform that packages applications and all their dependencies into a **container**, ensuring consistent environments across development, testing, and production.

## 🧪 Steps to Dockerize and Push

## ✅ Step 1: Build Docker Image
`docker build -t your-dockerhub-username/my-app:latest`

## ✅ Step 2: Run Locally
`docker run -p 3000:3000 your-dockerhub-username/my-app:latest`

Visit: http://localhost:3000

## ✅ Step 3: Push to Docker Hub
Login to Docker:
`docker login`

Push the image:
`docker push your-dockerhub-username/my-app:latest`

## 🐙 Docker Hub
Docker Hub is a cloud-based registry where you can store and share container images.

Your pushed image will be accessible at:
https://hub.docker.com/repository/docker/your-dockerhub-username/my-app

## IMP Docker commands
list active containers:-
`docker ps`

to stop the conatiner that is running:-
`docker stop <container_id>`

to change the port:-
`docker run -p 3001:3000 my-app`

## Did you know?
You can also test the express app using the cmd:

Post: `curl -X POST http://localhost:3000/greet \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from terminal"}'`

Get: `curl http://localhost:3000`
  
You can create a file call app.js and direct write using echo, syntax as mentioned below

`echo "YOUR_CONTENT" > app.js`

Ex: 
```echo "const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server listening on port \${port}\`);
});
" > app.js
