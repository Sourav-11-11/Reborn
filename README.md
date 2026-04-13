<div align="center">
  <h1>♻️ ReBorn</h1>
  <p><strong>A Modern Circular Marketplace for a Sustainable Future</strong></p>
</div>

---

## 🌍 The Why (Our Motivation)
Global waste is a critical environmental challenge. Annually, **92M tons** of waste are produced, and **80%** of items end up in landfills. ReBorn tackles this crisis directly by shifting from a linear "take-make-dispose" economy to a circular one. We believe that extending the lifecycle of quality items reduces carbon footprints, making beautiful pieces accessible, affordable, and sustainable for everyone.

## 🚀 The What (Project Overview)
**ReBorn** is a full-stack, responsive web application that enables users to effortlessly buy, sell, and donate pre-loved items. It offers a premium, modern user interface, giving second-hand shopping the sleek, trusted feel it deserves.

### ✨ Key Features
- **Seamless Market Exchange**: Curated interfaces to browse, buy, and sell second-hand products.
- **Dedicated Donation Flow**: Easy-to-use interfaces to encourage charitable giving. 
- **Modern UI/UX**: Premium design utilizing Tailwind CSS, Material Design 3 palettes, and fluid animations.
- **Robust RESTful API**: Built strictly on REST conventions for intuitive and scalable backend routing.
- **File Upload Integration**: Seamless image uploads utilizing Multer.
- **MVC Architecture**: Organized, clean, and modular backend structural design.

## 🛠️ The How (Tech Stack)
ReBorn is engineered with performance and scalability in mind using the **MEN stack** (MongoDB, Express, Node.js) with server-side rendering:

* **Frontend**: EJS (Embedded JavaScript templates), Tailwind CSS
* **Backend**: Node.js, Express.js, Helmet.js (Security), Rate Limiting
* **Database**: MongoDB, Mongoose ORM
* **Storage**: Cloudinary with Multer for image uploads
* **Security**: Passport.js Authentication, Input Validation with Joi, Rate Limiting, Helmet Security Headers

## 📂 Architecture & Structure
```text
ReBorn/
├── app.js            # Main entry point & server setup
├── models/           # Mongoose schemas (e.g., listing.js)
├── views/            # EJS templates (Home, Products, UI layout files)
│   ├── includes/     # Reusable UI components (Navbar, Footer)
│   ├── layouts/      # Boilerplate styling
│   └── products/     # RESTful views for products
├── public/           # Static assets & Uploaded Images
└── init/             # Dummy data initialization logic
```

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally or via cloud

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sourav-11-11/Reborn.git
   cd Reborn
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   - Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   - Update `.env` with your actual values:
     - `MONGO_URL`: Your MongoDB connection string
     - `PORT`: Server port (default: 8000)
     - `SECRET`: Session secret (use a strong random string)
     - `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET`: Cloudinary credentials

4. **Database Setup:**
   - Ensure MongoDB is running locally or use MongoDB Atlas
   - Optionally seed with sample data:
   ```bash
   node init/index.js
   ```

5. **Start the server:**
   ```bash
   # Development (with auto-reload)
   npm run dev
   
   # Production
   npm run start
   ```

6. **Open your browser:**
   ```text
   http://localhost:8000
   ```

## 🧪 Testing
Run the test suite:
```bash
npm test
```

## 🐳 Docker Support
Build and run with Docker:
```bash
docker build -t reborn .
docker run -p 8000:8000 --env-file .env reborn
```

## 🔐 Security Features
- **Helmet.js**: HTTP security headers protection
- **Rate Limiting**: Prevents brute force and DoS attacks
- **Input Validation**: Joi schema validation for all inputs
- **Password Strength**: Enforces strong password requirements (min 8 chars, uppercase, lowercase, digit, special char)
- **Email Validation**: Duplicate email prevention and format validation
- **Request Size Limits**: Protects against large payload attacks
- **Session Security**: Secure session cookies with httpOnly flag

## 📋 Future Roadmap
- 📚 **Database Optimization**: Add indexing and query optimization for scalability.    
- 🛡️ **Role-based Authorization**: Implement Admin dashboard and moderation features.
- 💬 **Messaging System**: Enable buyer-seller communication directly on platform.
- ⭐️ **Reviews & Ratings**: Add seller reputation system with user reviews.
- 💳 **Payment Integration**: Integrate Stripe or Razorpay for secure transactions.
- 📧 **Email Notifications**: Transactional emails for order confirmations and alerts.
- 🚀 **Deployment**: Docker containerization and CI/CD pipeline with GitHub Actions.
- 📱 **Mobile Responsiveness**: Enhance mobile experience and consider native mobile app.

---

<div align="center">
  <b>Developed with 💚 by <a href="https://github.com/Sourav-11-11">Sourav Vemuru</a></b><br>
  <i>B.Tech CSE | Full Stack Developer</i>
</div>
