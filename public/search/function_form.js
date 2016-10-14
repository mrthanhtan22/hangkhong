/*-----------------Ve noi dia-------------------------------*/
$(document).ready(function() {
				 $('input[value="Oneway"]:radio').change(function() {
                $('#inputNgayVe').hide('slow/400/fast', function() { });
                $('#ngayve').hide('slow/400/fast', function() {   
                });
                $('#icon_quocte').hide('slow/400/fast', function() {  
                });
            });
            $('input[value="Roundtrip"]:radio').change(function() {
                $('#inputNgayVe').show('slow/400/fast', function() {  
                });
                $('#ngayve').show('slow/400/fast', function() { 
                });
                $('#icon_quocte').show('slow/400/fast', function() {  
                });
            });

            $('input[value="Oneway"][id="inputMotChieu_noidia"]:radio').change(function() {
                $('#inputNgayVe_noidia').hide('slow/400/fast', function() { });
                $('#ngayve_noidia').hide('slow/400/fast', function() {   
                });
                $('#icon_noidia').hide('slow/400/fast', function() { 	
                });
		        });
		        $('input[value="Roundtrip"][id="inputKhuHoi_noidia"]:radio').change(function() {
		            $('#inputNgayVe_noidia').show('slow/400/fast', function() {	
		            });
		            $('#ngayve_noidia').show('slow/400/fast', function() {	
		            });
                $('#icon_noidia').show('slow/400/fast', function() {  
                });
		        });
			});
			
			/*datepicker*/
            $(document).ready(function() {
                $('#inputNgayDi').datepicker({
                    format: "dd/mm/yyyy"
                });
                $('#inputNgayVe').datepicker({
                    format: "dd/mm/yyyy"
                });
                 $('#inputNgayDi_noidia').datepicker({
                    format: "dd/mm/yyyy"
                });
                $('#inputNgayVe_noidia').datepicker({
                    format: "dd/mm/yyyy"
                });
            });
            /*end datepicker*/
        
  $( function() {
    var availableTags = [
      "Atlanta Hartsfield (ATL)","Austin (AUS)","Boston, Logan (BOS)","Chicago, IL (CHI)","Dallas/Fort Worth (DFW)","Denver (DEN)","Dulles, Washington (IAD)","Geo Bush, Houston (IAH)","Honolulu (HNL)","Houston (HOU)","Los Angeles (LAX)","Miami (MIA)","Minneapolis/St.Paul (MSP)","Ohare, Chicago (ORD)","Philadelphia (PHL)","Portland (PDX)","San Francisco (SFO)","Seattle, Tacoma (SEA)","St Louis, Lambert (STL)","Washington (WAS)","Bangkok (BKK)","Kuala Lumpur (KUL)","Manila (MNL)","Singapore (SIN)","Yangon (RGN)","Beijing (BJS)","Beijing (PEK)","Busan (PUS)","Chengdu (CTU)","Fukuoka (FUK)","Guangzhou (CAN)","Haneda, Tokyo (HND)","Hong Kong (HKG)","Incheon Int, Seoul (ICN)","Kansai, Osaka (KIX)","Kaohsiung (KHH)","Nagoya (NGO)","Narita, Tokyo (NRT)","Osaka (OSA)","Pudong, ShangHai (PVG)","Seoul (SEL)","Shanghai (SHA)","Taipei (TPE)","Tokyo (TYO)","Luang Prabang (LPQ)","Phnom Penh (PNH)","Siem Riep (REP)","Vientiane (VTE)","Amsterdam (AMS)","Arpt City, London (LCY)","De Gaulle, Paris (CDG)","Domodedovo, Moscow (DME)","Fiumicino, Rome (FCO)","Frankfurt (FRA)","Gatwick, London (LGW)","Heathrow, London (LHR)","London (LON)","Moscow (MOW)","Orly, Paris (ORY)","Paris (PAR)","Praque (PRG)","Rome (ROM)","Melbourne (MEL)","Sydney (SYD)","Ca Mau (CAH)","Can Tho (VCA)","Con Dao (VCS)","Ho Chi Minh City (SGN)","Phu Quoc (PQC)","Rach Gia (VKG)","Dien Bien (DIN)","Ha Noi (HAN)","Hai Phong (HPH)","Ban Me Thuot (BMV)","Da Lat (DLI)","Da Nang (DAD)","Dong Hoi (VDH)","Hue (HUI)","Nha Trang (NHA)","Pleiku (PXU)","Quy Nhon (UIH)","Tam Ky (VCL)","Tam Ky, Viet Nam (TMK)","Tuy Hoa (TBB)","Vinh (VII)"
    ];
    $( "#inputNoiDi" ).autocomplete({
      source: availableTags
    });
    $( "#inputNoiDen" ).autocomplete({
      source: availableTags
    });

  } );
  
  	function check_submit()
    { 
      /*Noidi*/
       var _noidi = $('#inputNoiDi').val();
       var n = _noidi.substr(-4,3);
       $('#inputNoiDi').val(n);
       /*Noi den*/
       var _noiden = $('#inputNoiDen').val();
       var n = _noiden.substr(-4,3);
       $('#inputNoiDen').val(n);

       /*ngay di*/
       var _ngaydi = $('#inputNgayDi').val();
       var n = _ngaydi.replace("/","");
       var n1 = n.replace("/","");
       $('#inputNgayDi').val(n1);

       /*ngayve*/
       var _ngayve = $('#inputNgayVe').val();
       var n = _ngayve.replace("/","");
       var n1 = n.replace("/","");
       $('#inputNgayVe').val(n1);

       /*Noidi noi dia*/
       var _noidi = $('#inputNoiDi_noidia').val();
       var n = _noidi.substr(-4,3);
       $('#inputNoiDi_noidia').val(n);
       /*Noi den noi dia*/
       var _noiden = $('#inputNoiDen_noidia').val();
       var n = _noiden.substr(-4,3);
       $('#inputNoiDen_noidia').val(n);

       /*ngay di noi dia*/
       var _ngaydi = $('#inputNgayDi_noidia').val();
       var n = _ngaydi.replace("/","");
       var n1 = n.replace("/","");
       $('#inputNgayDi_noidia').val(n1);

       /*ngay ve noi dia*/
       var _ngayve = $('#inputNgayVe_noidia').val();
       var n = _ngayve.replace("/","");
       var n1 = n.replace("/","");
       $('#inputNgayVe_noidia').val(n1);
    }
