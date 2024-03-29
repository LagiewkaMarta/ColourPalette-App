import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = hexColor => {
    const end = "#fff";
    return [
      chroma(hexColor)
        .darken(1.4)
        .hex(),
      hexColor,
      end
    ];
  };

  const getScale = (hexColor, numberOfColors) => {
    return chroma
      .scale(getRange(hexColor))
      .mode("lab")
      .colors(numberOfColors);
  };

  // generating palette with 10 different shades/hues of the same color -- from the lighest to the darkest
const generatePalette = starterPalette => {
  let newPalette = {
    ...starterPalette,
    colors: {}
  };
  for (let lvl of levels) {
    newPalette.colors[lvl] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css('rgba')
      });
    }
  }
  return newPalette;
};

export { generatePalette };
