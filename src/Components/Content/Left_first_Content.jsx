import React, { useState } from 'react';

const Left_first_Content = () => {
    const [tabs, setTabs] = useState(1);

    const handleTab = (e) => {
        setTabs(e);
    }

    return (
        <div className='relative pt-3'>
            <div className='absolute top-4 left-4'>
                <img src="/icons/Vector.png" alt="" />
            </div>
            <div role="tablist" className="tabs tabBox-content mx-auto">
                <a onClick={() => handleTab(1)} role="tab" className={tabs === 1 ? "tab text-white tab-active" : "tab text-white"}>About Me</a>
                <a onClick={() => handleTab(2)} role="tab" className={tabs === 2 ? "tab text-white tab-active" : "tab text-white"}>Experiences</a>
                <a onClick={() => handleTab(3)} role="tab" className={tabs === 3 ? "tab text-white tab-active" : "tab text-white"}>Recommended</a>
            </div>
            <div className='w-[611px] h-[175px] mx-auto mt-8 text-[#969696] text-xl text-justify'>
                <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
                <p className='mt-6'>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
            </div>
        </div>
    );
};

export default Left_first_Content;