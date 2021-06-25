import React, { FC, useState, useRef, useEffect } from 'react';

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 21 },
    { name: 'Michael', age: 18 }
];

interface User {
    name: string;
    age: number;
}

export const UserSearch: FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [ name, setName ] = useState('');
    const [ user, setUser ] = useState<User | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    useEffect(() => {
        if (!inputRef.current) {
            return;
        };
        inputRef.current.focus();
    }, []);

    return (
        <div>
            User Search
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>
            {user &&
                <div>
                    {user.name}
                    {user.age}
                </div>
            }
        </div>
    );
};