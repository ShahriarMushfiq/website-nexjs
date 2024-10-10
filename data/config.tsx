import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Cloud Vortex Innovation',
    description: 'A vortex of innovation in the cloud.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'home',
        label: 'Home',
        href: '/',
      },
      {
        id: 'services',
        label: 'Services',
      },
      {
        id: 'about-us',
        label: 'About Us',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        &copy; Copyright by Cloud Vortex Innovation
      </>
    ),
    links: [
      {
        href: 'mailto:info@cloudvortexinnovation.com',
        label: 'Contact',
      },
      {
        href: 'https://www.linkedin.com/company/cloud-vortex-innovation',
        label: <FaLinkedin size="14" />,
      },
    ],
  },
}

export default siteConfig
