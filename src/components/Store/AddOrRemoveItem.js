import { addToCart, removeFromCart } from "../../store/web-store/store.actions";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Button, Grid } from "@material-ui/core";

const AddOrRemoveItem = ({ items, item, cart, amountOfWeapons, dispatch }) => {
    return (
        <Grid>
            <Button
                onClick={() =>
                    dispatch(addToCart(items, item, cart, amountOfWeapons))
                }
            >
                <AddIcon
                    style={{
                        color: "rgb(0,153,0)",
                    }}
                />
            </Button>
            <Button
                disabled={item.quantity >= 0 ? false : true}
                onClick={() =>
                    dispatch(removeFromCart(items, item, cart, amountOfWeapons))
                }
            >
                <RemoveIcon
                    style={{
                        color: "rgb(232,0,46)",
                    }}
                />
            </Button>
        </Grid>
    );
};

export default AddOrRemoveItem;