/*-----------------end ve noi dia--------------------------------*/

$(function() {

    $('#venoidia_link').click(function(e) {
      $("#form_venoidia").delay(400).fadeIn(400);
        $("#form_vequocte").fadeOut(400);
      $('#vequocte_link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $('#vequocte_link').click(function(e) {
      $("#form_vequocte").delay(400).fadeIn(400);
        $("#form_venoidia").fadeOut(400);
      $('#venoidia_link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });

    });
    /*lay modal diem di va de noi dia */
      $("#modal_noidi a[href='javascript:;']").one('click', function() {
        var value = $(this).text();
        $('#inputNoiDi_noidia').val(value);
         $('#modal_noidi').modal('toggle');
         
        
      });
      $("#modal_noiden a[href='javascript:;']").one('click', function() {
        var value = $(this).text();
         $('#inputNoiDen_noidia').val(value);
          $('#modal_noiden').modal('toggle');
      });   
      /*lay modal diem di va de noi dia */
      $(function() {

    $('#venoidia_link').click(function(e) {
      $("#form_venoidia").delay(400).fadeIn(400);
        $("#form_vequocte").fadeOut(400);
      $('#vequocte_link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $('#vequocte_link').click(function(e) {
      $("#form_vequocte").delay(400).fadeIn(400);
        $("#form_venoidia").fadeOut(400);
      $('#venoidia_link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });

    });