function iceBrickVolume(radius, bottle_Length, rim_Length) {
     const b = radius * radius;
     const c = bottle_Length - rim_Length
     const multi = b * c;

     return 2 * multi;
     
     
     
   }

   console.log(iceBrickVolume(1,10,2))