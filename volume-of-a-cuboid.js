// Bob needs a fast way to calculate the volume of a cuboid with three values:
//  length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
console.log(Kata.getVolumeOfCuboid(10, 10, 10));
