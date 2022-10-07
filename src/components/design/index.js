import React from 'react'
function Design() {
    return (
        <>
            <div className='design'>
                <div className='original relative w-full'>
                    <div className='absolute z-20 w-full py-8'>
                        <p className='text-3xl font-bold text-center '>Building The Future</p>
                    </div>
                    <img className='w-full h-72 opacity-40' src={require("../../Assets/original.jpg")} alt="" />
                </div>
                <div className='workCulture lg:flex items-center justify-center lg:space-x-20  py-5'>
                    <div className=''>

                        <img className='rouded-md h-64' src={require("../../Assets/work.png")} alt="" />
                    </div>
                    <div className='w-96'>
                        <p className='text-7xl text-gray-900 text-center font-semibold tracking-wide leading-[96px]'>Features <span className='text-orange-500'>Ought</span> to Partake</p>
                    </div>
                </div>
                <div className=' lg:flex items-center justify-center lg:space-x-10 px-5'>
                    <div className='img1'>
                        <img className='h-64 object-contain rounded-md' src={require("../../Assets/img1.jpg")} alt="" />
                    </div>
                    <div className='earth rounded-md'>
                        <img className='h-64 object-contain rounded-md ' src={require("../../Assets/earth.png")} alt="" />
                    </div>
                </div>
                <div className='nature relative items-center flex justify-center py-5 w-full'>

                    <div className='w-full'>
                        <img className='h-[600px] opacity-70 object-fill w-full lg:w-[76%] rounded-md mx-auto' src={require("../../Assets/nature.jpg")} alt="" />
                    </div>
                    <div className='containerDiv absolute lg:p-10 py-8 lg:h-80 h-72 rounded-md z-20 mx-auto w-[80%] lg:w-[50%]'>
                        <p className='lg:text-3xl text-xl  text-center font-semibold'>
                            Every inspiration from nature
                        </p>
                        <p className='text-center py-4'>
                            Get Started with our Services with 30 Days trial.
                        </p>
                        <div className='w-full flex justify-center py-10'>

                            <button className='bg-gray-900 rounded-md text-white p-1 w-44 '>
                                Try it now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Design