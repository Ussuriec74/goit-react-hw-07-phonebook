import React from "react";
import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>Find contacts by name
    <FilterInput type="text" value={value} onChange={onChange} />
  </FilterLabel>
);
