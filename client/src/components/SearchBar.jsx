import React, { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
    document.getElementById('input_search').value = '';
  };

  return (
    <Box>
      <form onSubmit={handleSearch}>
        <Flex>
          <InputGroup
            style={{
              height: '50px',
            }}
            _focus={{
              backgroundColor: ' #5b7685',
            }}
          >
            <InputLeftElement
              children={<SearchIcon color="white" w={22} h={25} />}
              color={'white'}
              cursor={'pointer'}
              onClick={handleSearch}
              style={{
                top: '0',
                bottom: '0',
                margin: '10px',
              }}
            />
            <Input
              type="text"
              placeholder="Search..."
              id="input_search"
              _placeholder={{
                color: 'white',
              }}
              color={'white'}
              bg={'transparent'}
              s
              padding={'12px'}
              paddingLeft={'40px'}
              onChange={(e) => setSearch(e.target.value)}
              _focus={{
                backgroundColor: ' #5b7685',
              }}
            />
          </InputGroup>
        </Flex>
      </form>
    </Box>
  );
};

export default SearchBar;
