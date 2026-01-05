class SendableNotification {
  // Abstract method
  send() {
    throw new Error("Method 'send()' must be implemented.");
  }
}

class EmailNotification extends SendableNotification {
  send() {
    console.log("Email sent");
  }

  schedule(date) {
    console.log("Email scheduled for", date);
  }

  cancel() {
    console.log("Email cancelled");
  }
}

class SMSNotification extends SendableNotification {
  send() {
    console.log("SMS sent");
  }
}
