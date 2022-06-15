import React, {  } from 'react';
import {LEVELS} from '../../models/levels.enum';
import { Task } from '../../models/tas.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('example','default descripcion' , false, LEVELS.NORMAL );
   
        return (
            <div>
               <div>
                   <h2> Your tasks</h2>
               </div> 
               {/* TODO: aplicar un FOR/Map para renderizar una lista */}
               <TaskComponent task={defaultTask}></TaskComponent>
            </div>
        );
    
};


export default TaskListComponent;
