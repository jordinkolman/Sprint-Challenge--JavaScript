// 1. Copy and paste your prototype in here and refactor into class syntax.
// Changed CuboidMaker and cuboid to CuboidMakerA and cuboidA to fix syntax errors with already declared classes
class CuboidMakerA{
    constructor(attributes) {
    this.length = attributes.length
    this.width = attributes.width
    this.height = attributes.height
  }
  volume() {
    return this.height * this.length * this.height
  }

  surfaceArea() {
    return (this.length * this.width + this.length * this.height + this.width * this.height ) * 2 
  }
}
  const cuboidA = new CuboidMakerA({
    length: 4,
    width: 5,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboidA.volume()); // 100
 console.log(cuboidA.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 
class CubeMaker extends CuboidMakerA{
      constructor(attributes) {
        super(attributes)
    }
    cubeVolume() {
        return this.length * this.length * this.length
    }
    cubeSurfaceArea() {
        return (this.length * this.width) * 6
    }
}

const cube = new CubeMaker({
    length: 12,
    width: 12,
    height: 12
})

console.log(cube.cubeVolume()) // 1728
console.log(cube.cubeSurfaceArea()) // 864
