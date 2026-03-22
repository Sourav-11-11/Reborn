# ReBorn Application - Visual Architecture & Flow

## User Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         ReBorn Platform                              │
└─────────────────────────────────────────────────────────────────────┘

                           ┌─────────┐
                           │  HOME   │
                           └────┬────┘
                    ┌──────────┬┼┬──────────┐
                    │          ││          │
                    ▼          ▼▼          ▼
             ┌────────┐  ┌────────┐  ┌──────────┐
             │ BROWSE │  │ DONATE │  │  ABOUT   │
             │PRODUCTS│  │        │  │          │
             └───┬────┘  └───┬────┘  └────┬─────┘
                 │            │            │
        ┌────────┴────┐       │            │
        │             │       │            │
        ▼             ▼       ▼            ▼
   ┌────────┐   ┌─────────┐ ┌──┐   ┌─────────────┐
   │PRODUCT │   │ SEL NEW │ │DO│   │ LEARN ABOUT │
   │DETAILS │   │ PRODUCT │ │NA│   │   MISSION   │
   └────┬───┘   │         │ │TE│   │   & VALUES  │
        │       └────┬────┘ └──┘   │             │
        │            │            └─────────────┘
        ▼            ▼
   ┌────────────┐ ┌──────────┐
   │ INTERESTED │ │REDIRECTED│
   │  TO BUY    │ │TO PRODUCT│
   │(GET SELLER)│ │  LIST    │
   └────────────┘ └──────────┘
```

## Product Lifecycle

```
                    ┌────────────────────┐
                    │  USER LISTS ITEM   │
                    │ (Sell Form Page)   │
                    └──────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │CREATE PRODUCT      │
                    │(POST /products)    │
                    └──────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │ PRODUCT SAVED IN   │
                    │    MONGODB         │
                    └──────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │APPEARS IN PRODUCTS │
                    │LIST (ACTIVE)       │
                    └──────────┬─────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
           SOMEONE SHOWS INTEREST    SELLER EDITS
                    │                     │
                    ▼                     ▼
            SHOW SELLER DETAILS   UPDATE PRODUCT
            (GET /interested)     (PUT /:id)
                    │                     │
                    │        ┌────────────┘
                    │        │
                    ▼        ▼
              CONTACT INFO  PRODUCT UPDATED
              & CAN BUY     IN BOTH LIST
                            & DETAILS
                            
              ┌─────────────────────┐
              │ MARK AS SOLD/UNSOLD │
              │(PATCH REQUEST)      │
              └──────────┬──────────┘
                         │
                  ┌──────┴──────┐
                  ▼             ▼
            [SOLD STATE]   [ACTIVE STATE]
            (Overlay)      (Available)
```

## Donation Flow

```
                    ┌────────────────────┐
                    │  USER NAVIGATES    │
                    │   TO DONATE PAGE   │
                    └──────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │ FILL DONATION FORM │
                    │(Item, Category,    │
                    │ Condition, etc.)   │
                    └──────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │ SUBMIT DONATION    │
                    │(POST /donate)      │
                    └──────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │ DONATION SAVED TO  │
                    │    DATABASE        │
                    └──────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │  THANK YOU PAGE    │
                    │  Display Success   │
                    │  Message & Next    │
                    │  Steps (Pickup)    │
                    └────────────────────┘
