const dataPokemon = POKEMON.pokemon;

//Clasifico por tipo y  Calculo Promedio "Oportunidad de captura de un Pókemon por tipo"
// con los average hago una grafica y muestro esta estadistica 

//Filtrar tipos fuego
const typeFire = dataPokemon.filter((types) => {return types.type.indexOf ("Fire") >=0});
const counterFire=typeFire.length;
const totalFire = typeFire.reduce(function(sumaFire, spawn){
  return sumaFire + spawn.spawn_chance;
  }, 0);
  const averageFire=(totalFire/counterFire);


//Filtrar tipos Hielo
const typeIce = dataPokemon.filter((types) =>{return types.type.indexOf("Ice") >=0});
const counterIce=typeIce.length;
const totalIce = typeIce.reduce(function(sumaIce, spawn){
  return sumaIce + spawn.spawn_chance;
  }, 0);
  const averageIce=(totalIce/counterIce);


//Filtrar tipos Flying
const typeFlying = dataPokemon.filter((types) => {return types.type.indexOf("Flying") >=0});
const counterFlying=typeFlying.length;
const totalFlying = typeFlying.reduce(function(sumaFlying, spawn){
  return sumaFlying + spawn.spawn_chance;
  }, 0);
  const averageFlying=(totalFlying/counterFlying);


//Filter Psychic
const typePsychic = dataPokemon.filter((types) => {return types.type.indexOf("Psychic") >=0});
const counterPsychic=typePsychic.length;
const totalPsychic= typePsychic.reduce(function(sumaPsychic, spawn){
  return sumaPsychic + spawn.spawn_chance;
  }, 0);
  const averagePsychic=(totalPsychic/counterPsychic);

//Filter Grass
const typeGrass = dataPokemon.filter((types) => {return types.type.indexOf("Grass") >=0});
const counterGrass=typeGrass.length;
const totalGrass = typeGrass.reduce(function(sumaGrass, spawn){
  return sumaGrass + spawn.spawn_chance;
  }, 0);
  const averageGrass=(totalGrass/counterGrass);


//Filter Poison
const typePoison = dataPokemon.filter((types) => {return types.type.indexOf("Poison") >=0});
const counterPoison=typePoison.length;
const totalPoison = typePoison.reduce(function(sumaPoison, spawn){
  return sumaPoison + spawn.spawn_chance;
  }, 0);
  const averagePoison=(totalPoison/counterPoison);


//Filter Water
const typeWater = dataPokemon.filter((types) => {return types.type.indexOf("Water") >=0});
const counterWater=typeWater.length;
const totalWater = typeWater.reduce(function(sumaWater, spawn){
  return sumaWater + spawn.spawn_chance;
  }, 0);
  const averageWater=(totalWater/counterWater);


//Filter Ground
const typeGround = dataPokemon.filter((types) => {return types.type.indexOf("Ground") >=0});
const counterGround=typeGround.length;
const totalGround = typeGround.reduce(function(sumaGround, spawn){
  return sumaGround + spawn.spawn_chance;
  }, 0);
  const averageGround=(totalGround/counterGround);

//Filter Rock
const typeRock = dataPokemon.filter((types) => {return types.type.indexOf("Rock") >=0});
const counterRock=typeRock.length;
const totalRock = typeRock.reduce(function(sumaRock, spawn){
  return sumaRock + spawn.spawn_chance;
  }, 0);
  const averageRock=(totalRock/counterRock);

//Filter Electric
const typeElectric = dataPokemon.filter((types) => {return types.type.indexOf("Electric") >=0});
const counterElectric=typeElectric.length;
const totalElectric = typeElectric.reduce(function(sumaElectric, spawn){
  return sumaElectric + spawn.spawn_chance;
  }, 0);
  const averageElectric=(totalElectric/counterElectric);

//Filter Bug
const typeBug = dataPokemon.filter((types) => {return types.type.indexOf("Bug") >=0});
const counterBug=typeBug.length;
const totalBug = typeBug.reduce(function(sumaBug, spawn){
  return sumaBug + spawn.spawn_chance;
  }, 0);
  const averageBug=(totalBug/counterBug);

//Filter Normal
const typeNormal = dataPokemon.filter((types) => {return types.type.indexOf("Normal") >=0});
const counterNormal=typeNormal.length;
const totalNormal = typeNormal.reduce(function(sumaNormal, spawn){
  return sumaNormal + spawn.spawn_chance;
  }, 0);
  const averageNormal=(totalNormal/counterNormal);

//Filter Fighting
const typeFighting = dataPokemon.filter((types) => {return types.type.indexOf("Fighting") >=0});
const counterFighting=typeFighting.length;
const totalFighting = typeFighting.reduce(function(sumaFighting, spawn){
  return sumaFighting + spawn.spawn_chance;
  }, 0);
  const averageFighting=(totalFighting/counterFighting);

