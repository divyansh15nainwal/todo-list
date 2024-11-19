import { useState } from 'react';
import edit from '../Assets/edit.png';
import tick from '../Assets/tick.png';
import not_tick from '../Assets/not_tick.png';
import delete_icon from '../Assets/delete.png';

function TodoItem({ id, text, isComplete, deleteTodo, toggle, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    editTodo(id, newText);  // Call the edit function with the new text
    setIsEditing(false);  // Exit edit mode
  };

  return (
    <div className="flex items-center my-3 gap-2">
      <div onClick={() => toggle(id)} className="flex flex-1 items-center cursor-pointer">
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleEdit}  // Save changes on blur
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}  // Save on Enter
            className="ml-6 text-[15px] border border-gray-300 rounded"
          />
        ) : (
          <p className={`ml-6 text-[15px] ${isComplete ? "line-through" : ""}`}>
            {text}
          </p>
        )}
      </div>
      <img onClick={() => setIsEditing(true)} src={edit} alt="" className="w-4 cursor-pointer" />
      <img onClick={() => deleteTodo(id)} src={delete_icon} alt="" className="w-4 cursor-pointer" />
    </div>
  );
}

export default TodoItem;
