import React from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';
import { useFormik } from 'formik';

type Props ={
    addItem: (values: Item) => void
}

function CrudBar({addItem}:Props){

    const [initialValues, setInitialValues] = React.useState<Item>({name: '', count: 0});

    function onSubmit(values: Item){
        addItem(values);
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