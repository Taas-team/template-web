import React from "react";
import {ProductCard} from "../itemCard";
import {Flex} from "@chakra-ui/react";

export const itemList :React.FC<HTMLElement> = (props)=>{
    return(
        <Flex width={25}>
            <ProductCard/>
        </Flex>

    )
}