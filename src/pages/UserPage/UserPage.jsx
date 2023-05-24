import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { UserCard } from '../../components/Users/UserCard';
import './UserPage.css';

function UserPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    try{
      const { data }  = await axios.get("https://localhost:7083/api/Person/GetAllPeople")
      console.log(data);
      setUsers(data)
    }catch(err){
      console.log(err);
    }
    }
    useEffect(() => {
      getUsers();
    },[])

  const handleProfileClick = (user) => {
    navigate('/userprofile', { state: { user } });
  };

  return (
    <>
      {users && users.length > 0 && users.map((user) => (
        <UserCard key={user.id} user={user} onProfileClick={handleProfileClick} />
      ))}
    </>
  );
}

export default UserPage;