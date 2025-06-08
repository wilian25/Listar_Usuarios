import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
}

const Dados = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/usuarios/${id}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }
  }, [id]);

  if (!user) return <Typography>Carregando...</Typography>;

  return (
    <div>
      <Typography variant="h4">{user.name}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>ID: {user.id}</Typography>
    </div>
  );
};

export default Dados;
