const miFuncionTesteable = () => {
  console.log("Holo, soy una función");
  return true;
};

const miOtraFunctionTesteable = () => {
  return false;
};


// Importante agregar la función que se conectará con el dom desde javascript
// O no funcionará
if( document ) {
  document.getElementById('miBoton').addEventListener('click', miFuncionTesteable);
}

export const miFuncionTesteableExp = miFuncionTesteable;
export const miOtraFunctionTesteableExp = miOtraFunctionTesteable;
