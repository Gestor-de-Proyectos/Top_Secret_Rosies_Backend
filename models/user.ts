import { Schema, model } from 'mongoose';
import { Enum_Rol } from './enums';

const userSchema = new Schema ({
    correo: {
        type: String,
        required: true,
      },
      identificacion: {
        type: String,
        required: true,
        unique: true,
      },
      nombre: {
        type: String,
        required: true,
      },
      apellido: {
        type: String,
        required: true,
      },
      rol: {
        type: String,
        required: true,
        enum: Enum_Rol,
      },
})

const UserModel = model('User', userSchema);

export { UserModel };