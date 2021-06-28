import Layout from '@/components/Layout'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <Layout title='About DevSpace'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>About Me...</h3>
        <div class="container items-center px-5 py-12 lg:px-20">
            <div class="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
              <div class="flex flex-col items-start py-2 rounded-lg lg:flex-row">
                <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
                  <img src="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/92202219_4178623498830118_4525924725641183232_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=xMyFInwKmycAX_DXI47&_nc_ht=scontent-lcy1-1.xx&oh=12263918464b79933a01dcbfb4725a63&oe=60DFC9A6" alt="placeholder" class="rounded-lg" />
                </div>
                <div class="flex flex-col w-full text-blueGray-500 lg:ml-4">
                  <h2 class="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"> About Me</h2>
                  <p class="mb-3 text-base leading-relaxed text-blueGray-500"> Hello, my name is Gareth Davies. I'm a 22 year old web developer and programmer based in the united kingdom. I create websites using several different techniques and specs. </p>
                </div>
              </div>
            </div>
          </div>
       
        <p>
          <span className='font-bold'>Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}
