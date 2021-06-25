import React, { FC, ChangeEvent, DragEvent } from 'react';

export const EventComponent: FC = () => {
    
    // Only applies to inputs, radios, fields
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    };

    // Draggable elements
    const onDragStart = (e: DragEvent<HTMLDivElement>) => {
        console.log(e);
    };

    return (
        <div>
            <input onChange={onChange}/>
            <div draggable onDragStart={onDragStart}>Drag me!</div>
        </div>
    )
};