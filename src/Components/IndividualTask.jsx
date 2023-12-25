import React, { useState } from "react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaEdit,
  FaWindowClose,
} from "react-icons/fa";

import Dates from "./Dates";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

const IndividualTask = ({
  elem,
  index,
  arrowLeftHandler,
  arrowRightHandler,
  allTasks, 
  setAllTasks
}) => {

  const [editElem, setEditElem] = useState(false)
  const [deleteElem, setDeleteElem] = useState(false)
  const [editData, setEditData] = useState("")

  const arrayToEdit = elem.id;

  const handleMainContainer = (e) => {
    e.preventDefault();
    setDeleteElem(false)
    setEditElem(false)
    console.log("hello")
  }

  const deleteHandler = (id) => {
    setDeleteElem(true)
  }

  const handleDelete = (e) => {
      if(e.target.name === "yes"){  

        setAllTasks((prev) => {
          const newArr = prev.map((elem, id) => id === arrayToEdit ? elem.filter((elem,id) => id !==index) : elem)
          return newArr
        })

        setDeleteElem(false)
      } else{
        setDeleteElem(false)
      }
  }
  const editHandler = () => {
    setEditData(elem.task)
    setEditElem(true)
  };

  const inputChangeHandler = (e) => {
    setEditData(e.target.value)
  }

  const editSubmitHandler = () => {

    setAllTasks((prev) => {

      const newArr = prev.map((elem,id) => id === arrayToEdit? 
      elem.map((obj, idx) => {
        if(idx === index){
          return {...obj, task : editData}
        } else {
          return obj
        }
      })
   
      : elem)

      return newArr
    })
    setEditElem(false)

  } 

  const editCancelHandler = () => {
    setEditElem(false)
  }

  console.log(editData)
  return (
    <div className={`individualTasks ${elem.category}`}>

      {deleteElem && <DeleteTask handleMainContainer = {handleMainContainer} handleDelete = {handleDelete} category = {elem.category}/>}

      {editElem && <EditTask />}


      <div className="headingHandles">
        {elem.id !== 0 && (
          <FaArrowLeft
            className="icon leftIcon"
            onClick={arrowLeftHandler.bind(this, elem, index)}
          />
        )}

       {
        editElem ? <div className="editElem">
         <input type="text"
          className="editInputText"
           value={editData} 
           onChange={inputChangeHandler} 
           /> 
           <div className="editButtons">
           <button onClick={editSubmitHandler}>Submit</button>
           <button onClick={editCancelHandler}>Cancel</button>    
           </div>
            </div>:  <p className="title">{elem.task}</p>
       }

        {elem.id !== allTasks.length - 1 && (
          <FaArrowRight
            className="icon rightIcon"
            onClick={arrowRightHandler.bind(this, elem, index)}
          />
        )}
      </div>

     { !editElem && <div className="icons">
        <FaEdit onClick={editHandler} />
        <FaWindowClose onClick={deleteHandler} />
      </div>

}
      <div className="dates">
        <Dates time={elem.time} dates={elem.dates} />
      </div>
    </div>
  );
};

export default IndividualTask;
