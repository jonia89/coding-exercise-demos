/* eslint-disable react/prop-types */

import React from 'react';
import { useForm } from "react-hook-form";

export function SearchBar({onSubmit}) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="search"
        {...register("searchText")}
        placeholder="Search"
        autoComplete="off"
      />
    </form>
  );
}
