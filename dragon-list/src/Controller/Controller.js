export function formatDate(valueCamp) {
  if (valueCamp) {
    valueCamp = valueCamp.toString();
    const dia = valueCamp.substring(8, 10);
    const mes = valueCamp.substring(5, 7);
    const ano = valueCamp.substring(0, 4);
    
    return `${dia}/${mes}/${ano}`
  }
}