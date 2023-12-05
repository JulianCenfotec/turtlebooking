import {
    Input,
    NumberInput,
    NumberInputField,
    Textarea,
    FormControl,
    FormLabel,
    Box
} from '@chakra-ui/react'

const RestaurantReservation = () => {
    return (
        <Box p={4}>
            <h1>Restaurant Reservation</h1>
            <FormControl id="date" my={4}>
                <FormLabel>Fecha de la reserva</FormLabel>
                <Input type="date" />
            </FormControl>

            <FormControl id="time" my={4}>
                <FormLabel>Hora de la reserva</FormLabel>
                <Input type="time" />
            </FormControl>

            <FormControl id="number-of-guests" my={4}>
                <FormLabel>Numero de comensales</FormLabel>
                <NumberInput min={1}>
                    <NumberInputField />
                </NumberInput>
            </FormControl>

            <FormControl id="special-requests" my={4}>
                <FormLabel>Preferencias dieteticas o solicitudes especiales</FormLabel>
                <Textarea placeholder="Ingresa aquí cualquier preferencia o solicitud especial" />
            </FormControl>
        </Box>
    )
}

export default RestaurantReservation
