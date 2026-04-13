<div align="center">

# ♻️ ReBorn
### *A Smart Circular Marketplace for Pre-Loved Items*

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-A91E50?style=for-the-badge&logo=ejs&logoColor=white)](https://ejs.co/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

**[Live Demo](https://reborn-xqx7.onrender.com/) · [Report Bug](#) · [Request Feature](#)**
<br><br>
*(ReBorn tackles the linear "take-make-dispose" economy by making circular, sustainable trade effortless, scalable, and secure)*

</div>

---

## 📖 The Origin Story

**ReBorn** began as a late-night MVP during the **Innoverse Hackathon at Woxsen University**. What started as an ambitious concept to reduce campus waste quickly gained traction and won the judges over. Post-hackathon, I took the core idea and re-architected it from the ground up. 

The platform has since scaled to include **enterprise-grade security, comprehensive TDD with Jest, Docker containerization, and a highly resilient MVC architecture**—evolving from a standard university hackathon project into a robust, production-ready full-stack application.

---

## ⚡ Core Engineering Features

Recruiters & Engineers, here is what powers ReBorn under the hood:

| Category | Description |
|---|---|
| **🔒 Security-First Design** | Hardened with **Helmet.js** (custom CSP directives), protected against brute-force with **express-rate-limit**, and strict request payload sizing limits (10kb). |
| **🛡️ Data Integrity** | Complete server-side schema validation using **Joi** paired with **Mongoose** strict typing. Password strength algorithms and email duplicate checks are enforced at the DB level. |
| **🔐 Authentication** | State-based cookie authentication using **Passport.js** (`passport-local`). Secure route architectures utilizing middleware for protected route blocking & ownership verification. |
| **☁️ Media Engineering** | Optimized external cloud storage using **Cloudinary** & **Multer**. Streamlined multi-part form data processing with automatic format conversion for speed. |
| **🐳 DevOps & Containerization** | **Dockerized** entirely configured via Dockerfile and deployed reliably on **Render.com**. Environment agnostic (`.env` abstracted logic). |
| **🧪 Testing (TDD)** | Reliable business logic unit testing achieved with **Jest** and **Supertest**, ensuring core schemas, auth behavior, and error throwing work flawlessly. |

---

## 🛠️ Architecture & Tech Stack

ReBorn strictly adheres to the **Model-View-Controller (MVC)** architectural pattern, separating data handling, business logic, and UI compilation.

- **Frontend:** EJS (Server-Side Rendering), Tailwind CSS, Custom CSS animations, FontAwesome
- **Backend:** Node.js, Express.js (v5 router patterns)
- **Database:** MongoDB Atlas, Mongoose ORM
- **Validation & Flow:** Joi (Schema Validation), Express-Session, Connect-Flash

---

## ⚙️ Quick Start

### Prerequisites
* [Node.js](https://nodejs.org/) (v18+)
* [MongoDB](https://www.mongodb.com/) (Local or Atlas URL)
* [Docker](https://www.docker.com/) *(Optional)*

### Local Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Sourav-11-11/Reborn.git
   cd Reborn
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Copy the sample environment file to `.env`:
   ```bash
   cp .env.example .env
   ```
   *Populate the `.env` file with your `ATLAS_URL`, `SECRET`, and Cloudinary keys.*

4. **Initialize & Seed the Database:**
   ```bash
   npm run seed
   ```

5. **Start Application:**
   ```bash
   npm run dev    # Starts with Nodemon for hot relading
   npm start      # Standard production execution
   ```

### 🐳 Docker Native Deployment

Want to skip the local installations? Run the app directly inside a Docker container:
```bash
docker build -t reborn .
docker run -p 8000:8000 --env-file .env reborn
```

---

## 🧪 Testing

To run the internal unit tests and verify schematic data integrity:

```bash
npm test
```

---

## 📈 Roadmap

- [ ] **Role-Based Authorization:** Add super-admin and moderation dashboard routes.
- [ ] **Real-time WebSockets:** Implement WebRTC/Socket.io messaging for buyer-seller direct comms.
- [ ] **Payment Gateways:** Secure transactions integrating the Stripe API framework.
- [ ] **CI/CD Integration:** Automate the Jest suite testing and deployments using GitHub Actions.

---

<div align="center">
  <b>Developed with 💚 and absolute dedication by <a href="https://github.com/Sourav-11-11">Sourav Vemuru</a></b><br>
  <i>Full Stack Engineer | Solving complex logic with beautiful code.</i><br><br>
  
  **If you found this architecture, design, and project impressive, please consider hitting the ⭐️ button!**
</div>
