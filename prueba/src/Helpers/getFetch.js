 import React from 'react';



export const productos = [
    { id: 1,  foto:'' ,categoria: 'pintura', name: "xxx", price: 327 },
    { id: 2,  foto:'' ,categoria: 'Obras', name: "Alambre recocido negro n° 14", price: 227 },
    { id: 3,  foto:'' ,categoria: 'plomeria', name: "xxx", price: 240 },
    { id: 4,  foto:'' ,categoria: 'obra', name: "sxxx", price: 535 },
    { id: 6,  foto:'' ,categoria: 'gas', name: "sxxx", price: 525 },
    { id: 7,  foto:'' ,categoria: 'herramientas', name: "sxxc", price: 545 },
    { id: 8,  foto:'' ,categoria: 'electricidad', name: "sxcx", price: 515 },
  ]




  
 export const getFetch = new Promise((resolve, reject)=>{
      // tareas que realizaremos
      let url = 'yyy.com'
      
      if (url === 'yyy.com') {
        setTimeout(() => {
          resolve(productos)        
        }, 3000);
      }else{
        reject('400 not found')
      }
  })

  