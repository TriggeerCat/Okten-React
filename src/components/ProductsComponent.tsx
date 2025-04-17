import {useEffect, useState} from "react";
import {Product} from "../types/Product.ts";
import {ProductComponent} from "./ProductComponent.tsx";

const productsUrl = import.meta.env.VITE_APP_PRODUCTS;

export function ProductsComponent() {
    const [products, setProducts] = useState<Product[] | undefined>(undefined);

    const fetchProducts = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products);
    }

    useEffect(() => {
        fetchProducts(productsUrl).then();
    }, [])

    return (
        <div>
            {products?.map((value) => <ProductComponent product={value} key={value.id}/>)}
        </div>
    )
}