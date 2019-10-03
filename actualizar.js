const request=require('request');
const api_url='https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

function actualizarAutor(nombre,apellido,nacionalidad,biografia,genero,edad){
  const json = {
      "name":nombre,
      "last_name":apellido,
      "nacionalidad":nacionalidad,
      "biography":biografia,
      "gender":genero,
      "age":edad
    }

    const promesa=new Promise((resolve,reject)=>{
        request.put(api_url+"3177/",{form:json},(err,res,body)=>{
                resolve(JSON.parse(body));
            reject(err);
            });
    });
    promesa
    .then(respuesta=>{
        //console.log('Todo bien')
        console.log(respuesta)
    })
    .catch(error=>{
        //console.log('Hubo un error')
        console.log(error);
    })
}

actualizarAutor("Geovanny","Martinez","USA","Java Developer","M",21)
