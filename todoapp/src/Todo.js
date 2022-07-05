import React, {useState} from 'react' 
import image from './image1.jpg'



const Todo = () => {

  const [inputData, setinputData] = useState('');
  const [Items, setItems] = useState([])

  const addItem = () => {
  if (!inputData) {
    
  } else {
      setItems([ ...Items,inputData]);
      setinputData('')
    }
  }

  // delete the Items

  const deleteItem = (id) =>{
   

const updateditems= Items.filter((elem,ind) => {
     return ind !== id;
});
setItems(updateditems);
  }

  //removeAll
  const removeAll = () => {
    setItems([]);
  }
  
    return (
        <>
       <div className='main-div'>
         <div className='child-div'>
         <figure>
           {/* <img src='' alt='todoimage'/> */}
           <figcaption>Add your ist Here</figcaption>
          <img src={image}></img>
         </figure>

         <div className='addItems'>
           <input type="text" placeholder='Add Items...'
            value={inputData}
            onChange={(e) => setinputData(e.target.value) }
           />
          <i className='fa fa-plus add-btn' title='Add Item' onClick={addItem}></i>
         </div>
         <div className='showItems'>
         {
           Items.map( (elem,ind) => {
              return(
              <div className='eachItem' key={ind}>
              <h3>{elem}</h3>
              <i className='fa fa-trash ' title='Delete-Item' onClick = { () => deleteItem(ind)}></i>
              
              
            </div>
            )
           })
         }

         </div>
         {/* clear all button */}
         <div className='showItems'>
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
            
         </div>

         </div>
       </div>
        </>
    )
}

export default Todo;
