import Link from "next/link";
import SearchBar from "./SearchBar";
import ToggleBaar from "./ToggleBaar";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* left side */}
          <div className="flex items-center">
            <Link href="#">
              <span className="text-2xl">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-500 bg-clip-text text-transparent">
                  Blog
                </span>
                <span>ger</span>
              </span>
            </Link>
          </div>
          {/* deskstop right side */}
          <div className="hidden md:flex items-center gap-4">
            <Link href={"artical"}>
              <span className="text-lg font-medium text-foreground">
                Artical
              </span>
            </Link>
            <Link href={"about"}>
              <span className="text-lg font-medium text-foreground">
                About
              </span>
            </Link>{" "}
            <Link href={"contact"}>
              <span className="text-lg font-medium text-foreground">
                Contact
              </span>
            </Link>
          </div>

          {/*  mobile right */}                    
          <div className="flex items-center gap-3">
            <SearchBar/>
            <ToggleBaar/>
            <div className="hidden md:flex gap-3">
              <Button>Login</Button>
              <Button>SignIN</Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