```

## Page Structure & Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│ ████ ReBorn │ Home  About  Browse  Sell  Donate  │ Profile Icon     │
│ Navigation Bar (Fixed, Glassmorphic)                               │
└─────────────────────────────────────────────────────────────────────┘

Home Page:
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│  ┌─────────────────────────┐  ┌─────────────────────────────────┐  │
│  │ Give Your Stuff A       │  │  Image Gallery Grid             │  │
│  │ Second Life             │  │ [Image] [Image]                 │  │
│  │                         │  │ [Image] [Image]                 │  │
│  │ [Browse] [Sell]         │  │                                 │  │
│  └─────────────────────────┘  └─────────────────────────────────┘  │
│                                                                       │
│ ┌──────────────────────────────────────────────────────────────────┐│
│ │ Small Action. Big Difference.                                    ││
│ │ Impact Metrics: 12k+ | 4.2m | 85%                               ││
│ │                  [Start Donating Today]                          ││
│ └──────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────┘

Products (Browse) Page:
┌─────────────────────────────────────────────────────────────────────┐
│ Second Life Store ♥                           [List an item →]      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                             │
│  │Image │  │Image │  │Image │  │Image │                             │
│  │Jacket│  │Shoes │  │Bag   │  │Watch │                             │
│  │$250  │  │$180  │  │$320  │  │$450  │                             │
│  └──────┘  └──────┘  └──────┘  └──────┘                             │
│                                                                       │
│  ┌──────┐  ┌──────┐  ┌──────┐                                        │
│  │Image │  │Image │  │Image │                                        │
│  │...   │  │...   │  │...   │                                        │
│  └──────┘  └──────┘  └──────┘                                        │
└─────────────────────────────────────────────────────────────────────┘

Product Details Page:
┌─────────────────────────────────────────────────────────────────────┐
│ Product Details                                    [SOLD]             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────────┐  ┌──────────────────────────────────────────┐ │
│  │                  │  │ Vintage Leather Jacket                   │ │
│  │                  │  │ Clothing • Like New                      │ │
│  │     Product      │  │                                          │ │
│  │     Image        │  │ [Description in container]               │ │
│  │                  │  │                                          │ │
│  │ (4:5 aspect)     │  │ Price: ₹5,000                            │ │
│  │                  │  │                                          │ │
│  │                  │  │ Seller: John                             │ │
│  │                  │  │ Listed: 2024-03-15                       │ │
│  └──────────────────┘  │                                          │ │
│                         │ ┌──────────────────────────────────────┐│ │
│                         │ │ Seller Details                       ││ │
│                         │ │ Name: John                           ││ │
│                         │ │ Email: john@email.com                ││ │
│                         │ │ Phone: +91-9876543210                ││ │
│                         │ │ [Contact Seller]                     ││ │
│                         │ └──────────────────────────────────────┘│ │
│                         │                                          │ │
│                         │ [Interested to Buy] Button               │ │
│                         └──────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

Sell Product Form Page:
┌─────────────────────────────────────────────────────────────────────┐
│                      Sell Your Product                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │ [Product Name Field]                                            ││
│  │ [Category Dropdown] [Condition Dropdown]                        ││
│  │ [Description Textarea]                                          ││
│  │ [Image URL Field]                                               ││
│  │ [Price Field] [Seller Name Field]                               ││
│  │ [Contact Number Field]                                          ││
│  │                                                                  ││
│  │ [List Your Product Button]                                      ││
│  └─────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────┘

Donate Page:
┌─────────────────────────────────────────────────────────────────────┐
│              Help the Needy ♥ Donate Your Items                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │ Add a Donation                                                  ││
│  │                                                                  ││
│  │ [Item Name Field]                                               ││
│  │ [Category Dropdown] [Condition Dropdown]                        ││
│  │ [Description Textarea]                                          ││
│  │ [Image URL Field]                                               ││
│  │ [Your Name Field]                                               ││
│  │ [Contact Number Field]                                          ││
│  │                                                                  ││
│  │ [Submit Donation Button]                                        ││
│  └─────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────┘

About Page:
┌─────────────────────────────────────────────────────────────────────┐
│                        About ReBorn                                  │
│                  Reuse. Relove. ReBorn.                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────────┐  ┌──────────────────┐                         │
│  │ Our Story        │  │ Our Mission      │                         │
│  │ • Everything...  │  │ • Make sust...   │                         │
│  │ • Response...    │  │ • Connect...     │                         │
│  │ • Turn unused.   │  │ • Encourage...   │                         │
│  │ • Growing...     │  │ • Reduce waste   │                         │
│  └──────────────────┘  └──────────────────┘                         │
│                                                                       │
│ What We Stand For                                                    │
│ ┌─────────────┐ ┌─────────────┐ ┌──────────┐ ┌─────────┐            │
│ │Sustainability│ │Community    │ │Transparency│ │Social... │          │
│ └─────────────┘ └─────────────┘ └──────────┘ └─────────┘            │
│                                                                       │
│ Make a Difference Through Donations                                 │
│ [Donation Info] ... [Start Donating]                                 │
└─────────────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
boilerplate.ejs (Master Layout)
├── Head
│   ├── Meta Tags
│   ├── Fonts (Inter, Material Symbols, Font Awesome)
│   ├── Tailwind CDN
│   └── Tailwind Configuration
├── includes/navbar.ejs
│   ├── Logo
│   ├── Navigation Links
│   └── Profile Icon
├── Page-Specific Content
│   ├── home.ejs (Hero + Impact)
│   ├── products/index.ejs (Product Grid)
│   ├── products/show.ejs (Product Details)
│   ├── products/new.ejs (Form)
│   ├── products/edit.ejs (Form)
│   ├── about.ejs (Story + Values)
│   ├── donate.ejs (Form)
│   └── donate-thank-you.ejs (Success)
├── includes/footer.ejs
└── Scripts
    └── Validation & Interactions
```

