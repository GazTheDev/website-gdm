import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'

export default function HomePage({ posts }) {
  return (
    <Layout>
      <section class="text-blueGray-700 ">
            <div class="container flex flex-col items-center px-5 py-8 mx-auto">
              <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">A new dawn awaits...</h2>
                <h1 class="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font"> Welcome to my new blog. </h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2">The blog of Gareth Davies... </p>
              </div>
            </div>
          </section>
        
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Posts</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
          All Posts
        </a>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  }
}
