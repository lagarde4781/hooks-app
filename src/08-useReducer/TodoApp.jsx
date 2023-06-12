import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeTodo } from './HomeTodo';
import { SuccessMessage } from './SuccessMessage';

export const TodoApp = () => {

    

    return (
        <Routes>  

            <Route path='/' element={ <HomeTodo/> }></Route>
            <Route path='/dataSent' element={ <SuccessMessage/> }></Route>
            <Route path='/*' element={ <Navigate to='/'/> }/>
            
        </Routes>
    )
}
