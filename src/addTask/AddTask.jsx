import { useDispatch, useSelector } from "react-redux"
import { removeTask, taskSlice } from "../taskSlice/taskSlice"
import styles from "./AddTask.module.css"
import { useState } from "react"

const AddTask = ()=>{

    let [input,setInput] = useState("")
    let dispatch = useDispatch()    
    let formSubmit =()=>{

        e.preventDefault()
        dispatch(taskSlice(input))
        setInput("")
    }
    
    let tasks = useSelector((state) => (state))
    console.log(tasks)




    return(
        <div>
            <h2>AddTask Menu</h2>
            <div className="input" id={styles.addTaskDiv}
            >
                <form onSubmit={formSubmit}>
                    <input type="text"  placeholder="Enter Task here"
                    value = { input }   onChange = { (e) => setInput(e.target.value) }
                    />
                    <button type="submit"
                    >
                        AddTask
                    </button>
                </form>
            </div>
            {
                tasks.map( (item) => {
                    return (
                        <li key={item.id}> 
                            {item.text}
                            <button onClick={ ()=> dispatch(removeTask(item.id))}>
                                Remove Task
                            </button>
                        </li>
                    )
                }  )
            }
        </div>
    )
}

export default AddTask;