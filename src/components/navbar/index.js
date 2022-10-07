import React from 'react'

function Navbar() {
    return (
        <>
            <nav className='navbar'>

                <ul className='flex justify-around py-5 bg-slate-600' >
                    <li className='text-white text-lg cursor-pointer'>Home</li>
                    <li className='text-white text-lg cursor-pointer'>Features</li>
                    <li className='text-white text-lg cursor-pointer'>Download</li>
                    <li className='text-white text-lg cursor-pointer'>Careers</li>
                    <li className='text-white text-lg cursor-pointer'>Pricing</li>
                </ul>
            </nav>
        </>

    )
}

export default Navbar