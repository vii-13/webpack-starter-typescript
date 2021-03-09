import db from './firebase/config';
import {retornaDocumentos} from './helpers/mostrar-documentos';

// const usuario = {
//     nombre : 'Melissa',
//     activo : true,
//     nacimiento : 0,
//     salario : 1800
// }
// const usuariosRef = db.collection('usuarios');

// insertando datos----
// db.collection('usuarios')
// .add(usuario)
// .then(docRef => {
//     console.log(docRef)
// })
// .catch(e => console.log('error', e))

// actualizando datos------
// update es solo para cambiar un campo -----
// usuariosRef.doc('Z69D5mBjiuxyiJ8kwyys')
// .update({
//     activo:true
// });

// set es destructivo ----
// usuariosRef.doc('Z69D5mBjiuxyiJ8kwyys')
// .set({
//     activo:true,
//     edad: 16
// });

// borrando datos----
// usuariosRef
//     .doc('Z69D5mBjiuxyiJ8kwyys')
//     .delete()
//     .then( () => console.log('borrado'))
//     .catch(e => console.log('error', e));

// seleccionando datos-------
// usuariosRef
//     .onSnapshot(retornaDocumentos)

// usuariosRef.get().then(retornaDocumentos);

// indices y clausula where-----------

// ¿where activo = true?
// usuariosRef.where('activo','==',true).get().then(retornaDocumentos);

// ¿where salario > 1800?
// usuariosRef.where('salario','>' ,1800,).get().then(retornaDocumentos);

// ¿where salario > 1800 and salario < 2500 where salario between 1800 and 2500?
// usuariosRef.where('salario','>=' ,1800)
//            .where('salario','<=' ,2500)
// .get().then(retornaDocumentos);

// ¿where salario > 1800 and salario and activo == true ?
// usuariosRef.where('salario','>=' ,1800)
//            .where('activo','==' ,true)
// .get().then(retornaDocumentos);



