import React, { useContext } from 'react';
import Hello from '../Components/Hello';
import InputText from '../Components/inputText';
import { AuthContext } from '../Provider/AuthProvider';

const PageContents = () => {
    const { isText } = useContext(AuthContext)
    return (
        <div className='w-full'>
            {
                !isText && <Hello></Hello>

            }
            <InputText></InputText>
        </div>
    );
};

export default PageContents;