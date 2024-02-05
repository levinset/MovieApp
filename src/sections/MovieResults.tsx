// Import libraries

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ResultsView from "../components/ResultsView";
import SearchForm from "../components/SearchForm";

// MovieResults component
export default function MovieResults() {
  return (
    <div>
      <NavBar />
      <SearchForm />
      <ResultsView />
      <Footer />
    </div>
  );
}
