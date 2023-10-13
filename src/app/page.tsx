import Image from 'next/image'
import LogoSrc from '@/images/logo.png'
import { oswald } from '@/fonts'
import { Button } from '@nextui-org/button'

export default function Home() {
  return (
    <>
      <div className="relative h-[700px] bg-hero bg-center bg-cover bg-no-repeat">
        <div className="w-full h-full bg-black/10">
          <div className="h-full container mx-auto px-24 flex justify-between items-center animate-fadeIn">
            {/* <div className="p-4 bg-black/20 border border-neutral-600 rounded-sm"> */}
            <Image src={LogoSrc} alt="Logo" width="450" />
            {/* </div> */}
          </div>
        </div>

        <div className="shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto flex justify-between gap-16 py-8">
        <div className="max-w-[45%] shrink">
          <h1 className={`${oswald.className} text-3xl mb-2`}>Ihre Werkstatt in Neuberg und Umgebung</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae voluptatum facere amet soluta id quasi
            expedita animi, eligendi iure rem! Libero exercitationem ducimus obcaecati cupiditate cum totam quam
            doloribus veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo atque,
            reiciendis est odit voluptate blanditiis commodi, at minus ullam ex alias, perferendis minima dolore saepe
            eius deleniti impedit quia.
          </p>

          <div className="flex gap-4 mt-4">
            <Button radius="sm" variant="solid" color="primary" size="lg">
              Dienstleistungen
            </Button>
            <Button radius="sm" variant="bordered" color="primary" size="lg">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>

        <div className="grow bg-image01 bg-center bg-cover bg-no-repeat rounded-md shrink-0" />
      </div>

      <div className="container mx-auto flex gap-8">
        <div className="w-[40%]"></div>
        <div className="grow">
          <h1 className={`${oswald.className} text-3xl`}>Das sagen unsere Kunden</h1>
        </div>
      </div>
    </>
  )
}
