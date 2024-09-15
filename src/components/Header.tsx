import Navbar from "./Navbar";
import Toolbar from "./Toolbar";

export default function Header() {
  return (
    <header className="bg-white shadow-lg rounded-lg mb-10">
      <Toolbar />
      <Navbar />
    </header>
  );
}
