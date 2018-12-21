//Collecting data with php/server 

//var experimentName = "min-jp-exp";
//var submitAddress = "https://web.stanford.edu/~sunwooj/cgi-bin/process.php";



var stimuliList = shuffle([ 

["책", "권이", "book", "gwon", [["book-01", "한", "일"], ["book-06", "여섯", "육"]]], 

["책", "권이", "book", "gwon", [["book-23", "스물 세", "이십 삼"], ["book-20", "스무", "이십"]]],

["책", "권이", "book", "gwon", [["book-40", "마흔", "사십"], ["book-48", "마흔 여덟", "사십 팔"]]],


["고양이", "마리가", "cat", "mari", [["cat-06", "여섯", "육"], ["cat-01", "한", "일"]]],

["고양이", "마리가", "cat", "mari", [["cat-20", "스무", "이십"], ["cat-23", "스물 세", "이십 삼"]]],

["고양이", "마리가", "cat", "mari", [["cat-48", "마흔 여덟", "사십 팔"], ["cat-40", "마흔", "사십"]]],


["물", "리터가", "water", "liter", [["water-01", "한", "일"], ["water-06", "여섯", "육"]]], 

["물", "리터가", "water", "liter", [["water-23", "스물 세", "이십 삼"], ["water-20", "스무", "이십"]]],

["물", "리터가", "water", "liter", [["water-40", "마흔", "사십"], ["water-48", "마흔 여덟", "사십 팔"]]],


["계란", "알이", "egg", "al", [["egg-06", "여섯", "육"], ["egg-01", "한", "일"]]],

["계란", "알이", "egg", "al", [["egg-20", "스무", "이십"], ["egg-23", "스물 세", "이십 삼"]]],

["계란", "알이", "egg", "al", [["egg-48", "마흔 여덟", "사십 팔"], ["egg-40", "마흔", "사십"]]],


["고기", "근이", "meat", "gun", [["meat-01", "한", "일"], ["meat-06", "여섯", "육"]]], 

["고기", "근이", "meat", "gun", [["meat-23", "스물 세", "이십 삼"], ["meat-20", "스무", "이십"]]],

["고기", "근이", "meat", "gun", [["meat-40", "마흔", "사십"], ["meat-48", "마흔 여덟", "사십 팔"]]],


["종이", "장이", "paper", "jang", [["paper-06", "여섯", "육"], ["paper-01", "한", "일"]]],

["종이", "장이", "paper", "jang", [["paper-20", "스무", "이십"], ["paper-23", "스물 세", "이십 삼"]]],

["종이", "장이", "paper", "jang", [["paper-48", "마흔 여덟", "사십 팔"], ["paper-40", "마흔", "사십"]]],


["쌀", "톨이", "rice", "tol", [["rice-01", "한", "일"], ["rice-06", "여섯", "육"]]], 

["쌀", "톨이", "rice", "tol", [["rice-23", "스물 세", "이십 삼"], ["rice-20", "스무", "이십"]]],

["쌀", "톨이", "rice", "tol", [["rice-40", "마흔", "사십"], ["rice-48", "마흔 여덟", "사십 팔"]]],


["선생님", "명이", "teacher", "myung", [["teacher-06", "여섯", "육"], ["teacher-01", "한", "일"]]],

["선생님", "명이", "teacher", "myung", [["teacher-20", "스무", "이십"], ["teacher-23", "스물 세", "이십 삼"]]],

["선생님", "명이", "teacher", "myung", [["teacher-48", "마흔 여덟", "사십 팔"], ["teacher-40", "마흔", "사십"]]]


]);



var data = {}; 
var trialnum = 0;


$(document).ready(function() {
    showSlide("intro");

    $('#gotoInstructions').click(function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide('instructions');
    });
    
    $('#startbutton').click(function() {
        stepExperiment();
    });
});

function showSlide (slideName) {
    $('.slide').hide();
    $('#' + slideName).show();
}



var conditionRandom = Math.floor(Math.random() * 2);

// var stimuliVector = stimuliList[trialnum];
// var itemStim = stimuliVector[0];
// var itemStimE = stimuliVector[2];
// var classStim = stimuliVector[1];
// var classStimE = stimuliVector[3];
// var itemList = stimuliVector[4];
// var itemVector = itemList[conditionRandom];
// var picStim = itemVector[0];
// var natStim = itemVector[1];
// var sinoStim = itemVector[2];
        

