document.addEventListener("DOMContentLoaded", function(event) {

var square = document.getElementsByClassName("square");
var width = square.clientWidth;

$(".square").each(function() {
	var that = $(this);
	wid = that.outerWidth();
	height = that.outerHeight();
	console.log(height);
	$(that).height(wid + 'px');
	console.log(wid);
	 });
});
window.addEventListener("load", function() {
	/*////////////////////// TABLE IMAGE ARRAY //////////////////////*/
	var tableImage = [
		"../img/tables/mk0001-matakata-teepee-standard-table.jpg",
		"../img/tables/mk0002-matakata-teepee-plain-trestle-table.jpg",
		"../img/tables/mk0003-matakata-teepee-rustic-trestle-table.jpg",
		"../img/tables/mk0004-matakata-teepee-dark-trestle-table.jpg",
		"../img/tables/mk0005-matakata-teepee-vintage-buffet-trestle-table.jpg",
		"../img/tables/mk0006-matakata-teepee-folding-table.jpg"
	];
	/*////////////////////// TABLE CATALOGUE NUMBER ARRAY //////////////////////*/
	var tableNumber = [
		"MK0001",
		"MK0002",
		"MK0003",
		"MK0004",
		"MK0005",
		"MK0006"
	];
	/*////////////////////// TABLE DESCRIPTION ARRAY //////////////////////*/
	var tableItem = [
		"Standard pine table",
		"Trestle table - plain timber",
		"Trestle table - rustic",
		"Trestle table - dark stained",
		"Trestle table - vintage buffet",
		"Folding table - timber"
	];
	/*////////////////////// TABLE ADDITIONAL INFO ARRAY //////////////////////*/
	var tableAdd = [
		"Seats 6-8. 2000 x 700",
		"Seats 6-8. 1800 x 750",
		"Seats 6-8. 1840 x 840",
		"Seats 6-8. 2050 x 730",
		"3660 x 700",
		"Seats 6-8. 1800 x 900"
	];
	/*////////////////////// TABLE PRICE //////////////////////*/
	var tablePrice = [
		"$45.00",
		"$60.00",
		"$70.00",
		"$80.00",
		"$119.00",
		"$25.00"
	];

	/*////////////////////// TABLE SOURCE //////////////////////*/
	var tableSource = [
		"",
		"",
		"",
		"",
		"",
		""
	];

	/*////////////////////// SEATING IMAGE ARRAY //////////////////////*/
	var seatImage = [
		"../img/seating/mk0007-matakata-teepee-standard-tables-bench.jpg",
		"../img/seating/mk0008-matakata-teepee-folding-bench.jpg",
		"../img/seating/mk0009-matakata-teepee-rustic-bench.jpg",
		"../img/seating/mk0010-matakata-teepee-tiffany-chair-white.jpg",
		"../img/seating/mk0011-matakata-teepee-tiffany-chair-mahogany.jpg",
		"../img/seating/mk0012-matakata-teepee-folding-chair-white.jpg",
		"../img/seating/mk0013-matakata-teepee-folding-chair-black.jpg",
		"../img/seating/mk0014-matakata-teepee-folding-chair-wood.jpg",
		"../img/seating/mk0015-matakata-teepee-folding-chair-bamboo.jpg",
		"../img/seating/mk0016-matakata-teepee-bentwood-chair.jpg",
		"../img/seating/mk0017-matakata-teepee-sofa-bamboo.jpg",
		"../img/seating/mk0018-matakata-teepee-sofa-cane.jpg",
		"../img/seating/mk0019-matakata-teepee-chair-cane-set.jpg",
		"../img/seating/mk0020-matakata-teepee-chair-pine-peacock.jpg",
		"../img/seating/mk0021-matakata-teepee-chair-cane.jpg",
		"../img/seating/mk0022-matakata-teepee-chair-bamboo-lounger.jpg",
		"../img/seating/mk0023-matakata-teepee-bench-bamboo.jpg",
		"../img/seating/mk0024-matakata-teepee-sofa-rattan-three-seater.jpg",
		"../img/seating/mk0025-matakata-teepee-sofa-rattan-two-seater.jpg",
		"../img/seating/mk0026-matakata-teepee-chair-cane.jpg",
		"../img/seating/mk0027-matakata-teepee-chesterfield-three-seater.jpg",
		"../img/seating/mk0028-matakata-teepee-chesterfield-two-seater.jpg",
		"../img/seating/mk0029-matakata-teepee-chesterfield-armchair.jpg"
	];
	/*////////////////////// SEATING CATALOGUE NUMBER ARRAY //////////////////////*/
	var seatNumber = [
		"MK0007",
		"MK0008",
		"MK0009",
		"MK0010",
		"MK0011",
		"MK0012",
		"MK0013",
		"MK0014",
		"MK0015",
		"MK0016",
		"MK0017",
		"MK0018",
		"MK0019",
		"MK0020",
		"MK0021",
		"MK0022",
		"MK0023",
		"MK0024",
		"MK0025",
		"MK0026",
		"MK0027",
		"MK0028",
		"MK0029"
	];
	/*////////////////////// SEATING DESCRIPTION ARRAY //////////////////////*/
	var seatItem = [
		"Standard pine bench",
		"Wooden bench - folding",
		"Wooden bench - rustic",
		"Tiffany chair - white",
		"Tiffany chair - mahogany",
		"Folding chair - white",
		"Folding chair - black",
		"Folding chair - wooden",
		"Folding chair - bamboo",
		"Bentwood chair",
		"Pine Sofa - 3 Seater",
		"Pine Sofa - 2 seater",
		"Pine Chair Set",
		"Pine Peacock Chair",
		"Cane Chair",
		"Bamboo Lounger",
		"Pine Bench",
		"Rattan Sofa - 3 Seater",
		"Rattan Sofa - 2 Seater",
		"Rattan Chair",
		"Chesterfield Sofa - 3 seater",
		"Chesterfield Sofa - 2 seater",
		"Leather Armchair"

	];
	/*////////////////////// SEATING ADDITIONAL INFO ARRAY //////////////////////*/
	var seatAdd = [
		"Seats 3-4. 2000 x 250",
		"Seats 3-4. 1800 x 300",
		"Seats 3-4. 2000 x 310",
		"With padded seat",
		"With padded seat",
		"With padded seat",
		"With padded seat",
		"With padded seat",
		"...",
		"Dark stained",
		"Seats 2-3. 1750 x 760",
		"Seats 2",
		"2x Single seat",
		"Single seat",
		"Single seat",
		"Single seat",
		"...",
		"Seats 3",
		"Seats 2",
		"Single seat",
		"Luxury vintage leather Chesterfield sofa",
		"Luxury vintage leather Chesterfield sofa",
		"Luxury vintage leather armchair – single-seat"
	];

	/*////////////////////// SEATING PRICE //////////////////////*/
	var seatPrice = [
		"$30.00",
		"$28.00",
		"$50.00",
		"$10.00",
		"$13.00",
		"$10.00",
		"$10.00",
		"$15.00",
		"$17.00",
		"$15.00",
		"$270.00",
		"$250.00",
		"$150.00",
		"$120.00",
		"$40.00",
		"$40.00",
		"$40.00",
		"$270.00",
		"$250.00",
		"$50.00",
		"$440.00",
		"$400.00",
		"$350.00"
	];
	/*////////////////////// SEATING SOURCE //////////////////////*/
	var seatSource = [
		"",
		"",
		"../img/timbermill.png",
		"",
		"",
		"",
		"",
		"",
		"../img/george-and-smee_br.png",
		"",
		"../img/george-and-smee_br.png",
		"../img/george-and-smee_br.png",
		"../img/george-and-smee_br.png",
		"../img/george-and-smee_br.png",
		"",
		"../img/george-and-smee_br.png",
		"../img/george-and-smee_br.png",
		"../img/george-and-smee_br.png",
		"",
		"",
		"",
		"",
		""
	];
	/*////////////////////// FURNISHINGS IMAGE ARRAY //////////////////////*/
	var furnImage = [
		"../img/furnishings/mk0030-matakata-teepee-firepit.jpg",
		"../img/furnishings/mk0031-matakata-teepee-dancefloor-parquetry.jpg",
		"../img/furnishings/mk0032-matakata-teepee-wine-barrel-vintage.jpg",
		"../img/furnishings/mk0033-matakata-teepee-coffee-table-vintage.jpg",
		"../img/furnishings/mk0034-matakata-teepee-coffee-table.jpg",
		"../img/furnishings/mk0035-matakata-teepee-low-table-moroccan.jpg",
		"../img/furnishings/mk0036-matakata-teepee-pallet-table.jpg",
		"../img/furnishings/mk0037-matakata-teepee-coffee-table-wicker.jpg",
		"../img/furnishings/mk0038-matakata-teepee-pouffe-black-leather.jpg",
		"../img/furnishings/mk0039-matakata-teepee-ottoman-wicker.jpg",
		"../img/furnishings/mk0040-matakata-teepee-pouffe-coloured.jpeg",
		"../img/furnishings/mk0041-matakata-teepee-ottoman-fabric.jpg",
		"../img/furnishings/mk0042-matakata-teepee-persian-rug-medium.jpg",
		"../img/furnishings/mk0043-matakata-teepee-persian-rug-large.jpg",
		"../img/furnishings/mk0044-matakata-teepee-vintage-runner-medium.jpg",
		"../img/furnishings/mk0045-matakata-teepee-persian-runner-large.jpg",
		"../img/furnishings/mk0046-matakata-teepee-bean-bag-black.jpg",
		"../img/furnishings/mk0047-matakata-teepee-bean-bag-morrocan.jpg",
		"../img/furnishings/mk0048-matakata-teepee-cushion-arabian.jpg",
		"../img/furnishings/mk0049-matakata-teepee-cushion-moroccan.jpg",
		"../img/furnishings/mk0050-matakata-teepee-cushion-assorted.jpg"
	];
	/*////////////////////// FURISHINGS CATALOGUE NUMBER ARRAY //////////////////////*/
	var furnNumber = [
		"MK0030",
		"MK0031",
		"MK0032",
		"MK0033",
		"MK0034",
		"MK0035",
		"MK0036",
		"MK0037",
		"MK0038",
		"MK0039",
		"MK0040",
		"MK0041",
		"MK0042",
		"MK0043",
		"MK0044",
		"MK0045",
		"MK0046",
		"MK0047",
		"MK0048",
		"MK0049",
		"MK0050"
	];
	/*////////////////////// FURNISHINGS DESCRIPTION ARRAY //////////////////////*/
	var furnItem = [
		"Firepit",
		"Dancefloor",
		"Wine Barrel",
		"Vintage coffee table - large",
		"Vintage coffee table - standard",
		"Low Moroccan-style table",
		"Low pallet-style custom table",
		"Wicker coffee table",
		"Moroccan black leather pouffe",
		"Wicker ottoman",
		"Leather ottoman",
		"Fabric ottoman",
		"Persian rug - medium",
		"Persian rug - large",
		"Persian runner - medium",
		"Persian runner - large",
		"Beanbag - black faux leather",
		"Beanbag - Morrocan",
		"Cushions - Arabian",
		"Cushions - Morrocan",
		"Cushions - assorted fabric"

	];
	/*////////////////////// FURNISHINGS ADDITIONAL INFO ARRAY //////////////////////*/
	var furnAdd = [
		"Smokeless firepit, inside or outside the tipi",
		"Wooden parquetry. 4m x 4m (other sizes available)",
		"Vintage wine barrels as table/decoration",
		"Natural worn wood with heavy metal bolts",
		"Classic look coffee table with white legs",
		"...",
		"...",
		"Stunning round rattan coffee table",
		"Leather Moroccan-style pouffe",
		"Beautiful cane & rope ottoman",
		"Boho leather ottoman",
		"Rope cream coloured ottoman",
		"Vintage Persian rug - 1600mm x 1200mm",
		"Vintage Persian rug – 3400mm x 2400mm",
		"Vintage Persian runner of reds, creams and greens. 2610 x 950",
		"Vintage persian runner, with red and green hues in a beautiful floral pattern. 2930 x 815",
		"Black faux-leather beanbag suitable for inside or outside",
		"Morrocan-style fabric beanbag for inside the tipi",
		"10x assorted Arabian cushions",
		"10x assorted Morrocan cushions",
		"10x assorted fabric cushions"
	];
	/*////////////////////// FURNISHINGS PRICE //////////////////////*/
	var furnPrice = [
		"$500.00",
		"$500.00",
		"$100.00",
		"$100.00",
		"$85.00",
		"$100.00",
		"$100.00",
		"$85.00",
		"$50.00",
		"$30.00",
		"$30.00",
		"$30.00",
		"$100.00",
		"$170.00",
		"$80.00",
		"$100.00",
		"$40.00",
		"$60.00",
		"$100.00",
		"$100.00",
		"$100.00"
	];
	/*////////////////////// FURNISHINGS SOURCE //////////////////////*/
	var furnSource = [
		"",
		"",
		"",
		"../img/george-and-smee_br.png",
		"../img/george-and-smee_br.png",
		"",
		"",
		"../img/george-and-smee_br.png",
		"",
		"../img/george-and-smee_br.png",
		"../img/george-and-smee_br.png",
		"../img/george-and-smee_br.png",
		"",
		"",
		"../img/george-and-smee_br.png",
		"../img/george-and-smee_br.png",
		"",
		"",
		"",
		"",
		""
	];

	/*////////////////////// LIGHTING IMAGE ARRAY //////////////////////*/
	var lightImage = [
		"../img/lighting/mk0051-matakata-teepee-lighting-package.jpg",
		"../img/lighting/mk0052-matakata-teepee-fairy-lights.jpg",
		"../img/lighting/mk0053-matakata-teepee-uplight.jpg",
		"../img/lighting/mk0054-matakata-teepee-festoons.jpg",
		"../img/lighting/mk0055-matakata-teepee-rotating-dancefloor-lighting.jpg",
		"../img/lighting/mk0056-matakata-teepee-disco-ball.jpg",
		"../img/lighting/mk0057-matakata-teepee-lettered-lighting.jpg",
		"../img/lighting/mk0058-matakata-teepee-lantern.jpg",
		"../img/lighting/mk0058-matakata-teepee-lantern.jpg",
		"../img/lighting/mk0058-matakata-teepee-lantern.jpg",
		"../img/lighting/mk0061-matakata-teepee-paper-lantern.jpg",
		"../img/lighting/mk0062-matakata-teepee-tiki-torch.jpg",
		"../img/lighting/mk0063-matakata-teepee-table-lantern-white.jpg",
		"../img/lighting/mk0064-matakata-teepee-table-lantern-black.jpg",
		"../img/lighting/mk0065-matakata-teepee-led-candles.jpg"
	];
	/*////////////////////// LIGHTING CATALOGUE NUMBER ARRAY //////////////////////*/
	var lightNumber = [
		"MK0051",
		"MK0052",
		"MK0053",
		"MK0054",
		"MK0055",
		"MK0056",
		"MK0057",
		"MK0058",
		"MK0059",
		"MK0060",
		"MK0061",
		"MK0062",
		"MK0063",
		"MK0064",
		"MK0065"
	];
	/*////////////////////// LIGHTING DESCRIPTION ARRAY //////////////////////*/
	var lightItem = [
		"Lighting Package",
		"Fairy Lights",
		"Uplight",
		"Festoon Lights",
		"Dancefloor Lighting",
		"Disco Ball",
		"Lettered Lighting",
		"Lantern - Small",
		"Lantern - Medium",
		"Lantern - Large",
		"Paper Lanterns",
		"Tiki Torches",
		"Table Lantern - White",
		"Table Lantern - Black",
		"LED Candles"

	];
	/*////////////////////// LIGHTING ADDITIONAL INFO ARRAY //////////////////////*/
	var lightAdd = [
		"100m Internal fairy lights + 3x uplights",
		"Around each internal pole – 9x 11m",
		"LED battery-powered uplights - multi colour",
		"20m festoon lighting (internal or external)",
		"Rotating, multi-coloured dancefloor lighting",
		"Large mirror ball with 2x pin spot",
		"Various available on request",
		"Small black metal Morrocan style lantern",
		"Medium black metal Morrocan style lantern",
		"Large black metal Morrocan style lantern",
		"10x Paper Lanterns (various sizes available)",
		"5x 2m Tiki Torch (external)",
		"Small white table lantern with tealight candle",
		"Small black table lantern with tealight candle",
		"Set of 10 LED candles"
	];
	/*////////////////////// LIGHTING PRICE //////////////////////*/
	var lightPrice = [
		"$300.00",
		"$200.00",
		"$60.00",
		"$150.00",
		"$200.00",
		"$200.00",
		"$On Request",
		"$10.00",
		"$15.00",
		"$30.00",
		"$50.00",
		"$100.00",
		"$10.00",
		"$10.00",
		"$10.00"
	];
	/*////////////////////// LIGHTING SOURCE //////////////////////*/
	var lightSource = [
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	];

	/*////////////////////// BARS & STOOLS IMAGE ARRAY //////////////////////*/
	var barImage = [
		"../img/bars-and-stools/mk0066-matakata-teepee-bar-grasshopper.jpg",
		"../img/bars-and-stools/mk0067-matakata-teepee-bar-country-kitchen.jpg",
		"../img/bars-and-stools/mk0068-matakata-teepee-bar-chinotto.jpg",
		"../img/bars-and-stools/mk0069-matakata-teepee-bar-bellini.jpg",
		"../img/bars-and-stools/mk0070-matakata-teepee-bar-lemoncello.jpg",
		"../img/bars-and-stools/mk0071-matakata-teepee-bar-aperol-black.jpg",
		"../img/bars-and-stools/mk0072-matakata-teepee-bar-aperol.jpg",
		"../img/bars-and-stools/mk0073-matakata-teepee-bar-baileys.jpg",
		"../img/bars-and-stools/mk0074-matakata-teepee-bar-margharita.jpg",
		"../img/bars-and-stools/mk0075-matakata-teepee-bar-affogato.jpg",
		"../img/bars-and-stools/mk0076-matakata-teepee-barrel-bar.jpg",
		"../img/bars-and-stools/mk0077-matakata-teepee-cocktail-table-wooden.jpg",
		"../img/bars-and-stools/mk0078-matakata-teepee-cocktail-table-black.jpg",
		"../img/bars-and-stools/mk0079-matakata-teepee-cocktail-table-metal.jpg",
		"../img/bars-and-stools/mk0080-matakata-teepee-bar-table.jpg",
		"../img/bars-and-stools/mk0081-matakata-teepee-bar-table-large.jpg",
		"../img/bars-and-stools/mk0082-matakata-teepee-bar-stool-recycled.jpg",
		"../img/bars-and-stools/mk0083-matakata-teepee-bar-stool-blonde.jpg",
		"../img/bars-and-stools/mk0084-matakata-teepee-bar-stool-recycled-small.jpg",
		"../img/bars-and-stools/mk0085-matakata-teepee-bar-stool-blonde-small.jpg",
		"../img/bars-and-stools/mk0086-matakata-teepee-bar-stool-lux-gold.jpg",
		"../img/bars-and-stools/mk0087-matakata-teepee-bar-stool-bentwood.jpg"
	];
	/*////////////////////// BARS & STOOLS CATALOGUE NUMBER ARRAY //////////////////////*/
	var barNumber = [
		"MK0066",
		"MK0067",
		"MK0068",
		"MK0069",
		"MK0070",
		"MK0071",
		"MK0072",
		"MK0073",
		"MK0074",
		"MK0075",
		"MK0076",
		"MK0077",
		"MK0078",
		"MK0079",
		"MK0080",
		"MK0081",
		"MK0082",
		"MK0083",
		"MK0084",
		"MK0085",
		"MK0086",
		"MK0087"
	];
	/*////////////////////// BARS & STOOLS DESCRIPTION ARRAY //////////////////////*/
	var barItem = [
		"Bar - Grasshoper",
		"Bar - Country Kitchen",
		"Bar - Chinotto",
		"Bar - Bellini",
		"Bar - Lemoncello",
		"Bar - Aperol Black",
		"Bar - Aperol White",
		"Bar - Baileys",
		"Bar - Margharita",
		"Bar - Affogato",
		"Wine Barrel Bar",
		"Cocktail Table - Wooden",
		"Cocktail Table - Black",
		"Cocktail Table - Metallic",
		"Bar Table",
		"High Bar Table",
		"Recycled bar stool",
		"Blonde bar stool",
		"Recycled bar stool - small",
		"Blonde bar stool - small",
		"Lux bar stool - gold",
		"Bentwood bar stool"

	];
	/*////////////////////// BARS & STOOLS ADDITIONAL INFO ARRAY //////////////////////*/
	var barAdd = [
		"Recycled timber clad front all topped off with a beautiful custom zinc bar top.",
		"Recycled hardwood frame, corrugated iron front and in built sink.",
		"Angled blackbutt panelling, with white bar top.",
		"Recycled hardwood frame, and corrugated iron front.",
		"Recycled timber clad front with grey painted timber top all topped off with a corrugated iron roof.",
		"Solid black panel (add your own company branding and decal the front area with a sign), and spotted gum frame and bar top.",
		"Solid white panel (add your own company branding and decal the front area with a sign), and spotted gum frame and bar top.",
		"Rustic white recycled timber clad front, and solid white painted top.",
		"Spotted gum timber clad with white painted top and roof",
		"Spotted gum clad front with a stainless steel inset counter, tiled splashback and raised service area",
		"Two wine barrels, with solid timber top.",
		"Angled wooden cocktail table, circular top",
		"Metallic cocktail table, black circular top",
		"Metallic cocktail table, metallic circular top",
		"Recycled hardwood top and powdercoated grey base",
		"Rectangular bar table. Seats 2-4.",
		"750 x 310",
		"750 x 310",
		"450 x 310",
		"450 x 270",
		"...",
		"..."
	];
	/*////////////////////// BARS & STOOLS PRICE //////////////////////*/
	var barPrice = [
		"$400.00",
		"$400.00",
		"$400.00",
		"$400.00",
		"$400.00",
		"$400.00",
		"$400.00",
		"$400.00",
		"$400.00",
		"$400.00",
		"$300.00",
		"$95.00",
		"$80.00",
		"$80.00",
		"$75.00",
		"$100.00",
		"$30.00",
		"$30.00",
		"$20.00",
		"$20.00",
		"$40.00",
		"$40.00"
	];
	/*////////////////////// BARS & STOOLS SOURCE //////////////////////*/
	var barSource = [
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"",
		"../img/george-and-smee_br.png",
		"",
		"",
		"../img/timbermill.png",
		"",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"../img/timbermill.png",
		"",
		""
	];

	/*////////////////////// PROPS & SIGNAGE IMAGE ARRAY //////////////////////*/
	var propImage = [
		"../img/props-and-signage/mk0088-matakata-teepee-bunting.jpg",
		"../img/props-and-signage/mk0089-matakata-teepee-shepherd-hook-large.jpg",
		"../img/props-and-signage/mk0090-matakata-teepee-shepherd-hook-small.jpg",
		"../img/props-and-signage/mk0091-matakata-teepee-parasol-large.jpg",
		"../img/props-and-signage/mk0092-matakata-teepee-parasol-small.jpg",
		"../img/props-and-signage/mk0093-matakata-teepee-easel-blacboard-package.jpg",
		"../img/props-and-signage/mk0094-matakata-teepee-easel.jpg",
		"../img/props-and-signage/mk0095-matakata-teepee-blackboard.jpg",
		"../img/props-and-signage/mk0096-matakata-teepee-timber-arbor.jpg",
		"../img/props-and-signage/mk0097-matakata-teepee-foilage.jpg",
		"../img/props-and-signage/mk0098-matakata-teepee-centrepiece.jpg"
	];
	/*////////////////////// PROPS & SIGNAGE CATALOGUE NUMBER ARRAY //////////////////////*/
	var propNumber = [
		"MK0088",
		"MK0089",
		"MK0090",
		"MK0091",
		"MK0092",
		"MK0093",
		"MK0094",
		"MK0095",
		"MK0096",
		"MK0097",
		"MK0098"
	];
	/*////////////////////// PROPS & SIGNAGE DESCRIPTION ARRAY //////////////////////*/
	var propItem = [
		"Bunting",
		"Shepherds Hooks - Large",
		"Shepherds Hooks - Small",
		"Parasols - Large",
		"Parasols - Small",
		"Easel & Blackboard package",
		"Easel",
		"Blackboard",
		"Timber Arbor",
		"Tipi Foilage",
		"Circular Tipi Centrepiece"
	];
	/*////////////////////// PROPS & SIGNAGE ADDITIONAL INFO ARRAY //////////////////////*/
	var propAdd = [
		"20m Bunting, various designs/colours/patterns",
		"4x 2.5m black shepherds hooks",
		"4x 1m black shepherds hooks",
		"3m x 3m",
		"Various available on request",
		"Easle and large blackboard",
		"2m Easle",
		"Various available on request",
		"Various available on request",
		"20m faux green foliage - to wrap around tipi frame",
		"2m diameter circular centrepiece to hang from tipi roof (does not include florals)"
	];
	/*////////////////////// PROPS & SIGNAGE PRICE //////////////////////*/
	var propPrice = [
		"$50.00",
		"$80.00",
		"$40.00",
		"$200.00",
		"$On Request",
		"$80.00",
		"$50.00",
		"$On Request",
		"$On Request",
		"$100.00",
		"$300.00"
	];
	/*////////////////////// PROPS & SIGNAGE SOURCE //////////////////////*/
	var propSource = [
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	];

	/*//////////////////// TILE INPUT ////////////////////*/
	var type;

	 $("#modal_tab").click(function(){
		 type = 1;
		 openModal();
	 });
	 $("#modal_sea").click(function(){
		 type = 2;
		 openModal();
	 });
	 $("#modal_furn").click(function(){
		 type = 3;
		 openModal();
	 });
	 $("#modal_light").click(function(){
		 type = 4;
		 openModal();
	 });
	 $("#modal_bar").click(function(){
		 type = 5;
		 openModal();
	 });
	 $("#modal_prop").click(function(){
		 type = 6;
		 openModal();
	 });
	 $("#close").click(function(){
		closeModal();
		console.log("closed");
	 });


	 /*////////// Open Modal //////////*/
	function openModal() {
	  $('#fixed_modal').addClass('modal_active');
	  $('#fixed_modal').removeClass('modal');
	  currentSlide(1);
	}

	/*////////// Close Modal //////////*/
	function closeModal() {
	  $('#fixed_modal').addClass('modal');
	  $('#fixed_modal').removeClass('modal_active');
	}
	var slideIndex = 1;
	showSlides(slideIndex);

	/*//////////////////// CONTROLS ////////////////////*/
	 $("#next").click(function(){
		 plusSlides(1);
	 });
	 $("#prev").click(function(){
		plusSlides(-1);
	 });
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}
	function currentSlide(n) {
	showSlides(slideIndex = n);
	}

	function showSlides(n) {
		if(type === 1){
			if (n > tableImage.length) {slideIndex = 1}
			if (n < 1) {slideIndex = tableImage.length}
			$("#current_slide").attr("src",tableImage[slideIndex-1]);
			$("#numbertext").html(tableNumber[slideIndex-1]);
			$("#item_head").html(tableItem[slideIndex-1]);
			$("#item_ad").html(tableAdd[slideIndex-1]);
			$("#item_price").html(tablePrice[slideIndex-1]);
			$("#source_img").attr("src",tableSource[slideIndex-1]);
		}
		if(type === 2){
			if (n > seatImage.length) {slideIndex = 1}
			if (n < 1) {slideIndex = seatImage.length}
			$("#current_slide").attr("src",seatImage[slideIndex-1]);
			$("#numbertext").html(seatNumber[slideIndex-1]);
			$("#item_head").html(seatItem[slideIndex-1]);
			$("#item_ad").html(seatAdd[slideIndex-1]);
			$("#item_price").html(seatPrice[slideIndex-1]);
			$("#source_img").attr("src",seatSource[slideIndex-1]);
		}
		if(type === 3){
			if (n > furnImage.length) {slideIndex = 1}
			if (n < 1) {slideIndex = furnImage.length}
			$("#current_slide").attr("src",furnImage[slideIndex-1]);
			$("#numbertext").html(furnNumber[slideIndex-1]);
			$("#item_head").html(furnItem[slideIndex-1]);
			$("#item_ad").html(furnAdd[slideIndex-1]);
			$("#item_price").html(furnPrice[slideIndex-1]);
			$("#source_img").attr("src",furnSource[slideIndex-1]);
		}
		if(type === 4){
			if (n > lightImage.length) {slideIndex = 1}
			if (n < 1) {slideIndex = lightImage.length}
			$("#current_slide").attr("src",lightImage[slideIndex-1]);
			$("#numbertext").html(lightNumber[slideIndex-1]);
			$("#item_head").html(lightItem[slideIndex-1]);
			$("#item_ad").html(lightAdd[slideIndex-1]);
			$("#item_price").html(lightPrice[slideIndex-1]);
			$("#source_img").attr("src",lightSource[slideIndex-1]);
		}
		if(type === 5){
			if (n > barImage.length) {slideIndex = 1}
			if (n < 1) {slideIndex = barImage.length}
			$("#current_slide").attr("src",barImage[slideIndex-1]);
			$("#numbertext").html(barNumber[slideIndex-1]);
			$("#item_head").html(barItem[slideIndex-1]);
			$("#item_ad").html(barAdd[slideIndex-1]);;
			$("#item_price").html(barPrice[slideIndex-1]);
			$("#source_img").attr("src",barSource[slideIndex-1]);
		}
		if(type === 6){
			if (n > propImage.length) {slideIndex = 1}
			if (n < 1) {slideIndex = propImage.length}
			$("#current_slide").attr("src",propImage[slideIndex-1]);
			$("#numbertext").html(propNumber[slideIndex-1]);
			$("#item_head").html(propItem[slideIndex-1]);
			$("#item_ad").html(propAdd[slideIndex-1]);
			$("#item_price").html(propPrice[slideIndex-1]);
			$("#source_img").attr("src",propSource[slideIndex-1]);
		}
		if ($("#item_ad").text() == "..."){
				$("#item_ad").css('visibility', 'hidden');
			}else{
				$("#item_ad").css('visibility', 'visible');
			}
			if ($("#source_img").attr("src") == ""){
					$("#source_cont").css('display', 'none');
				}else{
					$("#source_cont").css('display', 'flex');
				}
	}
});
	$(window).on('resize', function(){
	$(".square").each(function () {
    var that = $(this);
    wid = that.outerWidth();
	height = that.outerHeight();
	console.log(height);
	$(that).height(wid + 'px');
	console.log(wid);
     });
	 });
