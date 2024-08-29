import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault()

        setName("")
        setEmail("")
        setMessage("")

    emailjs.sendForm('service_1zwtb1o', 'template_2trnvf8', form.current, 'w8ZY_7yR9WdT_-Zu5')
      .then((result) => {
        alert("Message Sent!")
      }, (error) => {
       alert("Error - Message not sent!")
      });
  };
  return (
    <div id='contact' className='mt-20 px-10'>
        <h1 className=' text-3xl head'>Contact</h1>
        <hr />
        <form ref={form} onSubmit={sendEmail} >
        <div className='flex flex-col gap-5'>
        
            <div className=' mt-10'>
                
                <label htmlFor="name" className=' font-bold'>
                    Name
                </label>
                <input type="text"
                        id='name'
                        onChange={e => setName(e.target.value)}
                        value={name}
                        name='user_name'
                        className=' w-full h-10 bg-gray-100 rounded border-gray-900 py-1 px-3 focus:border-indigo-500' />
            </div>
            <div>
                <label htmlFor="email" className=' font-bold'>
                    Email
                </label>
                <input type="email"
                        id='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        name='user_email'
                        required
                        className=' w-full h-10 bg-gray-100 rounded border-gray-900 py-1 px-3 focus:border-indigo-500' />
            </div>
            <div>
                <label htmlFor="message" className=' font-bold'>
                    Message
                </label>
                <textarea name="message" 
                            id="message"
                            required
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                            className=' w-full h-32 bg-gray-100 rounded border-gray-900 py-1 px-3 focus:border-indigo-500'></textarea>
                
            </div>
        </div>
        <div className="p-2 w-full">
                <button 
                className="flex head mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg">
                  Send
                </button>
        </div>
        </form>
        
    </div>
  )
}

export default Contact