import React from 'react';
import * as C from './App.styles';
import Table from './components/Table';
import CrudBar from './components/CrudBar';
import { Item } from './types/Item';

function App(){

  const [List, setList] = React.useState<Array<Item>>([]);
  const LimitItens = 15;

  function deleteItem(index: number){
    setList(prevList => {
        const newList = [...prevList];
        newList.splice(index, 1);
        return newList;
      });
}

  function addItem(item: Item){
    if(List.length >= LimitItens){
      return
    }
    setList((prev) =>([...prev, item]));
  }
  
  function editItem(index: number){
    
    const newList = [...List];
    newList[index].isEditMode = !newList[index].isEditMode;
    setList(newList);
  }
  
  return(
    <C.Container>

    {List.length >= 5 ? <></> :       
        <C.LogoContainer>

        <h1>Anote suas compras</h1>
        </C.LogoContainer>}

        
 

      <CrudBar addItem={addItem}/>

      {List.length !== 0? <Table 
      List={List} 
      deleteItem={deleteItem} 
      editItem={editItem}
      setList={setList}
      />: <></>}
      
    </C.Container>
  )

}

export default App;