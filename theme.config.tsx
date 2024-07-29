import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
}

export default config
