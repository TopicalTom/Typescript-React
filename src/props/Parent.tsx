import React from 'react';
import { Child } from './Child';

export const Parent = () => {
    return <Child color='red' onClick={() => console.log('Clicked')} />
};