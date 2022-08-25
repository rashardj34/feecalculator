
import './App.css';

function findRequest(){
  var invoiceOne = document.getElementById("firstInvoice").value;
  var invoiceOne = parseInt(invoiceOne, 10);
  var invoiceTwo = document.getElementById("secondInvoice").value;
  var invoiceTwo = parseInt(invoiceTwo, 10);
  var invoiceThree = document.getElementById("secondInvoice").value;
  var invoiceThree = parseInt(invoiceThree, 10);
  const max = document.getElementById("increment").value;
  const fee = document.getElementById("fee").value;
  const requestFirst = (Math.ceil(invoiceOne / max) * fee) - fee;
  const requestSecond = (Math.ceil(invoiceTwo / max) * fee);
  const requestThird = (Math.ceil(invoiceThree / max) * fee);
  const requestFee = requestFirst + requestSecond + requestThird;
  
console.log(requestFee);
  document.getElementById("requestAmount").value = Math.round(requestFee * 100) /100;      
  }




function App() {




return (
<div className="App">
 <div className="calculator">
   <h1>Fee Calculator</h1>
   <form action="" method="get" className="invoices">
     <div className="invoiceOne">
       <label for="firstInvoice">1st Invoice: </label>
       <input type="text" name="firstInvoice" id="firstInvoice" className='invoice'value='0'  required></input>
     </div>
     <div className="invoiceTwo">
       <label for="secondInvoice">2nd Invoice: </label>
       <input type="text" name="secondInvoice" id="secondInvoice" className='invoice' value='0'  required></input>
     </div>
     <div className="invoiceThree">
       <label for="thirdInvoice">3rd Invoice: </label>
       <input type="text" name="thirdInvoice" id="thirdInvoice" className='invoice' value='0'  required></input>
     </div>

   </form>
   <div className='transaction'>
    <label for="increment">Max: </label>
    <input type="text" name="increment" id='increment' required></input><br></br>
    <label for="fee">Fee: </label>
    <input type="text" name="fee" id="fee" required></input><br></br>
    <label for="toRequest">Request: </label>
    <input type="number" for="request" name="request" id="requestAmount" required></input>
    <br></br>
     <button onClick={findRequest}>Calculate</button> 
    
    <button>Reset</button>
   </div>
 </div>
</div>
);
}

export default App;
