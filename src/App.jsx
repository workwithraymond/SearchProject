import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";


const App = () => {
  return (
    <main>
      <h1>Unsplash Images Starter</h1>
      <ThemeToggle/>
      <SearchForm/>
      <Gallery/>
    </main>
  )
};
export default App;
