import React, { useEffect, useState } from 'react'
import { Box, Badge, Center, Stack } from '@chakra-ui/react'

export const ProfesoresInfo = () => {

    const [profesoresEspecialidades, setProfesoresEspecialidades] = useState<ProfesoresEspecialidades[]>([]);

    useEffect(() => {
        (async () => {
            await fetch(`${process.env.NEXT_PUBLIC_API}/teacher-speciality`, {
                method: "GET"
            })
                .then(r => r.json())
                .then(response => setProfesoresEspecialidades(response.data))
                .catch(e => console.error(e));
        })();
    }, [])


    return (
        <>
            <Box w="100%" pt={10} style={{ marginBottom: "250px" }} >
                {
                    profesoresEspecialidades.length > 0 && (
                        profesoresEspecialidades.map((profesor) => {
                            return (
                                <Center key={profesor.identificacion} style={{ fontSize: "2.5rem", display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                                    <Box>
                                        <h1 style={{ marginBottom: "20px" }}>{profesor?.nombre_profesor} {profesor?.apellido_profesor} - {profesor?.identificacion}</h1>
                                    </Box>
                                    <Stack direction={"row"} w="100%">
                                        {
                                            profesor?.especialidades.map((especialidad, i) => (
                                                <Badge style={{ fontSize: "1.6rem" }} colorScheme={"telegram"} key={i}>{especialidad}</Badge>
                                            ))
                                        }
                                    </Stack>
                                </Center>
                            )
                        })
                    )
                }
            </Box>
        </>
    )
}
