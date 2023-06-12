import { useEffect } from 'react';
import { Message } from './Message';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { 
        formState, 
        onInputChange, 
        username, 
        email, 
        password,
        onResetForm
    } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

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
            <h1>Formulario con Custom Hook</h1>
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

            <input 
                type="text"
                className="form-control mt-2" 
                placeholder="password"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />
            {
                (username === 'ale2') &&  <Message/>
            }

            <button onClick={ onResetForm } className="btn btn-primary mt-2"> Borrar </button>
        </>
    )
}
