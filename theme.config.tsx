import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Script from "next/script";

function useNextSeoProps() {
  return {
    titleTemplate: '%s – Portfolio4me.com',
    description: 'Portfolio4me is a platform that allows you to create a portfolio website in minutes. It is a simple and easy-to-use platform that allows you to create a portfolio website in minutes.',
  }
}

const config: DocsThemeConfig = {
  logo: <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  }}>
    <img src="/logo.png" style={{
      width: '30px',
      height: '30px',
    }} alt="Portfolio4me" />

    <span style={{
      fontSize: '1rem',
      fontWeight: 'bold',
    }}>Portfolio4me</span>
  </div>,
  project: {
    link: 'https://github.com/Vladimir-Urik/portfolio4me-docs',
  },
  chat: {
    link: 'https://discord.gg/KMgJykBwqr',
  },
  docsRepositoryBase: 'https://github.com/Vladimir-Urik/portfolio4me-docs',
  footer: {
    text: '(c) 2024 Portfolio4me.com. All rights reserved.',
  },
  primaryHue: 330,
  useNextSeoProps: useNextSeoProps,
}

export default config
