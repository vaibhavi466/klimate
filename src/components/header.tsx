import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";

export function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark"; // ✅ FIXED

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img
            src={isDark ? "/logo.png" : "/logo2.png"}
            alt="Klimate logo"
            className="h-14 w-auto block"
          />
        </Link>

        <div className="flex gap-4">
            <CitySearch />
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex cursor-pointer text-sm transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
