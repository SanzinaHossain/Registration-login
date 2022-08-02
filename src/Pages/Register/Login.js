import React from 'react'
import { useForm } from 'react-hook-form';
import index from "../../images/index.jpg"
import { Link } from 'react-router-dom'
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>{ 
      console.log(data);
    }
  return (
    <div class="pt-9 pb-9 bg-no-repeat bg-cover" style={{backgroundImage:`url(${index})`}}>
      <div class="flex justify-center items-center text-black">
    <div class=" w-96 bg-base-100 shadow-2xl">
      <div class="card-body rounded-2xl">
         <h2 class=" text-4xl text-center text-secondary">Please Login !!!</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
           <div class="form-control w-full max-w-xs">
         <label class="label">
             <span class="label-text text-black">Email</span>
         </label>
         <input 
             {...register("email",{
                required:{
                   value:true,
                   message:"Email is required"
                  },
                pattern:{
                   value:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                   message:"Provide a Valid email"
                 }
              })}     
              type="email" 
              placeholder="Enter Email" 
              class="input input-bordered w-full max-w-xs border-secondary" />
            <label class="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
            </label>
        </div>
        <div className="form-control w-full max-w-xs">
           <label className="label">
            <span className="label-text text-black">Password</span>
           </label>
          <input
          type="password"
          placeholder="Enter Password"
        className="input input-bordered border-secondary w-full max-w-xs"
      {...register("password", {
        required: {
          value: true,
          message: 'Password is Required'
          },
           minLength: {
                value: 6,
                message: 'Must be 6 characters or longer'
         }
      })}
    />
    <label className="label">
    {errors.password?.type === 'required' && <span className="label-text-alt text-red-700 bold">{errors.password.message}</span>}
    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700 bold">{errors.password.message}</span>}
    </label>
    <input value="Login"class="btn btn-primary w-full max-w-xs text-white" type="submit"/>
    </div>
  </form>
  <p class="text-center">New to Tesla <Link class="text-primary" to="/register">Create New Account</Link></p>
</div>
</div>
  </div>
   </div>
  )
}

export default Login