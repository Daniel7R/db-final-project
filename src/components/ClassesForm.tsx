import React, { useState, useEffect } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Select
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

import Styles from "@styles/components/Forms.module.scss"

interface Clases {
    id_profesor: string,
    id_sede: string
    horario_inicio: string
    horario_fin: string
    nombre_clase: string
}

interface Profe {
    id_profesor: string,
    nombre: string,
    apellido: string,
    edad: number
}

const ClassesForm = () => {

    const [profesores, setProfesores] = useState<Profe[]>([])
    const [sedes, setSedes] = useState<Sedes[]>([])
    const [fields, setFields] = useState<Clases>({
        id_profesor: '',
        id_sede: '',
        horario_inicio: '',
        horario_fin: '',
        nombre_clase: ''
    });


    const isProfeError = fields.id_sede === ''
    const isSedeError = fields.id_profesor === ''
    const isHorarioInicioError = fields.horario_inicio === ''
    const isHorarioFinError = fields.horario_fin === ''
    const isNombreError = fields.nombre_clase === ''

    useEffect(() => {
        setProfesores([]);
        setSedes([]);
        (async () => {
            await fetch(`${process.env.NEXT_PUBLIC_API}/teachers`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => setProfesores(response.data))
                .catch(e => console.log(e))
        })();
        (async () => {
            await fetch(`${process.env.NEXT_PUBLIC_API}/sedes`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => setSedes(response.data))
                .catch(e => console.log(e))
        })();
    }, [])

    const handleTeacherSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFields({
            ...fields,
            id_profesor: e.target.value
        })
    }

    const handleSedeSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFields({
            ...fields,
            id_sede: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();

        data.append("id_profesor", fields.id_profesor)
        data.append("id_sede", fields.id_sede)
        data.append("horario_inicio", fields.horario_inicio)
        data.append("horario_fin", fields.horario_fin)
        data.append("nombre_clase", fields.nombre_clase)

        await fetch(`${process.env.NEXT_PUBLIC_API}/classes`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            body: data
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.log(err))

    }

    return (
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <form className={Styles.formTeachers} onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
                <h2 className={Styles.form_title} style={{ textAlign: "center" }}>Programar Clase</h2>
                <div className={Styles.fields_container} style={{ margin: "0 auto" }}>
                    <FormControl isRequired >
                        <FormLabel>Profesor</FormLabel>
                        <Select placeholder='Selecciona un profesor' onChange={handleTeacherSelection}>
                            {
                                profesores.length > 0 && profesores.map((profesor, i) => {
                                    return (
                                        <option key={i} value={profesor?.id_profesor}>{profesor?.nombre} {profesor?.apellido}</option>
                                    )
                                })
                            }
                        </Select>
                        {isProfeError && <FormErrorMessage>El profesor es requerido</FormErrorMessage>}
                    </FormControl>

                    <FormControl isRequired >
                        <FormLabel>Sede</FormLabel>
                        <Select placeholder='Selecciona una especialidad' onChange={handleSedeSelection}>
                            {
                                sedes.map((sede, i) => {
                                    return (
                                        <option key={i} value={sede?.id_sede}>{sede?.nombre}, {sede?.ciudad}</option>
                                    )
                                })
                            }
                        </Select>
                        {isSedeError && <FormErrorMessage>La especialidad es requerida</FormErrorMessage>}
                    </FormControl>

                    <FormControl isRequired >
                        <FormLabel>Horario de inicio</FormLabel>
                        <Input type={"datetime-local"} onChange={(e) => setFields({ ...fields, horario_inicio: e.target.value })} />
                        {isHorarioInicioError && <FormErrorMessage>La especialidad es requerida</FormErrorMessage>}
                    </FormControl>

                    <FormControl isRequired >
                        <FormLabel>Horario de finalización</FormLabel>
                        <Input type={"datetime-local"} onChange={(e) => setFields({ ...fields, horario_fin: e.target.value })} />
                        {isHorarioFinError && <FormErrorMessage>La especialidad es requerida</FormErrorMessage>}
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Nombre de la clase</FormLabel>
                        <Input type={"text"} onChange={(e) => setFields({ ...fields, nombre_clase: e.target.value })} />
                        {isNombreError && <FormErrorMessage>La especialidad es requerida</FormErrorMessage>}
                    </FormControl>
                </div>
                <div style={{ "width": "100%", textAlign: "center" }}>
                    <Button type="submit" size={"lg"} variant={"outline"}><PlusSquareIcon /> Agregar</Button>
                </div>
            </form>
        </div>
    )
}

export { ClassesForm }