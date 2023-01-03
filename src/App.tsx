import React from 'react';
import * as C from './App.styles';
import Table from './components/Table';
import CrudBar from './components/CrudBar';
import { Item } from './types/Item';

function App(){

  const [List, setList] = React.useState<Array<Item>>([{name: 'Café', count: 5}, {name: "Leite", count: 2}]);

  function deleteItem(index: number){
    setList(prevList => {
        const newList = [...prevList];
        newList.splice(index, 1);
        return newList;
      });
}
  
  return(
    <C.Container>
      <CrudBar />
      <Table List={List} setList={setList} deleteItem={deleteItem}/>
    </C.Container>
  )

}

export default App;