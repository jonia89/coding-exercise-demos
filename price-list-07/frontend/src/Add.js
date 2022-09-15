import React from "react";
import { useForm } from "react-hook-form";

export function Add() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("Sending this data to frontend:", data);
    fetch("http://localhost:3000/store/fruit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <h1>Add fruit</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="type-fruit">
          <input
            {...register("type")}
            type="radio"
            value="fruit"
            id="type-fruit"
          />
          Fruit
        </label>
        <label htmlFor="type-vegetable">
          <input
            {...register("type")}
            type="radio"
            value="vegetable"
            id="type-vegetable"
          />
          Vegetable
        </label>
        <label>Name</label>
        <input {...register("name")} />
        <label>Price</label>
        <input
          min={0}
          max={99}
          type="number"
          {...register("price", { min: 0, max: 99 })}
        />

        <input type="submit" />
      </form>
    </>
  );
}
