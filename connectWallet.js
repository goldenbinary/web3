// Connect to the contract using Web3.js and MetaMask
const provider = await detectEthereumProvider();
const web3 = new Web3(provider);
const contractAddress = "<contract address here>";
const contractAbi = <contract abi here>;
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Request access to the user's MetaMask account
await ethereum.request({ method: "eth_requestAccounts" });
const accounts = await web3.eth.getAccounts();
const currentUser = accounts[0];

// Call a function on the contract
const winningProposal = await contract.methods.winningProposal().call({ from: currentUser });
console.log("The winning proposal is: " + winningProposal);
