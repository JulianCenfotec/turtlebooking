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

const ActivyReservation = () => {

  return (
    <div>
      <ChakraProvider>
        <Stack spacing={3}>
        <FormControl isRequired>
        <FormLabel>Date and time</FormLabel>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          colorScheme='green'
          />
          </FormControl>
          <FormControl >
            <FormLabel>Number of participants</FormLabel>
            <NumberInput defaultValue={1} min={1} max={200000}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Preferences</FormLabel>
            <Textarea placeholder="Dress code, minimun age..." />
          </FormControl>
          <Button colorScheme='blue'>Reserve</Button>
          </Stack>
      </ChakraProvider>
    </div>
  )}

export default ActivyReservation