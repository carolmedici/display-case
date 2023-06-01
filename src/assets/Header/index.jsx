import facebook from "./image/logo-facebook.svg"
import instagram from "./image/logo-instagram.svg"
import  "./Header.css"

const Header = () =>{
    return(
        <header className=" flex justify-around bg-gray-200 p-3">
            <h1 className="text-3xl font-semibold">Anakino Store</h1>
            <span className="w-10 flex justify-end gap-4">
                <img className="hover:cursor-pointer" src={facebook} alt="Facebook logo" />
                <img className="hover:cursor-pointer" src={instagram} alt="Instagram logo" />
            </span>
        </header>


    )


}

export default Header