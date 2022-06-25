const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const deCanvasFactory = await hre.ethers.getContractFactory("DeCanvas");
    const deCanvasContract = await deCanvasFactory.deploy();
    await deCanvasContract.deployed();

    console.log("Contract deployed to:", deCanvasContract.address);
    console.log("Contract deployed by:", owner.address);

    let deCanvasTxn = await deCanvasContract.paint(10, 10, 10);
    await deCanvasTxn.wait();

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