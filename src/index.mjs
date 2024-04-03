import { BankAccountFacade } from "./controllers/bankAccountFacade.mjs";

class TestBankAccount {
  constructor() {
    this.accessingBank = new BankAccountFacade(12345678, 1234);
  }

  performOperations() {
    this.accessingBank.withdrawCash(50);
    this.accessingBank.withdrawCash(900);
    this.accessingBank.depositCash(50);
  }
}

const testBankAccount = new TestBankAccount();
testBankAccount.performOperations();
