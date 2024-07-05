export async function getPopularCategory() {
   let res = await fetch("popularCategories.json");
   if (!res.ok) {
      throw new Error("Failed to fetch data");
   }

   return res.json();
}
