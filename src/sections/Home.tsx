// Import libraries

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";

// Main component
export default function Home() {
  return (
    <div>
      <NavBar />
      <SearchForm />
      <Footer />
    </div>
  );
}
