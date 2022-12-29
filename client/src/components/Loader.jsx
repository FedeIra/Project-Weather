import React from 'react';
import { Box, Center, Spinner } from '@chakra-ui/react';
import '../hoja-de-estilos/Loader.css';

export default function LoaderDetails() {
  return (
    <Box className="loader_box">
      <Center>
        <Spinner
          className="spinner"
          thickness="4px"
          speed="0.65s"
          emptyColor="white"
          color="blue.600"
          size="xl"
        />
      </Center>
    </Box>
  );
}
