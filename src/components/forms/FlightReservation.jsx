import { Input } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const FlightReservation = () => {

  return (
    <div>
      <h1>Flight Reservation</h1>
      <ChakraProvider>
        <Input variant='filled' placeholder='Filled' />
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          />
      </ChakraProvider>
    </div>
  )}

export default FlightReservation