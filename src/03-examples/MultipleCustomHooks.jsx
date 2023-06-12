import React from 'react';
import { useFetch, useCounter } from '../hooks';
import { Quote, LoadingQuote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uJlcpS3g7Ba7H86Wg1I1dKNbi4f9uz8z&q=${counter}&limit=1`;
    const { data, isLoading, hasError } = useFetch(url);
    const { title, username } = !!data && data[0];

    return (
        <>
            <h3>Gifs</h3>
            <hr />
            
            {
                isLoading
                    ? <LoadingQuote></LoadingQuote>
                    : <Quote title={ title } username={ username }></Quote>
            }
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
                    Next Image
            </button>
        </>
    )
}
