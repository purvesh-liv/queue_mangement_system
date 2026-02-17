import "./App.css"
import { useState } from "react";
import QueueForm from "./components/QueueFrom";

export default function app(){
  const [queue , setQueue] = useState([])

  const addToQueue = (customer) =>{
     //add data to queue
     setQueue([...queue, {...customer, id: Date.now(), status:"waiting"}])

  }
  const updateStatus = (id , newStatus) =>{
     //change data in queue
     setQueue(queue.map(customer=>
      customer.id === id 
      ? {...customer, status:newStatus }
      : customer
     ))
  }
  const removeFromQueue = (id) =>{
    //remove data from queue
    setQueue(queue.filter(customer => customer.id !== id))
  }
  return (
    <div className="app">
      <header>
        <h1>Queue Management System</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
      <QueueForm onAdd={addToQueue}/>
      </main>
    </div>
  );
}