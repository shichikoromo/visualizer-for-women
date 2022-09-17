google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {

    //const jsonData= require('resources/json/life-expectancy-for-women-at-age-60.json'); 
    //console.log(jsonData);

    var data = google.visualization.arrayToDataTable([
        ["Country", "Life expectation of women at age 60"],
        ["Kiribati",14.64],
        ["Central African Republic",14.85],
        ["Afghanistan",15.06],
        ["Lesotho",15.24],
        ["Micronesia (Federated States of)",15.58],
        ["Somalia",16.01],
        ["Solomon Islands",16.28],
        ["Vanuatu",16.67],
        ["Guinea-Bissau",16.72],
        ["Eritrea",16.82],
        ["Zimbabwe",16.99],
        ["Haiti",17.01],
        ["Congo",17.07],
        ["Guinea",17.16],
        ["Tajikistan",17.19],
        ["Madagascar",17.33],
        ["Chad",17.34],
        ["Sierra Leone",17.44],
        ["Fiji",17.49],
        ["Mali",17.56],
        ["Papua New Guinea",17.59],
        ["Burundi",17.63],
        ["Eswatini",17.71],
        ["Pakistan",17.76],
        ["Niger",17.79],
        ["Mozambique",17.83],
        ["Democratic Republic of the Congo",17.88],
        ["Botswana",17.97],
        ["Liberia",18.02],
        ["Gambia",18.04],
        ["Zambia",18.05],
        ["Burkina Faso",18.06],
        ["Guyana",18.1],
        ["Azerbaijan",18.32],
        ["Samoa",18.32],
        ["Cameroon",18.35],
        ["Qatar",18.38],
        ["Oman",18.48],
        ["Mongolia",18.51],
        ["Benin",18.52],
        ["Angola",18.55],
        ["Sao Tome and Principe",18.63],
        ["Togo",18.65],
        ["C\u00f4te d\u2019Ivoire",18.69],
        ["Yemen",18.71],
        ["Comoros",18.75],
        ["Equatorial Guinea",18.81],
        ["Nigeria",18.86],
        ["Mauritania",18.87],
        ["Timor-Leste",18.87],
        ["Ghana",18.89],
        ["Lao People's Democratic Republic",18.89],
        ["Senegal",18.92],
        ["South Sudan",18.93],
        ["Djibouti",18.96],
        ["Malawi",19.03],
        ["Bolivia (Plurinational State of)",19.06],
        ["United Republic of Tanzania",19.06],
        ["Honduras",19.08],
        ["Kenya",19.09],
        ["Cambodia",19.11],
        ["Egypt",19.11],
        ["Indonesia",19.13],
        ["Nepal",19.15],
        ["Rwanda",19.16],
        ["Gabon",19.25],
        ["Namibia",19.25],
        ["Syrian Arab Republic",19.28],
        ["Bahrain",19.36],
        ["Brunei Darussalam",19.38],
        ["Uganda",19.38],
        ["Ethiopia",19.4],
        ["Sudan",19.41],
        ["India",19.54],
        ["Philippines",19.57],
        ["Morocco",19.59],
        ["Myanmar",19.62],
        ["The former Yugoslav Republic of Macedonia",19.64],
        ["Uzbekistan",19.81],
        ["Bhutan",19.95],
        ["Turkmenistan",20.11],
        ["Grenada",20.34],
        ["Suriname",20.45],
        ["South Africa",20.52],
        ["Malaysia",20.56],
        ["Iraq",20.66],
        ["Democratic People's Republic of Korea",20.77],
        ["Saudi Arabia",20.77],
        ["Republic of Moldova",20.92],
        ["Georgia",21.02],
        ["Serbia",21.1],
        ["Tonga",21.16],
        ["Antigua and Barbuda",21.31],
        ["Montenegro",21.32],
        ["Guatemala",21.43],
        ["Kazakhstan",21.44],
        ["Seychelles",21.51],
        ["Bangladesh",21.53],
        ["Bosnia and Herzegovina",21.56],
        ["Saint Vincent and the Grenadines",21.63],
        ["Kyrgyzstan",21.67],
        ["United Arab Emirates",21.69],
        ["Ukraine",21.73],
        ["Cabo Verde",21.77],
        ["Barbados",21.79],
        ["Nicaragua",21.87],
        ["Libya",21.89],
        ["Albania",21.94],
        ["Bulgaria",21.97],
        ["Mauritius",21.97],
        ["Viet Nam",22.03],
        ["Jordan",22.07],
        ["Armenia",22.15],
        ["Russian Federation",22.19],
        ["Hungary",22.27],
        ["Dominican Republic",22.36],
        ["Bahamas",22.39],
        ["Romania",22.39],
        ["Lebanon",22.4],
        ["Belarus",22.48],
        ["Iran (Islamic Republic of)",22.48],
        ["Algeria",22.62],
        ["Jamaica",22.63],
        ["Sri Lanka",22.63],
        ["Tunisia",22.82],
        ["Saint Lucia",22.91],
        ["Belize",22.93],
        ["Latvia",22.95],
        ["Maldives",23.05],
        ["Mexico",23.06],
        ["Argentina",23.08],
        ["China",23.08],
        ["Cuba",23.18],
        ["T\u00fcrkiye",23.24],
        ["Lithuania",23.46],
        ["Paraguay",23.5],
        ["Brazil",23.51],
        ["El Salvador",23.57],
        ["Venezuela (Bolivarian Republic of)",23.6],
        ["Croatia",23.75],
        ["Slovakia",23.93],
        ["Uruguay",23.96],
        ["Czechia",24.0],
        ["Ecuador",24.31],
        ["Poland",24.33],
        ["United States of America",24.38],
        ["Thailand",24.84],
        ["Denmark",24.85],
        ["Estonia",24.99],
        ["Trinidad and Tobago",25.01],
        ["Peru",25.05],
        ["Netherlands",25.13],
        ["United Kingdom of Great Britain and Northern Ireland",25.23],
        ["Colombia",25.27],
        ["Ireland",25.33],
        ["Greece",25.52],
        ["Iceland",25.54],
        ["Belgium",25.58],
        ["Sweden",25.59],
        ["Austria",25.6],
        ["Slovenia",25.64],
        ["Norway",25.76],
        ["Finland",25.81],
        ["Luxembourg",25.81],
        ["New Zealand",25.84],
        ["Malta",25.86],
        ["Chile",25.88],
        ["Kuwait",25.9],
        ["Panama",25.95],
        ["Israel",26.03],
        ["Portugal",26.29],
        ["Canada",26.38],
        ["Costa Rica",26.4],
        ["Cyprus",26.43],
        ["Italy",26.53],
        ["Switzerland",26.65],
        ["Australia",26.83],
        ["Germany",26.87],
        ["France",27.21],
        ["Singapore",27.22],
        ["Spain",27.34],
        ["Republic of Korea",27.87],
        ["Japan",28.56],
        ["Kiribati",14.39],
        ["Central African Republic",14.4],
        ["Lesotho",14.42],
        ["Afghanistan",15.52],
        ["Micronesia (Federated States of)",15.6],
        ["Somalia",15.82],
        ["Solomon Islands",16.09],
        ["Guinea-Bissau",16.32],
        ["Zimbabwe",16.45],
        ["Vanuatu",16.54],
        ["Eritrea",16.55],
        ["Congo",16.6],
        ["Guinea",16.62],
        ["Haiti",16.66],
        ["Tajikistan",16.67],
        ["Sierra Leone",16.83],
        ["Syrian Arab Republic",16.99],
        ["Chad",17.05],
        ["Eswatini",17.1],
        ["Madagascar",17.16],
        ["Mali",17.2],
        ["Fiji",17.23],
        ["Liberia",17.28],
        ["Burundi",17.39],
        ["Pakistan",17.43],
        ["Papua New Guinea",17.46],
        ["Mozambique",17.48],
        ["Niger",17.48],
        ["Democratic Republic of the Congo",17.52],
        ["Oman",17.52],
        ["Botswana",17.61],
        ["Zambia",17.65],
        ["Cameroon",17.71],
        ["Burkina Faso",17.76],
        ["Qatar",17.86],
        ["Gambia",17.88],
        ["Azerbaijan",17.95],
        ["Guyana",18.03],
        ["C\u00f4te d\u2019Ivoire",18.14],
        ["Samoa",18.2],
        ["Benin",18.21],
        ["Egypt",18.26],
        ["Togo",18.27],
        ["Mongolia",18.35],
        ["Sao Tome and Principe",18.38],
        ["Angola",18.42],
        ["Nigeria",18.5],
        ["Comoros",18.54],
        ["Ghana",18.56],
        ["Honduras",18.65],
        ["Senegal",18.68],
        ["South Sudan",18.68],
        ["Mauritania",18.7],
        ["Equatorial Guinea",18.71],
        ["Lao People's Democratic Republic",18.71],
        ["Djibouti",18.73],
        ["United Republic of Tanzania",18.74],
        ["Indonesia",18.75],
        ["Malawi",18.81],
        ["Kenya",18.82],
        ["Timor-Leste",18.82],
        ["Yemen",18.88],
        ["Bolivia (Plurinational State of)",18.91],
        ["Nepal",18.93],
        ["Cambodia",18.94],
        ["Gabon",18.98],
        ["Uzbekistan",19.04],
        ["Rwanda",19.05],
        ["Namibia",19.06],
        ["Ethiopia",19.09],
        ["South Africa",19.12],
        ["Uganda",19.16],
        ["Morocco",19.18],
        ["The former Yugoslav Republic of Macedonia",19.18],
        ["India",19.25],
        ["Myanmar",19.27],
        ["Sudan",19.32],
        ["Brunei Darussalam",19.36],
        ["Republic of Moldova",19.53],
        ["Turkmenistan",19.55],
        ["Bhutan",19.72],
        ["Philippines",19.74],
        ["Bahrain",19.95],
        ["Democratic People's Republic of Korea",20.23],
        ["Kyrgyzstan",20.24],
        ["Saudi Arabia",20.26],
        ["Grenada",20.39],
        ["Georgia",20.46],
        ["Iraq",20.49],
        ["Montenegro",20.59],
        ["Kazakhstan",20.62],
        ["Malaysia",20.74],
        ["Serbia",20.75],
        ["Guatemala",20.81],
        ["Saint Vincent and the Grenadines",21.04],
        ["Ukraine",21.12],
        ["Tonga",21.14],
        ["Armenia",21.17],
        ["Antigua and Barbuda",21.2],
        ["Bosnia and Herzegovina",21.25],
        ["United Arab Emirates",21.29],
        ["Bangladesh",21.37],
        ["Russian Federation",21.39],
        ["Seychelles",21.4],
        ["Nicaragua",21.48],
        ["Bulgaria",21.5],
        ["Barbados",21.72],
        ["Suriname",21.76],
        ["Viet Nam",21.77],
        ["Hungary",21.86],
        ["Belarus",21.87],
        ["Romania",21.87],
        ["Mauritius",21.9],
        ["Libya",21.91],
        ["Maldives",21.95],
        ["Dominican Republic",22.02],
        ["Lebanon",22.09],
        ["Jordan",22.1],
        ["Cabo Verde",22.12],
        ["Albania",22.15],
        ["Bahamas",22.28],
        ["Iran (Islamic Republic of)",22.3],
        ["Algeria",22.33],
        ["Tunisia",22.45],
        ["Sri Lanka",22.56],
        ["Latvia",22.65],
        ["China",22.74],
        ["Belize",22.75],
        ["El Salvador",22.85],
        ["T\u00fcrkiye",22.92],
        ["Mexico",22.93],
        ["Jamaica",22.95],
        ["Lithuania",22.95],
        ["Brazil",23.0],
        ["Argentina",23.04],
        ["Slovakia",23.04],
        ["Croatia",23.16],
        ["Cuba",23.24],
        ["Czechia",23.4],
        ["Paraguay",23.46],
        ["Ecuador",23.61],
        ["Venezuela (Bolivarian Republic of)",23.69],
        ["Poland",23.73],
        ["Trinidad and Tobago",23.74],
        ["Saint Lucia",23.78],
        ["Uruguay",24.12],
        ["Estonia",24.32],
        ["United States of America",24.37],
        ["Denmark",24.45],
        ["United Kingdom of Great Britain and Northern Ireland",24.65],
        ["Colombia",24.68],
        ["Peru",24.71],
        ["Thailand",24.73],
        ["Germany",24.84],
        ["Netherlands",24.87],
        ["Ireland",24.94],
        ["Greece",25.11],
        ["Belgium",25.15],
        ["Slovenia",25.19],
        ["Austria",25.21],
        ["Sweden",25.25],
        ["Iceland",25.29],
        ["New Zealand",25.33],
        ["Chile",25.35],
        ["Panama",25.42],
        ["Norway",25.44],
        ["Malta",25.58],
        ["Israel",25.59],
        ["Portugal",25.63],
        ["Cyprus",25.64],
        ["Finland",25.68],
        ["Kuwait",25.9],
        ["Luxembourg",25.91],
        ["Canada",25.98],
        ["Italy",26.01],
        ["Switzerland",26.23],
        ["Australia",26.27],
        ["Costa Rica",26.36],
        ["Singapore",26.67],
        ["Spain",26.69],
        ["Republic of Korea",26.91],
        ["France",26.93],
        ["Japan",28.12],
        ["Haiti",12.01],
        ["Kiribati",14.15],
        ["Central African Republic",14.2],
        ["Lesotho",14.7],
        ["Afghanistan",15.17],
        ["Zimbabwe",15.37],
        ["Somalia",15.42],
        ["Micronesia (Federated States of)",15.65],
        ["Eswatini",15.66],
        ["Solomon Islands",15.72],
        ["Guinea-Bissau",15.96],
        ["Congo",16.05],
        ["Qatar",16.12],
        ["Eritrea",16.22],
        ["Sierra Leone",16.34],
        ["Vanuatu",16.35],
        ["Guinea",16.59],
        ["Chad",16.64],
        ["Tajikistan",16.65],
        ["Democratic Republic of the Congo",16.77],
        ["Oman",16.78],
        ["Burundi",16.83],
        ["Fiji",16.84],
        ["Mongolia",16.86],
        ["Madagascar",16.89],
        ["Mali",16.99],
        ["Liberia",17.03],
        ["Pakistan",17.07],
        ["Zambia",17.07],
        ["Niger",17.24],
        ["Papua New Guinea",17.24],
        ["Cameroon",17.25],
        ["Botswana",17.32],
        ["Burkina Faso",17.43],
        ["Mozambique",17.44],
        ["C\u00f4te d\u2019Ivoire",17.52],
        ["Angola",17.54],
        ["Guyana",17.56],
        ["Azerbaijan",17.64],
        ["Gambia",17.74],
        ["Togo",17.82],
        ["Ghana",17.94],
        ["Benin",17.97],
        ["Malawi",18.03],
        ["Nigeria",18.03],
        ["Sao Tome and Principe",18.1],
        ["Lao People's Democratic Republic",18.13],
        ["Samoa",18.15],
        ["Republic of Moldova",18.18],
        ["Comoros",18.21],
        ["Gabon",18.23],
        ["Bahrain",18.27],
        ["Equatorial Guinea",18.28],
        ["Ethiopia",18.29],
        ["Mauritania",18.31],
        ["United Republic of Tanzania",18.35],
        ["Indonesia",18.4],
        ["Djibouti",18.42],
        ["Kenya",18.48],
        ["South Sudan",18.48],
        ["Senegal",18.49],
        ["South Africa",18.5],
        ["Cambodia",18.61],
        ["Myanmar",18.61],
        ["Rwanda",18.65],
        ["Uganda",18.67],
        ["Uzbekistan",18.72],
        ["Yemen",18.74],
        ["The former Yugoslav Republic of Macedonia",18.75],
        ["Morocco",18.76],
        ["Namibia",18.76],
        ["Timor-Leste",18.81],
        ["Turkmenistan",18.85],
        ["Bolivia (Plurinational State of)",18.87],
        ["India",19.02],
        ["Nepal",19.03],
        ["Egypt",19.07],
        ["Honduras",19.07],
        ["Sudan",19.07],
        ["Kazakhstan",19.19],
        ["Kyrgyzstan",19.31],
        ["Saudi Arabia",19.33],
        ["Democratic People's Republic of Korea",19.47],
        ["Bhutan",19.48],
        ["Brunei Darussalam",19.56],
        ["Syrian Arab Republic",19.63],
        ["Ukraine",19.81],
        ["Philippines",19.95],
        ["Iraq",20.02],
        ["Serbia",20.03],
        ["Malaysia",20.06],
        ["Georgia",20.11],
        ["Bangladesh",20.14],
        ["Russian Federation",20.15],
        ["Montenegro",20.3],
        ["Grenada",20.48],
        ["Guatemala",20.49],
        ["Belarus",20.51],
        ["Armenia",20.52],
        ["Saint Vincent and the Grenadines",20.7],
        ["Bulgaria",20.92],
        ["Bosnia and Herzegovina",21.03],
        ["Maldives",21.04],
        ["Nicaragua",21.1],
        ["Romania",21.11],
        ["United Arab Emirates",21.18],
        ["Tonga",21.21],
        ["Mauritius",21.22],
        ["Jordan",21.44],
        ["Seychelles",21.44],
        ["Viet Nam",21.49],
        ["China",21.52],
        ["Trinidad and Tobago",21.53],
        ["Suriname",21.55],
        ["Barbados",21.69],
        ["Latvia",21.7],
        ["Lebanon",21.71],
        ["Antigua and Barbuda",21.77],
        ["Hungary",21.81],
        ["Sri Lanka",21.82],
        ["Algeria",21.85],
        ["Slovakia",21.92],
        ["Libya",22.01],
        ["Tunisia",22.11],
        ["Belize",22.15],
        ["Bahamas",22.22],
        ["Iran (Islamic Republic of)",22.29],
        ["Croatia",22.39],
        ["Brazil",22.42],
        ["Lithuania",22.49],
        ["T\u00fcrkiye",22.55],
        ["Albania",22.63],
        ["Mexico",22.67],
        ["Argentina",22.7],
        ["Ecuador",22.77],
        ["Dominican Republic",22.85],
        ["Cabo Verde",22.88],
        ["Cuba",22.91],
        ["Czechia",22.95],
        ["El Salvador",22.96],
        ["Paraguay",23.0],
        ["Estonia",23.2],
        ["Poland",23.26],
        ["Denmark",23.5],
        ["Venezuela (Bolivarian Republic of)",23.64],
        ["Uruguay",23.74],
        ["Peru",23.77],
        ["Jamaica",23.79],
        ["Thailand",23.81],
        ["Kuwait",23.98],
        ["United States of America",24.21],
        ["Chile",24.22],
        ["Colombia",24.27],
        ["Saint Lucia",24.29],
        ["Ireland",24.57],
        ["United Kingdom of Great Britain and Northern Ireland",24.62],
        ["Malta",24.71],
        ["Germany",24.76],
        ["Netherlands",24.8],
        ["Cyprus",24.83],
        ["Slovenia",24.83],
        ["Greece",24.85],
        ["Belgium",24.88],
        ["Norway",24.96],
        ["Panama",24.96],
        ["Portugal",25.0],
        ["Sweden",25.0],
        ["Iceland",25.02],
        ["Luxembourg",25.15],
        ["Austria",25.16],
        ["Finland",25.28],
        ["Israel",25.31],
        ["New Zealand",25.35],
        ["Costa Rica",25.4],
        ["Canada",25.7],
        ["Singapore",25.83],
        ["Republic of Korea",25.88],
        ["Italy",26.1],
        ["Australia",26.13],
        ["Switzerland",26.19],
        ["Spain",26.5],
        ["France",26.77],
        ["Japan",27.69],
        ["Central African Republic",13.37],
        ["Kiribati",13.65],
        ["Burundi",14.03],
        ["Afghanistan",14.21],
        ["Zambia",14.7],
        ["Congo",14.73],
        ["Somalia",14.74],
        ["Ethiopia",14.91],
        ["Mongolia",14.91],
        ["Rwanda",14.96],
        ["Qatar",15.23],
        ["Solomon Islands",15.27],
        ["Guinea-Bissau",15.38],
        ["Micronesia (Federated States of)",15.47],
        ["Eritrea",15.56],
        ["Bahrain",15.61],
        ["Malawi",15.76],
        ["Botswana",15.82],
        ["Mali",15.87],
        ["Eswatini",15.89],
        ["Haiti",15.92],
        ["Angola",16.01],
        ["Vanuatu",16.02],
        ["Chad",16.11],
        ["Niger",16.19],
        ["Madagascar",16.22],
        ["Fiji",16.25],
        ["Liberia",16.25],
        ["Guinea",16.26],
        ["Namibia",16.27],
        ["Sierra Leone",16.3],
        ["Democratic Republic of the Congo",16.38],
        ["Pakistan",16.38],
        ["Cameroon",16.41],
        ["Lao People's Democratic Republic",16.48],
        ["Oman",16.6],
        ["Burkina Faso",16.62],
        ["Uganda",16.62],
        ["Lesotho",16.65],
        ["Democratic People's Republic of Korea",16.77],
        ["C\u00f4te d\u2019Ivoire",16.81],
        ["India",16.84],
        ["Myanmar",16.87],
        ["Gabon",16.96],
        ["Nigeria",16.96],
        ["Comoros",17.03],
        ["Mauritania",17.04],
        ["Cambodia",17.07],
        ["Equatorial Guinea",17.14],
        ["Uzbekistan",17.14],
        ["Zimbabwe",17.14],
        ["Republic of Moldova",17.16],
        ["Mozambique",17.24],
        ["Ghana",17.25],
        ["Guyana",17.29],
        ["Togo",17.35],
        ["Benin",17.41],
        ["Brunei Darussalam",17.41],
        ["United Republic of Tanzania",17.41],
        ["Sao Tome and Principe",17.46],
        ["Papua New Guinea",17.63],
        ["Gambia",17.65],
        ["Senegal",17.65],
        ["South Sudan",17.65],
        ["The former Yugoslav Republic of Macedonia",17.67],
        ["Djibouti",17.68],
        ["Kazakhstan",17.76],
        ["Maldives",17.8],
        ["Turkmenistan",17.82],
        ["Azerbaijan",17.88],
        ["Jordan",17.95],
        ["Yemen",17.95],
        ["South Africa",17.96],
        ["Syrian Arab Republic",17.98],
        ["Tajikistan",17.98],
        ["Timor-Leste",17.98],
        ["Samoa",18.02],
        ["Kenya",18.1],
        ["Indonesia",18.18],
        ["Saudi Arabia",18.18],
        ["Bhutan",18.23],
        ["Kyrgyzstan",18.27],
        ["Sudan",18.33],
        ["Nepal",18.35],
        ["Bolivia (Plurinational State of)",18.36],
        ["Serbia",18.41],
        ["Georgia",18.45],
        ["Bangladesh",18.7],
        ["Russian Federation",18.7],
        ["Ukraine",18.83],
        ["Morocco",18.95],
        ["Bulgaria",19.2],
        ["Malaysia",19.21],
        ["Belarus",19.45],
        ["Saint Vincent and the Grenadines",19.46],
        ["Honduras",19.56],
        ["Iraq",19.57],
        ["Philippines",19.65],
        ["Romania",19.73],
        ["Mauritius",19.75],
        ["Trinidad and Tobago",19.76],
        ["United Arab Emirates",19.83],
        ["Egypt",19.99],
        ["China",20.09],
        ["Guatemala",20.12],
        ["Hungary",20.12],
        ["Armenia",20.23],
        ["Algeria",20.25],
        ["Suriname",20.49],
        ["Iran (Islamic Republic of)",20.54],
        ["Montenegro",20.61],
        ["Latvia",20.64],
        ["Slovakia",20.66],
        ["Belize",20.73],
        ["Lebanon",20.74],
        ["Tonga",20.79],
        ["Croatia",20.91],
        ["Estonia",20.94],
        ["Grenada",21.0],
        ["Viet Nam",21.0],
        ["Seychelles",21.05],
        ["Bosnia and Herzegovina",21.1],
        ["Albania",21.21],
        ["Sri Lanka",21.22],
        ["Czechia",21.26],
        ["Brazil",21.31],
        ["Antigua and Barbuda",21.32],
        ["Nicaragua",21.33],
        ["Bahamas",21.37],
        ["Poland",21.39],
        ["Tunisia",21.48],
        ["Barbados",21.52],
        ["Lithuania",21.66],
        ["Saint Lucia",21.66],
        ["Ireland",21.93],
        ["Libya",22.0],
        ["Denmark",22.08],
        ["Thailand",22.1],
        ["Cabo Verde",22.25],
        ["Jamaica",22.28],
        ["Malta",22.38],
        ["Argentina",22.52],
        ["El Salvador",22.58],
        ["Republic of Korea",22.66],
        ["Slovenia",22.67],
        ["T\u00fcrkiye",22.69],
        ["Mexico",22.73],
        ["United States of America",22.8],
        ["Peru",22.88],
        ["Venezuela (Bolivarian Republic of)",22.88],
        ["United Kingdom of Great Britain and Northern Ireland",22.91],
        ["Cuba",22.98],
        ["Colombia",23.06],
        ["Singapore",23.06],
        ["Chile",23.09],
        ["Ecuador",23.09],
        ["Greece",23.09],
        ["Portugal",23.11],
        ["Israel",23.13],
        ["Uruguay",23.14],
        ["Netherlands",23.23],
        ["Cyprus",23.24],
        ["Paraguay",23.27],
        ["Kuwait",23.5],
        ["Finland",23.56],
        ["Germany",23.57],
        ["Austria",23.69],
        ["Belgium",23.69],
        ["Luxembourg",23.72],
        ["Norway",23.74],
        ["Costa Rica",23.96],
        ["Iceland",23.97],
        ["Sweden",24.07],
        ["New Zealand",24.12],
        ["Canada",24.27],
        ["Dominican Republic",24.38],
        ["Italy",24.47],
        ["Switzerland",24.8],
        ["Spain",24.82],
        ["Australia",24.85],
        ["Panama",24.92],
        ["France",25.29],
        ["Japan",26.59]
    ]);

    var options = {
        colorAxis: {colors: ['#ffffff', 'pink', '#e31b23']},
        backgroundColor: '#81d4fa',
        datalessRegionColor: 'gray',
        defaultColor: '#f5f5f5',
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
