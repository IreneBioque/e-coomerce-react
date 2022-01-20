export const countDuplicatesItemArray = (value, array) => {
    // cuantos productos hay en el carrito
    let count = 0;
    array.forEach (arrayValue => {
        if(arrayValue === value ){
            count++;
        }
    });
    return count

}
 // cuantos productos únicos hay en el carrito
export const removeDuplicatesArray = ( array) => {
   // automaticamente retorna el array sin duplicados
    return Array.from(new Set(array));

}
 // Para bajar cantidades en el carrito
export const removeItemArray = (array, item) => {
    const index = array.indexOf(item);

    if (index > -1 ){
        array.splice(index, 1);
    }
    return array;
}