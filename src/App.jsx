import { BrowserRouter, Route, Routes} from "react-router-dom";
import AddTask from "./addTask/AddTask";
import UpdateTask from "./updateTask/UpdateTask";
import DeleteTask from "./deleteTask/DeleteTask";
import Navigation from "./Navigation/Navigation";
import Home from "./home/Home";
import { Provider } from "react-redux";
import { myStore } from "./taskSlice/store";

const App = ()=>{

    return(
        <div>
            <Provider store={myStore}>
                <h2>App File</h2>
                <h2>SimpleTask Manager</h2>
                <Navigation></Navigation>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}>

                        </Route>
                        <Route path="/addTask" element={<AddTask/>}>

                        </Route>
                        <Route path="/updateTask" element={<UpdateTask/>}>

                        </Route>
                         <Route path="/deleteTask" element={<DeleteTask/>}/>

                         </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App;