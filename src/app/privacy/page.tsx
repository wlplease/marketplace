'use client';

export default function Terms() {
  return (
    <div className="container mx-auto p-6">
      {/* Link to NOSEA homepage at the top */}
      <a 
        href="https://nosea.xyz" 
        className="text-blue-500 hover:underline mb-4 block text-center"
        target="_blank" 
        rel="noreferrer"
      >
        Back to NOSEA Home
      </a>

      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Welcome to NOSEA, an NFT marketplace where users can mint, collect, and trade unique digital assets on the Base Chain. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully, and if you do not agree with them, you must not use our website or services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
        <p>
          By using this website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these terms. If you are using the website on behalf of a legal entity, you further represent and warrant that you have the authority to bind the entity to these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. NFT Marketplace</h2>
        <p>
          NOSEA provides a platform for users to mint, buy, sell, and trade non-fungible tokens (NFTs). The NFTs listed on our marketplace are digital assets recorded on the Base Chain blockchain, and ownership of these NFTs is tracked on the blockchain network. We do not own, control, or manage any of the NFTs listed on the platform.
        </p>
        <p>
          <strong>Minting:</strong> Users can mint NFTs directly on the Base Chain through our platform. By minting an NFT, you represent that you are the rightful owner or have obtained the necessary rights to mint and distribute the content associated with the NFT.
        </p>
        <p>
          <strong>Trading:</strong> The marketplace facilitates transactions between users for buying, selling, and trading NFTs. All transactions are conducted via smart contracts on the Base Chain, and NOSEA has no control over or liability for these transactions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
        <p>
          You are solely responsible for your use of the NOSEA platform, including any activities related to the minting, purchasing, selling, and trading of NFTs. You must ensure that all information provided by you is accurate, complete, and up-to-date. You are also responsible for securing your cryptocurrency wallet and any associated private keys. NOSEA is not responsible for any loss or damage arising from your failure to secure your wallet or from unauthorized access to your account.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
        <p>
          All content, trademarks, and intellectual property on the NOSEA platform are the property of their respective owners. Users may not copy, modify, distribute, or use any content from the website without obtaining prior written consent from the rightful owner. By minting NFTs on the platform, you grant NOSEA a non-exclusive, worldwide, royalty-free license to display, reproduce, and distribute your content for the purpose of operating the platform and promoting your NFTs.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. No Liability for Creators</h2>
        <p>
          NOSEA acts solely as a facilitator of transactions between users and does not have any control over or responsibility for the quality, legality, or authenticity of the NFTs minted or traded on the platform. By using the platform, you acknowledge and agree that the creators of NOSEA, its affiliates, and its partners shall not be liable for any damages, losses, or claims arising out of or in connection with your use of the platform, including but not limited to your interactions with other users, the content of NFTs, or the outcomes of any transactions conducted through the platform.
        </p>
        <p>
          <strong>Disclaimer:</strong> The NOSEA platform and its services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or reliability of any information or content provided on the platform, nor do we guarantee the performance or availability of the platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Risks Associated with NFTs</h2>
        <p>
          Engaging in NFT transactions carries significant risks, including but not limited to price volatility, market uncertainty, and the potential for technical issues on the blockchain network. By using the NOSEA platform, you acknowledge and accept these risks and agree that NOSEA shall not be liable for any losses or damages incurred as a result of your participation in NFT transactions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to the NOSEA platform at any time, without notice, for conduct that we believe violates these terms, is harmful to other users, or is otherwise illegal or inappropriate.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">9. Governing Law and Dispute Resolution</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which NOSEA operates, without regard to its conflict of laws principles. Any disputes arising from or relating to these terms or your use of the platform shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration body.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">10. Amendments</h2>
        <p>
          NOSEA reserves the right to modify or amend these terms at any time. Any changes will be effective immediately upon posting on the platform. Your continued use of the platform following the posting of changes constitutes your acceptance of those changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
        <p>
          If you have any questions or concerns regarding these terms, please contact us at info@nosea.xyz.
        </p>
      </section>

      {/* Link to NOSEA homepage at the bottom */}
      <a 
        href="https://nosea.xyz" 
        className="text-blue-500 hover:underline mt-8 block text-center"
        target="_blank" 
        rel="noreferrer"
      >
        Back to NOSEA Home
      </a>
    </div>
  );
}