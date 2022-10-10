google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
    ["Country","Women, % of total inventors in 2019"],
    ["Australia",13.266289711],
    ["Austria",5.2188048363],
    ["Belgium",12.340945244],
    ["Canada",11.369950294],
    ["Denmark",13.692219734],
    ["Finland",8.0935354233],
    ["France",11.3282547],
    ["Germany",6.5029602051],
    ["Greece",21.524824142],
    ["Hungary",6.87479496],
    ["Ireland",11.57518959],
    ["Italy",8.1029052734],
    ["Japan",8.1445703506],
    ["Luxembourg",9.4215497971],
    ["Mexico",9.6702899933],
    ["Netherlands",10.098250389],
    ["New Zealand",5.4924249649],
    ["Norway",7.9158949852],
    ["Poland",11.655900002],
    ["Portugal",26.618589401],
    ["Slovakia",6.7713952065],
    ["Spain",14.551505089],
    ["Sweden",7.6959052086],
    ["Switzerland",8.5465154648],
    ["Turkey",16.011735916],
    ["United Kingdom",10.510174751],
    ["United States",12.392959595],
    ["Argentina",16.096775055],
    ["Brazil",15.561635017],
    ["Chile",13.247864723],
    ["Colombia",16.776460648],
    ["India",12.89027977],
    ["Israel",10.057120323],
    ["Lithuania",16.25],
    ["Saudi Arabia",16.530719757],
    ["Slovenia",8.4233551025],
    ["South Africa",17.538265228],
    ["Czechia",6.8028302193],
    ["Estonia",16.160139084]]);

    var options = {
        colorAxis: {colors: ['red', 'yellow', 'green']},
        backgroundColor: '#81d4fa',
        datalessRegionColor: 'gray',
        defaultColor: '#f5f5f5',
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
