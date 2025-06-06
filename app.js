  let pronoun = ['tu', 'yo', 'nosotros', 'ellos'];
  let subadj = ['encontre', 'tenemos', 'buscandoun', 'teniendo' ];
  let adj = ['chico', 'grande', 'muygrande', 'muypequeño', ];
  let descripcion = ['bonito', 'feo', 'bonita', 'fea'];
  let fdom = ['.com', '.es', '.br', '.ch', '.eu', '.mx'];
  //let dominios 

  const combinaciones = () =>{
    for (let index = 0; index < pronoun.length; index++) {
        const subjec = pronoun[index];
        
        for(let indexSubadj = 0; indexSubadj < subadj.length; indexSubadj++) {
          const subadj2 = subadj [indexSubadj];

          for (let indexAdj = 0; indexAdj < adj.length; indexAdj++) {
              const element = adj[indexAdj];

                for (let indexDesc = 0; indexDesc < descripcion.length; indexDesc++) {
                    const ElDesc = descripcion[indexDesc];

                        for (let indexFdon = 0; indexFdon < fdom.length; indexFdon++) {
                            const Dfdom = fdom[indexFdon];

                            let resultado = subjec + subadj2 +element + ElDesc+ Dfdom;
                                console.log(resultado);
                        }
                }
          }
        }  
    }
  }
combinaciones();
//console.log():