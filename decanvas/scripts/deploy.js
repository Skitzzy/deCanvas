const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const deCanvasContractFactory = await hre.ethers.getContractFactory("DeCanvas");
    const deCanvasContract = await deCanvasContractFactory.deploy();
    await deCanvasContract.deployed();

    //testing 
    let deCanvasTxn = await deCanvasContract.paint(10, 10, 10);
    await deCanvasTxn.wait();

    console.log("deCanvas address: ", deCanvasContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();