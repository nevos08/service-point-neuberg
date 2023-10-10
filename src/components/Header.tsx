'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import LogoSrc from '@/images/logo.jpg'
import Image from 'next/image'

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image src={LogoSrc} alt="Logo" width={120} />
      </NavbarBrand>
    </Navbar>
  )
}
