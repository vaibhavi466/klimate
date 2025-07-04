import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img
            src={theme === "dark" ? "/logo.png" : "/logo2.png"}
            alt="Klimate logo"
            className="h-14 w-auto block"
          />
        </Link>

        <div className="flex gap-4">
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer text-sm text-blue-500"
          >
            toggle
          </div>
        </div>
      </div>
    </header>
  );
}
