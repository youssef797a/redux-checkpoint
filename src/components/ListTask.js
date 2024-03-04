import React from "react";


const ListTask = ({tasks})=>{
    return (
        <div>
            {tasks.map(task => {
                return <task />
            })}
        </div>
    )
}

export default ListTask