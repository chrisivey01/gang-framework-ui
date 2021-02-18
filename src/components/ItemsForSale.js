import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import WEAPON_ASSAULTRIFLE from "../assets/png/WEAPON_ASSAULTRIFLE.png";
import WEAPON_BULLPUPRIFLE from "../assets/png/WEAPON_BULLPUPRIFLE.png";
import WEAPON_HEAVYPISTOL from "../assets/png/WEAPON_HEAVYPISTOL.png";
import WEAPON_MINISMG from "../assets/png/WEAPON_MINISMG.png";

const useStyles = makeStyles(() => ({
    item: {
        margin: 10,
        padding: 10,
        '& .image': {
            width: 135,
            height: 40,
            margin: "auto",
        }
    },
}));

export default ({ item }) => {
    const classes = useStyles();

    // backgroundUrl(`../../images/png/${item.name}.png`)
    // const possible = [WEAPON_ASSAULTRIFLE, WEAPON_BULLPUPRIFLE, WEAPON_HEAVYPISTOL, WEAPON_MINISMG]

    // possible.forEach(item => {
    //     if(item.toString())
    // })
    // const image = `../../images/png/`
    // switch (item.name) {
    //     case "WEAPON_ASSAULTRIFLE":
    //         return <img src={WEAPON_ASSAULTRIFLE} />;
    //         break;
    //     case "WEAPON_BULLPUPRIFLE":
    //         return <img src={WEAPON_BULLPUPRIFLE} />;
    //         break;
    //     case "WEAPON_HEAVYPISTOL":
    //         return <img src={WEAPON_HEAVYPISTOL} />;
    //         break;
    //     case "WEAPON_MINISMG":
    //         return <img src={WEAPON_MINISMG} />;
    //         break;
    //     default:
    //         null;
    // }
    return (
        <Card className={classes.item}>
            <CardMedia className="image" image={WEAPON_ASSAULTRIFLE}/>
            <CardContent>
                <Typography>Assault Rifle</Typography>
            </CardContent>
        </Card>
    )

};
