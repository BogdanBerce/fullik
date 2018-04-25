tell("Demo 6 - Freely Rotating Local Hinges");

var numChains = 3;
var rotStep = 360 / numChains;
var baseBoneConstraintAngleDegs = 20;
var hingeRotationAxis;
var color = 0xFF0000;

for (var i = 0; i < numChains; i++ ){

    switch (i){
        case 0: color = 0xFF0000; hingeRotationAxis = X_AXIS; break;
        case 1: color = 0x00FF00; hingeRotationAxis = Y_AXIS; break;
        case 2: color = 0x0000FF; hingeRotationAxis = Z_AXIS; break;
    }

    var chain = new Fullik.Chain( color );

    var startLoc = new Fullik.V3(0, 0, -40);
    startLoc = Fullik._Math.rotateYDegs( startLoc, rotStep * i );
    var endLoc = startLoc.plus( defaultBoneDirection.times(defaultBoneLength));

    var basebone = new Fullik.Bone( startLoc, endLoc );
    chain.addBone( basebone );

    for (var j = 0; j < 7; j++) {

        if (j % 2 == 0) chain.addConsecutiveFreelyRotatingHingedBone( defaultBoneDirection, defaultBoneLength, 'local', hingeRotationAxis );
        else chain.addConsecutiveBone( defaultBoneDirection, defaultBoneLength );

    };

    solver.add( chain, target, true );

}