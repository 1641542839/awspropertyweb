import React from 'react';
import Container from './Container';
import Button from './Button';

const About = () => {
    return <Container id='about' classes="py-32 grid grid-cols-1 gap-20 md:grid-cols-2 text-center md:text-left">
        <div id='about' className="text-5xl leading-[60px] font-semibold text-secondary-500">
            We build quality real estate projects
            <span className="text-accent-500"> Since 1999'</span>
        </div>
        <div className="">
            <p className="text-lg text-secondary-100">
                our purpose is to empower people by making property simple,
                efficient and stress free. Whether you’re just beginning your
                property journey or have had years of experience,
                realestate.com.au is the number one place for people to come
                together to explore, research and share their passion for Australian property.
            </p>
        </div>
        <Button classes="mt-10">About Us</Button>
    </Container>
}

export default About;