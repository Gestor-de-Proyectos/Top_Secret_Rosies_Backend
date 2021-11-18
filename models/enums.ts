enum Enum_Rol {
    estudiante = 'Estudiante',
    lider = 'Líder',
    administrador = 'Administrador',
  }
    
  enum Enum_EstadoUsuario {
    Pendiente = 'Pendiente',
    Autorizado = 'Autorizado',
    No_Autorizado = 'No_Autorizado',
  }

  enum Enum_EstadoProyecto {
    activo = 'Activo',
    inactivo = 'Inactivo',
  }

  enum Enum_FaseProyecto {
    iniciado = 'Iniciado',
    desarrollo = 'En Desarrollo',
    terminado = 'Terminado',
    nula = '',
  }

  enum Enum_TipoObjetivo {
    general = 'General',
    especifico = 'Especifico',
  }

  enum Enum_EstadoInscripcion {
    aceptada = 'Aceptada',
    rechazada = 'Rechazada',
  }
  
  export {
    Enum_Rol,
    Enum_EstadoUsuario,
    Enum_EstadoProyecto,
    Enum_EstadoInscripcion,
    Enum_FaseProyecto,
    Enum_TipoObjetivo
  };