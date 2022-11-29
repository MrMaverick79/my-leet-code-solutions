//Return the mini cost to pusrchase all tiems
//ROund to the nearest int before adding
//type 0 = discounted price
//type 1 = %
//type 2 = fixed amount off (-)



//products = ['price', 'tag', tag' .. ]
// discounts ['tag', 'type', 'amount']
function findLowestPrice(products, discounts) {
    //create a look up table from discounts
    let discountDict = {}
    for (let i = 0; i < discounts.length; i++) {
        
       switch(discounts[i][1]){
            case '0':
                discountDict[discounts[i][0]] = parseInt(discounts[i][2])
                break;
            case '1':
                discountDict[discounts[i][0]] = parseInt(discounts[i][2])/100
                break;
            case '2':
                discountDict[discounts[i][0]] = parseInt(discounts[i][2])*-1
                break;
            default:
                continue;
       }
        
    }
    //Now we have a dict to apply the savings
    let shoppingCart = [] ; //we can add the lowest prices here
    for (let i = 0; i < products.length; i++) {
        let originalPrice = parseInt(products[i][0])
        let current = originalPrice; //original price

        //Compare the savings 
        products[i].forEach(element => {
            if(element in discountDict){
                if(discountDict[element]> 1) {
                    if(discountDict[element] < current){
                        current = discountDict[element]
                    }
                } else if(discountDict[element] > 0 && discountDict[element] < 1){
                    //%
                    let newPrice = Math.round(originalPrice - (discountDict[element] * originalPrice))
                    if(newPrice < current){
                        current = newPrice
                    }
                } else if(discountDict[element] < 0){
                    let newPrice = originalPrice + discountDict[element]
                    if(newPrice < current){
                        current = newPrice
                    }
                }
            }
        
        });
        shoppingCart.push(current)
    
        //Push the lowest to the cart


        //OR the original if all empty
        
    }

    //Add the total and return 
   const total = shoppingCart.reduce((a,b) => a + b)
   return total;
}



//Testing

const products = [['10', 'sale', 'january-sale'], ['200', 'sale', 'EMPTY']]
const discounts = [['sale', '0', '10'], ['january-sale', '1', '10']]
findLowestPrice(products, discounts)