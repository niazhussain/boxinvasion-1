
var canvas = document.querySelector('canvas');
//Canvas Dimension
var cnvW = 500+20;
var cnvH = 500+20;
//Setting Canvas Dimensions
canvas.width = cnvW;
canvas.height = cnvH;
//Context variable
var c = canvas.getContext('2d');
/***************************************************/
//Array of the objects
//var board [11][11];
/***************************************************/
//RENDER DOTS
var dotX =0;
var dotY =0;
var dotHeight = 20;
var dotWidth = 20;
//DOT COLOR
c.fillStyle ='#469280';// 'rgba(27, 71, 142,0.75)';

// varaibles
var numberOfDots = 6;
var cellWidth = 100;

//Loop to render the dots
for (var i = dotX; i < numberOfDots; i++) {
    for (var j = dotY; j < numberOfDots; j++) {
        c.fillRect(i*cellWidth, j*cellWidth, dotWidth, dotHeight);
    }
}
/***************************************************/
//RENDER H-LINES
var hLineX = 20;
var hLineY = 0;
var hLineW = 80;
var hLineH = 20;
//H LINE COLOR
c.fillStyle = '#1d5a67';//'rgba(250, 144, 33,0.7)';
//Lopp to render H-lines
for (var i = 0; i < numberOfDots -1 ; i++) {
    for (var j = 0; j < numberOfDots; j++) {
        //c.fillRect((i*cellWidth)+hLineX,(j*cellWidth)+hLineY, hLineW, hLineH);
    }
}
/***************************************************/
//RENDER V-LINES
var vLineX = 0;
var vLineY = 20;
var vLineW = 20;
var vLineH = 80;
//V LINE COLOR
c.fillStyle = '#1d5a67';//'rgba(250, 144, 33,0.7)';
//Lopp to render V-lines
for (var i = 0; i < numberOfDots; i++) {
    for (var j = 0; j < numberOfDots-1; j++) {
        // c.fillRect((i*cellWidth)+vLineX,(j*cellWidth)+vLineY, vLineW, vLineH);
    }
}
/***************************************************/

/*
c.fillRect(dotX+100,dotY+100,dotWidth,dotHeight);
c.fillStyle = 'rgba(255, 255, 140, 0.9)';
c.fillRect(dotX+500,dotY+500,dotWidth,dotHeight);
c.fillStyle = 'rgba(255, 255, 140, 0.9)';
c.fillRect(dotX+200,dotY+400,dotWidth,dotHeight);
console.log("Print Done");
*/
/***************************************************/


var canvas = document.getElementById("canvas");

canvas.addEventListener('click', getPosition , false);

function getPosition(event)
{
    x = event.offsetX || event.layerX ;
    y = event.offsetY || event.layerY ;

    IsHorizontal(x,y);
    IsVertical(x,y);

    // alert("x: " + x + "  y: " + y);
    /*  vLineW = 80;
      vLineH = 20;
      if( (x > 20 && x < 100) && (y > 0  && y < 20) ) {
          c.fillRect(20,0, vLineW, vLineH);
      }
      if( (x > 120 && x < 200) && (y > 0 && y < 20) ) {
          c.fillRect(120,0, vLineW, vLineH);
      }
      if( (x > 220 && x < 300) && (y > 0  && y < 20) ){
          c.fillRect(220,0, vLineW, vLineH);
      }
      if( (x > 320 && x < 400)  && (y > 0  && y < 20) ) {
          c.fillRect(320,0, vLineW, vLineH);
      }

      vLineW = 20;
      vLineH = 80;
      if( (x > 0 && x < 20) && (y > 20  && y < 100) ) {
          c.fillRect(0,20, vLineW, vLineH);
      }
      if( (x > 0 && x < 20) && (y > 120 && y < 200) ) {
          c.fillRect(0,120, vLineW, vLineH);
      }
      if( (x > 0 && x < 20) && (y > 220  && y < 300) ){
          c.fillRect(0,220, vLineW, vLineH);
      }
      if( (x > 0 && x < 20)  && (y > 320  && y < 400) ) {
          c.fillRect(0,320, vLineW, vLineH);
      }*/
}


function IsHorizontal(x ,y)
{
    var IsHorizontal =false;
    var HorizontalLineNumber = Math.floor(x / 100);
    var VerticalLineNumber = Math.floor(y / 100);
    var XVal = x % 100;
    var YVal = y % 100;
    if( (XVal > 20 && XVal < 100)  && (YVal > 0  && YVal < 20) )
    {
        IsHorizontal = true;
        // alert("Horizontal -- Horizontal line no : " +HorizontalLineNumber + " Vertical line no: " + VerticalLineNumber);
        var hLineX = 20;
        var hLineY = 0;
        var hLineW = 80;
        var hLineH = 20;
        c.fillRect((HorizontalLineNumber*cellWidth)+hLineX,(VerticalLineNumber*cellWidth)+hLineY, hLineW, hLineH);
    }
    return IsHorizontal;
}

function IsVertical(x ,y)
{
    var IsVertical =false;
    var HorizontalLineNumber = Math.floor(x / 100);
    var VerticalLineNumber = Math.floor(y / 100);
    var XVal = x % 100;
    var YVal = y % 100;
    if( (XVal > 0 && XVal < 20)  && (YVal > 20  && YVal < 100) )
    {
        IsVertical = true;
        // alert("Horizontal -- Horizontal line no : " +HorizontalLineNumber + " Vertical line no: " + VerticalLineNumber);
        var vLineX = 0;
        var vLineY = 20;
        var vLineW = 20;
        var vLineH = 80;
        c.fillRect((HorizontalLineNumber*cellWidth)+vLineX,(VerticalLineNumber*cellWidth)+vLineY, vLineW, vLineH);
    }
    return IsVertical;
}
// HTMLCanvasElement.prototype.getPosition = getPosition;