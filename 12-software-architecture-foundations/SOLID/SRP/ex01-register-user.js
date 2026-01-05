function emailIsValid(email) {
  return email.includes("@");
}

function validateEmail(email) {
  if (!emailIsValid(email)) {
    throw new Error("Invalid email");
  }
}

function saveUserToDatabase(user) {
  console.log("Saving to database:", user);
}

function registerUser(user) {
  validateEmail(user.email);
  saveUserToDatabase(user);
}

const newUser = { name: "Alice", email: "aliceexample.com" };

registerUser(newUser);
