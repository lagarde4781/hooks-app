import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState(10);

    const incrementFather = useCallback(
        (value) => { // Literalemte hace referencia  la función que increment() de la línea 25
            setCounter( (counterValue) => counterValue + value );
        },
        [],
    )
    

    // const incrementFather = () => {
    //     setCounter( counter + 1)
    // };

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather }></ShowIncrement>
        </>
    )
}
