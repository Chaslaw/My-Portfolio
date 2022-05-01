import { useState } from "react";
import axios from "axios";

const UseFetch = () => {

    const [author, setAuthor] = useState('')
    const [quote, setQuote] = useState('Fetch your quote');

    const callData = async () => {
        const response = await axios.get('https://programming-quotes-api.herokuapp.com/quotes')
        const newData = response.data;
        const randomNumber = Math.floor(Math.random() * (newData.length));
        const author = newData[randomNumber].author;
        const quote = newData[randomNumber].en;

        setAuthor(author)
        setQuote(quote)
    }

    return (
        <div className="quote-container">

            <div className="quote">
                <h3>{author}</h3>
                <h2>{quote}</h2>
                
            </div>
            <button className="quote-btn btn"
                    onClick={callData}>CLICK FOR YOUR QUOTE OF THE DAY</button>
        </div>


    );
}

export default UseFetch;