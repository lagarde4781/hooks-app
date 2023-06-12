import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'ale',
        email: 'alejandro@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect( () => {
        // console.log('Called!')
    }, []);

    useEffect( () => {
        // console.log('formState changed')
    }, [formState]);

    useEffect( () => {
        // console.log('email changed')
    }, [email]);

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control" 
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="text"
                className="form-control mt-2" 
                placeholder="example@gamil.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            {
                (username === 'ale2') &&  <Message/>
            }
           
        </>
    )
}
