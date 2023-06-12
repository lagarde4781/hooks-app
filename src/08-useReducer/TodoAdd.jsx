import { useEffect, useRef, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';

export const TodoAdd = ({ onNewTodo }) => {

    const navigate = useNavigate();
    const [dataSent, setDataSent] = useState(false)

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if (description.length <+ 1) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo); 
        onResetForm();
        setDataSent(true);
    }

    useEffect(() => {
        if (dataSent) {
            navigate('/dataSent');
        }
    }, [dataSent])
    


    const item = useRef('')


    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                ref={ item }
                type="text"
                name="description"
                placeholder="Que hay que hacer?"
                className="form-control"
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
                >
                Agregar
            </button>
        </form>
    )
}
