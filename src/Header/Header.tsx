import React from 'react';

import s from './Header.module.css';


type Props = {};

/**
 * @return {React.FC<Props>}
 **/
export const Header: React.FC<Props> = ({}: Props) => {
  return (
    <div className={s.header}>
      Header!!
    </div>
  );
};
