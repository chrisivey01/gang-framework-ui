import WEAPON_ASSAULTRIFLE_MK2 from "../../assets/png/WEAPON_ASSAULTRIFLE_MK2.png";
import WEAPON_HEAVYPISTOL from "../../assets/png/WEAPON_HEAVYPISTOL.png";
import WEAPON_BULLPUPRIFLE_MK2 from "../../assets/png/WEAPON_BULLPUPRIFLE_MK2.png";
import WEAPON_COMPACTRIFLE from "../../assets/png/WEAPON_COMPACTRIFLE.png";
import WEAPON_ASSAULTRIFLE from "../../assets/png/WEAPON_ASSAULTRIFLE.png";
import WEAPON_PUMPSHOTGUN_MK2 from "../../assets/png/WEAPON_PUMPSHOTGUN_MK2.png";
import WEAPON_REVOLVER_MK2 from "../../assets/png/WEAPON_REVOLVER_MK2.png";
import WEAPON_SMG_MK2 from "../../assets/png/WEAPON_SMG_MK2.png";
import WEAPON_SNSPISTOL_MK2 from "../../assets/png/WEAPON_SNSPISTOL_MK2.png";
import WEAPON_SPECIALCARBINE from "../../assets/png/WEAPON_SPECIALCARBINE.png";
import WEAPON_APPISTOL from "../../assets/png/WEAPON_APPISTOL.png";
import WEAPON_PISTOL50 from "../../assets/png/WEAPON_PISTOL50.png";
import WEAPON_DBSHOTGUN from "../../assets/png/WEAPON_DBSHOTGUN.png";
import WEAPON_GUSENBERG from "../../assets/png/WEAPON_GUSENBERG.png";
import WEAPON_MACHINEPISTOL from "../../assets/png/WEAPON_MACHINEPISTOL.png";

import { Fragment } from "react";

const ItemImage = ({ name }) => {
    switch (name) {
        case "WEAPON_BULLPUPRIFLE_MK2":
            return <img className="image" src={WEAPON_BULLPUPRIFLE_MK2} />;
        case "WEAPON_HEAVYPISTOL":
            return <img className="image" src={WEAPON_HEAVYPISTOL} />;
        case "WEAPON_ASSAULTRIFLE_MK2":
            return <img className="image" src={WEAPON_ASSAULTRIFLE_MK2} />;
        case "WEAPON_ASSAULTRIFLE":
            return <img className="image" src={WEAPON_ASSAULTRIFLE} />;
        case "WEAPON_COMPACTRIFLE":
            return <img className="image" src={WEAPON_COMPACTRIFLE} />;
        case "WEAPON_APPISTOL":
            return <img className="image" src={WEAPON_APPISTOL} />;
        case "WEAPON_PISTOL50":
            return <img className="image" src={WEAPON_PISTOL50} />;
        case "WEAPON_SNSPISTOL_MK2":
            return <img className="image" src={WEAPON_SNSPISTOL_MK2} />;
        case "WEAPON_REVOLVER_MK2":
            return <img className="image" src={WEAPON_REVOLVER_MK2} />;
        case "WEAPON_SPECIALCARBINE":
            return <img className="image" src={WEAPON_SPECIALCARBINE} />;
        case "WEAPON_PUMPSHOTGUN_MK2":
            return <img className="image" src={WEAPON_PUMPSHOTGUN_MK2} />;
        case "WEAPON_SMG_MK2":
            return <img className="image" src={WEAPON_SMG_MK2} />;
        case "WEAPON_DBSHOTGUN":
            return <img className="image" src={WEAPON_DBSHOTGUN} />;
        case "WEAPON_GUSENBERG":
            return <img className="image" src={WEAPON_GUSENBERG} />;
        case "WEAPON_MACHINEPISTOL":
            return <img className="image" src={WEAPON_MACHINEPISTOL} />;
        default:
            return <Fragment />;
    }
};

export default ItemImage;
