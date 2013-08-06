$(function(){
	$( "ul.droptrue" ).sortable({
		connectWith: "ul.sortable",
		revert:200,
		tolerance: "pointer",
		opacity:0.85,
		start: function( event, ui ) {
		}
	});
	$( "ul.dropfalse" ).sortable({
		connectWith: "ul",
		dropOnEmpty: false
	});
	$( ".sortable" ).disableSelection();
});
