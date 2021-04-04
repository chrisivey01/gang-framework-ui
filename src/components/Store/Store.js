import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    makeStyles,
    Table,
    TableBody,
    TablePagination,
} from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchaseWeapons } from "../../store/web-store/store.actions";
import Bids from "./Bids";
import ItemList from "./ItemList.js";

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

        "& .button-bar": {
            display: "flex",
            alignItems: "center",
            flexGrow: 2,
        },
    },
}));

const Store = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const items = useSelector((state) => state.store.items);
    const cart = useSelector((state) => state.store.cart);
    const character = useSelector((state) => state.gang.character);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {}, [cart]);

    const renderTable = () => {
        if (items.size > 0) {
            return (
                <CardContent>
                    <Grid justify="center" container>
                        <Table>
                            <TableBody
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    paddingLeft: "100px",
                                }}
                            >
                                <ItemList
                                    rows={items}
                                    page={page}
                                    rowsPerPage={rowsPerPage}
                                />
                            </TableBody>
                        </Table>
                        <TablePagination
                            component="div"
                            count={items.size}
                            rowsPerPage={6}
                            rowsPerPageOptions={[]}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            style={{ flexGrow: 10, color: "#fff" }}
                        />
                        <Grid className="button-bar">
                            <Button
                                className="button"
                                onClick={() =>
                                    dispatch(
                                        purchaseWeapons(items, cart, character)
                                    )
                                }
                            >
                                Purchase
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            );
        } else {
            return <Fragment />;
        }
    };
    return (
        <Grid style={{ width: "100%" }}>
            <Card className={classes.card}>
                <CardHeader title={<Bids />} />
                <Divider className="divider" variant="middle" />
                {renderTable()}
            </Card>
        </Grid>
    );
};

export default Store;
