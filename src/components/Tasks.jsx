import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
  const [updated, setUpdated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [rowIndex, setRowIndex] = useState(null);
  const [taskDetail, setTaskDetail] = useState('');
  const [updateTask, setUpdateTask] = useState('');

  const handleAddTask = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/addTask', {
        title: taskDetail,
      });

      toast.success(response.data.message);
      setTaskDetail('');
      fetchTasks();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/deleteTask/${taskId}`);
      toast.success(response.data.message);
     
      fetchTasks();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  useEffect(() => {
    setUpdated(true);
  }, [rowIndex]);

  const handleEditTask = async (taskId, index) => {
    try {
      setRowIndex(index);
   console.log("here task from click :",taskId)
      const response = await axios.put('http://localhost:8000/updateTask', {
        id: taskId,
        title: updateTask,
      });

      toast.success(response.data.message);
      setUpdated(false);
      fetchTasks();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/allTasks');
      console.log(response.data[0].title)
    
      setTasks(response.data || []);
    
    } catch (error) {
      console.error('Error fetching tasks:', error);
      toast.error('Error fetching tasks');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <div className="main">
      <div className="todo-list-container">
        <div className="background-image"></div>
        <div className="todo-list">
          <div className="flex">
            <div className="profile">
              <div className="circle" />
            </div>
          </div>

          <div className="spacer" />
          <div className="start" style={{ display: 'flex' }}>
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Add task"
                  value={taskDetail}
                  style={{
                    borderRadius: '5px',
                    border: 'none',
                    height: '2rem',
                    display: 'flex',
                    outline: 'none',
                  }}
                  onChange={(e) => setTaskDetail(e.target.value)}
                />
              </InputGroup>
            </div>

            <div>
              <Button
                variant="primary"
                onClick={handleAddTask}
                style={{
                  borderRadius: '5px',
                  border: 'none',
                  padding: '0.2rem 0.7rem',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#B79F97',
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
          </div>
          <div className="spacer3" />

          <div className="yourTodo">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
              <p> Your Todos</p>
            </div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="spacer1" />

          <div className="list">
           
            {
            tasks.map((task, index) => (
              <div key={task.id} className="task-item">
                {updated && index === rowIndex ? (
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Update task"
                      style={{
                        borderRadius: '5px',
                        border: 'none',
                        height: '2.5rem',
                        display: 'flex',
                        outline: 'none',
                      }}
                      value={updateTask}
                      onChange={(e) => setUpdateTask(e.target.value)}
                    />
                    <Button
                      variant="primary"
                      style={{
                        borderRadius: '5px',
                        border: 'none',
                        height: '2.5rem',
                        width: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#B79F97',
                      }}
                      onClick={() => handleEditTask(task._id, index)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </InputGroup>
                ) : (
                  <p>{task.title}</p>
                )}
                <div style={{ display: 'inline-flex', gap: '0.3rem' }}>
                  <div>
                    <Button
                      variant="danger"
                      style={{
                        borderRadius: '5px',
                        border: 'none',
                        height: '2.5rem',
                        width: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#B79F97',
                      }}
                      onClick={() => handleDeleteTask(task._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="warning"
                      style={{
                        borderRadius: '5px',
                        border: 'none',
                        height: '2.5rem',
                        width: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#B79F97',
                      }}
                      onClick={() => setRowIndex(index)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
