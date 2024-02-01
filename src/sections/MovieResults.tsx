//import libraries

//import components
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ResultsView from "../components/ResultsView";
import SearchForm from "../components/SearchForm";

//main component
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
