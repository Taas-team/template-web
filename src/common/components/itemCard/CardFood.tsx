import React from "react";

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import {itemCard} from "../../../types/proptypes/itemCard";
import {AddNewCommand} from "../AddCommand";
import {itemList} from "../Item";

const IMAGE =
    'https://th.bing.com/th/id/R.d1408c82b62294f0ab44ed2b4cc172f7?rik=jBirlT4ETc3MLA&pid=ImgRaw&r=0';

export const ProductCard : React.FC<itemCard> = (props) => {
    return (
        <Center py={12} width={'300px'}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'1xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${IMAGE})`,
                        filter: 'blur(10px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(15px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={IMAGE}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                       Entrée
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        Riz cantonnais
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            $10
                        </Text>
                        <AddNewCommand/>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}