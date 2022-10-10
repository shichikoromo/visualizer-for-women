google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
    ["Country","In 2021 constant prices at 2021 USD PPPs"],
    ["Australia",56599.9299857557],
    ["Austria",58189.1346866111],
    ["Belgium",59100.1809372088],
    ["Canada",56005.6171359754],
    ["Czech Republic",31710.8968644062],
    ["Denmark",61330.7713424836],
    ["Finland",49707.6290980261],
    ["France",49312.5814817124],
    ["Germany",56040.2161468624],
    ["Greece",25743.5073041973],
    ["Hungary",26268.0369337144],
    ["Ireland",51045.0787116261],
    ["Italy",40767.203813809],
    ["Japan",39711.4297446814],
    ["Korea",42747.1094597402],
    ["Luxembourg",73656.7944725552],
    ["Netherlands",60922.6046568573],
    ["Norway",58377.006567139],
    ["Poland",33566.2789446222],
    ["Portugal",29740.2954323036],
    ["Slovak Republic",24804.671139622],
    ["Spain",39202.3010628664],
    ["Sweden",48951.1026657769],
    ["Switzerland",68957.4526836708],
    ["United Kingdom",49979.2556841196],
    ["United States",74737.8453542402],
    ["Mexico",16429.2635893051],
    ["Israel",42164.806114266],
    ["Slovenia",43892.4254044126],
    ["Estonia",33188.1162985511],
    ["OECD countries",51606.8688182131],
    ["Iceland",72047.3589701472],
    ["New Zealand",46976.3871001948],
    ["Latvia",32235.409373312],
    ["Lithuania",42027.3159157365]]);

    var options = {
        colorAxis: {colors: ['red', 'yellow', 'green']},
        backgroundColor: '#81d4fa',
        datalessRegionColor: 'gray',
        defaultColor: '#f5f5f5',
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
