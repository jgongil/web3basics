/*##########################
CONFIGURATION
##########################*/

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3");
var EthereumTransaction = require("ethereumjs-tx").Transaction;
var web3 = new Web3('HTTP://127.0.0.1:8545');

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = '0x69a04a9482c5201769431923d40ced0252293c18';//'ADDRESS FROM GANACHE GOES HERE'
var receivingAddress = '0xe0eda7f8e2450154635607b79f2d48e358792363';//'ANOTHER ADDRESS FROM GANACHE GOES HERE'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

/*##########################
CREATE A TRANSACTION
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown 
/*
var rawTransaction = {nonce: 1, to: receivingAddress, gasPrice: 20000000, gasLimit: 30000, value: 1, data: "" };
*/
/*##########################
Sign the Transaction
##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 

/* var privateKeySender = '3b7d022b8f764bd78bcf7f45c3f5544436f6d6f70bd57d0ddad97ae745590ba4'; //'PRIVATE KEY OF SENDER GOES HERE' 
var privateKeySenderHex = new Buffer(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex); */

/*#########################################
Send the transaction to the network
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 

/* var serializedTransaction = transaction.serialize(); 
web3.eth.sendSignedTransaction(serializedTransaction); */
