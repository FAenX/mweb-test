import { useContext } from "react";
import { ProductsContext } from "../../../contexts/home";
import { Box } from "@mui/system";
import { List, ListItem } from "@mui/material";



export default function Component(){
    const {products} = useContext(ProductsContext);
    return (
        <Box margin={'10px'} sx={{minWidth: 275, display: 'flex', justifyContent: '', flexDirection: 'column', border: "1px solid black"}}>
            <Box sx={{border: "1px solid black", margin: '5px', padding: '5px'}}>
                {products && products.map((product, index) => {
                    return (
                        <List key={index} >
                            <ListItem>{product.productName}</ListItem>
                        </List>
                    )
                })}
            </Box>
        </Box>

    );
}