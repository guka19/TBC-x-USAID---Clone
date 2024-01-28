https://www.tbcacademy.ge/usaid - clone made using html, scss and  javascript

structure of the project :
     root-directory : in the root directory we have the package.json and package-lock.json for the npx packages,  node-modules where our packages are installed, README.md file for the instructions of the project  and the src folder where projects main files go (html, scss, sss, js, assets);

used npm packages: 
    live-server - for opening the project in the local server 
    sass - for compiling scss

running the app: 

for running the app you can either open the index.html from the src folder directly or you can use live-server library from the npm, this way you can also manipulate scss:

** should have npm installed on your system
** should have npx installed on your system

1. clone the repository
2. open the root folder of the application
3. run "npm install" or "npm i"
4. while being in the root folder of the application run "npx live-server src/" 

** For the scss manipulation you should run the sass compiler 
while being in the root directory run "npx sass -w src/styles.scss src/styles.css"

***** sometimes live server library have problems with opening localhost due the lack of permissions on some ports, if this happens suggest to directly open the 
index.html or use code-editor, IDE live server tools.