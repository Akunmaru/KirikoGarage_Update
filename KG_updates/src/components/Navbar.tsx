import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className='flex items-center justify-between flex-wrap bg-red-600 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'> Kiriko Garage </Link>
            </div>
            <div className='block'>
                    <button onClick={dropDown}
                    className='flex items-center px-3 py-2 text-black border rounded 
                    border-black hover:text-white hover:border-white'>
                        <i className="fa-solid fa-warehouse"></i>
                    </button>
            </div>
            { isVisible ? ( 
                <div className='w-full block flex-grow items-center'>
                    <div className='text-sm lg:fex-grow'>
                        <Button className='p-3 m-5 bg-red-200 justify-center'>
                            <div>
                                <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-black hover:text-white mr-4'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-red-200 justify-center'>
                            <div>
                                <Link to='/about' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-black hover:text-white mr-4'>
                                    About
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-red-200 justify-center'>
                            <div>
                                <Link to='/garage' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-black hover:text-white mr-4'>
                                    Garage
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-red-200 justify-center'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-black hover:text-white mr-4'>
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                    </div>
                </div>
                ) : (
                <></>
            )}
        </nav>
  )
}

export default Navbar
