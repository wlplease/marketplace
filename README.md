<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/coinbase/onchainkit/main/site/docs/public/logo/v0-27.png">
    <img alt="OnchainKit logo vibes" src="https://raw.githubusercontent.com/coinbase/onchainkit/main/site/docs/public/logo/v0-27.png" width="auto">
  </picture>
</p>

# NOSEA.xyz Base Chain NFT Marketplace

Welcome to the NOSEA.xyz Base Chain NFT Marketplace, a cutting-edge platform where you can discover, collect, and trade unique NFTs on the Base Chain. Built using [OnchainKit](https://onchainkit.xyz), this marketplace leverages the power of blockchain technology to offer a seamless and secure experience for NFT enthusiasts.

Explore the vibrant world of digital assets, connect with other collectors, and manage your NFTs directly from your wallet. NOSEA.xyz is designed to be user-friendly, with easy wallet integration and a sleek interface that makes trading NFTs effortless.

Deployed to [Netlify](https://www.netlify.com) and continuously updated through our GitHub repository, NOSEA.xyz is a living project that evolves with the needs of its users. Join us on this exciting journey in the digital marketplace!

## Onchain App Template

This marketplace was built using the Onchain App Template, developed with [OnchainKit](https://onchainkit.xyz) and ready to be deployed to platforms like Vercel or Netlify.

Play with it live on NOSEA.xyz (Coming Soon!)

Have fun! ⛵️

<br />

## Setup

To ensure all components work seamlessly, set the following environment variables in your `.env` file using `.local.env.example` as a reference.

You can find the API key on the [Coinbase Developer Portal's OnchainKit page](https://portal.cdp.coinbase.com/products/onchainkit). If you don't have an account, you will need to create one.

You can find your Wallet Connector project ID at [Wallet Connect](https://cloud.walletconnect.com).

```sh
# See https://portal.cdp.coinbase.com/products/onchainkit
NEXT_PUBLIC_CDP_API_KEY="GET_FROM_COINBASE_DEVELOPER_PLATFORM"

# See https://cloud.walletconnect.com
NEXT_PUBLIC_WC_PROJECT_ID="GET_FROM_WALLET_CONNECT"
## NOSEA Marketplace Build and Deploy

This action builds and deploys the NOSEA Marketplace project to Netlify.

### Inputs

- **node-version**:  
  Description: The Node.js version to use for the build.  
  Required: true  
  Default: `18.x`

- **branch**:  
  Description: The branch to deploy.  
  Required: true  
  Default: `main`

- **netlify_auth_token**:  
  Description: Netlify authentication token.  
  Required: true  
  Default: `${{ secrets.NETLIFY_AUTH_TOKEN }}`

- **netlify_site_id**:  
  Description: Netlify site ID for deployment.  
  Required: true  
  Default: `${{ secrets.NETLIFY_SITE_ID }}`

### Runs

Using: `composite`

#### Steps

1. **Checkout Code**  
   Uses: `actions/checkout@v4`

2. **Setup Node.js Environment**  
   Uses: `actions/setup-node@v3`  
   With:
   - `node-version`: `${{ inputs.node-version }}`
   - Cache: `yarn`

3. **Install Dependencies**  
   Run: `yarn install --frozen-lockfile`

4. **Build Application**  
   Run: `yarn build`

5. **Export Static Files (if applicable)**  
   Run: `yarn export`

6. **Deploy to Netlify**  
   Uses: `netlify/actions/cli@v1`  
   With:
   - Args: `deploy --dir=.next --prod`  # Adjust the directory if you're using 'out'
   Env:
   - `NETLIFY_AUTH_TOKEN`: `${{ inputs.netlify_auth_token }}`
   - `NETLIFY_SITE_ID`: `${{ inputs.netlify_site_id }}`
