import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    makeStyles,
} from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import data from "../../helpers/weapons.json";
import ItemsForSale from "./ItemsForSale";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: "#333",
        color: "#fff",
        boxShadow: "0 8px 16px 0 rgb(0,0,0)",
    },
}));

export default () => {
    const classes = useStyles();
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
        console.log(items);
    }, []);

    return (
        <Fragment>
            <Grid>
                <Card className={classes.card}>
                    <CardHeader title={"Black Market"} />
                    <Divider light />
                    <CardContent>
                        <Grid container spacing={6} wrap="wrap">
                            {items !== undefined
                                ? items.map((item) => {
                                      return <ItemsForSale item={item} />;
                                  })
                                : null}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Fragment>
    );
};
