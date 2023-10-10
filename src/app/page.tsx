import Image from 'next/image'
import LogoSrc from '@/images/logo.jpg'

export default function Home() {
  return (
    <>
      <div className="h-[600px] bg-hero bg-center bg-cover bg-no-repeat">
        <div className="w-full h-full bg-black/10">
          <div className="h-full container mx-auto px-16 flex justify-between items-center">
            <Image src={LogoSrc} alt="Logo" width="400" />
            <div className="p-4 bg-black/50 backdrop-blur-sm max-w-xl rounded-md">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, nemo accusamus ducimus, pariatur
                repellat enim molestias, doloribus deleniti repudiandae illum eos. Nisi illum tenetur voluptatibus ut
                voluptates, molestias error rerum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
