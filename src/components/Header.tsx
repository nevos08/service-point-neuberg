'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import LogoSrc from '@/images/logo.jpg'
import Image from 'next/image'

export default function Header() {
  return (
    <Navbar height="120px" shouldHideOnScroll className="py-2">
      <NavbarContent></NavbarContent>
      <NavbarBrand className="flex justify-center">
        <Image src={LogoSrc} alt="Logo" width={120} />
      </NavbarBrand>
      <NavbarContent></NavbarContent>
    </Navbar>
  )
}
