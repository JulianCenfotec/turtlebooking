import {
    Input,
    NumberInput,
    NumberInputField,
    Textarea,
    FormControl,
    FormLabel,
    Button,
    Box
} from '@chakra-ui/react'

const HotelReservation = () => {
    return (
        <Box p={4}>
            <h1>Hotel Reservation</h1>
            <FormControl id="check-in-date" my={4}>
                <FormLabel>Check-in date</FormLabel>
                <Input type="date" />
            </FormControl>

            <FormControl id="check-out-date" my={4}>
                <FormLabel>Check-out date</FormLabel>
                <Input type="date" />
            </FormControl>

            <FormControl id="number-of-people" my={4}>
                <FormLabel>Number of people</FormLabel>
                <NumberInput min={1}>
                    <NumberInputField />
                </NumberInput>
            </FormControl>

            <FormControl id="room-preferences" my={4}>
                <FormLabel>Room preferences</FormLabel>
                <Textarea placeholder="Ingresa aqui tus preferencias para la habitacion" />
            </FormControl>
            <Button colorScheme="blue" mt={4}>Reserve</Button>
        </Box>
    )
}

export default HotelReservation