import { createSlice, nanoid } from "@reduxjs/toolkit"
let initialState = [   { id: 1, text: "Task 1 - Default" },
    { id: 2, text: "Task 2 - Meeting with John" },
    { id: 3, text: "Task 3 - Complete Project Report" },
    { id: 4, text: "Task 4 - Call with Client" },
    { id: 5, text: "Task 5 - Team Lunch" },
    { id: 6, text: "Task 6 - Review Sales Data" },
    { id: 7, text: "Task 7 - Create Marketing Plan" },
    { id: 8, text: "Task 8 - Attend Conference" },
    { id: 9, text: "Task 9 - Meet with Designer" },
    { id: 10, text: "Task 10 - Finalize Budget" } ]

export let taskSlice = createSlice({

    name: "taskSlicer",
    initialState,
    reducers: {
        addTask: (state,action) => {
            let newTask = {
                id : nanoid(),
                text : action.payload, 
            }
            state.push(newTask)
        },
        removeTask : (state,action) => {
            return state.filter((ele) => ele.id != action.payload)
        }

    }
})

export let {addTask,removeTask} = taskSlice.actions;