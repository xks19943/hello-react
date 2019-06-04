import React from 'react';
import Link from './Link';
import {FilterTypes} from "../../constants";

const Filter = () => (
  <p className={'filters'}>
    <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
    <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
    <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
  </p>
);

export default Filter;
