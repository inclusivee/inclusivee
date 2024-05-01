import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement,InputProps>(
  ({ type ='text', name= '', ...props}, ref, )=>{
    return (
      <>
      <input  type={type} name={name} ref={ref} {...props} />
      </>
    )
  }

)
