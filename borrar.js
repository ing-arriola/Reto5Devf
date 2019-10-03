const request=require('request');
const api_url='https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

function borrarAutor(idAuthor){
    const promesa=new Promise((resolve,reject)=>{
        request.delete(api_url+idAuthor+"/",(err,res,body)=>{
                resolve(body);
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

borrarAutor(3178)
