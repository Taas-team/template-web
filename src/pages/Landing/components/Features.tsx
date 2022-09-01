import { ReactNode } from 'react';
import {
    Stack,
    Container,
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid, useColorModeValue, useColorMode,
} from '@chakra-ui/react';

export default function Features() {
    return (
        <Box bg={useColorModeValue('gray.100', 'blackAlpha.100')} position={'relative'} >
            <Flex

                zIndex={0}
                display={{ base: 'none' }}
                backgroundSize={'cover'}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                position={'absolute'}
                insetY={0}
                right={0}>
                <Flex
                    bgGradient={'linear(to-r, gray.800 10%, transparent)'}
                />
            </Flex>
            <Container maxW={'7xl'} zIndex={10} position={'relative'}>
                <Stack direction={{ base: 'column', lg: 'row' }}>
                    <Stack
                        justify={{ lg: 'center' }}
                        py={{ base: 1, md: 2, xl: 5 }}>
                        <Box mb={{ base: 2, md: 20 }}>
                            <Text
                                fontFamily={'heading'}
                                fontWeight={700}
                                textTransform={'uppercase'}
                                mb={3}
                                fontSize={'xl'}
                                >
                               E-Sakafo Restaurant
                            </Text>
                            <Heading
                                mb={5}
                                fontSize={{ base: '2xl', md: '4xl' }}>
                                #1 des restaurants en ligne à Madagascar
                            </Heading>
                            <Text fontSize={'xl'} >
                                The NewLife™ technology allows you to monitor your crops and get
                                complete insights at real time. The proprietary
                                software/hardware ecosystem prevents your plants from getting
                                neglected.
                            </Text>
                        </Box>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {stats.map((stat) => (
                                <Box key={stat.title}>
                                    <Text
                                        fontFamily={'heading'}
                                        fontSize={'3xl'}
                                        mb={3}>
                                        {stat.title}
                                    </Text>
                                    <Text fontSize={'xl'} >
                                        {stat.content}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Stack>
                    <Flex flex={1} />
                </Stack>
            </Container>
        </Box>
    );
}

const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} >
        {children}
    </Text>
);

const stats = [
    {
        title: '100+',
        content: (
            <>
                <StatsText>Personnel de service</StatsText> Notre service compte +de 100 personnel pour vous servir à temps
            </>
        ),
    },
    {
        title: '24/7',
        content: (
            <>
                <StatsText>Une journée toute entière</StatsText>Nous sommes disponible à votre envie,à  votre horaire
            </>
        ),
    },
    {
        title: '13%',
        content: (
            <>
                <StatsText>Des</StatsText> in North America has chosen NewLife™ as
                their management solution
            </>
        ),
    },
    {
        title: '250M+',
        content: (
            <>
                <StatsText>Plants</StatsText> currently connected and monitored by the
                NewLife™ software
            </>
        ),
    },
];