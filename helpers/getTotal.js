

const getTotal = (cart) => {
    let total;
    const cartParsed = cart.map(product => {
      if(product.price % 1 === 0) {
        return product.price;
      } else {
        return parseInt(product.price.toFixed(0));
      }
    })
    if(cart.length === 1){
      total = cartParsed[0];
    } else if(cartParsed.length > 1 ){
      total = cartParsed.reduce( (acumulator, currentValue) => acumulator + currentValue);
    } else {
      total = 0;
    }
    return total;
}

export default getTotal;