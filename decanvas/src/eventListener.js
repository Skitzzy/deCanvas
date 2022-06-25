import Web3 from 'web3';
const web3 = new Web3('YOUR_RPC_ENDPOINT_HERE');
const ABI = 'YOUR ABI HERE';
const CONTRACT_ADDRESS = 'YOUR CONTRACT ADDRESS HERE';
const myContract = new Web3.Contract(ABI, CONTRACT_ADDRESS);