const str = 'sHoRt AnD sToUt';

const mudaLetras = ( str ) => {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
};

const result = str.replace( /\w\S*/g , mudaLetras );

console.log(result);