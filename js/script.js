 $( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });

     $( "#tabs" ).tabs();

      $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );

