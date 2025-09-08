🚀 Node.js CI/CD Deployment with GitHub Actions, AWS ECR & ECS

This project demonstrates a **production-ready CI/CD pipeline** for deploying a Node.js application using modern cloud-native practices.  

By combining **GitHub Actions** with **AWS ECR (Elastic Container Registry)** and **ECS (Elastic Container Service – Fargate)**, the workflow enables seamless containerization, automated builds, and zero-downtime deployments.
---
☁️ AWS Setup
- IAM user with ECR and ECS permissions
- ECS Cluster + Service + Task Definition created

---
GitHub Secrets configured
- In Repo → Settings → Secrets → Actions, add:
   - AWS_ACCESS_KEY_ID
   - AWS_SECRET_ACCESS_KEY

---
🔄 Deployment Flow

- Push code to main branch
- GitHub Actions builds Docker image
- Image is pushed to ECR
- ECS task definition is updated
- ECS service pulls and runs the new image
---
<img width="1918" height="960" alt="complet-cicd-workflow" src="https://github.com/user-attachments/assets/cb646276-441c-4024-9d0d-b85b7d0d973b" />

🌐 Accessing the Application

- Go to AWS Console → ECS → Cluster → Service → Task
- Click the running task → Networking tab
- Copy the Public IP
- Open in browser:http://18.191.170.31:8080


---

## 🎯 What This Project Covers
- ✅ Create a **Dockerfile** to containerize the app  
- ✅ Configure a **GitHub Actions workflow** to automate build and deployment  
- ✅ Set up **AWS ECR** for image storage  
- ✅ Configure **AWS ECS (Cluster, Service, Task Definition)** for container orchestration  
- ✅ Automate deployments on every commit to `main`  

---

## 🔄 End-to-End Workflow
1. **Code Commit** → Developer pushes changes to GitHub  
2. **CI/CD Pipeline** → GitHub Actions builds a Docker image  
3. **Artifact Storage** → Image is pushed to AWS ECR  
4. **Deployment** → ECS Service automatically updates the running task with the new image  
5. **Result** → Updated container is live and serving traffic  

---

