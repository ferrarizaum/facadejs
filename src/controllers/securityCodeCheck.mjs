export class SecurityCodeCheck {
  constructor(securityCode) {
    this.securityCode = 1234;
  }

  getSecurityCode() {
    return this.securityCode;
  }

  isCodeCorrect(secCodeToCheck) {
    if (secCodeToCheck === this.getSecurityCode()) {
      return true;
    } else {
      return false;
    }
  }
}
