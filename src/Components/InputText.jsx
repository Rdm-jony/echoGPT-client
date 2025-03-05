import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import { AuthContext } from '../Provider/AuthProvider';
import { Typewriter } from 'react-simple-typewriter'
import LogInModal from '../Modal/LogInModal';


const InputText = () => {
    const { setIsText, isText, user } = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [searchText, setSearchText] = useState("");
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [conversations])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = searchText.trim();

        if (!text) return;

        try {
            const { data } = await axios.post("http://localhost:5000/text", { searchText: text,email:user?.email });

            setConversations((prevConversations) => [
                ...prevConversations,
                { question: text, answer: data.content }
            ]);

            setIsText(true);
            setSearchText("");
        } catch (error) {
            console.error("Error:", error);
            setConversations((prevConversations) => [
                ...prevConversations,
                { question: text, answer: "Sorry, something went wrong." }
            ]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div style={{ height: isText && 'calc(100vh - 100px)' }} className={`flex flex-col`}>
            {/* Render conversations */}
            <div className="chat-container flex-grow overflow-y-auto">
                {conversations.map((conversation, index) => (
                    <div key={index}>
                        <div className="chat chat-end">
                            <div className="chat-bubble">{conversation.question}</div>
                        </div>
                        <div className="mt-2">
                            <div className="text-justify">
                                <Typewriter
                                    typeSpeed={10}
                                    words={[conversation?.answer]}></Typewriter>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />

            </div>

            <form className='relative w-full mt-10 ' onSubmit={handleSubmit}>
                <textarea
                    onClick={() => {
                        !user && document.getElementById('my_modal_3').showModal()
                    }}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    name='searchText'
                    className={`textarea textarea-bordered w-full`}
                    placeholder="Ask Question..."
                ></textarea>
                <button
                    type="submit"
                    className='absolute top-1/2 translate-y-[-50%] right-5 cursor-pointer'
                >
                    <BsSend />
                </button>
            </form>
            <LogInModal></LogInModal>
        </div>
    );
};

export default InputText;
