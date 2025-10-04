// import Card from "./Card";
// import { Suspense } from "react";
// import { getData } from "../utils/dataservices";
// import { CircularProgress } from "@mui/material";
// import { Card as Carddd } from "@mui/material";
// import { Stack } from "@mui/material";

// async function RecipesItem({ id }) {
//   const post = await getData(`https://dummyjson.com/posts/${id}`);
//   return <Card item={post} type="posts" />;
// }

// export default async function Recipes({ limit = 10 }) {
//   const data = await getData(`https://dummyjson.com/recipes?limit=${limit}`);
//   const recipesIds = data.recipes.map((p) => p.id);

//   return (
//     <section>
//       <h2>Recipes</h2>
//       <div
//         style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//       >
//         {recipesIds.map((id) => (
//           <Suspense
//             key={id}
//             fallback={
//               <Carddd
//                 sx={{
//                   width: 150,
//                   m: 1,
//                   height: 200,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Stack justifyContent="center" alignItems="center">
//                   <CircularProgress />
//                   loading...
//                 </Stack>
//               </Carddd>
//             }
//           >
//             <RecipesItem id={id} />
//           </Suspense>
//         ))}
//       </div>
//     </section>
//   );
// }

import { Suspense } from "react";
import RecipesList from "./RecipesList";
import { CircularProgress } from "@mui/material";

export default function Recipes({ query, limit }) {
  return (
    <section>
      <h2 style={{ marginLeft: "20px" }}>Recipes</h2>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: 20 }}>
            <CircularProgress />
            <p>Loading recipes...</p>
          </div>
        }
      >
        <RecipesList query={query} limit={limit} />
      </Suspense>
    </section>
  );
}
