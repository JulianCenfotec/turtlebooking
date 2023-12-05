
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ActivityReservation from '../forms/ActivityReservation';
import FlightReservation from '../forms/FlightReservation';
import HotelReservation from '../forms/HotelReservation';
import { ChakraProvider } from '@chakra-ui/react'

const Header = () => {
  return(
      <div>
      <ChakraProvider>
        <Tabs variant='soft-rounded' colorScheme='blue'>
          <TabList>
            <Tab>Hotel</Tab>
            <Tab>Flight</Tab>
            <Tab>Restaurant</Tab>
            <Tab>Activity</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <HotelReservation/>
            </TabPanel>
            <TabPanel>
              <FlightReservation/>
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
      </div>
)}

export default Header;