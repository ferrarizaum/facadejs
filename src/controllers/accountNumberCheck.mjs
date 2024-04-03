export class AccountNumberCheck {
  constructor(accountNumber) {
    this.accountNumber = 12345678;
  }

  getAccountNumber() {
    return this.accountNumber;
  }

  accountActive(acctNumToCheck) {
    if (acctNumToCheck === this.getAccountNumber()) {
      return true;
    } else {
      return false;
    }
  }
}
