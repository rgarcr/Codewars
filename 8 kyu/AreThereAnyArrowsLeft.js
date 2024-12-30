// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:



// My solution
function anyArrows(arrows){
    return arrows.some(arrow => !arrow.damaged);
  }