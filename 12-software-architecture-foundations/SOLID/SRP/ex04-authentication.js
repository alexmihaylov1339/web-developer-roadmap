function checkCredentials(username, password) {
  return username === "admin" && password === "secret";
}

function storeToken() {
  const token = "fake-jwt-token";
  const storage = []
  storage.push(token);
}

function uiStatusUpdate(username) {
  const statusElement = "";

  if (statusElement) {
    statusElement = "Logged in as " + username;
  }
}

function sendAnalytics(username) {
  console.log("Sending analytics event: USER_LOGIN", { username });
}

class AuthService {
  constructor(checkCredentials, storeToken, uiStatusUpdate, sendAnalytics) {
    this.checkCredentials = checkCredentials;
    this.storeToken = storeToken;
    this.uiStatusUpdate = uiStatusUpdate;
    this.sendAnalytics = sendAnalytics;
  }
  login(username, password) {
    if (this.checkCredentials(username, password)) {
      console.log("Login successful");

      this.storeToken();
      this.uiStatusUpdate(username);
      this.sendAnalytics(username);
    } else {
      console.log("Login failed");
    }
  }
}


// Example usage (browser environment assumed):
const authService = new AuthService(
  checkCredentials,
  storeToken,
  uiStatusUpdate,
  sendAnalytics
);
authService.login("admin", "secret");
