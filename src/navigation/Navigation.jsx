import styles from "./Navigation.module.css"

const Navigation =()=>{

    return(
        <div id ={styles
        .navigationDom}>
            <h2>Navigation</h2>
            <ul>
            <li>
                    <a href="/">
                        home
                    </a>
                </li>
                <li><a href="/addTask">
                    add task
                    </a>
                </li>

  
                <li>
                    <a href="/deleteTask">
                        delete task
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;