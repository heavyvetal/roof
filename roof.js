//console.log(type,' xov = ',xov,'yov = ',yov);
function roofClass () {
    var parent = null;
    var child = [];
    var childSide = 0;
    var childPosition = 0;
    var couldBeCommonAndT = true;
    var warning = false;
    var warningType = '';
    var windowPlace = false;
    var windowType = '';
    var quadrant = '';
    var a = 0;
    var b = 0;
    var realX = 0;
    var realY = 0;
    var adjacent = 0;
    var adjacentpx = 0;
    var adjacentB = 0;
    var adjacentBpix = 0;
    // HalfHip
    var ch = [];
    var chpx = [];
    var halfHipLength = [];
    var oneHipLength = 0;
    var hh = [];
    var hhpx = [];
    var wh = [];
    var whpx = [];
    var adjacents  = [];
    var adjacentspx = [];
    // Angles
    var angleA = 0;
    var angleB = 0;
    var angleHip = [];
    var angleX = 0;
    var angleY = 0;
    var over = 0;
    var offsetx = 0;
    var offsety = 0;
    var offsetz = 0;
    var position = '';
    var ridge = 0;
    var scale = 1;
    var stx1 = 0;
    var sty1 = 0;
    var stz1 = 0;
    var orientation = '';
    var jointType = '';
    var cx = null;
    var type = '';
    var globalType = '';
    var side = null;
    var aov = a + 2*over;
    var bov = b + 2*over;
    var hSide = 0;
    var h = 0;
    var hpx = 0;
    var sx = 0;
    var sy = 0;
    var sxov = 0;
    var syov = 0;
    var dys = 0;
    var ridges = 0;
    var hip = false; //false!!!!!!!!!!!
    var rotated = false;
    var rotatedWindow = false;
    var overs = 0;
    var offsetxs = 0;
    var offsetys = 0;
    var parentOver = 0;
    var parentOvers = 0;
    var parentAngleA = 0;
    var parentAngleB = 0;
    var parentAngleJoint = 0;
    var possibleParents = [];
    var roofNum = 0;
    var selected = false;
    var x = [], y = [], z = [];
    var xov = [], yov = [], zov = [];
    var xSize = 0;
    var ySize = 0;
    var dy = 0;
    /****************************/
    this.a = a;
    this.b = b;
    this.aSideAndOvers = aov;
    this.bSideAndOvers = bov;
    this.angleA = angleA;
    this.angleB = angleB;
    this.angleHip = angleHip;
    this.angleX = angleX;
    this.angleY = angleY;
    this.child = child;
    this.childSide = childSide;
    this.childPosition = childPosition;
    this.color = ["#E30000", "#4B4B4B", "#0800FF"];
    this.context = cx;
    this.couldBeCommonAndT = couldBeCommonAndT;
    this.globalType = globalType;
    this.jointType = jointType;
    this.halfHipLength = halfHipLength;
    this.height = h;
    this.hip = hip;
    this.lengthProjectionCutout = dy;
    this.mainRoof = false;
    this.oneHipLength = oneHipLength;
    this.orientation = orientation;
    this.over = over;
    this.over_px = 0;
    this.parent = parent;
    this.parentAngleJoint = parentAngleJoint;
    this.position = position;
    this.possibleParents = possibleParents;
    this.quadrant = quadrant;
    this.realX = realX;
    this.realY = realY;
    this.ridge = ridge;
    this.rotated = rotated;
    this.rotatedWindow = rotatedWindow;
    this.roofNum = roofNum;
    this.S = 0;
    this.scale = scale;
    this.selected = selected;
    this.Sneckline = 0;
    this.side = side;
    this.startingX = stx1;
    this.startingY = sty1;
    this.startingZ = stz1;
    this.type = type;
    this.warning = warning;
    this.warningType = warningType;
    this.windowPlace = windowPlace;
    this.windowType = windowType;
    this.xMax = 0;
    this.xMin = 0;
    this.yMax = 0;
    this.yMin = 0;
    this.xRoof = xov;
    this.yRoof = yov;

    var invert = false;

    this.set = function (arr){
        if (arr.a != null) a = arr.a;
        if (arr.b != null) b = arr.b;
        if (arr.angles != null) angleA = arr.angles[0];
        if (arr.angles != null) angleB = arr.angles[1];
        if (arr.anglesHips != null) angleHip = arr.anglesHips;
        if (arr.child != null) child = arr.child;
        if (arr.cx != null) cx = arr.cx;
        if (arr.globalType != null) globalType = arr.globalType;
        if (arr.jointType != null) jointType = arr.jointType;
        if (arr.hip != null) hip = arr.hip;
        if (arr.halfHipLength != null) halfHipLength = arr.halfHipLength;
        if (arr.oneHipLength != null) oneHipLength = arr.oneHipLength;
        if (arr.orientation != null) orientation = arr.orientation;
        if (arr.over != null) over = arr.over;
        if (arr.parent != null) parent = arr.parent;
        if (arr.position != null) position = arr.position;
        if (arr.possibleParents != null) possibleParents = arr.possibleParents;
        if (arr.quadrant != null) quadrant = arr.quadrant;
        if (arr.realX != null) realX = arr.realX;
        if (arr.realY != null) realY = arr.realY;
        if (arr.roofNum != null) roofNum = arr.roofNum;
        if (arr.rotatedWindow != null) rotatedWindow = arr.rotatedWindow;
        if (arr.scale != null) scale = arr.scale;
        if (arr.side != null) side = arr.side;
        if (arr.stx1 != null) stx1 = arr.stx1;
        if (arr.sty1 != null) sty1 = arr.sty1;
        if (arr.stz1 != null) stz1 = arr.stz1;
        if (arr.type != null) type = arr.type;
        if (arr.warning != null) warning = arr.warning;
        if (arr.warningType != null) warningType = arr.warningType;
        if (arr.windowPlace != null) windowPlace = arr.windowPlace;
        if (arr.windowType != null) windowType = arr.windowType;
        if (arr.xMax != null) this.xMax = arr.xMax;
        if (arr.xMin != null) this.xMin = arr.xMin;
        if (arr.yMax != null) this.yMax = arr.yMax;
        if (arr.yMin != null) this.yMin = arr.yMin;

        this.a = a;
        this.b = b;
        this.angleA = angleA;
        this.angleB = angleB;
        this.angleHip = angleHip;
        this.child = child;
        this.context = cx;
        this.globalType = globalType;
        this.jointType = jointType;
        this.hip = hip;
        this.halfHipLength = halfHipLength;
        this.oneHipLength = oneHipLength;
        this.orientation = orientation;
        this.over = over;
        this.parent  = parent;
        this.position = position;
        this.possibleParents = possibleParents;
        this.quadrant = quadrant;
        this.realX = realX;
        this.realY = realY;
        this.roofNum = roofNum;
        this.rotatedWindow = rotatedWindow;
        this.scale = scale;
        this.side = side;
        this.startingX = stx1;
        this.startingY = sty1;
        this.startingZ = stz1;
        this.type = type;
        this.warning = warning;
        this.warningType = warningType;
        this.windowPlace = windowPlace;
        this.windowType = windowType;

        if (parent != null) parentOver = parent.over;
        if (parent != null) parentOvers = parent.overs;
        if (parent != null) parentAngleA = parent.angleA;
        if (parent != null) parentAngleB = parent.angleB;

    };

    this.setPrivateAgain = function () {

        a = this.a;
        b = this.b;
        angleA = this.angleA;
        angleB = this.angleB;
        angleHip = this.angleHip;
        child = this.child;
        globalType = this.globalType;
        jointType = this.jointType;
        hip = this.hip;
        halfHipLength = this.halfHipLength;
        oneHipLength = this.oneHipLength;
        orientation = this.orientation;
        over = this.over;
        parent  = this.parent;
        position = this.position;
        possibleParents = this.possibleParents;
        quadrant = this.quadrant;
        realX = this.realX;
        realY = this.realY;
        roofNum = this.roofNum;
        rotatedWindow = this.rotatedWindow;
        scale = this.scale;
        side = this.side;
        stx1 = this.startingX;
        sty1 = this.startingY;
        stz1 = this.startingZ;
        type = this.type;
        warning = this.warning;
        warningType = this.warningType;
        windowPlace = this.windowPlace;
        windowType = this.windowType;
        x = this.x;
        y = this.y;
        xov = this.xRoof;
        yov = this.yRoof;

        function showPrivateVariables() {
            var test = new Object();
            test.a = a;
            test.b = b;
            test.angleA = angleA;
            test.angleB = angleB;
            test.angleHip = angleHip;
            test.child = child;
            test.globalType = globalType;
            test.jointType = jointType;
            test.hip = hip;
            test.halfHipLength = halfHipLength;
            test.oneHipLength = oneHipLength;
            test.orientation = orientation;
            test.over = over;
            test.parent = parent;
            test.position = position;
            test.possibleParents = possibleParents;
            test.quadrant = quadrant;
            test.realX = realX;
            test.realY = realY;
            test.roofNum = roofNum;
            test.rotatedWindow = rotatedWindow;
            test.scale = scale;
            test.side = side;
            test.stx1 = stx1;
            test.sty1 = sty1;
            test.stz1 = stz1;
            test.type = type;
            test.warning = warning;
            test.warningType = warningType;
            test.windowPlace = windowPlace;
            test.windowType = windowType;
            test.x = x;
            test.y = y;
            test.xov = xov;
            test.yov = yov;
            //console.log(test);
        }
    };

    this.init = function() {

        // Each time x and y must be reset
        xov = []; yov = [];

        // Find windowPlace side
        if (parent != null) this.findDormerSide();

        if (windowPlace == false) {
            if ( (side == 'side1' || side == 'side2')) {
                a = realX;
                b = realY;
            }
            // Side invertion for children
            if ( (side == 'side3' || side == 'side4')) {
                a = realY;
                b = realX;
            }
            this.a = a;
            this.b = b;
        }

        if (windowPlace == true) {
            if ( (side == 'side1' || side == 'side2')) {
                a = realX;
                b = realY;
            }
            // Side invertion for children
            if ( (side == 'side3' || side == 'side4')) {
                a = realY;
                b = realX;
            }
        }

        //Each child must receive new parent angles below
        if (parent != null) {
            parentAngleA = parent.angleA;
            parentAngleB = parent.angleB;
            if (parent.rotated == false) {
                if (side == 'side1' || side == 'side2') parentAngleJoint = parentAngleB;
                if (side == 'side3' || side == 'side4') parentAngleJoint = parentAngleA;
            }
            if (parent.rotated == true) {
                if (side == 'side1' || side == 'side2') parentAngleJoint = parentAngleA;
                if (side == 'side3' || side == 'side4') parentAngleJoint = parentAngleB;
            }

            this.parentAngleJoint = parentAngleJoint;
        }

        //Inverting angle sides and sizes for 4Slope main roof, angleX is a real horizontal angle
        // Now it doesn't invert
        if (globalType == '4Slope') {
            angleX = angleA;
            angleY = angleB;
            this.angleX = angleX;
            this.angleY = angleY;
        }

        this.childPositions();
        this.logic();
        this.calcSize();
        this.calcHeight();
        if (parent != null) this.calcJoint();
        this.calcRidge();
        this.calcScale();

    };

    this.findDormerSide = function() {
        if(parent.orientation == 'horizontal') {
            if (rotatedWindow == false) changeSidesByQuadrant12();
            else changeSidesByQuadrant34();
            if (quadrant == 'none') side = 'none';
        }
        if(parent.orientation == 'vertical') {
            if (rotatedWindow == false) changeSidesByQuadrant34();
            else changeSidesByQuadrant12();
            if (quadrant == 'none') side = 'none';
        }
        function changeSidesByQuadrant12() {
            if (quadrant == 'q1' || quadrant == 'q2') side = 'side1';
            if (quadrant == 'q3' || quadrant == 'q4') side = 'side2';
        }
        function changeSidesByQuadrant34() {
            if (quadrant == 'q1' || quadrant == 'q3') side = 'side3';
            if (quadrant == 'q2' || quadrant == 'q4') side = 'side4';
        }
        this.side = side;
    };

    this.childPositions = function () {

        if (childOnly(1)) {
            childSide = 1;
            childPosition = 1;
        }
        if (childOnly(2)) {
            childSide = 1;
            childPosition = 2;
        }
        if (childOnly(3)) {
            childSide = 2;
            childPosition = 3;
        }
        if (childOnly(4)) {
            childSide = 2;
            childPosition = 4;
        }
        if (childOnly(5)) {
            childSide = 3;
            childPosition = 5;
        }
        if (childOnly(6)) {
            childSide = 3;
            childPosition = 6;
        }
        if (childOnly(7)) {
            childSide = 4;
            childPosition = 7;
        }
        if (childOnly(8)) {
            childSide = 4;
            childPosition = 8;
        }
        if (childOnly(1,2)) {
            childSide = 1;
            childPosition = 12;
        }
        if (childOnly(3,4)) {
            childSide = 2;
            childPosition = 34;
        }
        if (childOnly(5,6)) {
            childSide = 3;
            childPosition = 56;
        }
        if (childOnly(7,8)) {
            childSide = 4;
            childPosition = 78;
        }
        else {
            // Case of empty child array
            var emptyChild = true;
            for (var i in child) {
                if (child[i] != null) emptyChild = false;
            }
            if (emptyChild == true) {
                childSide = 0;
                childPosition = 0;
            }
        }

        function childOnly(num1,num2) {

            var res = false, res1 = false, res2 = false;

            for (var i=0; i <= child.length; i++) {
                if (i != num1 && i != num2) {
                    if (child[i] == null) res = true;
                    else res = false;
                }
            }
            if (arguments.length == 1) {
                if (child[num1] != null) res = true;
                else res = false;
            }
            if (arguments.length == 2) {
                if (child[num1] != null && child[num2] != null) res = true;
                else res = false;

            }
            return res;
        }

        this.childSide = childSide;
        this.childPosition = childPosition;
    };

    this.logic = function () {

        if (globalType == '1Slope') {
            if (parent == null) {
                type = '1M';
            }
            if (parent != null) {
                if (windowPlace == true) {
                    if (windowType == 'attic') type = '1AW';
                    if (windowType == 'chimney') type = '1CH';
                    if (windowType == 'dormer1') type = '1DW';
                    if (windowType == '') {
                        type = '1DW';
                        windowType = 'dormer1';
                    }
                }
                else {
                    type = '1Sep';
                    couldBeCommonAndT = false;
                    jointType = 'separate';
                }
            }
        }

        if (globalType == '2Slope') {
            //Main roof
            if (parent == null) {
                //If there are no children
                if (child.length == 0) type = '2T';

                if (childSide == '0') {
                    changeRoofType2SlopeMain('2T', '2T', '2T');
                }
                //Child 0
                if (childSide == '1') {
                    if (orientation == 'vertical') {
                        changeRoofType2SlopeMain('2T', '2C', '2T');
                    }
                    if (orientation == 'horizontal') {
                        changeRoofType2SlopeMain('2T', '2L', '2T');
                    }
                }
                //Child 1
                if (childSide == '2') {
                    if (orientation == 'vertical') {
                        changeRoofType2SlopeMain('2T', '2C', '2T');
                    }
                    if (orientation == 'horizontal') {
                        changeRoofType2SlopeMain('2T', '2L', '2T');
                    }
                }
                //Child 2
                if (childSide == '3') {
                    if (orientation == 'horizontal') {
                        changeRoofType2SlopeMain('2T', '2C', '2T');
                    }
                    if (orientation == 'vertical') {
                        changeRoofType2SlopeMain('2T', '2L', '2T');
                    }
                }
                //Child 3
                if (childSide == '4') {
                    if (orientation == 'horizontal') {
                        changeRoofType2SlopeMain('2T', '2C', '2T');
                    }
                    if (orientation == 'vertical') {
                        changeRoofType2SlopeMain('2T', '2L', '2T');
                    }
                }
            }

            // Child roof
            if (parent != null) { // parent != null

                if (parent.globalType == '2Slope') {

                    // Side 1, 2
                    // Parallel
                    if (orientation == parent.orientation && orientation == 'vertical' && (side == 'side1' || side == 'side2')) {
                        changeRoofType2Slope('2Sep', '2C', '2Sep', true);
                    }
                    if (orientation == parent.orientation && orientation == 'horizontal' && (side == 'side1' || side == 'side2')) {
                        changeRoofType2Slope('2Sep', '2Sep', '2Sep', false);
                    }
                    // Perpendicular
                    if (orientation != parent.orientation && orientation == 'vertical' && (side == 'side1' || side == 'side2')) {
                        changeRoofType2Slope('2T', '2L', '2Sep', true);
                    }
                    if (orientation != parent.orientation && orientation == 'horizontal' && (side == 'side1' || side == 'side2')) {
                        changeRoofType2Slope('2Sep', '2Sep', '2Sep', false);
                    }
                    // Side 3, 4
                    // Parallel
                    if (orientation == parent.orientation && orientation == 'horizontal' && (side == 'side3' || side == 'side4')) {
                        changeRoofType2Slope('2Sep', '2C', '2Sep', true);
                    }
                    if (orientation == parent.orientation && orientation == 'vertical' && (side == 'side3' || side == 'side4')) {
                        changeRoofType2Slope('2Sep', '2Sep', '2Sep', false);
                    }
                    // Perpendicular
                    if (orientation != parent.orientation && orientation == 'horizontal' && (side == 'side3' || side == 'side4')) {
                        changeRoofType2Slope('2T', '2L', '2Sep', true);
                    }
                    if (orientation != parent.orientation && orientation == 'vertical' && (side == 'side3' || side == 'side4')) {
                        changeRoofType2Slope('2Sep', '2Sep', '2Sep', false);
                    }

                }

                if (parent.globalType == '4Slope') {
                    // Side 1, 2
                    // Parallel
                    if (orientation == parent.orientation && orientation == 'vertical' && (side == 'side1' || side == 'side2')) {
                        changeRoofType2Slope('2T', '2L4', '2Sep', true);
                    }
                    if (orientation == parent.orientation && orientation == 'horizontal' && (side == 'side1' || side == 'side2')) {
                        changeRoofType2Slope('2Sep', '2Sep', '2Sep', false);
                    }
                    //Perpendicular
                    if (orientation != parent.orientation && orientation == 'vertical' && (side == 'side1' || side == 'side2')) {
                        changeRoofType2Slope('2T', '2L4', '2Sep', true);
                    }
                    if (orientation != parent.orientation && orientation == 'horizontal' && (side == 'side1' || side == 'side2')) {
                        changeRoofType2Slope('2Sep', '2Sep', '2Sep', false);
                    }
                    // Side 3, 4
                    // Parallel
                    if (orientation == parent.orientation && orientation == 'horizontal' && (side == 'side3' || side == 'side4')) {
                        changeRoofType2Slope('2T', '2L4', '2Sep', true);
                    }
                    if (orientation == parent.orientation && orientation == 'vertical' && (side == 'side3' || side == 'side4')) {
                        changeRoofType2Slope('2Sep', '2Sep', '2Sep', false);
                    }
                    //Perpendicular
                    if (orientation != parent.orientation && orientation == 'horizontal' && (side == 'side3' || side == 'side4')) {
                        changeRoofType2Slope('2T', '2L4', '2Sep', true);
                    }
                    if (orientation != parent.orientation && orientation == 'vertical' && (side == 'side3' || side == 'side4')) {
                        changeRoofType2Slope('2Sep', '2Sep', '2Sep', false);
                    }

                }

                // In the last order windowPlace window
                if (windowPlace == true) {
                    if (windowType == 'dormer2') {
                        type = '2DW';
                    }
                    if (windowType == 'dormer2TR') {
                        type = '2TR';
                    }
                    // Default case
                    else {
                        type = '2DW';
                        windowType = 'dormer2';
                    }
                }

            }

        }

        if (globalType == '3Slope') {

            if (parent != null) {

                // 3Slope orientation can be only such as here
                if (side == 'side1' || side == 'side2') {
                    orientation = 'vertical';
                    //warningSet('3Slope vertical');
                }
                if (side == 'side3' || side == 'side4') {
                    orientation = 'horizontal';
                   // warningSet('3Slope horizontal');
                }

                if (parent.globalType == '2Slope') {
                    //Side 1, 2
                    //Parallel
                    if (orientation == parent.orientation && orientation == 'vertical' && (side == 'side1' || side == 'side2')) {
                        changeRoofType3Slope('3Sep', '3C', '3Sep', true);
                    }
                    if (orientation == parent.orientation && orientation == 'horizontal' && (side == 'side1' || side == 'side2')) {
                        changeRoofType3Slope('3Sep', '3Sep', '3Sep', false);
                    }
                    //Perpendicular
                    if (orientation != parent.orientation && orientation == 'vertical' && (side == 'side1' || side == 'side2')) {
                        changeRoofType3Slope('3T', '3L', '3Sep', true);
                    }
                    if (orientation != parent.orientation && orientation == 'horizontal' && (side == 'side1' || side == 'side2')) {
                        changeRoofType3Slope('3Sep', '3Sep', '3Sep', false);
                    }
                    //Side 3, 4
                    //Parallel
                    if (orientation == parent.orientation && orientation == 'horizontal' && (side == 'side3' || side == 'side4')) {
                        changeRoofType3Slope('3Sep', '3C', '3Sep', true);
                    }
                    if (orientation == parent.orientation && orientation == 'vertical' && (side == 'side3' || side == 'side4')) {
                        changeRoofType3Slope('3Sep', '3Sep', '3Sep', false);
                    }
                    //Perpendicular
                    if (orientation != parent.orientation && orientation == 'horizontal' && (side == 'side3' || side == 'side4')) {
                        changeRoofType3Slope('3T', '3L', '3Sep', true);
                    }
                    if (orientation != parent.orientation && orientation == 'vertical' && (side == 'side3' || side == 'side4')) {
                        changeRoofType3Slope('3Sep', '3Sep', '3Sep', false);
                    }
                }

                if (parent.globalType == '4Slope') {
                    //Side 1, 2
                    //Parallel
                    if (orientation == parent.orientation && orientation == 'vertical' && (side == 'side1' || side == 'side2')) {
                        changeRoofType3Slope('3T', '3L4', '3Sep', true);
                    }
                    if (orientation == parent.orientation && orientation == 'horizontal' && (side == 'side1' || side == 'side2')) {
                        changeRoofType3Slope('3Sep', '3Sep', '3Sep', false);
                    }
                    //Perpendicular
                    if (orientation != parent.orientation && orientation == 'vertical' && (side == 'side1' || side == 'side2')) {
                        changeRoofType3Slope('3T', '3L4', '3Sep', true);
                    }
                    if (orientation != parent.orientation && orientation == 'horizontal' && (side == 'side1' || side == 'side2')) {
                        changeRoofType3Slope('3Sep', '3Sep', '3Sep', false);
                    }
                    //Side 3, 4
                    //Parallel
                    if (orientation == parent.orientation && orientation == 'horizontal' && (side == 'side3' || side == 'side4')) {
                        changeRoofType3Slope('3T', '3L4', '3Sep', true);
                    }
                    if (orientation == parent.orientation && orientation == 'vertical' && (side == 'side3' || side == 'side4')) {
                        changeRoofType3Slope('3Sep', '3Sep', '3Sep', false);
                    }
                    //Perpendicular
                    if (orientation != parent.orientation && orientation == 'horizontal' && (side == 'side3' || side == 'side4')) {
                        changeRoofType3Slope('3T', '3L4', '3Sep', true);
                    }
                    if (orientation != parent.orientation && orientation == 'vertical' && (side == 'side3' || side == 'side4')) {
                        changeRoofType3Slope('3Sep', '3Sep', '3Sep', false);
                    }
                }
            }
        }

        if (globalType == '4Slope') {
            if (parent == null) {

                //There are no children
                if (child.length == 0) {
                    type = '4M';
                }
                else {
                    //Child 0, Side 1
                    if (childSide == '1') {
                        if (orientation == 'horizontal') {
                            changeRoofType4Slope('4M', '4L', '4M');
                        }
                        if (orientation == 'vertical') {
                            changeRoofType4Slope('4M', '4C', '4M');
                        }
                    }
                    //Child 1, Side 2
                    if (childSide == '2') {
                        if (orientation == 'horizontal') {
                            changeRoofType4Slope('4M', '4L', '4M');
                        }
                        if (orientation == 'vertical') {
                            changeRoofType4Slope('4M', '4C', '4M');
                        }
                    }
                    //Child 2, Side 3
                    if (childSide == '3') {
                        if (orientation == 'horizontal') {
                            changeRoofType4Slope('4M', '4C', '4M');
                        }
                        if (orientation == 'vertical') {
                            changeRoofType4Slope('4M', '4L', '4M');
                        }
                    }
                    //Child 3, Side 4
                    if (childSide == '4') {
                        if (orientation == 'horizontal') {
                            changeRoofType4Slope('4M', '4C', '4M');
                        }
                        if (orientation == 'vertical') {
                            changeRoofType4Slope('4M', '4L', '4M');
                        }
                    }
                }
            }
            else if (parent != null) {
                // 4Sep orientation can be only such as here
                if (side == 'side1' || side == 'side2') {
                    orientation = 'vertical';
                }
                if (side == 'side3' || side == 'side4') {
                    orientation = 'horizontal';
                }
                type = '4Sep';
                couldBeCommonAndT = false;
                jointType = 'separate';
            }
        }

        // Halfhip for 4M and 2T roof
        if (parent == null && (type == '4M' || type == '4MH')) {
            if (hip == true) type = '4MH';
            else type = '4M';
        }
        if (parent == null && (type == '2T' || type == '2TH')) {
            if (hip == true) type = '2TH';
            else type = '2T';
        }

        function changeRoofType2Slope(arg1, arg2, arg3, arg4) {
            if (jointType == 'T') type = arg1;
            if (jointType == 'common') type = arg2;
            if (jointType == 'separate') type = arg3;
            if (arg4 != null) couldBeCommonAndT = arg4;
            separateJoint();
        }

        function changeRoofType3Slope(arg1, arg2, arg3, arg4) {
            if (jointType == 'T') type = arg1;
            if (jointType == 'common') type = arg2;
            if (jointType == 'separate') type = arg3;
            if (arg4 != null) couldBeCommonAndT = arg4;
            separateJoint();
        }

        function changeRoofType4Slope(arg1, arg2, arg3, arg4) {
            if (jointType == 'T') type = arg1;
            if (jointType == 'common') type = arg2;
            if (jointType == 'separate') type = arg3;
            if (arg4 != null) couldBeCommonAndT = arg4;
            separateJoint();
        }

        function changeRoofType2SlopeMain(arg1, arg2, arg3) {
            changeRoofType2Slope(arg1, arg2, arg3);
        }

        function separateJoint() {
            // 1Sep, 2Sep, 3Sep ... necessarily must have only separate joint
            var res = type.match('Sep');
            if (res) {
                jointType = 'separate';
            }
        }

        function childOR(arg1, arg2) {
            var res = false;
            for (var i in arguments) {
                for(var s in child) {
                    if (child[s].type == arguments[i]) res = true;
                }
            }
            return res;
        }

        this.couldBeCommonAndT = couldBeCommonAndT;
        this.orientation = orientation;
        this.type = type;
        this.jointType = jointType;
        this.windowType = windowType;
    };


    this.calcSize = function () {

        if (parent == null) {
            aov = a + 2*over;
            bov = b + 2*over;
        }
        if (parent != null) {
            aov = a + 2*over;
            bov = b + over;
        }

        // This inverts side for h-calculation in case of child
        if (parent == null) {
            if (orientation == 'horizontal') {
                hSide = bov;
            }
            if (orientation == 'vertical') {
                hSide = aov;
            }
        }
        if (parent != null) hSide = aov;

        this.aSideAndOvers = aov;
        this.bSideAndOvers = bov;
    };

    /*-------------------- Height calculations --------------------*/
    this.calcHeight = function () {
		/* ------- Main roof ------*/
		if (parent == null) {
		    if(type == '1M') {
		        if (orientation == 'horizontal') {
                    h = tan(deg(angleB))*hSide/2;
                }
                if (orientation == 'vertical') {
                    h = tan(deg(angleA))*hSide/2;
                }
            }
			if (type == '2T' || type == '2TH') {
                if (orientation == 'horizontal') {
                    h = tan(deg(angleB))*hSide/2;
                }
                if (orientation == 'vertical') {
                    h = tan(deg(angleA))*hSide/2;
                }
                if (hip == true) calcHip();
			}
			if (globalType == '4Slope' && type != '4MH') {

				var hx = tan(deg(angleA))*aov/2;
				var hy = tan(deg(angleB))*bov/2;

				if (hx < hy) {
					h = hx;
					orientation = 'vertical';
					this.orientation = orientation;
				}
				else {
					h = hy;
					orientation = 'horizontal';
					this.orientation = orientation;
				}
			// Calc hip
			}
            if (type == '4MH') {
			    if (orientation == 'horizontal') {
			        h = tan(deg(angleB))*bov/2;
                }
                if (orientation == 'vertical') {
                    h = tan(deg(angleA))*aov/2;
                }
                calcHip();
            }
		}
        /* ------- Child roof ------*/
        if (parent != null) {

            if (globalType == '1Slope'){
                h = tan(deg(angleB))*hSide;
            }

            if (type == '2DW'){
                h = tan(deg(angleA))*hSide/2;
            }

            if (globalType == '2Slope'){
                h = tan(deg(angleA))*hSide/2;
                if (jointType != 'separate') childHeightConstraint();
                if (hip == true) calcHip();
            }

            if (globalType == '3Slope'){
                h = tan(deg(angleA))*hSide/2;
                if (jointType != 'separate') childHeightConstraint();
            }

            if (type == '4Sep'){
                h = tan(deg(angleB))*(bov-over);
            }
        }

		function childHeightConstraint() {
            // Here AOV is the width of the child roof!!
            var hxparent = aov*tan(deg(parent.angleX))/2;
            var hyparent = aov*tan(deg(parent.angleY))/2;

		    if (parent.globalType == '4Slope') {

/*		        console.log('---');
		        //console.log(parent);
		        console.log(parent.height);
		        console.log(h);
		        console.log(hxparent);
		        console.log(hyparent);
		        console.log('---');*/

                if (h > parent.height) {
                    h = 0.99*parent.height;
                    angleA = Math.atan(2*h/aov)*180/Math.PI;
                    warningSet('parentHeight');
                }
               /* if ((side == 'side1' || side == 'side2') && h > hxparent) {
                    h = hxparent;
                    angleA = Math.atan(2*h/aov)*180/Math.PI;
                }
                if ((side == 'side3' || side == 'side4') && h > hyparent ) {
                    h = hyparent;
                    angleA = Math.atan(2*h/aov)*180/Math.PI;
                }*/
            }
            else if (parent.globalType == '2Slope') {
                if (h > parent.height) {
                    h = 0.9*parent.height;
                    angleA = Math.atan(2*h/aov)*180/Math.PI;
                    warningSet('parentHeight');
                }
                // In case of L-joint child gets the same height as the parent
                if (type == '2L') {
                    h = parent.height;
                    angleA = Math.atan(2*h/aov)*180/Math.PI;
                    warningSet('equalityOfHeights');
                }
            }
		}

        /*function heightConstraint3Slope() {
            var newAngleB = Math.atan(1.1*h/(bov+dy))*180/Math.PI;
            if (angleB < newAngleB) angleB = newAngleB;
        }*/

        function calcHip() {

            if (globalType == '2Slope') {

                twoHips();

                if (type == '2TH') {
                    twoHips();
                }

                //console.log('==calcHip== '+roofNum+'.halfHipLength:',halfHipLength);

                // ch[99] = halfHipLength[99]*bov;
                ch[99] = oneHipLength*bov;
                adjacents[99] = ch[99] * cos(deg(angleHip[99]));
                hh[99] = ch[99] * sin(deg(angleHip[99]));
                wh[99] = 2 * hh[99] / tan(deg(angleA));
                if (wh[99] > aov) {
                    wh[99] = aov;
                    hh[99] = h;
                    angleHip[99] = Math.asin(hh[99]/ch[99])*180/Math.PI;
                    warning = true;
                    warningSet('hipAngle');
                }
            }

            if (globalType == '4Slope') {
                twoHips();
            }

            function twoHips() {
                if (orientation == 'horizontal') {
                    ch[0] = halfHipLength[0]*aov;
                    ch[1] = halfHipLength[1]*aov;
                    adjacents[0] = ch[0] * cos(deg(angleHip[0]));
                    adjacents[1] = ch[1] * cos(deg(angleHip[1]));
                    hh[0] = ch[0] * sin(deg(angleHip[0]));
                    hh[1] = ch[1] * sin(deg(angleHip[1]));
                    wh[0] = 2 * hh[0] / tan(deg(angleB));
                    wh[1] = 2 * hh[1] / tan(deg(angleB));
                    for (var i = 0; i <= 1; i++) {
                        if (wh[i] > bov) {
                            wh[i] = bov;
                            hh[i] = h;
                            angleHip[i] = Math.asin(hh[i]/ch[0])*180/Math.PI;
                            warningSet('hipAngle');
                        }
                    }
                }
                if (orientation == 'vertical') {
                    ch[2]= halfHipLength[2]*bov;
                    ch[3]= halfHipLength[3]*bov;
                    adjacents[2] = ch[2] * cos(deg(angleHip[2]));
                    adjacents[3] = ch[3] * cos(deg(angleHip[3]));
                    hh[2] = ch[2] * sin(deg(angleHip[2]));
                    hh[3] = ch[3] * sin(deg(angleHip[3]));
                    wh[2] = 2 * hh[2] / tan(deg(angleA));
                    wh[3] = 2 * hh[3] / tan(deg(angleA));
                    for (var i = 2; i <= 3; i++) {
                        if (wh[i] > aov) {
                            wh[i] = aov;
                            hh[i] = h;
                            angleHip[i] = Math.asin(hh[i]/ch[0])*180/Math.PI;
                            warningSet('hipAngle');
                        }
                    }
                }
            }

        }
        // end of calcHip

        this.angleHip = angleHip;
        this.angleA = angleA;
        this.angleB = angleB;
        this.height = h;
        this.warning = warning;
        this.warningType = warningType;
    };

    /*-------------------- Joint calculations --------------------*/
    this.calcJoint = function () {

        if (windowPlace == true) {
            if (parent.globalType == '4Slope') {
                if (side == 'side1' || side == 'side2') {
                    dy = h/tan(deg(parentAngleB));
                }
                if (side == 'side3' || side == 'side4') {
                    dy = h/tan(deg(parentAngleA));
                }
            }
            if (parent.globalType == '2Slope') {
                if (parent.orientation == 'horizontal') {
                    if (side == 'side1' || side == 'side2') {
                        dy = h/tan(deg(parentAngleB));
                    }
                    if (side == 'side3' || side == 'side4') {
                        dy = 0;
                    }
                }
                if (parent.orientation == 'vertical') {
                    if (side == 'side1' || side == 'side2') {
                        dy = 0;
                    }
                    if (side == 'side3' || side == 'side4') {
                        dy = h/tan(deg(parentAngleA));
                    }
                }
            }
            if (parent.globalType == '1Slope') {
                if (parent.orientation == 'horizontal') {
                    if (side == 'side1' || side == 'side2') {
                        dy = 0;
                    }
                    if (side == 'side3' || side == 'side4') {
                        dy = h/tan(deg(parentAngleB));
                    }
                }
                if (parent.orientation == 'vertical') {
                    if (side == 'side1' || side == 'side2') {
                        dy = h/tan(deg(parentAngleB));
                    }
                    if (side == 'side3' || side == 'side4') {
                        dy = 0;
                    }
                }
            }
        }


        if (windowPlace == false) {
            if (side == 'side1' || side == 'side2') {
                if (parentAngleB == 0) {
                    dy = 0;
                }
                else {
                    dy = h/tan(deg(parentAngleB));
                }
            }
            if (side == 'side3' || side == 'side4') {
                if (parent != null) {
                    if (parent.rotated == true) {
                        if (parentAngleB == 0) {
                            dy = 0;
                        }
                        else {
                            dy = h/tan(deg(parentAngleB));
                        }
                    }
                    if (parent.rotated == false) {
                        if (parentAngleA == 0) {
                            dy = 0;
                        }
                        else {
                            dy = h/tan(deg(parentAngleA));
                        }
                    }
                }
                else {
                    if (parentAngleA == 0) {
                        dy = 0;
                    }
                    else {
                        dy = h/tan(deg(parentAngleA));
                    }
                }
            } // end of side3,4
        } // end of windowplace

        this.lengthProjectionCutout = dy;
    };

    /*-------------------- Ridge calculations --------------------*/
    this.calcRidge = function () {

        var fullLength = 0;
        var outLength = 0;

        if (globalType == '3Slope') {
            adjacentB = h/tan(deg(angleB));
            if (adjacentB > bov) {
                adjacentB = 0.95*bov;
                angleB = Math.atan(h/adjacentB)*180/Math.PI;
                warningSet('3SlopeMinAngleB');
            }
        }

        //Where is 3L4 ???
        /*if (type == '3C' || type == '3L' || type == '3Sep') {adjacentB = h/tan(deg(angleB));}*/

        if (type == '4M' || type == '4L') {

            if (orientation == 'vertical') {
                ridge = bov - 2 * h / tan(deg(angleB));
                if (ridge < 0) {
                    ridge = 0; //A constraint for big angles 4M
                }
                if (ridge > bov) {
                    ridge = bov;
                }
            }
            if (orientation == 'horizontal') {
                ridge = aov - 2 * h / tan(deg(angleA));
                if (ridge < 0) {
                    ridge = 0; //A constraint for big angles 4M
                }
                if (ridge > aov) {
                    ridge = aov;
                }
            }
        }

        if (type == '4Sep') {
            if (side == 'side1' || side == 'side2' || side == 'side3' || side == 'side4') {
                ridge = aov - 2*h/tan(deg(angleA));
                if (ridge <= 0) ridge = 0;  //A constraint for big angles 4S
                if (ridge > aov) {
                    ridge = aov;
                }
            }
        }

        this.angleB = angleB;
        this.ridge = ridge;
        this.warning = warning;
        this.warningType = warningType;
    };

    this.calcScale = function(){
        adjacentpx = adjacent*scale;
        adjacentBpix = adjacentB*scale;
        // Hips
        for (var i in adjacents) adjacentspx[i] = adjacents[i]*scale;
        for (var i in hh) hhpx[i] = hh[i]*scale;
        for (var i in wh) whpx[i] = wh[i]*scale;
        sx = a*scale;
        sy = b*scale;
        overs = over*scale;
        offsetxs = offsetx*scale;
        offsetys = offsety*scale;
        sxov = aov*scale;
        syov = bov*scale;
        hpx = h*scale;
        dys = dy*scale;
        ridges = ridge*scale;
        this.over_px = overs;
    };

    this.calcBases = function () {
        if (parent != null) {
            if (side == 'side1') this.calcSide1Base();
            if (side == 'side2') this.calcSide2Base();
            if (side == 'side3') this.calcSide3Base();
            if (side == 'side4') this.calcSide4Base();
            if (side == 'side13') this.calcSide13Base();
            if (side == 'side14') this.calcSide14Base();
            if (side == 'side23') this.calcSide23Base();
            if (side == 'side24') this.calcSide24Base();
            if (side == 'none') this.calcSideNoneBase();
        }
        else {
            this.calcMainBase();
        }
    };

    this.calcOverhangs = function () {
        if (parent != null) {
            if (side == 'side1') this.calcSide1Overhang();
            if (side == 'side2') this.calcSide2Overhang();
            if (side == 'side3') this.calcSide3Overhang();
            if (side == 'side4') this.calcSide4Overhang();

            if (side == 'side13') this.calcSide13Overhang();
            if (side == 'side14') this.calcSide14Overhang();
            if (side == 'side23') this.calcSide23Overhang();
            if (side == 'side24') this.calcSide24Overhang();
        }
        else {
            this.calcMainOverhang();
        }
    };

    this.init2 = function() {
        this.calcArea();
    };

    function warningSet(arg) {
        warning = true;
        warningType = arg;
    }

    var obj1, obj2, obj3, obj4;

    this.createOverhangObjects = function () {

        obj1 = new Class1Slope({ x:x, y:y, xov:xov, yov:yov, zov:zov, stz1:stz1, hpx:hpx, orientation:orientation, overs:overs, ridges: ridges, sxov: sxov, syov:syov });
        obj2 = new Class2Slope({ x:x, y:y, xov:xov, yov:yov, zov:zov, stz1:stz1, dys:dys, hpx:hpx, whpx:whpx, adjacentpx:adjacentpx, adjacentspx:adjacentspx, hip:hip, orientation:orientation, overs:overs, parent:parent, position: position, ridges:ridges, sxov:sxov, syov:syov });
        obj3 = new Class3Slope({ adjacentBpix:adjacentBpix, dys:dys, x:x, y:y, xov:xov, yov:yov, orientation:orientation, overs:overs, parent:parent, position: position,ridges:ridges, sxov:sxov, syov:syov });
        obj4 = new Class4Slope({ x:x, y:y, xov:xov, yov:yov, overs:overs, ridges: ridges, sxov: sxov, syov:syov });
    };

    /*------ Main roof ------*/
    this.calcMainBase = function () {
        x[1] = stx1;
        y[1] = sty1;
        x[2] = x[1] + sx;
        y[2] = y[1];
        x[3] = x[1];
        y[3] = y[1] + sy;
        x[4] = x[1] + sx;
        y[4] = y[1] + sy;
        this.x = x;
        this.y = y;
    };

    this.calcMainOverhang = function () {

        var obj1 = new Class1Slope({x:x, y:y, xov:xov, yov:yov, orientation:orientation, overs:overs, ridges:ridges, sxov:sxov, syov:syov, whpx:whpx, adjacentpx:adjacentpx, adjacentspx:adjacentspx, child:child, childSide: childSide, childPosition:childPosition});
        var obj2 = new Class2Slope({x:x, y:y, xov:xov, yov:yov, orientation:orientation, overs:overs, ridges:ridges, sxov:sxov, syov:syov, whpx:whpx, adjacentpx:adjacentpx, adjacentspx:adjacentspx, child:child, childSide: childSide, childPosition:childPosition});
        var obj4 = new Class4Slope({cx:cx, x:x, y:y, xov:xov, yov:yov, orientation: orientation, overs:overs, ridges: ridges, sxov: sxov, syov:syov, whpx:whpx, adjacentpx:adjacentpx, adjacentspx:adjacentspx, child:child, childSide:childSide, childPosition:childPosition});

        if (type == '1M') obj1.main.type1M();
        if (type == '2L') obj2.main.type2L();
        if (type == '2T') obj2.main.type2T();
        if (type == '2TH') obj2.main.type2TH();
        if (type == '2C') obj2.main.type2C();
        if (type == '4M') obj4.main.type4M();
        if (type == '4MH') obj4.main.type4MH();
        if (type == '4L') obj4.main.type4L();
        if (type == '4C') obj4.main.type4C();

        this.xRoof = xov;
        this.yRoof = yov;
    };
    /*------ Children ------*/
    this.calcSideNoneBase = function () {
        x[1] = stx1;
        x[2] = x[1] + sx;
        x[3] = x[1];
        x[4] = x[1] + sx;

        y[1] = sty1;
        y[2] = y[1];
        y[3] = y[1] + sy;
        y[4] = y[1] + sy;
        this.x = x;
        this.y = y;
    };
    this.calcSide13Base = this.calcSideNoneBase;
    this.calcSide14Base = this.calcSideNoneBase;
    this.calcSide23Base = this.calcSideNoneBase;
    this.calcSide24Base = this.calcSideNoneBase;
    /*-------------------------- SIDE 13 ---------------------------------*/
    this.calcSide13Overhang = function () {
        this.createOverhangObjects();
        if (type == '1Sep') obj1.side13.type1Sep();
    };
    /*-------------------------- SIDE 14 ---------------------------------*/
    this.calcSide14Overhang = function () {
        this.createOverhangObjects();
        if (type == '1Sep') obj1.side14.type1Sep();
    };
    /*-------------------------- SIDE 23 ---------------------------------*/
    this.calcSide23Overhang = function () {
        this.createOverhangObjects();
        if (type == '1Sep') obj1.side23.type1Sep();
    };
    /*-------------------------- SIDE 24 ---------------------------------*/
    this.calcSide24Overhang = function () {
        this.createOverhangObjects();
        if (type == '1Sep') obj1.side24.type1Sep();
    };
    /*-------------------------- SIDE 1 ---------------------------------*/
    this.calcSide1Base = function () {
        x[1] = stx1 + sx;
        x[2] = x[1] - sx;
        x[3] = x[1];
        x[4] = x[2];

        y[1] = sty1 + sy;
        y[2] = y[1];
        y[3] = y[1] - sy;
        y[4] = y[3];
        this.x = x;
        this.y = y;
    };
    this.calcSide1Overhang = function () {

        this.createOverhangObjects();

        if (type == '1Sep') obj1.side1.type1Sep();
        if (type == '1AW') obj1.side1.type1AW();
        if (type == '1CH') obj1.side1.type1CH();
        if (type == '1DW') obj1.side1.type1DW();
        if (type == '2T') obj2.side1.type2T();
        if (type == '2C') obj2.side1.type2C();
        if (type == '2L') obj2.side1.type2L();
        if (type == '2L4') obj2.side1.type2L4();
        if (type == '2Sep') obj2.side1.type2Sep();
        if (type == '2DW') obj2.side1.type2DW();
        if (type == '2TR') obj2.side1.type2TR();
        if (type == '3T') obj3.side1.type3T();
        if (type == '3C') obj3.side1.type3C();
        if (type == '3L') obj3.side1.type3L();
        if (type == '3L4') obj3.side1.type3L4();
        if (type == '3Sep') obj3.side1.type3Sep();
        if (type == '4Sep') obj4.side1.type4Sep();

        this.xRoof = xov;
        this.yRoof = yov;
        this.zov = zov;
    };

    /*------------------------------ SIDE 2 ---------------------------------*/
    this.calcSide2Base = function () {
        x[1] = stx1;
        x[2] = x[1] + sx;
        x[3] = x[1];
        x[4] = x[2];

        y[1] = sty1;
        y[2] = y[1];
        y[3] = y[1] + sy;
        y[4] = y[3];

        this.x = x;
        this.y = y;
    };
    this.calcSide2Overhang = function () {

        this.createOverhangObjects();
        
        if (type == '1Sep') obj1.side2.type1Sep();
        if (type == '1AW') obj1.side2.type1AW();
        if (type == '1CH') obj1.side2.type1CH();
        if (type == '1DW') obj1.side2.type1DW();
        if (type == '2T') obj2.side2.type2T();
        if (type == '2C') obj2.side2.type2C();
        if (type == '2L') obj2.side2.type2L();
        if (type == '2L4') obj2.side2.type2L4();
        if (type == '2Sep') obj2.side2.type2Sep();
        if (type == '2DW') obj2.side2.type2DW();
        if (type == '2TR') obj2.side2.type2TR();
        if (type == '3T') obj3.side2.type3T();
        if (type == '3C') obj3.side2.type3C();
        if (type == '3L') obj3.side2.type3L();
        if (type == '3L4') obj3.side2.type3L4();
        if (type == '3Sep') obj3.side2.type3Sep();
        if (type == '4L') obj4.side2.type4L.child();
        if (type == '4Sep') obj4.side2.type4Sep();

        this.xRoof = xov;
        this.yRoof = yov;
        this.zov = zov;
    };

    /*------------------------------ SIDE 3 ---------------------------------*/
    this.calcSide3Base = function () {
        x[1] = stx1 + sy;
        x[2] = x[1];
        x[3] = x[1] - sy;
        x[4] = x[2] - sy;

        y[1] = sty1;
        y[2] = y[1] + sx;
        y[3] = y[1];
        y[4] = y[2];
        this.x = x;
        this.y = y;
    };
    this.calcSide3Overhang = function () {

        this.createOverhangObjects();

        if (type == '1Sep') obj1.side3.type1Sep();
        if (type == '1AW') obj1.side3.type1AW();
        if (type == '1CH') obj1.side3.type1CH();
        if (type == '1DW') obj1.side3.type1DW();
        if (type == '2T') obj2.side3.type2T();
        if (type == '2C') obj2.side3.type2C();
        if (type == '2L') obj2.side3.type2L();
        if (type == '2L4') obj2.side3.type2L4();
        if (type == '2Sep') obj2.side3.type2Sep();
        if (type == '2DW') obj2.side3.type2DW();
        if (type == '2TR') obj2.side3.type2TR();
        if (type == '3T') obj3.side3.type3T();
        if (type == '3C') obj3.side3.type3C();
        if (type == '3L') obj3.side3.type3L();
        if (type == '3L4') obj3.side3.type3L4();
        if (type == '3Sep') obj3.side3.type3Sep();
        if (type == '4Sep') obj4.side3.type4Sep();

        this.xRoof = xov;
        this.yRoof = yov;
    };

    /*------------------------------ SIDE 4 ---------------------------------*/
    this.calcSide4Base = function () {
        x[1] = stx1;
        x[2] = x[1];
        x[3] = x[1] + sy;
        x[4] = x[2] + sy;

        y[1] = sty1 + sx;
        y[2] = y[1] - sx;
        y[3] = y[1];
        y[4] = y[2];
        this.x = x;
        this.y = y;
    };
    this.calcSide4Overhang = function () {

        this.createOverhangObjects();

        if (type == '1Sep') obj1.side4.type1Sep();
        if (type == '1AW') obj1.side4.type1AW();
        if (type == '1CH') obj1.side4.type1CH();
        if (type == '1DW') obj1.side4.type1DW();
        if (type == '2T') obj2.side4.type2T();
        if (type == '2C') obj2.side4.type2C();
		if (type == '2L') obj2.side4.type2L();
        if (type == '2L4') obj2.side4.type2L4();
        if (type == '2Sep') obj2.side4.type2Sep();
        if (type == '2DW') obj2.side4.type2DW();
        if (type == '2TR') obj2.side4.type2TR();
        if (type == '3T') obj3.side4.type3T();
        if (type == '3C') obj3.side4.type3C();
        if (type == '3L') obj3.side4.type3L();
        if (type == '3L4') obj3.side4.type3L4();
        if (type == '3Sep') obj3.side4.type3Sep();
        if (type == '4Sep') obj4.side4.type4Sep();

        this.xRoof = xov;
        this.yRoof = yov;
    };

    /*------ Drawing ------*/
    this.drawBase = function() {

        //if (roofNum==11) alert(rotatedWindow)
        //if(roofNum==3)alert(this.warning)
        console.log(roofNum,type,this);
        // console.log(roofNum,type,' x = ',x,'y = ',y);
        //console.log(roofNum,type,' xov = ',xov,'yov = ',yov);

        cx.lineWidth = 2;
        //cx.strokeStyle = this.color[1];
        if (this.selected == false) cx.strokeStyle = this.color[1];
        else cx.strokeStyle = this.color[2];

        cx.setLineDash([5,2]);
        cx.beginPath();
        cx.moveTo(x[1], y[1]);
        cx.lineTo(x[2], y[2]);
        cx.lineTo(x[4], y[4]);
        cx.lineTo(x[3], y[3]);
        cx.lineTo(x[1], y[1]);
        cx.stroke();
    };

    this.drawOverhang = function() {

        //alert(type)
        //console.log(roofNum,type,this);
        //console.log(roofNum,type,' xov = ',xov,'yov = ',yov);
        //console.log(roofNum,type,' zov = ',zov);
        //console.log(roofNum,type,this);

        var obj1 = new Class1Slope({xov:xov, yov:yov, cx:cx});
        var obj2 = new Class2Slope({xov:xov, yov:yov, cx:cx, parent:parent, child: child, childSide:childSide, childPosition:childPosition, side: side, position: position});
        var obj3 = new Class3Slope({xov:xov, yov:yov, cx:cx, parent:parent, child: child, childSide:childSide, childPosition:childPosition, side: side, position: position});
        var obj4 = new Class4Slope({xov:xov, yov:yov, cx:cx, parent:parent, childSide:childSide, childPosition:childPosition, orientation: orientation});

        cx.strokeStyle = this.color[0];

        cx.setLineDash([5,0]); //Reset dashed lines

        if (parent != null) {               //---------------Child roof
            cx.beginPath();
            if (type == '1Sep') obj1.overhang.type1Sep();
            if (type == '1AW') obj1.overhang.type1AW();
            if (type == '1CH') obj1.overhang.type1CH();
            if (type == '1DW') obj1.overhang.type1DW();
            if (type == '2T') obj2.overhang.type2T.child();
            if (type == '2DW') obj2.overhang.type2DW();
            if (type == '2TR') obj2.overhang.type2TR();
            if (type == '2C') obj2.overhang.type2C.child();
            if (type == '2Sep') obj2.overhang.type2Sep();
            if (type == '2L') obj2.overhang.type2L.child();
            if (type == '2L4') obj2.overhang.type2L4();
            if (type == '3T') obj3.overhang.type3T();
            if (type == '3C') obj3.overhang.type3C();
            if (type == '3L') obj3.overhang.type3L();
			if (type == '3L4') obj3.overhang.type3L4();
            if (type == '3Sep') obj3.overhang.type3Sep();
            if (type == '4L') obj4.overhang.type4L.child();
            if (type == '4Sep') obj4.overhang.type4Sep();
        }
        else {                            //---------------Main roof
            cx.beginPath();
            if (type == '1M') obj1.overhang.type1M();
            if (type == '2T') obj2.overhang.type2T.main();
            if (type == '2TH') obj2.overhang.type2TH.main();
            if (type == '2C') obj2.overhang.type2C.main();
            if (type == '2L') obj2.overhang.type2L.main();
            if (type == '4M') obj4.overhang.type4M();
            if (type == '4MH') obj4.overhang.type4MH();
            if (type == '4L') obj4.overhang.type4L.main();
            if (type == '4C') obj4.overhang.type4C.main();
            //cx.closePath(); //Is this necessary?
            cx.stroke();
        }

    };

    /*------- Area clculation -------*/
    this.calcArea = function () {

        //Must be overrided at each calculation
        this.S = 0;
        this.Sneckline = 0;

        if (type == '1M') {
            if (orientation == 'horizontal') {
                this.calcFaceShort({points: [1,2,3,4], angle: angleB});
            }
            if (orientation == 'vertical') {
                this.calcFaceShort({points: [1,2,3,4], angle: angleA});
            }
        }

        if (type == '1Sep') {
            this.calcFaceShort({points: [1,2,3,4], angle: angleB});
        }

        if (type == '1AW' || type == '1CH') {
            //neckline
            this.calcFace({x: [xov[1], xov[2], xov[3], xov[4]], y: [yov[1], yov[2], yov[3], yov[4]], angle: parentAngleJoint, neckline: true});
        }

        if (type == '1DW') {
            //if(roofNum==4)console.log('===',xov,yov)
            this.calcFace({x: [xov[1], xov[2], xov[3], xov[4]], y: [yov[1], yov[2], yov[3], yov[4]], angle: parentAngleJoint});
            //neckline
            this.calcFace({x: [x[1], x[2], x[3], x[4]], y: [y[1], y[2], y[3], y[4]], angle: parentAngleJoint, neckline: true});
        }

        if (type == '2T') {
            /// Main
            if (parent == null) {
                if (orientation == 'horizontal') {
                    this.calcFace({x: [xov[1], xov[2], xov[5], xov[6]], y: [yov[1], yov[2], yov[5], yov[6]], angle: angleB});
                    this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleB});
                }
                if (orientation == 'vertical') {
                    this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
                    this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
                }
            }
            /// Child
            else {
                if ((side == 'side1' || side == 'side2' && orientation == 'vertical') || (side == 'side3' || side == 'side4' && orientation == 'horizontal')) {
                    this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
                    this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
                    if (hip == true) this.calcHipFace2TChild();
                }
                if ((side == 'side1' || side == 'side2' && orientation == 'horizontal') || (side == 'side3' || side == 'side4' && orientation == 'vertical')) {
                    this.calcFace({x: [xov[1], xov[2], xov[5], xov[6]], y: [yov[1], yov[2], yov[5], yov[6]], angle: angleB});
                    this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleB});
                }
                //neckline
                this.calcFaceShort({points: [7,5,8], angle: parentAngleJoint, neckline: true});

            }
        }

        if (type == '2TH') {
            if (orientation == 'horizontal') {
                this.calcFaceShort({points: [1,2,7,9], angle: angleB});
                this.calcFaceShort({points: [5,6,7,9], angle: angleB});
                this.calcFaceShort({points: [5,6,8,10], angle: angleB});
                this.calcFaceShort({points: [3,4,8,10], angle: angleB});
                this.calcFaceShort({points: [7,5,8], angle: angleA});
                this.calcFaceShort({points: [9,6,10], angle: angleA});
            }
            if (orientation == 'vertical') {
                this.calcFaceShort({points: [1,3,7,9], angle: angleA});
                this.calcFaceShort({points: [5,6,7,9], angle: angleA});
                this.calcFaceShort({points: [5,6,8,10], angle: angleA});
                this.calcFaceShort({points: [2,4,8,10], angle: angleA});
                this.calcFaceShort({points: [7,5,8], angle: angleB});
                this.calcFaceShort({points: [9,6,10], angle: angleB});
            }
        }

        if (type == '2DW') {
            this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
            this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
            //neckline
            this.calcFace({x: [x[1], x[2], x[3], x[4]], y: [y[1], y[2], y[3], y[4]],  angle: parentAngleJoint, neckline: true});
        }

        if (type == '2TR') {
            this.calcFace({x: [xov[3], xov[5], xov[6]], y: [yov[3], yov[5], yov[6]], angle: angleA});
            this.calcFace({x: [xov[4], xov[5], xov[6]], y: [yov[4], yov[5], yov[6]], angle: angleA});
            //neckline
            this.calcFace({x: [xov[3], xov[4], xov[5]], y: [yov[3], yov[4], yov[5]],  angle: parentAngleJoint, neckline: true});
        }

        if (type == '2C') {
            if (parent == null) {
                if (orientation == 'vertical') {
                    this.calcFaceShort({points: [1,8,5,6], angle: angleA});
                    this.calcFaceShort({points: [2,4,5,6], angle: angleA});
                }
                if (orientation == 'horizontal') {
                    this.calcFaceShort({points: [1,8,5,6], angle: angleB});
                    this.calcFaceShort({points: [3,4,5,6], angle: angleB});
                }
            }
            else if (parent != null) {
               if (position == 'left') {
                   this.calcFaceShort({points: [7,3,8,6], angle: angleA});
                   this.calcFaceShort({points: [2,4,5,6], angle: angleA});
               }
                if (position == 'right') {
                    this.calcFaceShort({points: [9,4,8,6], angle: angleA});
                    this.calcFaceShort({points: [1,3,5,6], angle: angleA});
                }
            }
            if (hip == true) {
                this.calcFaceShort({points: [6,30,40], angle: angleB});
                this.calcFaceShort({points: [6,3,30], angle: angleA});
                this.calcFaceShort({points: [6,4,40], angle: angleA});
            }
        }

        if (type == '2Sep') {
            if (side == 'side1' || side == 'side2') {
                if (orientation == 'horizontal') {
                    this.calcFace({x: [xov[1], xov[2], xov[5], xov[6]], y: [yov[1], yov[2], yov[5], yov[6]], angle: angleB});
                    this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleB});
                }
                if (orientation == 'vertical') {
                    this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
                    this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
                    if (hip == true) this.calcHipFace2Sep();
                }
            }
            if (side == 'side3' || side == 'side4') {
                if (orientation == 'horizontal') {
                    this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
                    this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
                    if (hip == true) this.calcHipFace2Sep();
                }
                if (orientation == 'vertical') {
                    this.calcFace({x: [xov[1], xov[2], xov[5], xov[6]], y: [yov[1], yov[2], yov[5], yov[6]], angle: angleB});
                    this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleB});
                }
            }
        }

        if (type == '2L') {
            /// Main roof
            if (parent == null || side == null) {
                if (childSide == 1 || childSide == 2) {
                    if (orientation == 'horizontal') {
                        this.calcFace({x: [xov[1], xov[2], xov[5], xov[6]], y: [yov[1], yov[2], yov[5], yov[6]], angle: angleB});
                        this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleB});
                    }
                }
                if (childSide == 3 || childSide == 4) {
                    if (orientation == 'vertical') {
                        this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
                        this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
                    }
                }
            }
            /// Child roof
            if (parent != null) {
                this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
                this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
                if (hip == true) this.calcHipFace2Sep();
            }
        }

        if (type == '2L4') {
            this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
            this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
            if (hip == true) this.calcHipFace2Sep();
        }

        this.calcHipFace2Sep = function() {
            this.S = 0;
            //console.log(xov,yov);
            //console.log('S=',this.S);
            this.calcFaceShort({points: [1,31,5,6], angle: angleA});
            this.calcFaceShort({points: [31,3,6,30], angle: angleA});
            this.calcFaceShort({points: [2,42,5,6], angle: angleA});
            this.calcFaceShort({points: [42,4,6,40], angle: angleA});
            this.calcFaceShort({points: [6,30,40], angle: angleHip[99]});
        };
        this.calcHipFace2TChild = function() {
            this.S = 0;
            //console.log(xov,yov);
            //console.log('S=',this.S);
            this.calcFaceShort({points: [7,31,5,6], angle: angleA});
            this.calcFaceShort({points: [31,3,6,30], angle: angleA});
            this.calcFaceShort({points: [8,42,5,6], angle: angleA});
            this.calcFaceShort({points: [42,4,6,40], angle: angleA});
            this.calcFaceShort({points: [6,30,40], angle: angleHip[99]});
        };

        if (type == '3T') {
            this.calcFace({x: [xov[7], xov[3], xov[5], xov[6]], y: [yov[7], yov[3], yov[5], yov[6]], angle: angleA});
            this.calcFace({x: [xov[8], xov[4], xov[5], xov[6]], y: [yov[8], yov[4], yov[5], yov[6]], angle: angleA});
            this.calcFace({x: [xov[3], xov[6], xov[4]], y: [yov[3], yov[6], yov[4]], angle: angleB});
            //neckline
            this.calcFace({x: [xov[7], xov[5], xov[8]], y: [yov[7], yov[5], yov[8]], angle: parentAngleJoint, neckline: true});
        }

        if (type == '3C') {
            this.calcFace({x: [xov[9], xov[3], xov[7], xov[6]], y: [yov[9], yov[3], yov[7], yov[6]], angle: angleA});
            this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
            this.calcFace({x: [xov[3], xov[6], xov[4]], y: [yov[3], yov[6], yov[4]], angle: angleB});
        }

        if (type == '3L4') {
            if (position == 'left') {
                this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
                this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
                this.calcFace({x: [xov[3], xov[6], xov[4]], y: [yov[3], yov[6], yov[4]], angle: angleB});
            }
            if (position == 'right') {
                this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
                this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
                this.calcFace({x: [xov[3], xov[6], xov[4]], y: [yov[3], yov[6], yov[4]], angle: angleB});
            }
        }

        if (type == '3Sep') {
            this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
            this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
            this.calcFace({x: [xov[3], xov[6], xov[4]], y: [yov[3], yov[6], yov[4]], angle: angleB});
        }
        
        if (type == '4M') {
            if (orientation == 'horizontal') {
                this.calcFace({x: [xov[1], xov[2], xov[5], xov[6]], y: [yov[1], yov[2], yov[5], yov[6]], angle: angleB});
                this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleB});
                this.calcFace({x: [xov[1], xov[5], xov[3]], y: [yov[1], yov[5], yov[3]], angle: angleA});
                this.calcFace({x: [xov[2], xov[6], xov[4]], y: [yov[2], yov[6], yov[4]], angle: angleA});
            }
            if (orientation == 'vertical') {
                this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleA});
                this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleA});
                this.calcFace({x: [xov[1], xov[5], xov[2]], y: [yov[1], yov[5], yov[2]], angle: angleB});
                this.calcFace({x: [xov[3], xov[6], xov[4]], y: [yov[3], yov[6], yov[4]], angle: angleB});
            }
        }

        if (type == '4MH') {
            if (orientation == 'horizontal') {
                this.calcFace({x: [xov[1], xov[2], xov[7], xov[9]], y: [yov[1], yov[2], yov[7], yov[9]], angle: angleB});
                this.calcFace({x: [xov[7], xov[9], xov[5], xov[6]], y: [yov[7], yov[9], yov[5], yov[6]], angle: angleB});
                this.calcFace({x: [xov[3], xov[4], xov[8], xov[10]], y: [yov[3], yov[4], yov[8], yov[10]], angle: angleB});
                this.calcFace({x: [xov[8], xov[10], xov[5], xov[6]], y: [yov[8], yov[10], yov[5], yov[6]], angle: angleB});
                this.calcFace({x: [xov[7], xov[5], xov[8]], y: [yov[7], yov[5], yov[8]], angle: angleHip[0]});
                this.calcFace({x: [xov[9], xov[6], xov[10]], y: [yov[9], yov[6], yov[10]], angle: angleHip[1]});
            }
            if (orientation == 'vertical') {
                this.calcFace({x: [xov[1], xov[3], xov[7], xov[9]], y: [yov[1], yov[3], yov[7], yov[9]], angle: angleA});
                this.calcFace({x: [xov[7], xov[9], xov[5], xov[6]], y: [yov[7], yov[9], yov[5], yov[6]], angle: angleA});
                this.calcFace({x: [xov[2], xov[4], xov[8], xov[10]], y: [yov[2], yov[4], yov[8], yov[10]], angle: angleA});
                this.calcFace({x: [xov[8], xov[10], xov[5], xov[6]], y: [yov[8], yov[10], yov[5], yov[6]], angle: angleA});
                this.calcFace({x: [xov[7], xov[5], xov[8]], y: [yov[7], yov[5], yov[8]], angle: angleHip[2]});
                this.calcFace({x: [xov[9], xov[6], xov[10]], y: [yov[9], yov[6], yov[10]], angle: angleHip[3]});
            }
        }

        if (type == '4L') {
            if (childSide == '1'){
                this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleY});
                this.calcFace({x: [xov[7], xov[8], xov[5], xov[6]], y: [yov[7], yov[8], yov[5], yov[6]], angle: angleY});
                if (childPosition == '1') {
                    this.calcFace({x: [xov[1], xov[3], xov[7]], y: [yov[1], yov[3], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[3], xov[5], xov[7]], y: [yov[3], yov[5], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[2], xov[4], xov[6]], y: [yov[2], yov[4], yov[6]], angle: angleX});
                    this.calcFace({x: [xov[2], xov[6], xov[8]], y: [yov[2], yov[6], yov[8]], angle: angleY});
                }
                if (childPosition == '2') {
                    this.calcFace({x: [xov[2], xov[4], xov[7]], y: [yov[2], yov[4], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[4], xov[6], xov[7]], y: [yov[4], yov[6], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[3], xov[5]], y: [yov[1], yov[3], yov[5]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[5], xov[8]], y: [yov[1], yov[5], yov[8]], angle: angleY});
                }
            }
            if (childSide == '2'){
                this.calcFace({x: [xov[1], xov[2], xov[5], xov[6]], y: [yov[1], yov[2], yov[5], yov[6]], angle: angleY});
                this.calcFace({x: [xov[7], xov[8], xov[5], xov[6]], y: [yov[7], yov[8], yov[5], yov[6]], angle: angleY});
                if (childPosition == '3') {
                    this.calcFace({x: [xov[1], xov[3], xov[7]], y: [yov[1], yov[3], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[5], xov[7]], y: [yov[1], yov[5], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[2], xov[4], xov[6]], y: [yov[2], yov[4], yov[6]], angle: angleX});
                    this.calcFace({x: [xov[4], xov[6], xov[8]], y: [yov[4], yov[6], yov[8]], angle: angleY});
                }
                if (childPosition == '4') {
                    this.calcFace({x: [xov[2], xov[4], xov[7]], y: [yov[2], yov[4], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[2], xov[6], xov[7]], y: [yov[2], yov[6], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[3], xov[5]], y: [yov[1], yov[3], yov[5]], angle: angleX});
                    this.calcFace({x: [xov[3], xov[5], xov[8]], y: [yov[3], yov[5], yov[8]], angle: angleY});
                }
            }
            if (childSide == '3'){
                this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleX});
                this.calcFace({x: [xov[7], xov[8], xov[5], xov[6]], y: [yov[7], yov[8], yov[5], yov[6]], angle: angleX});
                if (childPosition == '5') {
                    this.calcFace({x: [xov[3], xov[4], xov[7]], y: [yov[3], yov[4], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[4], xov[6], xov[7]], y: [yov[4], yov[6], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[2], xov[5]], y: [yov[1], yov[2], yov[5]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[5], xov[8]], y: [yov[1], yov[5], yov[8]], angle: angleX});
                }
                if (childPosition == '6') {
                    this.calcFace({x: [xov[1], xov[2], xov[7]], y: [yov[1], yov[2], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[2], xov[5], xov[7]], y: [yov[2], yov[5], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[3], xov[4], xov[6]], y: [yov[3], yov[4], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[4], xov[6], xov[8]], y: [yov[4], yov[6], yov[8]], angle: angleX});
                }
            }
            if (childSide == '4'){
                this.calcFace({x: [xov[3], xov[1], xov[5], xov[6]], y: [yov[3], yov[1], yov[5], yov[6]], angle: angleY});
                this.calcFace({x: [xov[7], xov[8], xov[5], xov[6]], y: [yov[7], yov[8], yov[5], yov[6]], angle: angleX});
                if (childPosition == '7') {
                    this.calcFace({x: [xov[3], xov[4], xov[7]], y: [yov[3], yov[4], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[3], xov[6], xov[7]], y: [yov[3], yov[6], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[2], xov[5]], y: [yov[1], yov[2], yov[5]], angle: angleY});
                    this.calcFace({x: [xov[2], xov[5], xov[8]], y: [yov[2], yov[5], yov[8]], angle: angleX});
                }
                if (childPosition == '8') {
                    this.calcFace({x: [xov[1], xov[2], xov[7]], y: [yov[1], yov[2], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[5], xov[7]], y: [yov[1], yov[5], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[3], xov[4], xov[6]], y: [yov[3], yov[4], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[4], xov[6], xov[8]], y: [yov[4], yov[6], yov[8]], angle: angleX});
                }
            }
        }

        if (type == '4C') {
            if (orientation == 'horizontal') {
                angleX = angleA;
                angleY = angleB;
            }
            if (orientation == 'vertical') {
                angleX = angleB;
                angleY = angleA;
            }

            if (childSide == '1'){
                if (childPosition == '1') {
                    this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleX});
                    this.calcFace({x: [xov[2], xov[5], xov[7], xov[8]], y: [yov[2], yov[5], yov[7], yov[8]], angle: angleY});
                    this.calcFace({x: [xov[3], xov[7], xov[5], xov[6]], y: [yov[3], yov[7], yov[5], yov[6]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[3], xov[7]], y: [yov[1], yov[3], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[3], xov[4], xov[6]], y: [yov[3], yov[4], yov[6]], angle: angleY});
                }
                if (childPosition == '2') {
                    this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[5], xov[7], xov[8]], y: [yov[1], yov[5], yov[7], yov[8]], angle: angleY});
                    this.calcFace({x: [xov[3], xov[1], xov[5], xov[6]], y: [yov[3], yov[1], yov[5], yov[6]], angle: angleX});
                    this.calcFace({x: [xov[2], xov[4], xov[7]], y: [yov[2], yov[4], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[3], xov[4], xov[6]], y: [yov[3], yov[4], yov[6]], angle: angleY});
                }
            }
            if (childSide == '2'){
                if (childPosition == '3') {
                    this.calcFace({x: [xov[2], xov[4], xov[5], xov[6]], y: [yov[2], yov[4], yov[5], yov[6]], angle: angleX});
                    this.calcFace({x: [xov[4], xov[6], xov[7], xov[8]], y: [yov[4], yov[6], yov[7], yov[8]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[7], xov[5], xov[6]], y: [yov[1], yov[7], yov[5], yov[6]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[3], xov[7]], y: [yov[1], yov[3], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[2], xov[5]], y: [yov[1], yov[2], yov[5]], angle: angleY});
                }
                if (childPosition == '4') {
                    this.calcFace({x: [xov[1], xov[3], xov[5], xov[6]], y: [yov[1], yov[3], yov[5], yov[6]], angle: angleX});
                    this.calcFace({x: [xov[3], xov[6], xov[7], xov[8]], y: [yov[3], yov[6], yov[7], yov[8]], angle: angleY});
                    this.calcFace({x: [xov[2], xov[5], xov[6], xov[7]], y: [yov[2], yov[5], yov[6], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[2], xov[4], xov[7]], y: [yov[2], yov[4], yov[7]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[2], xov[5]], y: [yov[1], yov[2], yov[5]], angle: angleY});
                }
            }
            if (childSide == '3'){
                if (childPosition == '5') {
                    this.calcFace({x: [xov[1], xov[2], xov[5], xov[6]], y: [yov[1], yov[2], yov[5], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[5], xov[7], xov[8]], y: [yov[1], yov[5], yov[7], yov[8]], angle: angleX});
                    this.calcFace({x: [xov[4], xov[7], xov[5], xov[6]], y: [yov[4], yov[7], yov[5], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[3], xov[4], xov[7]], y: [yov[3], yov[4], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[2], xov[4], xov[6]], y: [yov[2], yov[4], yov[6]], angle: angleX});
                }
                if (childPosition == '6') {
                    this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[3], xov[5], xov[7], xov[8]], y: [yov[3], yov[5], yov[7], yov[8]], angle: angleX});
                    this.calcFace({x: [xov[2], xov[7], xov[5], xov[6]], y: [yov[2], yov[7], yov[5], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[2], xov[7]], y: [yov[1], yov[2], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[2], xov[4], xov[6]], y: [yov[2], yov[4], yov[6]], angle: angleY});
                }
            }
            if (childSide == '4'){
                if (childPosition == '7') {
                    this.calcFace({x: [xov[1], xov[2], xov[5], xov[6]], y: [yov[1], yov[2], yov[5], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[2], xov[6], xov[7], xov[8]], y: [yov[2], yov[6], yov[7], yov[8]], angle: angleX});
                    this.calcFace({x: [xov[3], xov[7], xov[5], xov[6]], y: [yov[3], yov[7], yov[5], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[3], xov[4], xov[7]], y: [yov[3], yov[4], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[3], xov[5]], y: [yov[1], yov[3], yov[5]], angle: angleX});
                }
                if (childPosition == '8') {
                    this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[4], xov[6], xov[7], xov[8]], y: [yov[4], yov[6], yov[7], yov[8]], angle: angleX});
                    this.calcFace({x: [xov[1], xov[7], xov[5], xov[6]], y: [yov[1], yov[7], yov[5], yov[6]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[2], xov[7]], y: [yov[1], yov[2], yov[7]], angle: angleY});
                    this.calcFace({x: [xov[1], xov[3], xov[5]], y: [yov[1], yov[3], yov[5]], angle: angleX});
                }
            }
        }

        if (type == '4Sep') {
            this.calcFace({x: [xov[3], xov[4], xov[5], xov[6]], y: [yov[3], yov[4], yov[5], yov[6]], angle: angleB});
            this.calcFace({x: [xov[1], xov[5], xov[3]], y: [yov[1], yov[5], yov[3]], angle: angleA});
            this.calcFace({x: [xov[2], xov[6], xov[4]], y: [yov[2], yov[6], yov[4]], angle: angleA});
        }

    };

    /*------- Universal area calculation unit -------*/
    this.calcFace = function (arr) {
        var neckline = arr.neckline;
        var angle = arr.angle;
        var side1 = 0, side2 = 0, side3 = 0, side4 = 0;
        var S = 0, S1 = 0, S2 = 0, p = 0;
        var x = [0];
        var y = [0];
        var lenx = arr.x.length;
        var leny = arr.y.length;
        for (var s = 1; s <= lenx; s++) {
            x[s] = arr.x[s-1];
        }
        for (var z = 1; z <= leny; z++) {
            y[z] = arr.y[z-1];
        }
        /*------ Triangle -------*/
        if (lenx == 3 && leny == 3) {
            side1 = sqrt(pow((x[2] - x[1]), 2) + pow((y[2] - y[1]), 2));
            side2 = sqrt(pow((x[3] - x[2]), 2) + pow((y[3] - y[2]), 2));
            side3 = sqrt(pow((x[3] - x[1]), 2) + pow((y[3] - y[1]), 2));
            p = (side1+side2+side3)/2;
            S = sqrt(p*(p-side1)*(p-side2)*(p-side3));
            S = S/cos(deg(angle))/pow(scale,2);
        }
        /*------ Quadrangle -------*/
        if (lenx == 4 && leny == 4) {
            // First triangle
            side1 = sqrt(pow((x[1] - x[2]), 2) + pow((y[1] - y[2]), 2));
            side2 = sqrt(pow((x[2] - x[3]), 2) + pow((y[2] - y[3]), 2));
            side3 = sqrt(pow((x[1] - x[3]), 2) + pow((y[1] - y[3]), 2));
            p = (side1+side2+side3)/2;
            S1 = sqrt(p*(p-side1)*(p-side2)*(p-side3));
            // Second triangle
            side1 = sqrt(pow((x[2] - x[3]), 2) + pow((y[2] - y[3]), 2));
            side2 = sqrt(pow((x[3] - x[4]), 2) + pow((y[3] - y[4]), 2));
            side3 = sqrt(pow((x[2] - x[4]), 2) + pow((y[2] - y[4]), 2));
            p = (side1+side2+side3)/2;
            S2 = sqrt(p*(p-side1)*(p-side2)*(p-side3));
            S = (S1 + S2)/cos(deg(angle))/pow(scale,2);;
        }
        //if (roofNum==6)console.log('S=',S);
        if (neckline != true) this.S += S;
        else this.Sneckline += S;
    };

    this.calcFaceShort = function (arr) {
        var angle = arr.angle;
        var neckline = arr.neckline;
        var points = arr.points;
        var x = [], y = [];
        for (var i in points) {
            x[i] = xov[points[i]];
            y[i] = yov[points[i]];
        }
        //if (roofNum==6)console.log(points);
        var data = {x: x, y: y, angle: angle};
        if (arr.neckline != null) data.neckline = arr.neckline;
        this.calcFace(data);
    };

    /*------ Clear -------*/
    this.clear = function () {
        cx.clearRect(0, 0, $("canvas").width(), $("canvas").height());
    };

}
/*---------- End of roof class ----------*/

function lines(arr) {

    var cx = arr.cx;
    var points = arr.points;
    var xov = arr.xov;
    var yov = arr.yov;

    for (var i in points) {
        if (i == 0) cx.moveTo(xov[points[i]], yov[points[i]]);
        cx.lineTo(xov[points[i]], yov[points[i]]);
    }

}

/*-------- Math shortened --------*/
function deg(arg) {
    return arg*Math.PI/180;
}
function sqr(arg) {
    return Math.pow(arg, 2);
}
function sqrt(arg) {
    return Math.sqrt(arg);
}
function sin(arg) {
    return Math.sin(arg);
}
function cos(arg) {
    return Math.cos(arg);
}
function tan(arg) {
    return Math.tan(arg);
}
function abs(arg) {
    return Math.abs(arg);
}
function pow(arg1, arg2) {
    return Math.pow(arg1, arg2);
}