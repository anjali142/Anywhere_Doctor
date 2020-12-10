var step = {
  lat: 0.008983153,
  lng: 0.017242664
}
var p1 = {
  lat: 58.6017163,
  lng: 45.493
};
var p5 = {
  lat: p1.lat,
  lng: p1.lng
};
var p6 = {
  lat: p1.lat,
  lng: p1.lng + step.lng
};
var p7 = {
  lat: p1.lat + step.lat,
  lng: p1.lng + step.lng
};
var p8 = {
  lat: p1.lat + step.lat,
  lng: p1.lng
};


var jsonGeoData = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {
      "name": "footway",
      "id": 1111,
      "surface": "paved",
      "width": 2.5,
      "populousness": 3,
      "quality": 4,
      "rating": 3,
      "color": "yellow",
      "descendants": "1234, 1235, 4231"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [p5.lng, p5.lat],
          [p6.lng, p6.lat],
          [p7.lng, p7.lat],
          [p8.lng, p8.lat], 
          [p5.lng, p5.lat]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "4",
      "color": "yellow"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.355326533317566, 59.943875],
          [30.355299711227417, 59.943279052679095]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "4",
      "color": "yellow"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.35469889640808, 59.94328845650161],
          [30.355299711227417, 59.943279052679095]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "5",
      "color": "greenyellow"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.355632305145264, 59.943875],
          [30.355321168899536, 59.94388]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "5",
      "color": "greenyellow"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.355632305145264, 59.943875],
          [30.355637669563293, 59.94404075366086]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "5",
      "color": "greenyellow"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.355331, 59.94404478377827],
          [30.355321168899536, 59.94388]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "id": 1111,
      "surface": "paved",
      "width": 2.5,
      "populousness": 3,
      "quality": 5,
      "rating": 3,
      "color": "greenyellow",
      "descendants": "1234, 1235, 4231"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.355632305145264, 59.943875],
          [30.355605483055115, 59.94312187410796]
        ][p5.lng, p5.lat]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "5",
      "color": "greenyellow"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.355305075645447, 59.943279052679095],
          [30.35562962293625, 59.94327770927567]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "5",
      "color": "greenyellow"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.355305075645447, 59.943279052679095],
          [30.35529300570488, 59.943158146152065]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "5",
      "color": "greenyellow"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.355288982391357, 59.94308291520162],
          [30.35559743642807, 59.94308022837879]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "id": 1111,
      "surface": "paved",
      "width": 2.5,
      "populousness": 3,
      "quality": 2,
      "rating": 3,
      "color": "red",
      "descendants": "1234, 1235, 4231"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.35529300570488, 59.943158146152065],
          [30.35483568906784, 59.94316687830489]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "2",
      "color": "red"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.35529300570488, 59.943158146152065],
          [30.355283617973328, 59.94294454354344]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "2",
      "color": "red"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.35474583506584, 59.94388895221593],
          [30.35532519221306, 59.94387753349507]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "2",
      "color": "red"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.355614870786667, 59.943243452469716],
          [30.357611775398254, 59.94320113518995]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "6",
      "color": "limegreen"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.35559743642807, 59.94312590433706],
          [30.35757690668106, 59.94308022837879]
        ]
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "name": "footway",
      "quality": "6",
      "color": "limegreen"
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [
        [ // Реально значимы первые 6-7 знаков после точки
          [30.35559743642807, 59.94312590433706],
          [30.355589389801025, 59.94292842253599]
        ]
      ]
    }
  }]
};






var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};

var p1 = {
  lat: 58.6017163,
  lng: 45.493
};
var p2 = {
  lat: 58.6017163,
  lng: 45.51025
};
var p3 = {
  lat: 58.61069,
  lng: 45.493
};
var p4 = {
  lat: 58.6017,
  lng: 45.493
};


console.log(getDistance(p7, p8)  );


// Параметры начальной точки
var lat = p8.lat;
var lng = p8.lng;
var zoom = 18;

