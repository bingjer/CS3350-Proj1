/*   Group Name: VIVA
     Group Members: Adam Nelson
     Contact Info: adamnelson92@fullerton.edu
     Description: sketch.js is the powerhouse for the animation of Project 1. */

// ********GLOBALS**********
var g_canvas = { cell_size:5, wid:401, hgt:401 }; // Canvas global variable with the attributes in pixels. Went with 10pixel boxes for the best look


//var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
//var g_frame_mod = 24; // Update ever 'mod' frames.
//var g_stop = 0; // Go by default.


function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height =  sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 5, 50, 'blue', 'white' ); // rminor is 5 to account for the size of the cells
    let c = color('white');
    fill(c);
    stroke('red'); //sets the border around the shape
    rect(200 * sz, 0, 5, 5); //location in canvas x,y then dimensions of shape x,y
}

function draw()
{
    for (var ix = 0; i < g_canvas.wid; ++i) {
        for(var iy = 0; i < g_canvas.hgt; ++i) {
            
        }
    }
}

function draw_grid( rminor, rmajor, rstroke, rfill  ) 
{
    stroke( rstroke );
    fill( rfill );
    let sz = g_canvas.cell_size;
    let width =  sz * g_canvas.wid;
    let height = sz * g_canvas.hgt;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        let big_linep = (ix % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight( line_wgt );
        line( ix, 0, ix, height );
        strokeWeight( 1 );
        if ( ix % rmajor == 0 ) { text( ix/5, ix, 10 ); } 
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        let big_linep = (iy % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight( line_wgt );
        line( 0, iy, width, iy );
        strokeWeight( 1 );
        if ( iy % rmajor == 0 ) { text( iy/5, 0, iy + 10 ); }
    }
}

