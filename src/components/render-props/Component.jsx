import React from 'react';

export const Component = ({children}) => {
    const text = "Hello world!zdfsdfasdfasdfasdfas";
    return (
        <div>
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <h1>{text}</h1>
            {React.cloneElement(children, {text: text})}
        </div>
    );
}