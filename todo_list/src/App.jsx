import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import './Add.css'

const App = () => {

  let [input, setInput] = useState("")
  let [add, setAdd] = useState(JSON.parse(localStorage.getItem("list")) || [])
  let [btn, setBtn] = useState(true)
  let [index, setIndex] = useState(null)

  let handleAddOrUpdate = () => {
    if (btn) {
      
      if (input.trim() !== "") {
        setAdd([...add, input])
        setInput("")
      }
    } else {
      let newIndex = [...add]
      newIndex[index] = input
      setAdd(newIndex)
      setBtn(true)
      setInput("")
    }
  }
  localStorage.setItem("list" , JSON.stringify(add))

  let handleClear = () => {
    setAdd([])
  }

  let handleRemove = (i) => {
    let remove = add.filter((_, idx) => idx !== i)
    setAdd(remove)
  }

  let handleEdit = (i) => {
    setInput(add[i])
    setIndex(i)
    setBtn(false)
  }

  return (
    <div className="main">
      <div className="name">TODO - LIST</div>
      <div className="top-row">
        <input 
          type="text" 
          onChange={(e) => setInput(e.target.value)} 
          value={input} 
          placeholder="Enter task..." 
        />
        <button className="add-btn" onClick={handleAddOrUpdate}>
          {btn ? "Add" : "Update"}
        </button>
        <button className="clear-btn" onClick={handleClear}>Clear All</button>
      </div>

      <ul>
        {add.map((e, i) => (
          <div key={i}>
            <li>{e}</li>
            <button className="remove-btn" onClick={() => handleRemove(i)}>Remove</button>
            <button className="edit-btn" onClick={() => handleEdit(i)}> 
              <CiEdit /> Edit
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
