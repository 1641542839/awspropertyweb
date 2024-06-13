import React, { useRef } from 'react';
import { housesData } from '../../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiCar } from "react-icons/bi";
import { Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { useState } from "react";


const PropertyDetails = () => {
    const form = useRef();
    //get the house id 
    const { id } = useParams();
    console.log(id);
    const house = housesData.find((house) => {
        return house.id === parseInt(id);
    })

    const { errors, handleSubmit, getValues, register, formState } = useForm({
        mode: "all"
    });

    const [data, setData] = useState("");

    const sendEmail = async (e) => {
        // e.preventDefault();
        // console.log(`e: `, e)
        await emailjs.sendForm('service_sr33b5a', 'template_ymhi3tq', form.current, 'nNUTsZV5m40-yCG-e').then(
            () => {
                console.log('Success!'),
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
            }
        )
        window.location.reload();
    }

    return <section>
        <div className="pt-28 container mx-auto min-h-[800px] mb-14">
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                <div>
                    <h2 className="text-2xl font-semibold">{house.name}</h2>
                    <h3 className="text-lg mb-4">{house.address}</h3>
                </div>
                <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
                    <div className="bg-green-500 text-white px-3 rounded-full ">{house.type}</div>
                    <div className="bg-sky-900 text-white px-3 rounded-full">{house.country}</div>
                </div>
                <div className="text-3xl font-semibold text-sky-900">{house.price}</div>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-col mt-4">
                <div className="max-w-[768px]">
                    {/* <div>
                        <img src={house.imageLg} alt='' />
                    </div> */}
                    <Carousel className="h-auto mb-0">
                        {house.imageLgs.map((image, i) => (
                            <img key={i}
                                src={image}
                                alt=""
                                className="object-cover hover:scale-105 transition-all duration-300 mb-4"
                            />
                        ))}
                    </Carousel>
                </div>
                <div className="flex gap-x-6 text-sky-900 mb-6 self-center">
                    <div className="flex gap-x-2 item-center">
                        <BiBed className="text-2xl" />
                        <div>{house.bedrooms}</div>
                    </div>
                    <div className="flex gap-x-2 item-center">
                        <BiBath className="text-2xl" />
                        <div>{house.bathrooms}</div>
                    </div>
                    <div className="flex gap-x-2 item-center">
                        <BiCar className="text-2xl" />
                        <div>{house.carPark}</div>
                    </div>
                </div>
                <div>{house.description}</div>
                <div className="flex-grow mt-5" style={{ width: '500px' }}>
                    <h1 className="flex items-center text-sky-900 text-3xl mb-2">ENQUIRE ABOUT THIS PROPERTY</h1>
                    <form ref={form} className="w-full flex flex-col gap-6" onSubmit={handleSubmit(sendEmail)}>

                        <div className="flex flex-col gap-6 sm:flexrow w-full">
                            <input
                                typ="text"
                                placeholder="PropertyID"
                                name="propertyId"
                                className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100 hidden "
                                defaultValue={house.id}
                            />
                            <input
                                typ="text"
                                placeholder="PropertyName"
                                name="propertyName"
                                className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100 hidden"
                                defaultValue={house.name}
                            />
                            <input
                                typ="text"
                                placeholder="Name"
                                name="name"
                                {...register("name", { required: true })}
                                className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100"
                            />
                            {formState?.errors?.name && <span className="bg-red-500 text-white pt-0.5 pb-0.5">Name is required</span>}

                            <input
                                typ="phone"
                                placeholder="Phone"
                                name="phone"
                                {...register("phone", { required: true })}
                                className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100"
                            />
                            {formState?.errors?.phone && <span className="bg-red-500 text-white pt-0.5 pb-0.5">Phone is required</span>}
                            <input
                                typ="email"
                                placeholder="Email"
                                name="email_from"
                                {...register("email_from", { required: true })}
                                className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100"
                            />
                            {formState?.errors?.email_from && <span className="bg-red-500 text-white pt-0.5 pb-0.5">Email is required</span>}
                            <textarea
                                placeholder="Message"
                                name="message"
                                {...register("message", { required: true })}
                                className="flex-1 h-10 text-primary-100 w-full py-1 outline-none 
                                    bg-transparent border-b border-primary-100"
                            />
                            {formState?.errors?.message && <span className="bg-red-500 text-white pt-0.5 pb-0.5">Please leave your message</span>}
                            <input className="bg-accent-500 px-5 py-2 text-primary-500 font-semibold
                                hover:bg-accent-300 cursor-pointer transition-all duration-200" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}



export default PropertyDetails;