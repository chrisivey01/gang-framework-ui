import { Button, Card, CardContent, Grid, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/web-store/store.actions";
import ItemDescription from "./ItemDescription";
import ItemImage from "./ItemImage";

const useStyles = makeStyles(() => ({
    item: {
        display: "flex",
        flexWrap: "wrap",
        width: 315,
        margin: 10,
        padding: 10,
        justifyContent: "center",
        backgroundColor: "#212121",
        color: "#fff",
        "& .content": {
            textAlign: "center",
        },
        "& .image": {
            width: 135,
            height: 100,
            margin: "auto",
            objectFit: "contain",
        },
        "& .MuiButton-root": {
            color: "#fff",
        },
    },
}));

const Item = ({ items, item, cart, cartItem }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const renderButtonStatus = () => {
        if (cartItem.quantity > 0) {
            return (
                <Button
                    onClick={() => dispatch(removeFromCart(items, item, cart))}
                >
                    <RemoveIcon style={{ color: "rgb(232,0,46)" }} />
                </Button>
            );
        } else {
            return (
                <Button
                    disabled
                    onClick={() => dispatch(removeFromCart(items, item, cart))}
                >
                    <RemoveIcon style={{ color: "rgb(232,0,46)" }} />
                </Button>
            );
        }
    };

    return (
        <Card className={classes.item}>
            <ItemImage name={item.name} />
            <CardContent className="content">
                <ItemDescription item={item} cartItem={cartItem} />
                <Grid>
                    <Button
                        onClick={() => dispatch(addToCart(items, item, cart))}
                    >
                        <AddIcon style={{ color: "rgb(0,153,0)" }} />
                    </Button>
                    {renderButtonStatus()}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Item;
