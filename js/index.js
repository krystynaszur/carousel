var placePresentation = document.getElementById('place').innerHTML;
Mustache.parse(placePresentation);

var slides = [];

for(var i = 0; i < places.length; i++){
 var slide= Mustache.render(placePresentation, places[i]);
 slides.push(slide);
}

var cells = document.getElementsByClassName('carousel-cell');
for(var i = 0; i < cells.length; i++){
cells[i].insertAdjacentHTML('beforeend', slides[i]);
}

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

var restart = document.getElementById('restart');
restart.addEventListener( 'click', function() {
  flkty.selectCell("#carousel-cell1");
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

function initMap() {
  var montreal = {lat: 45.535836, lng: -73.712458};
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 3, center: montreal});

  for(var i = 0; i < cells.length; i++){
      var marker = new google.maps.Marker({position: places[i].coords, map: map});
    marker.sliderId = cells[i].id;

    google.maps.event.addListener(marker, "click", function() {
      flkty.selectCell('#'+this.sliderId);
      console.log(this.sliderId);
   })
  }  

  flkty.on( 'change', function(index) {
    map.setCenter(places[index].coords);
    map.setZoom(6);
  });
}
