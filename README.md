# Voting System Application

This repository contains a full-stack Voting System application, with a **React** frontend and a **Spring Boot** backend.

## 📁 Folder Structure

```text
voting-app/
├── frontend/             # React application
│   ├── public/           # Static assets and index.html
│   ├── src/              # React components, pages, and services
│   ├── package.json      # Frontend dependencies and scripts
│   └── ...
├── backend/              # Spring Boot REST API
│   ├── src/              # Java source code (controllers, services, models)
│   ├── pom.xml           # Maven build file and dependencies
│   └── ...
└── README.md             # Project overview and instructions
```

## 🚀 Prerequisites

- **Node.js** (v14 or higher) and **npm** or **yarn**
- **Java Development Kit (JDK)** 11 or higher
- **Maven** 3.6+
- A code editor (e.g., VS Code, IntelliJ IDEA)

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Maheshphatangare/Voting-System.git
   cd Voting-System
   ```

2. **Frontend**

   ```bash
   cd frontend
   npm install        # or yarn install
   ```

3. **Backend**

   ```bash
   cd ../backend
   mvn clean install  # installs dependencies and builds the project
   ```

## ▶️ Running the Application

### 1. Start the Backend API

```bash
cd backend
mvn spring-boot:run
```

The API will start on [**http://localhost:8080**](http://localhost:8080) by default.

### 2. Start the Frontend

```bash
cd ../frontend
npm start          # or yarn start
```

The React app will open at [**http://localhost:5173**]([http://localhost:5173/]) and proxy API calls to port 8080.

## 🛠️ API Endpoints (Backend)

| Endpoint          | Method | Description             |
| ----------------- | ------ | ----------------------- |
| `/api/votes`      | GET    | List all votes          |
| `/api/votes`      | POST   | Create a new vote       |
| `/api/votes/{id}` | GET    | Get vote by ID          |
| `/api/votes/{id}` | PUT    | Update an existing vote |
| `/api/votes/{id}` | DELETE | Delete a vote by ID     |

*(Adjust paths as per your controller mappings)*

## 📦 Build for Production

1. **Frontend**

   ```bash
   cd frontend
   npm run build    # or yarn build
   ```

   - This outputs static files to `frontend/dist` (or `build`) folder.

2. **Backend** (if packaging as JAR)

   ```bash
   cd backend
   mvn package
   ```

   - The JAR file will be in `backend/target/voting-system-0.0.1-SNAPSHOT.jar`.

## ☁️ Deployment

- **Frontend**: Deploy static build to Netlify, Vercel, GitHub Pages, or any static host.
- **Backend**: Deploy JAR to AWS Elastic Beanstalk, Heroku, or any Java host.

## 📖 Useful Scripts

### Frontend (`frontend/package.json`)

```json
{
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "serve": "vite preview"
  }
}
```

### Backend (`backend/pom.xml`)

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

*Happy Voting!*
