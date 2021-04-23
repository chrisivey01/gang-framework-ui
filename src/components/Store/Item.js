import { Card, CardContent, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import AddOrRemoveItem from "./AddOrRemoveItem";
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

const Item = ({ items, item, cart, cartItem, amountOfWeapons }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.item}>
            <ItemImage name={item.name} />
            <CardContent className="content">
                <ItemDescription item={item} cartItem={cartItem} />
                <AddOrRemoveItem
                    dispatch={dispatch}
                    items={items}
                    item={item}
                    cart={cart}
                    amountOfWeapons={amountOfWeapons}
                />
            </CardContent>
        </Card>
    );
};

export default Item;
