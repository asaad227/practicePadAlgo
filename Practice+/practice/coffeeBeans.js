function search(budget, prices) {
 return prices.filter(e=> e < budget).sort((a,b)=> a-b).toString();
 
    // return array of prices that are within budget
    
    }

    console.log(search([4], [2,1,5,6,9]));