# Stripe Payment Integration with Spring Boot and React

![Stripe Logo](https://stripe.com/img/v3/home/social.png)

A minimal implementation of Stripe payment processing using Spring Boot (backend) and React + TypeScript + Vite + Chakra UI (frontend).

## ✨ Features
- Stripe Checkout integration
- Spring Boot REST API
- React frontend with TypeScript
- Vite build tool
- Chakra UI for UI components
- Simple payment flow

## 🛠️ Technologies

### Backend
| Technology | Purpose |
|------------|---------|
| Java 17 | Runtime |
| Spring Boot 3 | Framework |

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI Library |
| TypeScript | Type safety |
| Vite | Build tool |
| Chakra UI | UI components |

## 🚀 Getting Started

### Prerequisites
- JDK 17+
- Stripe API keys

### Installation
1. Clone repo:
    ```bash
    git clone https://github.com/nicoquiroga90/PayInt.git
    cd PayInt
    ```

2. Backend setup:
    ```bash
    cd backend
    echo "stripe.api.key=your_key" > src/main/resources/application.properties
    ```

3. Frontend setup:
    ```bash
    cd ../frontend
    echo "VITE_STRIPE_KEY=your_key" > .env
    ```

4. Run backend:
    ```bash
    cd ../backend
    ./mvnw spring-boot:run
    ```

5. Run frontend:
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

## 📂 Project Structure

```bash
PayInt/
└── src/
    ├── backend/                  # Complete Java solution
    │   ├── src/main/java/        # All backend logic
    │   └── src/main/resources/   # Config files
    └── Frontend/                 # Optional frontend
        ├── src/                  # React components
        └── vite.config.ts        # Frontend config
```

## 🔧 Configuration
| File | Purpose |
|------|---------|
| `backend/src/main/resources/application.properties` | Spring config |
| `frontend/.env` | Frontend environment variables |


## 🤝 Contributing
1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a PR

---

⭐ Feel free to star this repo if you found it useful!
