# EX04 – SRP in Authentication (AuthService)

## Goal

Apply the Single Responsibility Principle (SRP) in a **more realistic scenario** where a single class mixes multiple concerns: authentication, storage, UI, analytics.

You must separate responsibilities into focused units.

---

## Starting Code (ex04-before.js)

```js
class AuthService {
  login(username, password) {
    // 1. Check credentials
    if (username === "admin" && password === "secret") {
      console.log("Login successful");

      // 2. Store token
      const token = "fake-jwt-token";
      localStorage.setItem("auth_token", token);

      // 3. Update UI
      const statusElement = document.getElementById("status");
      if (statusElement) {
        statusElement.textContent = "Logged in as " + username;
      }

      // 4. Send analytics
      console.log("Sending analytics event: USER_LOGIN", { username });
    } else {
      console.log("Login failed");
    }
  }
}

// Example usage (browser environment assumed):
const authService = new AuthService();
authService.login("admin", "secret");
```
