import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ title, username} ) => {

    const pRef = useRef();

    const [ boxSize, setBoxSize ] = useState({
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, [title]);

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={ pRef } className="mb-1">{ title }</p>
                <p className="blockquote-footer">{ username }</p>
            </blockquote>

            <code> { JSON.stringify(boxSize) }</code>
        </>
    )
}
