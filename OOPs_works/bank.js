class Bank{
    createAccount(p_name,account_no,account_type,bal){
        this.p_name=p_name,
        this.account_no=account_no,
        this.account_type=account_type,
        this.bal=bal
    }
    deposit(amount){
        this.bal+=amount;
        console.log(`your account number ${this.account_no} is credited with ${amount} available balance is ${this.bal}`);
    }
    withdrawal(amount){
        if(this.bal>amount){
            this.bal-=amount;
            console.log(`your account number ${this.account_no} is debited with ${amount} available balance is ${this.bal}`);
        }
        else{
            console.log("insufficient balance");
        }
    }
}
var obj=new Bank();
obj.createAccount("ram",1001,"savings",3000)
obj.deposit(2000)
obj.withdrawal(1000)