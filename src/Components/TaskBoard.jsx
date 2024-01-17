import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

export default function TaskBoard(){
    const defaultTask = {
        id: crypto.randomUUID(),
        title: "Learn React Native",
        description:
            "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
        tags: ["web", "react", "js"],
        priority: "High",
        isFavorite: true,
    };

    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const handleAddEditTask = (newTask, isAdd)=> {
      if (isAdd){
        setTasks([...tasks, newTask]);
      }else{
        setTasks(
          tasks.map((task) =>{
            if(task.id === newTask.id){
              return newTask;
            }
            return task;
          }
        ))
      }
        setShowAddModal(false);
        
    }
    const showAddtaskModal = ()=> {
      setTaskToUpdate(null);
      setShowAddModal(!showAddModal);
    }

    const handleEditTask = (task)=> {
      setTaskToUpdate(task);
      setShowAddModal(true);
    }

    const handleDeleteTask = (taskId)=> {
      const taskAfterDelete = tasks.filter(task => task.id != taskId)
      setTasks(taskAfterDelete);
    }

    const handleDeleteAll = ()=> {
      tasks.length = 0;
      setTasks([...tasks]);
    }

    const handleFav = (taskID)=>{
      const newTasks = [...tasks]
      for ( let i of newTasks){
        if(i.id === taskID){
          i.isFavorite = !i.isFavorite;
        }
      }
      setTasks(newTasks)
    }

    const handleSearch = (searchTerm)=>{
      const filtered = tasks.filter((task) => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setTasks([...filtered])
    }

    return (
        <section className="mb-20" id="tasks">
            {showAddModal && <AddTaskModal 
            onAddClick={handleAddEditTask} 
            onShow={showAddtaskModal}
            taskToUpdate = {taskToUpdate}/>}
          <div className="container">

            <SearchTask onSearch={handleSearch}/>

            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
              
              <TaskActions onAddClick={showAddtaskModal} onDeleteAllClick={handleDeleteAll}/>

              <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} onFav={handleFav}/>

            </div>
          </div>
        </section>
    );
}