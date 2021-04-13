import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title = '' }) => {
  return (
    <Helmet>
      <title>{`🎧 Kam Daam | ${title}`}</title>
    </Helmet>
  );
};

export default Meta;