// Создаем карту с API Google Maps
function initAutocomplete() {
  var googleMapLatLng = new google.maps.LatLng(lat, lng);
  var GoogleMap = new google.maps.Map(document.getElementById('map_with_google_api'), {
    center: googleMapLatLng,
    zoom: zoom,
    maxZoom: 19,
    mapTypeId: "OSM",
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "hybrid", "OSM"],
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    },
  });
  // Подключаем OpenStreetMap
  GoogleMap.mapTypes.set("OSM", new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
      // "Wrap" x (logitude) at 180th meridian properly to enable horizontal infinite scroll
      // NB: Don't touch coord.x because coord param is by reference, and changing its x property breakes something in Google's lib 
      var tilesPerGlobe = 1 << zoom;
      var x = coord.x % tilesPerGlobe;
      if (x < 0) {
        x = tilesPerGlobe + x;
      }
      return "http://tile.openstreetmap.org/" + zoom + "/" + x + "/" + coord.y + ".png";
    },
    tileSize: new google.maps.Size(256, 256),
    name: "OpenStreetMap",
    maxZoom: 20
  }));

  // Создаем юзер-контрол поиска
  var input = document.getElementById('map_address_input');
  var add_hospital= "Hospitals near ";
  var searchBox = new google.maps.places.SearchBox( input);
  console.log(searchBox);
  var tp = add_hospital+searchBox;
  console.log(`second ${tp}`);

  // Bias the SearchBox results towards current map's viewport.
  GoogleMap.addListener('bounds_changed', function() {
    searchBox.setBounds(GoogleMap.getBounds());
  });

  var markers = [];
  // [START region_getplaces]
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      console.log("no such places");
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: GoogleMap,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    GoogleMap.fitBounds(bounds);
  });
  // [END region_getplaces]

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  // Use loadGeoJson to load it from file or URL 
  GoogleMap.data.addGeoJson(jsonGeoData);

  // Добавляем инпут в который будут выводиться текущие параметры и координаты клика 
  var infoLabel = document.getElementById('map_current_parameters_label');
  var rounder = 10000000;
  var GoToCoordsButton = $('#go_to_coords');
  var lineOptions = document.getElementById('selected_line_options');

  GoogleMap.addListener('zoom_changed', function() {
    infoLabel.value = 'Zoom: ' + GoogleMap.getZoom();
  });
  GoogleMap.addListener('center_changed', function() {
    var lat = Math.round(GoogleMap.getCenter().lat() * rounder) / rounder;
    var lng = Math.round(GoogleMap.getCenter().lng() * rounder) / rounder;
    infoLabel.value = 'Center: (' + lng + ', ' + lat + ')';
  });
  GoogleMap.addListener('click', function(event) {
    var lat = Math.round(event.latLng.lat() * rounder) / rounder;
    var lng = Math.round(event.latLng.lng() * rounder) / rounder;
    infoLabel.value = 'Coords: (' + lng + ', ' + lat + ')';
    lineOptions.innerHTML = '';
  });

  // Клик по кнопке go_to_coords
  $(document).on('click keydown', '#meta_data_container', function(event) {

    // Eсли нажал клавишу Enter или был клик мышкой
    if ((event.keyCode == 13) ||
      (event.keyCode = 'undefined' && (GoToCoordsButton.is(event.target) || !(GoToCoordsButton.has(event.target).length === 0)))) {

      alert(infoLabel.value);

    }
  });

  // Функция применяющая стили по триггеру isColorful
  GoogleMap.data.setStyle(function(feature) {
    var color = 'gray';
    var zIndex = 3;
    var strokeWeight = 6;
    if (feature.getProperty('isColorful') == true || feature.getProperty('isColorful') == undefined) {
      color = feature.getProperty('color');
      zIndex = 2;
      strokeWeight = 5;
    }
    return /** @type {google.maps.Data.StyleOptions} */ ({
      fillColor: color,
      strokeColor: color,
      strokeWeight: strokeWeight,
      zIndex: zIndex
    });
  });

  // По клику включаем/выключаем опцию раскраски.
  GoogleMap.data.addListener('click', function(event) {

    var lat = Math.round(event.latLng.lat() * rounder) / rounder;
    var lng = Math.round(event.latLng.lng() * rounder) / rounder;
    infoLabel.value = 'Coords: (' + lng + ', ' + lat + ')';

    if (event.feature.getProperty('isColorful') != true && event.feature.getProperty('isColorful') != undefined) {
      event.feature.setProperty('isColorful', true);
    } else {
      event.feature.setProperty('isColorful', false);
    }
  });

  // Добавляем попап на который будет выводиться инфа
  var infoPopup = new google.maps.InfoWindow({
    // Отступ от точки
    pixelOffset: new google.maps.Size(0, -10),
    // Убираем авто прокрутку если попап не помещается на карте
    disableAutoPan: true
  });

  // When the user hovers, tempt them to click by outlining the letters.
  // Call revertStyle() to remove all overrides. This will use the style rules
  // defined in the function passed to setStyle()
  GoogleMap.data.addListener('mouseover', function(event) {
    GoogleMap.data.revertStyle();
    GoogleMap.data.overrideStyle(event.feature, {
      strokeColor: 'gray',
      strokeWeight: 8,
      zIndex: 4
    });

  });

  GoogleMap.data.addListener('mousemove', function(event) {
    infoPopup.open(GoogleMap);
    infoPopup.setPosition(event.latLng);

    var lineOptionsText = '';
    if (event.feature.getProperty('name') != undefined) {
      lineOptionsText = lineOptionsText + 'Name: ' + event.feature.getProperty('name') + '</br>'
    }
    if (event.feature.getProperty('id') != undefined) {
      lineOptionsText = lineOptionsText + 'ID: ' + event.feature.getProperty('id') + '</br>'
    }
    if (event.feature.getProperty('surface') != undefined) {
      lineOptionsText = lineOptionsText + 'Surface: ' + event.feature.getProperty('surface') + '</br>'
    }
    if (event.feature.getProperty('width') != undefined) {
      lineOptionsText = lineOptionsText + 'Width: ' + event.feature.getProperty('width') + 'm</br>'
    }
    if (event.feature.getProperty('populousness') != undefined) {
      lineOptionsText = lineOptionsText + 'Populousness: ' + event.feature.getProperty('populousness') + '</br>'
    }
    if (event.feature.getProperty('quality') != undefined) {
      lineOptionsText = lineOptionsText + 'Quality: ' + event.feature.getProperty('quality') + '</br>'
    }
    if (event.feature.getProperty('rating') != undefined) {
      lineOptionsText = lineOptionsText + 'Rating: ' + event.feature.getProperty('rating') + '</br>'
    }
    if (event.feature.getProperty('color') != undefined) {
      lineOptionsText = lineOptionsText + 'Color: ' + event.feature.getProperty('color') + '</br>'
    }
    if (event.feature.getProperty('descendants') != undefined) {
      lineOptionsText = lineOptionsText + 'Descendants: ' + event.feature.getProperty('descendants') + '</br>'
    }

    infoPopup.setContent(lineOptionsText);

  });

  GoogleMap.data.addListener('mouseout', function(event) {
    GoogleMap.data.revertStyle();
    infoPopup.close(GoogleMap);
  });

  // По клику выводим инфу на лейбл сбоку.
  GoogleMap.data.addListener('click', function(event) {

    var lineOptionsText = '';
    if (event.feature.getProperty('name') != undefined) {
      lineOptionsText = lineOptionsText + 'Name: ' + event.feature.getProperty('name') + '</br>'
    }
    if (event.feature.getProperty('id') != undefined) {
      lineOptionsText = lineOptionsText + 'ID: ' + event.feature.getProperty('id') + '</br>'
    }
    if (event.feature.getProperty('surface') != undefined) {
      lineOptionsText = lineOptionsText + 'Surface: ' + event.feature.getProperty('surface') + '</br>'
    }
    if (event.feature.getProperty('width') != undefined) {
      lineOptionsText = lineOptionsText + 'Width: ' + event.feature.getProperty('width') + 'm</br>'
    }
    if (event.feature.getProperty('populousness') != undefined) {
      lineOptionsText = lineOptionsText + 'Populousness: ' + event.feature.getProperty('populousness') + '</br>'
    }
    if (event.feature.getProperty('quality') != undefined) {
      lineOptionsText = lineOptionsText + 'Quality: ' + event.feature.getProperty('quality') + '</br>'
    }
    if (event.feature.getProperty('rating') != undefined) {
      lineOptionsText = lineOptionsText + 'Rating: ' + event.feature.getProperty('rating') + '</br>'
    }
    if (event.feature.getProperty('color') != undefined) {
      lineOptionsText = lineOptionsText + 'Color: ' + event.feature.getProperty('color') + '</br>'
    }
    if (event.feature.getProperty('descendants') != undefined) {
      lineOptionsText = lineOptionsText + 'Descendants: ' + event.feature.getProperty('descendants') + '</br>'
    }

    lineOptions.innerHTML = lineOptionsText;

  });

}