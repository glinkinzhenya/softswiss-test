import React from 'react';
import './Button.scss';

export const Button = ({link, type}) => {

  return (
    <a href={link} target='blank' className={`btn ${type ==='transparent' ? 'btn--transparent' : ''}`}>
      Learn more
    </a>
  );
};
