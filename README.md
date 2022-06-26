# DeCanvas

DeCanvas is a decentralised pixel grid canvas, where anyone can change the colour of a pixel on chain. 


After 24 hours, the final collaborative artwork generated is turned into an NFT and auctioned off, with the proceeds going towards a charity chosen by an on chain vote of contributors


The NFT will contain the final image as well as a gif timelapse of how the canvas came to its final state. Each pixel stores a history of all contributing addresses and their colours.


We use Worldcoin verification of unique personhood to stop people spamming the canvas, and Lens Protocol to provide a user profile of people who have contributed to the final art piece.

Technologies used:

```
Tatum
Worldcoin
Polygon
WalletConnect
IPFS
Lens Protocol
Cronos
```

# Draft structure:

---smart contract---

h x w grid of pixels

use solidity events as storage for pixels, creating a chain of update transactions to the canvas

1: function to verify unique personhood (use worldcoin), login using metamask or walletconnect

2: function to update 1 pixel (input uint, uint, update storage) [require unique person, not voted yet]

3: function to generate final image (automatically upload to IPFS and generate new ERC721 with return token URI)

4: function to mint and auction final NFT using Tatum API

5: function to vote on where auction funds are sent

---frontend---

read blockchain storage (from array)

display pixels on canvas (according to uint colour stored in array)

menu to select colour from palette of colours

gallery to display all previous canvases, as well as gif of how each canvas was formed

--web3 integrations--

walletconnect, metamask

1: validate worldcoin signup

2: function to submit transaction to smart contract to update pixel value 

3: function to generate image from final canvas, and auto upload to ipfs, return ipfs uri

4: function to bid on auction

5: function to submit vote


---web2 backend---

server to host images

website
