'use client';

import {
  DISCORD_LINK,
  FIGMA_LINK,
  GITHUB_LINK,
  ONCHAINKIT_LINK,
  TWITTER_LINK,
  CONTRACT_LINK,
  FLIPPER_LINK,
} from 'src/links';
import ArrowSvg from 'src/svg/ArrowSvg';

const docLinks = [
  { href: ONCHAINKIT_LINK, title: 'Docs' },
  { href: GITHUB_LINK, title: 'Github' },
  { href: DISCORD_LINK, title: 'Discord' },
  { href: FIGMA_LINK, title: 'Figma' },
  { href: TWITTER_LINK, title: 'X' },
  { href: CONTRACT_LINK, title: 'Contract' },
  { href: FLIPPER_LINK, title: 'Flipper' },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 py-6" style={{ backgroundColor: '#FFADDE' }}>
      <section className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2 text-white">
            NOSEA NFT's on BaseChain <span className="font-bold">Nosea.xyz</span> built with:{' '}
            <a
              href={ONCHAINKIT_LINK}
              target="_blank"
              rel="noreferrer"
              title="OnchainKit"
              className="hover:text-indigo-600"
            >
              OnchainKit
            </a>
          </h3>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
          {docLinks.map(({ href, title }) => (
            <li className="flex" key={href}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                title={title}
                className="flex items-center gap-1 text-sm text-white hover:text-indigo-600"
              >
                <p>{title}</p>
                <ArrowSvg />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-6 text-center md:text-left">
        <p className="text-sm text-white">
          © 2024 nosea.xyz. All rights reserved.
        </p>
        <p className="text-xs text-white mt-2">
          Disclaimer: The information provided on this website and the Base Chain contract is intended for informational and educational purposes only. NOSEA is not responsible for any actions you take based on the content available on this site. Engaging in blockchain transactions, including but not limited to NFT trades, involves financial risk. You should seek independent financial and legal advice before participating in any blockchain activities. NOSEA does not provide any warranties or guarantees regarding the accuracy or completeness of the information. All transactions conducted on the Base Chain are final and irreversible.
        </p>
      </section>
    </footer>
  );
}