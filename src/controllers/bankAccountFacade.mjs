import { AccountNumberCheck } from "./accountNumberCheck.mjs";
import { FundsCheck } from "./fundsCheck.mjs";
import { SecurityCodeCheck } from "./securityCodeCheck.mjs";
import { WelcomeToBank } from "./welcomeToBank.mjs";

export class BankAccountFacade {
  constructor(accountNumber, securityCode) {
    this.accountNumber = accountNumber;
    this.securityCode = securityCode;

    this.bankWelcome = new WelcomeToBank();
    this.acctChecker = new AccountNumberCheck();
    this.codeChecker = new SecurityCodeCheck();
    this.fundChecker = new FundsCheck();
  }

  /*
  bankAccountFacade(newAcctNum, newSecCode) {
    this.accountNumber = newAcctNum;
    this.securityCode = newSecCode;

    const bankWelcome = new WelcomeToBank();
    const acctChecker = new AccountNumberCheck();
    const codeChecker = new SecurityCodeCheck();
    const fundChecker = new FundsCheck();
  }
  */

  getAccountNumber() {
    return this.accountNumber;
  }

  getSecurityCode() {
    return this.securityCode;
  }

  withdrawCash(cashToGet) {
    if (
      this.acctChecker.accountActive(this.getAccountNumber()) &&
      this.codeChecker.isCodeCorrect(this.getSecurityCode()) &&
      this.fundChecker.haveEnoughMoney(cashToGet)
    ) {
      console.log("Transaction Complete \n");
    } else {
      console.log("Transaction Failed \n");
    }
  }

  depositCash(cashToDeposit) {
    if (
      this.acctChecker.accountActive(this.getAccountNumber()) &&
      this.codeChecker.isCodeCorrect(this.getSecurityCode())
    ) {
      this.fundChecker.makeDeposit(cashToDeposit);
      console.log("Transaction Complete \n");
    } else {
      console.log("Transaction Failed \n");
    }
  }
}
