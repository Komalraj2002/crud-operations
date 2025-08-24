import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Create({ addTask, updateTask, tasks = [] }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const taskToEdit = tasks.find((task) => task.id === parseInt(id));

  const [form, setForm] = useState({
    title: "",
    status: "Pending",
    members: ["not assigned"],
    dueDate: "",
    isAssigned: "No",
    hours: "00:00",
    priority: "Medium",
  });

  useEffect(() => {
    if (isEdit && taskToEdit) {
      setForm(taskToEdit);
    }
  }, [isEdit, taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      updateTask(taskToEdit.id, { ...form, id: taskToEdit.id });
    } else {
      addTask(form);
    }

    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4 border border-black rounded-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <label className="text-xl font-semibold">Task Title</label>
          <div className="border border-gray-500 rounded-2xl ml-10 w-[550px] h-[45px] shadow-lg p-2">
            <input
              className="border border-grey-300 rounded w-[500px] h-[25px] p-2"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Task Title"
              required
            />
          </div>
        </div>

        <br />

        <div className="flex items-center justify-start">
          <label className="text-xl font-semibold">Status</label>
          <div className="border border-gray-500 rounded-2xl ml-20 w-[350px] h-[60px] shadow-lg p-2">
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-1 py-1 shadow-sm bg-orange-100"
            >
              <option>Uninitiated</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <br />

        <div className="flex items-center justify-start">
          <label className="text-xl font-semibold">Assigned Member</label>
          <div className="border border-gray-500 rounded-2xl ml-20 w-[350px] h-[60px] shadow-lg p-2">
            <select
              name="members"
              value={form.members}
              onChange={handleChange}
              className="w-full border rounded-lg px-1 py-1 shadow-sm bg-orange-100"
            >
              <option>select</option>
              <option>Team Member 1</option>
              <option>Team Member 2</option>
              <option>Team Member 3</option>
              <option>Team Member 4</option>
            </select>
          </div>
        </div>

        <br />
        <div className="flex justify-start items-center">
          <label className="text-xl font-semibold">Due Date</label>
          <div className="border border-gray-500 rounded-2xl ml-10 w-[350px] h-[60px] shadow-lg p-2">
            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-1 py-1 shadow-sm bg-orange-100"
            />
          </div>
        </div>

        <br />

        <div className="flex justify-start items-center">
          <label className="text-xl font-semibold">Is Assigned</label>
          <div className="border border-gray-500 rounded-2xl ml-20 w-[350px] h-[60px] shadow-lg p-2">
            <select
              name="isAssigned"
              value={form.isAssigned}
              onChange={handleChange}
              className="w-full border rounded-lg px-1 py-1 shadow-sm bg-orange-100"
            >
              <option>select</option>
              <option>True</option>
              <option>False</option>
            </select>
          </div>
        </div>

        <br />

        <div className="flex justify-start items-center">
          <label className="text-xl font-semibold">Duration</label>
          <div className="ml-10">
            <input
              type="time"
              step="60"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="border px-3 py-2 rounded"
            />
          </div>
        </div>

        <br />

        <div className="flex justify-start items-center">
          <label className="text-xl font-semibold">Priority</label>
          <div className="border border-gray-500 rounded-2xl ml-20 w-[350px] h-[60px] shadow-lg p-2">
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full border rounded-lg px-1 py-1 shadow-sm bg-orange-100"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <br />

        <div className="flex justify-center">
          <button
            type="submit"
            className="text-black font-bold border border-blue-500 rounded-xl py-1 px-8"
          >
            {isEdit ? "UPDATE" : "SAVE"}
          </button>
        </div>
      </form>
    </div>
  );
}
