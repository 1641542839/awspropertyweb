import React from "react";
import Container from "./Container";
import { FEATURED, housesData } from "../../data";
import Button from "./Button";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
import { Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
//const Carousel = require("@material-tailwind/react/utils/withMT");
const Featured = () => {
    return (
        <div className="py-32 w-full mx-auto bg-background-1">
            {/* <Container>
                <div className="text-5xl font-semibold">Exclusive Listing</div>
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {FEATURED.map((pr, i) => (
                        <div
                            key={i}
                            className="h-[240px] relative group overflow-hidden shadow-md rounded-md"
                        >
                            <img 
                                src={pr.link} 
                                alt=""
                                className="w-full h-full absolute object-cover group-hover:scale-105 transition-all duration-300 brightness-50" 
                            />
                            <div className="flex h-full justify-between flex-col relative p-4">
                                <div className="bg-accent-500 text-primary-500 text-sm w-fit uppercase tracking-widest px-4 py-2">{pr.tag}</div>
                                <div className="flex flex-col gap-2 text-primary-500">
                                    <span className="text-xl font-semibold">{pr.text}</span>
                                    <hr />
                                    <span className="text-xl">{pr.price}</span>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <Button classes="mt-10">Browse More Property</Button>
            </Container> */}
            {/* <Container> */}
            <div className="px-10 mx-auto w-full h-full">
                <div className="text-5xl font-semibold">Property Listing</div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-20 gap-4 lg:gap-14 ">
                    {housesData.map((pr, i) => (
                        // <Link to={`/property/${pr.id}`} key={i}>
                        <div key={i} className=" bg-white shadow rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl tansition p-5">
                            <Carousel className="h-auto mb-0">
                                {pr.images.map((image, i) => (
                                    <img key={i}
                                        src={image}
                                        alt=""
                                        className="object-cover hover:scale-105 transition-all duration-300 mb-4"
                                    />
                                ))}

                            </Carousel>
                            <Link to={`/property/${pr.id}`} >
                                <div className="mb-4 flex gap-x-2 text-sm">
                                    <div className="bg-green-500 rounded-full text-white px-3">{pr.type}</div>
                                    <div className="bg-sky-900 rounded-full text-white px-3">{pr.country}</div>
                                </div>
                                <div className="text-lg font-semibold max-w-[260px]">{pr.address}</div>
                                <div className="flex gap-x-4 my-4">
                                    <div className="flex items-center text-gray-600 gap-1">
                                        <div className="text-[20px]">
                                            <BiBed />
                                        </div>
                                        <div>{pr.bedrooms}</div>
                                    </div>
                                    <div className="flex items-center text-gray-600 gap-1">
                                        <div className="text-[20px]">
                                            <BiBath />
                                        </div>
                                        <div>{pr.bathrooms}</div>
                                    </div>
                                    <div className="flex items-center text-gray-600 gap-1">
                                        <div className="text-[20px]">
                                            <BiCar />
                                        </div>
                                        <div>{pr.carPark}</div>
                                    </div>
                                </div>
                                <div className="text-lg font-semibold text-sky-900 mb-4">{pr.price}</div>
                            </Link>
                        </div>


                        // </Link>
                    ))}
                </div>
            </div>
            {/* </Container> */}
        </div>
    )
}

export default Featured;