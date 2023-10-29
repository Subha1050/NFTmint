// Create a variable to hold your NFTs
const nftCollection = [];

// Function to mint NFTs
function mintNFT(name, description, height) {
  // Create an NFT object with the metadata
  const nft = {
    name,
    description,
    height,
  };
  // Store the NFT in the collection
  nftCollection.push(nft);
}

// Function to list NFTs
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const nft = nftCollection[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Height: " + nft.height);
    console.log();
  }
}

// Function to get the total supply of NFTs
function getTotalSupply() {
  return nftCollection.length;
}

// Mint some NFTs and list them
mintNFT("Subhajit", "Coder", "5'10''");
mintNFT("Paul", "Gamer", "6'0''");

console.log("List of NFTs:");
listNFTs();

console.log("Total NFTs Minted: " + getTotalSupply());
