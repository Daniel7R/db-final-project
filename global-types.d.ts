interface Profesores {
  id_profesor: string;
  nombre: string;
}

interface Especialidades {
  id_especialidad: string;
  nombre: string;
}

interface Sedes {
  id_sede: string;
  nombre: string;
  ciudad: string;
}

interface ProfesoresEspecialidades {
  identificacion: number;
  nombre_profesor: string;
  apellido_profesor: string;
  especialidades: string[];
}
