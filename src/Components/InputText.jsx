import React from 'react';
import { BsSend } from 'react-icons/bs';

const InputText = () => {
    return (
        <div className='relative'>
            <textarea className="textarea textarea-bordered w-full" placeholder="Ask Question..."></textarea>
            <span className='absolute top-1/2 translate-y-[-50%] right-5 cursor-pointer'><BsSend></BsSend></span>
        </div>
    );
};

export default InputText;