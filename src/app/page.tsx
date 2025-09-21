"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'FAQ', id: 'faq' },
            { name: 'Footer', id: 'footer' },
          ]}
          logoSrc='/images/logo.svg'
          logoWidth={100}
          logoHeight={50}
          buttonText='Get a Quote'
          onButtonClick={() => { /* handle click */ }}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Webild Agency"
          subtitle="Your solution for innovative SaaS products"
          contractAddress="0xYourContractAddress"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="At Webild Agency, we specialize in creating tailored software solutions that transform businesses. Our team is dedicated to innovation and excellence to ensure your success."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: 'Step 1', description: 'Register and create an account.', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Fund your account with the desired amount.', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Start your investment journey securely.', image: '/images/placeholder3.avif', position: 'right', isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Our tokenomics is designed to ensure fairness and transparency."
          tokenData={[
            { value: 'Total Supply', description: '1 Billion Tokens' },
            { value: 'Circulating Supply', description: '500 Million Tokens' },
            { value: 'Market Cap', description: '$50 Million' },
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: 'What is Webild?', content: 'Webild is a leading agency for SaaS products.' },
            { title: 'How can I get support?', content: 'You can reach out via our support form or chat.' },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Webild Agency Logo"
          logoText="Webild Agency"
          columns={[
            { title: 'Products', items: [{ label: 'SaaS Solutions', onClick: () => {} }, { label: 'Custom Development', onClick: () => {} }] },
            { title: 'Support', items: [{ label: 'Contact Us', onClick: () => {} }, { label: 'FAQ', onClick: () => {} }] },
          ]}
          copyrightText="© 2023 Webild Agency"
          onPrivacyClick={() => { /* handle privacy click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}