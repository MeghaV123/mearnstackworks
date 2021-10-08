class Bank {
    session = {}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },

    }
    getAccountDetails(accno) {
        return accno in this.accounts?true:false
    }
    authentication(accno, password) {
        if (this.getAccountDetails(accno)) {
            let pwd = this.accounts[accno].password
            // return pwd==password?1:0
            if (pwd == password) {
                this.session["user"] = accno
               
                return 1;
                //     //login sucess
            }
            else {
                return -1;
                //invalid password
            }

        }
        else {
            return 0;
            //-1 for invalid account number
        }
    }
    balanceEquiry() {
        let user = this.session["user"]
       return this.accounts[user].balance
    }
    fundTransfer(to_accno, amount) {
        if (this.getAccountDetails(to_accno)){
            let user = this.session["user"]
        let bal = this.balanceEquiry()
        if (bal > amount) {
            this.accounts[user].balance -= amount
            this.accounts[to_accno].balance += amount
            this.accounts[user].transactions.push({ to: to_accno, amount: amount })
            console.log(this.accounts[user]);
        }
        else {
            console.log("failed insufficient balance");
        }
    }
        else{
    console.log("invalid account");
        }
    }
    paymentHistory(){
        let user=this.session["user"]
        console.log(this.accounts[user].transactions);
    }

}
var obj = new Bank()
var user = obj.authentication(1002, "usertwo")
console.log(user==1?"login sucess":user==-1?"invalid account number":"invalid password");
console.log(obj.balanceEquiry());
obj.fundTransfer(1001,200)