import {
  Button,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Search from "../pages/Search";


const Header = () => {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`Searchmeal/${val.query}`);
      resetForm();
    }
  });

  const [show, setShow] = useState(false);



  return (
    <header className="bg-black flex justify-between px-6 py-5 ">
      <div>
        <NavLink to='/' replace> <img src="https://themealdb.com/images/logo-small.png" alt="" />
        </NavLink>
      </div>

      {show && <nav className=" msm:flex hidden flex-col space-y-2 ">
        <NavLink className="font-bold text-white" to='/about'>About</NavLink>
        <NavLink className="font-bold text-white" to='/contact'>Contact</NavLink>
      </nav>

      }







      <button onClick={() => setShow(!show)}>
        {show ? <i className="fa-solid fa-xmark hidden msm:flex"></i> : <i className="fa-solid fa-bars hidden msm:flex"></i>}
      </button>
      <nav className="msm:hidden space-x-4 flex items-center py-1 ">
        <NavLink className="font-bold text-white" to='/Home'>Home</NavLink>
        <NavLink className="font-bold text-white " to='/about'>About</NavLink>
        <NavLink className="font-bold text-white" to='/contact'>Contact</NavLink>
        <NavLink className="font-bold text-white" to='/video'>video</NavLink>
        <form onSubmit={formik.handleSubmit}>

          <div className="relative flex items-center w-full gap-1 px-5">
            <input type="search"
              color="black"
              className="px-4 h-5 flex"
              name='query'
              onChange={formik.handleChange}
              value={formik.values.query}
            />
            <Button
              type="submit"
              size="sm"
              color="black"
              className=""
            >
              Search
            </Button>
          </div>

        </form>


      </nav>
    </header>

  )
}
export default Header
