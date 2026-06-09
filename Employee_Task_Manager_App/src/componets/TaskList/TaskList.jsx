/*import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div
      id="tasklist"
      className="h-[60%] w-full mt-8 flex items-start gap-6 overflow-x-auto px-2 py-4 scrollbar-hide"
    >
      
        {data.tasks.map((elem,idx)=>{

          if(elem.active){
            return <AcceptTask key={idx} data={elem} />
          }
          if(elem.newTask){
            return <NewTask key={idx} data={elem} />
          }
          if(elem.completed){
            return <CompleteTask key={idx} data={elem} />
          }
          if(elem.failed){
            return <FailedTask key={idx} data={elem} />
          }

        })}
      
    </div>
  )
}

export default TaskList */

import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  console.log(data);

  return (
    <div
      id="tasklist"
      className="h-[60%] w-full mt-8 flex items-start gap-6 overflow-x-auto px-2 py-4 scrollbar-hide"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }

        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }

        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }

        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;