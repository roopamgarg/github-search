import './App.css';
import { TextInput } from './Components/TextInput/TextInput';
import { ColumnTypes, List } from './Components/List/List';
import { githubUsersStore } from './dataStores/usersStore';
import { ChangeEvent } from 'react';

function App() {
  const {users,searchUsers} = githubUsersStore(state => state);
  
  function handleTextChange(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    searchUsers(value);
  }

  function makeListData() {
    const data = users.map(user => [
      {
        type: ColumnTypes.IMAGE,
        value:user.avatar_url
      },       
      {
        type: ColumnTypes.STRING,
        value:user.login
      }, 
      {
        type: ColumnTypes.LINK,
        value:user.html_url
      }, 
      {
        type: ColumnTypes.STRING,
        value:user.score.toString()
      }
    ]);
    const header = [
      {
        type: ColumnTypes.STRING,
        value:"Avatar"
      },       
      {
        type: ColumnTypes.STRING,
        value:"Username"
      }, 
      {
        type: ColumnTypes.STRING,
        value:"Profile link"
      }, 
      {
        type: ColumnTypes.STRING,
        value:"Score"
      }
    ]
     data.unshift(header);
    return data;
  }
  return (
    <div className="App">
      <div>
        <TextInput onChange={handleTextChange}/>
      </div>
      <List data={makeListData()}/>
    </div>
  );
}

export default App;
