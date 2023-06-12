import React from 'react';
// import { memo } from 'react'; // Se puede importar directamente

export const Small = React.memo(({ value }) => {

    console.log('repainted')
    return (
        <small> { value }</small>
    )
})
