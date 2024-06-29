export async function getPopularCategory() {
   const res = await fetch("../data/popularCategories.json");
   if (!res.ok) {
      throw new Error("Failed to fetch data");
   }

   return res.json();
}
