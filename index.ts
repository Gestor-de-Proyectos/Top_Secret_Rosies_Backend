import conectarBD from "./db/db";
import { Enum_Rol } from "./models/enums";
import { UserModel } from "./models/user";

const main = async () => {
    await conectarBD();

    await UserModel.create({
        correo:"bethsyfalcon@gmail.com",
        identificacion:"5678",
        nombre:"Bethsy",
        apellido:"Falcon",
        rol: Enum_Rol.lider
    })
    .then((u) => {
        console.log('usuario creado', u);        
    })
    .catch ((e) => {
        console.error('Error creando el usuario', e);
    });
};

main();