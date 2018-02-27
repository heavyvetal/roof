$(window).load(function () {

    var json = {"floors":[{"rooms":[{"closedRoom":"true","roomID":"","room_type":"closedRoom","room_name":"","room_number":"","room_zone":"","room_area":"29.84","area_coords":{"x":"-466.80514992663905","y":"-5604.647453714724"},"s_room_without_openings":"29.84","p_room":"21997","n_outer_angle90_room":"4","n_outer_angle_N90_room":"0","walls":[{"id":"10712AF0-5552-412F-85FC-0725CD3E8326","inner":{"start":{"x":"-4555.262946870871","y":"-8433.379650699622"},"end":{"x":"1577.4237485454769","y":"-8433.379650699622"}},"outer":{"start":{"x":"-4605.262946870871","y":"-8483.379650699622"},"end":{"x":"1627.423748545477","y":"-8483.379650699622"}},"center":{"start":{"x":"-4605.262946870871","y":"-8483.379650699622"},"end":{"x":"1627.423748545477","y":"-8483.379650699622"}},"arcPath":"","mount_type":"","wall_length_mm":"6133","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"1","outer_wall_num":"0","wall_length":"6133","h_wall":"3000","p_wall":"18265","s_wall":"18.4","s_wall_without_openings":"18.4"},{"id":"89D6CA8F-F91A-4BA8-8A44-3C8309BF6D60","inner":{"start":{"x":"1577.4237485454769","y":"-8433.379650699622"},"end":{"x":"1577.4237485454769","y":"-3567.5431705792"}},"outer":{"start":{"x":"1627.4237485454769","y":"-8483.379650699622"},"end":{"x":"1627.4237485454769","y":"-3517.5431705792"}},"center":{"start":{"x":"1627.4237485454769","y":"-8483.379650699622"},"end":{"x":"1627.4237485454769","y":"-3517.5431705792"}},"arcPath":"","mount_type":"","wall_length_mm":"4866","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"2","outer_wall_num":"0","wall_length":"4866","h_wall":"3000","p_wall":"15732","s_wall":"14.6","s_wall_without_openings":"14.6"},{"id":"7BAE9DE0-D4C9-4C77-B2B2-934B4BD73594","inner":{"start":{"x":"1577.4237485454769","y":"-3567.5431705792"},"end":{"x":"-4555.262946870871","y":"-3567.543170579219"}},"outer":{"start":{"x":"1627.4237485454773","y":"-3517.5431705792"},"end":{"x":"-4605.262946870871","y":"-3517.543170579219"}},"center":{"start":{"x":"1627.4237485454773","y":"-3517.5431705792"},"end":{"x":"-4605.262946870871","y":"-3517.543170579219"}},"arcPath":"","mount_type":"","wall_length_mm":"6133","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"3","outer_wall_num":"0","wall_length":"6133","h_wall":"3000","p_wall":"18265","s_wall":"18.4","s_wall_without_openings":"18.4"},{"id":"FBB65AC3-CA86-41AA-9AB3-A9D6EFDA58CC","inner":{"start":{"x":"-4555.262946870871","y":"-3567.543170579219"},"end":{"x":"-4555.262946870871","y":"-8433.379650699622"}},"outer":{"start":{"x":"-4605.262946870871","y":"-3517.543170579219"},"end":{"x":"-4605.262946870871","y":"-8483.379650699622"}},"center":{"start":{"x":"-4605.262946870871","y":"-3517.543170579219"},"end":{"x":"-4605.262946870871","y":"-8483.379650699622"}},"arcPath":"","mount_type":"","wall_length_mm":"4866","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"4","outer_wall_num":"0","wall_length":"4866","h_wall":"3000","p_wall":"15732","s_wall":"14.6","s_wall_without_openings":"14.6"}]},{"closedRoom":"true","roomID":"","room_type":"closedRoom","room_name":"","room_number":"","room_zone":"","room_area":"4.93","area_coords":{"x":"3134.3027184375937","y":"-5614.543085572492"},"s_room_without_openings":"4.93","p_room":"8880","n_outer_angle90_room":"4","n_outer_angle_N90_room":"0","walls":[{"id":"8B250163-E741-4CB7-8D67-277AE82E77DB","inner":{"start":{"x":"1677.4237485454773","y":"-7117.590176986805"},"end":{"x":"3862.742203383652","y":"-7117.590176986805"}},"outer":{"start":{"x":"1627.423748545477","y":"-7167.590176986805"},"end":{"x":"3912.7422033836524","y":"-7167.590176986805"}},"center":{"start":{"x":"1627.423748545477","y":"-7167.590176986805"},"end":{"x":"3912.7422033836524","y":"-7167.590176986805"}},"arcPath":"","mount_type":"","wall_length_mm":"2185","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"1","outer_wall_num":"0","wall_length":"2185","h_wall":"3000","p_wall":"10371","s_wall":"6.56","s_wall_without_openings":"6.56"},{"id":"4BFA38CD-F977-4175-9DDA-B17559D88C73","inner":{"start":{"x":"3862.742203383652","y":"-7117.590176986805"},"end":{"x":"3862.7422033836524","y":"-4863.019539865334"}},"outer":{"start":{"x":"3912.742203383652","y":"-7167.590176986804"},"end":{"x":"3912.7422033836524","y":"-4813.019539865334"}},"center":{"start":{"x":"3912.742203383652","y":"-7167.590176986804"},"end":{"x":"3912.7422033836524","y":"-4813.019539865334"}},"arcPath":"","mount_type":"","wall_length_mm":"2255","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"2","outer_wall_num":"0","wall_length":"2255","h_wall":"3000","p_wall":"10509","s_wall":"6.76","s_wall_without_openings":"6.76"},{"id":"984EEE9E-3AEB-403D-AE49-CF6FC9C12990","inner":{"start":{"x":"3862.7422033836524","y":"-4863.019539865334"},"end":{"x":"1677.423748545477","y":"-4863.019539865334"}},"outer":{"start":{"x":"3912.7422033836524","y":"-4813.019539865334"},"end":{"x":"1627.423748545477","y":"-4813.019539865334"}},"center":{"start":{"x":"3912.7422033836524","y":"-4813.019539865334"},"end":{"x":"1627.423748545477","y":"-4813.019539865334"}},"arcPath":"","mount_type":"","wall_length_mm":"2185","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"3","outer_wall_num":"0","wall_length":"2185","h_wall":"3000","p_wall":"10371","s_wall":"6.56","s_wall_without_openings":"6.56"},{"id":"ECC0D970-5E8D-408E-A2EE-09BC09FAB0EB","inner":{"start":{"x":"1677.423748545477","y":"-4863.019539865334"},"end":{"x":"1677.4237485454773","y":"-7117.590176986805"}},"outer":{"start":{"x":"1627.423748545477","y":"-4813.019539865334"},"end":{"x":"1627.4237485454773","y":"-7167.590176986805"}},"center":{"start":{"x":"1627.423748545477","y":"-4813.019539865334"},"end":{"x":"1627.4237485454773","y":"-7167.590176986805"}},"arcPath":"","mount_type":"","wall_length_mm":"2255","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"4","outer_wall_num":"0","wall_length":"2255","h_wall":"3000","p_wall":"10509","s_wall":"6.76","s_wall_without_openings":"6.76"}]},{"closedRoom":"true","roomID":"","room_type":"closedRoom","room_name":"","room_number":"","room_zone":"","room_area":"7.11","area_coords":{"x":"-6758.494610791892","y":"-6366.066631279633"},"s_room_without_openings":"7.11","p_room":"10819","n_outer_angle90_room":"4","n_outer_angle_N90_room":"0","walls":[{"id":"C81BB55A-CAB6-48AD-8914-912A03E80AC0","inner":{"start":{"x":"-4655.262946870871","y":"-7117.5901769868"},"end":{"x":"-7810.11044275241","y":"-7117.5901769868"}},"outer":{"start":{"x":"-4605.262946870871","y":"-7167.5901769868"},"end":{"x":"-7860.11044275241","y":"-7167.5901769868"}},"center":{"start":{"x":"-4605.262946870871","y":"-7167.5901769868"},"end":{"x":"-7860.11044275241","y":"-7167.5901769868"}},"arcPath":"","mount_type":"","wall_length_mm":"3155","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"1","outer_wall_num":"0","wall_length":"3155","h_wall":"3000","p_wall":"12310","s_wall":"9.46","s_wall_without_openings":"9.46"},{"id":"F73E0856-2445-40A4-A67C-921C60BBB8C7","inner":{"start":{"x":"-7810.11044275241","y":"-7117.5901769868"},"end":{"x":"-7810.1104427524","y":"-4863.0195398653"}},"outer":{"start":{"x":"-7860.11044275241","y":"-7167.5901769868"},"end":{"x":"-7860.1104427524","y":"-4813.0195398653"}},"center":{"start":{"x":"-7860.11044275241","y":"-7167.5901769868"},"end":{"x":"-7860.1104427524","y":"-4813.0195398653"}},"arcPath":"","mount_type":"","wall_length_mm":"2255","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"2","outer_wall_num":"0","wall_length":"2255","h_wall":"3000","p_wall":"10509","s_wall":"6.76","s_wall_without_openings":"6.76"},{"id":"C87A35FC-9701-4520-B924-CCC96A14D7DE","inner":{"start":{"x":"-7810.1104427524","y":"-4863.0195398653"},"end":{"x":"-4655.262946870871","y":"-4863.0195398653"}},"outer":{"start":{"x":"-7860.1104427524","y":"-4813.0195398653"},"end":{"x":"-4605.262946870871","y":"-4813.0195398653"}},"center":{"start":{"x":"-7860.1104427524","y":"-4813.0195398653"},"end":{"x":"-4605.262946870871","y":"-4813.0195398653"}},"arcPath":"","mount_type":"","wall_length_mm":"3155","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"3","outer_wall_num":"0","wall_length":"3155","h_wall":"3000","p_wall":"12310","s_wall":"9.46","s_wall_without_openings":"9.46"},{"id":"B7D9FC38-173F-4319-826C-D31FF6779442","inner":{"start":{"x":"-4655.262946870871","y":"-4863.0195398653"},"end":{"x":"-4655.262946870871","y":"-7117.5901769868"}},"outer":{"start":{"x":"-4605.262946870871","y":"-4813.0195398653"},"end":{"x":"-4605.262946870871","y":"-7167.5901769868"}},"center":{"start":{"x":"-4605.262946870871","y":"-4813.0195398653"},"end":{"x":"-4605.262946870871","y":"-7167.5901769868"}},"arcPath":"","mount_type":"","wall_length_mm":"2255","width_px":"100","width_units":"100","type":"bear_wall","height":{"start":"3000","end":"3000"},"external_wall":"true","room_wall_num":"4","outer_wall_num":"0","wall_length":"2255","h_wall":"3000","p_wall":"10509","s_wall":"6.76","s_wall_without_openings":"6.76"}]}],"floorData":{"name":"Страница 1","project":"","index":"1","id":"","floor":"0","ground":"0","ceiling":"0","routes":"0","netOutlet":"0","elOutlet":"0","outletPer":"0","elSwitch":"0","other":"0","measureUnits":"1","slab_height":"0","outlet_reserve":"0","rack_reserve":"0","cable_reserve":"0","wallWidth":"0","channelOccupancy":"0","marking":"0","active":"true"},"paperWidth":"0","paperHeight":"0","scaling":"1","totals":{"s_floors":"7.11","s_floors_without_openings":"41.879999999999995","s_inner_walls":"125.09","s_inner_walls_without_openings":"125.09","p_outer_contur":"33877","s_outer_walls":"101.63","s_outer_walls_without_opnening":"101.63","p_otkos":"0","outer_lintel_length":"0","p_outer_openings":"0","s_outer_openings":"0","p_otkos_door":"0","outer_angle90_length":"36000","outer_angle_N90_length":"0","num_out_doors":"0","num_doors":"0","num_windows":"0","draw_table_window_lenght":0,"draw_table_doors_num":0}}]};


    var a = 0;
    var b = 0;
    var h = 0;
    var overhang = 0;
    var oneHipLength = 0;
    var roofTotals;
    var savedProperties;
    var angle = 45, angle_a = 45, angle_b = 45;
    var halfHipLength = [];
    var type = '';
    var orientation = '';
    var check = 'h';
    var info = '';

    var stx1 = 0, sty1 = 0, stz1 = 0;
    var scale = 650;
	var selectedRoof;
	var selectedRoofChild;
	var roof = [];
    var data = [];
    var children = [];
    var cx = document.querySelector("canvas").getContext("2d");

    /*----------------- Json unit ----------------*/
    var addX = 0;
    var addY = 0;
    var mainRoof = 0;
    var base = [];
    var room = [];
    var wall = [];
    var x = [];
    var y = [];
    var z = [];
    var scaleJson = 0;

    /*----------------- Restore function ----------------*/
    function restore() {
        var savedData = '{"roofTotals":[{"roofNum":"0","roofArea":57.5875023105627,"roofAreaWithoutCutouts":60.220842824599856},{"roofNum":"1","roofArea":11.29813855373383,"roofAreaWithoutCutouts":11.29813855373383},{"roofNum":"2","roofArea":17.369119240529912,"roofAreaWithoutCutouts":17.369119240529912}],"savedRoofProperties":[{"a":6.133000000000001,"b":4.886412011528859,"aSideAndOvers":7.133000000000001,"bSideAndOvers":5.886412011528859,"angleA":47,"angleB":45,"angleHip":[],"angleX":47,"angleY":45,"child":[],"childSide":0,"childPosition":0,"color":["#E30000","#4B4B4B","#0800FF"],"context":{},"couldBeCommonAndT":true,"globalType":"4Slope","jointType":"separate","halfHipLength":[0.5,0.5,0.5,0.5],"height":2.943206005764429,"hip":false,"lengthProjectionCutout":0,"mainRoof":true,"oneHipLength":0.5,"orientation":"horizontal","over":0.5,"over_px":16.56353017074417,"parent":null,"parentAngleJoint":0,"position":"","possibleParents":["1","2"],"quadrant":"","realX":6.133000000000001,"realY":4.886412011528859,"ridge":1.6438319960274015,"rotated":false,"rotatedWindow":false,"roofNum":"0","S":60.220842824599856,"scale":33.12706034148834,"selected":false,"Sneckline":0,"side":null,"startingX":206.09898076326684,"startingY":50,"startingZ":3000,"type":"4M","warning":false,"warningType":"","windowPlace":false,"windowType":"","xMax":1627.4237485454773,"xMin":-4605.262946870871,"yMax":-3517.5431705792,"yMin":-8483.379650699622,"xRoof":[null,189.53545059252266,425.830772008359,189.53545059252266,425.830772008359,280.45545043860636,334.9107721622753],"yRoof":[null,33.43646982925583,33.43646982925583,228.43599573003408,228.43599573003408,130.93623277964497,130.93623277964497],"x":[null,206.09898076326684,409.26724183761485,206.09898076326684,409.26724183761485],"y":[null,50,50,211.8724655592899,211.8724655592899]},{"a":2.316911217129829,"b":2.248766666521212,"aSideAndOvers":3.316911217129829,"bSideAndOvers":2.748766666521212,"angleA":35,"angleB":45,"angleHip":[0,0,0,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],"angleX":0,"angleY":0,"child":[],"childSide":0,"childPosition":0,"color":["#E30000","#4B4B4B","#0800FF"],"context":{},"couldBeCommonAndT":true,"globalType":"2Slope","jointType":"T","halfHipLength":[0.5,0.5,0.5,0.5],"height":1.1612631189033247,"hip":false,"lengthProjectionCutout":1.0828953773526235,"mainRoof":false,"oneHipLength":0.5,"orientation":"horizontal","over":0.5,"over_px":16.56353017074417,"parent":{"a":6.133000000000001,"b":4.886412011528859,"aSideAndOvers":7.133000000000001,"bSideAndOvers":5.886412011528859,"angleA":47,"angleB":45,"angleHip":[],"angleX":47,"angleY":45,"child":[],"childSide":0,"childPosition":0,"color":["#E30000","#4B4B4B","#0800FF"],"context":{},"couldBeCommonAndT":true,"globalType":"4Slope","jointType":"separate","halfHipLength":[0.5,0.5,0.5,0.5],"height":2.943206005764429,"hip":false,"lengthProjectionCutout":0,"mainRoof":true,"oneHipLength":0.5,"orientation":"horizontal","over":0.5,"over_px":16.56353017074417,"parent":null,"parentAngleJoint":0,"position":"","possibleParents":["1","2"],"quadrant":"","realX":6.133000000000001,"realY":4.886412011528859,"ridge":1.6438319960274015,"rotated":false,"rotatedWindow":false,"roofNum":"0","S":60.220842824599856,"scale":33.12706034148834,"selected":false,"Sneckline":0,"side":null,"startingX":206.09898076326684,"startingY":50,"startingZ":3000,"type":"4M","warning":false,"warningType":"","windowPlace":false,"windowType":"","xMax":1627.4237485454773,"xMin":-4605.262946870871,"yMax":-3517.5431705792,"yMin":-8483.379650699622,"xRoof":[null,189.53545059252266,425.830772008359,189.53545059252266,425.830772008359,280.45545043860636,334.9107721622753],"yRoof":[null,33.43646982925583,33.43646982925583,228.43599573003408,228.43599573003408,130.93623277964497,130.93623277964497],"x":[null,206.09898076326684,409.26724183761485,206.09898076326684,409.26724183761485],"y":[null,50,50,211.8724655592899,211.8724655592899]},"parentAngleJoint":47,"position":"","possibleParents":["0"],"quadrant":"","realX":2.248766666521212,"realY":2.316911217129829,"ridge":0,"rotated":false,"rotatedWindow":false,"roofNum":"1","S":11.29813855373383,"scale":33.12706034148834,"selected":true,"Sneckline":2.633340514037157,"side":"side4","startingX":409.26724183761485,"startingY":92.89107930144522,"startingZ":3000,"type":"2T","warning":false,"warningType":"","windowPlace":false,"windowType":"","xMax":3912.7422033836524,"xMin":1627.423748545477,"yMax":-4813.019539865334,"yMin":-7167.590176986805,"xRoof":[null,425.830772008359,425.830772008359,500.3258010641348,500.3258010641348,389.9576314992799,500.3258010641348,425.830772008359,425.830772008359],"yRoof":[null,186.20706716792043,76.32754913070104,186.20706716792043,76.32754913070104,131.26730814931074,131.26730814931074,186.20706716792043,76.32754913070104],"x":[null,409.26724183761485,409.26724183761485,483.7622708933906,483.7622708933906],"y":[null,169.64353699717626,92.89107930144522,169.64353699717626,92.89107930144522]},{"a":2.3169112171298565,"b":3.2027888882850384,"aSideAndOvers":3.3169112171298565,"bSideAndOvers":3.7027888882850384,"angleA":45,"angleB":45,"angleHip":[],"angleX":0,"angleY":0,"child":[],"childSide":0,"childPosition":0,"color":["#E30000","#4B4B4B","#0800FF"],"context":{},"couldBeCommonAndT":false,"globalType":"2Slope","jointType":"separate","halfHipLength":[0.5,0.5,0.5,0.5],"height":1.658455608564928,"hip":false,"lengthProjectionCutout":1.546534874676412,"mainRoof":false,"oneHipLength":0.5,"orientation":"vertical","over":0.5,"over_px":16.56353017074417,"parent":{"a":6.133000000000001,"b":4.886412011528859,"aSideAndOvers":7.133000000000001,"bSideAndOvers":5.886412011528859,"angleA":47,"angleB":45,"angleHip":[],"angleX":47,"angleY":45,"child":[],"childSide":0,"childPosition":0,"color":["#E30000","#4B4B4B","#0800FF"],"context":{},"couldBeCommonAndT":true,"globalType":"4Slope","jointType":"separate","halfHipLength":[0.5,0.5,0.5,0.5],"height":2.943206005764429,"hip":false,"lengthProjectionCutout":0,"mainRoof":true,"oneHipLength":0.5,"orientation":"horizontal","over":0.5,"over_px":16.56353017074417,"parent":null,"parentAngleJoint":0,"position":"","possibleParents":["1","2"],"quadrant":"","realX":6.133000000000001,"realY":4.886412011528859,"ridge":1.6438319960274015,"rotated":false,"rotatedWindow":false,"roofNum":"0","S":60.220842824599856,"scale":33.12706034148834,"selected":false,"Sneckline":0,"side":null,"startingX":206.09898076326684,"startingY":50,"startingZ":3000,"type":"4M","warning":false,"warningType":"","windowPlace":false,"windowType":"","xMax":1627.4237485454773,"xMin":-4605.262946870871,"yMax":-3517.5431705792,"yMin":-8483.379650699622,"xRoof":[null,189.53545059252266,425.830772008359,189.53545059252266,425.830772008359,280.45545043860636,334.9107721622753],"yRoof":[null,33.43646982925583,33.43646982925583,228.43599573003408,228.43599573003408,130.93623277964497,130.93623277964497],"x":[null,206.09898076326684,409.26724183761485,206.09898076326684,409.26724183761485],"y":[null,50,50,211.8724655592899,211.8724655592899]},"parentAngleJoint":47,"position":"","possibleParents":["0"],"quadrant":"","realX":3.2027888882850384,"realY":2.3169112171298565,"ridge":0,"rotated":false,"rotatedWindow":false,"roofNum":"2","S":17.369119240529912,"scale":33.12706034148834,"selected":false,"Sneckline":0,"side":"side3","startingX":100,"startingY":92.89107930144536,"startingZ":3000,"type":"2Sep","warning":false,"warningType":"","windowPlace":false,"windowType":"","xMax":-4605.262946870871,"xMin":-7860.11044275241,"yMax":-4813.0195398653,"yMin":-7167.5901769868,"xRoof":[null,206.0989807632668,206.0989807632668,83.43646982925581,83.43646982925581,144.76772529626132,144.76772529626132],"yRoof":[null,76.32754913070119,186.20706716792148,76.32754913070119,186.20706716792148,76.32754913070119,186.20706716792148],"x":[null,206.0989807632668,206.0989807632668,99.99999999999999,99.99999999999999],"y":[null,92.89107930144536,169.6435369971773,92.89107930144536,169.6435369971773]}]}';

        var restoredRoofData = JSON.parse(savedData);
        var savedRoofProperties = restoredRoofData.savedRoofProperties;

        for (var i in savedRoofProperties) {
            roof[i] = new roofClass();
            roof[i].set({cx:cx});
            for (var key in savedRoofProperties[i]) {
                roof[i][key] = savedRoofProperties[i][key];
            }
        }

        // Initial arbitrary roof
        selectedRoof = roof[0];

        for (var i in roof) {

            if (savedRoofProperties[i].parent != null) {
                roof[i].parent = roof[savedRoofProperties[i].parent.roofNum];
            }
            else {
                roof[i].parent = null;
            }

            roof[i].setPrivateAgain();
            roof[i].init();
            roof[i].drawBase();
            roof[i].calcOverhangs();
            roof[i].drawOverhang();

            if (roof[i].selected == true) {
                selectedRoof = roof[i];
            }
            if (roof[i].mainRoof == true) {
                mainRoof = roof[i].roofNum;
            }

            calcGeneralArea();
            getError();
            addGetFunctions();

        }
    }
    /*----------------- End of restore function ----------------*/



    restore();

    //initialize();

    function initialize() {

        var xMinAbs = 99999, yMinAbs = 99999;
        var xMaxAbs = -99999, yMaxAbs = -99999;

		//This array must be overrided for new json
        roof = [];
        room = json.floors[0].rooms;
        cx.clearRect(0, 0, $("canvas").width(), $("canvas").height());

        calcScaleJson();

        function calcScaleJson() {
            var startX = json.floors[0].rooms[0].walls[0].center.start.x;
            var endX = json.floors[0].rooms[0].walls[0].center.end.x;
            var startY = json.floors[0].rooms[0].walls[0].center.start.y;
            var endY = json.floors[0].rooms[0].walls[0].center.end.y;
            var wall_length_px = sqrt(pow((startX - endX ), 2) + pow((startY - endY), 2));
            var wall_length_mm = json.floors[0].rooms[0].walls[0].wall_length_mm;
            scaleJson = wall_length_mm/wall_length_px;
        }

        //scaleJson = 20;
        //scale=600;

        function jsonXYMaxMin() {
            wall = json.floors[0].rooms[j].walls;
            for (var i in wall) {
                x[1] = parseFloat(wall[i].center.start.x);
                x[2] = parseFloat(wall[i].center.end.x);
                y[1] = parseFloat(wall[i].center.start.y);
                y[2] = parseFloat(wall[i].center.end.y);
                if (x[1] >= xMax) xMax = x[1];
                if (x[2] >= xMax) xMax = x[2];
                if (x[1] <= xMin) xMin = x[1];
                if (x[2] <= xMin) xMin = x[2];
                if (y[1] >= yMax) yMax = y[1];
                if (y[2] >= yMax) yMax = y[2];
                if (y[1] <= yMin) yMin = y[1];
                if (y[2] <= yMin) yMin = y[2];

               /* z[1] = wall[i].height.start;
                z[2] = wall[i].height.start;*/
               /* console.log('xMax',xMax);
                console.log('xMin',xMin);*/
            }
        }

        for (var j in room) {

            var xMax = -99999, yMax = -99999, xMin = 99999, yMin = 99999;
            var additionalScale = 1;
            var dXY = 1, dX = 1, dY = 1;

            //console.log('RoomNum=',j);

            jsonXYMaxMin();

            room[j].xMin = xMin;
            room[j].xMax = xMax;
            room[j].yMin = yMin;
            room[j].yMax = yMax;


            //console.log('room',j,'xmax',xMax.toFixed(2),'xmin',xMin);
            //console.log('room',j,'ymax',yMax.toFixed(2),'ymin',yMin.toFixed(2));

            if (xMin <= xMinAbs) xMinAbs = xMin;
            if (yMin <= yMinAbs) yMinAbs = yMin;

            if (xMax >= xMaxAbs) xMaxAbs = xMax;
            if (yMax >= yMaxAbs) yMaxAbs = yMax;

            dX = xMaxAbs - xMinAbs;
            dY = yMaxAbs - yMinAbs;
            if (dX >= dY) dXY = dX;
            if (dY >= dX) dXY = dY;

            // The scale below intended for better scaling with different json sizes
            additionalScale = 600/abs(dXY);

            addX = 100 - xMinAbs*scaleJson*scale*additionalScale/1000;
            addY = 50 - yMinAbs*scaleJson*scale*additionalScale/1000;

        }

        /*alert(scaleJson)
        alert(xMinAbs)
        alert(xMaxAbs)*/
        //additionalScale = 1;
        //alert(yMinAbs)

        for (var j in room) {

            var xMax = -99999, yMax = -99999, xMin = 99999, yMin = 99999;

            jsonXYMaxMin();

            stx1 = addX + xMin*scaleJson*scale*additionalScale/1000;
            sty1 = addY + yMin*scaleJson*scale*additionalScale/1000;
            stz1 = parseFloat(wall[0].height.start);
            a = (xMax - xMin)*scaleJson/1000;
            b = (yMax - yMin)*scaleJson/1000;
            roof[j] = new roofClass();
            roof[j].set({ a:a, b:b, realX:a, realY:b, stz1:stz1, over:0.5, stx1:stx1, sty1:sty1, scale:scale*additionalScale, cx:cx, roofNum:j });
            roof[j].set({ xMax:xMax, xMin:xMin, yMax:yMax, yMin:yMin });

        }

        // Search the main roof by maximal area
        var maxRoomArea = -99999;
        for (var i in room) {
            room_area = parseFloat(json.floors[0].rooms[i].room_area);
            if (room_area > maxRoomArea) {
                maxRoomArea = room_area;
                mainRoof = i;
                roof[i].mainRoof = true;
            }
        }

        //alert(mainRoof)

		//Setting another roof properties
        //Json 3
/*        data[0] = {angles: [47, 45], orientation: 'horizontal', jointType: 'separate', type: '2Slope'};
        data[1] = {angles: [34.5, 45], orientation: 'vertical', jointType: 'separate', type: '2Slope'};
        data[2] = {angles: [45 , 45], orientation: 'horizontal', jointType: 'T', type: '2Slope'};
        data[3] = {angles: [44, 45], orientation: 'horizontal', jointType: 'separate', type: '4Sep'};
        data[4] = {angles: [44, 45], orientation: 'horizontal', jointType: 'separate', type: '4Sep'};
        data[5] = {angles: [44, 45], orientation: 'horizontal', jointType: 'separate', type: '4Sep'};*/

        //Json 5
/*        data[0] = {angles: [47, 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};
        data[1] = {angles: [34.5, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[2] = {angles: [45 , 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[3] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[4] = {angles: [44, 45], orientation: 'horizontal', jointType: 'T', globalType: '2Slope'};
        data[5] = {angles: [44, 45], orientation: 'vertical', jointType: 'T', globalType: '2Slope'};*/

        //Json 7
/*        data[0] = {angles: [47, 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};

        data[1] = {angles: [34.5, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[2] = {angles: [45 , 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};

        data[3] = {angles: [45, 45], orientation: 'vertical', jointType: 'T', globalType: '2Slope'}; //

        data[4] = {angles: [44, 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};
        data[5] = {angles: [44, 45], orientation: 'vertical', jointType: 'T', globalType: '2Slope'};
        data[6] = {angles: [45, 45], orientation: 'horizontal', jointType: 'T', globalType: '2Slope'};
        data[7] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[8] = {angles: [45, 45], orientation: 'horizontal', jointType: 'T', globalType: '2Slope'};*/

        //Json 8
/*        data[0] = {angles: [47, 45], orientation: 'vertical', jointType: 'separate', globalType: '3Slope'};
        data[1] = {angles: [34.5, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[2] = {angles: [45 , 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};

        data[3] = {angles: [44, 45], anglesHips: [45,45,45,45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};

        data[4] = {angles: [44, 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};
        data[5] = {angles: [44, 45], orientation: 'vertical', jointType: 'T', globalType: '2Slope'};

        data[6] = {angles: [45, 45], orientation: 'horizontal', jointType: 'T', globalType: '2Slope'};

        data[7] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[8] = {angles: [45, 45], orientation: 'horizontal', jointType: 'T', globalType: '2Slope'};
        data[9] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[10] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[11] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[12] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[13] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[14] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[15] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[16] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[17] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[18] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[19] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};*/
        //Json 10
     /*   data[0] = {angles: [47, 45], orientation: 'vertical', jointType: 'separate', globalType: '4Slope'};
        data[1] = {angles: [34.5, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[2] = {angles: [22 , 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};
        data[3] = {angles: [22, 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};
        data[4] = {angles: [22, 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};

        data[5] = {angles: [77, 45], orientation: 'vertical', jointType: 'T', globalType: '2Slope'};

        data[6] = {angles: [41, 45], orientation: 'horizontal', jointType: 'T', globalType: '2Slope'};
        data[7] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[8] = {angles: [22, 45], orientation: 'horizontal', jointType: 'T', globalType: '2Slope'};
        data[9] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[10] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[11] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[12] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[13] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[14] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[15] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};*/
        //Json 14
/*        data[0] = {angles: [47, 45], orientation: 'horizontal', jointType: 'separate', globalType: '4Slope'};
        data[1] = {angles: [34.5, 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};
        data[2] = {angles: [22 , 45], orientation: 'horizontal', jointType: 'separate', globalType: '1Slope'};
        data[3] = {angles: [22, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[4] = {angles: [22, 45], orientation: 'horizontal', jointType: 'separate', globalType: '1Slope'};
        data[5] = {angles: [77, 45], orientation: 'vertical', jointType: 'T', globalType: '1Slope'};
        data[6] = {angles: [41, 45], orientation: 'horizontal', jointType: 'T', globalType: '1Slope'};
        data[7] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[8] = {angles: [22, 45], orientation: 'horizontal', jointType: 'T', globalType: '1Slope'};
        data[9] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[10] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};

        data[11] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[12] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[13] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[14] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[15] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};*/
        //Json 15
        data[0] = {angles: [47, 45], orientation: 'horizontal', jointType: 'separate', globalType: '4Slope'};
        data[1] = {angles: [34.5, 45], orientation: 'horizontal', jointType: 'separate', globalType: '2Slope'};
        data[2] = {angles: [45 , 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[3] = {angles: [45, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[4] = {angles: [45, 45], orientation: 'vertical', jointType: 'separate', globalType: '2Slope'};
        data[5] = {angles: [77, 45], orientation: 'vertical', jointType: 'T', globalType: '1Slope'};
        data[6] = {angles: [41, 45], orientation: 'horizontal', jointType: 'T', globalType: '1Slope'};
        data[7] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[8] = {angles: [45, 45], orientation: 'horizontal', jointType: 'T', globalType: '1Slope'};
        data[9] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[10] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[11] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[12] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[13] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[14] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[15] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[16] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[17] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[18] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[19] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};
        data[20] = {angles: [44, 45], orientation: 'vertical', jointType: 'separate', globalType: '1Slope'};

        //Each roof must get a parent roof
        data[mainRoof].parent = null;
        data[mainRoof].side = null;

        // Starting values of halfhip length
        //console.log('==STARTING==');
        for (var i in data) {
            data[i].halfHipLength = [0.5,0.5,0.5,0.5];
            data[i].oneHipLength = 0.5;
        }

        for (var i in room) {
            // Search for possible parents for each roof
            var posssibleParents = [];
                for (var s in room) {
                    if (s != i) {
                        if ( hasXConnection(room[i], room[s]) && hasYConnection(room[i], room[s]) ) {
                            posssibleParents.push(s);
                        }
                    }
                }
                roof[i].set({possibleParents:posssibleParents});
        }

        parentAndSideSearch();
        function parentAndSideSearch() {
            //Each child roof must get a parent and a side position
            for (var i in room) {
                if (i != mainRoof) {
                    /*------------------- Main roof children -----------------------*/
                    if (equalityOfCoordinates(room[i].yMax, room[mainRoof].yMin) && hasXConnection(room[i], room[mainRoof]) ) {
                        data[i].parent = roof[mainRoof];
                        data[i].side = 'side1';
                        setRoofPositionX('right', 'left');
                    }
                    else if (equalityOfCoordinates(room[i].yMin, room[mainRoof].yMax) && hasXConnection(room[i], room[mainRoof]) ) {
                        data[i].parent = roof[mainRoof];
                        data[i].side = 'side2';
                        setRoofPositionX('left', 'right');
                    }
                    else if (equalityOfCoordinates(room[i].xMax, room[mainRoof].xMin) && hasYConnection(room[i], room[mainRoof]) ) {
                        data[i].parent = roof[mainRoof];
                        data[i].side = 'side3';
                        setRoofPositionY('left', 'right');
                    }
                    else if (equalityOfCoordinates(room[i].xMin, room[mainRoof].xMax) && hasYConnection(room[i], room[mainRoof]) ) {
                        data[i].parent = roof[mainRoof];
                        data[i].side = 'side4';
                        setRoofPositionY('right', 'left');
                    }
                    // Dormer window
                    else if (room[i].xMax <= room[mainRoof].xMax && room[i].xMin >= room[mainRoof].xMin && room[i].yMax <= room[mainRoof].yMax && room[i].yMin >= room[mainRoof].yMin) {

                        data[i].parent = roof[mainRoof];
                        data[i].windowPlace = true;

                        // Search position of the windowPlace window (4 quadrants)
                        if (room[i].yMax < (room[mainRoof].yMax + room[mainRoof].yMin)/2 && room[i].xMax < (room[mainRoof].xMax + room[mainRoof].xMin)/2) data[i].quadrant = 'q1';
                        if (room[i].yMax < (room[mainRoof].yMax + room[mainRoof].yMin)/2 && room[i].xMin > (room[mainRoof].xMax + room[mainRoof].xMin)/2) data[i].quadrant = 'q2';
                        if (room[i].yMin > (room[mainRoof].yMax + room[mainRoof].yMin)/2 && room[i].xMax < (room[mainRoof].xMax + room[mainRoof].xMin)/2 ) data[i].quadrant = 'q3';
                        if (room[i].yMin > (room[mainRoof].yMax + room[mainRoof].yMin)/2 && room[i].xMin > (room[mainRoof].xMax + room[mainRoof].xMin)/2) data[i].quadrant = 'q4';

                        // Outside quadrants (middle quadrants)
                        if (room[i].yMax < (room[mainRoof].yMax + room[mainRoof].yMin)/2 && room[i].xMin < (room[mainRoof].xMax + room[mainRoof].xMin)/2 && room[i].xMax > (room[mainRoof].xMax + room[mainRoof].xMin)/2) {
                            data[i].side = 'side1';
                        }
                        if (room[i].yMin > (room[mainRoof].yMax + room[mainRoof].yMin)/2 && room[i].xMin < (room[mainRoof].xMax + room[mainRoof].xMin)/2 && room[i].xMax > (room[mainRoof].xMax + room[mainRoof].xMin)/2) {
                            data[i].side = 'side2';
                        }
                        if (room[i].xMax < (room[mainRoof].xMax + room[mainRoof].xMin)/2 && room[i].yMin < (room[mainRoof].yMax + room[mainRoof].yMin)/2 && room[i].yMax > (room[mainRoof].yMax + room[mainRoof].yMin)/2) {
                            data[i].side = 'side3';
                        }
                        if (room[i].xMin > (room[mainRoof].xMax + room[mainRoof].xMin)/2 && room[i].yMin < (room[mainRoof].yMax + room[mainRoof].yMin)/2 && room[i].yMax > (room[mainRoof].yMax + room[mainRoof].yMin)/2) {
                            data[i].side = 'side4';
                        }
                    }
                    // end of usual dormer windows

                    // Protruding dormer window on Main roof
                    else if ( room[i].xMin > room[mainRoof].xMin && room[i].xMax < room[mainRoof].xMax && (room[i].yMin <= room[mainRoof].yMin && room[i].yMax > room[mainRoof].yMin) ) {
                        data[i].parent = roof[mainRoof];
                        data[i].windowPlace = true;
                        data[i].side = 'side1';
                    }
                    else if ( room[i].xMin > room[mainRoof].xMin && room[i].xMax < room[mainRoof].xMax && (room[i].yMin < room[mainRoof].yMax && room[i].yMax >= room[mainRoof].yMax) ) {
                        data[i].parent = roof[mainRoof];
                        data[i].windowPlace = true;
                        data[i].side = 'side2';
                    }
                    else if ( room[i].yMin > room[mainRoof].yMin && room[i].yMax < room[mainRoof].yMax && (room[i].xMin <= room[mainRoof].xMin && room[i].xMax > room[mainRoof].xMin) ) {
                        data[i].parent = roof[mainRoof];
                        data[i].windowPlace = true;
                        data[i].side = 'side3';
                    }
                    else if ( room[i].yMin > room[mainRoof].yMin && room[i].yMax < room[mainRoof].yMax && (room[i].xMin < room[mainRoof].xMax && room[i].xMax >= room[mainRoof].xMax) ) {
                        data[i].parent = roof[mainRoof];
                        data[i].windowPlace = true;
                        data[i].side = 'side4';
                    }

                    else {
                        // Search possible ancestors if an ancestor is not the main roof
                        for (var s in room) {
                            // Possible ancestors
                            if (s != i) {
                                if (equalityOfCoordinates(room[i].yMax, room[s].yMin) && hasXConnection(room[i], room[s]) ){
                                    data[i].parent = roof[s];
                                    data[i].side = 'side1';
                                    setRoofPositionX('right', 'left');
                                }
                                if (equalityOfCoordinates(room[i].yMin, room[s].yMax) && hasXConnection(room[i], room[s]) ){
                                    data[i].parent = roof[s];
                                    data[i].side = 'side2';
                                    setRoofPositionX('left', 'right');
                                }
                                if (equalityOfCoordinates(room[i].xMax, room[s].xMin) && hasYConnection(room[i], room[s]) ){
                                    data[i].parent = roof[s];
                                    data[i].side = 'side3';
                                    setRoofPositionY('left', 'right');
                                }
                                if (equalityOfCoordinates(room[i].xMin, room[s].xMax) && hasYConnection(room[i], room[s]) ){
                                    data[i].parent = roof[s];
                                    data[i].side = 'side4';
                                    setRoofPositionY('right', 'left');
                                }
                                // Dormer window
                                else if (room[i].xMax <= room[s].xMax && room[i].xMin >= room[s].xMin && room[i].yMax <= room[s].yMax && room[i].yMin >= room[s].yMin) {
                                    data[i].parent = roof[s];
                                    data[i].windowPlace = true;

                                    // Search position of the windowPlace window (4 quadrants)
                                    if (room[i].yMax < (room[s].yMax + room[s].yMin)/2 && room[i].xMax < (room[s].xMax + room[s].xMin)/2) {
                                        data[i].quadrant = 'q1';
                                    }
                                    if (room[i].yMax < (room[s].yMax + room[s].yMin)/2 && room[i].xMin > (room[s].xMax + room[s].xMin)/2) {
                                        data[i].quadrant = 'q2';
                                    }
                                    if (room[i].yMin > (room[s].yMax + room[s].yMin)/2 && room[i].xMax < (room[s].xMax + room[s].xMin)/2 ) {
                                        data[i].quadrant = 'q3';
                                    }
                                    if (room[i].yMin > (room[s].yMax + room[s].yMin)/2 && room[i].xMin > (room[s].xMax + room[s].xMin)/2) {
                                        data[i].quadrant = 'q4';
                                    }
                                    // Outside quadrants (middle quadrants)
                                    if (room[i].yMax < (room[s].yMax + room[s].yMin)/2 && room[i].xMin < (room[s].xMax + room[s].xMin)/2 && room[i].xMax > (room[s].xMax + room[s].xMin)/2) {
                                        data[i].side = 'side1';
                                    }
                                    if (room[i].yMin > (room[s].yMax + room[s].yMin)/2 && room[i].xMin < (room[s].xMax + room[s].xMin)/2 && room[i].xMax > (room[s].xMax + room[s].xMin)/2) {
                                        data[i].side = 'side2';
                                    }
                                    if (room[i].xMax < (room[s].xMax + room[s].xMin)/2 && room[i].yMin < (room[s].yMax + room[s].yMin)/2 && room[i].yMax > (room[s].yMax + room[s].yMin)/2) {
                                        data[i].side = 'side3';
                                    }
                                    if (room[i].xMin > (room[s].xMax + room[s].xMin)/2 && room[i].yMin < (room[s].yMax + room[s].yMin)/2 && room[i].yMax > (room[s].yMax + room[s].yMin)/2) {
                                        data[i].side = 'side4';
                                    }
                                    // Protruding dormer window on child roof
                                    else if ( room[i].xMin > room[s].xMin && room[i].xMax < room[s].xMax && (room[i].yMin <= room[s].yMin && room[i].yMax > room[s].yMin) ) {
                                        data[i].parent = roof[s];
                                        data[i].windowPlace = true;
                                        data[i].side = 'side1';
                                    }
                                    else if ( room[i].xMin > room[s].xMin && room[i].xMax < room[s].xMax && (room[i].yMin < room[s].yMax && room[i].yMax >= room[s].yMax) ) {
                                        data[i].parent = roof[s];
                                        data[i].windowPlace = true;
                                        data[i].side = 'side2';
                                    }
                                    else if ( room[i].yMin > room[s].yMin && room[i].yMax < room[s].yMax && (room[i].xMin <= room[s].xMin && room[i].xMax > room[s].xMin) ) {
                                        data[i].parent = roof[s];
                                        data[i].windowPlace = true;
                                        data[i].side = 'side3';
                                    }
                                    else if ( room[i].yMin > room[s].yMin && room[i].yMax < room[s].yMax && (room[i].xMin < room[s].xMax && room[i].xMax >= room[s].xMax) ) {
                                        data[i].parent = roof[s];
                                        data[i].windowPlace = true;
                                        data[i].side = 'side4';
                                    }

                                }
                            }
                        }

                        // Detection annexes with two parents
                        for (var s in room) {
                            if (s != i) {
                                if ( equalityOfCoordinates(room[i].xMin, room[s].xMax) && hasYConnection(room[i], room[s]) ) {
                                    for (var z in room) {
                                        if (z != i) {
                                            if ( equalityOfCoordinates(room[i].yMax, room[z].yMin) && hasXConnection(room[i], room[z]) && hasYConnection(room[s], room[z]) ) {
                                                //console.log('==',i,s,z);
                                                data[i].parent = 'none';
                                                data[i].side = 'side14';
                                            }
                                            if ( equalityOfCoordinates(room[i].yMin, room[z].yMax) && hasXConnection(room[i], room[z]) && hasYConnection(room[s], room[z]) ) {
                                                //console.log('==',i,s,z);
                                                data[i].parent = 'none';
                                                data[i].side = 'side24';
                                            }
                                        }
                                    }
                                }
                                if ( equalityOfCoordinates(room[i].xMax, room[s].xMin) && hasYConnection(room[i], room[s]) ) {
                                    for (var z in room) {
                                        if (z != i) {
                                            if ( equalityOfCoordinates(room[i].yMax, room[z].yMin) && hasXConnection(room[i], room[z]) && hasYConnection(room[s], room[z]) ) {
                                                //console.log('==',i,s,z);
                                                data[i].parent = 'none';
                                                data[i].side = 'side13';
                                            }
                                            if ( equalityOfCoordinates(room[i].yMin, room[z].yMax) && hasXConnection(room[i], room[z]) && hasYConnection(room[s], room[z]) ) {
                                                //console.log('==',i,s,z);
                                                data[i].parent = 'none';
                                                data[i].side = 'side23';
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    } // end of else ancestors

                } // end of if (i != mainRoof) {

                // This function is needed to create L-joints (It helps to find left or right position of child roof)
                function setRoofPositionX(arg1, arg2) {
                    if (equalityOfCoordinates(room[i].xMin, room[mainRoof].xMin)) data[i].position = arg1;
                    else if (equalityOfCoordinates(room[i].xMax, room[mainRoof].xMax)) data[i].position = arg2;
                }
                function setRoofPositionY(arg1, arg2) {
                    if (equalityOfCoordinates(room[i].yMin, room[mainRoof].yMin)) data[i].position = arg1;
                    else if (equalityOfCoordinates(room[i].yMax, room[mainRoof].yMax)) data[i].position = arg2;
                }
            }
        }
        /*------------ end of parentAndSideSearch -------------*/






        //console.log(data);

        selectedRoof = roof[mainRoof];
        $("#selectedRoof").text('Крыша '+ mainRoof);

        //The main roof must be calculated first
        roof[mainRoof].set(data[mainRoof]);
        roof[mainRoof].init();

        for (var j in roof) {
            roof[j].set(data[j]);
            roof[j].init();
            roof[j].calcBases();
        }

        roof[mainRoof].calcOverhangs();

        for (var j in roof) {
            roof[j].calcOverhangs();
            roof[j].init2();
            roof[j].drawBase();
        }
        for (var j in roof) {
            roof[j].drawOverhang();
        }

        calcGeneralArea();
        getError();
        addGetFunctions();

    }
    /*------- end of initialize -------*/
    //console.log(roof[1]);

    /*------- Events -------*/
    $("input[type='text']").keyup(function () {
        calc_all();
    });

    $("#roofType").change(function() {
        $("#roofType option:selected").each(function() {
            var valRoofChange = $(this).val();
            if (valRoofChange == '1Slope') selectedRoof.set({globalType: '1Slope'});
            if (valRoofChange == '2Slope') selectedRoof.set({globalType: '2Slope'});
            if (valRoofChange == '3Slope') selectedRoof.set({globalType: '3Slope'});
            if (valRoofChange == '4Slope') selectedRoof.set({globalType: '4Slope'});

            if (valRoofChange == 'attic') selectedRoof.set({windowType: 'attic', globalType: '1Slope'});
            if (valRoofChange == 'chimney') selectedRoof.set({windowType: 'chimney', globalType: '1Slope'});
            if (valRoofChange == 'dormer1') selectedRoof.set({windowType: 'dormer1', globalType: '1Slope'});
            if (valRoofChange == 'dormer2') selectedRoof.set({windowType: 'dormer2', globalType: '2Slope'});
            if (valRoofChange == 'dormer2TR') selectedRoof.set({windowType: 'dormer2TR', globalType: '2Slope'});
        });
        calc_all();
        addGetFunctions();
    });

    $("#roofOrientation").change(function() {
        $("#roofOrientation option:selected").each(function() {
            var orientation = $(this).val();
            if (orientation == 'horizontal') selectedRoof.set({orientation: 'horizontal'});
            if (orientation == 'vertical') selectedRoof.set({orientation: 'vertical'});
        });
        calc_all();
        addGetFunctions();
    });

    $("#jointType").change(function() {
        $("#jointType option:selected").each(function() {

            var jointType = $(this).val();

            //Set parent and child
            if (selectedRoof.parent == null) {
                if (jointType == 'common') setParentAndChild('common');
                if (jointType == 'separate') setParentAndChild('separate');
                if (jointType == 'T') setParentAndChild('T');
            }

            //Set child and parent
            if (selectedRoof.parent != null) {
                if (jointType == 'common') setChildAndParent('common');
                if (jointType == 'separate') setChildAndParent('separate');
                if (jointType == 'T') setChildAndParent('T');
            }

            if (jointType == 'separate') selectedRoof.set({jointType: 'separate'});
            if (jointType == 'T') selectedRoof.set({jointType: 'T'});

            function setParentAndChild(arg) {
                selectedRoof.set({jointType: arg});
                for (var i in selectedRoof.child) {
                    if (selectedRoof.child[i] != null) selectedRoof.child[i].set({jointType: arg});
                }
                children = [];
            }

            function setChildAndParent(arg) {

                //Only one parent must be set
                if (arg == 'common') {

                    selectedRoof.parent.set({jointType: arg});

                    /// Search and setting child roofs in case of common
                    if (arg == 'common') {
                        if (selectedRoof.side == 'side1' && selectedRoof.position == 'right') children[1] = selectedRoof;
                        if (selectedRoof.side == 'side1' && selectedRoof.position == 'left') children[2] = selectedRoof;
                        if (selectedRoof.side == 'side2' && selectedRoof.position == 'left') children[3] = selectedRoof;
                        if (selectedRoof.side == 'side2' && selectedRoof.position == 'right') children[4] = selectedRoof;
                        if (selectedRoof.side == 'side3' && selectedRoof.position == 'right') children[5] = selectedRoof;
                        if (selectedRoof.side == 'side3' && selectedRoof.position == 'left') children[6] = selectedRoof;
                        if (selectedRoof.side == 'side4' && selectedRoof.position == 'left') children[7] = selectedRoof;
                        if (selectedRoof.side == 'side4' && selectedRoof.position == 'right') children[8] = selectedRoof;
                    }
                    else children = [];

                    selectedRoof.parent.set({child: children});

                    selectedRoof.set({jointType: arg});

                }

                else if (arg == 'separate') {

                    //console.log('ch===',children);
                    selectedRoof.parent.set({jointType: arg});
                    for (var i in children){
                        selectedRoof.parent.child[i].set({jointType: arg});
                    }
                    children = [];
                    selectedRoof.parent.set({child: children});
                    selectedRoof.set({jointType: arg});
                }

                else if (arg == 'T') {
                    selectedRoof.parent.set({jointType: 'separate'});

                    ///Resetting all children to separate
                    if (selectedRoof.parent.parent == null) {
                        for (var i in selectedRoof.parent.child) {
                            selectedRoof.parent.child[i].set({jointType: 'separate'});
                        }
                    }

                    selectedRoof.set({jointType: arg});

                }
            }

        });
        addGetFunctions();
        calc_all();
    });

    $("#halfHip").change(function() {
        if ($("#halfHip").prop('checked')) {
            selectedRoof.set({hip:true});
        }
        else {
            selectedRoof.set({hip:false});
        }
        calc_all();
    });

    $("#rotate").change(function() {
        if ($("#rotate").prop('checked')) {
            selectedRoof.set({rotatedWindow:true});
            calc_all();
        }
        else {
            selectedRoof.set({rotatedWindow:false});
            calc_all();
        }
    });

    $("#possibleParents").change(function() {
        $("#possibleParents option:selected").each(function() {
            var num = $(this).val();
            var posPar = selectedRoof.possibleParents;
            selectedRoof.set({ parent: roof[num] });
            // After parent changing selected roof must get new side
            for (var i in roof) {
                // console.log(roof[i].xMax);
                if ( equalityOfCoordinates(selectedRoof.yMax, roof[num].yMin) && hasXConnection(selectedRoof, roof[num]) ) {
                    selectedRoof.set({side: 'side1'});
                }
                else if ( equalityOfCoordinates(selectedRoof.yMin, roof[num].yMax) && hasXConnection(selectedRoof, roof[num]) ) {
                    selectedRoof.set({side: 'side2'});
                }
                else if ( equalityOfCoordinates(selectedRoof.xMax, roof[num].xMin) && hasYConnection(selectedRoof, roof[num]) ) {
                    selectedRoof.set({side: 'side3'});
                }
                else if ( equalityOfCoordinates(selectedRoof.xMin, roof[num].xMax) && hasYConnection(selectedRoof, roof[num]) ) {
                    selectedRoof.set({side: 'side4'});
                }
            }
            calc_all();
        });
    });

    $("#json-form").submit(function (event) {
        event.preventDefault();
        var newJSON = $("textarea").val();
        json = JSON.parse(newJSON);
        initialize();
    });

    /*------------------------- Get functions ------------------------------*/
    function fillInputs() {
        /*----------------- Angle disabler -------------------*/
        if (selectedRoof.globalType == '1Slope') {
            disableAenableB();
        }

        if (selectedRoof.globalType == '2Slope') {

            // Main roof
            if (selectedRoof.parent == null) {
                if (selectedRoof.orientation == 'vertical') disableBenableA();
                if (selectedRoof.orientation == 'horizontal') disableAenableB();
            }
            // Child roof
            if (selectedRoof.parent != null) {
                if (selectedRoof.windowPlace == false) {
                    if (selectedRoof.side == 'side1' || selectedRoof.side == 'side2') {
                        if (selectedRoof.orientation == 'vertical') disableBenableA();
                        if (selectedRoof.orientation == 'horizontal') disableAenableB();
                    }
                    if (selectedRoof.side == 'side3' || selectedRoof.side == 'side4') {
                        if (selectedRoof.orientation == 'vertical') disableAenableB();
                        if (selectedRoof.orientation == 'horizontal') disableBenableA();
                    }
                }
                if (selectedRoof.windowPlace == true) {
                    disableBenableA();
                }
            }
        }

        if (selectedRoof.globalType == '3Slope' || selectedRoof.globalType == '4Slope') {
            enableAB();
        }

        $("input[name='a']").val(selectedRoof.a.toFixed(2));
        $("input[name='b']").val(selectedRoof.b.toFixed(2));
        $("input[name='angle_a']").val(selectedRoof.angleA.toFixed(0));
        $("input[name='angle_b']").val(selectedRoof.angleB.toFixed(0));

        if (selectedRoof.halfHipLength.length != 0) {
            $("#halfHipLength0").val(selectedRoof.halfHipLength[0].toFixed(2) * 100);
            $("#halfHipLength1").val(selectedRoof.halfHipLength[1].toFixed(2) * 100);
            $("#halfHipLength2").val(selectedRoof.halfHipLength[2].toFixed(2) * 100);
            $("#halfHipLength3").val(selectedRoof.halfHipLength[3].toFixed(2) * 100);
            $("#halfHipLength99").val(selectedRoof.oneHipLength.toFixed(2) * 100);
        }
        else {
            $("#halfHipLength0").val(0);
            $("#halfHipLength1").val(0);
            $("#halfHipLength2").val(0);
            $("#halfHipLength3").val(0);
            $("#halfHipLength99").val(0);
        }

        if (selectedRoof.angleHip.length != 0) {
            if (selectedRoof.angleHip[99] != undefined) {
                //console.log('selectedRoof.angleHip[99]=',selectedRoof.angleHip[99]);
                $("input[name='angle_hip']").val(selectedRoof.angleHip[99].toFixed(0));
            }
            $("input[name='angle_a1']").val(selectedRoof.angleHip[0].toFixed(0));
            $("input[name='angle_a2']").val(selectedRoof.angleHip[1].toFixed(0));
            $("input[name='angle_b1']").val(selectedRoof.angleHip[2].toFixed(0));
            $("input[name='angle_b2']").val(selectedRoof.angleHip[3].toFixed(0));
        }
        else {
            $("input[name='angle_hip']").val(0);
            $("input[name='angle_a1']").val(0);
            $("input[name='angle_a2']").val(0);
            $("input[name='angle_b1']").val(0);
            $("input[name='angle_b2']").val(0);
        }

        $("input[name='overhang']").val((selectedRoof.over.toFixed(2))*1000);

        function disableAenableB() {
            $('input[name="angle_b"]').prop('disabled', false);
            $('input[name="angle_a"]').attr('disabled', 'disabled');
        }
        function disableBenableA() {
            $('input[name="angle_a"]').prop('disabled', false);
            $('input[name="angle_b"]').attr('disabled', 'disabled');
        }
        function enableAB() {
            $('input[name="angle_a"]').prop('disabled', false);
            $('input[name="angle_b"]').prop('disabled', false);
        }
    }

    function getPossibleParents() {

        // Main roof doesn't have any parents
        if (selectedRoof.roofNum == mainRoof) {
            $("#possibleParentsEnvelope").css({display:'none'});
            $("#jointTypeEnvelope").css({display:'none'});
        }
        else {
            $("#possibleParentsEnvelope").css({display:'block'});
            $("#jointTypeEnvelope").css({display:'block'});
        }

        var posPar = selectedRoof.possibleParents;
        var htmlOptions = '';
        var addAttr = '';
        for (var i in posPar) {
            if (selectedRoof.parent != null && selectedRoof.parent.roofNum == posPar[i]) addAttr = 'selected';
            else addAttr = '';
            htmlOptions += '<option value="'+posPar[i]+'"'+addAttr+'>Крыша '+posPar[i]+'</option>';
        }
        $("#possibleParents").html(htmlOptions);
    }

    function getRoofTypes() {

        selectedRoofType = selectedRoof.globalType;

        if (selectedRoof.parent == null) {
            $("#roofType").html("<option value='1Slope'>Односкатная</option><option value='2Slope'>Двускатная</option><option value='4Slope'>Четырехскатная</option>");
            switch (selectedRoofType) {
                case '1Slope': $("#roofType").find("option").eq(0).attr('selected', 'selected');
                    break;
                case '2Slope': $("#roofType").find("option").eq(1).attr('selected', 'selected');
                    break;
                case '4Slope': $("#roofType").find("option").eq(2).attr('selected', 'selected');
                    break;
            }
        }

        else if (selectedRoof.parent != null) {

            if (selectedRoof.windowPlace == false) {
                $("#roofType").html("<option value='1Slope' selected>Односкатная</option><option value='2Slope'>Двускатная</option><option value='3Slope'>Трехскатная</option><option value='4Slope'>Трехскатная отд.</option>");
                switch (selectedRoofType) {
                    case '1Slope':
                        $("#roofType").find("option").eq(0).attr('selected', 'selected');
                        break;
                    case '2Slope':
                        $("#roofType").find("option").eq(1).attr('selected', 'selected');
                        break;
                    case '3Slope':
                        $("#roofType").find("option").eq(2).attr('selected', 'selected');
                        break;
                    case '4Slope':
                        $("#roofType").find("option").eq(3).attr('selected', 'selected');
                        break;
                } //switch
            } //selectedRoof.windowPlace
            else {
                $("#roofType").html("<option value='attic' selected>Мансардное окно</option><option value='dormer1'>Слуховое окно (односкатное)</option><option value='dormer2'>Слуховое окно (двускатное)</option><option value='dormer2TR'>Слуховое окно (треугольное)</option><option value='chimney'>Дымоход</option>");
                switch (selectedRoof.windowType) {
                    case 'attic': $("#roofType").find("option").eq(0).attr('selected', 'selected');
                        break;
                    case 'dormer1': $("#roofType").find("option").eq(1).attr('selected', 'selected');
                        break;
                    case 'dormer2': $("#roofType").find("option").eq(2).attr('selected', 'selected');
                        break;
                    case 'dormer2TR': $("#roofType").find("option").eq(3).attr('selected', 'selected');
                        break;
                    case 'chimney':
                        $("#roofType").find("option").eq(4).attr('selected', 'selected');
                        break;
                }
            }
        }
    }

    function getRoofOrientation() {
        var selectedRoofOrientation = selectedRoof.orientation;
        if (selectedRoof.type == '4M' || selectedRoof.type == '4MH' ) {
            $("#roofOrientation").html('<option value="horizontal" disabled>Горизонтальная</option><option value="vertical" disabled>Вертикальная</option>');
        }
        else {
            $("#roofOrientation").html('<option value="horizontal">Горизонтальная</option><option value="vertical">Вертикальная</option>');
        }
        if (selectedRoofOrientation == 'horizontal') $("#roofOrientation").find("option").eq(0).attr('selected', 'selected');
        if (selectedRoofOrientation == 'vertical') $("#roofOrientation").find("option").eq(1).attr('selected', 'selected');

    }

    function getHip() {
        var selectedRoofHip = selectedRoof.hip;
        if (selectedRoof.type == '4M' || selectedRoof.type == '4MH' || selectedRoof.globalType == '2Slope') {
            $("#halfHipCheckboxEnvelope").css({display:'block'});
        }
        else {
            $("#halfHipCheckboxEnvelope").css({display:'none'});
        }

        if (selectedRoofHip == true) {
            $('#halfHip').prop('checked',true);
        }
        else {
            $('#halfHip').prop('checked',false);
        }
    }

    function getRotation() {
        var selectedRoofRotatedWindow = selectedRoof.rotatedWindow;
        if (selectedRoof.windowPlace == true) {
            $("#rotateCheckboxEnvelope").css({display:'block'});
        }
        else {
            $("#rotateCheckboxEnvelope").css({display:'none'});
        }
        if (selectedRoofRotatedWindow == true) {
            $('#rotate').prop('checked',true);
        }
        else {
            $('#rotate').prop('checked',false);
        }
    }

    function getJointType() {
        var selectedRoofJointType = selectedRoof.jointType;
        // Only roofs with corner position can have common joint (face)
        if (selectedRoof.position != '') {
            $("#jointType").html('<option value="common">Общий</option><option value="separate">Отдельный</option><option value="T">Т-образный</option>');

        }
        else {
            $("#jointType").html('<option value="common" disabled>Общий</option><option value="separate">Отдельный</option><option value="T">Т-образный</option>');
        }
        if (selectedRoof.couldBeCommonAndT == false) {
            $("#jointType").find("option").eq(0).prop('disabled', true);
            $("#jointType").find("option").eq(2).prop('disabled', true);
        }
        if (selectedRoofJointType == 'common') $("#jointType").find("option").eq(0).attr('selected', 'selected');
        if (selectedRoofJointType == 'separate') $("#jointType").find("option").eq(1).attr('selected', 'selected');
        if (selectedRoofJointType == 'T') $("#jointType").find("option").eq(2).attr('selected', 'selected');
    }

    function getError() {
        for (var i in roof) {
            var warningType = roof[i].warningType;
            var message = 'Невозможно построить крышу с указанными параметрами.';

/*            console.log('i=',i);
            console.log('roof[i].warning=',roof[i].warning);
            console.log('roof[i].warningType=',roof[i].warningType);*/

            if (roof[i].warning == true) {
                roof[i].set({warning:false, warningType:''});
                roof[i].init();
                message = '';
                message += '<strong>Предупреждение!</strong> ';
                if (warningType == 'hipAngle') message += 'Слишком большой угол полувальмы. Угол был пересчитан автоматически.';
                if (warningType == 'parentHeight') message += 'Недопустимо большой угол дочерней крыши '+i+'. Угол A был пересчитан автоматически и установлен на '+roof[i].angleA.toFixed(0)+' град.';
                if (warningType == 'equalityOfHeights') message += 'Для данного типа стыка высота крыш принята одинаковая. Угол A дочерней крыши '+i+' был пересчитан автоматически. Установлен на '+roof[i].angleA.toFixed(0)+' град.';
                if (warningType == '3SlopeMinAngleB') message += 'Недопустимо малый угол В текущей крыши. Угол был пересчитан автоматически. Установлен на '+roof[i].angleB.toFixed(0)+' град.';

                //if (warningType == '3Slope vertical') message += 'Ориентация крыши '+i+' автоматически изменена на вертикальную';
                //if (warningType == '3Slope horizontal') message += 'Ориентация крыши '+i+' автоматически изменена на горизонтальную';

                if (warningType == 'orientationChange4Slope') message += 'Ориентация крыши была изменена';
                $("#error-message").html(message);
                $("#error-message").stop(true,true).fadeIn(100).delay(3500).fadeOut(555);
            }
        }
    }

    function getABorientation() {
        if (selectedRoof.side == 'side3' || selectedRoof.side == 'side4') $("#imgSides").attr('src','SidesAB.png');
        else $("#imgSides").attr('src','SidesBA.png');
    }

    function addGetFunctions() {
        fillInputs();
        getABorientation();
        getRoofTypes();
        getRoofOrientation();
        getJointType();
        getHip();
        getRotation();
        getPossibleParents();
        halfHipAngleDisabler();
    }

    /*------------------------- Additional functions --------------------------*/
    function equalityOfCoordinates(arg1, arg2) {
        var res;
        if (abs(arg1 - arg2) < 1) res = true;
        else res = false;
        return res;
    }
    
    // Connections between neighboring roofs
    function hasYConnection(arg1, arg2) {
        var hasConnection = false;
        if ( (arg1.yMin <= arg2.yMax && arg1.yMax >= arg2.yMin) ) hasConnection = true;
        return hasConnection;
    }
    
    function hasXConnection(arg1, arg2) {
        var hasConnection = false;
        if ( (arg1.xMax >= arg2.xMin && arg1.xMin <= arg2.xMax) ) hasConnection = true;
        return hasConnection;
    }
    
    function isNumber(arg) {
        if (isNaN(parseFloat(arg)) && arg != '' && arg != '-') {
            alert("Введите число");
            arg = 0;
        }
        else if (arg == '-') {
            arg = 0;
        };
        return arg;
    }
    
    function halfHipAngleDisabler() {
        if (selectedRoof.globalType == '4Slope' && selectedRoof.hip == true) {
            if (selectedRoof.orientation == 'horizontal') {
                $(".halfHipEnvelopeOne").css({display: 'none'});
                $(".halfHipEnvelopeB").css({display: 'none'});
                $(".halfHipEnvelopeA").css({display: 'block'});
            }
            if (selectedRoof.orientation == 'vertical') {
                $(".halfHipEnvelopeOne").css({display: 'none'});
                $(".halfHipEnvelopeA").css({display: 'none'});
                $(".halfHipEnvelopeB").css({display: 'block'});
            }
        }
        else if (selectedRoof.globalType == '2Slope' && selectedRoof.hip == true) {
            if (selectedRoof.parent == null ) {
                if (selectedRoof.orientation == 'horizontal') {
                    $(".halfHipEnvelopeOne").css({display: 'none'});
                    $(".halfHipEnvelopeB").css({display: 'none'});
                    $(".halfHipEnvelopeA").css({display: 'block'});
                }
                if (selectedRoof.orientation == 'vertical') {
                    $(".halfHipEnvelopeOne").css({display: 'none'});
                    $(".halfHipEnvelopeA").css({display: 'none'});
                    $(".halfHipEnvelopeB").css({display: 'block'});
                }
            }
            if (selectedRoof.parent != null ) {
                $(".halfHipEnvelopeA").css({display: 'none'});
                $(".halfHipEnvelopeB").css({display: 'none'});
                $(".halfHipEnvelopeOne").css({display: 'block'});
            }
        }
        else {
            $(".halfHipEnvelopeA").css({display: 'none'});
            $(".halfHipEnvelopeB").css({display: 'none'});
            $(".halfHipEnvelopeOne").css({display: 'none'});
        }
    }

    function calcGeneralArea() {
        var s = [];
        var sNeckline = [];
        var sGen = 0;
        var infoAdditional = '';
        var measureUnit = ' м<sup>2</sup>';
        for (var i in roof) {
            s[i] = roof[i].S;
            sNeckline[i] = roof[i].Sneckline;
            infoAdditional += '. Площадь крыши ' + i + ' = ' + s[i].toFixed(2) + measureUnit;
            if (sNeckline[i] != 0) {
                infoAdditional += '. Площадь выреза крыши ' + i + ' = ' + sNeckline[i].toFixed(2) + measureUnit;
                /*                console.log('=',sNeckline[i]);
                 console.log('===',s[roof[i].parent.roofNum]);*/
                if (roof[i].parent != null) {
                    s[roof[i].parent.roofNum] -= sNeckline[i];
                    // console.log('===',s[roof[i].parent.roofNum]);
                }

            }
            sGen += s[i] - sNeckline[i];
        }
        for (var i in roof) {
            if (s[roof[i].roofNum] < roof[i].S) {
                // console.log('---------',s[roof[i].roofNum]);
                infoAdditional += '. Площадь крыши ' + i + ' с вырезами = ' + s[roof[i].roofNum].toFixed(2) + measureUnit;
            }
        }
        $("#message").html("Общая площадь: " + sGen.toFixed(2) + measureUnit + infoAdditional);

        // Generate Area JSON
        var obj = [];
        for (var i in s) {
            obj[i] = {
                roofNum:i,
                roofArea:s[i],
                roofAreaWithoutCutouts:roof[i].S
            };
        }
        roofTotals = JSON.stringify(obj);
        roofTotals = '"roofTotals":'+roofTotals;
    }
    /*------------------------- Additional functions --------------------------*/

	/*-------------------------- Calc all -------------------------------*/
    function calc_all() {

        halfHipAngleDisabler();

        var new_a = isNumber($("#a").val());
        var new_b = isNumber($("#b").val());
        var new_angle_a = isNumber($("#angle_a").val());
        var new_angle_b = isNumber($("#angle_b").val());
        var new_angle_hip = isNumber($("#angle_hip").val());
        var new_angle_a1 = isNumber($("#angle_a1").val());
        var new_angle_a2 = isNumber($("#angle_a2").val());
        var new_angle_b1 = isNumber($("#angle_b1").val());
        var new_angle_b2 = isNumber($("#angle_b2").val());
        var new_overhang = isNumber($("#overhang").val());

        a = notZeroToFloat(new_a);
        b = notZeroToFloat(new_b);
        angle_hip = notZeroToFloat(new_angle_hip);
        angle_a = notZeroToFloat(new_angle_a);
        angle_b = notZeroToFloat(new_angle_b);
        angle_a1 = notZeroToFloat(new_angle_a1);
        angle_a2 = notZeroToFloat(new_angle_a2);
        angle_b1 = notZeroToFloat(new_angle_b1);
        angle_b2  = notZeroToFloat(new_angle_b2);

        var new_half_hip_length0 = isNumber($("#halfHipLength0").val());
        var new_half_hip_length1 = isNumber($("#halfHipLength1").val());
        var new_half_hip_length2 = isNumber($("#halfHipLength2").val());
        var new_half_hip_length3 = isNumber($("#halfHipLength3").val());
        var new_one_hip_length = isNumber($("#halfHipLength99").val());

        halfHipLength[0] = notZeroToFloat(new_half_hip_length0)/100;
        halfHipLength[1] = notZeroToFloat(new_half_hip_length1)/100;
        halfHipLength[2] = notZeroToFloat(new_half_hip_length2)/100;
        halfHipLength[3] = notZeroToFloat(new_half_hip_length3)/100;
        oneHipLength = notZeroToFloat(new_one_hip_length)/100;

        if (new_overhang != '') {overhang = parseFloat(new_overhang)/1000;} else {overhang = 0;}

        function notZeroToFloat(arg) {
            var res;
            if (arg != 0) res = parseFloat(arg);
            else res = 0;
            return res;
        }

        redraw();

    }

    /*--------------------------- Redraw function ----------------------------------*/
    function redraw() {

        cx.clearRect(0, 0, $("canvas").width(), $("canvas").height());

        var anglesHips = [angle_a1, angle_a2, angle_b1, angle_b2];
        anglesHips[99] = angle_hip;

        for (var i in roof) {
            data[i] = {a:a, b:b, over:overhang, angles:[angle_a, angle_b], anglesHips: anglesHips, halfHipLength: halfHipLength, oneHipLength:oneHipLength};
        }

        for (var i in roof) {
            if (selectedRoof == roof[i]) {
                roof[i].set(data[i]);
                roof[i].init();
                roof[i].calcBases();
                roof[i].calcOverhangs();

                checkSeparateChild();

                //This condition recalculates parent (main) roof
                if (selectedRoof.parent != null && roof[i].type != '4Sep' && roof[i].type != '1Sep') {
                   selectedRoof.parent.init();
                   selectedRoof.parent.calcBases();
                   selectedRoof.parent.calcOverhangs();
                }
            }
        }

        for (var i in roof) {
            // This condition recalculates child properties
            if (roof[i].jointType == 'separate' || roof[i].jointType == 'common' || roof[i].jointType == 'T') {   // roof[i].type != '4Sep' && roof[i].type != '1Sep'
                roof[i].init();
                roof[i].calcBases();
                roof[i].calcOverhangs();
                // Parent must be recalculated one more time (case: parent overhang; parent, point 7; child, point 5)
                if (roof[i].parent != null && roof[i].parent != 'none') {
                    roof[i].parent.init();
                    roof[i].parent.calcBases();
                    roof[i].parent.calcOverhangs();
                }
            }
        }

        for (var i in roof) {
            roof[i].init2();
            roof[i].drawBase();
            roof[i].drawOverhang();
        }

        // This part fixes a bug related to overlapping lines
        selectedRoof.drawBase();
        selectedRoof.drawOverhang();

        function checkSeparateChild() {
            // Remove separate children from child array (L-joints)
            if (selectedRoof.parent != null) for (var i in selectedRoof.parent.child) if (selectedRoof.parent.child[i].jointType == 'separate') delete children[i];
        }

        function  generateJSON() {
            var ultimateJSON = JSON.stringify(roof);
            savedProperties = '"savedRoofProperties":'+ultimateJSON;
            ultimateJSON = '{'+roofTotals+','+savedProperties+'}';
            //console.log(ultimateJSON);
        }

        calcGeneralArea();
        getError();
        generateJSON();

    }
	/*--------------------------- End of redraw function ----------------------------------*/

    var xMouseCanvas = 0;
    var yMouseCanvas = 0;

    $("#canv1").mousemove(function(e){
        var pos = $(this).offset();
        var elem_left = pos.left.toFixed(0);
        var elem_top = pos.top.toFixed(0);
        xMouseCanvas = e.pageX - elem_left;
        yMouseCanvas = e.pageY - elem_top;

    });

    $("#canv1").click(function () {

        var isSelection = false;

        for (var i in roof) {

            var xMax = -99999, xMin = 99999, yMax = -99999, yMin = 99999;

            for (var j in roof[i].x) {

                if (roof[i].x[j] >= xMax) xMax = roof[i].x[j];
                if (roof[i].x[j] > null && roof[i].x[j] <= xMin) xMin = roof[i].x[j];

            }
            for (var j in roof[i].y) {
                if (roof[i].y[j] >= yMax) yMax = roof[i].y[j];
                if (roof[i].y[j] <= yMin) yMin = roof[i].y[j];
            }

            if (isSelection == false) {
                if (xMouseCanvas >= xMin && yMouseCanvas >= yMin && xMouseCanvas <= xMax && yMouseCanvas <= yMax) {

                    selectedRoof = roof[i];
                    isSelection = true;
                    selectedRoofHighlighting();

                }
            }
            else {

                if ((roof[i].xMin >= selectedRoof.xMin && roof[i].xMax <= selectedRoof.xMax && roof[i].yMin >= selectedRoof.yMin && roof[i].yMax <= selectedRoof.yMax) && (xMouseCanvas >= xMin && yMouseCanvas >= yMin && xMouseCanvas <= xMax && yMouseCanvas <= yMax)) {

                    selectedRoof = roof[i];
                    selectedRoofHighlighting();

                }
            }

        }

        // Selected roof highlighting
        function selectedRoofHighlighting() {
            selectedRoof.selected = true;
            for (var s in roof) {
                if (s != i) {
                    roof[s].selected = false;
                    roof[s].drawBase();
                }
            }
            selectedRoof.drawBase();
        }

        for (var s in roof) {
            if (selectedRoof == roof[s]) nameOfRoof = 'Крыша '+s;
        }

        $("#selectedRoof").text(nameOfRoof);

        addGetFunctions();

    });

    /*-------- Math shortened --------*/
    function deg(arg) {
        return arg*Math.PI/180;
    }
    function sqrt(arg) {
        return Math.sqrt(arg);
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

    /*-------- Logs --------*/
    function cons(arg) {
        console.log(arg);
    }
    function log(arg) {
        console.log('start: '+arg);
        console.log('a=', a);
        console.log('b=', b);
        console.log('h=', h);
        console.log('S=', S);
    }
    function logAng(arg) {
        console.log('start: '+arg);
        console.log('angle=', angle);
        console.log('angle_a=', angle_a);
        console.log('angle_b=', angle_b);
    }

});
