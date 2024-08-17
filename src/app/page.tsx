'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
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
                Explore and Trade NFTs
              </h2>
              <p className="text-center text-gray-700 mt-2 max-w-3xl">
                Dive into the NOSEA Marketplace to discover, buy, and trade unique NFTs on the Base Chain. Use the interface below to browse the available listings and manage your assets securely.
              </p>
              <p className="text-center text-gray-700 mt-2 max-w-3xl">
                Mint our first marketplace NFT, the StarPop Based Duck, and be part of the exciting journey as it makes its debut. This unique NFT is now listed and ready for collectors to grab.
              </p>
              {/* Embed the iframe with the specified content */}
              <iframe
                src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x3CbFc93C108715Ae79a5c4cf0CD88c8fE1D16C33&chain=%7B%22name%22%3A%22Base%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F8453.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22base%22%2C%22chainId%22%3A8453%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22base%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmaxRoHpxZd8PqccAynherrMznMufG6sdmHZLihkECXmZv%22%2C%22width%22%3A1200%2C%22height%22%3A1200%2C%22format%22%3A%22png%22%7D%7D&clientId=1046918ab2f3857aaf21f9d68a2400dc&theme=dark&primaryColor=purple"
                width="600px"
                height="600px"
                style={{ maxWidth: '100%' }}
                frameBorder="0"
              ></iframe>
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
