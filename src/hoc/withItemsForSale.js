import { Button, Grid, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch, useSelector } from "react-redux";
import WEAPON_ASSAULTRIFLE from "../assets/png/WEAPON_ASSAULTRIFLE.png";
import WEAPON_BULLPUPRIFLE from "../assets/png/WEAPON_BULLPUPRIFLE.png";
import WEAPON_HEAVYPISTOL from "../assets/png/WEAPON_HEAVYPISTOL.png";
import WEAPON_MINISMG from "../assets/png/WEAPON_MINISMG.png";
import { removeFromCart } from "../store/web-store/store.actions";

const withItemsForSale = (WrappedComponent) => ({
    items,
    item,
    cartItem,
    cart,
}) => {
    const dispatch = useDispatch();
    const totalCost = useSelector((state) => state.store.totalCost);
    const totalCostDisplay = useSelector(
        (state) => state.store.totalCostDisplay
    );

    const renderImage = (name) => {
        if (name === "WEAPON_ASSAULTRIFLE") {
            return <img className="image" src={WEAPON_ASSAULTRIFLE} />;
        } else if (name === "WEAPON_BULLPUPRIFLE") {
            return <img className="image" src={WEAPON_BULLPUPRIFLE} />;
        } else if (name === "WEAPON_HEAVYPISTOL") {
            return <img className="image" src={WEAPON_HEAVYPISTOL} />;
        } else if (name === "WEAPON_MINISMG") {
            return <img className="image" src={WEAPON_MINISMG} />;
        }
    };

    const renderQuantity = (quantity) => {
        return <Typography variant="body2">Available: {quantity}</Typography>;
    };

    const renderItemView = () => {
        if (item.quantity > 0) {
            return (
                <Grid>
                    <Typography variant="body2">
                        Price: {item.displayPrice}
                    </Typography>
                    {renderQuantity(item.quantity)}
                    <Typography variant="body2">
                        In Cart: {cartItem.quantity}
                    </Typography>
                </Grid>
            );
        } else {
            return (
                <Grid>
                    <Typography variant="body2">Sold out!</Typography>
                </Grid>
            );
        }
    };

    const renderButtonStatus = () => {
        if (cartItem.quantity > 0) {
            return (
                <Button
                    onClick={() =>
                        dispatch(
                            removeFromCart(
                                items,
                                item,
                                cart,
                                totalCost,
                                totalCostDisplay
                            )
                        )
                    }
                >
                    <RemoveIcon />
                </Button>
            );
        } else {
            return (
                <Button
                    disabled
                    onClick={() =>
                        dispatch(
                            removeFromCart(
                                items,
                                item,
                                cart,
                                totalCost,
                                totalCostDisplay
                            )
                        )
                    }
                >
                    <RemoveIcon />
                </Button>
            );
        }
    };
    return (
        <WrappedComponent
            renderImage={renderImage}
            renderItemView={renderItemView}
            renderButtonStatus={renderButtonStatus}
            items={items}
            item={item}
            cart={cart}
            totalCost={totalCost}
        />
    );
};

export default withItemsForSale;
