import React from 'react';

const Container = ({children, classes=""}) => {
    return (
        <div className={`max-w-screen-xl px-10 mx-auto w-full h-full ${classes}`}>
            {children}
        </div>
    )
}

export default Container; 