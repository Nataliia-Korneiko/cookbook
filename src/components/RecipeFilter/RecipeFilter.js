import React from 'react';
import PropTypes from 'prop-types';
import s from './RecipeFilter.module.css';

const RecipeFilter = ({ value, onChangeFilter }) => (
  <input
    className={s.input}
    type="text"
    value={value}
    onChange={onChangeFilter}
    placeholder="Enter text..."
  />
);

RecipeFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default RecipeFilter;
