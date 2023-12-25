


import React from 'react'
import {motion} from "framer-motion"

import "./DeleteTask.css"

const DeleteTask = ({handleMainContainer, handleDelete, category}) => {

  const deleteContainerHandler = (e) => {
    e.stopPropagation()
  }
  return (

    <div className={`mainContainer`} onClick={handleMainContainer}>
        
            <motion.div 
            animate ={{y : 70, scale: 1}} 
            initial={{ opacity: 1 }}
            className={`deleteContainer ${category}`} 
            
            onClick={deleteContainerHandler}>



            <h1>Are You sure You want To Delete?</h1>

            <div className="buttons">
                <button name = "yes" onClick={handleDelete}>Yes</button>
                <button name = "no" onClick={handleDelete}>No</button>
            </div>

    </motion.div>
    </div>


  )
}

export default DeleteTask