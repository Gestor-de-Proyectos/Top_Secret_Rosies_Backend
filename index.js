import conectarBD from "./db/db";
import { Enum_Rol } from "./models/enums";
import { UserModel } from "./models/user";

const main = async () => {
    await conectarBD();

    await UserModel.create({
        correo:"yadira.h96@gmail.com",
        identificacion:"1234",
        nombre:"Yadira",
        apellido:"Henao",
        rol: Enum_Rol.estudiante
    })
    .then((u) => {
        console.log('usuario creado', u);        
    })
    .catch ((e) => {
        console.error('Error creando el usuario', e);
    });
};

main();