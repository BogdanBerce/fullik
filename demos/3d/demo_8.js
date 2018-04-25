tell("Demo 8 - Connected Chains");

var chain = new Fullik.Chain( 0x999999 );

var startLoc = new Fullik.V3( 0, 0, 40 );
var endLoc = startLoc.plus( defaultBoneDirection.times(defaultBoneLength) );

var basebone = new Fullik.Bone( startLoc, endLoc );
chain.addBone( basebone );

for (var j = 0; j < 8; j++) {

    chain.addConsecutiveBone( defaultBoneDirection, defaultBoneLength );

};

solver.add( chain, target, true );

var chain2 = new Fullik.Chain( 0xFF9999 );
var base = new Fullik.Bone( new Fullik.V3(100, 0, 0), new Fullik.V3(110, 0, 0) );
chain2.addBone(base);
chain2.addConsecutiveBone( X_AXIS, 20 );
chain2.addConsecutiveBone( Y_AXIS, 20 );
chain2.addConsecutiveBone( Z_AXIS, 20 );

solver.connectChain( chain2, 0, 0, 'start', target, true, 0xFF0000 );
solver.connectChain( chain2, 0, 2, 'start', target, true, 0x00FF00 );
solver.connectChain( chain2, 0, 4, 'end'  , target, true, 0x0000FF );