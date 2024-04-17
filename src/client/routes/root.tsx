
import { Outlet } from "react-router";
import { Nav } from "../custom-components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";



export function Root() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Nav/>
    <Outlet/>
    </ThemeProvider>
  )
}

