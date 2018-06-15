var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel', {
  
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
