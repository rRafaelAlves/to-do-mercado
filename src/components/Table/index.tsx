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
    isEditMode: boolean
    setList: Dispatch<SetStateAction<Item[]>>
}

function Table({List, deleteItem, editItem, isEditMode, setList}: Props){


    function onChange(index: number, event:React.ChangeEvent<HTMLInputElement> ){

        //console.log(event.currentTarget.value)

        setList(prevList => [ prevList[index] = {name: "d", count: 2}]);
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

                    { isEditMode ? <input type="text" value={element.name} onChange={e => onChange(index, e)} /> : element.name}
                        
                    </td>
                    <td>

                    { isEditMode ? <input type="number"  value={element.count} onChange={e => onChange(index, e)}/> : element.count}

                    </td>
                    

                    <td className='table__edit'>
                        <DoNotDisturbIcon sx={{color:'red'}}  onClick={()=>deleteItem(index)}/>
                        
                        {isEditMode?  <CheckCircleIcon sx={{color:'green'}} onClick={()=>editItem(index)} /> : <EditIcon sx={{color:'hotpink'}} onClick={()=>editItem(index)} />}
                    </td>

               
            </tr>
        ))}
        </tbody>

    </C.Table>
    
    )
}

export default Table;