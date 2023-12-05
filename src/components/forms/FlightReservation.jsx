import { Input,Stack } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

const FlightReservation = () => {

  return (
    <div>
      <h1>Flight Reservation</h1>
      <ChakraProvider>
        <Stack spacing={3}>
        <FormControl isRequired>
        <FormLabel>Origin</FormLabel>
        <Input 
          variant='outline' 
          placeholder='Origin'
          colorScheme='green' />
        </FormControl>
        <FormControl isRequired>
        <FormLabel>Destino</FormLabel>
        <Input 
          variant='outline' 
          placeholder='Destino'
          colorScheme='green' />
          </FormControl>
          
        <FormControl isRequired>
        <FormLabel>Date and time</FormLabel>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          colorScheme='green'
          />
          </FormControl>
          </Stack>
      </ChakraProvider>
    </div>
  )}

export default FlightReservation