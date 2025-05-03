![organogram_bedfinal](https://github.com/user-attachments/assets/0a016ed3-758c-4b42-be75-f27057f52843)


## 🚀 How to Get Started

You can clone the repository, install dependencies, and run the app using the following steps:

### 🧱 1. Install Frontend/Backend Dependencies  
(Open **Terminal 1**)

```bash
npm install
npm install har-validator@latest   # If needed
npm install uuid@latest            # If needed
npm audit fix                      # Optional, to fix vulnerabilities
npm run dev                        # Starts the app on default dev port (e.g., 5173)
```

### 🧭 2. Start Prisma Studio  
(Open **Terminal 2** in parallel)

```bash
npx prisma studio
```

---

## ⚙️ Setting Up Environment Variables

Create a `.env` file in the root directory and add your own keys (if not already included):

```env
AUTH_SECRET_KEY=your_secret_key_here
SENTRY_DSN=your_sentry_dsn_here
```

---

## ✅ Running Tests

Tests are executed using **Newman**, a CLI tool for running Postman collections. The test flow mimics real API calls — such as validating success codes (`200`, `201`) or failure (`404`, etc.).

### Steps to Run Tests:

1. **Start the server**  
   Run in the project root:
   ```bash
   npm run dev
   ```

2. **Verify Postman Environment Configuration**  
   Navigate to the `postman/environments` folder. You’ll find a file like this:

   ```json
   {
     "key": "baseUrl",
     "value": "http://0.0.0.0:3000",
     "enabled": true
   }
   ```

   > ⚠️ If your server uses a different port or URL, update `baseUrl` accordingly.

3. **Run Tests**
   ```bash
   npm run test
   ```

You’ll see the test results directly in the terminal. Behind the scenes, this command runs a Postman collection stored in the `postman/` folder as defined in your `package.json`.

---

### ⚠️ Important Notes:
- **Data-sensitive Tests:** Some tests use `DELETE` endpoints, which means they modify the database. Always restart the server (`npm run dev`) before rerunning tests.
- **Be cautious with test accounts or sample data**, especially if tied to registration/auth endpoints.




![bed-final-repository_image03](https://github.com/aelyakoubi/bed-final-repository/assets/115151631/a06f2b4d-0315-4a38-ab23-2500158be4dd)
![image](https://github.com/aelyakoubi/bed-final-repository/assets/115151631/18ed8d47-0415-4b3b-b6a4-dc1764abbd1b)
![image](https://github.com/aelyakoubi/bed-final-repository/assets/115151631/63819e39-edab-4123-9859-d0a2fd73c527)


