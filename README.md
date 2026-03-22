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
* **Backend**: Node.js, Express.js
* **Database**: MongoDB, Mongoose ORM
* **Storage**: Multer (Local file processing)

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

3. **Database Initialization (Optional):**
   Seed the database with sample product listings:
   ```bash
   node init/index.js
   ```

4. **Start the server:**
   ```bash
   node app.js 
   ```

5. **Open your browser:**
   ```text
   http://localhost:8000
   ```

## 🔮 Future Roadmap
- 🔐 **Authentication**: Implement JWT/Passport.js for User Login & Signup.
- ☁️ **Cloud Storage**: Migrate from local Multer to Cloudinary/AWS S3.
- 🛡️ **Role-based Auth**: Integrate Admin vs. User privileges.
- 🚀 **Deployment**: Containerize and deploy via Render or Railway.

---

<div align="center">
  <b>Developed with 💚 by <a href="https://github.com/Sourav-11-11">Sourav Vemuru</a></b><br>
  <i>B.Tech CSE | Full Stack Developer</i>
</div>
