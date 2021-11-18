import conectarBD from "./db/db";
import { Enum_EstadoUsuario, Enum_TipoObjetivo, Enum_Rol } from "./models/enums";
import { UserModel } from "./models/user";
import { ProjectModel } from "./models/project";

const main = async () => {
    await conectarBD();

    const usuarioInicial = await UserModel.create({
        nombre: 'Yadira',
        apellido: 'Henao',
        correo: 'yadira.h96@gmail.com',
        identificacion: '10371111',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.Autorizado,
      });

      const proyectoCreado = await ProjectModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date('2021/12/18'),
        fechaFin: new Date('2022/12/18'),
        presupuesto: 120000,
        lider: usuarioInicial._id,
        objetivos: [
          { descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.general },
          { descripcion: 'Este es el objetivo especifico 1', tipo: Enum_TipoObjetivo.especifico },
          { descripcion: 'Este es el objetivo especifico 2', tipo: Enum_TipoObjetivo.especifico },
        ],
      });

      console.log('proyecto creado', proyectoCreado);
};

main();