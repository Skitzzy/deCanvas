// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "../node_modules/hardhat/console.sol";

contract DeCanvas {
    //Struct for storing data about individual pixels
    struct Pixel {
        address painter;
        uint256 colour;
        uint256 timestamp;
    }

    //Event for when a pixel is painted
    event Paint(
        address indexed painter,
        uint256 timestamp,
        Pixel pixel,
        uint256 xcoord,
        uint256 ycoord
    );

    //Define the canvas
    Pixel[100][100] canvas;

    //Setup owner modifier for function calls
    address owner;
    modifier _ownerOnly(){
    require(msg.sender == owner);
    }

    //Setup modifier and variable to track when to allow or disallow painting 
    bool allowPaint = true;
    modifier _paintAllowed(){
        require(allowPaint == true);
    }


    //Runs on initial deploy
    constructor() {

        //Define owner of contract as the address that deployed it
        owner = msg.sender;

        //Initialise each pixel to white, with null address as painter
        for (uint256 x = 0; x < 100; x++) {
            for (uint256 y = 0; y < 100; y++) {
                canvas[x][y].colour = 0;
                canvas[x][y].painter = address(0);
                canvas[x][y].timestamp = block.timestamp;
            }
        }
        console.log("DeCanvas contract deployed");
    }

    //Paint a pixel, only when allowPaint is true
    function paint (
        uint256 x,
        uint256 y,
        uint256 _colour
    ) _paintAllowed public {
        //Update relevant Pixel struct in canvas
        canvas[x][y].colour = _colour;
        canvas[x][y].painter = msg.sender;
        canvas[x][y].timestamp = block.timestamp;

        console.log(
            "%s painted pixel at %s , %s with colour %s",
            msg.sender,
            x,
            y,
            _colour
        );

        emit Paint(msg.sender, block.timestamp, canvas[x][y], x, y);
    }

    //Return the entire canvas
    function getCanvas() public pure view returns (Pixel[][] memory) {
        return canvas;
    }

    function endPainting() _ownerOnly {
        allowPaint = false;
    }
}
