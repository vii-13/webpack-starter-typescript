import db from './firebase/config';

const usuario = {
    nombre : 'Miguel',
    activo : false,
    nacimiento : 0,
}
const usuariosRef = db.collection('usuarios');

// insertando datos----
// db.collection('usuarios')
// .add(usuario)
// .then(docRef => {
//     console.log(docRef.delete() )
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
usuariosRef
    .onSnapshot(snap => {

        const usuarios: any[] = [];

        snap.forEach(snapHijo => {
            usuarios.push({
                id:snapHijo.id,
                ...snapHijo.data()
            })   
        });
        console.log(usuarios)
   })