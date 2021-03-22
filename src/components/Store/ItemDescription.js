import { Grid, Typography } from "@material-ui/core";

const ItemDescription = ({ item, cartItem }) => {
    if (item.quantity > 0) {
        return (
            <Grid>
                <Typography style={{color: "rgb(186,134,34"}}variant="h6">{item.label}</Typography>
                <Typography variant="body2">
                    Available: {item.quantity}
                </Typography>
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

export default ItemDescription;
