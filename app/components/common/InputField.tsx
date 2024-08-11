
interface InputPropsType {
   type: string,
   name: string,
   label: string,
   required?: boolean,
   id: string,
   placeholder?:string
}
const InputField =({type,name,label,required,id,placeholder}:InputPropsType)=> {
   return (
      <>
         {type === "checkbox" ? (
            <div className="common-check">
               <input
                  className="form-check-input"
                  type={type}
                  name={name}
                  id={id}
               />
               <label className="form-check-label mb-0" htmlFor={id}>
                  {label}
               </label>
            </div>
         ) : (
            <div className="mb-4">
               <label
                  htmlFor={id}
                  className="form-label font-18 mb-2 fw-500 font-heading">
                  {label} {required ? <span className="text-danger">*</span> : ""}
               </label>
               <input
                  name={name}
                  type={type}
                  className="common-input"
                  id={id}
                  placeholder={placeholder}
               />
            </div>
         )}
      </>
   );
}

export default InputField;
