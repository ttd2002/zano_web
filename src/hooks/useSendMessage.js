import React, { useState } from "react";

import toast from "react-hot-toast";
import { useConversation } from "../zustand/useConversation";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessage = async (message) => {
    setLoading(true);
    try {
        const token = localStorage.getItem("logintoken");
      const res = await fetch(
        `http://192.168.137.211:3000/mes/send/${selectedConversation._id}`, 
//         `http://localhost:3000/mes/send/${selectedConversation._id}`, 
        
        {
          method: "POST",
          headers: {
             Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",   
          },
          body: JSON.stringify({message})
        })
        const data = await res.json()
        console.log(selectedConversation);
        // console.log(data[messages]);
        if(data.error) throw new Error(data.error)
        setMessages([...messages, data])
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {sendMessage, loading}
};

export default useSendMessage;
