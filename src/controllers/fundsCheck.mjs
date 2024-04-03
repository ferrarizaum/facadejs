export class FundsCheck {
  constructor(cashInAccount) {
    this.cashInAccount = 1000;
  }

  getCashInAccount() {
    return this.cashInAccount;
  }

  decreaseCashInAccount(cashWithdrawn) {
    this.cashInAccount = this.cashInAccount - cashWithdrawn;
  }

  increaseCashInAccount(cashDeposited) {
    this.cashInAccount = this.cashInAccount + cashDeposited;
  }

  haveEnoughMoney(cashToWithdrawal) {
    if (cashToWithdrawal > this.getCashInAccount()) {
      console.log("Error: You don't have enough money");
      console.log("Current Balance: " + this.getCashInAccount());

      return false;
    } else {
      this.decreaseCashInAccount(cashToWithdrawal);
      console.log(
        "Withdrawal Complete: Current Balance is" + this.getCashInAccount()
      );
      return true;
    }
  }

  makeDeposit(cashToDeposit) {
    this.increaseCashInAccount(cashToDeposit);

    console.log(
      "Deposit Complete: Current Balance is " + this.getCashInAccount()
    );
  }
}
