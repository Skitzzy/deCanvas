const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const deCanvasContractFactory = await hre.ethers.getContractFactory("DeCanvas");
    
    console.log("1");
    const deCanvasContract = await deCanvasContractFactory.deploy();
    
    console.log("2");
    await deCanvasContract.deployed();

    //testing 
    //let deCanvasTxn = await deCanvasContract.paint(1, 1, 1);
    //await deCanvasTxn.wait();

    console.log("3");
    //let deCanvasTxntwo = await deCanvasContract.paint(5, 2, 5);
    //await deCanvasTxntwo.wait();

    console.log("4");
    //let deCanvasget;
    //deCanvasget = await deCanvasContract.getCanvas({gasPrice: 50000000000000000000000000n});
    
    console.log("5");
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