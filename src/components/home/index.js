
import { useNavigate } from "react-router-dom";
import Update from "../update";

export default function Home({ tasks, updateTask, deleteTask }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create");
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="self-start">
        <span className="text-sm border border-orange-300 rounded p-2 bg-orange-100 flex items-center">
          Create New Task
          <button
            className="border border-black font-semibold ml-2 bg-white px-2 py-0.5 rounded hover:bg-gray-100"
            onClick={handleClick}
            aria-label="Create new task"
          >
            +
          </button>
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-orange-300 text-black font-semibold border-b border-orange-300 ">
            <tr>
              <th className="py-2 px-4 border border-grey-300">Serial No</th>
              <th className="py-2 px-4 border border-grey-300">Task Title</th>
              <th className="py-2 px-4 border border-grey-300">Status</th>
              <th className="py-2 px-4 border border-grey-300">Assigned Members</th>
              <th className="py-2 px-4 border border-grey-300">Due Date</th>
              <th className="py-2 px-4 border border-grey-300">Is Assigned</th>
              <th className="py-2 px-4 border border-grey-300">Duration</th>
              <th className="py-2 px-4 border border-grey-300">Priority</th>
              <th className="py-2 px-4 border border-grey-300">Created On</th>
              <th className="py-2 px-4 border border-grey-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(tasks) && tasks.length > 0 ? (
              tasks.map((task, index) => (
                <Update
                  key={task.id || index}
                  task={task}
                  updateTask={updateTask}
                  deleteTask={deleteTask} 
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="text-center py-6 text-gray-500 italic border border-gray-300 "
                >
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
