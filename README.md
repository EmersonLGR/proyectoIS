# proyectoIS

comandos para posibles errores

* Frontend

  - Si al ejecutar el comando yarn run dev en el frontend aparece este mensaje (warning ../../../package.json: No license field
$ next dev
/bin/sh: next: command not found
error Command failed with exit code 127.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.), favor ejecutar el siguiente comando $ yarn add next@latest react@latest react-dom@latest eslint-config-next@latest en la carpeta del frontend

* Backend 

  - si al ejecutar el backend aparece un mensaje de app crashed ejecutar el siguiente comando $ npm install express --save
