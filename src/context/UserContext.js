import React from 'react';

export const UserContext = React.createContext();

const UserProvider = (props) => {
    const [user, setUser] = React.useState('perro');

    return <UserContext.Provider value={{user, setUser}}>{props.children}</UserContext.Provider>
}

export default UserProvider;
