import Background from '../assets/images/crowded_neon.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
      <div className='flex place-items-center h-screen'>
        <h1 className='p-7 font-bold bg-red-600 bg-opacity-80 text-white rounded-xl'> Welcome to your garage </h1>
      </div>
    </div>
  )
}

export default Home
