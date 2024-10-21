const accountId = 144553
let accountEmail = "jayanto@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// now let's try to change the variables value.
// Suppose i have assigned another value of the same variable.
// accountId = 2 
// We cannnot change the value if the variable is assigned using const keyword

/*
Now to print the variable that we assigned at above, we need to
use the console.log();
*/
console.log(accountId);
// We can use console.table to add all the variables name in one statement.
/*suppose i want to print accountEmail with accountId.
Then we need to write down console.log code to every variable in individual line, 
this is too lengthy
*/
/*
So to make it in one line we can use console.table to print multiple variable using one command
*/
console.table([accountId, accountEmail, accountPassword, accountState])

