import React from 'react';
import * as C from './App.styles';
import Table from './components/Table';
import CrudBar from './components/CrudBar';
import { Item } from './types/Item';

function App(){

  const [List, setList] = React.useState<Array<Item>>([]);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  function deleteItem(index: number){
    setList(prevList => {
        const newList = [...prevList];
        newList.splice(index, 1);
        return newList;
      });
}

  function addItem(item: Item){
    setList((prev) =>([...prev, item]));
  }
  
  function editItem(index: number){
    setIsEditMode(!isEditMode);
  }
  
  return(
    <C.Container>
      <CrudBar addItem={addItem}/>
      {List.length != 0? <Table 
      List={List} 
      deleteItem={deleteItem} 
      editItem={editItem}
      isEditMode={isEditMode}
      setList={setList}
      />: <></>}
      
    </C.Container>
  )

}

export default App;