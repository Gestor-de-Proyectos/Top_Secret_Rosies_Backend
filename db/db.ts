import { connect } from 'mongoose';
// const { connect } = require('mongoose');

const conectarBD = async () => {
  return await connect(
    'mongodb+srv://bethsy:793722@topsecretrosies.8iwmh.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;