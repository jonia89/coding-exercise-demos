import React from "react";
import { useForm } from "react-hook-form";

export function Add() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log('Sending this data to frontend:', data);
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
