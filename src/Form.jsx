import React from 'react'
import { useForm} from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
function Form() {

    const myschema = z.object({
        name: z.string().min(5, "must enter more than 5 char"),
        password: z.string().max(20, "must be less than 20 char"),
        email: z.string(),
        city: z.string()
    })
    const { register, handleSubmit, formState } = useForm(
        {
            resolver: zodResolver(myschema)
        }
    )

    function save(values){
        console.log(formState.errors);
        console.log(values)
    }
    
  return (
    <>
    <form onSubmit={handleSubmit(save)}>
    <label>name :  </label>
    <br />
    <input type="text" {...register("name")} />
    <small style={{ display: formState.errors?.user ? "block" : "none", color: "red" }}>{formState.errors?.user?.message}</small>
    <br />
    <br />
    <label>email :  </label>
    <br />
    <input type="email" {...register("email")} />
    <br />
    <br />
    <label>password :  </label>
    <br />
    <input type="password" {...register("password")} />
    <br />
    <br />
    <label>city :  </label>
    <select name="" {...register("city")}>
        <option value="aswan">aswan</option>
        <option value="luxor">luxor</option>
        <option value="qena">qena</option>
    </select>
        <br />
        <br />
    <button>submit</button>
    </form>
    </>
  )
}

export default Form