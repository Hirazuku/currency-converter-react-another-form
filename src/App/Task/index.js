import "./style.css";

        const Task = ({amount}) => (
            
        <>
            {
                amount.map(task => (
                    <li
                        className={`task__item task__item--row`}
                        key={task.id}
                    >
                        <span >{task.number} {task.content}</span>
                    </li>
                ))
            }
        </>
        );

        export default Task;