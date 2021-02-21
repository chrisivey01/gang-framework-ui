import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    makeStyles,
} from "@material-ui/core";
import { Fragment } from "react";
import withStore from "../hoc/withStore.js";
import Bids from "./Bids";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: "#333",
        color: "#fff",
        boxShadow: "0 8px 16px 0 rgb(0,0,0)",

        "& .button": {
            backgroundColor: "#212121",
            color: "#fff",
        },

        "& .divider": {
            backgroundColor: "rgba(0, 0, 0, 0.52)",
        },
    },
}));

const Store = ({ renderItemsForSale }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid>
                <Card className={classes.card}>
                    <CardHeader title={<Bids />} />
                    <Divider className="divider" variant="middle" />
                    <CardContent>
                        <Grid justify="center" container>
                            {renderItemsForSale()}
                            <Grid container justify="flex-end">
                                <Button className="button">Purchase</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Fragment>
    );
};

export default withStore(Store);
