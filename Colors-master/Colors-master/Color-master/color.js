//Declare the Color Object with our new keyword below here.
const Color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb)

  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[0] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[0] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let redpercentage = (rgb[0]/255)*100;
  Math.Round(redpercentage);
  return redpercentage;
};

//greenIntensity
Color.greenIntensity = function(rgb){
  let greenpercentage = (rgb[1]/255)*100;
  Math.Round(greenpercentage);
  return greenpercentage;
};
//blueIntensity
Color.blueIntensity = function(rgb){
  let bluepercentage = (rgb[2]/255)*100;
  Math.Round(bluepercentage);
  return bluepercentage;

//brightness
Color.redBrightness = function(rgb){
  let bright = (Color.greenIntensity+Color.blueIntensity+Color.redIntensity)/3;
  return bright;
};

//complement
color.Complement = function(rgb){
  let comp = [];
  comp[0] = (255 - rgb[0]);
  comp[1] = (255 - rgb[1]);
  comp[2] = (255 - rgb[2]);
  return comp;
