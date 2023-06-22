import './App.css'
import React from 'react';
import { useState } from 'react';
function App() {
  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [deletedToDo, setDeletedToDo] = useState([])



  return (
    <div>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {currentDay} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => {
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
            setToDo('')
          }}
            className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {
            toDos.map((value) => {

              return (
                <div>
                  { value.status ? null :
                    <div className="todo">
                      <div className="left">
                        <input onChange={(e) => {
                          console.log(e.target.checked);
                          setToDos(toDos.filter(obj => {
                            if (obj.id === value.id) {
                              obj.status = e.target.checked
                              console.log(obj);
                            }
                            return obj
                          }))
                        }} value={value.status} type="checkbox" name="" id="" />
                        <p>{value.text}</p>
                      </div>
                      <div className="right">
                        <i onClick={() => {
                          const removedToDo = toDos.find(obj => obj.id === value.id)
                          setToDos(toDos.filter(obj => obj.id !== value.id))
                          setDeletedToDo([...deletedToDo, removedToDo])
                        }
                        } className="fas fa-times"></i>
                      </div>
                    </div>
                  }</div>
              )
            })
          }
          {
            toDos.map((value) => {
              if (value.status) {
                return (
                  <div>
                    <br />
                    <h1 style={{ color: 'green' }}>Completed Todo's : {value.text}</h1>
                  </div>
                )
              } return null
            })
          }
          {
            deletedToDo.map((value) => {
              return (
                <div>
                  <br />
                  <h1 style={{ color: 'red' }}>Removed Todo's : {value.text}</h1>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}







export default App;


