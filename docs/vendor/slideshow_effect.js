
jQuery(function($){
    $( "#next_image" ).click(function(){
        next();
    });
    $( "#prev_image" ).click(function(){
        next();
    });
});

// Write all the names of images in slideshow
var images = [ "image1" , "image2", "image3"];

function next()
{
    $( '#slideshow_image' ).fadeOut(300,function()
    {
        var next_val = document.getElementById( "img_no" ).value;
        var next_val = Number(next_val)+1;
        if(next_val >= images.length)
        {
            next_val = 0;
        }
        $( '#slideshow_image' ).attr( 'src' , 'images/'+images[next_val]+'.jpg' );
        document.getElementById( "img_no" ).value = next_val;
    });
    $( '#slideshow_image' ).fadeIn(1000);
}

