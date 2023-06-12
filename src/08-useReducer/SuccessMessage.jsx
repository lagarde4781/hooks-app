import { useNavigate } from 'react-router-dom';

export const SuccessMessage = () => {

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1);
    }

    return (
        <>  
            <h1>Formulario enviado</h1>
            <button onClick={ onNavigateBack }>
                	Regresar
            </button>
        </>
    )
}
