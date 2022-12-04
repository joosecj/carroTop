
import CardCatalog from '../../components/CardCatalog';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import './styles.css';

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="catalog-section" className="ct-container ct-mt20">
          <SearchBar />
          <div className="ct-catalog-cards ct-mb20 ct-mt20">
            <CardCatalog />
            <CardCatalog />
            <CardCatalog />
            <CardCatalog />
            <CardCatalog />
            <CardCatalog />
          </div>
          
        </section>
      </main>
    </>
  );
}