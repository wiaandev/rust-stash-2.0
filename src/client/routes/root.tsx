
import { Outlet } from "react-router";
import { Nav } from "../custom-components/Nav";



export function Root() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

