import React, { useState } from 'react';
import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header/Header';
import ActivityReservation from './components/forms/ActivityReservation';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <ChakraProvider>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Hotel</Tab>
          <Tab>Flight</Tab>
          <Tab>Restaurant</Tab>
          <Tab>Activity</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Hotel</p>
          </TabPanel>
          <TabPanel>
            <p>Flight</p>
          </TabPanel>
          <TabPanel>
            <p>Restaurant</p>
          </TabPanel>
          <TabPanel>
            <ActivityReservation/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
