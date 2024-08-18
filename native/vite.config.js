
const defineConfig = require("vite").defineConfig;
module.exports = defineConfig({
    root:"./src",
   build:{
    outDir:'../dist',
    emptyOutDir:true
   },
   publicDir:"./../public"
})