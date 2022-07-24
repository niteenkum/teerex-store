import { useContext, useState } from "react"
import { FilterContext } from "../App";
import { IProduct } from "../type"

export default function useStoreItem() {

    const { setColor, setClothType, setItem, setTempItem} = useContext(FilterContext);
    const [product, setProduct] = useState<IProduct[]>([]);

    // This function will get all the data from the api and set it to the state
    const handleGetItem = async () => {
        const response = await fetch(" https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
        const data: IProduct[] = await response.json()
        setItem(data);
        setProduct(data);
        setTempItem(data);
        // Fetching and filtering the data based on the color and cloth type
        setColor( data.map(
            (item: IProduct) => {
                return item.color
                }
        ));
        setClothType( data.map(
            (item: IProduct) => {
                return item.type
                }
        ));
    }



    return {
        handleGetItem,
        product,
    }
}