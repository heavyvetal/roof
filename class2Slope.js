//var obj2 = new Class2Slope({dys:dys, x:x, y:y, xov:xov, yov:yov, orientation:orientation, overs:overs, parent:parent, position: position, ridges:ridges, sxov:sxov, syov:syov});
function Class2Slope (arr) {

    var adjacentpx = arr.adjacentpx;
    var adjacentspx = arr.adjacentspx;
    var child = arr.child;
    var childSide = arr.childSide;
    var childPosition = arr.childPosition;
    var cx = arr.cx;
    var dys = arr.dys;
    var hpx = arr.hpx;
    var hip = arr.hip;
    var x = arr.x;
    var y = arr.y;
    var xov = arr.xov;
    var yov = arr.yov;
    var zov = arr.zov;
    var orientation = arr.orientation;
    var overs = arr.overs;
    var parent = arr.parent;
    var position = arr.position;
    var ridges = arr.ridges;
    var side = arr.side;
    var sxov = arr.sxov;
    var syov = arr.syov;
    var stz1 = arr.stz1;
    var whpx = arr.whpx;

    //alert(stz1)

   /* var test = arr.test;
    var roofNum = roofNum;
    this.hip = hip;
    if(side=="side2" || side =='side4') {
        console.log(side);
        console.log('arr=',arr);
        console.log('hip=',this.hip);
        //alert(dys)
    }*/

    this.main = {
        type2T : function () {
            if (orientation == 'horizontal') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = x[4] + overs;
                xov[5] = xov[1];
                xov[6] = xov[2];

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = yov[1] + syov / 2;
                yov[6] = yov[2] + syov / 2;
            }
            if (orientation == 'vertical') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] + sxov/2;
                xov[6] = xov[5];

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = yov[3];
                yov[5] = yov[1];
                yov[6] = yov[3];
            }
        },

        type2TH : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] + overs;
            xov[3] = xov[1];
            xov[4] = xov[2];
            if (orientation == 'horizontal') {
                xov[5] = xov[1] + adjacentspx[0];
                xov[6] = xov[2] - adjacentspx[1];
                xov[7] = xov[1];
                xov[8] = xov[3];
                xov[9] = xov[2];
                xov[10] = xov[4];

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = yov[3];
                yov[5] = (yov[1] + yov[3])/ 2;
                yov[6] = yov[5];
                yov[7] = yov[5] - whpx[0]/2;
                yov[8] = yov[5] + whpx[0]/2;
                yov[9] = yov[6] - whpx[1]/2;
                yov[10] = yov[6] + whpx[1]/2;
            }
            if (orientation == 'vertical') {
                xov[5] = (xov[1] + xov[2])/2;
                xov[6] = xov[5];
                xov[7] = xov[5] - whpx[2]/2;
                xov[8] = xov[5] + whpx[2]/2;
                xov[9] = xov[6] - whpx[3]/2;
                xov[10] = xov[6] + whpx[3]/2;

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = yov[3];
                yov[5] = yov[1] + adjacentspx[2];
                yov[6] = yov[3] - adjacentspx[3];
                yov[7] = yov[1];
                yov[8] = yov[2];
                yov[9] = yov[3];
                yov[10] = yov[4];
            }
        },

        type2C : function () {
            //pos 1,2
            if (childSide == '1') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = (xov[1] + xov[2]) / 2;
                xov[6] = xov[5];

                if (childPosition == 1) {
                    xov[7] = (child[1].x[1] + child[1].x[2])/2;
                    xov[8] = xov[2];
                    xov[10] = child[1].xRoof[2];
                    xov[20] = child[1].xRoof[1];
                }
                if (childPosition == 2) {
                    xov[7] = (child[2].x[1] + child[2].x[2])/2;
                    xov[8] = xov[2];
                    xov[10] = child[2].xRoof[2];
                    xov[20] = child[2].xRoof[1];
                }

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = yov[1];
                yov[6] = yov[4];
                yov[7] = yov[5];
                yov[8] = yov[2];
                yov[10] = yov[1];
                yov[20] = yov[2];
            }
            // pos 3,4
            if (childSide == '2') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] + sxov / 2;
                xov[6] = xov[5];
                
                if (childPosition == 3) {
                    xov[7] = (child[3].x[1] + child[3].x[2])/2;
                    xov[8] = xov[1];
                    xov[30] = child[3].x[1] - child[3].overs;
                    xov[40] = child[3].x[2] + child[3].overs;
                }
                if (childPosition == 4) {
                    xov[7] = (child[4].x[1] + child[4].x[2])/2;
                    xov[8] = xov[1];
                    xov[30] = child[4].x[1] - child[4].overs;
                    xov[40] = child[4].x[2] + child[4].overs;
                }

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = yov[1];
                yov[6] = yov[4];
                yov[7] = yov[6];
                yov[8] = yov[6];
                yov[30] = yov[3];
                yov[40] = yov[4];
            }
            // pos 5,6
            if (childSide == '3') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[3];
                xov[6] = xov[4];
                xov[7] = xov[5];
                xov[8] = xov[5];
                xov[10] = xov[1];
                xov[30] = xov[3];

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = yov[3];
                yov[5] = (yov[1] + yov[3]) / 2;
                yov[6] = yov[5];
                
                if (childPosition == 5) {
                    yov[7] = (child[5].y[1] + child[5].y[2])/2;
                    yov[8] = yov[1];
                    yov[20] = child[5].y[2] - child[5].overs;
                    yov[40] = child[5].y[1] + child[5].overs;
                }
                if (childPosition == 6) {
                    yov[7] = (child[6].y[1] + child[6].y[2])/2;
                    yov[8] = yov[1];
                    yov[20] = child[6].y[2] - child[6].overs;
                    yov[40] = child[6].y[1] + child[6].overs;
                }
            }
            // pos 7,8
            if (childSide == '4') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1];
                xov[6] = xov[2];
                xov[7] = xov[6];
                xov[8] = xov[2];
                xov[20] = xov[2];
                xov[40] = xov[2];

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = yov[3];
                yov[5] = yov[1] + syov / 2;
                yov[6] = yov[5];

                if (childPosition == 7) {
                    yov[7] = (child[7].y[1] + child[7].y[2])/2;
                    yov[8] = yov[1];
                    yov[20] = child[7].y[2] - child[7].overs;
                    yov[40] = child[7].y[1] + child[7].overs;
                }
                if (childPosition == 8) {
                    yov[7] = (child[8].y[1] + child[8].y[2])/2;
                    yov[8] = yov[1];
                    yov[20] = child[8].y[2] - child[8].overs;
                    yov[40] = child[8].y[1] + child[8].overs;
                }
            }
        },

        type2L : function () {
            /*---------- Position 12 ----------*/
            if (childSide == '1' && childPosition == 12) {
                xov[1] = child[1].xRoof[1];
                xov[2] = child[2].xRoof[2];
                xov[3] = child[1].xRoof[2];
                xov[4] = child[2].xRoof[1];
                xov[5] = (xov[1] + xov[3])/2;
                xov[6] = (xov[2] + xov[4])/2;

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = yov[3];
                yov[5] = (yov[1] + yov[3]) / 2;
                yov[6] = yov[5];
            }
            /*---------- Position 34 ----------*/
            if (childSide == '2' && childPosition == 34) {
                xov[1] = child[3].xRoof[1];
                xov[2] = child[4].xRoof[2];
                xov[3] = child[3].xRoof[2];
                xov[4] = child[4].xRoof[1];
                xov[5] = (xov[1] + xov[3])/2;
                xov[6] = (xov[2] + xov[4])/2;

                yov[1] = y[1] - overs;
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = yov[3];
                yov[5] = (yov[1] + yov[3]) / 2;
                yov[6] = yov[5];
            }
            /*---------- Position 56 ----------*/
            if (childSide == '3' && childPosition == 56) {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = (xov[1] + xov[2])/2;
                xov[6] = xov[5];

                yov[1] = child[6].yRoof[2];
                yov[2] = child[6].yRoof[1];
                yov[3] = child[5].yRoof[1];
                yov[4] = child[5].yRoof[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = (yov[3] + yov[4]) / 2;
            }
            /*---------- Position 78 ----------*/
            if (childSide == '4' && childPosition == 78) {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = (xov[1] + xov[2])/2;
                xov[6] = xov[5];

                yov[1] = child[8].yRoof[2];
                yov[2] = child[8].yRoof[1];
                yov[3] = child[7].yRoof[1];
                yov[4] = child[7].yRoof[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = (yov[3] + yov[4]) / 2;
            }
            /*---------- Position 1,2 ----------*/
            if (childSide == '1') {
                if (childPosition == 2) {   //left
                    xov[1] = x[1] - overs;
                    xov[2] = child[2].x[2] - child[2].overs;
                    xov[3] = xov[1];
                    xov[4] = child[2].x[1] + child[2].overs;
                    xov[5] = xov[3];
                    xov[6] = (xov[2] + xov[4])/2;

                    yov[1] = y[1] - overs;
                    yov[2] = yov[1];
                    yov[3] = y[3] + overs;
                    yov[4] = yov[3];
                    yov[5] = yov[1] + syov / 2;
                    yov[6] = yov[5];
                }
                if (childPosition == 1) {   //right
                    xov[1] = child[1].x[1] + child[1].overs;
                    xov[2] = x[2] + overs;
                    xov[3] = child[1].x[2] - child[1].overs;
                    xov[4] = xov[2];
                    xov[5] = xov[1] - abs(xov[1] - xov[3])/2;
                    xov[6] = xov[4];

                    yov[1] = y[1] - overs;
                    yov[2] = yov[1];
                    yov[3] = y[3] + overs;
                    yov[4] = yov[3];
                    yov[5] = yov[1] + syov / 2;
                    yov[6] = yov[5];
                }
            }
            /*---------- Position 3,4 ----------*/
            if (childSide == '2') {
                if (childPosition == 3) {   //left
                    xov[1] = child[3].xRoof[1];
                    xov[2] = x[2] + overs;
                    xov[3] = child[3].xRoof[2];
                    xov[4] = x[4] + overs;
                    xov[5] = xov[1] + abs(xov[1] - xov[3]) / 2;
                    xov[6] = xov[2];

                    yov[1] = y[1] - overs;
                    yov[2] = yov[1];
                    yov[3] = y[3] + overs;
                    yov[4] = y[4] + overs;
                    yov[5] = yov[1] + syov / 2;
                    yov[6] = yov[2] + syov / 2;
                }

                if (childPosition == 4) {   //right
                    xov[1] = x[1] - overs;
                    xov[2] = child[4].xRoof[2];
                    xov[3] = xov[1];
                    xov[4] = child[4].xRoof[1];
                    xov[5] = xov[1];
                    xov[6] = (xov[2] + xov[4])/2;

                    yov[1] = y[1] - overs;
                    yov[2] = yov[1];
                    yov[3] = y[3] + overs;
                    yov[4] = y[4] + overs;
                    yov[5] = yov[1] + syov / 2;
                    yov[6] = yov[2] + syov / 2;
                }
            }
            /*---------- Position 5,6 ----------*/
            if (childSide == '3') {
                if (childPosition == 6) {   //left
                    xov[1] = x[1] - overs;
                    xov[2] = x[2] + overs;
                    xov[3] = xov[1];
                    xov[4] = xov[2];
                    xov[5] = (xov[1] + xov[2]) / 2;
                    xov[6] = xov[5];

                    yov[1] = child[6].yRoof[2];
                    yov[2] = child[6].yRoof[1];
                    yov[3] = y[3] + overs;
                    yov[4] = y[4] + overs;
                    yov[5] = (yov[1] + yov[2]) / 2;
                    yov[6] = yov[3];
                }

                if (childPosition == 5) { //right
                    xov[1] = x[1] - overs;
                    xov[2] = x[2] + overs;
                    xov[3] = xov[1];
                    xov[4] = xov[2];
                    xov[5] = (xov[1] + xov[2]) / 2;
                    xov[6] = xov[5];

                    yov[1] = y[1] - overs;
                    yov[2] = yov[1];
                    yov[3] = child[5].yRoof[1];
                    yov[4] = child[5].yRoof[2];
                    yov[5] = yov[1];
                    yov[6] = (yov[3] + yov[4]) / 2;
                }
            }
            /*---------- Position 7,8 ----------*/
            if (childSide == '4') {
                if (childPosition == 7) { //left
                    xov[1] = x[1] - overs;
                    xov[2] = x[2] + overs;
                    xov[3] = xov[1];
                    xov[4] = xov[2];
                    xov[5] = xov[1] + abs(xov[1] - xov[2])/2;
                    xov[6] = xov[5];

                    yov[1] = y[1] - overs;
                    yov[2] = yov[1];
                    yov[3] = child[7].yRoof[1];
                    yov[4] = child[7].yRoof[2];
                    yov[5] = yov[1];
                    yov[6] = (yov[3] + yov[4])/2;
                }
                if (childPosition == 8) { //right
                    xov[1] = x[1] - overs;
                    xov[2] = x[2] + overs;
                    xov[3] = xov[1];
                    xov[4] = xov[2];
                    xov[5] = xov[1] + abs(xov[1] - xov[2])/2;
                    xov[6] = xov[5];

                    yov[1] = child[8].yRoof[2];
                    yov[2] = child[8].yRoof[1];
                    yov[3] = y[3] + overs;
                    yov[4] = y[4] + overs;
                    yov[5] = yov[1] + abs(yov[1] - yov[2])/2;
                    yov[6] = yov[3];
                }
            }
        }
    };

    /*------------------------------ SIDE 1 ---------------------------------*/
    this.side1 = {

        type2T : function () {
            if (orientation == 'vertical') {
                xov[1] = x[1] + overs;
                xov[2] = x[2] - overs;
                xov[3] = xov[1];
                xov[4] = x[4] - overs;
                xov[5] = xov[1] - sxov / 2;
                xov[6] = xov[1] - sxov / 2;
                xov[7] = xov[1];
                xov[8] = xov[2];

                yov[1] = parent.yRoof[2];
                yov[2] = yov[1];
                yov[3] = y[3] - overs;
                yov[4] = y[4] - overs;
                yov[5] = parent.yRoof[2] + dys;
                yov[6] = yov[3];
                yov[7] = parent.yRoof[2];
                yov[8] = parent.yRoof[2];
                calcHalfHipSide1();
            }
            if (orientation == 'horizontal') {
                xov[1] = x[1] + overs;
                xov[2] = x[2] - overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] - sxov / 2;
                xov[6] = xov[1] - sxov / 2;
                xov[7] = xov[1];
                xov[8] = xov[2];

                yov[1] = parent.yRoof[2];
                yov[2] = yov[1];
                yov[3] = y[3] - overs;
                yov[4] = y[4] - overs;
                yov[5] = yov[1] + dys;
                yov[6] = yov[3];
                yov[7] = yov[1];
                yov[8] = yov[1];
            }
        },

        type2DW : function () {
            xov[1] = x[1] + overs;
            xov[2] = x[2] - overs;
            xov[3] = xov[1];
            xov[4] = xov[2];
            xov[5] = (xov[1] + xov[2]) / 2;
            xov[6] = xov[5];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3] - overs;
            yov[4] = y[4] - overs;
            yov[5] = yov[1] + dys;
            yov[6] = yov[3];
        },

        type2TR : function () {
            xov[1] = x[1];
            xov[2] = x[2];
            xov[3] = xov[1];
            xov[4] = xov[2];
            xov[5] = (xov[1] + xov[2]) / 2;
            xov[6] = xov[5];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3];
            yov[4] = y[4];
            yov[5] = yov[1];
            yov[6] = yov[3];
        },

        type2C : function () {
            if (position == 'left') {
                xov[1] = x[1] + overs;
                xov[2] = x[2] - overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = (xov[1] + xov[2])/2;
                xov[6] = xov[5];
                xov[7] = xov[1];
                xov[8] = xov[5];
                xov[9] = xov[2];

                yov[1] = y[1];
                yov[2] = y[2];
                yov[3] = y[3] - overs;
                yov[4] = y[4] - overs;
                yov[5] = y[1];
                yov[6] = yov[3];
                yov[7] = parent.yRoof[2];
                yov[8] = parent.yRoof[2];
                yov[9] = parent.yRoof[1];
            }
            if (position == 'right') {
                xov[1] = x[1] + overs;
                xov[2] = x[2] - overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = (xov[1] + xov[2])/2;
                xov[6] = xov[5];
                xov[7] = xov[1];
                xov[8] = xov[5];
                xov[9] = xov[2];

                yov[1] = y[1];
                yov[2] = y[2];
                yov[3] = y[3] - overs;
                yov[4] = y[4] - overs;
                yov[5] = y[1];
                yov[6] = yov[3];
                yov[7] = parent.yRoof[2];
                yov[8] = parent.yRoof[2];
                yov[9] = parent.yRoof[1];
            }
        },

        type2Sep : function () {
            if (orientation == 'vertical') {
                xov[1] = x[1] + overs;
                xov[2] = x[2] - overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] - sxov/2;
                xov[6] = xov[5];

                yov[1] = y[1];
                yov[2] = y[2];
                yov[3] = y[3] - overs;
                yov[4] = y[4] - overs;
                yov[5] = yov[1];
                yov[6] = yov[3]
                calcHalfHipSide1();
            }
            if (orientation == 'horizontal') {
                xov[1] = x[1] + overs;
                xov[2] = x[2] - overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1];
                xov[6] = xov[2];

                yov[1] = y[1];
                yov[2] = y[2];
                yov[3] = y[3] - overs;
                yov[4] = y[4] - overs;
                yov[5] = (yov[1] + yov[3])/2;
                yov[6] = yov[5];
            }
        },

        type2L : function () {
            if (position == 'left') {
                xov[1] = x[1] + overs;
                xov[2] = x[2] - overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] - sxov / 2;
                xov[6] = xov[5];

                yov[1] = parent.yRoof[4];
                yov[2] = parent.yRoof[2];
                yov[3] = y[3] - overs;
                yov[4] = yov[3];
                yov[5] = (yov[1] + yov[2])/2;
                yov[6] = yov[3];
            }
            if (position == 'right') {
                xov[1] = x[1] + overs;
                xov[2] = x[2] - overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] - sxov / 2;
                xov[6] = xov[5];

                yov[1] = parent.yRoof[1];
                yov[2] = parent.yRoof[3];
                yov[3] = y[3] - overs;
                yov[4] = yov[3];
                yov[5] = parent.yRoof[5];
                yov[6] = yov[3];
            }
            calcHalfHipSide1();
        },

        type2L4 : function () {
            xov[1] = x[1] + overs;
            xov[2] = x[2] - overs;
            xov[3] = xov[1];
            xov[4] = xov[2];
            xov[5] = (xov[1] + xov[2]) / 2;
            xov[6] = xov[5];

            yov[1] = parent.yRoof[2];
            yov[2] = parent.yRoof[1];
            yov[3] = y[3] - overs;
            yov[4] = yov[3];
            yov[5] = yov[1] + dys;
            yov[6] = yov[3];
            calcHalfHipSide1();
        }
    };

    function calcHalfHipSide1() {
        if (hip == true) {
            xov[30] = xov[6] + whpx[99]/2;
            xov[31] = xov[3];
            xov[40] = xov[6] - whpx[99]/2;
            xov[42] = xov[4];

            yov[6] = yov[3] + adjacentspx[99];
            yov[30] = yov[3];
            yov[31] = yov[6];
            yov[40] = yov[4];
            yov[42] = yov[6];
        }
    }
    /*------------------------------ SIDE 2 ---------------------------------*/
    this.side2 = {

        type2T : function () {
            if (orientation == 'vertical') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] + sxov / 2;
                xov[6] = xov[1] + sxov / 2;
                xov[7] = xov[1];
                xov[8] = xov[2];

                yov[1] = parent.yRoof[3];
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = yov[1] - dys;
                yov[6] = yov[3];
                yov[7] = parent.yRoof[3];
                yov[8] = parent.yRoof[3];
                calcHalfHipSide2();
            }
            if (orientation == 'horizontal') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] + sxov / 2;
                xov[6] = xov[1] + sxov / 2;
                xov[7] = xov[1];
                xov[8] = xov[2];

                yov[1] = parent.yRoof[3];
                yov[2] = yov[1];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = yov[1] - dys;
                yov[6] = yov[3];
                yov[7] = parent.yRoof[3];
                yov[8] = parent.yRoof[3];
            }
        },

        type2DW : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] + overs;
            xov[3] = xov[1];
            xov[4] = xov[2];
            xov[5] = (xov[1] + xov[2]) / 2;
            xov[6] = xov[5];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3] + overs;
            yov[4] = y[4] + overs;
            yov[5] = yov[1] - dys;
            yov[6] = yov[3];
        },

        type2TR : function () {
            xov[1] = x[1];
            xov[2] = x[2];
            xov[3] = xov[1];
            xov[4] = xov[2];
            xov[5] = (xov[1] + xov[2]) / 2;
            xov[6] = xov[5];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3];
            yov[4] = y[4];
            yov[5] = yov[1];
            yov[6] = yov[3];
        },

        type2C : function () {
            if (position == 'left') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] + sxov/2;
                xov[6] = xov[5];
                xov[7] = xov[1];
                xov[8] = xov[5];
                xov[9] = xov[2];

                yov[1] = y[1];
                yov[2] = y[2];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = y[1];
                yov[6] = yov[3];
                yov[7] = parent.yRoof[4];
                yov[8] = parent.yRoof[4];
                yov[9] = parent.y[3] + parent.overs;
            }
            if (position == 'right') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = (xov[1] + xov[2])/2;
                xov[6] = xov[5];
                xov[7] = xov[1];
                xov[8] = xov[5];
                xov[9] = xov[2];

                yov[1] = y[1];
                yov[2] = y[2];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = y[1];
                yov[6] = yov[3];
                yov[7] = parent.yRoof[3];
                yov[8] = parent.yRoof[3];
                yov[9] = parent.yRoof[4];
            }
            calcHalfHipSide2();
        },

        type2Sep : function () {
            if (orientation == 'vertical') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] + sxov/2;
                xov[6] = xov[5];

                yov[1] = y[1];
                yov[2] = y[2];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = yov[1];
                yov[6] = yov[3];
                calcHalfHipSide2();
            }
            if (orientation == 'horizontal') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1];
                xov[6] = xov[2];

                yov[1] = y[1];
                yov[2] = y[2];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = (yov[1] + yov[3])/2;
                yov[6] = yov[5];
            }
        },

        type2L : function () {
            if (position == 'left') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = x[4] + overs;
                xov[5] = xov[1] + sxov / 2;
                xov[6] = xov[1] + sxov / 2;

                yov[1] = parent.yRoof[1];
                yov[2] = parent.yRoof[3];
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = parent.yRoof[5];
                yov[6] = yov[3];
            }
            if (position == 'right') {
                xov[1] = x[1] - overs;
                xov[2] = x[2] + overs;
                xov[3] = xov[1];
                xov[4] = xov[2];
                xov[5] = xov[1] + sxov / 2;
                xov[6] = xov[1] + sxov / 2;

                yov[1] = parent.yRoof[4];
                yov[2] = parent.yRoof[2] ;
                yov[3] = y[3] + overs;
                yov[4] = y[4] + overs;
                yov[5] = (yov[1] + yov[2])/2;
                yov[6] = yov[3];
            }
            calcHalfHipSide2();
        },

        type2L4 : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] + overs;
            xov[3] = xov[1];
            xov[4] = xov[2];
            xov[5] = (xov[1] + xov[2]) / 2;
            xov[6] = xov[5];

            yov[1] = parent.yRoof[3];
            yov[2] = parent.yRoof[4];
            yov[3] = y[3] + overs;
            yov[4] = yov[3];
            yov[5] = yov[1] - dys;
            yov[6] = yov[3];
            calcHalfHipSide2();
        }

    };

    function calcHalfHipSide2() {
        if (hip == true) {
            xov[30] = xov[6] - whpx[99]/2;
            xov[31] = xov[3];
            xov[40] = xov[6] + whpx[99]/2;
            xov[42] = xov[4];

            yov[6] = yov[3] - adjacentspx[99];
            yov[30] = yov[3];
            yov[31] = yov[6];
            yov[40] = yov[4];
            yov[42] = yov[6];
        }
    }

    /*------------------------------ SIDE 3 ---------------------------------*/
    this.side3 = {

        type2T : function () {
            xov[1] = parent.xRoof[1];
            xov[2] = parent.xRoof[3];
            xov[3] = x[3] - overs;
            xov[4] = x[4] - overs;
            xov[5] = xov[1] + dys;
            xov[6] = xov[3];
            xov[7] = xov[1];
            xov[8] = xov[2];

            yov[1] = y[1] - overs;
            yov[2] = y[2] + overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
            yov[5] = yov[1] + sxov/2;
            yov[6] = yov[2] - sxov/2;
            yov[7] = yov[1];
            yov[8] = yov[2];
            calcHalfHipSide3();
        },

        type2DW : function () {
            xov[1] = x[1];
            xov[2] = xov[1];
            xov[3] = x[3] - overs;
            xov[4] = x[4] - overs;
            xov[5] = xov[1] + dys;
            xov[6] = xov[3];

            yov[1] = y[1] - overs;
            yov[2] = y[2] + overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
            yov[5] = (yov[1] + yov[2]) / 2;
            yov[6] = yov[5];
        },

        type2TR : function () {
            xov[1] = x[1];
            xov[2] = x[2];
            xov[3] = x[3];
            xov[4] = x[4];
            xov[5] = xov[1];
            xov[6] = xov[3];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3];
            yov[4] = y[4];
            yov[5] = (yov[1] + yov[2])/2;
            yov[6] = yov[5];
        },

        type2C : function () {
            if (position == 'right') {
                xov[1] = x[1];
                xov[2] = xov[1];
                xov[3] = x[3] - overs;
                xov[4] = xov[3];
                xov[5] = xov[1];
                xov[6] = xov[3];
                xov[7] = parent.xRoof[3];
                xov[8] = xov[7];
                xov[9] = xov[7];

                yov[1] = y[1] - overs;
                yov[2] = y[2] + overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = yov[5];
                yov[7] = yov[1];
                yov[8] = yov[5];
                yov[9] = yov[2];
            }
            if (position == 'left') {
                xov[1] = x[1];
                xov[2] = xov[1];
                xov[3] = x[3] - overs;
                xov[4] = xov[3];
                xov[5] = xov[1];
                xov[6] = xov[3];
                xov[7] = parent.xRoof[1];
                xov[8] = xov[7];
                xov[9] = xov[7];

                yov[1] = y[1] - overs;
                yov[2] = y[2] + overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = yov[5];
                yov[7] = yov[1];
                yov[8] = yov[5];
                yov[9] = yov[2];
            }
        },

        type2Sep : function () {
            if (orientation == 'horizontal') {
                xov[1] = x[1];
                xov[2] = x[2];
                xov[3] = x[3] - overs;
                xov[4] = x[4] - overs;
                xov[5] = xov[1];
                xov[6] = xov[3];

                yov[1] = y[1] - overs;
                yov[2] = y[2] + overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = yov[1] + sxov/2;
                yov[6] = yov[5];
                calcHalfHipSide3();
            }
            if (orientation == 'vertical') {
                xov[1] = x[1];
                xov[2] = x[2];
                xov[3] = x[3] - overs;
                xov[4] = x[4] - overs;
                xov[5] = (xov[1] + xov[3])/2;
                xov[6] = xov[5];

                yov[1] = y[1] - overs;
                yov[2] = y[2] + overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = yov[1];
                yov[6] = yov[2];
            }
        },

        type2L : function () {
            if (position == 'left') {
                xov[1] = parent.xRoof[2];
                xov[2] = parent.xRoof[1];
                xov[3] = x[3] - overs;
                xov[4] = x[4] - overs;
                xov[5] = (xov[1] + xov[2])/2;
                xov[6] = xov[3];

                yov[1] = y[1] - overs;
                yov[2] = y[2] + overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2])/2;
                yov[6] = yov[5];
            }
            if (position == 'right') {
                xov[1] = parent.xRoof[3];
                xov[2] = parent.xRoof[4];
                xov[3] = x[3] - overs;
                xov[4] = x[4] - overs;
                xov[5] = (xov[1] + xov[2])/2;
                xov[6] = xov[3];

                yov[1] = y[1] - overs;
                yov[2] = y[2] + overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2])/2;
                yov[6] = yov[5];
            }
            calcHalfHipSide3();
        },

        type2L4 : function () {
            if (position == 'left') {
                xov[1] = parent.xRoof[1];
                xov[2] = parent.xRoof[3];
                xov[3] = x[3] - overs;
                xov[4] = xov[3];
                xov[5] = xov[1] + dys;
                xov[6] = xov[3];

                yov[1] = y[1] - overs;
                yov[2] = y[2] + overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = yov[5];
            }
            if (position == 'right') {
                xov[1] = parent.xRoof[1];
                xov[2] = parent.xRoof[3];
                xov[3] = x[3] - overs;
                xov[4] = xov[3];
                xov[5] = xov[1] + dys;
                xov[6] = xov[3];

                yov[1] = y[1] - overs;
                yov[2] = y[2] + overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = yov[5];
            }
            calcHalfHipSide3();
        }

    };
    
    function calcHalfHipSide3() {
        if (hip == true) {
            yov[30] = yov[6] + whpx[99]/2;
            yov[40] = yov[6] - whpx[99]/2;

            xov[6] = xov[3] + adjacentspx[99];
            xov[30] = xov[3];
            xov[40] = xov[4];

            yov[31] = yov[3];
            yov[42] = yov[4];
            xov[31] = xov[6];
            xov[42] = xov[6];
        }
    }

    /*------------------------------ SIDE 4 ---------------------------------*/
    this.side4 = {

        type2T : function () {
            xov[1] = parent.xRoof[4];
            xov[2] = parent.xRoof[2];
            xov[3] = x[3] + overs;
            xov[4] = x[4] + overs;
            xov[5] = xov[1] - dys;
            xov[6] = xov[3];
            xov[7] = xov[1];
            xov[8] = xov[2];

            yov[1] = y[1] + overs;
            yov[2] = y[2] - overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
            yov[5] = yov[1] - sxov/2;
            yov[6] = yov[2] + sxov/2;
            yov[7] = yov[1];
            yov[8] = yov[2];
            calcHalfHipSide4();
        },

        type2DW : function () {
            xov[1] = x[1];
            xov[2] = xov[1];
            xov[3] = x[3] + overs;
            xov[4] = x[4] + overs;
            xov[5] = xov[1] - dys;
            xov[6] = xov[3];

            yov[1] = y[1] + overs;
            yov[2] = y[2] - overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
            yov[5] = (yov[1] + yov[2]) / 2;
            yov[6] = yov[5];
        },

        type2TR : function () {
            xov[1] = x[1];
            xov[2] = x[2];
            xov[3] = x[3];
            xov[4] = x[4];
            xov[5] = xov[1];
            xov[6] = xov[3];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3];
            yov[4] = y[4];
            yov[5] = (yov[1] + yov[2])/2;
            yov[6] = yov[5];
        },

        type2C : function () {
            if (position == 'right') {
                xov[1] = x[1];
                xov[2] = xov[1];
                xov[3] = x[3] + overs;
                xov[4] = xov[3];
                xov[5] = xov[1];
                xov[6] = xov[3];
                xov[7] = parent.xRoof[4];
                xov[8] = xov[7];
                xov[9] = xov[7];

                yov[1] = y[1] + overs;
                yov[2] = y[2] - overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = yov[5];
                yov[7] = yov[1];
                yov[8] = yov[5];
                yov[9] = yov[2];
            }
            if (position == 'left') {
                xov[1] = x[1];
                xov[2] = xov[1];
                xov[3] = x[3] + overs;
                xov[4] = xov[3];
                xov[5] = xov[1];
                xov[6] = xov[3];
                xov[7] = parent.xRoof[4];
                xov[8] = xov[7];
                xov[9] = xov[7];

                yov[1] = y[1] + overs;
                yov[2] = y[2] - overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = yov[5];
                yov[7] = yov[1];
                yov[8] = yov[5];
                yov[9] = yov[2];
            }
            calcHalfHipSide4();
        },

        type2Sep : function () {

            var slope = [];

            if (orientation == 'horizontal') {
                xov[1] = x[1];
                xov[2] = x[2];
                xov[3] = x[3] + overs;
                xov[4] = x[4] + overs;
                xov[5] = xov[1];
                xov[6] = xov[3];

                yov[1] = y[1] + overs;
                yov[2] = y[2] - overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = yov[1] - sxov/2;
                yov[6] = yov[5];
                calcHalfHipSide4();

                zov[1] = stz1;
                zov[2] = zov[1];
                zov[3] = zov[1];
                zov[4] = zov[1];
                zov[5] = stz1 + hpx;
                zov[6] = zov[5];

                slope[1] = test({points:[1,3,5,6]});
                slope[2] = test({points:[2,4,5,6]});
                //console.log(slope)
                var tst1 = JSON.stringify(slope[1]);
                var tst2 = JSON.stringify(slope[2]);

                function test(arr) {
                    var points = arr.points;
                    var x = [], y=[], z=[], overall = [], point=[];
                    for (var i in points) {
                        x[i] = xov[points[i]];
                        y[i] = yov[points[i]];
                        z[i] = zov[points[i]];
                        point = {'x':x[i],'y':y[i],'z':z[i]};
                        overall.push(point);
                        //overall['point'+i] = point;
                    }
                    //overall = {point[0]}
                    //alert(overall)
                    return overall;

                }

                function test2() {
                    var overall = [];
                    for (var i in slope) {
                        //alert(slope[i])
                        overall.push(slope[i]); //["slope"+i] =
                    }
                    var test = JSON.stringify(overall);
                    //alert(test);
                    //console.log(test);
                    return overall;
                }

                //console.log(test2());
                //alert(test2())

                //console.log('slope=',slope);

            }
            if (orientation == 'vertical') {
                xov[1] = x[1];
                xov[2] = x[2];
                xov[3] = x[3] + overs;
                xov[4] = x[4] + overs;
                xov[5] = (xov[1] + xov[3])/2;
                xov[6] = xov[5];

                yov[1] = y[1] + overs;
                yov[2] = y[2] - overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = yov[1];
                yov[6] = yov[2];
            }
        },

        type2L : function () {
            if (position == 'left') {
                xov[1] = parent.xRoof[3];
                xov[2] = parent.xRoof[4];
                xov[3] = x[3] + overs;
                xov[4] = x[4] + overs;
                xov[5] = (xov[1] + xov[2])/2;
                xov[6] = xov[3];

                yov[1] = y[1] + overs;
                yov[2] = y[2] - overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2])/2;
                yov[6] = yov[5];
            }
            if (position == 'right') {
                xov[1] = parent.xRoof[2];
                xov[2] = parent.xRoof[1];
                xov[3] = x[3] + overs;
                xov[4] = x[4] + overs;
                xov[5] = xov[1] - abs(xov[2] - xov[1])/2;
                xov[6] = xov[3];

                yov[1] = y[1] + overs;
                yov[2] = y[2] - overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = yov[1] - sxov/2;
                yov[6] = yov[5];
            }
            calcHalfHipSide4();
        },

        type2L4 : function () {
            if (position == 'left') {
                xov[1] = parent.xRoof[4];
                xov[2] = parent.xRoof[2];
                xov[3] = x[3] + overs;
                xov[4] = xov[3];
                xov[5] = xov[1] - dys;
                xov[6] = xov[3];

                yov[1] = y[1] + overs;
                yov[2] = y[2] - overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = yov[5];
            }
            if (position == 'right') {
                xov[1] = parent.xRoof[4];
                xov[2] = parent.xRoof[2];
                xov[3] = x[3] + overs;
                xov[4] = xov[3];
                xov[5] = xov[1] - dys;
                xov[6] = xov[3];

                yov[1] = y[1] + overs;
                yov[2] = y[2] - overs;
                yov[3] = yov[1];
                yov[4] = yov[2];
                yov[5] = (yov[1] + yov[2]) / 2;
                yov[6] = yov[5];
            }
            calcHalfHipSide4();
        }

    };

    function calcHalfHipSide4() {
        if (position=='left'&&side=='side4')alert()
        if (hip == true) {
            yov[30] = yov[6] - whpx[99]/2;
            yov[40] = yov[6] + whpx[99]/2;

            xov[6] = xov[3] - adjacentspx[99];
            xov[30] = xov[3];
            xov[40] = xov[4];

            yov[31] = yov[3];
            yov[42] = yov[4];
            xov[31] = xov[6];
            xov[42] = xov[6];
        }
    }

    this.xRoof = xov;
    this.yRoof = yov;
    this.zRoof = zov;

    /*------------------------------ Draw Overhang ---------------------------------*/
    this.overhang = {

        warn: '123',

        type2T: {
            main : function () {
                lines({cx:cx, xov:xov, yov:yov, points:[1,2,4,3,1]});
                lines({cx:cx, xov:xov, yov:yov, points:[5,6]});
            },
            child : function() {
                lines({cx:cx, xov:xov, yov:yov, points:[5,8,4,3,7,5,6]});
                addHalfHip();
                cx.stroke();
            }
        },

        type2TH: {
            main : function () {
                //console.log(xov,yov);
                lines({cx:cx, xov:xov, yov:yov, points:[1,2,4,3,1]});
                lines({cx:cx, xov:xov, yov:yov, points:[5,6]});
                lines({cx:cx, xov:xov, yov:yov, points:[5,7]});
                lines({cx:cx, xov:xov, yov:yov, points:[5,8]});
                lines({cx:cx, xov:xov, yov:yov, points:[6,9]});
                lines({cx:cx, xov:xov, yov:yov, points:[6,10]});
            },
            child : function() {

            }
        },

        type2DW : function () {
            lines({cx:cx, xov:xov, yov:yov, points:[1,5,2,4,3,1]});
            lines({cx:cx, xov:xov, yov:yov, points:[5,6]});
            cx.stroke();
        },

        type2TR : function () {
            lines({cx:cx, xov:xov, yov:yov, points:[3,4,5,3]});
            lines({cx:cx, xov:xov, yov:yov, points:[5,6]});
            cx.stroke();
        },

        type2C : {
            main : function() {
                // childSide 1
                // right
                if (childPosition == '1') {
                    lines({cx:cx, xov:xov, yov:yov, points:[10,1,3,4,2,5,6]});
                    lines({cx:cx, xov:xov, yov:yov, points:[5,7]});
                }
                // left
                if (childPosition == '2') {
                    lines({cx:cx, xov:xov, yov:yov, points:[20,2,4,3,1,5,6]});
                    lines({cx:cx, xov:xov, yov:yov, points:[5,7]});
                }
                // childSide 2
                // left
                if (childPosition == '3') {
                    lines({cx:cx, xov:xov, yov:yov, points:[30,3,1,2,4,6,5]});
                    lines({cx:cx, xov:xov, yov:yov, points:[6,7]});
                }
                // right
                if (childPosition == '4') {
                    lines({cx:cx, xov:xov, yov:yov, points:[40,4,2,1,3,6,5]});
                    lines({cx:cx, xov:xov, yov:yov, points:[6,7]});
                }
                // childSide 3
                // right
                if (childPosition == '5') {
                    lines({cx:cx, xov:xov, yov:yov, points:[30,3,4,2,1,5,6]});
                    lines({cx:cx, xov:xov, yov:yov, points:[5,7]});
                }
                // left
                if (childPosition == '6') {
                    lines({cx:cx, xov:xov, yov:yov, points:[10,1,2,4,3,5,6]});
                    lines({cx:cx, xov:xov, yov:yov, points:[5,7]});
                }
                // childSide 4
                // left
                if (childPosition == '7') {
                    lines({cx:cx, xov:xov, yov:yov, points:[40,4,3,1,2,6,5]});
                    lines({cx:cx, xov:xov, yov:yov, points:[6,7]});
                }
                // right
                if (childPosition == '8') {
                    lines({cx:cx, xov:xov, yov:yov, points:[20,2,1,3,4,6,5]});
                    lines({cx:cx, xov:xov, yov:yov, points:[6,7]});
                }
            },
            child : function() {
                if ((side == 'side1' && position == 'left') || (side == 'side3' && position == 'left') || (side == 'side4' && position == 'left') || (side == 'side2' && position == 'left')) {
                    lines({cx:cx, xov:xov, yov:yov, points:[7,3,4,9,8,6]});
                    addHalfHip();
                    cx.stroke();
                    cx.beginPath();
                    cx.setLineDash([5,2]);
                    lines({cx:cx, xov:xov, yov:yov, points:[8,5,2,9]});
                    cx.stroke();
                    cx.setLineDash([5,0]); //Reset dashed lines
                }
                else if ((side == 'side1' && position == 'right') || (side == 'side2' && position == 'right') || (side == 'side3' && position == 'right') || (side == 'side4' && position == 'right')) {
                    lines({cx:cx, xov:xov, yov:yov, points:[9,4,3,7,8,6]});
                    addHalfHip();
                    cx.stroke();
                    cx.beginPath();
                    cx.setLineDash([5,2]);
                    lines({cx:cx, xov:xov, yov:yov, points:[8,5,1,7]});
                    cx.stroke();
                    cx.setLineDash([5,0]); //Reset dashed lines
                }
                else {
                    //warn = '234';
                    //alert(this.warn)
                }
            }
        },

        type2Sep : function () {
            lines({cx:cx, xov:xov, yov:yov, points:[1,2,4,3,1]});
            lines({cx:cx, xov:xov, yov:yov, points:[5,6]});
            addHalfHip();
            cx.stroke();
        },

        type2L : {
            main : function () {
                lines({cx:cx, xov:xov, yov:yov, points:[1,2,4,3,1]});
                lines({cx:cx, xov:xov, yov:yov, points:[5,6]});
                cx.closePath();
            },
            child : function () {
                lines({cx:cx, xov:xov, yov:yov, points:[1,3,4,2]});
                lines({cx:cx, xov:xov, yov:yov, points:[5,6]});
                addHalfHip();
                cx.closePath();
                cx.stroke();
            }
        },

        type2L4 : function () {
            lines({cx:cx, xov:xov, yov:yov, points:[1,3,4,2]});
            lines({cx:cx, xov:xov, yov:yov, points:[5,6]});
            addHalfHip();
            cx.closePath();
            cx.stroke();
        }

    }

    function addHalfHip() {
        if (hip != false) {
            lines({cx:cx, xov:xov, yov:yov, points:[6,30]});
            lines({cx:cx, xov:xov, yov:yov, points:[6,40]});
        }
    }

}