"use client";
import { Button } from "@/components/ui/button";
import { github } from "./utils/Icon";
import { ModeToggle } from "./Components/ThemeDropdown/ThemeDropdown";
import { useRouter } from "next/navigation";
import { SearchDialog } from "./Components/SearchDialog/SearchDialog";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex items-end justify-between py-3">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          {" "}
          <ModeToggle />
          <Button
            className="flex items-center gap-2"
            onClick={() => router.push("https://github.com/")}
          >
            {github} Source Code
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
