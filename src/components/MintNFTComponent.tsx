import React, { useState } from 'react';
import { ThirdwebSDK, SmartContract } from '@thirdweb-dev/sdk';
import { Base } from '@thirdweb-dev/chains';
import { ThirdwebProvider, useContract, useContractRead } from '@thirdweb-dev/react';

// Initialize the Thirdweb SDK with the Base Mainnet ChainId
const sdk = new ThirdwebSDK(Base);

// The address of the contract on the blockchain
const contractAddress = "0x864586F3C1bDF6b9326BA6A0a765a91124C757cF";

// Define the type for the listing object
interface Listing {
  listingId: number;
  tokenId: number;
  quantity: number;
  pricePerToken: string;
  startTimestamp: number;
  endTimestamp: number;
  listingCreator: string;
  assetContract: string;
  currency: string;
  tokenType: number;
  status: number;
  reserved: boolean;
}

export default function NFTListingsComponent() {
  // Fetch the contract using the useContract hook
  const { contract } = useContract(contractAddress);

  return (
    <div className="listings-container">
      {/* Pass the contract to FetchListings to display the listings */}
      {contract && <FetchListings contract={contract as SmartContract} />}
    </div>
  );
}

function FetchListings({ contract }: { contract: SmartContract }) {
  // Use the useContractRead hook to fetch data from the contract
  const { data, isLoading, error } = useContractRead(
    contract,
    "getAllValidListings",
    [0, 10] // Arguments for the function
  );

  if (isLoading) {
    return <p>Loading listings...</p>;
  }

  if (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return <p>Error fetching listings: {errorMessage}</p>;
  }

  if (data && data.length > 0) {
    return (
      <div className="listings-container mt-8">
        <h2 className="text-2xl font-semibold text-indigo-600">Valid Listings</h2>
        <ul>
          {data.map((listing: Listing, index: number) => (
            <li key={index} className="border-b border-gray-300 py-4">
              <p>Listing ID: {listing.listingId}</p>
              <p>Token ID: {listing.tokenId}</p>
              <p>Quantity: {listing.quantity}</p>
              <p>Price per Token: {listing.pricePerToken}</p>
              {/* Add more listing details here as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <p>No listings found.</p>;
  }
}

// Wrap the entire application in the ThirdwebProvider to provide the Base Mainnet chain
export function App() {
  return (
    <ThirdwebProvider activeChain={Base}>
      <NFTListingsComponent />
    </ThirdwebProvider>
  );
}
