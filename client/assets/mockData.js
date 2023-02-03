const generate = (num) => {
  const backgroundArr = ['Red', 'Green', 'Blue'];
  const skinArr = ['Dragon', 'Ogre', 'Elf'];
  const outfitArr = ['Spacesuit', 'Cowboy', 'Wizard'];
  
  const result = [];
  
  for (let i = 0; i < num; i++) {
    const image = {};
    image.id = i;
    image.Background = backgroundArr[Math.floor(Math.random() * 3)];
    image.Skin = skinArr[Math.floor(Math.random() * 3)];
    image.Outfit = outfitArr[Math.floor(Math.random() * 3)];
    result.push(image);
  }
  
  return result;
}

const mockData = generate(60);

module.exports = mockData;