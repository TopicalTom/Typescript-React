import React, { FC } from 'react';

interface ChildProps {
    color: string;
    onClick: () => void
};

// FC allows for children props to inherently be passed through
export const Child: FC<ChildProps> = ({ color, onClick }) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
;};