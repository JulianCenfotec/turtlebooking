import {
  ChakraProvider,
  Input,
  Stack,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Button, 
  Textarea
} from '@chakra-ui/react'

const FlightReservation = () => {

  return (
    <div>
      <h1>Flight Reservation</h1>
      <ChakraProvider>
        <Stack spacing={3}>
        <FormControl isRequired>
        <FormLabel>From?</FormLabel>
        <Input 
          variant='outline' 
          placeholder='Origin'
          colorScheme='green' />
        </FormControl>
        <FormControl isRequired>
        <FormLabel>To?</FormLabel>
        <Input 
          variant='outline' 
          placeholder='Destination'
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
          <FormControl isRequired>
            <FormLabel>Number of passengers</FormLabel>
            <NumberInput defaultValue={1} min={1} max={5}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Details</FormLabel>
            <Textarea placeholder="Seat, loggage, food..." />
          </FormControl>
          <Button colorScheme='blue'>Reserve</Button>
          </Stack>
      </ChakraProvider>
    </div>
  )}

export default FlightReservation