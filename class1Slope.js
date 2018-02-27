//var obj1 = new Class1Slope({x:x, y:y, xov:xov, yov:yov, orientation: orientation, overs:overs, ridges: ridges});
function Class1Slope (arr) {

    var cx = arr.cx;
    var x = arr.x;
    var y = arr.y;
    var xov = arr.xov;
    var yov = arr.yov;
    var zov = arr.zov;
    var hpx = arr.hpx;
    var orientation = arr.orientation;
    var overs = arr.overs;
    var ridges = arr.ridges;
    var stz1 = arr.stz1;

    //alert(stz1)

    this.main = {
        type1M: function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] + overs;
            xov[3] = xov[1];
            xov[4] = xov[2];

            yov[1] = y[1] - overs;
            yov[2] = yov[1];
            yov[3] = y[3] + overs;
            yov[4] = yov[3];

           /* zov[1] = 0;
            zov[2] = 0;
            zov[3] = 0;
            zov[4] = 0;*/
        }
    };
    /*------------------------------ SIDE 13 ---------------------------------*/
    this.side13 = {
        type1Sep : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2];
            xov[3] = x[3] - overs;
            xov[4] = x[4];

            yov[1] = y[1] - overs;
            yov[2] = y[2] - overs;
            yov[3] = y[3];
            yov[4] = y[4];
        }
    };
    /*------------------------------ SIDE 14 ---------------------------------*/
    this.side14 = {
        type1Sep : function () {
            xov[1] = x[1];
            xov[2] = x[2] + overs;
            xov[3] = x[3];
            xov[4] = x[4] + overs;

            yov[1] = y[1] - overs;
            yov[2] = y[2] - overs;
            yov[3] = y[3];
            yov[4] = y[4];
        }
    };
    /*------------------------------ SIDE 23 ---------------------------------*/
    this.side23 = {
        type1Sep : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2];
            xov[3] = x[3] - overs;
            xov[4] = x[4];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3] + overs;
            yov[4] = y[4] + overs;
        }
    };
    /*------------------------------ SIDE 24 ---------------------------------*/
    this.side24 = {
        type1Sep : function () {
            xov[1] = x[1];
            xov[2] = x[2] + overs;
            xov[3] = x[3];
            xov[4] = x[4] + overs;

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3] + overs;
            yov[4] = y[4] + overs;
        }
    };

    /*------------------------------ SIDE 1 ---------------------------------*/
    this.side1 = {
        type1Sep : function () {
            xov[1] = x[1] + overs;
            xov[2] = x[2] - overs;
            xov[3] = xov[1];
            xov[4] = xov[2];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3] - overs;
            yov[4] = y[4] - overs;
        },

        type1AW : function () {
            xov[1] = x[1] + overs;
            xov[2] = x[2] - overs;
            xov[3] = xov[1];
            xov[4] = xov[2];

            yov[1] = y[1] + overs;
            yov[2] = y[2] + overs;
            yov[3] = y[3] - overs;
            yov[4] = y[4] - overs;
        },

        type1CH : function () {
            xov[1] = x[1] + overs;
            xov[2] = x[2] - overs;
            xov[3] = xov[1];
            xov[4] = xov[2];

            yov[1] = y[1] + overs;
            yov[2] = y[2] + overs;
            yov[3] = y[3] - overs;
            yov[4] = y[4] - overs;
        },

        type1DW : function () {
            xov[1] = x[1] + overs;
            xov[2] = x[2] - overs;
            xov[3] = xov[1];
            xov[4] = xov[2];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3] - overs;
            yov[4] = y[4] - overs;
        }
    };

    /*------------------------------ SIDE 2 ---------------------------------*/
    this.side2 = {
        type1Sep : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] + overs;
            xov[3] = xov[1];
            xov[4] = xov[2];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3] + overs;
            yov[4] = y[4] + overs;

            zov[1] = stz1 + hpx;
            zov[2] = zov[1];
            zov[3] = stz1;
            zov[4] = zov[3];
        },

        type1AW : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] + overs;
            xov[3] = xov[1];
            xov[4] = xov[2];

            yov[1] = y[1] - overs;
            yov[2] = y[2] - overs;
            yov[3] = y[3] + overs;
            yov[4] = y[4] + overs;
        },

        type1CH : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] + overs;
            xov[3] = xov[1];
            xov[4] = xov[2];

            yov[1] = y[1] - overs;
            yov[2] = y[2] - overs;
            yov[3] = y[3] + overs;
            yov[4] = y[4] + overs;
        },

        type1DW : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] + overs;
            xov[3] = xov[1];
            xov[4] = xov[2];

            yov[1] = y[1];
            yov[2] = y[2];
            yov[3] = y[3] + overs;
            yov[4] = y[4] + overs;
        }
    };

    /*------------------------------ SIDE 3 ---------------------------------*/
    this.side3 = {
        type1Sep : function () {
            xov[1] = x[1];
            xov[2] = x[2];
            xov[3] = x[3] - overs;
            xov[4] = x[4] - overs;

            yov[1] = y[1] - overs;
            yov[2] = y[2] + overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
        },

        type1AW : function () {
            xov[1] = x[1] + overs;
            xov[2] = x[2] + overs;
            xov[3] = x[3] - overs;
            xov[4] = x[4] - overs;

            yov[1] = y[1] - overs;
            yov[2] = y[2] + overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
        },

        type1CH : function () {
            xov[1] = x[1] + overs;
            xov[2] = x[2] + overs;
            xov[3] = x[3] - overs;
            xov[4] = x[4] - overs;

            yov[1] = y[1] - overs;
            yov[2] = y[2] + overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
        },

        type1DW : function () {
            xov[1] = x[1];
            xov[2] = x[2];
            xov[3] = x[3] - overs;
            xov[4] = x[4] - overs;

            yov[1] = y[1] - overs;
            yov[2] = y[2] + overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
        }
    };

    /*------------------------------ SIDE 4 ---------------------------------*/
    this.side4 = {
        type1Sep : function () {
            xov[1] = x[1];
            xov[2] = x[2];
            xov[3] = x[3] + overs;
            xov[4] = x[4] + overs;

            yov[1] = y[1] + overs;
            yov[2] = y[2] - overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
        },

        type1AW : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] - overs;
            xov[3] = x[3] + overs;
            xov[4] = x[4] + overs;

            yov[1] = y[1] + overs;
            yov[2] = y[2] - overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
        },

        type1CH : function () {
            xov[1] = x[1] - overs;
            xov[2] = x[2] - overs;
            xov[3] = x[3] + overs;
            xov[4] = x[4] + overs;

            yov[1] = y[1] + overs;
            yov[2] = y[2] - overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
        },

        type1DW : function () {
            xov[1] = x[1];
            xov[2] = x[2];
            xov[3] = x[3] + overs;
            xov[4] = x[4] + overs;

            yov[1] = y[1] + overs;
            yov[2] = y[2] - overs;
            yov[3] = yov[1];
            yov[4] = yov[2];
        }
    };

    this.xRoof = xov;
    this.yRoof = yov;
    this.zRoof = zov;

    this.overhang = {
        type1M: function () {
            lines({cx:cx, xov:xov, yov:yov, points:[1,2,4,3,1]});
            cx.stroke();
        },

        type1Sep : function () {
            lines({cx:cx, xov:xov, yov:yov, points:[1,2,4,3,1]});
            cx.stroke();
        },

        type1AW : function () {
            lines({cx:cx, xov:xov, yov:yov, points:[1,2,4,3,1]});
            cx.closePath();
            cx.fillStyle = 'rgba(1,92,152,0.55)';
            cx.fill();
            cx.stroke();
        },

        type1CH: function () {
            lines({cx:cx, xov:xov, yov:yov, points:[1,2,4,3,1]});
            cx.closePath();
            cx.fillStyle = 'rgba(108,37,19,0.75)';
            cx.fill();
            cx.stroke();
        },

        type1DW: function () {
            lines({cx:cx, xov:xov, yov:yov, points:[1,2,4,3,1]});
            cx.closePath();
            cx.stroke();
        }
    }
}