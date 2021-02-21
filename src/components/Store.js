import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    makeStyles,
} from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../helpers/weapons.json";
import { loadStore } from "../store/web-store/store.actions";
import Bids from "./Bids";
import ItemForSale from "./ItemForSale";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: "#333",
        color: "#fff",
        boxShadow: "0 8px 16px 0 rgb(0,0,0)",
    },
}));

const Store = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const items = useSelector((state) => state.store.items);
    const cart = useSelector((state) => state.store.cart);
    const totalCost = useSelector((state) => state.store.totalCost);

    useEffect(() => {
        dispatch(loadStore(data));
    }, []);

    return (
        <Fragment>
            <Grid>
                <Card className={classes.card}>
                    <CardHeader title={"Black Market"} />
                    <Divider light />
                    <Bids />
                    <CardContent>
                        <Grid justify="center" container>
                            {items !== undefined
                                ? [...items.keys()].map((item) => {
                                      return (
                                          <ItemForSale
                                              items={items}
                                              cart={cart}
                                              cartItem={cart.get(item)}
                                              item={items.get(item)}
                                              totalCost={totalCost}
                                          />
                                      );
                                  })
                                : null}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Fragment>
    );
};

export default Store;
