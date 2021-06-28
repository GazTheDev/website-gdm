import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout title='About DevSpace'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>About Me...</h3>

        <p className='mb-3'>Hello, my name is Gareth Davies. I'm a web developer and programmer from the UK. 
        I will attempt to update this section once I have thought about what I want to write.
        </p>

        <p>
          <span className='font-bold'>Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}
