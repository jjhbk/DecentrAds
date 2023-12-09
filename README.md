# DecentrAds
Decentralized AdSpace is a p2p social media platform with a decentralised advertisement layer on top. It connects content creators directly with advertisers/brands eliminating the role of intermediaries. 

The dApp lets a user create content and put it on bidding for ad placements. The advertisers look at the metrics of a content page and place their bids. A simple auction algorithm then selects the highest bidder.

## How it works?
A creator starts by minting content on the platform. This content generates metrics like views, upvotes, downvotes, comments etc by users visiting the dApp. 
Each page of a creator has a dedicated ad space. This ad space is open for interested advertisers to place their ads. Depending upon the content metrics, an advertiser places a bid to host their ad. We use a simple auction algorithm to select the winning bidder and transfer the bid amount directly to creator's wallet.

## Tech used
Backend - Cartesi to compute the dynamic bid amount of ad space and disburse revenue to creators. The contracts are deployed on arbitrum goerli. Filecoin/IPFS for data storage.

Frontend - ReactJS framework to communicate with contracts, fetch NFT data and send requests to create and execute biddings.

## Architecture
![archtecture](https://cdn.discordapp.com/attachments/1126799185203695626/1182986335619911720/ethIndia-diagram.jpeg?ex=6586b0e1&is=65743be1&hm=393c56d51aed338742626988922d85fb0d2c2800916c3ac0b5cf11f96da99771&)




