import React from "react";

const SendEmailComponent = ({sendEmail}) => {
    return (
        <div className="flex-grow">
            <form className="w-full flex flex-col gap-6" onSubmit={()=>sendEmail()}>
                <div className="flex flex-col gap-6 sm:flexrow w-full">
                    <input
                        typ="text"
                        placeholder="Name"
                        name="name"
                        className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100"
                    />
                    <input
                        typ="phone"
                        placeholder="Phone"
                        name="phone"
                        className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100"
                    />
                    <input
                        typ="email"
                        placeholder="Email"
                        name="email_from"
                        className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100"
                    />
                    <textarea
                        placeholder="Message"
                        name="message"
                        className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100"
                    />
                    {/* <Button>Send</Button> */}
                    <input className="bg-accent-500 px-5 py-2 text-primary-500 font-semibold
                    hover:bg-accent-300 cursor-pointer transition-all duration-200" type="submit" value="Send" />
                </div>
            </form>
        </div>
    )

}

export default SendEmailComponent;