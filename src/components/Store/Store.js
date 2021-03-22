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
    TableContainer,
    TablePagination,
} from "@material-ui/core";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
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
    const items = useSelector((state) => state.store.items);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
                                    justifyContent: "center",
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
                            rowsPerPage={4}
                            rowsPerPageOptions={[]}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            style={{ flexGrow: 10, color: "#fff" }}
                        />
                        <Grid className="button-bar">
                            <Button className="button">Purchase</Button>
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
