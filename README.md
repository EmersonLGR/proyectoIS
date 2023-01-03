# proyectoIS

comandos para posibles errores

* Frontend

  - Si al ejecutar el comando yarn run dev en el frontend aparece este mensaje (warning ../../../package.json: No license field
$ next dev
/bin/sh: next: command not found
error Command failed with exit code 127.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.), favor ejecutar el siguiente comando 

        $ yarn add next@latest react@latest react-dom@latest eslint-config-next@latest 

en la carpeta del frontend


* Backend 

  - si al ejecutar el backend aparece un mensaje de app crashed ejecutar el siguiente comando 
      
        $ npm install express --save


* EJECUCION LOCAL

  BACKEND .env
      
      PORT = 3001
      DB = mongodb://thignq:pLwNOTPPWAIQclfV@ac-q0xykyq-shard-00-00.s3fgkvd.mongodb.net:27017,ac-q0xykyq-shard-00-01.s3fgkvd.mongodb.net:27017,ac-    q0xykyq-       shard-00-02.s3fgkvd.mongodb.net:27017/?ssl=true&replicaSet=atlas-11e8j0-shard-0&authSource=admin&retryWrites=true&w=majority
      email = asamblea.notificacion@gmail.com
      email_password = rczdyxklytnyeqey
      
  FRONTEND .env
  
      SERVIDOR = http://localhost:3001/api
      
* EJECUCION SERVIDOR

  BACKEND .env
      
      PORT = 80
      DB = mongodb://thignq:pLwNOTPPWAIQclfV@ac-q0xykyq-shard-00-00.s3fgkvd.mongodb.net:27017,ac-q0xykyq-shard-00-01.s3fgkvd.mongodb.net:27017,ac-    q0xykyq-       shard-00-02.s3fgkvd.mongodb.net:27017/?ssl=true&replicaSet=atlas-11e8j0-shard-0&authSource=admin&retryWrites=true&w=majority
      email = asamblea.notificacion@gmail.com
      email_password = rczdyxklytnyeqey
      
  FRONTEND .env
  
      SERVIDOR = http://146.83.198.35:1170/api
