import React from "react";
import { getData } from "../../../../utils/dataservices";

export default async function RecipesDetail({ params }) {
  const { id } = params;
  const recipes = await getData(`https://dummyjson.com/recipes/${id}`, {
    cache: "no-store",
  });

  return (
    <>
      <div className="card-id">
        <h4>Name: {recipes.name}</h4>
        <p>Ingredients:</p>
        <ul className="list">
          {recipes.ingredients.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <p>Instructions:</p>
        <ul className="list">
          {recipes.instructions.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <p>UserId: {recipes.userId}</p>
      </div>
    </>
  );
}
