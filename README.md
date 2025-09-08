🚀 Node.js CI/CD Deployment with GitHub Actions, AWS ECR & ECS

This project demonstrates a production-ready CI/CD pipeline for deploying a Node.js application using modern cloud-native practices.  

GitHub Actions with AWS ECR (Elastic Container Registry) and ECS (Elastic Container Service – Fargate), the workflow enables seamless containerization, automated builds, and zero-downtime deployments.
---
☁️ AWS Setup
- IAM user with ECR and ECS permissions
- role 
- <img width="1902" height="751" alt="role" src="https://github.com/user-attachments/assets/69c7a1ac-d475-4f77-bb4d-6eaa254e85cd" />

-ECR

- <img width="1909" height="788" alt="ecr" src="https://github.com/user-attachments/assets/05597f0c-896b-49c0-8bee-1bf3da7d7b06" />

-ECS
- <img width="1914" height="759" alt="ecs-cluster" src="https://github.com/user-attachments/assets/ac646e8e-8551-497c-b785-9d2397125ce4" />

-TASK
-<img width="1920" height="796" alt="ecs-networking" src="https://github.com/user-attachments/assets/63304b70-c1df-4f96-a4b7-a41ac6337f00" />


- ECS Cluster + Service + Task Definition created
- <img width="1920" height="743" alt="service-task" src="https://github.com/user-attachments/assets/01ed30b5-702a-4329-8824-946630770300" />


---
GitHub Secrets configured
- In Repo → Settings → Secrets → Actions, add:
   - AWS_ACCESS_KEY_ID
   - AWS_SECRET_ACCESS_KEY
   - <img width="1920" height="796" alt="env veriable" src="https://github.com/user-attachments/assets/350e188b-b10d-4005-b671-b9162bca816f" />



---
🔄 Deployment Flow

- Push code to main branch
- GitHub Actions builds Docker image
- Image is pushed to ECR
- ECS task definition is updated
- ECS service pulls and runs the new image
<img width="1918" height="960" alt="complet-cicd-workflow" src="https://github.com/user-attachments/assets/cb646276-441c-4024-9d0d-b85b7d0d973b" />
---

🌐 Accessing the Application

- Go to AWS Console → ECS → Cluster → Service → Task
- Click the running task → Networking tab
- Copy the Public IP
- Open in browser:http://18.191.170.31:8080
- <img width="1920" height="807" alt="webpage" src="https://github.com/user-attachments/assets/eca3daeb-1c4d-4813-84f2-23481363a5b6" />



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

