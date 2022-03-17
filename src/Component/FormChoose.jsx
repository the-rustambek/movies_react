const FormChoose = () =>  {
     return (
         <section className="section">
         <form className="form">
         <select className="form-select" required style={{margin:`25px`}} defaultValue={'company'}>
                 <option value="company" disabled> company</option>
                 {/* <option value="IT-Time company" > IT-Time company</option> */}
             </select>  
             <select className="form-select" required style={{margin:`25px`}} defaultValue={'complex'}>
                 <option value="complex" disabled> complex</option>
                 {/* <option value="IT-Time complex" > IT-Time complex</option> */}
             </select>  
               <select className="form-select" required style={{margin:`25px`}} defaultValue={'rooms'}>
                 <option value="rooms" disabled> rooms</option>
                 {/* <option value="IT-Time rooms" > IT-Time rooms</option> */}
             </select>   
             <select className="form-select" required style={{margin:`25px`}} defaultValue={'banks'}>
                 <option value="banks" disabled> banks</option>
                 {/* <option value="IT-Time banks" > IT-Time banks</option> */}
             </select> 
             <select className="form-select" required style={{margin:`25px`}}  defaultValue={'duration'}>
                 <option value="duration" disabled> duration</option>
                 <option value="5 years" > 5 years</option>
                 <option value="10 years" > 10 years</option>
                 <option value="15 years" > 15 years</option>
             </select> 
             <button className="form-btn" style={{backgroundColor:`red`, border:`none`, color: `white`, width:`200px`}}>
                 Check
             </button>
         </form>
         </section>
     )
}
export default FormChoose;