import { Link } from "react-router-dom";
import { useAppContext } from "../Contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header=()=>{
    const {isLoggedIn}=useAppContext()
    
    return (
        <div className="bg-gray-800 py-6">
            <div className="container mx-28 flex justify-between">
                <span className="text-4xl text-violet-400 font-bold tracking-tight">
                    <Link to='/'>Holidays.com</Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn ? <>
                    <Link to='/my-bookings' className="text-white flex items-center px-3 font-bold hover:bg-gray-600">My Bookings</Link>
                    <Link to='/my-hotels' className="text-white flex items-center px-3 pr-5 font-bold hover:bg-gray-600">My Hotels</Link>
                    <SignOutButton/>
                    </>:
                    <Link to='/sign-in' className="flex items-center text-white py-2 px-3 font-bold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl bg-white rounded-lg color-pinktoblue">Sign In</Link>
                    }
                </span>
            </div>
        </div>
    );
    
}
export default Header;