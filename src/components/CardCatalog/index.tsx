import './styles.css';
import carImg from '../../assets/img/car-card.png';
import ButtonNexPage from '../ButtonNextPage';

export default function CardCatalog() {
  return (
    <div className="ct-card">
      <div className="ct-catalog-card-top ct-line-bottom">
        <img src={carImg} alt="Computer" />
      </div>
      <div className="ct-catalog-card-bottom">
        <h3>Audi Supra TT</h3>
        <h4 className="ct-mb20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi
        </h4>
        <ButtonNexPage />
      </div>
     
    </div>
  );
}