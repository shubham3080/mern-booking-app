import { useMutation, useQueryClient } from "react-query"
import * as apiClient from '../api-client'
import { useAppContext } from "../Contexts/AppContext"
const SignOutButton=()=>{
    const queryClient=useQueryClient();
    const {showToast}=useAppContext();
    const mutation=useMutation(apiClient.signOut,{
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("validateToken")
            showToast({message:"Signed Out!",type:"SUCCESS"})
        },
        onError:(error:Error)=>{
            showToast({message: error.message,type:"ERROR"});
            }
        
    })
    const handleClick=()=>{
        mutation.mutate()
    }
    return(
        <button onClick={handleClick} className="flex items-center text-white py-2 px-3 font-bold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl bg-white rounded-lg color-pinktoblue">Sign-Out</button>
                    
    )
}
export default SignOutButton