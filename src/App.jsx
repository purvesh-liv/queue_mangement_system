import "./App.css"
import { useState } from "react";
import QueueForm from "./components/QueueFrom";

export default function app(){
  const [queue , setQueue] = useState([])

  const addToQueue = (customer) =>{
     //add data to queue
     
  }
  const updateStatus = (id , newStatus) =>{
     //change data in queue
  }
  const removeFromQueue = (id) =>{
    //remove data from queue
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