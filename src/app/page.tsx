'use client';

import React, { useEffect, useState } from "react";
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { Avatar, Identity, Name, Badge } from '@coinbase/onchainkit/identity';
import { readContract } from "thirdweb"; // Ensure proper import from thirdweb or your contract library

export default function Page() {
  const { address } = useAccount();
  const [listings, setListings] = useState<any[]>([]); // Adjust type as needed for your listings

  // Fetch listings
  useEffect(() => {
    async function fetchListings() {
      try {
        const contractAddress = "0x864586F3C1bDF6b9326BA6A0a765a91124C757cF";
        const data = await (readContract as any)({
          contract: contractAddress,
          method: "getAllValidListings",
          params: [0, 100],
        });
        setListings(data);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      }
    }

    fetchListings();
  }, []);

  // Define the createListing function with typed event parameter
  const createListing = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      contractAddress: formData.get('contractAddress') as string,
      tokenId: formData.get('tokenId') as string,
      price: formData.get('price') as string,
      listingType: formData.get('listingType') as string,
    };
    console.log("Creating listing with data:", data);
    // Add logic to interact with the smart contract and create a listing
  };

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <header className="mt-6 mb-6 flex w-full flex-col md:flex-row items-center justify-between bg-[#FFADDE] p-4 rounded-lg">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <a
            href="https://nosea.xyz"
            title="NOSEA.xyz Base NFT Marketplace"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold text-white"
          >
            NOSEA
          </a>
          {/* Identity Component */}
          <Identity address="0x32737fee16F5C423664AB1B76c1684Bd2db06095" schemaId="0xf8b...">
            <Avatar />
            <Name>
              <Badge />
            </Name>
          </Identity>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#D4B1F0] text-white px-4 py-2 rounded-lg hover:bg-[#C69FE8]">
            <SignupButton />
          </div>
          {!address && (
            <div className="bg-[#D4B1F0] text-white px-4 py-2 rounded-lg hover:bg-[#C69FE8]">
              <LoginButton />
            </div>
          )}
        </div>
      </header>

 <section
  className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl p-4"
  style={{
    backgroundImage: 'url("https://img.freepik.com/free-photo/blockchain-technology-background-gradient-blue_53876-124646.jpg?t=st=1723991324~exp=1723994924~hmac=7ac3fd377c662c64b52ec393d45e118e673bf0b45eabae76b97004c045503419&w=1480")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '500px',
  }}
>
  <h1 className="text-3xl font-bold text-white mb-2">
    Welcome to NOSEA NFT Marketplace
  </h1>
  <p className="text-center text-lg text-white max-w-2xl mb-4">
    Discover, collect, and trade unique NFTs on the Base Chain. Connect your wallet to explore the marketplace and manage your assets securely. Join our vibrant community today to access exclusive NFTs, connect with other collectors, and stay ahead in the digital marketplace.
  </p>

  {!address && (
    <WalletWrapper
      className="w-[450px] max-w-full mt-4"
      text="Sign in to explore the NOSEA NFT Marketplace. Unlock exclusive NFTs and manage your digital assets."
    />
  )}
