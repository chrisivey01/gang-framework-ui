import {
    Card,
    CardContent,
    CardHeader,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@material-ui/core";
import { useState } from "react";
import gang from "../../helpers/gang.json";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        backgroundColor: "transparent",
        fontSize: 14,
        color: "rgb(227,227,227)",
        margin: 10,
        "& .MuiPaper-root": {
            height: "80%",
            position: "absolute",
        },
        "& .MuiCardContent-root": {
            height: "inherit",
            color: "rgb(227,227,227)",

            "& .MuiTableHead-root .MuiTableCell-root": {
                fontWeight: "bolder",
            },

            "& .MuiTableCell-root": {
                color: "rgb(227,227,227)",
            },

            "& .MuiTablePagination-root": {
                color: "rgb(227,227,227)",
            },
        },
        borderRadius: 10,
        boxShadow: "0 8px 16px 0 rgb(0,0,0)",
    },
}));

export default () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <Card className={classes.cardContainer}>
            <CardHeader />
            <CardContent className={classes.content}>
                <TableContainer>
                    <Table size={"small"}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">
                                    Phone Number
                                </TableCell>
                                <TableCell align="right">Rank</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? gang.slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage
                                  )
                                : gang
                            ).map((row) => (
                                <TableRow hover key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.char_name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.phone_number}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.gangRank}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={gang.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </CardContent>
        </Card>
    );
};

// export default () => {
//     const classes = useStyles();

//     const Title = ({ member }) => {
//         return (
//             <Typography className="header" align="center" variant="subtitle2">
//                 {member.char_name}
//             </Typography>
//         );
//     };

//     const GridRow = ({ member, index }) => {
//         return (
//             <Card className={classes.cardContainer} key={index}>
//                 <CardHeader component={Title} member={member} />
//                 <CardContent>
//                     <Typography>{member.current_gang}</Typography>
//                     <Typography>{member.phone_number}</Typography>
//                     <Typography>{member.gangRank}</Typography>
//                 </CardContent>
//             </Card>
//         );
//     };

//     return (
//         <Grid container>
//             <Grid container>
//                 {gang.map((member, i) => {
//                     return <GridRow member={member} key={i} />;
//                 })}
//             </Grid>
//         </Grid>
//     );
// const cell = (e, i) => {
//     console.log('hi', e)
// }

// const columns = [
//     { field: "char_name", headerName: "Name", width: 200 },
//     { field: "gangRank", headerName: "Rank", width: 100 },
//     { field: "phone_number", headerName: "Number", width: 150 },
// ];
// return (
//     <Card className={classes.cardContainer}>
//         <CardHeader title={gang[1].current_gang} />
//         <CardContent>
//             <DataGrid
//                 rows={gang}
//                 columns={columns}
//                 pageSize={5}
//                 pagination
//                 checkboxSelection
//                 onCellClick={(e, i) => cell(e,i)}
//             />
//         </CardContent>
//     </Card>
// );
// };
