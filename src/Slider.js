import tanks from './assets/images/tanks.png';
import field from './assets/images/field.png';
import flag from './assets/images/flag.png';
import fr from './assets/images/fr.png';
import cz from './assets/images/cz.png';
import de from './assets/images/de.png';
import uk from './assets/images/uk.png';
import usa from './assets/images/usa.png';
import ussr from './assets/images/ussr.png';
import { ReactComponent as ArrLeft } from './assets/icons/arrow-left.svg';
import { ReactComponent as ArrRight } from './assets/icons/arrow-right.svg';

function Slider() {
  return (
    <div className="slider">
      <h1>HEAVY TANKS</h1>
      <section className="flag">
        <img src={flag} alt="flag" />
        <div className="info">
          <h2>Over 600 vehicles from the largest tank- building superpowers</h2>
          <p>Each model has been recreated with surgical precision</p>
          <button className="button-primary">registration</button>
        </div>
      </section>
      <section className="tanks" style={{ backgroundImage: `url(${field})` }}>
        {/* <img src={field} alt="field" /> */}
        {/* <div className="content"> */}
        <span className="germany">Germany</span>
        <img src={tanks} alt="tanks" />
        <div className="info">
          <span className="number">128</span>
          <p>GERMAN VEHICLES IN THE GAME</p>
          <h3>StuG III, Panther, Maus, Tiger, Pz. III</h3>
        </div>
        {/* </div> */}
      </section>
      <section className="nations">
        <button className="button-secondary left">
          <ArrLeft />
        </button>
        <div className="figure-container">
          <div className="shadow"></div>
          <img src={ussr} alt="ussr" />
          <span>ussr</span>
        </div>
        <div className="figure-container">
          <div className="shadow"></div>
          <img src={de} alt="de" />
          <span>germany</span>
        </div>
        <div className="figure-container">
          <div className="shadow"></div>
          <img src={usa} alt="usa" />
          <span>usa</span>
        </div>
        <div className="figure-container">
          <div className="shadow"></div>
          <img src={fr} alt="fr" />
          <span>france</span>
        </div>
        <div className="figure-container">
          <div className="shadow"></div>
          <img src={uk} alt="uk" />
          <span>united kingdom </span>
        </div>
        <div className="figure-container">
          <div className="shadow"></div>
          <img src={cz} alt="cz" />
          <span>Czechoslovakia</span>
        </div>
        <button className="button-secondary right">
          <ArrRight />
        </button>
      </section>
    </div>
  );
}

export default Slider;
