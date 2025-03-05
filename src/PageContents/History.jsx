import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const History = () => {
    const { user } = useContext(AuthContext)
    const { data: historyCollection } = useQuery({
        queryKey: ["history"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/text/${user?.email}`)
            return data;
        }
    })
    return (
        <div className='w-full'>
            <h2 className='text-4xl font-bold text-center mt-10'>My Chat History</h2>
            <p className='text-xl text-center my-5'>Access your complete chat history across diverse topics and interactions with different models or characters.</p>
            <div>
                {
                    historyCollection?.map((history) => <div>
                        <div className="chat chat-end">
                            <div className="chat-bubble">{history.question}</div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-accent">
                                {history.answer}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default History;