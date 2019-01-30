import { miFuncionTesteable, miOtraFunctionTesteable } from '../src/js/app';

const chai = require('chai');

describe('Mostrar como iniciar un proyecto', () => {
  it('Debería mostrar como hacer tests', () => {
    chai.assert.equal(miFuncionTesteable(), true);
  });
  it('Debería mostrar cómo hacer test con otras functiones', ()=>{
    chai.assert.equal(miOtraFunctionTesteable(), false);
  });
});
