import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Create from "../create";
export default function Update({ task, deleteTask }) {
  const navigate = useNavigate();
  if (!task) return null;

  return (
    <tr>
        <td className="py-2 px-4 border border-gray-300">{task.id}</td>
      <td className="py-2 px-4 border border-gray-300"> {task.title}</td>
      <td className="py-2 px-4 border border-gray-300">{task.status}</td>
      <td className="py-2 px-4 border border-gray-300">{task.members}</td>
      <td className="py-2 px-4 border border-gray-300">{task.dueDate}</td>
      <td className="py-2 px-4 border border-gray-300">{task.isAssigned}</td>
      <td className="py-2 px-4 border border-gray-300">
        {(() => {
          const [h, m] = task.duration.split(":");
          return `${parseInt(h)}h ${parseInt(m)}m`;
        })()}
      </td>
      <td className="py-2 px-4 border border-gray-300">{task.priority}</td>
      <td className="py-2 px-4 border border-gray-300">{task.createdOn}</td>
      <td className="py-2 px-4 border border-gray-300">
        <button onClick={() => navigate(`/edit/${task.id}`)}>
          <FaEdit />
        </button>
        <button className="p-3" onClick={() => deleteTask(task.id)}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
