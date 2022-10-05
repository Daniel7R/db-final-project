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



const EspecialidadesProfesorForm = () => {
    const [profesores, setProfesores] = useState<Profesores[]>([])
    const [especialidades, setEspecialidades] = useState<Especialidades[]>([])
    const [fields, setFields] = useState<FieldsEspecialidadesProfesores>({
        id_profesor: '',
        id_especialidad: ''
    });

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

    useEffect(() => {

    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting");
    }

    return (
        <>
            <form className={Styles.formTeachers} onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
                <h2 className={Styles.form_title}>Especialidad Profesor</h2>
                <FormControl isRequired >
                    <FormLabel>Profesor</FormLabel>
                    <Select placeholder='Selecciona un profesor' onChange={handleTeacherSelection}>
                        {
                            profesores.map((profesor, i) => {
                                return (
                                    <option key={i} value={profesor?.id_profesor}>{profesor?.nombre}</option>
                                )
                            })
                        }
                    </Select>
                    {isProfeError && <FormErrorMessage>El profesor es requerido</FormErrorMessage>}
                </FormControl>
                <FormControl isRequired >
                    <FormLabel>Especialidad</FormLabel>
                    <Select placeholder='Selecciona un profesor' onChange={handleTeacherSelection}>
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
                <Button type="submit" variant={"outline"}><PlusSquareIcon /> Agregar</Button>
            </form>
        </>
    );
}

export { EspecialidadesProfesorForm }