import { useContext } from "react";
import { ProductsContext } from "../../../contexts/home";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";



export default function Component(){
    const {products} = useContext(ProductsContext);
    return (
        <Box margin={'10px'} sx={{minWidth: 275, display: 'flex', justifyContent: '', flexDirection: 'column'}}>
            <Box sx={{padding: '5px'}}>
                {products && products.map((product, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                <Typography variant={'h6'}>{product.productName}</Typography>
                            </li>
                        </ul>
                    )
                })}
            </Box>
        </Box>

    );
}