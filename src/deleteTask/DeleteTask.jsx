import { removeTask } from "../taskSlice/taskSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const DeleteTask = ()=>{

    let dispatch = useDispatch()  
    let tasks = useSelector((state) => (state))
    console.log(tasks)

    return(
        <div>
            <h2>DeleteTask Menu </h2>

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

export default DeleteTask;