function stepExperiment () {
    if (trialnum == 24) { // end the experiment. 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide("language");
        $('#lgsubmit').click(function() {
            // var eval = $('.ev:checked').val();
            var age = $('#age').val();
            age = age.replace (/,/g, "");
            var gender = $('.gen:checked').val();
            var langdom = $('#langDominance').serialize();
            var langacq = $('#langAcquisition').serialize();
            var culture = $('#culture').val();
            var edu = $('#edu').val();
            var korCountry = $('#korCountry').val();
            var korFamily = $('#korFamily').val();
            var korSchool = $('#korSchool').val();
            var korWork = $('#korWork').val();
            var profSpeak = $('#profSpeak').val();
            var profHear = $('#profHear').val();
            var profRead = $('#profRead').val();
            var gen_com = $('#lang_com').val();
            gen_com = gen_com.replace (/,/g, "");


        if ($('.gen:checked').length > 0 && age.length > 0) {
// && langdom.length > 0 && langacq.length > 0 && culture.length > 0 && edu.length > 0

            // data.eval = eval;
            data.age = age;
            data.gender = gender;
            data.langdom = langdom;
            data.langacq = langacq;
            data.culture = culture;
            data.edu = edu;
            data.korCountry = korCountry;
            data.korFamily = korFamily;
            data.korSchool = korSchool;
            data.profSpeak = profSpeak;
            data.profHear = profHear;
            data.profRead = profRead;
            data.gen_com = gen_com;

			showSlide('finish');
			setTimeout(function() { turk.submit(data)}, 1000);                 
            } 

        else {
            demoWarning = "Please complete the questionnaire in order to finish the experiment and submit the results.";
            $("#demoWarning").html(demoWarning);
            }

            } ) }
 
    else {


        trialnum += 1;
        stimuliVector = stimuliList[trialnum-1];
        itemStim = stimuliVector[0];
        itemStimE = stimuliVector[2];
        classStim = stimuliVector[1];
        classStimE = stimuliVector[3];
        itemList = stimuliVector[4];
        itemVector = itemList[conditionRandom];
        picStim = itemVector[0];
        natStim = itemVector[1];
        sinoStim = itemVector[2];

               
        $(".item_number").html(trialnum);  
        $(".currentItem").html(itemStim);
        $(".currentNat").html(natStim);
        $(".currentSino").html(sinoStim);

        $(".currentClass").html(classStim);


        
        // Tell HTML which image file will display
        document.getElementById('currentPic').src = "stimuli/" + picStim + ".png";

        var TrueFalse = $("#TrueFalse");
        TrueFalse.html(
            TrueFalse.find("label").sort(function(){
                return Math.round(Math.random())-0.5;}));


        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide('stage'); 


        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            var choiceResponse = $('.response:checked').val();

            var sliderResponse1 = $('#sliderval1').val();

            var sliderResponse2 = $('#sliderval2').val();

            var commentResponse1 = $('#commentBox1').val();
            commentResponse1 = commentResponse1.replace (/,/g, "");


            // Check for valid answers; all questions must be answered
            if  (slider1.style.backgroundColor != "" && slider2.style.backgroundColor != "" && $('.response:checked').length > 0) {

                // make continue button available for re-use
                $("#continue").unbind('click');
                // ensure that response options are unticked for the next problems  
                $(".response").prop('checked', false);
                // ensure that the comment box is emptied as well
                $(".commentBox").val("");
                // erase warnings 
                $("#warning").html("");

                    trial = {};
                    trial.item = itemStimE;
                    trial.classifier = classStimE;
                    trial.choice = choiceResponse;
                    trial.nat_rating = sliderResponse1;
                    trial.sino_rating = sliderResponse2;
                    trial.comment = commentResponse1;
                    data["trial" + trialnum] = trial;
                // }

                // Initialize the sliders again
                refreshSlider();
            
                // Move on to the next trial
                stepExperiment();
     
                    }
            else { // If any of the questions is not answered:
                warning = "Please answer all the questions to continue. Make sure that you have dragged or clicked on the slider button so that the slider is colored and the button displays numeric values.";
                $("#warning").html(warning);
            }
        });
    }
}


// Codes for sliders
// Slider1
$( function() {
    $( "#slider1" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider1").css({"background": "#CCFFFF"});
        $("#slider1 .ui-slider-handle").css({
                      "background": "#B3C4CC",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval1" ).val( ui.value );
      }
    });
    $( "#sliderval1" ).val( $( "#slider1" ).slider( "value" ) );
  } );


// Slider2
$( function() {
    $( "#slider2" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider2").css({"background": "#CCFFFF"});
        $("#slider2 .ui-slider-handle").css({
                      "background": "#B3C4CC",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval2" ).val( ui.value );
      }
    });
    $( "#sliderval2" ).val( $( "#slider2" ).slider( "value" ) );
  } );


// Function that refreshes slider values
function refreshSlider () {
    $(".sliders").slider('value', 50);
    $(".sliders").val(50);
    $(".slidervals").val(50);
    $(".ui-slider-handle").text("");
    $(".sliders").css({"background":""});
    $(".sliders" + " .ui-slider-handle").css({
        "background":"#FAFAFA",
        "border-color": "#CCCCCC" });
}


function chooseRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}


function shuffle(v) { // non-destructive.
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}