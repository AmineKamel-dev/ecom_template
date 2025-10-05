# 🛒 E-commerce Platform with Java microservices

A full-stack e-commerce application with:

- **Frontend:** React ( React Router, Tailwind CSS)
- **Backend:** Node.js + ExpressJs
- **Database:** PostgreSQL + Prisma
- **Auth:** JWT-based authentication
- **Deployment target:** Local dev with Docker, deployable to cloud.

extended with

- **Java-Based (Micro)services:**
  using Springboot (java)+ Maven(Build)
- ### Microservices\*\*:
  #### _Emailing System_ for automating invoices, transactions and marketing emails
  - Uses SMTP
  - HTML templates with thymeleaf
  - independent JUnit tests and Integration tests
  - Design by Contract using JML

---

## 🚀 Features (MVP)

- View products
- Product detail page
- Add products to cart
- Checkout flow (order + order items in DB)
- User authentication (register/login)
- Admin: create, update, delete products
- Mark products as "recommended"
- Toggle microservices

---

## 📂 Project Structure

```text
├─ docs/                    # Documentation
├─ Code
    └─ frontend/             # React frontend
    └─backend/              # Node.js + Express backend
    └─microservices/        # Java Spring Boot Microservices
└─ README.md
```
