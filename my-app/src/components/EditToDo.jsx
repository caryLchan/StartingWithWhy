import React, { Fragment, useState } from 'react';

const EditToDo = ({ todo }) => {

  const [editTask, setEditTask] = useState(todo.why)

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const body = { editTask }
      const response = await fetch(
        `http://localhost:5000/todos/${todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      )
    } catch (err) {
      console.error('updateTask/EditToDo.jsx error:', err.message)
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.id}`}>
        Edit
      </button>
      <div
        className="modal"
        id={`id${todo.id}`}
        onClick={() => setEditTask(todo.why)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit ToDo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setEditTask(todo.why)}
              >&times;
            </button>
            </div>
            <div className="modal-body">
              <input
                type='text'
                className='form-control'
                value={editTask}
                onChange={e => setEditTask(e.target.value)}>
              </input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateTask(e)}>
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setEditTask(todo.why)}>
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditToDo;