window.onload = (() => {
    //funcion del splash
    
     setTimeout(() => {
      splash.style.display = 'none';
      sectionNav.style.display = 'block';
      sectionSelect.style.display = 'block';
      sectionList.style.display = 'block';
      sectionMain.style.display = 'none';
      sectionTypes.style.display = 'none';
      root.style.display = 'none';
      sectionStatistcs.style.display = 'none';
    }, 500);  
  });
  
  //btn para volver a pantalla inicio
  start = () => {
    splash.style.display = 'none';
      sectionNav.style.display = 'block';
      sectionSelect.style.display = 'block';
      sectionList.style.display = 'block';
      sectionMain.style.display = 'block';
      sectionTypes.style.display = 'block';
      root.style.display = 'block';
      sectionStatistcs.style.display = 'block';
  }
  
  //boton ver tipo de pokemones
  btnType = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'block';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'block';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  };
  
  
  //boton ver estadisticas
  btnStatistics = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'block';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'none';
    sectionStatistcs.style.display = 'block';
  };
  
  
  
  //reverse / muestra los pokemones del 151 al 1
  //const select151 = document.getElementById('numReverse');
  //select151.addEventListener('change', () => {
  //  document.getElementById('listPokemon').innerHTML = '';
  //  const dataReverse = dataPokemon.reverse()
  // // dataReverse.map(({num, name, img, id}) => 
  //  document.getElementById('listPokemon').innerHTML += `
  //  <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
  //    <div class="card w-100" style="width: 15rem;">
  //      <img class="card-img-top imgPoke" src=${img}>
  //      <div class="card-body">
  //        <p>${num}</p>
  //        <p>${name}</p>
  //        <button class="btn btn-more" id="${id}"><i class="fas fa-plus"></i></button>
  //      </div>
  //    </div>
  //  </div>
  //  `
  //  );
  //
  //
  //})
  //document.getElementById('numReverse').onchange = () => {}
  
  //})
  
//Mostrar Pokemon Ordenados
  document.getElementById("order-select").addEventListener("click",(event)=> {
  event.preventDefault();
  document.getElementById("listPokemon").innerHTML = "";
  let orderValue=document.getElementById("order-select").value;
  orderAz(dataPokemon, orderValue);
  dataPokemon.map(({num, name, img, id}) => 
  document.getElementById("listPokemon").innerHTML += `
  <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
    <div class="card w-100" style="width: 15rem;">
      <img class="card-img-top imgPoke" src=${img}>
      <div class="card-body">
        <p>${num}</p>
        <p>${name}</p>
        <button class="btn btn-more" id="${id}"><i class="fas fa-plus"></i></button>
      </div>
    </div>
  </div>
  `
  );
    });
    
  // });

  
  //muestra todos los pokemones en cartas individuales en la pagina inicial
  
  dataPokemon.map(({num, name, img, id}) => 
  document.getElementById('listPokemon').innerHTML += `
  <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
    <div class="card w-100" style="width: 15rem;">
      <img class="card-img-top imgPoke" src=${img}>
      <div class="card-body">
        <p>${num}</p>
        <p>${name}</p>
        <button class="btn btn-more" id="${id}"><i class="fas fa-plus"></i></button>
      </div>
    </div>
  </div>
  `
  );
  
  //entrar a carta principal de un pokemon
  dataPokemon.forEach((element) => {
    document.getElementById(`${element.id}`).onclick = () => {
      splash.style.display = 'none';
      sectionNav.style.display = 'block';
      sectionSelect.style.display = 'none';
      sectionList.style.display = 'none';
      sectionMain.style.display = 'block';
      sectionTypes.style.display = 'none';
      root.style.display = 'none';
      sectionStatistcs.style.display = 'none';
  
      //permite mostrar los tipos de pokemon de forma invidividual
      const typesPokemon = element.type
      let typesPrint = '';
      typesPokemon.forEach((type) => {
        typesPrint += `<button class="btn ${type.toLowerCase()}">${type}</button>`
      });
      //permite mostrar las debilidades de un pokemon de forma invidividual
      const weaknessesPokemon = element.weaknesses
      let weaknessesPrint = '';
      weaknessesPokemon.forEach((weaknesses) => {
        weaknessesPrint += `<button class="btn ${weaknesses.toLowerCase()}">${weaknesses}</button>`
      });
  
      /*
      //permite mostrar las pre evoluciones de un pokemon
      const prev_evolutionPokemon = element.prev_evolution
      let prev_evolutionPrint = '';   
      prev_evolutionPokemon.map(({num, name}) => {
        prev_evolutionPrint += `<p>${num}</p>
        <span>${name}</span>`
      
      });
      
      //permite mostrar las siguientes evoluciones de un pokemon
      const next_evolutionPokemon = element.next_evolution
      let next_evolutionPrint = '';   
      next_evolutionPokemon.map(({num, name}) => {
        next_evolutionPrint += `<p>${num}</p>
        <p>${name}</p>`
      });
      */
      
  document.getElementById("main").innerHTML="";
      //imprime en la pantalla la tarjeta de un pokemon
      document.getElementById('main').innerHTML += `
      <div class="card" style="width: 15rem;">
        <div class="w-100">
          <img class="card-img-top" src=${element.img}>
        </div>
        <div class="card-body">
          <p>${element.num}</p>
          <p>${element.name}</p>
          <span>Tipo: ${typesPrint}</span>
          <p>Altura: ${element.height}</p>
          <p>Peso: ${element.weight}</p>
          <span>${weaknessesPrint}</span>
          <p>Rango de aparición: ${element.spawn_chance}</p>
        </div>
      </div>
      `
    };
  });
  
  
  //Filtrar por tipo de Pokemon
  //Boton tipo Fire
  document.getElementById("fire").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterFire}  Pokémon tipo Fuego </p3></div>`;
  typeFire.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  `);
  }
  
  //Boton tipo Ice
  document.getElementById("ice").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterIce}  Pokémon tipo Hielo </p3></div>`;
  typeIce.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
  <div class="tarjeta-wrap">
    <div class="tarjeta">
        <img class="card-img-top" src=${img}> 
         <p2>${name}</p2>
          <div class="atras"><p></p>
            <p> #: ${num}</p>
            <p>Altura: ${height}</p>
            <p>Peso: ${weight}</p>
            <p>Tipo: ${type}</p>
            <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
          </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Volador
  document.getElementById("flying").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterFlying}  Pokémon tipo Volador </p3></div>`;
  typeFlying.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
  <div class="tarjeta-wrap">
    <div class="tarjeta">
        <img class="card-img-top" src=${img}> 
         <p2>${name}</p2>
          <div class="atras"><p></p>
            <p> #: ${num}</p>
            <p>Altura: ${height}</p>
            <p>Peso: ${weight}</p>
            <p>Tipo: ${type}</p>
            <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
          </div>
    </div>
  </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Psychic
  document.getElementById("psychic").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterPsychic}  Pokémon tipo Psíquico </p3></div>`;
  typePsychic.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Hierba
  document.getElementById("grass").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterGrass}  Pokémon tipo Hierba </p3></div>`;
  typeGrass.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Poison
  document.getElementById("poison").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterPoison}  Pokémon tipo Veneno </p3></div>`;
  typePoison.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Water
  document.getElementById("water").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterWater}  Pokémon tipo Agua </p3></div>`;
  typeWater.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Ground
  document.getElementById("ground").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterGround}  Pokémon tipo Tierra </p3></div>`;
  typeGround.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  //Boton tipo Rock
  document.getElementById("rock").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterRock}  Pokémon tipo Roca </p3></div>`;
  typeRock.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Electric
  document.getElementById("electric").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterElectric}  Pokémon tipo Eléctrico </p3></div>`;
  typeElectric.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Bug
  document.getElementById("bug").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterBug}  Pokémon tipo Insecto </p3></div>`;
  typeBug.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Normal
  document.getElementById("normal").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterNormal}  Pokémon tipo Normal </p3></div>`;
  typeNormal.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
    
  //Boton tipo Fighting
  document.getElementById("fighting").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterFighting}  Pokémon tipo Lucha </p3></div>`;
  typeFighting.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Fairy
  document.getElementById("fairy").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterFairy}  Pokémon tipo Hada </p3></div>`;
  typeFairy.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  //Boton tipo Dark
  document.getElementById("dark").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterDark}  Pokémon tipo Oscuridad </p3></div>`;
  typeDark.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  //Boton tipo Ghost
  document.getElementById("ghost").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div class="result"><p3> Existen:  ${counterGhost}  Pokémon tipo Fantasma </p3></div>`;
  typeGhost.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  //Boton tipo Steel
  document.getElementById("steel").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div id="result"><p3> Existen:  ${counterSteel}  Pokémon tipo Acero </p3></div>`;
  typeSteel.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  //Boton tipo Dragon
  document.getElementById("dragon").onclick = () => {
    splash.style.display = 'none';
    sectionNav.style.display = 'block';
    sectionSelect.style.display = 'none';
    sectionList.style.display = 'none';
    sectionMain.style.display = 'none';
    sectionTypes.style.display = 'none';
    root.style.display = 'block';
    sectionStatistcs.style.display = 'none';
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML+= `<div id="result"> <p3> Existen:  ${counterDragon}  Pokémon tipo Dragón </p3></div>`;
  typeDragon.map(({num,name,img,height,weight,type,weaknesses}) => document.getElementById('root').innerHTML += `
  <div class="wrap"> 
    <div class="tarjeta-wrap">
      <div class="tarjeta">
          <img class="card-img-top" src=${img}> 
           <p2>${name}</p2>
            <div class="atras"><p></p>
              <p> #: ${num}</p>
              <p>Altura: ${height}</p>
              <p>Peso: ${weight}</p>
              <p>Tipo: ${type}</p>
              <p>Debilidad con Pókemon tipo: ${weaknesses}</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  `);
  }
  
  
  
  //filtrar por nombre, busca lo que se le ingresa en el input y lo compara con la info en dataPokemon
  //document.getElementById('btnSearch').onclick = () => {
   // let condition = document.getElementById('searchForName').value;
    //document.getElementById("root").innerHTML = "";
    //dataPokemon.filter(element => {
      //if (element.name === condition) {
  
      //}
       
   // })
    //filtrado
    //filtered.forEach(element => {
      /*
      //permite mostrar los tipos de pokemon de forma invidividual
      const typesPokemon = element.type
      let typesPrint = '';
      typesPokemon.forEach((type) => {
        typesPrint += `<button class="btn ${type.toLowerCase()}">${type}</button>`
      });
      //permite mostrar las debilidades de un pokemon de forma invidividual
      const weaknessesPokemon = element.weaknesses
      let weaknessesPrint = '';
      weaknessesPokemon.forEach((weaknesses) => {
        weaknessesPrint += `<button class="btn ${weaknesses.toLowerCase()}">${weaknesses}</button>`
      });
      //imprime en la pantalla la tarjeta de un pokemon
      document.getElementById('root').innerHTML += `
        <div class="card" style="width: 15rem;">
          <div class="w-100">
            <img class="card-img-top" src=${element.img}>
          </div>
          <div class="card-body">
            <p>${element.num}</p>
            <p>${element.name}</p>
            <p>Altura: ${element.height}</p>
            <p>Peso: ${element.weight}</p>
            <p>Rango de aparición: ${element.spawn_chance}</p>
          </div>
        </div>
    `
    */