
export function textRotate() {
   const text = document.querySelector<HTMLDivElement>(".circle__text");

   if (text) {
      text.innerHTML = text.innerText
         .split("")
         .map(
            (char, i) =>
               `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
         )
         .join("");
   }

   // Text Two
   const textTwo = document.querySelector<HTMLDivElement>(".circle__desc");

   if (textTwo) {
      textTwo.innerHTML = textTwo.innerText
         .split("")
         .map(
            (char, i) =>
               `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
         )
         .join("");
   }
}
