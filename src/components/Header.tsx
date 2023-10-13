'use client'

import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Link as LinkUI } from '@nextui-org/link'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

const menuItems: Array<{ label: string; href: string }> = [
  { label: 'Start', href: '/' },
  { label: 'Dienstleistungen', href: '/service' },
  { label: 'Erfahrungen', href: '/experience' },
  { label: 'Kontakt', href: '/contact' },
]

export default function Header() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent className="hidden md:flex gap-8">
        {menuItems.map((item) => (
          <NavbarItem>
            <LinkUI as={Link} href={item.href} color="foreground" underline="hover">
              {item.label}
            </LinkUI>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex gap-8">
        <NavbarItem>
          <FaFacebook className="text-3xl hover:text-primary transition cursor-pointer" />
        </NavbarItem>
        <NavbarItem>
          <FaInstagram className="text-3xl hover:text-primary transition cursor-pointer" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
