const removeFromArray = function(arr, ...itemVal) {

   const newArray = [];

   arr.forEach((item) => {

       if (!itemVal.includes(item)) {
           newArray.push(item);
       }
   });

   return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
