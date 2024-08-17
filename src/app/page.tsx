'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import MintNFTComponent from '../components/MintNFTComponent'; // Import the MintNFTComponent
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <header className="mt-6 mb-6 flex w-full flex-col md:flex-row items-center justify-between bg-[#FFADDE] p-4 rounded-lg">
        <div className="flex items-center justify-between gap-2 md:gap-0 w-full">
          <a
            href="https://nosea.xyz"
            title="NOSEA"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold text-white"
          >
            NOSEA
          </a>
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
        </div>
      </header>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-[#ACBEFC] px-2 py-4 md:grow">
        <h1 className="text-3xl font-bold text-white">
          Welcome to NOSEA NFT Marketplace
        </h1>
        <p className="text-center text-lg text-gray-700 max-w-2xl">
          Discover, collect, and trade unique NFTs on the Base Chain. Connect your wallet to start exploring the marketplace and manage your assets securely.
        </p>
        <div className="flex h-[450px] w-[450px] max-w-full items-center justify-center rounded-xl">
          <div className="rounded-xl bg-[#F3F4F6] px-4 py-[11px]">
            <p className="font-normal text-indigo-600 text-xl not-italic tracking-[-1.2px]">
              Join our vibrant community today. Explore exclusive NFTs, connect with other collectors, and stay ahead in the digital marketplace.
            </p>
          </div>
        </div>
        {address ? (
          <>
            <TransactionWrapper address={address} />
            <section className="mt-8 w-full flex flex-col items-center bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-indigo-600">
                Mint Your Own NFT
              </h2>
              <p className="text-center text-gray-700 mt-2 max-w-3xl">
                Ready to create your own NFT on the Base Chain? Use our simple and secure minting tool to bring your digital assets to life. Whether it's art, music, or a unique collectible, your NFT will be stored immutably on the blockchain, giving you true ownership and control.
              </p>
              <p className="text-center text-gray-700 mt-2 max-w-3xl">
                Start minting now and be part of the growing NOSEA community. Simply connect your wallet and follow the steps to mint your first NFT.
              </p>
              {/* Replacing the placeholder link with the actual MintNFTComponent */}
              <MintNFTComponent />
            </section>
          </>
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in to join the NOSEA community. Mint, Trade, Purchase NFTs"
          />
        )}
      </section>
      <Footer />
    </div>
  );
}
