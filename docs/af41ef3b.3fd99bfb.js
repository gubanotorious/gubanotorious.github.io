(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),l=(a(0),a(171)),i={id:"sdk-services-blockchain",title:"Blockchain",sidebar_label:"Blockchain"},s={id:"sdk-services-blockchain",title:"Blockchain",description:"Service to manage all Bridge Passport blockchain interaction with supported blockchains\r",source:"@site/docs\\sdk-services-blockchain.md",permalink:"/doc/docs/sdk-services-blockchain",sidebar_label:"Blockchain",sidebar:"gettingStarted",previous:{title:"Application",permalink:"/doc/docs/sdk-services-application"},next:{title:"Bridge",permalink:"/doc/docs/sdk-services-bridge"}},c=[{value:"Functions",id:"functions",children:[{value:"publishPassport()",id:"publishpassport",children:[]},{value:"getAddressForPassport()",id:"getaddressforpassport",children:[]},{value:"getPassportForAddress()",id:"getpassportforaddress",children:[]},{value:"unpublishPassport()",id:"unpublishpassport",children:[]},{value:"getBalances()",id:"getbalances",children:[]},{value:"getRecentTransactions()",id:"getrecenttransactions",children:[]},{value:"sendPayment()",id:"sendpayment",children:[]},{value:"verifyPayment()",id:"verifypayment",children:[]},{value:"getOracleGasPrice()",id:"getoraclegasprice",children:[]},{value:"transferGas()",id:"transfergas",children:[]},{value:"verifyGasTransfer()",id:"verifygastransfer",children:[]},{value:"getTransactionStatus()",id:"gettransactionstatus",children:[]},{value:"pollTransactionComplete()",id:"polltransactioncomplete",children:[]},{value:"removeClaim()",id:"removeclaim",children:[]},{value:"getClaim()",id:"getclaim",children:[]},{value:"sendApplicationRequest()",id:"sendapplicationrequest",children:[]},{value:"sendTokenSwapRequest()",id:"sendtokenswaprequest",children:[]},{value:"sendPassportPublishRequest()",id:"sendpassportpublishrequest",children:[]},{value:"sendClaimPublishRequest()",id:"sendclaimpublishrequest",children:[]},{value:"publishClaimTransaction()",id:"publishclaimtransaction",children:[]}]}],o={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Service to manage all Bridge Passport blockchain interaction with supported blockchains"),Object(l.b)("h2",{id:"functions"},"Functions"),Object(l.b)("h3",{id:"publishpassport"},"publishPassport()"),Object(l.b)("p",null,"Publish the passport and wallet address combination to the blockhain using the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async publishPassport(wallet, passport, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for publishing"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport to publish"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wait")," (bool) - wait for the transaction to complete"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getaddressforpassport"},"getAddressForPassport()"),Object(l.b)("p",null,"Retrieve the published blockchain address for the specified passport from the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async getAddressForPassport(network, passportId)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the address from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passportId")," (string) - the passport id of the passport to retrieve the address for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getpassportforaddress"},"getPassportForAddress()"),Object(l.b)("p",null,"Retrieve the published passport id for the wallet blockchain address from the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async getPassportForAddress(network, address)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the passport id from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the passport id for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"unpublishpassport"},"unpublishPassport()"),Object(l.b)("p",null,"Unpublish the passport and wallet address combination from the blockchain using the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async unpublishPassport(passport, wallet, wait, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport to publish"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for publishing"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wait")," (bool) - wait for the transaction to complete"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getbalances"},"getBalances()"),Object(l.b)("p",null,"Retrieve BRDG token and related blockchain gas balances"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async getBalances(network, address)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve balances from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the balances for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getrecenttransactions"},"getRecentTransactions()"),Object(l.b)("p",null,"Retrieve recent BRDG token blockchain transactions"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async getRecentTransactions(network, address) \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the transactions from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the transactions for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"sendpayment"},"sendPayment()"),Object(l.b)("p",null,"Send a BRDG token payment transaction"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async sendPayment(wallet, amount, recipient, paymentIdentifier, wait, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to send payment from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"amount")," (decimal) - the amount of BRDG to send"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"recipient")," (string) - the blockchain address to send payment to"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wait")," (bool) - whether or not to poll and wait for completion or immediately return the transmitted blockchain transaction id without waiting for completion"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"verifypayment"},"verifyPayment()"),Object(l.b)("p",null,"Verify a BRDG token payment transaction info"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async verifyPayment(network, hash, from, to, amount, paymentIdentifier)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to verify the payment from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hash")," (string) - the unique blockchain hash / transaction identifier"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"from")," (string) - the address the payment was sent from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"to")," (string) - the address the payment was sent to"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"amount")," (decimal) - the amount of BRDG that was sent"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getoraclegasprice"},"getOracleGasPrice()"),Object(l.b)("p",null,"Retrieves the current oracle recommended gas price for the blockchain"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async getOracleGasPrice(network)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to get the price for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"transfergas"},"transferGas()"),Object(l.b)("p",null,"Send a blockchain gas transfer transaction"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async transferGas(wallet, amount, recipient, paymentIdentifier, wait, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to send payment from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"amount")," (decimal) - the amount of BRDG to send"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"recipient")," (string) - the blockchain address to send payment to"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wait")," (bool) - whether or not to poll and wait for completion or immediately return the transmitted blockchain transaction id without waiting for completion"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"verifygastransfer"},"verifyGasTransfer()"),Object(l.b)("p",null,"Verify a blockchain gas transfer transaction"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async verifyGasTransfer(network, hash, from, to, amount, paymentIdentifier)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to verify the payment from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hash")," (string) - the unique blockchain hash / transaction identifier"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"from")," (string) - the address the payment was sent from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"to")," (string) - the address the payment was sent to"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"amount")," (decimal) - the amount of BRDG that was sent"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"gettransactionstatus"},"getTransactionStatus()"),Object(l.b)("p",null,"Retrieves the completion and success status of a blockchain transaction"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async getTransactionStatus(network, hash)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to verify the payment from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hash")," (string) - the unique blockchain hash / transaction identifier")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"polltransactioncomplete"},"pollTransactionComplete()"),Object(l.b)("p",null,"Polls for the status for a blockchain transaction"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async pollTransactionComplete(network, txid)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the transaction"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"txid")," (string) - the blockchain transaction id to poll")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removeclaim"},"removeClaim()"),Object(l.b)("p",null,"Unpublish a Bridge Verified claim to the blockhain using the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async removeClaim(wallet, claimTypeId, wait, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to remove the claim from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"claimtypeId")," (string) - the claim type to remove"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wait")," (bool) - wait for the transaction to complete"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getclaim"},"getClaim()"),Object(l.b)("p",null,"Retrieve a published Bridge Verified claim from the blockhain using the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async getClaim(network, claimTypeId, address) \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the claim from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"claimtypeId")," (string) - the claim type to retrieve"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the claim for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"sendapplicationrequest"},"sendApplicationRequest()"),Object(l.b)("p",null,"Sends the required network fees and creates a verification request for the specified partner"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async sendApplicationRequest(passport, password, wallet, partnerId, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet that the tokens will be swapped from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"partnerId")," string - the Bridge Marketplace partner to create the request with"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"sendtokenswaprequest"},"sendTokenSwapRequest()"),Object(l.b)("p",null,"Sends the required fees and the token swap request transaction to swap tokens across NEO and Ethereum"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async sendTokenSwapRequest(passport, password, wallet, receivingWallet, amount, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet that the tokens will be swapped from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"receivingWallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet that will receive the swapped tokens"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"amount")," (decimal) - the number of tokens to be swapped"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"sendpassportpublishrequest"},"sendPassportPublishRequest()"),Object(l.b)("p",null,"Sends the request to publish a passport on the specified blockchain"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async sendPassportPublishRequest(passport, password, wallet, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"sendclaimpublishrequest"},"sendClaimPublishRequest()"),Object(l.b)("p",null,"Sends the required publish and fee transactions and notifies the Bridge Network of the claim publish request to be verified and published.  For Ethereum, once verified, the claim transaction is sent by Bridge and published."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async sendClaimPublishRequest(passport, wallet, claim, hashOnly, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"claim")," (",Object(l.b)("a",{href:"sdk-models-claim"},"Claim"),") - the claim to publish"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hashOnly")," (bool) - publish the hash of the value of the claim only"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"publishclaimtransaction"},"publishClaimTransaction()"),Object(l.b)("p",null,"Publishes the claim transaction to the blockchain (NEO Only).  This will retrieve the Bridge signed transaction that will need to be dual signed by the owner and then relayed to the node."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async publishClaimTransaction(passport, password, wallet, claim, hashOnly, claimPublishId, wait, costOnly)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"claim")," (",Object(l.b)("a",{href:"sdk-models-claim"},"Claim"),") - the claim to publish"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hashOnly")," (bool) - publish the hash of the value of the claim only"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"claimPublishId")," (string) - the claim publish identifier of the request received from the Bridge network"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wait")," (bool) - if true, wait for the transaction to complete on the blockchain, otherwise return the hash"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"costOnly")," (bool) - if true, the estimated transaction cost is returned and the transaction is not relayed")),Object(l.b)("hr",null))}b.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,h=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return a?r.a.createElement(h,s({ref:t},o,{components:a})):r.a.createElement(h,s({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);