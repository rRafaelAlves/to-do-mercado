import React from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';
import { useFormik } from 'formik';

type Props ={
    addItem: (values: Item) => void
}

function CrudBar({addItem}:Props){

    const initialValues = {name: '', count: 0, isEditMode: false};

    function onSubmit(values: Item){
        addItem(values);
        setValues({name: '', count: 0, isEditMode: false});
    }

    const formikOptions = {
        validateOnBlur: true,
        validateOnChange: false,
        enableReinitialize: true,
        initialValues,
        onSubmit
      }
    
      const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setValues
      } = useFormik(formikOptions);
    
    return(

    <C.Container>

        <form id='form' onSubmit={handleSubmit}>
            
            <C.InputForm
            type="text"
            id='name'
            name='name'
            value={values.name} 
            onChange={handleChange}
            placeholder="Digite o nome da compra"
             />

            <C.InputForm
             type="number" 
             id='count'
             name='count'
             value={values.count} 
             onChange={handleChange} 
             
             />

             <C.ButtonSubmit type="submit" value="Adicionar" />
             
        </form>

    </C.Container>
    
    )
}

export default CrudBar;