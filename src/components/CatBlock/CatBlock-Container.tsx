import React from 'react';
import CatBlockView from './CatBlock-View';

import './CatBlock.css';

const CatBlockContainer = ({ cats }) => {
  return <CatBlockView cats={cats} />;
};

export default CatBlockContainer;
