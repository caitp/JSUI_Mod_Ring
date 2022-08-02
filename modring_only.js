autowatch = 1;
outlets = 1;

mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;


var m = mgraphics;

var line_thickness = 0.15;
declareattribute("line_thickness", null, null, 1);
var ring_color = [1, 1, 1, 1];
declareattribute("ring_color", null, null, 1);
var ring_location = 0.73;
declareattribute("ring_location", null, null, 1);
var point_color = [1,1,1,1];
declareattribute("point_color", null, null, 1);
var background_color = [0., 0., 0., 0.5];
declareattribute("background_color", null, null, 1);
var line_cap = "square";
var line_caps = ["butt", "round", "square"];
declareattribute("line_cap", null, "setlinecap", 1);

function setlinecap(x) {
	if (x === void 0) return;
	var old_value = line_cap;
	var i = parseFloat(x);
	if (i === i) {
		i = i | 0;
		if (i >= 0 && i < line_caps.length)
			line_cap = line_caps[i];
	} else {
		x = x.toLowerCase();
		if (line_caps.indexOf(x) >= 0)
			line_cap = x;
	}
	if (line_cap !== old_value)
		refresh();
}

var Right = 4.713323;
var Left = 4.713323;
var Mid = 4.713323;
var eks = 4.713323;
var lft = 4.713323;
var rgt = 4.713323;
var circle_size = 0.7;

function bang() {
	mgraphics.redraw();
}

function depth(x) {
	eks = x;
	Right = Mid + eks * 2.269862;
	Left = Mid - eks * 2.269862;
	
	if (Right > 6.983185) {
		Right = 6.983185;
	}
	if (Left < 2.443461) {
		Left = 2.443461;
	}
	
	
	m.redraw();
	refresh();
}
	
function offset(x) {
	Mid = x * 4.539724 + 2.443461;
	Right = Mid + eks * 2.269862;
	Left = Mid - eks * 2.269862;
	
	if (Right > 6.983185) {
		Right = 6.983185;
	}
	if (Left < 2.443461) {
		Left = 2.443461;
	}
	
		
	lft = Mid - 0.19685;
	rgt = Mid + 0.19685;
		
	m.redraw();
	refresh();
}
	
function paint() {
	if (background_color[3]) {
		var width = box.rect[2] - box.rect[0];
		var height = box.rect[3] - box.rect[1];
		var aspect = width / height;
		m.set_source_rgba(background_color[0], background_color[1], background_color[2], background_color[3]);
		m.rectangle(-aspect, 1, 2*aspect, 2);
		m.fill();
	}
	m.arc(0., 0., ring_location, Left, Right);
	m.set_source_rgba(ring_color[0], ring_color[1], ring_color[2], ring_color[3]);
	m.set_line_cap(line_cap);
	m.set_line_width(line_thickness);
	m.stroke();
}
depth(0.);