//Filter Fairy
const typeFairy = dataPokemon.filter((types) => {return types.type.indexOf("Fairy") >=0});
const counterFairy=typeFairy.length;
const totalFairy = typeFairy.reduce(function(sumaFairy, spawn){
  return sumaFairy + spawn.spawn_chance;
  }, 0);
  const averageFairy=(totalFairy/counterFairy);


//Filter Dark
const typeDark = dataPokemon.filter((types) => {return types.type.indexOf("Dark") >=0});
const counterDark=typeDark.length;
const totalDark = typeDark.reduce(function(sumaDark, spawn){
  return sumaDark + spawn.spawn_chance;
  }, 0);
  const averageDark=(totalDark/counterDark);


//Filter Ghost
const typeGhost = dataPokemon.filter((types) => {return types.type.indexOf("Ghost") >=0});
const counterGhost=typeGhost.length;
const totalGhost = typeGhost.reduce(function(sumaGhost, spawn){
  return sumaGhost + spawn.spawn_chance;
  }, 0);
  const averageGhost=(totalGhost/counterGhost);


//Filter Steel
const typeSteel = dataPokemon.filter((types) => {return types.type.indexOf("Steel") >=0});
const counterSteel=typeSteel.length;
const totalSteel = typeSteel.reduce(function(sumaSteel, spawn){
  return sumaSteel + spawn.spawn_chance;
  }, 0);
  const averageSteel=(totalSteel/counterSteel);


//Filter Dragon
const typeDragon = dataPokemon.filter((types) => {return types.type.indexOf("Dragon") >=0});
const counterDragon=typeDragon.length;
const totalDragon = typeDragon.reduce(function(sumaDragon, spawn){
  return sumaDragon + spawn.spawn_chance;
  }, 0);
  const averageDragon=(totalDragon/counterDragon);



// Ordena A-Z y Z-A
//const data = dataPokemon;
const orderAz = (dataPoke,status)=>{if (status==='option1'){
  dataPoke.sort(function(a,z){
    if(a.num > z.num){return 1;
  }
      if(a.num < z.num){return -1;
      }
        return 0;
  });
} else if (status==='option2'){
  dataPoke.reverse(function(a,z){
    if(a.num > z.num){return 1;
    }
        if(a.num < z.num){return -1;
        }
          return 0;
    });
} else if (status==='option3'){
  dataPoke.sort(function(a,z){
    if(a.name > z.name){return 1;
  }
      if(a.name < z.name){return -1;
      }
        return 0;
  });
} else if (status==='option4'){
  dataPoke.reverse(function(a,z){
    if(a.name > z.name){return 1;
    }
        if(a.name < z.name){return -1;
        }
          return 0;
    });
}
}

 
// Gráficos
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Fuego',          counterFire],
  ['Hielo',           counterIce],
  ['Volador',      counterFlying],
  ['Psíquico',    counterPsychic],
  ['Hierba ',       counterGrass],
  ['Veneno ',      counterPoison],
  ['Agua ',         counterWater],
  ['Tierra ',      counterGround],
  ['Roca ',          counterRock],
  ['Eléctrico ', counterElectric],
  ['Insecto ',        counterBug],
  ['Normal ',      counterNormal],
  ['Lucha ',     counterFighting],
  ['Hada ',         counterFairy],
  ['Oscuridad ',     counterDark],
  ['Fantasma ',     counterGhost],
  ['Acero ',        counterSteel],
  ['Dragon ',      counterDragon]
]);

var options = {
  title: 'Cantidad de Pókemon por Tipo',
  pieHole: 0.5,
  width: 1200,
  height: 700,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
chart.draw(data, options);
}

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Tipo', 'Probabilidad de Engendro %'],
          ['Hielo',          averageIce],
          ['Fuego',         averageFire],
          ['Volador',     averageFlying],
          ['Psíquico',   averagePsychic],
          ['Hierba',       averageGrass],
          ['Veneno',      averagePoison],
          ['Agua',         averageWater],
          ['Tierra',      averageGround],
          ['Roca',          averageRock],
          ['Eléctrico', averageElectric],
          ['Insecto',        averageBug],
          ['Normal',      averageNormal],
          ['Lucha',     averageFighting],
          ['Hada',         averageFairy],
          ['Oscuridad',     averageDark],
          ['Fantasma',     averageGhost],
          ['Acero',        averageSteel],
          ['Dragon',      averageDragon]
]);

        var options = {
          width: 900,
          height: 600,
          legend: { position:'none'},
          chart: {
            title: 'Promedio de Engendro',
            subtitle: 'Posibilidad de Engendro por Tipo de Pókemon (%)' },
          axes: {
            x: {
              0: { side: 'top', label: 'POKÉMON POR TIPO'} // Top x-axis.
            }
          },
          bar: { groupWidth: "100%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

window.typesPokemon;
window.dataPokemon;
      