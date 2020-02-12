import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'love', id: 1},
        {title: 'Hosana', id: 2},
        {title: 'God Loves the world', id: 3},
        {title: 'Joy to the world', id: 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;