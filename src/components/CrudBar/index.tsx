import React from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';
import { useFormik } from 'formik';
import { CrudSchema } from './schema';


type Props ={
    addItem: (values: Item) => void
}

function CrudBar({addItem}:Props){

    const validationSchema = React.useMemo(() => CrudSchema(), [] );
    const initialValues = {name: '', count: 0, isEditMode: false};

    function onSubmit(values: Item){
        addItem(values);
        setValues({name: '', count: 0, isEditMode: false});
    }

    const formikOptions = {
        validateOnBlur: true,
        validateOnChange: false,
        enableReinitialize: true,
        validationSchema,
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

           


        <C.InputContainer>
                <C.InputForm
                type="text"
                id='name'
                name='name'
                value={values.name} 
                onChange={handleChange}
                placeholder="Digite o nome da compra"
                />
                <p className="errors">{errors.name ?? <>{errors.name}</>}</p>
            </C.InputContainer>

            <C.InputContainer>
                <C.InputForm
                type="number" 
                id='count'
                name='count'
                value={values.count} 
                onChange={handleChange}
                />
                <p className="errors">{errors.count ?? <>{errors.count}</>}</p>
            </C.InputContainer>

             <C.ButtonSubmit type="submit" value="Adicionar" />
             
        </form>

    </C.Container>
    
    )
}

export default CrudBar;