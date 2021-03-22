import { TableCell, TableRow } from "@material-ui/core";
import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = ({ page, rowsPerPage }) => {
    const items = useSelector((state) => state.store.items);
    const cart = useSelector((state) => state.store.cart);

    return [...items.keys()]
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((item, i) => {
            return (
                <TableRow key={i} style={{ display: "flex", flexWrap: "wrap" }}>
                    <TableCell>
                        <Item
                            items={items}
                            cart={cart}
                            cartItem={cart.get(item)}
                            item={items.get(item)}
                        />
                    </TableCell>
                </TableRow>
            );
        });
};

export default ItemList;
