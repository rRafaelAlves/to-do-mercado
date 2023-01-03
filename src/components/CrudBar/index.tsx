import React from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';
import { useFormik } from 'formik';



function CrudBar(){

    const [initialValues, setInitialValues] = React.useState<Item>({name: '', count: 0});

    function onSubmit(){

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

        

    </C.Container>
    
    )
}

export default CrudBar;