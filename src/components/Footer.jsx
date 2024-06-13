import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillWechat } from "react-icons/ai";
import { NAV_LINKS } from "../../data";
import Button from "./Button";
import emailjs from '@emailjs/browser';
import SendEmailComponent from "./SendEmail";
const Footer = () => {

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log(`e: `, e)
        await emailjs.sendForm('service_sr33b5a', 'template_ymhi3tq', e.target, 'nNUTsZV5m40-yCG-e')
        window.location.reload();
    }


    return (
        <div className="pt-28 pb-10 bg-secondary-500">
            <Container>
                <div id="We" className="flex flex-col md:flex-row gap-16">
                    <div className="flex w-full flex-col justify-center items-center mx-auto
                    md:items-start sm:max-w-[400px]">
                        <Logo />
                        <div className="text-primary-100 mt-6 text-center md:text-start w-full">
                            Lorem ipsm dolor sit amet consectetur, adipisicing elit.
                            Assumenda, iusto!
                        </div>
                        <div className="flex gap-6 text-accent-500 mt-6">
                            <a href="#">
                                <AiFillFacebook size={30} />
                            </a>
                            <a href="#">
                                <AiFillInstagram size={30} />
                            </a>
                            <a href="#">
                                <AiFillLinkedin size={30} />
                            </a>
                        </div>
                        <ul className="flex items-center gap-4 mt-6">
                            {NAV_LINKS.map((link, index) => (
                                <li
                                    key={index}
                                    className="capitalize hover:text-accent-500 
                                    text-primary-500">
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <SendEmailComponent sendEmail = {sendEmail}/> */}
                    <div className="flex-grow">
                        <form className="w-full flex flex-col gap-6" onSubmit={sendEmail}>

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
                                <input className="bg-accent-500 px-5 py-2 text-primary-500 font-semibold
                                hover:bg-accent-300 cursor-pointer transition-all duration-200" type="submit" value="Send" />
                            </div>
                        </form>
                    </div> 
                </div>
                <div className="w-full text-sm text-center text-primary-100 mt-12">
                    &copy; All Rights Reserved
                </div>
            </Container>
        </div>
    )
}

export default Footer;