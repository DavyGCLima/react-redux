import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Input,
  Button,
  Card,
  CardContent,
  CardActions,
  makeStyles,
} from '@material-ui/core';

import { addFavoreteRequest } from '../../store/actions/favoretesActions';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
    marginTop: 6,
  },
  title: {
    fontSize: 14,
  },
});

export default function Manin() {
  const classes = useStyles();

  const [repositoryInput, setRespositoryInput] = useState('');

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  function handleAddRepository(event) {
    event.preventDefault();
    dispatch(addFavoreteRequest(repositoryInput));
    if (loading) {
      setRespositoryInput('');
    }
  }

  return (
    <>
      <form onSubmit={(event) => handleAddRepository(event)}>
        <Input
          placeholder="usuário/Repositório"
          value={repositoryInput}
          onChange={(e) => setRespositoryInput(e.target.value)}
        />
        <Button variant="contained" type="submit">OK</Button>

        {loading && <span>Carregando ...</span>}

        {!!error && <span>{error}</span>}
      </form>

      {favorites.map((fav) => (
        <Card key={fav.id} className={classes.card}>
          <CardContent>
            <strong className={classes.title}>{fav.name}</strong>
            <small>{fav.description}</small>
          </CardContent>
          <CardActions>
            <Button size="small" href={fav.url}>Acessar</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
