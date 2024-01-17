import { useState } from "react";
export default function AddTaskModal({ onAddClick, onShow, taskToUpdate }) {
  const [task, setTask] = useState(taskToUpdate || {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });

  // eslint-disable-next-line no-unused-vars
  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null))

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <>
      <div className="h-full w-full z-50 absolute top-0 left-0">
        <form className="z-50 mx-auto my-auto w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#090b0d] p-9 max-md:px-4 lg:my-80 lg:p-11">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            {isAdd ? "Add New Task" : "Edit Task"}
          </h2>

          <div className="space-y-9 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                id="title"
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                value={task.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  id="tags"
                  value={task.tags}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  value={task.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center lg:mt-20">
            <button
              onClick={(e) => {
                if (task.title != "" && task.description != "") {
                  if (task.priority != "" && task.tags != "") {
                    e.preventDefault();
                    onAddClick(task, isAdd);
                  }
                }
              }}
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80 mr-5"
            >
              {isAdd ? "Create New Task" : "Edit"}
            </button>
            <button
              onClick={onShow}
              type="submit"
              className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80 ml-5"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
