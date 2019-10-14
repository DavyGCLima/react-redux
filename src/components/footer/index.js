import React from 'react';

import { useSelector } from 'react-redux';

export default function Footer() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <p>Você tem {favorites.length} Favoritos</p>
    </div>
  );
}
