import React from 'react';

const Lefr_Second_Content = () => {
    return (
        <div className='px-[50px] pt-5 relative'>
            <div className='absolute top-6 left-3'>
                <img src="/icons/Vector.png" alt="" />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center bg2'>
                    <h1 className='text-xl text-white'>Gallery</h1>
                </div>
                <div className='flex justify-between items-center gap-14'>
                    <div>
                        <button className='btn-content2 text-white text-xs'>+ ADD IMAGE</button>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='btn-Content flex justify-center items-center rounded-full'><img className='w-4 h-4' src="/icons/Group 28.png" alt="" /></button>
                        <button className='btn-Content flex justify-center items-center rounded-full'><img className='w-4 h-4' src="/icons/Group 28 (1).png" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 justify-items-center items-center gap-5 mt-8'>
                <div className='w-[190px] h-[179px]'>
                    <img className='w-full h-full rounded-3xl' src="/images/Rectangle 5160.jpg" alt="" />
                </div>
                <div className='w-[190px] h-[179px]'>
                    <img className='w-full h-full rounded-3xl' src="/images/Rectangle 5160.jpg" alt="" />
                </div>
                <div className='w-[190px] h-[179px]'>
                    <img className='w-full h-full rounded-3xl' src="/images/Rectangle 5160.jpg" alt="" />
                </div>
            </div>
            <div className='absolute centerP'>
                <img src="/icons/Frame 1000002250.png" alt="" />
            </div>
        </div>
    );
};

export default Lefr_Second_Content;