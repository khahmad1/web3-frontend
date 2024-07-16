import { redirect } from "react-router-dom";
export default function Profile(){
    if(!localStorage.getItem('session')){
        return redirect("/sign-up")
    }
    return (
        <>this is profile</>
    )
}