</section>


      <div>
        {address && (
          <>
            <TransactionWrapper address={address} />
            <section className="mt-8 w-full flex flex-col items-center bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-indigo-600">
    NOSEA NFT Marketplace
  </h2>
 <p className="text-center text-gray-700 mt-2 max-w-3xl">
    Welcome to the NOSEA NFT Marketplace, your gateway to discovering, buying, and trading unique NFTs on the Base Chain. Connect your wallet to access the full range of marketplace features and manage your digital assets securely.
  </p>
  <p className="text-center text-gray-700 mt-2 max-w-3xl">
    Browse through our exclusive NFT collections, including the StarPop Based Duck—our first marketplace NFT. Don’t miss your chance to be a part of this exciting journey as it makes its debut in the digital marketplace.
  </p>
             
              <iframe
                src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x3CbFc93C108715Ae79a5c4cf0CD88c8fE1D16C33&chain=%7B%22name%22%3A%22Base%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F8453.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22base%22%2C%22chainId%22%3A8453%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22base%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmaxRoHpxZd8PqccAynherrMznMufG6sdmHZLihkECXmZv%22%2C%22width%22%3A1200%2C%22height%22%3A1200%2C%22format%22%3A%22png%22%7D%7D&clientId=1046918ab2f3857aaf21f9d68a2400dc&theme=dark&primaryColor=purple"
                width="600px"
                height="600px"
                style={{ maxWidth: '100%' }}
                frameBorder="0"
              ></iframe>
            </section>

           
<section className="mt-8 w-full flex flex-col items-center bg-white p-6 rounded-xl">
   <h2 className="text-2xl font-semibold text-indigo-600">
                Quackintosh Base Ducking on Chain - Pay with Base ETH
              </h2>
               <p className="text-center text-gray-700 mt-2 max-w-3xl">
                Mint one of ten of StarPops Base Duck Friends
              </p>
 
  <iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x1dcc3a887045312B76bcA6ac57Cc3967dED1Afd5&chain=%7B%22name%22%3A%22Base%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F8453.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22base%22%2C%22chainId%22%3A8453%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22base%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmaxRoHpxZd8PqccAynherrMznMufG6sdmHZLihkECXmZv%22%2C%22width%22%3A1200%2C%22height%22%3A1200%2C%22format%22%3A%22png%22%7D%7D&clientId=1046918ab2f3857aaf21f9d68a2400dc&theme=system&primaryColor=purple"
    width="600px"
    height="600px"
      style={{ maxWidth: '100%' }}
    frameBorder="0"
  ></iframe>
</section>

<section className="mt-8 w-full flex flex-col items-center bg-white p-6 rounded-xl new-class-name">
  <h2 className="text-2xl font-semibold text-indigo-600">
    Quackintosh Base Ducking on Chain - Pay with Quack
  </h2>
  <p className="text-center text-gray-700 mt-2 max-w-3xl">
    Mint one of ten of StarPops Base Duck Friends
  </p>
  <iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x808edA92DC7e03d56A448CdcaBF6F2EA986a779F&chain=%7B%22name%22%3A%22Base%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F8453.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22base%22%2C%22chainId%22%3A8453%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22base%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmaxRoHpxZd8PqccAynherrMznMufG6sdmHZLihkECXmZv%22%2C%22width%22%3A1200%2C%22height%22%3A1200%2C%22format%22%3A%22png%22%7D%7D&clientId=1046918ab2f3857aaf21f9d68a2400dc&theme=dark&primaryColor=teal"
    width="600px"
    height="600px"
    style={{ maxWidth: '100%' }}
    frameBorder="0"
  ></iframe>
</section>



            <div className="marketplace-listings-section bg-[#92EAEB] p-6 rounded-xl mt-8">
              <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">Marketplace Listings</h2>
              <p className="text-center text-lg text-gray-700 mb-6">
                Browse through the available NFTs listed in the NOSEA marketplace. Connect your wallet to make a purchase or place a bid on your desired items.
              </p>
                            <div className="listings-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.length > 0 ? (
                  listings.map((listing) => (
                    <div key={listing.listingId} className="listing-item bg-white p-4 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">NFT #{listing.tokenId}</h3>
                      <p className="text-gray-600">Price: {listing.pricePerToken} ETH</p>
                      <p className="text-gray-600">Quantity: {listing.quantity}</p>
                      <p className="text-gray-600">Creator: {listing.listingCreator}</p>
                      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500">
                        Buy Now
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-600">No listings available at the moment.</p>
                )}
              </div>
            </div>

            <div
              className="marketplace-section w-full max-w-3xl mx-auto p-6 rounded-xl"
              style={{ backgroundColor: "#92EAEB" }}
            >
              <h2 className="text-3xl font-bold text-indigo-800 mb-4 text-center">
                Mint and List Your NFT
              </h2>
              <p className="text-lg text-gray-700 mb-6 text-center">
                Easily create and list your NFT on the NOSEA Marketplace. Simply fill in the details below and get your NFT ready for trading on the Base Chain.
              </p>
              <form onSubmit={createListing} className="listing-form space-y-4">
                <div className="form-group">
                  <label htmlFor="contractAddress" className="block font-medium text-gray-800">
                    NFT Contract Address
                  </label>
                  <input
                    type="text"
                    name="contractAddress"
                    id="contractAddress"
                    value="0x864586F3C1bDF6b9326BA6A0a765a91124C757cF"
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tokenId" className="block font-medium text-gray-800">
                    NFT Token ID
                  </label>
                  <input
                    type="text"
                    name="tokenId"
                    id="tokenId"
                    placeholder="Enter NFT Token ID"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price" className="block font-medium text-gray-800">
                    Sale Price (ETH)
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Enter Sale Price"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="listingType" className="block font-medium text-gray-800">
                    Listing Type
                  </label>
                  <select
                    name="listingType"
                    id="listingType"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="directListing">Direct Listing</option>
                    <option value="auctionListing">Auction Listing</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                  Create Listing
                </button>
              </form>
            </div>

            <section className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-[#ed32e4] px-2 py-4 md:grow">
              <h2 className="text-2xl font-bold text-black">
                Join the Puzzle Adventure!
              </h2>
              <p className="text-center text-lg text-gray-800 max-w-2xl">
                Dive into Flipper, an exciting puzzle game on the Base chain. Solve puzzles, earn rewards, and experience the thrill of blockchain gaming!
              </p>
              <a
                href="https://flipperonbase.xyz"
                title="Play Flipper"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#007BFF] text-white px-6 py-3 rounded-lg hover:bg-[#0056b3] text-lg font-semibold"
              >
                Play Flipper Now
              </a>
            </section>
          </>
        )}
      </div>

      <section className="flex w-full flex-col items-center justify-center gap-2 bg-[#F3F4F6] px-4 py-6 rounded-lg mt-8 w-full">
        <div className="flex gap-4">
          <a
            href="/terms"
            title="Terms of Service"
            className="text-lg font-semibold text-indigo-600 hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            title="Privacy Policy"
            className="text-lg font-semibold text-indigo-600 hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
