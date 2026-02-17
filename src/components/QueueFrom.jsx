import { useState } from "react"
import {FaUserPlus} from "react-icons/fa"

export default function QueueForm({onAdd}){
    const [name , setName] = useState("")
    const [service,Setservice] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        //validations
        if(!name.trim() || !service.trim()) return
        onAdd({name,service})
        setName("")
        Setservice("")
    }
   return (
     <>
       <form className="queue-form" onSubmit={handleSubmit}>
         <h2>Add to queue</h2>
         <div className="form-group">
           <input
             type="text"
             placeholder="Customer name"
             value={name}
             onChange={(e) => setName(e.target.value)}
           />
           <div className="form-group">
             <select
               value={service}
               onChange={(e) => Setservice(e.target.value)}
             >
               <option value="">Select service</option>
               <option value="consultation">consultation</option>
               <option value="Support">Support</option>
               <option value="Payment">Payment</option>
             </select>
           </div>
           <button type="submit">
             <FaUserPlus /> Add Customer
           </button>
         </div>
       </form>
     </>
   );
}