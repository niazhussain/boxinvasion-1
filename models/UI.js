



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


    var canvas = document.getElementById("canvas");

    canvas.addEventListener('click', getPosition , false);

    function getPosition(event)
    {
        x = event.offsetX || event.layerX ;
        y = event.offsetY || event.layerY ;

        IsHorizontal(x,y);
        IsVertical(x,y);

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