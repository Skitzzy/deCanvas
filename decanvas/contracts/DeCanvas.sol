// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "../node_modules/hardhat/console.sol";

contract DeCanvas {
    

    //Struct for storing data about individual pixels
    struct Pixel {
        address painter;
        uint colour;
        uint256 timestamp;
    }
    
    //Event for when a pixel is painted
    event Paint(address indexed painter, uint256 timestamp, Pixel pixel, uint xcoord, uint ycoord);

    //Define the canvas
    Pixel[100][100] canvas;

    //
    constructor() {

        //Initialise each pixel to white, with null address as painter
        for (uint x=0; x<100; x++){
            for (uint y=0; y<100; y++){
                canvas[x][y].colour = 0;
                canvas[x][y].painter = address(0);
                canvas[x][y].timestamp = block.timestamp;
            }
        }
        console.log("DeCanvas contract deployed");
    }

    //Paint a pixel
    function paint(uint x, uint y, uint _colour) public {

        //Update relevant Pixel struct in canvas
        canvas[x][y].colour = _colour;
        canvas[x][y].painter = msg.sender;
        canvas[x][y].timestamp = block.timestamp;

        console.log("%s painted pixel at %s , %s with colour %s", msg.sender, x, y, _colour);

        emit Paint(msg.sender, block.timestamp, canvas[x][y], x, y);
    }

    //Return the entire canvas
    function getCanvas() public view returns (Pixel[][] memory) {
        return canvas;
    }
}