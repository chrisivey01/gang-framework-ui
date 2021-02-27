import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemForSale from "../components/ItemForSale";
import { loadStore } from "../store/web-store/store.actions";
import data from "../helpers/weapons.json";

const withStore = (WrappedComponent) => (props) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.store.items);
    const cart = useSelector((state) => state.store.cart);
    const totalCost = useSelector((state) => state.store.totalCost);

    useEffect(() => {
        dispatch(loadStore(data));
    }, []);

    const renderItemsForSale = () => {
        if (items) {
            return [...items.keys()].map((item, i) => {
                return (
                    <ItemForSale
                        key={i}
                        items={items}
                        cart={cart}
                        cartItem={cart.get(item)}
                        item={items.get(item)}
                        totalCost={totalCost}
                    />
                );
            });
        }
    };

    return (
        <WrappedComponent renderItemsForSale={renderItemsForSale} {...props} />
    );
};

export default withStore;
