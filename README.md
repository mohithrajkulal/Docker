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

## Did you know?
You can create a file call app.js and direct write using echo, syntax as mentioned below
echo "YOUR_CONTENT" > app.js
