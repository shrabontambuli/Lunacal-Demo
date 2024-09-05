import React from 'react';
import Left_first_Content from '../Content/Left_first_Content';
import Lefr_Second_Content from '../Content/Lefr_Second_Content';

const Home = () => {
    return (
        <div className='grid grid-cols-2 justify-items-center items-start'>
            <div className='bg w-[836px] h-[689px]'></div>
            <div>
                <div className='bgL mx-auto'>
                    <Left_first_Content/>
                </div>
                <div className='hr my-6 mx-auto'></div>
                <div className='bgL mx-auto'>
                    <Lefr_Second_Content/>
                </div>
                <div className='hr mt-6 mx-auto'></div>
            </div>
        </div>
    );
};

export default Home;