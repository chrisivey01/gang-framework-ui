import {
    Button,
    Card,
    CardContent,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import withItemsForSale from "../hoc/withItemsForSale";
import { addToCart } from "../store/web-store/store.actions";

const useStyles = makeStyles(() => ({
    item: {
        display: "flex",
        flexWrap: "wrap",
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
            height: 65,
            margin: "auto",
            objectFit: "contain",
        },
        "& .MuiButton-root": {
            color: "#fff",
        },
    },
}));

const ItemsForSale = ({
    items,
    item,
    cart,
    renderImage,
    renderItemView,
    renderButtonStatus,
    totalCost,
}) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.item}>
            {renderImage(item.name)}
            <CardContent className="content">
                <Grid>
                    <Typography gutterBottom variant="h5" component="h5">
                        {item.label}
                    </Typography>
                </Grid>
                {renderItemView()}
                <Grid>
                    <Button
                        onClick={() =>
                            dispatch(addToCart(items, item, cart, totalCost))
                        }
                    >
                        <AddIcon />
                    </Button>
                    {renderButtonStatus()}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default withItemsForSale(ItemsForSale);
