import React, { useEffect } from 'react';
import { applicationABI, applicationAddress } from '../../to-do-list-bc/src/utils/config';
import fetchTodoItems from '../../to-do-list-bc/src/utils/fetchInCompleteTodoItems';
import makeConnection from '../../to-do-list-bc/src/utils/makeConnection';
import Banner from "./components/Banner"
import Todo from "./components/Todo"
import './App.css';

function App() {

  
  useEffect(() => {
      async function initialSetup(){
      const {web3,account} = await  makeConnection();
      const abi = applicationABI;
      const address = applicationAddress;
      let {methods} = new web3.eth.Contract(abi,address);
      const todoItems = await fetchTodoItems(methods);
      const balance = await web3.eth.getBalance(account);
      //balance
      const wei =  1000000000000000000;
      console.log((balance/wei).toFixed(4));
      //todo items
      console.log(todoItems);
    }
    initialSetup();
    },[]);


  return (
    <div className="app">
      <Banner/>
      <Todo/>
    </div>
  );
}

export default App;




//getter for block chain
// let {methods} = new web3.eth.Contract(abi,address);
// async function fetchToDoItems(){
// const taskCount =  await methods.taskCount().call();
// for(let i = 1 ; i <= taskCount ; i++){
//   const task = await methods.tasks(i).call();
//   console.log(task);
//   }
// }
// fetchToDoItems();


// Add something on the block chain
    //   const makeChanges = async () => {
    //     try{
    //       const accounts = await  web3.eth.getAccounts();
    //       const account = accounts[0];
    //       methods.deposit(amount).send({from:account}).then((transaction) => console.log(transaction)).catch((error) => console.log(error));
    //     }catch(error){
    //       console.log(error)
    //     }
    // }
    // makeChanges();