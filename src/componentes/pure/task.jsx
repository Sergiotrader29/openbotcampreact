import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/tas.class';



const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                descripcion: {task.descripcion}
            </h3>
            <h4>
                level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? "completed": "pending" }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;