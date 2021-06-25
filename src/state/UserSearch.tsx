import React, { FC, useState } from 'react';

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
    const [ name, setName ] = useState('');
    const [ user, setUser ] = useState<User | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    return (
        <div>
            User Search
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>
            {user &&
                <div>
                    {user.name}
                    {user.age}
                </div>
            }
        </div>
    );
}