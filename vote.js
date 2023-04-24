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

// Call the vote function on the contract
const voteButton = document.getElementById("vote-button");
voteButton.addEventListener("click", async () => {
  const proposal1 = document.getElementById("proposal1").value;
  const proposal2 = document.getElementById("proposal2").value;

  await contract.methods.vote(proposal1, proposal2).send({ from: currentUser });

  console.log("Vote submitted");
});

// Call the winningProposal function on the contract
const winningProposalButton = document.getElementById("winning-proposal-button");
winningProposalButton.addEventListener("click", async () => {
  const winningProposal = await contract.methods.winningProposal().call({ from: currentUser });

  console.log("The winning proposal is: " + winningProposal);
});
