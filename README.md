<div align="center">

# ♻️ ReBorn

### *A smart circular marketplace platform — find and share pre-loved items*

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

**[Live Demo](https://reborn-xqx7.onrender.com/) · [Report Bug](#) · [Request Feature](#)**

</div>

---

## 📖 About The Project

**ReBorn** is a full-stack, responsive web application driving a local circular HTTP economy. Originally prototyped during the **Innoverse Hackathon at Woxsen University**, it has since been architected into a scalable, production-ready application. It provides users with a seamless interface to buy, sell, and donate pre-loved items, helping extend product lifecycles and significantly reduce landfill waste.

Recruiters and Engineers, this project showcases my abilites in backend architecture, security implementation, external API integrations, Docker containerization, and writing testable, production-ready code.

## 🚀 Key Engineering Highlights

Rather than just another CRUD app, ReBorn is built with an emphasis on production resilience:

* **Robust Security Posture:** Integrated `Helmet.js` for strict HTTP headers (including custom CSP policies), enforced `express-rate-limit` for DDoS/brute-force mitigation on auth routes, and heavily sanitized all inputs via `Joi` middleware against NoSQL injection.
* **Modern Authentication Flow:** Implemented secure session-based authentication utilizing `Passport.js` with local strategies, featuring stringent password strength algorithms and real-time duplicate email validations.
* **Cloud File Processing:** Seamlessly integrated `Cloudinary` using `Multer-storage-cloudinary` to intercept, parse, compress, and remotely store user image uploads, keeping the core server lightweight.
* **Tested & Reliable:** Backend business logic and Mongoose schema validations are covered by an automated `Jest` test suite comprising 16+ test cases.
* **Containerized Deployment:** Fully Dockerized using optimized multi-stage Alpine Node images, making the app environment-agnostic and CI/CD ready.

## 💻 Tech Stack & Architecture

Built entirely around the **MVC (Model-View-Controller)** paradigm using the MEN stack.

### Backend
* **Runtime / Framework:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose ORM
* **Security:** Helmet, express-rate-limit, Joi, Passport.js, bcrypt
* **Testing:** Jest, Supertest

### Frontend
* **Templating:** EJS (Embedded JavaScript) with layout blocks
* **Styling:** Tailwind CSS, FontAwesome

### DevOps & Tools
* **Containerization:** Docker
* **Hosting / CI Pipeline:** Render (Linked to GitHub)
* **Cloud Storage:** Cloudinary API

## ⚙️ Local Development Setup

To get a local development environment up and running, follow these steps:

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [MongoDB](https://www.mongodb.com/) (Local or Atlas GUI)
* [Docker](https://www.docker.com/) (Optional, for containerized run)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sourav-11-11/Reborn.git
   cd Reborn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory (use '.env.example' as a template):
   ```env
   ATLAS_URL=YOUR_MONGODB_CONNECTION_STRING
   SECRET=YOUR_SECURE_SESSION_KEY
   CLOUD_NAME=YOUR_CLOUDINARY_NAME
   CLOUD_API_KEY=YOUR_CLOUDINARY_API_KEY
   CLOUD_API_SECRET=YOUR_CLOUDINARY_API_SECRET
   ```

4. **Seed Database**
   ```bash
   npm run seed
   ```

5. **Start Application**
   ```bash
   npm run dev    # Starts with nodemon for auto-reload
   npm start      # Standard production execution
   ```

### 🐳 Docker Deployment

The application is completely containerized. If Docker is installed, you can skip native installation:

```bash
docker build -t reborn .
docker run -p 8000:8000 --env-file .env reborn
```

## 🧪 Automated Testing

ReBorn utilizes **Jest** for testing API endpoints, error handling, and Joi data validation.

```bash
npm test
```

```bash
npm test
```

## 📈 Future Roadmap

- [ ] **Role-based Authorization:** Implement an Admin dashboard and moderation workflows.
- [ ] **Real-time Messaging:** Enable buyer-seller communication via WebSockets.
- [ ] **Payment Integration:** Secure transactions via Stripe or Razorpay.
- [ ] **CI/CD Pipeline:** Automated testing and deployment with GitHub Actions.

---

<div align="center">
  <b>Developed with 💚 by <a href="https://github.com/Sourav-11-11">Sourav Vemuru</a></b><br>
  <i>If you found this project impressive, please consider giving it a ⭐!</i>
</div>
