export default function InputField({
   type,
   name,
   label,
   required,
   id,
   placeholder,
}) {
   return (
      <>
         {type === "checkbox" ? (
            <div class="common-check">
               <input
                  class="form-check-input"
                  type={type}
                  name={name}
                  id={id}
               />
               <label class="form-check-label mb-0" for={id}>
                  {label}
               </label>
            </div>
         ) : (
            <div class="mb-4">
               <label
                  for={id}
                  class="form-label font-18 mb-2 fw-500 font-heading">
                  {label} {required ? <span class="text-danger">*</span> : ""}
               </label>
               <input
                  name={name}
                  type={type}
                  class="common-input"
                  id={id}
                  placeholder={placeholder}
               />
            </div>
         )}
      </>
   );
}