## Database Schema Relationship

```
┌─────────────────────┐
│   MongoDB: reborn   │
└──────────┬──────────┘
           │
           ├─ collections
           │  └─ listings
           │     ├─ Product (Selling + Donations)
           │     │  ├─ _id: ObjectId
           │     │  ├─ productName: String
           │     │  ├─ category: String
           │     │  │  (Clothing, Footwear, etc.)
           │     │  ├─ condition: String
           │     │  │  (New, Like New, Used)
           │     │  ├─ description: String
           │     │  ├─ image: String (URL)
           │     │  ├─ price: Number
           │     │  ├─ seller: String
           │     │  ├─ contactNumber: String
           │     │  ├─ sold: Boolean
           │     │  └─ createdAt: Date
```

## API Endpoints Map

```
HTTP Request Flow:

GET /
  → Route Handler
  → Render: home.ejs
  └─ Response: HTML (Home Page)

GET /products
  → Route Handler
  → Query: Product.find({})
  → Render: products/index.ejs
  └─ Response: HTML (Product Grid)

GET /products/new
  → Route Handler
  → Render: products/new.ejs
  └─ Response: HTML (Form)

POST /products
  → Route Handler
  → Body: product[productName], product[price], etc.
  → Save: new Product(req.body.product)
  → Database: MongoDB
  → Redirect: /products
  └─ Response: 302 Redirect

GET /products/:id
  → Route Handler
  → Query: Product.findById(id)
  → Render: products/show.ejs
  └─ Response: HTML (Product Details)

GET /products/:id/interested
  → Route Handler
  → Query: Product.findById(id)
  → Render: products/show.ejs with showSeller: true
  └─ Response: HTML (Seller Details)

PUT /products/:id
  → Route Handler
  → Update: Product.findByIdAndUpdate(id, {...})
  → Database: MongoDB
  → Redirect: /products/:id
  └─ Response: 302 Redirect

PATCH /products/:id/buy or /unsold
  → Route Handler
  → Update: product.sold = true/false
  → Database: MongoDB
  → Redirect: /products/:id
  └─ Response: 302 Redirect

DELETE /products/:id
  → Route Handler
  → Delete: Product.findByIdAndDelete(id)
  → Database: MongoDB
  → Redirect: /products
  └─ Response: 302 Redirect

GET /donate
  → Route Handler
  → Render: donate.ejs
  └─ Response: HTML (Donation Form)

POST /donate
  → Route Handler
  → Body: product[productName], product[seller], etc.
  → Save: new Product(req.body.product)
  → Database: MongoDB
  → Render: donate-thank-you.ejs
  └─ Response: HTML (Thank You Page)
```

## Key Features Summary

```
┌─────────────────────────────────────────┐
│          ReBorn Features                │
├─────────────────────────────────────────┤
│                                         │
│ 🛍️  Browse Second-Hand Items            │
│ ✏️   List Products to Sell              │
│ 👥  Contact Sellers                    │
│ ♻️   Donate & Give Back                 │
│ 💚  Environmental Impact Tracking       │
│ 📱 Mobile Responsive Design             │
│ 🎨 Modern UI/UX                         │
│ 🔄 Edit/Delete Product Listings         │
│ 🏷️  Mark Items as Sold/Unsold           │
│ 📞 Direct Seller Contact Info           │
│                                         │
└─────────────────────────────────────────┘
```

---

This visual guide shows the complete architecture, user flows, and data interactions within the ReBorn application.
