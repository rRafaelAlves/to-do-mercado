import React, { Dispatch, SetStateAction } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';


type Props={
    List: Item[]
    setList: Dispatch<SetStateAction<Item[]>>
    deleteItem: (index: number)=> void
}

function Table({List, setList}: Props){

function deleteItem(index: number){
    setList(prevList => {
        const newList = [...prevList];
        newList.splice(index, 1);
        return newList;
      });
}
   
    return(

    <C.Table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Altere</th>
            </tr>
        </thead>
        <tbody>
        {List?.map((element, index)=>(
            <tr key={index}>
               
                <td>
                    {element.count}
                </td>
                <td>
                    {element.name}
                </td>

                <td>
                    <button onClick={()=>deleteItem(index)}>delete</button>
                </td>
            </tr>
        ))}
        </tbody>

    </C.Table>
    
    )
}

export default Table;