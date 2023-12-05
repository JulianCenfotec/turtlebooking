import {
    Input,
    NumberInput,
    NumberInputField,
    Textarea,
    FormControl,
    FormLabel,
    Box
} from '@chakra-ui/react'

const HotelReservation = () => {
    return (
        <Box p={4}>
            <h1>Hotel Reservation</h1>
            <FormControl id="check-in-date" my={4}>
                <FormLabel>Fecha de check-in</FormLabel>
                <Input type="date" />
            </FormControl>

            <FormControl id="check-out-date" my={4}>
                <FormLabel>Fecha de check-out</FormLabel>
                <Input type="date" />
            </FormControl>

            <FormControl id="number-of-people" my={4}>
                <FormLabel>Numero de personas</FormLabel>
                <NumberInput min={1}>
                    <NumberInputField />
                </NumberInput>
            </FormControl>

            <FormControl id="room-preferences" my={4}>
                <FormLabel>Preferencias de habitacion</FormLabel>
                <Textarea placeholder="Ingresa aqui tus preferencias para la habitacion" />
            </FormControl>
        </Box>
    )
}

export default HotelReservation