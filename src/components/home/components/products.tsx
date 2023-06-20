import { useContext } from "react";
import { ProductsContext } from "../../../contexts/home";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import {ColumnPlaceHolder} from './common/placeHolders'



export default function Component(){
    const {products} = useContext(ProductsContext);
    return (
        <Box sx={{minWidth: 275, display: 'flex', flexDirection: 'column'}}>
            {(products && products.length > 0 && <Box sx={{padding: '5px'}}>
                {products && products.map((product, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                <Typography variant={'h6'} sx={{fontWeight: "300"}}>
                                    {product.productName} <span style={{fontWeight: "bold"}}> R{product.productRate} </span>
                                </Typography>
                            </li>
                        </ul>
                    )
                })}
            </Box>) || <ColumnPlaceHolder />}
        </Box>

    );
}