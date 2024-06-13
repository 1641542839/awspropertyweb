import React from "react";
import Container from "./Container";
import { TESTIMONIALS } from "../../data";
import Button from "./Button";
import Image from "../assets/banner.jpg"

const Testimonials = () => {
    return (
        <div className="bg-background-1 py-32 overflow-hidden">
            <Container>
                <div className="w-full flex flex-col lg:flex-row gap-12">
                    <div className="w-mx">
                        <div className="text-5xl text-secondary-500 font-semibold flex flex-col">
                            <div className="whitespace-nowrap">Dont't take</div>
                            <div className="whitespace-nowrap">Our Word.</div>
                        </div>
                        <div className="text-secondary-100 mt-4 text-xl">Take theirs</div>
                    </div>
                    <div className="flex flex-col w-full gap-10">
                    {
                        TESTIMONIALS.map((testimonials,i)=>(
                            <div key={i} className={`text-secondary-100 p-6 md:w-[90%] shadow-md ${i != 1 && "self-end"}`}>
                                <div className="mx-auto">{testimonials.text}</div>
                                <div className={`flex gap-2 items-center mt-6 ${i == 1 && "justify-end"}`}>
                                    <div className="w-10 h-10 rounded-full">
                                        <img src={testimonials.src} alt="" className="w-full h-full rounded-full object-cover"/>
                                    </div>
                                    <div className="">
                                        <div className="text-base text-left font-semibold text-secondary-500">{testimonials.name}</div>
                                        <div className="text-sm text-left text-secondary-500">{testimonials.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonials;