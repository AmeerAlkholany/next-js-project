import { LoginForm } from "components/login-form"

const page = () => {
  return (
   <div className="flex items-center justify-center h-screen md,sm: mx-5">
    <div className="w-lg items-center justify-center">
      <LoginForm/>
    </div>
   </div> 
  )
}

export default page