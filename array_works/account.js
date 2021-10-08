var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

//sort the users wrk balance
accounts.sort((acct1,acct2)=>acct1[3]-acct2[3])
console.log(accounts);

//print details of accn=1004
accounts.find(accnt=>accnt[0]=="1004").forEach(name=>console.log(name))

// console.log(accounts[4]);

//is there any person with balance < 2000
var balance=accounts.some(acnt=>acnt[3]<2000)
console.log(balance);

//print name of users with in_active account
var in_active=accounts.filter(acct=>acct[4]==false).map(acct=>acct[1])
console.log(in_active);

//print details of users with max balance
var max=accounts.reduce((blnce1,blnce2)=>blnce1>blnce2?blnce1:blnce2)
console.log(max);

//print details of users with acc_type as savings anad balance>25000
var acc_type=accounts.filter(acct=>acct[2]="savings").filter(acct=>acct[3]>25000)
console.log(acc_type);