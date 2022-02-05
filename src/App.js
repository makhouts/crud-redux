import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addUser, deleteUser, updateUserName} from './features/Users';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState();
  const [userName, setUsername] = useState();
  const [newUsername, setNewUsername] = useState();

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                userName,
              })
            )
          }
        >
          Add User!
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h3>{user.userName}</h3>
              <input
                type="text"
                placeholder="New username"
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUserName({ id: user.id, userName: newUsername })
                  );
                }
                }
              >
                Update Username
              </button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
