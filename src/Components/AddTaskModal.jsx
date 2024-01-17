export default function AddTaskModal({ onAddClick }) {
  // const [task, setTask] = useState(taskToUpdate || {
  //     id: crypto.randomUUID(),
  //     title: "",
  //     description: "",
  //     tags: [],
  //     priority: "",
  //     isFavorite: false,
  // });
  return (
    <>
      <div className="h-full w-full z-50 absolute top-0 left-0">
        <form className="z-50 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#090b0d] p-9 max-md:px-4 lg:my-20 lg:p-11">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            Add New Task
          </h2>

          <div className="space-y-9 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
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
                  required
                />
              </div>
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center lg:mt-20">
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80 mr-5"
            >
              Create new Task
            </button>
            <button
              onClick={onAddClick}
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
