import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
            {books.map((book) => {
                return (
                    <li key={book.id} style={{background: theme.ui}}>
                        {book.title}
                    </li>
                )
            })}
                <li style={{ background: theme.ui}}>Bible</li>
                <li style={{ background: theme.ui}}>Great Controversy</li>
                <li style={{ background: theme.ui}}>Desire of Ages</li>
            </ul>
        </div>
     );
}
 
export default BookList;