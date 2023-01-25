/* */
const express = requiere('express')
/*Guaradar a la variable express para usar el contenido */
const app = express()
/*creacion del puerto */
/*indicar en que puerto para que se pueda visualizar en el navegador*/
const port=3000

/*Este eslach es para que salga principal */
/*res mostrar en pantalla y req para cogerlo a los usuarios */
app.get("/", (req,res) =>{
  /*res lo utilizamos para visualizar el mensaje en el navegador */
  res.send("Gracias profe Moises!")
})

/*el navegador sabe que puerto vamos a tomar y va a salir por consola  */
app.listen(port,()=>{
  console.log("Mi puerto es " + port)
})



