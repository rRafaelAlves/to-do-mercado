import React, { Dispatch, SetStateAction } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


type Props={
    List: Item[]
    deleteItem: (index: number)=> void
    editItem: (index: number) => void
    setList: Dispatch<SetStateAction<Item[]>>
}

function Table({List, deleteItem, editItem, setList}: Props){


    function onChange(index: number, event:React.ChangeEvent<HTMLInputElement> ){

        console.log(event.target.value)

        const objAux = [...List]

        if(event.target.id === 'name'){
            
            objAux[index].name = event.target.value;
        }
        if(event.target.id === 'count'){
            objAux[index].count = parseInt(event.target.value, 10);
        }

        setList(objAux);

        
    }

    return(

    <C.Table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Edite</th>
            </tr>
        </thead>
        <tbody>

        {List?.map((element, index)=>(
            <tr key={index}>   

                    <td>

                    { element.isEditMode ? <C.InputFormName type="text" value={element.name} id="name" onChange={e => onChange(index, e)} /> : element.name}
                        
                    </td>
                    <td>

                    { element.isEditMode ? <C.InputFormCount type="number"  value={element.count} id="count" onChange={e => onChange(index, e)}/> : element.count}

                    </td>
                    

                    <td className='table__edit'>
                        <DoNotDisturbIcon sx={{color:'red'}}  onClick={()=>deleteItem(index)}/>
                        
                        {element.isEditMode ?  <CheckCircleIcon sx={{color:'green'}} onClick={()=>editItem(index)} /> : <EditIcon sx={{color:'hotpink'}} onClick={()=>editItem(index)} />}
                    </td>

               
            </tr>
        ))}
        </tbody>

    </C.Table>
    
    )
}

export default Table;