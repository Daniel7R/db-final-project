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

interface FieldsEspecialidadesProfesores {
    id_profesor: string,
    id_especialidad: string
}

interface Profe {
    id_profesor: string,
    nombre: string,
    apellido: string,
    edad: number
}

const EspecialidadesProfesorForm = () => {
    const [profesores, setProfesores] = useState<Profe[]>([])
    const [especialidades, setEspecialidades] = useState<Especialidades[]>([])
    const [fields, setFields] = useState<FieldsEspecialidadesProfesores>({
        id_profesor: '',
        id_especialidad: ''
    });

    useEffect(() => {
        setProfesores([]);
        setEspecialidades([]);
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
            await fetch(`${process.env.NEXT_PUBLIC_API}/specialities`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => setEspecialidades(response.data))
                .catch(e => console.log(e))
        })();
    }, [])

    const handleTeacherSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFields({
            ...fields,
            id_profesor: e.target.value
        })
    }

    const handleSpecialitySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFields({
            ...fields,
            id_profesor: e.target.value
        })
    }

    const isProfeError = fields.id_especialidad === ''
    const isEspecialidadError = fields.id_profesor === ''

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();

        data.append("id_profesor", fields.id_profesor)
        data.append("id_especialidad", fields.id_especialidad)

        await fetch(`${process.env.NEXT_PUBLIC_API}/teacher-speciality`, {
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
    console.log(profesores)

    return (
        <>
            <form className={Styles.formTeachers} onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
                <h2 className={Styles.form_title}>Especialidad Profesor</h2>
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
                    <FormLabel>Especialidad</FormLabel>
                    <Select placeholder='Selecciona una especialidad' onChange={handleSpecialitySelection}>
                        {
                            especialidades.map((especialidad, i) => {
                                return (
                                    <option key={i} value={especialidad?.id_especialidad}>{especialidad?.nombre}</option>
                                )
                            })
                        }
                    </Select>
                    {isEspecialidadError && <FormErrorMessage>La especialidad es requerida</FormErrorMessage>}
                </FormControl>
                <div style={{ "width": "100%", textAlign: "center" }}>
                    <Button type="submit" size={"lg"} variant={"outline"}><PlusSquareIcon /> Agregar</Button>
                </div>
            </form>
        </>
    );
}

export { EspecialidadesProfesorForm }