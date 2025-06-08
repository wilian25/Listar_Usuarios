import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
}

const Usuarios = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/usuarios')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleClick = (id: number) => {
    window.open(`/dados/${id}`, '_blank');
  };

  return (
    <List>
      {users.map(user => (
        <ListItem key={user.id} component="button" onClick={() => handleClick(user.id)}>
        <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
};

export default Usuarios;
