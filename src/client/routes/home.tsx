import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="p-10 justify-between">
        <div>
          <p className="font-bold text-3xl">Crafting on another level</p>
        </div>
        <div>
          <p>Here will be some cool render or carousel</p>
        </div>
        <Button
          className=" justify-center align-middle rounded-xl"
          variant="default"
        >
          <NavLink to={"register"}>Register</NavLink>
        </Button>
      </div>
    </>
  );
}
