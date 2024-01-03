export const removeAccents = (string: string) => string.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
