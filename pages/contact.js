import Layout from '@/components/Layout'

export default function ContactPage() {
  return (
    <Layout title='About DevSpace'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>Contact</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>Contact Me</h3>
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Contact Me                 </h1>
                    <form action="/message-sent"class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "name="contact" netlify>
                    <input type="hidden" name="form-name" value="contact" />

  <p>
    <label class="block text-gray-700 text-sm font-bold mb-2">Name <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" /></label>
  </p>
  <p>
    <label class="block text-gray-700 text-sm font-bold mb-2">Email <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" /></label>
  </p>
  <p>
    <label class="block" >Message   <textarea name="message"class="form-textarea mt-1 block w-full" rows="3" placeholder="Enter your message here"></textarea>
 </label>
  </p>
  <p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button>
  </p>
</form>
            </div>
        </div>

        <p>
          <span className='font-bold'>Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}
