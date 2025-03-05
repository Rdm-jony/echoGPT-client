import React, { useContext } from 'react';
import logo from '../assets/logo.svg'
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';

const LogInModal = () => {
    const { signInWithGoogle } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        signInWithGoogle().then((result) => {
            console.log(result?.user)
            document.getElementById('my_modal_3').close();
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='flex items-center justify-center gap-2'>
                        <img className='w-10 h-10' src={logo} alt="" />
                        <h3 className="font-bold text-lg">EchoGPT</h3>
                    </div>
                    <button onClick={handleGoogleLogin} className='flex items-center btn btn-accent text-white w-full my-5'><div className='w-5 h-5 bg-white rounded-full flex justify-center items-center'><FcGoogle /></div> Sign in with Google</button>
                </div>
            </dialog>
        </div>
    );
};

export default LogInModal;