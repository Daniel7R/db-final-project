import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

import Styles from "@styles/components/Forms.module.scss"

const SedesForm = () => {
  const [fields, setFields] = useState<{ nombre: string, ciudad: string }>({
    nombre: '',
    ciudad: ''
  });

  const isNameError = fields.nombre === ''
  const isCityError = fields.ciudad === ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", fields.nombre)
    data.append("city", fields.ciudad)

    await fetch(`${process.env.NEXT_PUBLIC_API}/sedes`, {
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
    <form className={Styles.formTeachers} onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
      <h2 className={Styles.form_title}>Sede</h2>
      <FormControl isRequired >
        <FormLabel>Nombre</FormLabel>
        <Input type={"text"} onChange={e => setFields({ ...fields, nombre: e.target.value })} />
        {isNameError && <FormErrorMessage>El nombre es requerido</FormErrorMessage>}
      </FormControl>
      <FormControl isRequired >
        <FormLabel>Ciudad</FormLabel>
        <Input type={"text"} onChange={e => setFields({ ...fields, ciudad: e.target.value })} />
        {isCityError === true && <FormErrorMessage>La ciudad es requerida</FormErrorMessage>}
      </FormControl>
      <div style={{ "width": "100%", textAlign: "center" }}>
        <Button type="submit" size={"lg"} variant={"outline"}><PlusSquareIcon /> Agregar</Button>
      </div>
    </form>
  );
};

export { SedesForm };
