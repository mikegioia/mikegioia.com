/**
*  Demostration examples of jquery.wrapSelection
*
* These examples were written by Noe Nieto <nnieto@noenieto.com> The
* wrapSelection jQuery Plugin was written by Stephe Smith and Jeremy
* Peterson
*/

$(document).ready(function(){
    $( '#mark' ).on( 'mousedown touchstart', function ( e ) {
        $('#test_area').wrapSelection().addClass( 'highlighted' );
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
});

