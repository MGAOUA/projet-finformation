/**les information du menu seront amener a partir de la
 * BDD et envoyer en props
 */

import React from "react";
import style from "./style.css";
import img1 from "../../ressources/photos/Times/img1.jpg";
import img2 from "../../ressources/photos/Times/img2.jpg";
import img3 from "../../ressources/photos/Times/img3.jpg";
import img4 from "../../ressources/photos/Times/img4.jpg";
const Casseroul = () => {
  return (
    <div id="caroussel">
      <img className="images" src={img1} />
      <img className="images" src={img2} />
      <img className="images" src={img3} />
      <img className="images" src={img4} />
    </div>
  );
};
export default Casseroul;
