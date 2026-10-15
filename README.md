# Yogiva – Yoga & Wellness Website | DevOps CI/CD Pipeline

A modern, responsive yoga and wellness website deployed on AWS EC2 using an automated CI/CD pipeline with GitHub, Jenkins, npm, and Nginx.

## 🌿 Project Overview

Yogiva is a yoga and wellness website designed to introduce users to yoga classes, common yoga poses, and simple daily routines.

This project demonstrates how a frontend website can be built and deployed using DevOps tools and cloud infrastructure.

## 🚀 Live Demo

**Website:** http://52.201.255.244

> Note: The website is hosted on an AWS EC2 instance. The public IP may change if the instance is stopped and restarted.

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Build Tool:** Vite
- **Package Manager:** npm
- **Version Control:** Git and GitHub
- **CI/CD Automation:** Jenkins
- **Cloud Platform:** AWS EC2
- **Web Server:** Nginx
- **Operating System:** Amazon Linux 2023

## 🔄 DevOps Workflow

```text
Developer
    |
    v
VS Code
    |
    v
Git
    |
    v
GitHub Repository
    |
    v
Jenkins Pipeline
    |
    +--> Checkout Source Code
    |
    +--> Install Dependencies (npm)
    |
    +--> Build Website (Vite)
    |
    v
Production Files (dist/)
    |
    v
Transfer Files to AWS EC2 (SSH/SCP)
    |
    v
Nginx Web Server
    |
    v
Web Browser
```

## ⚙️ How the Pipeline Works

### 1. Develop the Website

The website is developed locally using HTML, CSS, and JavaScript with Vite.

### 2. Push Code to GitHub

Git is used to track changes and push the source code to the GitHub repository.

### 3. Jenkins Checkout

Jenkins retrieves the latest source code from the `main` branch of the GitHub repository.

### 4. Install Dependencies

Jenkins executes:

```bash
npm.cmd install
```

This installs the dependencies required by the project.

### 5. Build the Website

Jenkins executes:

```bash
npm.cmd run build
```

Vite generates optimized production files inside the `dist/` directory.

### 6. Deploy to AWS EC2

Jenkins uses SSH to connect to the EC2 instance and SCP to transfer the generated website files. The deployment stage copies the files to the Nginx web root.

### 7. Serve the Website with Nginx

Nginx serves the deployed static files to visitors through a web browser.

## 💻 Run the Project Locally

### Prerequisites

- Node.js and npm
- Git
- VS Code or another code editor

### Step 1: Clone the repository

```bash
git clone https://github.com/vinayjonnadula11-svg/yogiva.git
cd yogiva
```

### Step 2: Install dependencies

```bash
npm install
```

On Windows PowerShell, you can use:

```powershell
npm.cmd install
```

### Step 3: Start the development server

```powershell
npm.cmd run dev
```

Open the local URL shown in the terminal, usually:

`http://localhost:5173`

### Step 4: Build for production

```powershell
npm.cmd run build
```

The production-ready files are generated in the `dist/` directory.

## 🔧 Jenkins Pipeline Stages

| Stage | Purpose |
|---|---|
| Checkout | Fetch source code from GitHub |
| Install Dependencies | Install npm packages |
| Build Yogiva | Generate production files using Vite |
| Deploy to AWS EC2 | Transfer the build output and update the Nginx web root |

The Jenkins pipeline is configured in the Jenkins job.

## ☁️ AWS Deployment

- **Compute:** AWS EC2
- **Operating System:** Amazon Linux 2023
- **Web Server:** Nginx
- **Deployment Method:** SSH and SCP
- **Deployment Directory:** `/usr/share/nginx/html`

Jenkins securely connects to the EC2 instance using an SSH private key stored in Jenkins Credentials.

## 🔐 Security Practices

- Store the EC2 SSH private key in Jenkins Credentials.
- Do not commit private keys, passwords, or access tokens to GitHub.
- Configure EC2 security group rules to allow only the required network traffic.
- Use HTTPS and a domain name when preparing the website for production.

## 📚 Key Learnings

- Version control using Git and GitHub
- CI/CD pipeline configuration using Jenkins
- Installing npm dependencies and building a Vite application
- Deploying static website files to AWS EC2
- Configuring and using Nginx as a web server
- Automating remote deployment using SSH and SCP

## 👨‍💻 Author

**Vinay Jonnadula**

GitHub: [vinayjonnadula11-svg](https://github.com/vinayjonnadula11-svg)

---

*Yogiva – Find your balance. Discover your flow.*
