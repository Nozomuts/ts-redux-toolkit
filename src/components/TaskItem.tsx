import React from 'react'
import {Task} from '../ducks/todo/types'
import {useDispatch} from 'react-redux'
import {doneTask,deleteTask} from '../ducks/todo/module'

type Props = {
  task: Task
}

const TaskItem: React.FC<Props> = ({task})=>{
  const dispatch = useDispatch()

  return (
    <li>
      <label>
        <input type="checkbox" onClick={()=>dispatch(doneTask(task))} defaultChecked={task.done}/>
  <span>{task.title}</span>
      </label>
      <button onClick={()=>dispatch(deleteTask(task))}>削除</button>
    </li>
  )
}

export default TaskItem