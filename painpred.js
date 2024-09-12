/***************** 
 * Painpred Test *
 *****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// store info about the experiment session:
let expName = 'painpred';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});


// open window:
psychoJS.openWindow({
  fullscr: true,
//  fullscr: false,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(sitRoutineBegin());
flowScheduler.add(sitRoutineEachFrame());
flowScheduler.add(sitRoutineEnd());

const trials_questionLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_questionLoopBegin(trials_questionLoopScheduler));
flowScheduler.add(trials_questionLoopScheduler);
flowScheduler.add(trials_questionLoopEnd);

const trials_fail_quizLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_fail_quizLoopBegin(trials_fail_quizLoopScheduler));
flowScheduler.add(trials_fail_quizLoopScheduler);
flowScheduler.add(trials_fail_quizLoopEnd);

const trials_pass_quizLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_pass_quizLoopBegin(trials_pass_quizLoopScheduler));
flowScheduler.add(trials_pass_quizLoopScheduler);
flowScheduler.add(trials_pass_quizLoopEnd);


const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(pain_predictionRoutineBegin());
flowScheduler.add(pain_predictionRoutineEachFrame());
flowScheduler.add(pain_predictionRoutineEnd());
flowScheduler.add(pain_confidenceRoutineBegin());
flowScheduler.add(pain_confidenceRoutineEachFrame());
flowScheduler.add(pain_confidenceRoutineEnd());



flowScheduler.add(end_screenRoutineBegin());
flowScheduler.add(end_screenRoutineEachFrame());
flowScheduler.add(end_screenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'instruction_images/instruction_1_2hour.png', 'path': 'instruction_images/instruction_1_2hour.png'},
    {'name': 'instruction_images/first_slider_image.png', 'path': 'instruction_images/first_slider_image.png'},
    {'name': 'instruction_images/instruction_2_2hour.png', 'path': 'instruction_images/instruction_2_2hour.png'},
    {'name': 'instruction_images/second_slider_image.png', 'path': 'instruction_images/second_slider_image.png'},
    {'name': 'instruction_images/instruction_3_new.png', 'path': 'instruction_images/instruction_3_new.png'},
    {'name': 'instruction_images/confidence_slider.png', 'path': 'instruction_images/confidence_slider.png'},
    {'name': 'instruction_images/next_button.png', 'path': 'instruction_images/next_button.png'},
    {'name': 'instruction_images/start_button.png', 'path': 'instruction_images/start_button.png'},
    {'name': 'instruction_images/vertical_white_rectangle.png', 'path': 'instruction_images/vertical_white_rectangle.png'},
    {'name': 'instruction_images/hori_white_rectangle.png', 'path': 'instruction_images/hori_white_rectangle.png'},
    {'name': 'instruction_images/finish_button.png', 'path': 'instruction_images/finish_button.png'},
    {'name': 'instruction_images/confidence.PNG', 'path': 'instruction_images/confidence.PNG'},
    {'name': 'instruction_images/pain_pred.PNG', 'path': 'instruction_images/pain_pred.PNG'},
    {'name': 'instruction_images/2hour-task.png', 'path': 'instruction_images/2hour-task.png'},
    {'name': 'instruction_images/predict_quiz_text.png', 'path': 'instruction_images/predict_quiz_text.png'},
    {'name': 'instruction_images/confidence_quiz_instruction.png', 'path': 'instruction_images/confidence_quiz_instruction.png'},
    {'name': 'instruction_images/trial_run_new.png', 'path': 'instruction_images/trial_run_new.png'},
    {'name': 'instruction_images/slider_example_new.png', 'path': 'instruction_images/slider_example_new.png'},
    {'name': 'instruction_images/example_text.png', 'path': 'instruction_images/example_text.png'},
    {'name': 'instruction_images/dummyarea.png', 'path': 'instruction_images/dummyarea.png'},
    {'name': 'instruction_images/dummyarea_black.png', 'path': 'instruction_images/dummyarea_black.png'},
    {'name': 'instruction_images/star_new_yellow.png', 'path': 'instruction_images/star_new_yellow.png'},
    {'name': 'instruction_images/attn_check_text_yellow_new.png', 'path': 'instruction_images/attn_check_text_yellow_new.png'},
    {'name': 'instruction_images/attn_instructions.png', 'path': 'instruction_images/attn_instructions.png'},
    {'name': 'instruction_images/instruction_1_new_.png', 'path': 'instruction_images/instruction_1_new_.png'},
    {'name': 'instruction_images/pain_pred_instructions.png', 'path': 'instruction_images/pain_pred_instructions.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://www.google.com');
  return Scheduler.Event.NEXT;
}


var sitClock;
var instruction_sit_text;
var next_button_sit;
var mouse_sit;
var blank1sClock;
var text;
var instruction_1Clock;
var next_button_1;
var mouse_1;
var slider_1;
var instruction_1_text_new;
var instruction_2Clock;
var next_button_2;
var mouse_2;
var slider_2;
var text_2;
var instruction_3Clock;
var mouse_3;
var start_button;
var slider_3;
var instruction_3_text;
var quiz_3_text;
//instruction for attn quiz
var instruction_attnClock;
var attn_star;
var start_button_attn;
var mouse_attn_instruction;
var instruction_attn_text;
var quiz_attn_text; 

//continuous trial
var continuous_pain_rating_trialClock;
var vertical_1_trial;
var horiozntal_top_1_trial;
var horizontal_bottom_1_trial;
var pain_continuous_image_trial;
var most_pain_1_trial;
var least_pain_1_trial;
var continuous_pain_slider_trial;
var mouse_slider_trial;


var exampleClock; //new addition for example routine
var next_button_example; //new addition for example routine
var mouse_example; //new addition for example routine
var instruction_example_text; //new addition for example routine
var slider_example; //new addition for example routine
var quiz_end;



var question_slider_predictionClock; //new addition of question prediction slider
var question_slider_prediction; //new addition of question prediction slider
var question_slider_prediction_text; //new addition of question prediction slider
var vertical_question_prediction; //new addition of question prediction slider
var horizontal_top_question_prediction; //new addition of question prediction slider
var horizontal_bottom_question_prediction; //new addition of question prediction slider
var most_pain_question_prediction; //new addition of question prediction slider
var least_pain_question_prediction; //new addition of question prediction slider


/*
var pain_confidence_questionClock; //new addition of question confidence slider
var horizontal_central_confidence_question; //new addition of question confidence slider
var vertical_right_confidence_question; //new addition of question confidence slider
var vertical_left_confidence_question; //new addition of question confidence slider
var confidence_image_question; //new addition of question confidence slider
var confidence_slider_question; //new addition of question confidence slider
*/

//first attn test trial
var attn_check_trialClock; //attn check
var attn_check_image_trial; //attn check
var mouse_attn_trial; //attn check
var attn_check_instructions_trial; //attn check
var rand_pos_trial;
var slider_attn_trial;
var horizontal_bottom_attn_trial;
var horiozntal_top_attn_trial;
var vertical_attn_trial;
var most_pain_attn_trial;
var least_pain_attn_trial;


//second attn test trial
var attn_check_2_trialClock; //attn check
var attn_check_image_2_trial; //attn check
var mouse_attn_2_trial; //attn check
var attn_check_instructions_2_trial; //attn check
var rand_pos_2_trial;
var slider_attn_2_trial;
var horizontal_bottom_attn_2_trial;
var horiozntal_top_attn_2_trial;
var vertical_attn_2_trial;
var most_pain_attn_2_trial;
var least_pain_attn_2_trial;

//third attn test trial
var attn_check_3_trialClock; //attn check
var attn_check_image_3_trial; //attn check
var mouse_attn_3_trial; //attn check
var attn_check_instructions_3_trial; //attn check
var rand_pos_3_trial;
var slider_attn_3_trial;
var horizontal_bottom_attn_3_trial;
var horiozntal_top_attn_3_trial;
var vertical_attn_3_trial;
var most_pain_attn_3_trial;
var least_pain_attn_3_trial;

var pass_screenClock; //new addition for passing screen
var pass; //new addition for passing screen
var start_button_pass; //new addition for passing screen
var mouse_pass; //new addition for passing screen

var redirect_screenClock; //new addition for redirecting after failing
var redirect; //new addition for redirecting after failing
var next_button_redirect; //new addition for redirecting after failing
var mouse_redirect; //new addition for redirecting after failing


//first attn test
var attn_checkClock; //attn check
var attn_check_image; //attn check
var mouse_attn; //attn check
var attn_check_instructions; //attn check
var rand_pos;
var rectangle;
var circle;
var slider_attn;
var horizontal_bottom_attn;
var horiozntal_top_attn;
var vertical_attn;
var pain_continuous_image_attn;
var most_pain_attn;
var least_pain_attn;


//second attn test
var attn_check_2Clock; //attn check
var attn_check_image_2; //attn check
var mouse_attn_2; //attn check
var attn_check_instructions_2; //attn check
var rand_pos_2;
var rectangle_2;
var circle_2;
var slider_attn_2;
var horizontal_bottom_attn_2;
var horiozntal_top_attn_2;
var vertical_attn_2;
var pain_continuous_image_attn_2;
var most_pain_attn_2;
var least_pain_attn_2;

//third attn test
var attn_check_3Clock; //attn check
var attn_check_image_3; //attn check
var mouse_attn_3; //attn check
var attn_check_instructions_3; //attn check
var rand_pos_3;
var rectangle_3;
var circle_3;
var slider_attn_3;
var horizontal_bottom_attn_3;
var horiozntal_top_attn_3;
var vertical_attn_3;
var pain_continuous_image_attn_3;
var most_pain_attn_3;
var least_pain_attn_3;

var continuous_pain_ratingClock;
var dummy;
var vertical_1;
var horiozntal_top_1;
var horizontal_bottom_1;
var pain_continuous_image;
var most_pain_1;
var least_pain_1;
var continuous_pain_slider;
var mouse_slider;
var pain_predictionClock;
var vertical_2;
var horizontal_bottom_2;
var horizontal_top_2;
var pain_predict_image;
var most_pain_2;
var least_pain_2;
var pain_predict_slider;
var pain_confidenceClock;
var horizontal_central;
var vertical_right;
var vertical_left;
var confidence_image;
var confidence_slider_2;
//final test instructions
var instruction_2_endClock;
var next_button_2_end;
var mouse_2_end;
var slider_2_end;
var text_2_end;

var end_screenClock;
var ending;
var finish_button;
var mouse;
var end_failedClock; //failed screen
var end_failed; //failed screen
var finish_button_failed; //failed screen
var mouse_failed;
var globalClock;
var routineTimer;
var width = psychoJS.window.size[0]/1000;
var height = psychoJS.window.size[1]/1000;
var landscape=height>width?0:0.2;
var longside=height>width?height:width;
var rand_int;
var rand_int_trial;
var top = (0.3+landscape)*height;
var bottom = (-0.4-landscape)*height;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

async function experimentInit() {
  // Initialize components for Routine "sit"
  sitClock = new util.Clock();
  instruction_sit_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_sit_text',
    text: 'Welcome! \n\nPlease ensure that you are sitting down.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    //pos: [0, (0.35+landscape/2)*height], height: 1.25*(0.04-landscape/20),  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  next_button_sit = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_button_sit', units : undefined, 
    image : 'instruction_images/next_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_sit = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_sit.mouseClock = new util.Clock();
  // Initialize components for Routine "blank1s"
  blank1sClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  
  // Initialize components for Routine "instruction_1"
  instruction_1Clock = new util.Clock();
  
   slider_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_1', units : undefined, 
    image : 'instruction_images/first_slider_image.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.1-landscape/1.8)*height], size : [(0.25-landscape/2)*longside, (0.45-landscape)*longside],
    //ori : 0.0, pos : [0, (- 0.12)], size : [0.3, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  
  next_button_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_button_1', units : undefined, 
    image : 'instruction_images/next_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_1.mouseClock = new util.Clock();
 
  instruction_1_text_new = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_txt_1', units : undefined, 
    image : 'instruction_images/instruction_1_new_.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.3+landscape)*height], size : [0.55*longside, 0.2*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  // Initialize components for Routine "instruction_attn"

  instruction_attnClock = new util.Clock();
  
   attn_star = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_star', units : undefined, 
    image : 'instruction_images/star_new_yellow.png', mask : undefined,
    ori : 0.0, pos : [0, (landscape/1.8)*height], size : [(0.1-landscape/3.8)*longside*0.85, (0.07-landscape/4.8)*longside*1.2*0.85],
    //ori : 0.0, pos : [0, (- 0.12)], size : [0.3, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  
  start_button_attn = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_button_attn', units : undefined, 
    image : 'instruction_images/start_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_attn_instruction = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_attn_instruction.mouseClock = new util.Clock();
 
  instruction_attn_text = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_txt_1', units : undefined, 
    image : 'instruction_images/attn_instructions.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.3+landscape)*height], size : [0.55*longside, 0.1*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  quiz_attn_text = new visual.ImageStim({
    win : psychoJS.window,
    name : 'quiz_attn_text', units : undefined, 
    image : 'instruction_images/trial_run_new.png', mask : undefined,
    ori : 0.0, pos : [0.0, (-0.25+landscape)*height], size : [0.55*longside, 0.08*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  // Initialize components for Routine "continuous_pain_rating_trial"
  continuous_pain_rating_trialClock = new util.Clock();
  
  vertical_1_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_1', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horiozntal_top_1_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horiozntal_top_1', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_bottom_1_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_1', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  pain_continuous_image_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pain_continuous_image', units : undefined, 
    image : 'instruction_images/pain_pred.PNG', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.08*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  most_pain_1_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_1',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_1_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_1',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined,
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  continuous_pain_slider_trial = new visual.Slider({
    win: psychoJS.window, name: 'continuous_pain_slider',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  continuous_pain_slider_trial._skin.MARKER_SIZE = [0.05, 0.05];
  
  mouse_slider_trial = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_slider_trial.mouseClock = new util.Clock();

  //Initialize Components for Routine "attn_check_trial"
  attn_check_trialClock = new util.Clock();
  //const rand_pos_list_x = [0.25*0.5, -0.5*0.75, -0.5*0.25, 0.5*0.75, 0.25*0.5, -0.5*0.75, -0.5*0.25, 0.5*0.75,0.25*0.5, -0.5*0.75, -0.5*0.25, 0.5*0.75, 0.25*0.5, -0.5*0.75, -0.5*0.25, 0.5*0.75];
  //const rand_pos_list_y = [0.8+((0.5*0.2- 0.45-landscape)*height), 0.8+((0.5*0.2- 0.45-landscape)*height), 0.8+((0.5*0.2- 0.45-landscape)*height), 0.8+((0.5*0.2- 0.45-landscape)*height), -0.67+((- 0.45-landscape+0.5*0.5)*height)*-1, -0.67+((- 0.45-landscape+0.5*0.5)*height)*-1, -0.67+((- 0.45-landscape+0.5*0.5)*height)*-1, -0.67+((- 0.45-landscape+0.5*0.5)*height)*-1, 0.1+((0.5*0.6- 0.45-landscape)*height), 0.1+((0.5*0.6- 0.45-landscape)*height), 0.1+((0.5*0.6- 0.45-landscape)*height), 0.1+((0.5*0.6- 0.45-landscape)*height), 0.95+((0.5*0.2- 0.45-landscape)*height), 0.95+((0.5*0.2- 0.45-landscape)*height), 0.95+((0.5*0.2- 0.45-landscape)*height), 0.95+((0.5*0.2- 0.45-landscape)*height)];
  const rand_pos_list_x = [-0.5*0.75, 0.5*0.75, -0.5*0.75, 0.5*0.75, -0.5*0.75, 0.5*0.75];
  const rand_pos_list_y = [(0.3+landscape)*height-0.1, (0.3+landscape)*height-0.1, (-0.4-landscape)*height+0.1, (-0.4-landscape)*height+0.1, ((0.3+landscape)*height+(-0.4-landscape)*height)/2, ((0.3+landscape)*height+(-0.4-landscape)*height)/2];

  rand_pos_trial = getRndInteger(0, 5);
  var x_trial = rand_pos_list_x[rand_pos_trial];
  var y_trial = rand_pos_list_y[rand_pos_trial];
  
  attn_check_image_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_image_trial', units : undefined, 
    image : 'instruction_images/star_new_yellow.png', mask : undefined,
    ori : 0.0, pos : [x_trial, y_trial], size : [(0.1-landscape/3.8)*longside*0.85, (0.07-landscape/4.8)*longside*1.2*0.85],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });


  mouse_attn_trial = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_attn_trial.mouseClock = new util.Clock();
 
  attn_check_instructions_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_test_1', units : undefined, 
    image : 'instruction_images/attn_check_text_yellow_new.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.05*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  vertical_attn_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_attn', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horiozntal_top_attn_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horiozntal_top_attn', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_bottom_attn_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_attn', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });

  most_pain_attn_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_attn',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_attn_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_attn',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined,
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  slider_attn_trial = new visual.Slider({
    win: psychoJS.window, name: 'slider_attn',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  slider_attn_trial._skin.MARKER_SIZE = [0.05, 0.05];
 

  // Initialize components for "attn_check_2_trial"
  
 
  attn_check_2_trialClock = new util.Clock();

  rand_pos_2_trial = getRndInteger(0, 5);
  var x_2_trial = rand_pos_list_x[rand_pos_2_trial];
  var y_2_trial = rand_pos_list_y[rand_pos_2_trial];

  
  attn_check_image_2_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_image_2_trial', units : undefined, 
    image : 'instruction_images/star_new_yellow.png', mask : undefined,
    ori : 0.0, pos : [x_2_trial, y_2_trial], size : [(0.1-landscape/3.8)*longside*0.85, (0.07-landscape/4.8)*longside*1.2*0.85],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });


  mouse_attn_2_trial = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_attn_2_trial.mouseClock = new util.Clock();
 
  attn_check_instructions_2_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_text_2_trial', units : undefined, 
    image : 'instruction_images/attn_check_text_yellow_new.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.05*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  vertical_attn_2_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_attn_2_trial', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horiozntal_top_attn_2_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horiozntal_top_attn_2_trial', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_bottom_attn_2_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_attn_2_trial', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });

  most_pain_attn_2_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_attn_2_trial',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_attn_2_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_attn_2_trial',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined,
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  slider_attn_2_trial = new visual.Slider({
    win: psychoJS.window, name: 'slider_attn_2_trial',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  slider_attn_2_trial._skin.MARKER_SIZE = [0.05, 0.05];



  // Initialize components for "attn_check_3_trial"
  
 
  attn_check_3_trialClock = new util.Clock();


  rand_pos_3_trial = getRndInteger(0, 5);
  var x_3_trial = rand_pos_list_x[rand_pos_3_trial];
  var y_3_trial = rand_pos_list_y[rand_pos_3_trial];
  
  attn_check_image_3_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_image_3_trial', units : undefined, 
    image : 'instruction_images/star_new_yellow.png', mask : undefined,
    ori : 0.0, pos : [x_3_trial, y_3_trial], size : [(0.1-landscape/3.8)*longside*0.85, (0.07-landscape/4.8)*longside*1.2*0.85],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });

  mouse_attn_3_trial = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_attn_3_trial.mouseClock = new util.Clock();
 
  attn_check_instructions_3_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_text_3_trial', units : undefined, 
    image : 'instruction_images/attn_check_text_yellow_new.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.05*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  vertical_attn_3_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_attn_3_trial', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horiozntal_top_attn_3_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horiozntal_top_attn_3_trial', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_bottom_attn_3_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_attn_3_trial', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });

  most_pain_attn_3_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_attn_3_trial',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_attn_3_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_attn_3_trial',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined,
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  slider_attn_3_trial = new visual.Slider({
    win: psychoJS.window, name: 'slider_attn_3_trial',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  slider_attn_3_trial._skin.MARKER_SIZE = [0.05, 0.05];

  /*
  // Initialize components for Routine "instruction_2"
  instruction_2Clock = new util.Clock();
  next_button_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_button_2', units : undefined, 
    image : 'instruction_images/start_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  slider_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_2', units : undefined, 
    image : 'instruction_images/second_slider_image.png', mask : undefined,
    //ori : 0.0, pos : [0, (-0.05-landscape/1.8)*height], size : [(0.3-landscape/2)*longside, (0.55-landscape)*longside],
    ori : 0.0, pos : [0, (-0.1-landscape)*height], size : [(0.25-landscape/2)*longside, (0.45-landscape)*longside],
    //ori : 0.0, pos : [0, (- 0.12)], size : [0.3, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_txt_2', units : undefined, 
    image : 'instruction_images/instruction_2_2hour.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.3+landscape)*height], size : [0.55*longside, 0.104*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  // Initialize components for Routine "instruction_3"
  instruction_3Clock = new util.Clock();
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  start_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_button', units : undefined, 
    image : 'instruction_images/start_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  slider_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_3', units : undefined, 
    image : 'instruction_images/confidence_slider.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.375*longside, 0.15*longside],
    //ori : 0.0, pos : [0, 0], size : [0.375, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  instruction_3_text = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_txt_3', units : undefined, 
    image : 'instruction_images/instruction_3_new.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.3+landscape)*height], size : [0.55*longside, 0.13*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  quiz_3_text = new visual.ImageStim({
    win : psychoJS.window,
    name : 'quiz_3_text', units : undefined, 
    image : 'instruction_images/quiz_start_text.png', mask : undefined,
    ori : 0.0, pos : [0.0, (-0.25+landscape)*height], size : [0.55*longside, 0.08*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  */


  // Initialize components for Routine "question_slider_prediction_routine"
  /*
  question_slider_predictionClock = new util.Clock();
  vertical_question_prediction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_2', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  
  horizontal_top_question_prediction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_top_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.15*width, 0.006*height],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  
  horizontal_bottom_question_prediction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  
  question_slider_prediction_text = new visual.ImageStim({
    win : psychoJS.window,
    name : 'predict_quiz_instruction', units : undefined, 
    image : 'instruction_images/predict_quiz_text.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.125*longside],
    //ori : 0.0, pos : [0, 0.45], size : [0.5544, 0.1188],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  most_pain_question_prediction = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_2',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_question_prediction = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_2',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  question_slider_prediction = new visual.Slider({
    win: psychoJS.window, name: 'question_slider_prediction',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([0.3333, 0.3333, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  question_slider_prediction._skin.MARKER_SIZE = [0.05, 0.05]; 
  */
  /*
  // Initialize components for Routine "pain_confidence_question"
  pain_confidence_questionClock = new util.Clock();
  horizontal_central_confidence_question = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_central_confidence_question', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8*width, 0.025*height],
    //ori : 0.0, pos : [0, 0], size : [0.6, 0.025],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  vertical_right_confidence_question = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_right', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0.4*width, 0], size : [0.02*width, 0.1*height],
    //ori : 0.0, pos : [0.3, 0], size : [0.02, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  vertical_left_confidence_question = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_left', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [(- 0.4)*width, 0], size : [0.02*width, 0.1*height],
    //ori : 0.0, pos : [(- 0.3), 0], size : [0.02, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  confidence_image_question = new visual.ImageStim({
    win : psychoJS.window,
    name : 'confidence_image', units : undefined, 
    image : 'instruction_images/confidence_quiz_instruction.png', mask : undefined,
    ori : 0.0, pos : [0, 0.35*height], size : [0.55*longside, 0.12*longside],
    //ori : 0.0, pos : [0, 0.35], size : [0.5544, 0.1188],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  confidence_slider_question = new visual.Slider({
    win: psychoJS.window, name: 'confidence_slider_question',
    startValue: undefined,
    size: [0.8*width, 0.1*height], pos: [0, 0], ori: 0.0, units: 'height',
    //size: [0.6, 0.1], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["Unsure", "Sure"], fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  confidence_slider_question._skin.MARKER_SIZE = [0.05, 0.05];
  */

  //Initialize components for Routine "pass_screen"
  pass_screenClock = new util.Clock();
  pass = new visual.TextStim({
    win: psychoJS.window,
    name: 'pass',
    text: 'You have passed the test \n\nPlease click on the button below to \ncontinue the task.',
    font: 'Arial',
    units: undefined, 
    //pos: [0, 0.2], height: 1.25*(0.04-landscape/20),  wrapWidth: undefined, ori: 0.0,
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_button_pass = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_button_pass', units : undefined, 
    image : 'instruction_images/start_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_pass = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pass.mouseClock = new util.Clock();

  

  
  // Initialize components for Routine "continuous_pain_rating"
  continuous_pain_ratingClock = new util.Clock();
  dummy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dummy', units : undefined, 
    image : 'instruction_images/dummyarea_black.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.15*width, (0.75+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  vertical_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_1', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horiozntal_top_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horiozntal_top_1', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_bottom_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_1', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  pain_continuous_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pain_continuous_image', units : undefined, 
    image : 'instruction_images/pain_pred.PNG', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.08*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  most_pain_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_1',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_1',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined,
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  continuous_pain_slider = new visual.Slider({
    win: psychoJS.window, name: 'continuous_pain_slider',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  continuous_pain_slider._skin.MARKER_SIZE = [0.05, 0.05];
  
  mouse_slider = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_slider.mouseClock = new util.Clock();

  // Initialize components for "attn_check"
  
 
  attn_checkClock = new util.Clock();
  rand_pos = getRndInteger(0, 5);
  var x_1 = rand_pos_list_x[rand_pos];
  var y_1 = rand_pos_list_y[rand_pos];
  
  attn_check_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_image', units : undefined, 
    image : 'instruction_images/star_new_yellow.png', mask : undefined,
    ori : 0.0, pos : [x_1, y_1], size : [(0.1-landscape/3.8)*longside*0.85, (0.07-landscape/4.8)*longside*1.2*0.85],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });

  /*

  rectangle = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rectangle', units : undefined, 
    image : 'instruction_images/rectangle.png', mask : undefined,
    ori : 0.0, pos : [-rand_pos*0.4, 0.45+((- 0.45-landscape+rand_pos*0.5)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside*1.2],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });

  circle = new visual.ImageStim({
    win : psychoJS.window,
    name : 'circle', units : undefined, 
    image : 'instruction_images/circle.png', mask : undefined,
    ori : 0.0, pos : [rand_pos*0.15, 0.18+((rand_pos*0.6- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside*1.2],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });

  */


  mouse_attn = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_attn.mouseClock = new util.Clock();
 
  attn_check_instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_test_1', units : undefined, 
    image : 'instruction_images/attn_check_text_yellow_new.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.05*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  vertical_attn = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_attn', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horiozntal_top_attn = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horiozntal_top_attn', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_bottom_attn = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_attn', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
/*
  pain_continuous_image_attn = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pain_continuous_image_attn', units : undefined, 
    image : 'instruction_images/pain_pred.PNG', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.08*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
*/
  most_pain_attn = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_attn',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_attn = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_attn',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined,
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  slider_attn = new visual.Slider({
    win: psychoJS.window, name: 'slider_attn',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  slider_attn._skin.MARKER_SIZE = [0.05, 0.05];

  // Initialize components for "attn_check_2"
  
 
  attn_check_2Clock = new util.Clock();

  rand_pos_2 = getRndInteger(0, 5);
  var x_2 = rand_pos_list_x[rand_pos_2];
  var y_2 = rand_pos_list_y[rand_pos_2];

  
  attn_check_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_image', units : undefined, 
    image : 'instruction_images/star_new_yellow.png', mask : undefined,
    ori : 0.0, pos : [x_2, y_2], size : [(0.1-landscape/3.8)*longside*0.85, (0.07-landscape/4.8)*longside*1.2*0.85],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
/*
  rectangle_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rectangle', units : undefined, 
    image : 'instruction_images/rectangle.png', mask : undefined,
    ori : 0.0, pos : [rand_pos_2*0.1, 0.65+((- 0.45-landscape+rand_pos_2*0.5)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside*1.2],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });

  circle_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'circle', units : undefined, 
    image : 'instruction_images/circle.png', mask : undefined,
    ori : 0.0, pos : [rand_pos_2*0.4, ((rand_pos_2*0.7- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside*1.2],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  */


  mouse_attn_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_attn_2.mouseClock = new util.Clock();
 
  attn_check_instructions_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_text_2', units : undefined, 
    image : 'instruction_images/attn_check_text_yellow_new.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.05*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  vertical_attn_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_attn_2', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horiozntal_top_attn_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horiozntal_top_attn_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_bottom_attn_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_attn_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
/*
  pain_continuous_image_attn_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pain_continuous_image_attn_2', units : undefined, 
    image : 'instruction_images/pain_pred.PNG', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.08*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
*/
  most_pain_attn_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_attn_2',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_attn_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_attn_2',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined,
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  slider_attn_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_attn_2',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  slider_attn_2._skin.MARKER_SIZE = [0.05, 0.05];



  // Initialize components for "attn_check_3"
  
 
  attn_check_3Clock = new util.Clock();


  rand_pos_3 = getRndInteger(0, 5);
  var x_3 = rand_pos_list_x[rand_pos_3];
  var y_3 = rand_pos_list_y[rand_pos_3];
  
  attn_check_image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_image', units : undefined, 
    image : 'instruction_images/star_new_yellow.png', mask : undefined,
    ori : 0.0, pos : [x_3, y_3], size : [(0.1-landscape/3.8)*longside*0.85, (0.07-landscape/4.8)*longside*1.2*0.85],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });

  /*
  rectangle_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rectangle', units : undefined, 
    image : 'instruction_images/rectangle.png', mask : undefined,
    ori : 0.0, pos : [-rand_pos_3*0.15, 0.22+((- 0.45-landscape+rand_pos_3*0.7)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside*1.2],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });

  circle_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'circle', units : undefined, 
    image : 'instruction_images/circle.png', mask : undefined,
    ori : 0.0, pos : [-rand_pos_3*0.4, 0.07+((rand_pos_3*0.5- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside*1.2],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
*/

  mouse_attn_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_attn_3.mouseClock = new util.Clock();
 
  attn_check_instructions_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'attn_check_text_3', units : undefined, 
    image : 'instruction_images/attn_check_text_yellow_new.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.05*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });

  vertical_attn_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_attn_3', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horiozntal_top_attn_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horiozntal_top_attn_3', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_bottom_attn_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_attn_3', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
/*
  pain_continuous_image_attn_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pain_continuous_image_attn_3', units : undefined, 
    image : 'instruction_images/pain_pred.PNG', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.08*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
*/
  most_pain_attn_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_attn_3',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_attn_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_attn_3',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined,
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  slider_attn_3 = new visual.Slider({
    win: psychoJS.window, name: 'slider_attn_3',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  slider_attn_3._skin.MARKER_SIZE = [0.05, 0.05];
  
  // Initialize components for Routine "pain_prediction"
  pain_predictionClock = new util.Clock();
  vertical_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_2', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  
  horizontal_top_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_top_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  
  horizontal_bottom_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  
  pain_predict_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pain_predict_image', units : undefined, 
    image : 'instruction_images/pain_pred_instructions.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.175*longside],
    //ori : 0.0, pos : [0, 0.45], size : [0.5544, 0.1188],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  most_pain_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_2',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_2',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  pain_predict_slider = new visual.Slider({
    win: psychoJS.window, name: 'pain_predict_slider',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([0.3333, 0.3333, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  pain_predict_slider._skin.MARKER_SIZE = [0.05, 0.05]; 
  
  
  // Initialize components for Routine "pain_confidence"
  pain_confidenceClock = new util.Clock();
  horizontal_central = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_central', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8*width, 0.025*height],
    //ori : 0.0, pos : [0, 0], size : [0.6, 0.025],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  vertical_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_right', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0.4*width, 0], size : [0.02*width, 0.1*height],
    //ori : 0.0, pos : [0.3, 0], size : [0.02, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  vertical_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_left', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [(- 0.4)*width, 0], size : [0.02*width, 0.1*height],
    //ori : 0.0, pos : [(- 0.3), 0], size : [0.02, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  confidence_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'confidence_image', units : undefined, 
    image : 'instruction_images/confidence.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0.35*height], size : [0.45*longside, 0.055*longside],
    //ori : 0.0, pos : [0, 0.35], size : [0.5544, 0.1188],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  confidence_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'confidence_slider_2',
    startValue: undefined,
    size: [0.8*width, 0.1*height], pos: [0, 0], ori: 0.0, units: 'height',
    //size: [0.6, 0.1], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["Unsure", "Sure"], fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  confidence_slider_2._skin.MARKER_SIZE = [0.05, 0.05]; 
  
/*
  // Initialize components for Routine "instruction_2_end"
  instruction_2_endClock = new util.Clock();
  next_button_2_end = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_button_2', units : undefined, 
    image : 'instruction_images/start_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_2_end = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2_end.mouseClock = new util.Clock();
  slider_2_end = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_2_end', units : undefined, 
    image : 'instruction_images/second_slider_image.png', mask : undefined,
    //ori : 0.0, pos : [0, (-0.05-landscape/1.8)*height], size : [(0.3-landscape/2)*longside, (0.55-landscape)*longside],
    ori : 0.0, pos : [0, (-0.1-landscape)*height], size : [(0.25-landscape/2)*longside, (0.45-landscape)*longside],
    //ori : 0.0, pos : [0, (- 0.12)], size : [0.3, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_2_end = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_txt_2', units : undefined, 
    image : 'instruction_images/instruction_2_2hour_end.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.3+landscape)*height], size : [0.55*longside, 0.104*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
*/
/* 
// Initialize components for Routine "example"


exampleClock = new util.Clock();
  
slider_example = new visual.ImageStim({
 win : psychoJS.window,
 name : 'slider_1', units : undefined, 
 image : 'instruction_images/slider_example_new.png', mask : undefined,
 ori : 0.0, pos : [0, (- 0-landscape/1.8)*height], size : [(0.25-landscape/2)*longside*1.3, (0.45-landscape)*longside*1.3],
 //ori : 0.0, pos : [0, (- 0.12)], size : [0.3, 0.55],
 color : new util.Color([1,1,1]), opacity : undefined,
 flipHoriz : false, flipVert : false,
 texRes : 128.0, interpolate : true, depth : -2.0 
});

next_button_example = new visual.ImageStim({
 win : psychoJS.window,
 name : 'next_button_1', units : undefined, 
 image : 'instruction_images/next_button.png', mask : undefined,
 ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
 //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
 color : new util.Color([1,1,1]), opacity : undefined,
 flipHoriz : false, flipVert : false,
 texRes : 128.0, interpolate : true, depth : 0.0 
});
mouse_example = new core.Mouse({
 win: psychoJS.window,
});
mouse_example.mouseClock = new util.Clock();

instruction_example_text = new visual.ImageStim({
 win : psychoJS.window,
 name : 'Instruction_txt_1', units : undefined, 
 image : 'instruction_images/example-2hour.png', mask : undefined,
 ori : 0.0, pos : [0.0, (0.35+landscape)*height], size : [0.55*longside, 0.08*longside],
 //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
 color : new util.Color([1,1,1]), opacity : undefined,
 flipHoriz : false, flipVert : false,
 texRes : 128.0, interpolate : true, depth : -3.0 
});

quiz_end = new visual.ImageStim({
    win : psychoJS.window,
    name : 'quiz_end', units : undefined, 
    image : 'instruction_images/quiz_start_text.png', mask : undefined,
    ori : 0.0, pos : [0.0, (-0.35+landscape)*height], size : [0.55*longside, 0.08*longside],
    //ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  
 // Initialize components for Routine "question_slider_prediction_routine"

  question_slider_predictionClock = new util.Clock();
  vertical_question_prediction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_2', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)*height], size : [0.02*width, (0.7+landscape*2)*height],
    //ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  
  horizontal_top_question_prediction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_top_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    //ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    ori : 0.0, pos : [0, (0.3+landscape)*height], size : [0.1*width, 0.015*height],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  
  horizontal_bottom_question_prediction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (-0.4-landscape)*height], size : [0.1*width, 0.015*height],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  
  question_slider_prediction_text = new visual.ImageStim({
    win : psychoJS.window,
    name : 'predict_quiz_instruction', units : undefined, 
    image : 'instruction_images/predict_quiz_text.png', mask : undefined,
    ori : 0.0, pos : [0.0, (0.4+landscape)*height], size : [0.55*longside, 0.125*longside],
    //ori : 0.0, pos : [0, 0.45], size : [0.5544, 0.1188],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  most_pain_question_prediction = new visual.TextStim({
    win: psychoJS.window,
    name: 'most_pain_2',
    text: 'Most Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (0.3+landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  least_pain_question_prediction = new visual.TextStim({
    win: psychoJS.window,
    name: 'least_pain_2',
    text: 'Least Pain',
    font: 'Arial',
    units: undefined, 
    pos: [- 0.2*width, (-0.4-landscape)*height], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    //pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  question_slider_prediction = new visual.Slider({
    win: psychoJS.window, name: 'question_slider_prediction',
    startValue: undefined,
    size: [0.05, (0.7+landscape*2)*height], pos: [0, (- 0.05)*height], ori: 0.0, units: 'height',
    //size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [0, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([0.3333, 0.3333, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  question_slider_prediction._skin.MARKER_SIZE = [0.05, 0.05]; 
  */

  //Initialize components for Routine "redirect_screen"
  redirect_screenClock = new util.Clock();
  redirect = new visual.TextStim({
    win: psychoJS.window,
    name: 'redirect',
    text: 'Unfortunately, you failed the attention check. \n You will be redirected back to the instructions',
    font: 'Arial',
    units: undefined, 
    //pos: [0, 0.2], height: 1.25*(0.04-landscape/20),  wrapWidth: undefined, ori: 0.0,
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  next_button_redirect = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_button_pass', units : undefined, 
    image : 'instruction_images/next_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_redirect = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_redirect.mouseClock = new util.Clock();
/*
  //Initialize components for Routine "redirect_screen_predict"
  redirect_screen_predictClock = new util.Clock();
  redirect = new visual.TextStim({
    win: psychoJS.window,
    name: 'redirect_predict',
    text: 'It seems that you did not predict your pain \n You will be asked to answer it again',
    font: 'Arial',
    units: undefined, 
    //pos: [0, 0.2], height: 1.25*(0.04-landscape/20),  wrapWidth: undefined, ori: 0.0,
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  next_button_redirect_predict = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_button_pass', units : undefined, 
    image : 'instruction_images/next_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_redirect_predict = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_redirect_predict.mouseClock = new util.Clock();
*/
  
  // Initialize components for Routine "end_screen"
  end_screenClock = new util.Clock();
  ending = new visual.TextStim({
    win: psychoJS.window,
    name: 'ending',
    text: 'Thank you for completing the session.\n\n Please click on the button below to finish the task and \n you will be redirected to some questionnaires.',
    font: 'Arial',
    units: undefined, 
    //pos: [0, 0.2], height: 1.25*(0.04-landscape/20),  wrapWidth: undefined, ori: 0.0,
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  finish_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'finish_button', units : undefined, 
    image : 'instruction_images/finish_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();

  // Initialize components for Routine "end_failed"
  end_failedClock = new util.Clock();
  end_failed = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_failed',
    text: 'Unfortunately you have failed the test \nThank you for completing the task. \n\nPlease click on the button below to \nfinish the task.',
    font: 'Arial',
    units: undefined, 
    //pos: [0, 0.2], height: 1.25*(0.04-landscape/20),  wrapWidth: undefined, ori: 0.0,
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  finish_button_failed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'finish_button', units : undefined, 
    image : 'instruction_images/finish_button.png', mask : undefined,
    ori : 0.0, pos : [0, ((- 0.45-landscape)*height)], size : [(0.1-landscape/3.8)*longside, (0.07-landscape/4.8)*longside],
    //ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_failed = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_failed.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var sitComponents;

//newfull screen


function sitRoutineBegin(snapshot) {
  return async function () {
  
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sit' ---
    t = 0;
    sitClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_sit
    // current position of the mouse:
    mouse_sit.x = [];
    mouse_sit.y = [];
    mouse_sit.leftButton = [];
    mouse_sit.midButton = [];
    mouse_sit.rightButton = [];
    mouse_sit.time = [];
    mouse_sit.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    sitComponents = [];
    sitComponents.push(instruction_sit_text);
    sitComponents.push(next_button_sit);
    sitComponents.push(mouse_sit);
    
    for (const thisComponent of sitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function sitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sit' ---
    // get current time
    t = sitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_sit_text* updates
    if (t >= 0.0 && instruction_sit_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_sit_text.tStart = t;  // (not accounting for frame time here)
      instruction_sit_text.frameNStart = frameN;  // exact frame index
      
      instruction_sit_text.setAutoDraw(true);
    }

    
    // *next_button_sit* updates
    if (t >= 0.0 && next_button_sit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_sit.tStart = t;  // (not accounting for frame time here)
      next_button_sit.frameNStart = frameN;  // exact frame index
      
      next_button_sit.setAutoDraw(true);
    }

    // *mouse_sit* updates
    if (t >= 0.0 && mouse_sit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_sit.tStart = t;  // (not accounting for frame time here)
      mouse_sit.frameNStart = frameN;  // exact frame index
      
      mouse_sit.status = PsychoJS.Status.STARTED;
      mouse_sit.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_sit.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_sit.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_button_sit]) {
            if (obj.contains(mouse_sit)) {
              gotValidClick = true;
              mouse_sit.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_sit.getPos();
          mouse_sit.x.push(_mouseXYs[0]);
          mouse_sit.y.push(_mouseXYs[1]);
          mouse_sit.leftButton.push(_mouseButtons[0]);
          mouse_sit.midButton.push(_mouseButtons[1]);
          mouse_sit.rightButton.push(_mouseButtons[2]);
          mouse_sit.time.push(mouse_sit.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sit' ---
    for (const thisComponent of sitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse_sit.x) {  psychoJS.experiment.addData('mouse_sit.x', mouse_sit.x[0])};
    //if (mouse_sit.y) {  psychoJS.experiment.addData('mouse_sit.y', mouse_sit.y[0])};
    //if (mouse_sit.leftButton) {  psychoJS.experiment.addData('mouse_sit.leftButton', mouse_sit.leftButton[0])};
    //if (mouse_sit.midButton) {  psychoJS.experiment.addData('mouse_sit.midButton', mouse_sit.midButton[0])};
    //if (mouse_sit.rightButton) {  psychoJS.experiment.addData('mouse_sit.rightButton', mouse_sit.rightButton[0])};
    //if (mouse_sit.time) {  psychoJS.experiment.addData('mouse_sit.time', mouse_sit.time[0])};
    //if (mouse_sit.clicked_name) {  psychoJS.experiment.addData('mouse_sit.clicked_name', mouse_sit.clicked_name[0])};
    
    // the Routine "sit" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;


function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
  
   /* 
    //new full screen
    if (height/width < 1.5)
        exitFullscreen();
    */
  
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      // loop number
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      //
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      trialsLoopScheduler.add(continuous_pain_ratingRoutineBegin(snapshot));
      trialsLoopScheduler.add(continuous_pain_ratingRoutineEachFrame());
      trialsLoopScheduler.add(continuous_pain_ratingRoutineEnd(snapshot));
      /*
      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      */
      //do the loop for attn check
      const trials_attnLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_attnLoopBegin(trials_attnLoopScheduler));
      trialsLoopScheduler.add(trials_attnLoopScheduler);
      trialsLoopScheduler.add(trials_attnLoopEnd);

      
      /*const trials_passLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_passLoopBegin(trials_passLoopScheduler));
      trialsLoopScheduler.add(trials_passLoopScheduler);
      trialsLoopScheduler.add(trials_passLoopEnd);
      */

      

      const trials_failLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_failLoopBegin(trials_failLoopScheduler));
      trialsLoopScheduler.add(trials_failLoopScheduler);
      trialsLoopScheduler.add(trials_failLoopEnd);

      
      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      
      
      trialsLoopScheduler.add(continuous_pain_ratingRoutineBegin(snapshot));
      trialsLoopScheduler.add(continuous_pain_ratingRoutineEachFrame());
      trialsLoopScheduler.add(continuous_pain_ratingRoutineEnd(snapshot));
      
      //do the loop for attn check
      const trials_attn_2LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_attn_2LoopBegin(trials_attn_2LoopScheduler));
      trialsLoopScheduler.add(trials_attn_2LoopScheduler);
      trialsLoopScheduler.add(trials_attn_2LoopEnd);

      /*
      const trials_pass_2LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_pass_2LoopBegin(trials_pass_2LoopScheduler));
      trialsLoopScheduler.add(trials_pass_2LoopScheduler);
      trialsLoopScheduler.add(trials_pass_2LoopEnd);
      */

      const trials_fail_2LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_fail_2LoopBegin(trials_fail_2LoopScheduler));
      trialsLoopScheduler.add(trials_fail_2LoopScheduler);
      trialsLoopScheduler.add(trials_fail_2LoopEnd);

      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      

      
      trialsLoopScheduler.add(continuous_pain_ratingRoutineBegin(snapshot));
      trialsLoopScheduler.add(continuous_pain_ratingRoutineEachFrame());
      trialsLoopScheduler.add(continuous_pain_ratingRoutineEnd(snapshot));
      
      //do the loop for attn check
      const trials_attn_3LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_attn_3LoopBegin(trials_attn_3LoopScheduler));
      trialsLoopScheduler.add(trials_attn_3LoopScheduler);
      trialsLoopScheduler.add(trials_attn_3LoopEnd);

      /*
      const trials_pass_3LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_pass_3LoopBegin(trials_pass_3LoopScheduler));
      trialsLoopScheduler.add(trials_pass_3LoopScheduler);
      trialsLoopScheduler.add(trials_pass_3LoopEnd);
      */

      const trials_fail_3LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_fail_3LoopBegin(trials_fail_3LoopScheduler));
      trialsLoopScheduler.add(trials_fail_3LoopScheduler);
      trialsLoopScheduler.add(trials_fail_3LoopEnd);

      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      
      
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


//add trial question loop for instructions
var trials_question;
var failed_question;


function trials_questionLoopBegin(trials_questionLoopScheduler, snapshot) {
    return async function() {

       
    /*
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
*/
  
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials_question = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_question'
      });
      psychoJS.experiment.addLoop(trials_question); // add the loop to the experiment
      currentLoop = trials_question;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_question) {
        snapshot = trials_question.getSnapshot();
        trials_questionLoopScheduler.add(importConditions(snapshot));
        trials_questionLoopScheduler.add(instruction_1RoutineBegin(snapshot));
        trials_questionLoopScheduler.add(instruction_1RoutineEachFrame());
        trials_questionLoopScheduler.add(instruction_1RoutineEnd(snapshot));
        trials_questionLoopScheduler.add(instruction_attnRoutineBegin(snapshot));
        trials_questionLoopScheduler.add(instruction_attnRoutineEachFrame());
        trials_questionLoopScheduler.add(instruction_attnRoutineEnd(snapshot));
        trials_questionLoopScheduler.add(blank1sRoutineBegin(snapshot));
        trials_questionLoopScheduler.add(blank1sRoutineEachFrame());
        trials_questionLoopScheduler.add(blank1sRoutineEnd(snapshot));

        const trials_cont_trial_runLoopScheduler = new Scheduler(psychoJS);
        trials_questionLoopScheduler.add(trials_cont_trial_runLoopBegin(trials_cont_trial_runLoopScheduler));
        trials_questionLoopScheduler.add(trials_cont_trial_runLoopScheduler);
        trials_questionLoopScheduler.add(trials_cont_trial_runLoopEnd);

        if (attn_check_image_trial.contains(mouse_attn_trial)) 
        {
            failed_attn_trial_1 = 0;
        }

        const trials_cont_trial_run_2LoopScheduler = new Scheduler(psychoJS);
        trials_questionLoopScheduler.add(trials_cont_trial_run_2LoopBegin(trials_cont_trial_run_2LoopScheduler));
        trials_questionLoopScheduler.add(trials_cont_trial_run_2LoopScheduler);
        trials_questionLoopScheduler.add(trials_cont_trial_run_2LoopEnd);

        if (attn_check_image_2_trial.contains(mouse_attn_2_trial)) 
        {
            failed_attn_trial_2 = 0;
        }


        const trials_cont_trial_run_3LoopScheduler = new Scheduler(psychoJS);
        trials_questionLoopScheduler.add(trials_cont_trial_run_3LoopBegin(trials_cont_trial_run_3LoopScheduler));
        trials_questionLoopScheduler.add(trials_cont_trial_run_3LoopScheduler);
        trials_questionLoopScheduler.add(trials_cont_trial_run_3LoopEnd);
        
        
        trials_questionLoopScheduler.add(trials_questionLoopEndIteration(trials_questionLoopScheduler, snapshot));
      }

      
      return Scheduler.Event.NEXT;
    }
  }
  
  async function trials_questionLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_question);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    

    return Scheduler.Event.NEXT;
  }

  
  
  function trials_questionLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        if (failed_attn_trial_2 == 0 && failed_attn_trial_1 == 0 || attn_check_image_3_trial.contains(mouse_attn_3_trial)) 
        {
            failed_question = 0;
            trials_question.finished = true;
            scheduler.stop();
        }
        
    
        
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  //add trial run for continuous pain rating (loop)

  var trials_cont_trial_run;



  
  function trials_cont_trial_runLoopBegin(trials_cont_trial_runLoopScheduler, snapshot) {
    return async function() {
    
      
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
      
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials_cont_trial_run = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_cont_trial_run'
      });
      psychoJS.experiment.addLoop(trials_cont_trial_run); // add the loop to the experiment
      currentLoop = trials_cont_trial_run;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_cont_trial_run) {
        snapshot = trials_cont_trial_run.getSnapshot();
        trials_cont_trial_runLoopScheduler.add(importConditions(snapshot));

        trials_cont_trial_runLoopScheduler.add(continuous_pain_rating_trialRoutineBegin(snapshot));
        trials_cont_trial_runLoopScheduler.add(continuous_pain_rating_trialRoutineEachFrame());
        trials_cont_trial_runLoopScheduler.add(continuous_pain_rating_trialRoutineEnd(snapshot));
       
        //do the loop for attn check
        const trials_attn_trial_1LoopScheduler = new Scheduler(psychoJS);
        trials_cont_trial_runLoopScheduler.add(trials_attn_trial_1LoopBegin(trials_attn_trial_1LoopScheduler));
        trials_cont_trial_runLoopScheduler.add(trials_attn_trial_1LoopScheduler);
        trials_cont_trial_runLoopScheduler.add(trials_attn_trial_1LoopEnd);
        
  
        
  
        const trials_redirect_trial_1LoopScheduler = new Scheduler(psychoJS);
        trials_cont_trial_runLoopScheduler.add(trials_redirect_trial_1LoopBegin(trials_redirect_trial_1LoopScheduler));
        trials_cont_trial_runLoopScheduler.add(trials_redirect_trial_1LoopScheduler);
        trials_cont_trial_runLoopScheduler.add(trials_redirect_trial_1LoopEnd);

        
        trials_cont_trial_runLoopScheduler.add(trials_cont_trial_runLoopEndIteration(trials_cont_trial_runLoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
  async function trials_cont_trial_runLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
  function trials_cont_trial_runLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }

  var trials_cont_trial_run_2;



  
  function trials_cont_trial_run_2LoopBegin(trials_cont_trial_run_2LoopScheduler, snapshot) {
    return async function() {
      
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials_cont_trial_run_2 = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_cont_trial_run_2'
      });
      psychoJS.experiment.addLoop(trials_cont_trial_run_2); // add the loop to the experiment
      currentLoop = trials_cont_trial_run_2;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_cont_trial_run_2) {
        snapshot = trials_cont_trial_run_2.getSnapshot();
        trials_cont_trial_run_2LoopScheduler.add(importConditions(snapshot));
        trials_cont_trial_run_2LoopScheduler.add(blank1sRoutineBegin(snapshot));
        trials_cont_trial_run_2LoopScheduler.add(blank1sRoutineEachFrame());
        trials_cont_trial_run_2LoopScheduler.add(blank1sRoutineEnd(snapshot));
        trials_cont_trial_run_2LoopScheduler.add(blank1sRoutineBegin(snapshot));
        trials_cont_trial_run_2LoopScheduler.add(blank1sRoutineEachFrame());
        trials_cont_trial_run_2LoopScheduler.add(blank1sRoutineEnd(snapshot));
        trials_cont_trial_run_2LoopScheduler.add(continuous_pain_rating_trialRoutineBegin(snapshot));
        trials_cont_trial_run_2LoopScheduler.add(continuous_pain_rating_trialRoutineEachFrame());
        trials_cont_trial_run_2LoopScheduler.add(continuous_pain_rating_trialRoutineEnd(snapshot));
        
        //do the loop for attn check
        const trials_attn_trial_2LoopScheduler = new Scheduler(psychoJS);
        trials_cont_trial_run_2LoopScheduler.add(trials_attn_trial_2LoopBegin(trials_attn_trial_2LoopScheduler));
        trials_cont_trial_run_2LoopScheduler.add(trials_attn_trial_2LoopScheduler);
        trials_cont_trial_run_2LoopScheduler.add(trials_attn_trial_2LoopEnd);
        
  
        
  
        const trials_redirect_trial_2LoopScheduler = new Scheduler(psychoJS);
        trials_cont_trial_run_2LoopScheduler.add(trials_redirect_trial_2LoopBegin(trials_redirect_trial_2LoopScheduler));
        trials_cont_trial_run_2LoopScheduler.add(trials_redirect_trial_2LoopScheduler);
        trials_cont_trial_run_2LoopScheduler.add(trials_redirect_trial_2LoopEnd);
  
        
        trials_cont_trial_run_2LoopScheduler.add(trials_cont_trial_run_2LoopEndIteration(trials_cont_trial_run_2LoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
  async function trials_cont_trial_run_2LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
  function trials_cont_trial_run_2LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }

  var trials_cont_trial_run_3;



  
  function trials_cont_trial_run_3LoopBegin(trials_cont_trial_run_3LoopScheduler, snapshot) {
    return async function() {
    
      
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials_cont_trial_run_3 = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_cont_trial_run_3'
      });
      psychoJS.experiment.addLoop(trials_cont_trial_run_3); // add the loop to the experiment
      currentLoop = trials_cont_trial_run_3;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_cont_trial_run_3) {
        snapshot = trials_cont_trial_run_3.getSnapshot();
        trials_cont_trial_run_3LoopScheduler.add(importConditions(snapshot));
        
       
        //do the loop for attn check
        const trials_attn_trial_3LoopScheduler = new Scheduler(psychoJS);
        trials_cont_trial_run_3LoopScheduler.add(trials_attn_trial_3LoopBegin(trials_attn_trial_3LoopScheduler));
        trials_cont_trial_run_3LoopScheduler.add(trials_attn_trial_3LoopScheduler);
        trials_cont_trial_run_3LoopScheduler.add(trials_attn_trial_3LoopEnd);
        
  
        
  
        const trials_redirect_trial_3LoopScheduler = new Scheduler(psychoJS);
        trials_cont_trial_run_3LoopScheduler.add(trials_redirect_trial_3LoopBegin(trials_redirect_trial_3LoopScheduler));
        trials_cont_trial_run_3LoopScheduler.add(trials_redirect_trial_3LoopScheduler);
        trials_cont_trial_run_3LoopScheduler.add(trials_redirect_trial_3LoopEnd);
  
        
        trials_cont_trial_run_3LoopScheduler.add(trials_cont_trial_run_3LoopEndIteration(trials_cont_trial_run_3LoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
  async function trials_cont_trial_run_3LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
  function trials_cont_trial_run_3LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
      
    };
  }


//add trial attn loop for instructions
var trials_attn_trial_1;
var failed_attn_trial_1;

function trials_attn_trial_1LoopBegin(trials_attn_trial_1LoopScheduler, snapshot) {
    return async function() {

       
    /*
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
*/
    
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials_attn_trial_1 = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_attn_trial_1'
      });
      psychoJS.experiment.addLoop(trials_attn_trial_1); // add the loop to the experiment
      currentLoop = trials_attn_trial_1;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_attn_trial_1) {
        snapshot = trials_attn_trial_1.getSnapshot();
        trials_attn_trial_1LoopScheduler.add(importConditions(snapshot));
        
        trials_attn_trial_1LoopScheduler.add(attn_check_trialRoutineBegin(snapshot));
        trials_attn_trial_1LoopScheduler.add(attn_check_trialRoutineEachFrame());
        trials_attn_trial_1LoopScheduler.add(attn_check_trialRoutineEnd(snapshot));
        trials_attn_trial_1LoopScheduler.add(trials_attn_trial_1LoopEndIteration(trials_attn_trial_1LoopScheduler, snapshot));
      }

      
      return Scheduler.Event.NEXT;
    }
  }
  
  async function trials_attn_trial_1LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_attn_trial_1);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    

    return Scheduler.Event.NEXT;
  }

  
  
  function trials_attn_trial_1LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        if (attn_check_image_trial.contains(mouse_attn_trial)) 
        {
            failed_attn_trial_1 = 0;
            trials_attn_trial_1.finished = true;
            scheduler.stop();
        }
        
    
        
      return Scheduler.Event.NEXT;
      }
    };
  }

  var trials_attn_trial_2;
  var failed_attn_trial_2;
  
  function trials_attn_trial_2LoopBegin(trials_attn_trial_2LoopScheduler, snapshot) {
      return async function() {
  
         
    
      
      
        TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
        
        // set up handler to look after randomisation of conditions etc
        trials_attn_trial_2 = new TrialHandler({
          psychoJS: psychoJS,
          // loop number
          nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
          //
          extraInfo: expInfo, originPath: undefined,
          trialList: undefined,
          seed: undefined, name: 'trials_attn_trial_2'
        });
        psychoJS.experiment.addLoop(trials_attn_trial_2); // add the loop to the experiment
        currentLoop = trials_attn_trial_2;  // we're now the current loop
        
        // Schedule all the trials in the trialList:
        for (const thisTrial of trials_attn_trial_2) {
          snapshot = trials_attn_trial_2.getSnapshot();
          trials_attn_trial_2LoopScheduler.add(importConditions(snapshot));
          
          trials_attn_trial_2LoopScheduler.add(attn_check_2_trialRoutineBegin(snapshot));
          trials_attn_trial_2LoopScheduler.add(attn_check_2_trialRoutineEachFrame());
          trials_attn_trial_2LoopScheduler.add(attn_check_2_trialRoutineEnd(snapshot));
          
          const trials_redirect_trial_2LoopScheduler = new Scheduler(psychoJS);
          trials_attn_trial_2LoopScheduler.add(trials_redirect_trial_2LoopBegin(trials_redirect_trial_2LoopScheduler));
          trials_attn_trial_2LoopScheduler.add(trials_redirect_trial_2LoopScheduler);
          trials_attn_trial_2LoopScheduler.add(trials_redirect_trial_2LoopEnd);
          
          trials_attn_trial_2LoopScheduler.add(trials_attn_trial_2LoopEndIteration(trials_attn_trial_2LoopScheduler, snapshot));
        }
  
        
        return Scheduler.Event.NEXT;
      }
    }
    
    async function trials_attn_trial_2LoopEnd() {
      // terminate loop
      psychoJS.experiment.removeLoop(trials_attn_trial_2);
      // update the current loop from the ExperimentHandler
      if (psychoJS.experiment._unfinishedLoops.length>0)
        currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
      else
        currentLoop = psychoJS.experiment;  // so we use addData from the experiment
      
  
      return Scheduler.Event.NEXT;
    }
  
    
    
    function trials_attn_trial_2LoopEndIteration(scheduler, snapshot) {
      // ------Prepare for next entry------
      return async function () {
        if (typeof snapshot !== 'undefined') {
          // ------Check if user ended loop early------
          if (snapshot.finished) {
            // Check for and save orphaned data
            if (psychoJS.experiment.isEntryEmpty()) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            scheduler.stop();
          } else {
            psychoJS.experiment.nextEntry(snapshot);
          }
          if (attn_check_image_2_trial.contains(mouse_attn_2_trial)) 
          {
              failed_attn_trial_2 = 0;
              trials_attn_trial_2.finished = true;
              scheduler.stop();
          }
          
      
          
        return Scheduler.Event.NEXT;
        }
      };
    }

    var trials_attn_trial_3;
  var failed_attn_trial_3;
  
  function trials_attn_trial_3LoopBegin(trials_attn_trial_3LoopScheduler, snapshot) {
      return async function() {
  
         
    
      
      
        TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
        
        // set up handler to look after randomisation of conditions etc
        trials_attn_trial_3 = new TrialHandler({
          psychoJS: psychoJS,
          // loop number
          nReps: failed_attn_trial_1 != 0 && failed_attn_trial_2 == 0, method: TrialHandler.Method.SEQUENTIAL,
          //
          extraInfo: expInfo, originPath: undefined,
          trialList: undefined,
          seed: undefined, name: 'trials_attn_trial_3'
        });
        psychoJS.experiment.addLoop(trials_attn_trial_3); // add the loop to the experiment
        currentLoop = trials_attn_trial_3;  // we're now the current loop
        
        // Schedule all the trials in the trialList:
        for (const thisTrial of trials_attn_trial_3) {
          snapshot = trials_attn_trial_3.getSnapshot();
          trials_attn_trial_3LoopScheduler.add(importConditions(snapshot));
          trials_attn_trial_3LoopScheduler.add(blank1sRoutineBegin(snapshot));
          trials_attn_trial_3LoopScheduler.add(blank1sRoutineEachFrame());
          trials_attn_trial_3LoopScheduler.add(blank1sRoutineEnd(snapshot));
          trials_attn_trial_3LoopScheduler.add(blank1sRoutineBegin(snapshot));
          trials_attn_trial_3LoopScheduler.add(blank1sRoutineEachFrame());
          trials_attn_trial_3LoopScheduler.add(blank1sRoutineEnd(snapshot));
          trials_attn_trial_3LoopScheduler.add(continuous_pain_rating_trialRoutineBegin(snapshot));
          trials_attn_trial_3LoopScheduler.add(continuous_pain_rating_trialRoutineEachFrame());
          trials_attn_trial_3LoopScheduler.add(continuous_pain_rating_trialRoutineEnd(snapshot));
          trials_attn_trial_3LoopScheduler.add(attn_check_3_trialRoutineBegin(snapshot));
          trials_attn_trial_3LoopScheduler.add(attn_check_3_trialRoutineEachFrame());
          trials_attn_trial_3LoopScheduler.add(attn_check_3_trialRoutineEnd(snapshot));
          
          const trials_redirect_trial_3LoopScheduler = new Scheduler(psychoJS);
          trials_attn_trial_3LoopScheduler.add(trials_redirect_trial_3LoopBegin(trials_redirect_trial_3LoopScheduler));
          trials_attn_trial_3LoopScheduler.add(trials_redirect_trial_3LoopScheduler);
          trials_attn_trial_3LoopScheduler.add(trials_redirect_trial_3LoopEnd);
          
          trials_attn_trial_3LoopScheduler.add(trials_attn_trial_3LoopEndIteration(trials_attn_trial_3LoopScheduler, snapshot));
        }
  
        
        return Scheduler.Event.NEXT;
      }
    }
    
    async function trials_attn_trial_3LoopEnd() {
      // terminate loop
      psychoJS.experiment.removeLoop(trials_attn_trial_3);
      // update the current loop from the ExperimentHandler
      if (psychoJS.experiment._unfinishedLoops.length>0)
        currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
      else
        currentLoop = psychoJS.experiment;  // so we use addData from the experiment
      
  
      return Scheduler.Event.NEXT;
    }
  
    
    
    function trials_attn_trial_3LoopEndIteration(scheduler, snapshot) {
      // ------Prepare for next entry------
      return async function () {
        if (typeof snapshot !== 'undefined') {
          // ------Check if user ended loop early------
          if (snapshot.finished) {
            // Check for and save orphaned data
            if (psychoJS.experiment.isEntryEmpty()) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            scheduler.stop();
          } else {
            psychoJS.experiment.nextEntry(snapshot);
          }
          if (attn_check_image_3_trial.contains(mouse_attn_3_trial)) 
          {
              failed_attn_trial_3 = 0;
              trials_attn_trial_3.finished = true;
              scheduler.stop();
          }
          
      
          
        return Scheduler.Event.NEXT;
        }
      };
    }


    

var trials_attn;
var failed_attn;

function trials_attnLoopBegin(trials_attnLoopScheduler, snapshot) {
    return async function() {

       
    /*
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
*/
    
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials_attn = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_attn'
      });
      psychoJS.experiment.addLoop(trials_attn); // add the loop to the experiment
      currentLoop = trials_attn;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_attn) {
        snapshot = trials_attn.getSnapshot();
        trials_attnLoopScheduler.add(importConditions(snapshot));
        
        trials_attnLoopScheduler.add(attn_checkRoutineBegin(snapshot));
        trials_attnLoopScheduler.add(attn_checkRoutineEachFrame());
        trials_attnLoopScheduler.add(attn_checkRoutineEnd(snapshot));
        /*
        const trials_redirectLoopScheduler = new Scheduler(psychoJS);
        trials_attnLoopScheduler.add(trials_redirectLoopBegin(trials_redirectLoopScheduler));
        trials_attnLoopScheduler.add(trials_redirectLoopScheduler);
        trials_attnLoopScheduler.add(trials_redirectLoopEnd);
        */
        trials_attnLoopScheduler.add(trials_attnLoopEndIteration(trials_attnLoopScheduler, snapshot));
      }

      
      return Scheduler.Event.NEXT;
    }
  }
  
  async function trials_attnLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_attn);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    

    return Scheduler.Event.NEXT;
  }

  
  
  function trials_attnLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        if (attn_check_image.contains(mouse_attn)) 
        {
            failed_attn = 0;
            trials_attn.finished = true;
            scheduler.stop();
        }
        
    
        
      return Scheduler.Event.NEXT;
      }
    };
  }

  // second attn loop 

  var trials_attn_2;
  var failed_attn_2;

  function trials_attn_2LoopBegin(trials_attn_2LoopScheduler, snapshot) {
    return async function() {

       
    /*
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
*/
    
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials_attn_2 = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_attn_2'
      });
      psychoJS.experiment.addLoop(trials_attn_2); // add the loop to the experiment
      currentLoop = trials_attn_2;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_attn_2) {
        snapshot = trials_attn_2.getSnapshot();
        trials_attn_2LoopScheduler.add(importConditions(snapshot));
        
        trials_attn_2LoopScheduler.add(attn_check_2RoutineBegin(snapshot));
        trials_attn_2LoopScheduler.add(attn_check_2RoutineEachFrame());
        trials_attn_2LoopScheduler.add(attn_check_2RoutineEnd(snapshot));
        trials_attn_2LoopScheduler.add(trials_attn_2LoopEndIteration(trials_attn_2LoopScheduler, snapshot));
      }

      
      return Scheduler.Event.NEXT;
    }
  }
  
  async function trials_attn_2LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_attn_2);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    

    return Scheduler.Event.NEXT;
  }

  
  
  function trials_attn_2LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        if (attn_check_image_2.contains(mouse_attn_2)) 
        {
            failed_attn_2 = 0;
            trials_attn_2.finished = true;
            scheduler.stop();
        }
        
    
        
      return Scheduler.Event.NEXT;
      }
    };
  }

  // third attn loop 

  var trials_attn_3;
  var failed_attn_3;

  function trials_attn_3LoopBegin(trials_attn_3LoopScheduler, snapshot) {
    return async function() {

       
    /*
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
*/
    
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials_attn_3 = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_attn_3'
      });
      psychoJS.experiment.addLoop(trials_attn_3); // add the loop to the experiment
      currentLoop = trials_attn_3;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_attn_3) {
        snapshot = trials_attn_3.getSnapshot();
        trials_attn_3LoopScheduler.add(importConditions(snapshot));
        
        trials_attn_3LoopScheduler.add(attn_check_3RoutineBegin(snapshot));
        trials_attn_3LoopScheduler.add(attn_check_3RoutineEachFrame());
        trials_attn_3LoopScheduler.add(attn_check_3RoutineEnd(snapshot));
        /*
        const trials_redirect_3LoopScheduler = new Scheduler(psychoJS);
        trials_attn_3LoopScheduler.add(trials_redirect_3LoopBegin(trials_redirect_3LoopScheduler));
        trials_attn_3LoopScheduler.add(trials_redirect_3LoopScheduler);
        trials_attn_3LoopScheduler.add(trials_redirect_3LoopEnd);
        */
        trials_attn_3LoopScheduler.add(trials_attn_3LoopEndIteration(trials_attn_3LoopScheduler, snapshot));
      }

      
      return Scheduler.Event.NEXT;
    }
  }
  
  async function trials_attn_3LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_attn_3);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    

    return Scheduler.Event.NEXT;
  }

  
  
  function trials_attn_3LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        if (attn_check_image_3.contains(mouse_attn_3)) 
        {
            failed_attn_3 = 0;
            trials_attn_3.finished = true;
            scheduler.stop();
        }
        
    
        
      return Scheduler.Event.NEXT;
      }
    };
  }

  // add dummy condition loop showing you have failed you will be redirected

/*
var trials_redirect_predict;


function trials_redirect_predictLoopBegin(trials_redirect_predictLoopScheduler, snapshot) {
    return async function() {
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      if (pain_predict_slider.getRating() > 0) 
        {
            failed_predict = 0;
        }
      // set up handler to look after randomisation of conditions etc
      trials_redirect_predict = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: failed_predict != 0, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_redirect_predict'
      });
      psychoJS.experiment.addLoop(trials_redirect_predict); // add the loop to the experiment
      currentLoop = trials_redirect_predict;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_redirect_predict) {
        snapshot = trials_redirect_predict.getSnapshot();
        trials_redirect_predictLoopScheduler.add(importConditions(snapshot));
        trials_redirect_predictLoopScheduler.add(redirect_screenRoutineBegin(snapshot));
        trials_redirect_predictLoopScheduler.add(redirect_screenRoutineEachFrame());
        trials_redirect_predictLoopScheduler.add(redirect_screenRoutineEnd(snapshot));
        trials_redirect_predictLoopScheduler.add(trials_redirect_predictLoopEndIteration(trials_redirect_predictLoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
  async function trials_redirect_predictLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_redirect_predict);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }

  
  
  function trials_redirect_predictLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        
      return Scheduler.Event.NEXT;
      }
    };
  }
  */


  var trials_redirect_trial_1;


  function trials_redirect_trial_1LoopBegin(trials_redirect_trial_1LoopScheduler, snapshot) {
      return async function() {
      

        TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
        if (attn_check_image_trial.contains(mouse_attn_trial)) 
        {
            failed_attn_trial_1 = 0;
        }
        // set up handler to look after randomisation of conditions etc
        trials_redirect_trial_1 = new TrialHandler({
          psychoJS: psychoJS,
          // loop number
          nReps: failed_attn_trial_1 != 0, method: TrialHandler.Method.SEQUENTIAL,
          //
          extraInfo: expInfo, originPath: undefined,
          trialList: undefined,
          seed: undefined, name: 'trials_redirect_trial_1'
        });
        psychoJS.experiment.addLoop(trials_redirect_trial_1); // add the loop to the experiment
        currentLoop = trials_redirect_trial_1;  // we're now the current loop
        
        // Schedule all the trials in the trialList:
        for (const thisTrial of trials_redirect_trial_1) {
          snapshot = trials_redirect_trial_1.getSnapshot();
          trials_redirect_trial_1LoopScheduler.add(importConditions(snapshot));
          trials_redirect_trial_1LoopScheduler.add(redirect_screenRoutineBegin(snapshot));
          trials_redirect_trial_1LoopScheduler.add(redirect_screenRoutineEachFrame());
          trials_redirect_trial_1LoopScheduler.add(redirect_screenRoutineEnd(snapshot));
          trials_redirect_trial_1LoopScheduler.add(instruction_1RoutineBegin(snapshot));
          trials_redirect_trial_1LoopScheduler.add(instruction_1RoutineEachFrame());
          trials_redirect_trial_1LoopScheduler.add(instruction_1RoutineEnd(snapshot));
          trials_redirect_trial_1LoopScheduler.add(instruction_attnRoutineBegin(snapshot));
          trials_redirect_trial_1LoopScheduler.add(instruction_attnRoutineEachFrame());
          trials_redirect_trial_1LoopScheduler.add(instruction_attnRoutineEnd(snapshot));
          trials_redirect_trial_1LoopScheduler.add(trials_redirect_trial_1LoopEndIteration(trials_redirect_trial_1LoopScheduler, snapshot));
        }
        
        return Scheduler.Event.NEXT;
      }
    }
    
    
    async function trials_redirect_trial_1LoopEnd() {
      // terminate loop
      psychoJS.experiment.removeLoop(trials_redirect_trial_1);
      // update the current loop from the ExperimentHandler
      if (psychoJS.experiment._unfinishedLoops.length>0)
        currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
      else
        currentLoop = psychoJS.experiment;  // so we use addData from the experiment
      return Scheduler.Event.NEXT;
    }
  
    
    
    function trials_redirect_trial_1LoopEndIteration(scheduler, snapshot) {
      // ------Prepare for next entry------
      return async function () {
        if (typeof snapshot !== 'undefined') {
          // ------Check if user ended loop early------
          if (snapshot.finished) {
            // Check for and save orphaned data
            if (psychoJS.experiment.isEntryEmpty()) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            scheduler.stop();
          } else {
            psychoJS.experiment.nextEntry(snapshot);
          }
          
        return Scheduler.Event.NEXT;
        }
      };
    }

    var trials_redirect_trial_2;


  function trials_redirect_trial_2LoopBegin(trials_redirect_trial_2LoopScheduler, snapshot) {
      return async function() {
      

        TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
        if (attn_check_image_2_trial.contains(mouse_attn_2_trial)) 
        {
            failed_attn_trial_2 = 0;
        }
        // set up handler to look after randomisation of conditions etc
        trials_redirect_trial_2 = new TrialHandler({
          psychoJS: psychoJS,
          // loop number
          nReps: failed_attn_trial_2 != 0, method: TrialHandler.Method.SEQUENTIAL,
          //
          extraInfo: expInfo, originPath: undefined,
          trialList: undefined,
          seed: undefined, name: 'trials_redirect_trial_2'
        });
        psychoJS.experiment.addLoop(trials_redirect_trial_2); // add the loop to the experiment
        currentLoop = trials_redirect_trial_2;  // we're now the current loop
        
        // Schedule all the trials in the trialList:
        for (const thisTrial of trials_redirect_trial_2) {
          snapshot = trials_redirect_trial_2.getSnapshot();
          trials_redirect_trial_2LoopScheduler.add(importConditions(snapshot));
          trials_redirect_trial_2LoopScheduler.add(redirect_screenRoutineBegin(snapshot));
          trials_redirect_trial_2LoopScheduler.add(redirect_screenRoutineEachFrame());
          trials_redirect_trial_2LoopScheduler.add(redirect_screenRoutineEnd(snapshot));
          trials_redirect_trial_2LoopScheduler.add(trials_redirect_trial_2LoopEndIteration(trials_redirect_trial_2LoopScheduler, snapshot));
        }
        
        return Scheduler.Event.NEXT;
      }
    }
    
    
    async function trials_redirect_trial_2LoopEnd() {
      // terminate loop
      psychoJS.experiment.removeLoop(trials_redirect_trial_2);
      // update the current loop from the ExperimentHandler
      if (psychoJS.experiment._unfinishedLoops.length>0)
        currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
      else
        currentLoop = psychoJS.experiment;  // so we use addData from the experiment
      return Scheduler.Event.NEXT;
    }
  
    
    
    function trials_redirect_trial_2LoopEndIteration(scheduler, snapshot) {
      // ------Prepare for next entry------
      return async function () {
        if (typeof snapshot !== 'undefined') {
          // ------Check if user ended loop early------
          if (snapshot.finished) {
            // Check for and save orphaned data
            if (psychoJS.experiment.isEntryEmpty()) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            scheduler.stop();
          } else {
            psychoJS.experiment.nextEntry(snapshot);
          }
          
        return Scheduler.Event.NEXT;
        }
      };
    }

    var trials_redirect_trial_3;


  function trials_redirect_trial_3LoopBegin(trials_redirect_trial_3LoopScheduler, snapshot) {
      return async function() {
      

        TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
        if (attn_check_image_3_trial.contains(mouse_attn_3_trial)) 
        {
            failed_attn_trial_3 = 0;
        }
        // set up handler to look after randomisation of conditions etc
        trials_redirect_trial_3 = new TrialHandler({
          psychoJS: psychoJS,
          // loop number
          nReps: failed_attn_trial_3 != 0 && failed_attn_trial_1 != 0 && failed_attn_trial_2 == 0, method: TrialHandler.Method.SEQUENTIAL,
          //
          extraInfo: expInfo, originPath: undefined,
          trialList: undefined,
          seed: undefined, name: 'trials_redirect_trial_3'
        });
        psychoJS.experiment.addLoop(trials_redirect_trial_3); // add the loop to the experiment
        currentLoop = trials_redirect_trial_3;  // we're now the current loop
        
        // Schedule all the trials in the trialList:
        for (const thisTrial of trials_redirect_trial_3) {
          snapshot = trials_redirect_trial_3.getSnapshot();
          trials_redirect_trial_3LoopScheduler.add(importConditions(snapshot));
          trials_redirect_trial_3LoopScheduler.add(redirect_screenRoutineBegin(snapshot));
          trials_redirect_trial_3LoopScheduler.add(redirect_screenRoutineEachFrame());
          trials_redirect_trial_3LoopScheduler.add(redirect_screenRoutineEnd(snapshot));
          trials_redirect_trial_3LoopScheduler.add(trials_redirect_trial_3LoopEndIteration(trials_redirect_trial_3LoopScheduler, snapshot));
        }
        
        return Scheduler.Event.NEXT;
      }
    }
    
    
    async function trials_redirect_trial_3LoopEnd() {
      // terminate loop
      psychoJS.experiment.removeLoop(trials_redirect_trial_3);
      // update the current loop from the ExperimentHandler
      if (psychoJS.experiment._unfinishedLoops.length>0)
        currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
      else
        currentLoop = psychoJS.experiment;  // so we use addData from the experiment
      return Scheduler.Event.NEXT;
    }
  
    
    
    function trials_redirect_trial_3LoopEndIteration(scheduler, snapshot) {
      // ------Prepare for next entry------
      return async function () {
        if (typeof snapshot !== 'undefined') {
          // ------Check if user ended loop early------
          if (snapshot.finished) {
            // Check for and save orphaned data
            if (psychoJS.experiment.isEntryEmpty()) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            scheduler.stop();
          } else {
            psychoJS.experiment.nextEntry(snapshot);
          }
          
        return Scheduler.Event.NEXT;
        }
      };
    }

   /* 
    var trials_redirect_3;


    function trials_redirect_3LoopBegin(trials_redirect_3LoopScheduler, snapshot) {
        return async function() {
        
       
        
          TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
          if (attn_check_image_3.contains(mouse_attn_3)) 
            {
                failed_attn_3 = 0;
            }
          // set up handler to look after randomisation of conditions etc
          trials_redirect_3 = new TrialHandler({
            psychoJS: psychoJS,
            // loop number
            nReps: failed_attn_3 != 0, method: TrialHandler.Method.SEQUENTIAL,
            //
            extraInfo: expInfo, originPath: undefined,
            trialList: undefined,
            seed: undefined, name: 'trials_redirect_3'
          });
          psychoJS.experiment.addLoop(trials_redirect_3); // add the loop to the experiment
          currentLoop = trials_redirect_3;  // we're now the current loop
          
          // Schedule all the trials in the trialList:
          for (const thisTrial of trials_redirect_3) {
            snapshot = trials_redirect_3.getSnapshot();
            trials_redirect_3LoopScheduler.add(importConditions(snapshot));
            trials_redirect_3LoopScheduler.add(redirect_screenRoutineBegin(snapshot));
            trials_redirect_3LoopScheduler.add(redirect_screenRoutineEachFrame());
            trials_redirect_3LoopScheduler.add(redirect_screenRoutineEnd(snapshot));
            trials_redirect_3LoopScheduler.add(trials_redirect_3LoopEndIteration(trials_redirect_3LoopScheduler, snapshot));
          }
          
          return Scheduler.Event.NEXT;
        }
      }
      
      
      async function trials_redirect_3LoopEnd() {
        // terminate loop
        psychoJS.experiment.removeLoop(trials_redirect_3);
        // update the current loop from the ExperimentHandler
        if (psychoJS.experiment._unfinishedLoops.length>0)
          currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
        else
          currentLoop = psychoJS.experiment;  // so we use addData from the experiment
        return Scheduler.Event.NEXT;
      }
    
      
      
      function trials_redirect_3LoopEndIteration(scheduler, snapshot) {
        // ------Prepare for next entry------
        return async function () {
          if (typeof snapshot !== 'undefined') {
            // ------Check if user ended loop early------
            if (snapshot.finished) {
              // Check for and save orphaned data
              if (psychoJS.experiment.isEntryEmpty()) {
                psychoJS.experiment.nextEntry(snapshot);
              }
              scheduler.stop();
            } else {
              psychoJS.experiment.nextEntry(snapshot);
            }
            
          return Scheduler.Event.NEXT;
          }
        };
      }
  */


//add dummy condition loop for passing the quiz

var trials_pass_2;

function trials_pass_2LoopBegin(trials_pass_2LoopScheduler, snapshot) {
    return async function() {
    
        /*
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
          */
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      if (attn_check_image_2.contains(mouse_attn_2)) 
        {
            failed_attn_2 = 0;
        }
      // set up handler to look after randomisation of conditions etc
      trials_pass_2 = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: failed_attn_2 == 0, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_pass_2'
      });
      psychoJS.experiment.addLoop(trials_pass_2); // add the loop to the experiment
      currentLoop = trials_pass_2;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_pass_2) {
        snapshot = trials_pass_2.getSnapshot();
        
        trials_pass_2LoopScheduler.add(importConditions(snapshot));
        trials_pass_2LoopScheduler.add(pass_screenRoutineBegin(snapshot));
        trials_pass_2LoopScheduler.add(pass_screenRoutineEachFrame());
        trials_pass_2LoopScheduler.add(pass_screenRoutineEnd(snapshot));
        trials_pass_2LoopScheduler.add(trials_pass_2LoopEndIteration(trials_pass_2LoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
  async function trials_pass_2LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_pass_2);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
  function trials_pass_2LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        
      return Scheduler.Event.NEXT;
      }
    };
  }
/*
  var trials_pass;

  function trials_passLoopBegin(trials_passLoopScheduler, snapshot) {
      return async function() {
      
    
      
        TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
        if (attn_check_image_2.contains(mouse_attn_2)) 
          {
              failed_question = 0;
          }
        // set up handler to look after randomisation of conditions etc
        trials_pass = new TrialHandler({
          psychoJS: psychoJS,
          // loop number
          nReps: failed_question == 0, method: TrialHandler.Method.SEQUENTIAL,
          //
          extraInfo: expInfo, originPath: undefined,
          trialList: undefined,
          seed: undefined, name: 'trials_pass'
        });
        psychoJS.experiment.addLoop(trials_pass); // add the loop to the experiment
        currentLoop = trials_pass;  // we're now the current loop
        
        // Schedule all the trials in the trialList:
        for (const thisTrial of trials_pass) {
          snapshot = trials_pass.getSnapshot();
          //trials_passLoopScheduler.add(blank1sRoutineBegin(snapshot));
          //trials_passLoopScheduler.add(blank1sRoutineEachFrame());
          //trials_passLoopScheduler.add(blank1sRoutineEnd(snapshot));
          trials_passLoopScheduler.add(importConditions(snapshot));
          trials_passLoopScheduler.add(pass_screenRoutineBegin(snapshot));
          trials_passLoopScheduler.add(pass_screenRoutineEachFrame());
          trials_passLoopScheduler.add(pass_screenRoutineEnd(snapshot));
          trials_passLoopScheduler.add(trials_passLoopEndIteration(trials_passLoopScheduler, snapshot));
        }
        
        return Scheduler.Event.NEXT;
      }
    }
    
    
    async function trials_passLoopEnd() {
      // terminate loop
      psychoJS.experiment.removeLoop(trials_pass);
      // update the current loop from the ExperimentHandler
      if (psychoJS.experiment._unfinishedLoops.length>0)
        currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
      else
        currentLoop = psychoJS.experiment;  // so we use addData from the experiment
      return Scheduler.Event.NEXT;
    }
    
    
    function trials_passLoopEndIteration(scheduler, snapshot) {
      // ------Prepare for next entry------
      return async function () {
        if (typeof snapshot !== 'undefined') {
          // ------Check if user ended loop early------
          if (snapshot.finished) {
            // Check for and save orphaned data
            if (psychoJS.experiment.isEntryEmpty()) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            scheduler.stop();
          } else {
            psychoJS.experiment.nextEntry(snapshot);
          }
          
        return Scheduler.Event.NEXT;
        }
      };
    }
*/

    var trials_pass_3;

function trials_pass_3LoopBegin(trials_pass_3LoopScheduler, snapshot) {
    return async function() {
    
        /*
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
          */
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      if (attn_check_image_3.contains(mouse_attn_3)) 
        {
            failed_attn_3 = 0;
        }
      // set up handler to look after randomisation of conditions etc
      trials_pass_3 = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: failed_attn_3 == 0, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_pass_3'
      });
      psychoJS.experiment.addLoop(trials_pass_3); // add the loop to the experiment
      currentLoop = trials_pass_3;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_pass_3) {
        snapshot = trials_pass_3.getSnapshot();
        //trials_pass_3LoopScheduler.add(blank1sRoutineBegin(snapshot));
        //trials_pass_3LoopScheduler.add(blank1sRoutineEachFrame());
        //trials_pass_3LoopScheduler.add(blank1sRoutineEnd(snapshot));
        trials_pass_3LoopScheduler.add(importConditions(snapshot));
        trials_pass_3LoopScheduler.add(pass_screenRoutineBegin(snapshot));
        trials_pass_3LoopScheduler.add(pass_screenRoutineEachFrame());
        trials_pass_3LoopScheduler.add(pass_screenRoutineEnd(snapshot));
        trials_pass_3LoopScheduler.add(trials_pass_3LoopEndIteration(trials_pass_3LoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
  async function trials_pass_3LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_pass_3);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
  function trials_pass_3LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        
      return Scheduler.Event.NEXT;
      }
    };
  }


  var trials_pass_quiz;

function trials_pass_quizLoopBegin(trials_pass_quizLoopScheduler, snapshot) {
    return async function() {
    
        /*
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
          */
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      if (attn_check_image_2.contains(mouse_attn_2)) 
          {
              failed_question = 0;
          }
      // set up handler to look after randomisation of conditions etc
      trials_pass_quiz = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: failed_question == 0, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_pass_quiz'
      });
      psychoJS.experiment.addLoop(trials_pass_quiz); // add the loop to the experiment
      currentLoop = trials_pass_quiz;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_pass_quiz) {
        snapshot = trials_pass_quiz.getSnapshot();
        trials_pass_quizLoopScheduler.add(blank1sRoutineBegin(snapshot));
        trials_pass_quizLoopScheduler.add(blank1sRoutineEachFrame());
        trials_pass_quizLoopScheduler.add(blank1sRoutineEnd(snapshot));
        trials_pass_quizLoopScheduler.add(pass_screenRoutineBegin(snapshot));
        trials_pass_quizLoopScheduler.add(pass_screenRoutineEachFrame());
        trials_pass_quizLoopScheduler.add(pass_screenRoutineEnd(snapshot));
        trials_pass_quizLoopScheduler.add(trials_pass_quizLoopEndIteration(trials_pass_quizLoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
  async function trials_pass_quizLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_pass_quiz);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
  function trials_pass_quizLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        
      return Scheduler.Event.NEXT;
      }
    };
  }

//add dummy condition loop for failing the quiz
var trials_fail;

function trials_failLoopBegin(trials_failLoopScheduler, snapshot) {
    return async function() {
    /*
      //new full screen
      if (height/width < 1.5)
          exitFullscreen();
          */
    
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      if (attn_check_image.contains(mouse_attn)) 
        {
            failed_attn = 0;
        }
      // set up handler to look after randomisation of conditions etc
      trials_fail = new TrialHandler({
        psychoJS: psychoJS,
        // loop number
        nReps: failed_attn != 0, method: TrialHandler.Method.SEQUENTIAL,
        //
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'trials_fail'
      });
      psychoJS.experiment.addLoop(trials_fail); // add the loop to the experiment
      currentLoop = trials_fail;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials_fail) {
        snapshot = trials_fail.getSnapshot();
        trials_failLoopScheduler.add(blank1sRoutineBegin(snapshot));
        trials_failLoopScheduler.add(blank1sRoutineEachFrame());
        trials_failLoopScheduler.add(blank1sRoutineEnd(snapshot));
        trials_failLoopScheduler.add(importConditions(snapshot));
        trials_failLoopScheduler.add(end_failedRoutineBegin(snapshot));
        trials_failLoopScheduler.add(end_failedRoutineEachFrame());
        trials_failLoopScheduler.add(end_failedRoutineEnd(snapshot));
        trials_failLoopScheduler.add(trials_failLoopEndIteration(trials_failLoopScheduler, snapshot));
        trials_failLoopScheduler.add(quitPsychoJS, '', true);
        psychoJS.setRedirectUrls('https://www.google.com');
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
  async function trials_failLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_fail);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
  function trials_failLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
        
      return Scheduler.Event.NEXT;
      }
    };
  }


  var trials_fail_2;

  function trials_fail_2LoopBegin(trials_fail_2LoopScheduler, snapshot) {
      return async function() {
      /*
        //new full screen
        if (height/width < 1.5)
            exitFullscreen();
            */
      
        TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
        if (attn_check_image_2.contains(mouse_attn_2)) 
          {
              failed_attn_2 = 0;
          }
        // set up handler to look after randomisation of conditions etc
        trials_fail_2 = new TrialHandler({
          psychoJS: psychoJS,
          // loop number
          nReps: failed_attn_2 != 0, method: TrialHandler.Method.SEQUENTIAL,
          //
          extraInfo: expInfo, originPath: undefined,
          trialList: undefined,
          seed: undefined, name: 'trials_fail_2'
        });
        psychoJS.experiment.addLoop(trials_fail_2); // add the loop to the experiment
        currentLoop = trials_fail_2;  // we're now the current loop
        
        // Schedule all the trials in the trialList:
        for (const thisTrial of trials_fail_2) {
          snapshot = trials_fail_2.getSnapshot();
          trials_fail_2LoopScheduler.add(blank1sRoutineBegin(snapshot));
          trials_fail_2LoopScheduler.add(blank1sRoutineEachFrame());
          trials_fail_2LoopScheduler.add(blank1sRoutineEnd(snapshot));
          trials_fail_2LoopScheduler.add(importConditions(snapshot));
          trials_fail_2LoopScheduler.add(end_failedRoutineBegin(snapshot));
          trials_fail_2LoopScheduler.add(end_failedRoutineEachFrame());
          trials_fail_2LoopScheduler.add(end_failedRoutineEnd(snapshot));
          trials_fail_2LoopScheduler.add(trials_fail_2LoopEndIteration(trials_fail_2LoopScheduler, snapshot));
          trials_fail_2LoopScheduler.add(quitPsychoJS, '', true);
          psychoJS.setRedirectUrls('https://www.google.com');
        }
        
        return Scheduler.Event.NEXT;
      }
    }
    
    
    async function trials_fail_2LoopEnd() {
      // terminate loop
      psychoJS.experiment.removeLoop(trials_fail_2);
      // update the current loop from the ExperimentHandler
      if (psychoJS.experiment._unfinishedLoops.length>0)
        currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
      else
        currentLoop = psychoJS.experiment;  // so we use addData from the experiment
      return Scheduler.Event.NEXT;
    }
    
    
    function trials_fail_2LoopEndIteration(scheduler, snapshot) {
      // ------Prepare for next entry------
      return async function () {
        if (typeof snapshot !== 'undefined') {
          // ------Check if user ended loop early------
          if (snapshot.finished) {
            // Check for and save orphaned data
            if (psychoJS.experiment.isEntryEmpty()) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            scheduler.stop();
          } else {
            psychoJS.experiment.nextEntry(snapshot);
          }
          
        return Scheduler.Event.NEXT;
        }
      };
    }


    var trials_fail_quiz;

  function trials_fail_quizLoopBegin(trials_fail_quizLoopScheduler, snapshot) {
      return async function() {
      /*
        //new full screen
        if (height/width < 1.5)
            exitFullscreen();
            */
      
        TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
        if (attn_check_image_2.contains(mouse_attn_2)) 
          {
              failed_question = 0;
          }
        // set up handler to look after randomisation of conditions etc
        trials_fail_quiz = new TrialHandler({
          psychoJS: psychoJS,
          // loop number
          nReps: failed_question != 0, method: TrialHandler.Method.SEQUENTIAL,
          //
          extraInfo: expInfo, originPath: undefined,
          trialList: undefined,
          seed: undefined, name: 'trials_fail_quiz'
        });
        psychoJS.experiment.addLoop(trials_fail_quiz); // add the loop to the experiment
        currentLoop = trials_fail_quiz;  // we're now the current loop
        
        // Schedule all the trials in the trialList:
        for (const thisTrial of trials_fail_quiz) {
          snapshot = trials_fail_quiz.getSnapshot();
          trials_fail_quizLoopScheduler.add(blank1sRoutineBegin(snapshot));
          trials_fail_quizLoopScheduler.add(blank1sRoutineEachFrame());
          trials_fail_quizLoopScheduler.add(blank1sRoutineEnd(snapshot));
          trials_fail_quizLoopScheduler.add(importConditions(snapshot));
          trials_fail_quizLoopScheduler.add(end_failedRoutineBegin(snapshot));
          trials_fail_quizLoopScheduler.add(end_failedRoutineEachFrame());
          trials_fail_quizLoopScheduler.add(end_failedRoutineEnd(snapshot));
          trials_fail_quizLoopScheduler.add(trials_fail_quizLoopEndIteration(trials_fail_quizLoopScheduler, snapshot));
          trials_fail_quizLoopScheduler.add(quitPsychoJS, '', true);
          psychoJS.setRedirectUrls('https://www.google.com');
}
        
        return Scheduler.Event.NEXT;
      }
    }
    
    
    async function trials_fail_quizLoopEnd() {
      // terminate loop
      psychoJS.experiment.removeLoop(trials_fail_quiz);
      // update the current loop from the ExperimentHandler
      if (psychoJS.experiment._unfinishedLoops.length>0)
        currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
      else
        currentLoop = psychoJS.experiment;  // so we use addData from the experiment
      return Scheduler.Event.NEXT;
    }
    
    
    function trials_fail_quizLoopEndIteration(scheduler, snapshot) {
      // ------Prepare for next entry------
      return async function () {
        if (typeof snapshot !== 'undefined') {
          // ------Check if user ended loop early------
          if (snapshot.finished) {
            // Check for and save orphaned data
            if (psychoJS.experiment.isEntryEmpty()) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            scheduler.stop();
          } else {
            psychoJS.experiment.nextEntry(snapshot);
          }
          
        return Scheduler.Event.NEXT;
        }
      };
    }

  

    var trials_fail_3;

    function trials_fail_3LoopBegin(trials_fail_3LoopScheduler, snapshot) {
        return async function() {
        /*
          //new full screen
          if (height/width < 1.5)
              exitFullscreen();
              */
        
          TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
          if (attn_check_image_3.contains(mouse_attn_3)) 
            {
                failed_attn_3 = 0;
            }
          // set up handler to look after randomisation of conditions etc
          trials_fail_3 = new TrialHandler({
            psychoJS: psychoJS,
            // loop number
            nReps: failed_attn_3 != 0, method: TrialHandler.Method.SEQUENTIAL,
            //
            extraInfo: expInfo, originPath: undefined,
            trialList: undefined,
            seed: undefined, name: 'trials_fail_3'
          });
          psychoJS.experiment.addLoop(trials_fail_3); // add the loop to the experiment
          currentLoop = trials_fail_3;  // we're now the current loop
          
          // Schedule all the trials in the trialList:
          for (const thisTrial of trials_fail_3) {
            snapshot = trials_fail_3.getSnapshot();
            trials_fail_3LoopScheduler.add(blank1sRoutineBegin(snapshot));
            trials_fail_3LoopScheduler.add(blank1sRoutineEachFrame());
            trials_fail_3LoopScheduler.add(blank1sRoutineEnd(snapshot));
            trials_fail_3LoopScheduler.add(importConditions(snapshot));
            trials_fail_3LoopScheduler.add(end_failedRoutineBegin(snapshot));
            trials_fail_3LoopScheduler.add(end_failedRoutineEachFrame());
            trials_fail_3LoopScheduler.add(end_failedRoutineEnd(snapshot));
            trials_fail_3LoopScheduler.add(trials_fail_3LoopEndIteration(trials_fail_3LoopScheduler, snapshot));
            trials_fail_3LoopScheduler.add(quitPsychoJS, '', true);
            psychoJS.setRedirectUrls('https://www.google.com');
          }
          
          return Scheduler.Event.NEXT;
        }
      }
      
      
      async function trials_fail_3LoopEnd() {
        // terminate loop
        psychoJS.experiment.removeLoop(trials_fail_3);
        // update the current loop from the ExperimentHandler
        if (psychoJS.experiment._unfinishedLoops.length>0)
          currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
        else
          currentLoop = psychoJS.experiment;  // so we use addData from the experiment
        return Scheduler.Event.NEXT;
      }
      
      
      function trials_fail_3LoopEndIteration(scheduler, snapshot) {
        // ------Prepare for next entry------
        return async function () {
          if (typeof snapshot !== 'undefined') {
            // ------Check if user ended loop early------
            if (snapshot.finished) {
              // Check for and save orphaned data
              if (psychoJS.experiment.isEntryEmpty()) {
                psychoJS.experiment.nextEntry(snapshot);
              }
              scheduler.stop();
            } else {
              psychoJS.experiment.nextEntry(snapshot);
            }
            
          return Scheduler.Event.NEXT;
          }
        };
      }


var blank1sComponents;
function blank1sRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank1s' ---
    t = 0;
    blank1sClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blank1sComponents = [];
    blank1sComponents.push(text);
    
    for (const thisComponent of blank1sComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank1sRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank1s' ---
    // get current time
    t = blank1sClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank1sComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank1sRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank1s' ---
    for (const thisComponent of blank1sComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var instruction_1Components;
function instruction_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_1' ---
    t = 0;
    instruction_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_1
    // current position of the mouse:
    mouse_1.x = [];
    mouse_1.y = [];
    mouse_1.leftButton = [];
    mouse_1.midButton = [];
    mouse_1.rightButton = [];
    mouse_1.time = [];
    mouse_1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instruction_1Components = [];
    instruction_1Components.push(next_button_1);
    instruction_1Components.push(mouse_1);
    instruction_1Components.push(slider_1);
    instruction_1Components.push(instruction_1_text_new);
    
    for (const thisComponent of instruction_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_1' ---
    // get current time
    t = instruction_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *next_button_1* updates
    if (t >= 0.0 && next_button_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_1.tStart = t;  // (not accounting for frame time here)
      next_button_1.frameNStart = frameN;  // exact frame index
      
      next_button_1.setAutoDraw(true);
    }

    // *mouse_1* updates
    if (t >= 0.0 && mouse_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_1.tStart = t;  // (not accounting for frame time here)
      mouse_1.frameNStart = frameN;  // exact frame index
      
      mouse_1.status = PsychoJS.Status.STARTED;
      mouse_1.mouseClock.reset();
      prevButtonState = mouse_1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_button_1]) {
            if (obj.contains(mouse_1)) {
              gotValidClick = true;
              mouse_1.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_1.getPos();
          mouse_1.x.push(_mouseXYs[0]);
          mouse_1.y.push(_mouseXYs[1]);
          mouse_1.leftButton.push(_mouseButtons[0]);
          mouse_1.midButton.push(_mouseButtons[1]);
          mouse_1.rightButton.push(_mouseButtons[2]);
          mouse_1.time.push(mouse_1.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *slider_1* updates
    if (t >= 0.0 && slider_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_1.tStart = t;  // (not accounting for frame time here)
      slider_1.frameNStart = frameN;  // exact frame index
      
      slider_1.setAutoDraw(true);
    }

    
    // *instruction_1_text_new* updates
    if (t >= 0.0 && instruction_1_text_new.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_1_text_new.tStart = t;  // (not accounting for frame time here)
      instruction_1_text_new.frameNStart = frameN;  // exact frame index
      
      instruction_1_text_new.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_1' ---
    for (const thisComponent of instruction_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse_1.x) {  psychoJS.experiment.addData('mouse_1.x', mouse_1.x[0])};
    //if (mouse_1.y) {  psychoJS.experiment.addData('mouse_1.y', mouse_1.y[0])};
    //if (mouse_1.leftButton) {  psychoJS.experiment.addData('mouse_1.leftButton', mouse_1.leftButton[0])};
    //if (mouse_1.midButton) {  psychoJS.experiment.addData('mouse_1.midButton', mouse_1.midButton[0])};
    //if (mouse_1.rightButton) {  psychoJS.experiment.addData('mouse_1.rightButton', mouse_1.rightButton[0])};
    //if (mouse_1.time) {  psychoJS.experiment.addData('mouse_1.time', mouse_1.time[0])};
    //if (mouse_1.clicked_name) {  psychoJS.experiment.addData('mouse_1.clicked_name', mouse_1.clicked_name[0])};
    
    // the Routine "instruction_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var instruction_attnComponents;
function instruction_attnRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_attn' ---
    t = 0;
    instruction_attnClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_attn_instruction
    // current position of the mouse:
    mouse_attn_instruction.x = [];
    mouse_attn_instruction.y = [];
    mouse_attn_instruction.leftButton = [];
    mouse_attn_instruction.midButton = [];
    mouse_attn_instruction.rightButton = [];
    mouse_attn_instruction.time = [];
    mouse_attn_instruction.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instruction_attnComponents = [];
    instruction_attnComponents.push(mouse_attn_instruction);
    instruction_attnComponents.push(start_button_attn);
    instruction_attnComponents.push(attn_star);
    instruction_attnComponents.push(instruction_attn_text);
    instruction_attnComponents.push(quiz_attn_text);
    
    for (const thisComponent of instruction_attnComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_attnRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_attn' ---
    // get current time
    t = instruction_attnClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_attn_instruction* updates
    if (t >= 0.0 && mouse_attn_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_attn_instruction.tStart = t;  // (not accounting for frame time here)
      mouse_attn_instruction.frameNStart = frameN;  // exact frame index
      
      mouse_attn_instruction.status = PsychoJS.Status.STARTED;
      mouse_attn_instruction.mouseClock.reset();
      prevButtonState = mouse_attn_instruction.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_attn_instruction.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_attn_instruction.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [start_button_attn]) {
            if (obj.contains(mouse_attn_instruction)) {
              gotValidClick = true;
              mouse_attn_instruction.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_attn_instruction.getPos();
          mouse_attn_instruction.x.push(_mouseXYs[0]);
          mouse_attn_instruction.y.push(_mouseXYs[1]);
          mouse_attn_instruction.leftButton.push(_mouseButtons[0]);
          mouse_attn_instruction.midButton.push(_mouseButtons[1]);
          mouse_attn_instruction.rightButton.push(_mouseButtons[2]);
          mouse_attn_instruction.time.push(mouse_attn_instruction.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *start_button_attn* updates
    if (t >= 0.0 && start_button_attn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_button_attn.tStart = t;  // (not accounting for frame time here)
      start_button_attn.frameNStart = frameN;  // exact frame index
      
      start_button_attn.setAutoDraw(true);
    }

    
    // *attn_star* updates
    if (t >= 0.0 && attn_star.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_star.tStart = t;  // (not accounting for frame time here)
      attn_star.frameNStart = frameN;  // exact frame index
      
      attn_star.setAutoDraw(true);
    }

    
    // *instruction_attn_text* updates
    if (t >= 0.0 && instruction_attn_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_attn_text.tStart = t;  // (not accounting for frame time here)
      instruction_attn_text.frameNStart = frameN;  // exact frame index
      
      instruction_attn_text.setAutoDraw(true);
    }

    // *quiz_attn_text* updates
    if (t >= 0.0 && quiz_attn_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        quiz_attn_text.tStart = t;  // (not accounting for frame time here)
        quiz_attn_text.frameNStart = frameN;  // exact frame index
        
        quiz_attn_text.setAutoDraw(true);
      }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_attnComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_attnRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_attn' ---
    for (const thisComponent of instruction_attnComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
    //if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
    //if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
    //if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
    //if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
    //if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
    //if (mouse_3.clicked_name) {  psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])};
    
    // the Routine "instruction_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var continuous_pain_rating_trialComponents;
function continuous_pain_rating_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'continuous_pain_rating_trial' ---
    t = 0;
    rand_int_trial = getRndInteger(20,30)
    continuous_pain_rating_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(rand_int_trial);
    // update component parameters for each repeat
    continuous_pain_slider_trial.reset()
    // setup some python lists for storing info about the mouse_slider
    // current position of the mouse:
    mouse_slider_trial.x = [];
    mouse_slider_trial.y = [];
    //new
    mouse_slider_trial.top=[];
    mouse_slider_trial.bottom=[];
    mouse_slider_trial.width=[];
    mouse_slider_trial.height=[];
    //
    mouse_slider_trial.leftButton = [];
    mouse_slider_trial.midButton = [];
    mouse_slider_trial.rightButton = [];
    mouse_slider_trial.time = [];
    gotValidClick = false; // until a click is received
    mouse_slider_trial.mouseClock.reset();
    // keep track of which components have finished
    continuous_pain_rating_trialComponents = [];
    continuous_pain_rating_trialComponents.push(vertical_1_trial);
    continuous_pain_rating_trialComponents.push(horiozntal_top_1_trial);
    continuous_pain_rating_trialComponents.push(horizontal_bottom_1_trial);
    continuous_pain_rating_trialComponents.push(pain_continuous_image_trial);
    continuous_pain_rating_trialComponents.push(most_pain_1_trial);
    continuous_pain_rating_trialComponents.push(least_pain_1_trial);
    continuous_pain_rating_trialComponents.push(continuous_pain_slider_trial);
    continuous_pain_rating_trialComponents.push(mouse_slider_trial);
    
    for (const thisComponent of continuous_pain_rating_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function continuous_pain_rating_trialRoutineEachFrame() {
  return async function () {
    
    //--- Loop for each frame of Routine 'continuous_pain_rating_trial' ---
    // get current time
    t = continuous_pain_rating_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
   
    // *vertical_1_trial* updates
    if (t >= 0.0 && vertical_1_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_1_trial.tStart = t;  // (not accounting for frame time here)
      vertical_1_trial.frameNStart = frameN;  // exact frame index
      
      vertical_1_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int_trial - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_1_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_1_trial.setAutoDraw(false);
    }
    
    // *horiozntal_top_1_trial* updates
    if (t >= 0.0 && horiozntal_top_1_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horiozntal_top_1_trial.tStart = t;  // (not accounting for frame time here)
      horiozntal_top_1_trial.frameNStart = frameN;  // exact frame index
      
      horiozntal_top_1_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int_trial - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horiozntal_top_1_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horiozntal_top_1_trial.setAutoDraw(false);
    }
    
    // *horizontal_bottom_1_trial* updates
    if (t >= 0.0 && horizontal_bottom_1_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_1_trial.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_1_trial.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_1_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int_trial - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_1_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_1_trial.setAutoDraw(false);
    }
    
    // *pain_continuous_image_trial* updates
    if (t >= 0.0 && pain_continuous_image_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pain_continuous_image_trial.tStart = t;  // (not accounting for frame time here)
      pain_continuous_image_trial.frameNStart = frameN;  // exact frame index
      
      pain_continuous_image_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int_trial - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pain_continuous_image_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pain_continuous_image_trial.setAutoDraw(false);
    }
    
    // *most_pain_1_trial* updates
    if (t >= 0.0 && most_pain_1_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_1_trial.tStart = t;  // (not accounting for frame time here)
      most_pain_1_trial.frameNStart = frameN;  // exact frame index
      
      most_pain_1_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int_trial - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_1_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_1_trial.setAutoDraw(false);
    }
    
    // *least_pain_1_trial* updates
    if (t >= 0.0 && least_pain_1_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_1_trial.tStart = t;  // (not accounting for frame time here)
      least_pain_1_trial.frameNStart = frameN;  // exact frame index
      
      least_pain_1_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int_trial - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_1_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_1_trial.setAutoDraw(false);
    }
    
    // *continuous_pain_slider_trial* updates
    if (t >= 0.0 && continuous_pain_slider_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continuous_pain_slider_trial.tStart = t;  // (not accounting for frame time here)
      continuous_pain_slider_trial.frameNStart = frameN;  // exact frame index
      
      continuous_pain_slider_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int_trial - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (continuous_pain_slider_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continuous_pain_slider_trial.setAutoDraw(false);
    }
    // *mouse_slider_trial* updates
    if (t >= 0.0 && mouse_slider_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_slider_trial.tStart = t;  // (not accounting for frame time here)
      mouse_slider_trial.frameNStart = frameN;  // exact frame index
      
      mouse_slider_trial.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    frameRemains = 0.0 + rand_int_trial - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_slider_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_slider_trial.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_slider_trial.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
        _mouseButtons = mouse_slider_trial.getPressed();
        _mouseXYs = mouse_slider_trial.getPos();
        mouse_slider_trial.x.push(_mouseXYs[0]);
        mouse_slider_trial.y.push(_mouseXYs[1]);
        mouse_slider_trial.leftButton.push(_mouseButtons[0]);
        mouse_slider_trial.midButton.push(_mouseButtons[1]);
        mouse_slider_trial.rightButton.push(_mouseButtons[2]);
        mouse_slider_trial.time.push(mouse_slider_trial.mouseClock.getTime());
        
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of continuous_pain_rating_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function continuous_pain_rating_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'continuous_pain_rating_trial' ---
    for (const thisComponent of continuous_pain_rating_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var attn_check_trialComponents;
function attn_check_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attn_check_trial' ---
    t = 0;
    attn_check_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_attn_trial.x = [];
    mouse_attn_trial.y = [];
    mouse_attn_trial.leftButton = [];
    mouse_attn_trial.midButton = [];
    mouse_attn_trial.rightButton = [];
    mouse_attn_trial.time = [];
    mouse_attn_trial.clicked_name = [];
    gotValidClick = false; // until a click is received
    
    //slider_attn_trial.markerPos = (mouse_attn_trial.getPos()[1] - bottom)/(top - bottom);
    // keep track of which components have finished
    attn_check_trialComponents = [];
    attn_check_trialComponents.push(mouse_attn_trial);
    attn_check_trialComponents.push(attn_check_image_trial);
    attn_check_trialComponents.push(attn_check_instructions_trial);
    attn_check_trialComponents.push(horizontal_bottom_attn_trial);
    attn_check_trialComponents.push(horiozntal_top_attn_trial);
    attn_check_trialComponents.push(vertical_attn_trial);
    attn_check_trialComponents.push(most_pain_attn_trial);
    attn_check_trialComponents.push(least_pain_attn_trial);
    attn_check_trialComponents.push(slider_attn_trial);
    

    
    for (const thisComponent of attn_check_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attn_check_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attn_check_trial' ---
    // get current time
    t = attn_check_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_attn* updates
    if (t >= 0.0 && mouse_attn_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_attn_trial.tStart = t;  // (not accounting for frame time here)
      mouse_attn_trial.frameNStart = frameN;  // exact frame index
      
      mouse_attn_trial.status = PsychoJS.Status.STARTED;
      mouse_attn_trial.mouseClock.reset();
      prevButtonState = mouse_attn_trial.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_attn_trial.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_attn_trial.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [attn_check_image_trial]) {
            if (obj.contains(mouse_attn_trial)) {
              gotValidClick = true;
              mouse_attn_trial.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_attn.getPos();
          mouse_attn_trial.x.push(_mouseXYs[0]);
          mouse_attn_trial.y.push(_mouseXYs[1]);
          mouse_attn_trial.leftButton.push(_mouseButtons[0]);
          mouse_attn_trial.midButton.push(_mouseButtons[1]);
          mouse_attn_trial.rightButton.push(_mouseButtons[2]);
          mouse_attn_trial.time.push(mouse_attn_trial.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
            
          }
        }
      }
    }

    
    // *attn_check_image_trial* updates
    if (t >= 0.0 && attn_check_image_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_image_trial.tStart = t;  // (not accounting for frame time here)
      attn_check_image_trial.frameNStart = frameN;  // exact frame index
      
      attn_check_image_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_image_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_image_trial.setAutoDraw(false);
    }

    
    // *attn_check_instructions_trial* updates
    if (t >= 0.0 && attn_check_instructions_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_instructions_trial.tStart = t;  // (not accounting for frame time here)
      attn_check_instructions_trial.frameNStart = frameN;  // exact frame index
      
      attn_check_instructions_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_instructions_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_instructions_trial.setAutoDraw(false);
    }

      // *vertical_attn_trial* updates
    if (t >= 0.0 && vertical_attn_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_attn_trial.tStart = t;  // (not accounting for frame time here)
      vertical_attn_trial.frameNStart = frameN;  // exact frame index
      
      vertical_attn_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_attn_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_attn_trial.setAutoDraw(false);
    }
    
    // *horiozntal_top_attn_trial* updates
    if (t >= 0.0 && horiozntal_top_attn_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horiozntal_top_attn_trial.tStart = t;  // (not accounting for frame time here)
      horiozntal_top_attn_trial.frameNStart = frameN;  // exact frame index
      
      horiozntal_top_attn_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horiozntal_top_attn_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horiozntal_top_attn_trial.setAutoDraw(false);
    }
    
    // *horizontal_bottom_attn_trial* updates
    if (t >= 0.0 && horizontal_bottom_attn_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_attn_trial.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_attn_trial.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_attn_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_attn_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_attn_trial.setAutoDraw(false);
    }
    
    // *most_pain_attn_trial* updates
    if (t >= 0.0 && most_pain_attn_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_attn_trial.tStart = t;  // (not accounting for frame time here)
      most_pain_attn_trial.frameNStart = frameN;  // exact frame index
      
      most_pain_attn_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_attn_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_attn_trial.setAutoDraw(false);
    }
    
    // *least_pain_attn_trial* updates
    if (t >= 0.0 && least_pain_attn_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_attn_trial.tStart = t;  // (not accounting for frame time here)
      least_pain_attn_trial.frameNStart = frameN;  // exact frame index
      
      least_pain_attn_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_attn_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_attn_trial.setAutoDraw(false);
    }

      // *slider_attn_trial* updates
    if (t >= 0.0 && slider_attn_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_attn_trial.tStart = t;  // (not accounting for frame time here)
      slider_attn_trial.frameNStart = frameN;  // exact frame index
      
      slider_attn_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_attn_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_attn_trial.setAutoDraw(false);
    }

      // *mouse_attn_trial* updates
    if (t >= 0.0 && mouse_attn_trial.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        mouse_attn_trial.tStart = t;  // (not accounting for frame time here)
        mouse_attn_trial.frameNStart = frameN;  // exact frame index
        
        mouse_attn_trial.status = PsychoJS.Status.STARTED;
        prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
        }
      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (mouse_attn_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        mouse_attn_trial.status = PsychoJS.Status.FINISHED;
    }
      if (mouse_attn_trial.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
          _mouseButtons = mouse_attn_trial.getPressed();
          _mouseXYs = mouse_attn_trial.getPos();
          mouse_attn_trial.x.push(_mouseXYs[0]);
          mouse_attn_trial.y.push(_mouseXYs[1]);
          mouse_attn_trial.leftButton.push(_mouseButtons[0]);
          mouse_attn_trial.midButton.push(_mouseButtons[1]);
          mouse_attn_trial.rightButton.push(_mouseButtons[2]);
          mouse_attn_trial.time.push(mouse_attn_trial.mouseClock.getTime());
          }


    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attn_check_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attn_check_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attn_check_trial' ---
    for (const thisComponent of attn_check_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    // the Routine "attn_check_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var attn_check_2_trialComponents;
function attn_check_2_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attn_check_2_trial' ---
    t = 0;
    attn_check_2_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_attn_2_trial.x = [];
    mouse_attn_2_trial.y = [];
    mouse_attn_2_trial.leftButton = [];
    mouse_attn_2_trial.midButton = [];
    mouse_attn_2_trial.rightButton = [];
    mouse_attn_2_trial.time = [];
    mouse_attn_2_trial.clicked_name = [];
    gotValidClick = false; // until a click is received
    //slider_attn_2_trial.markerPos = (mouse_attn_2_trial.getPos()[1] - bottom)/(top - bottom);
    // keep track of which components have finished
    attn_check_2_trialComponents = [];
    attn_check_2_trialComponents.push(mouse_attn_2_trial);
    attn_check_2_trialComponents.push(attn_check_image_2_trial);
    attn_check_2_trialComponents.push(attn_check_instructions_2_trial);
    attn_check_2_trialComponents.push(horizontal_bottom_attn_2_trial);
    attn_check_2_trialComponents.push(horiozntal_top_attn_2_trial);
    attn_check_2_trialComponents.push(vertical_attn_2_trial);
    attn_check_2_trialComponents.push(most_pain_attn_2_trial);
    attn_check_2_trialComponents.push(least_pain_attn_2_trial);
    attn_check_2_trialComponents.push(slider_attn_2_trial);

    
    for (const thisComponent of attn_check_2_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attn_check_2_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attn_check_2_trial' ---
    // get current time
    t = attn_check_2_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_attn_2_trial* updates
    if (t >= 0.0 && mouse_attn_2_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_attn_2_trial.tStart = t;  // (not accounting for frame time here)
      mouse_attn_2_trial.frameNStart = frameN;  // exact frame index
      
      mouse_attn_2_trial.status = PsychoJS.Status.STARTED;
      mouse_attn_2_trial.mouseClock.reset();
      prevButtonState = mouse_attn_2_trial.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_attn_2_trial.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_attn_2_trial.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [attn_check_image_2_trial]) {
            if (obj.contains(mouse_attn_2_trial)) {
              gotValidClick = true;
              mouse_attn_2_trial.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_attn_2_trial.getPos();
          mouse_attn_2_trial.x.push(_mouseXYs[0]);
          mouse_attn_2_trial.y.push(_mouseXYs[1]);
          mouse_attn_2_trial.leftButton.push(_mouseButtons[0]);
          mouse_attn_2_trial.midButton.push(_mouseButtons[1]);
          mouse_attn_2_trial.rightButton.push(_mouseButtons[2]);
          mouse_attn_2_trial.time.push(mouse_attn_2_trial.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }

    
    // *attn_check_image_2_trial* updates
    if (t >= 0.0 && attn_check_image_2_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_image_2_trial.tStart = t;  // (not accounting for frame time here)
      attn_check_image_2_trial.frameNStart = frameN;  // exact frame index
      
      attn_check_image_2_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_image_2_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_image_2_trial.setAutoDraw(false);
    }

    
    // *attn_check_instructions_2_trial* updates
    if (t >= 0.0 && attn_check_instructions_2_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_instructions_2_trial.tStart = t;  // (not accounting for frame time here)
      attn_check_instructions_2_trial.frameNStart = frameN;  // exact frame index
      
      attn_check_instructions_2_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_instructions_2_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_instructions_2_trial.setAutoDraw(false);
    }

      // *vertical_attn_2_trial* updates
    if (t >= 0.0 && vertical_attn_2_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_attn_2_trial.tStart = t;  // (not accounting for frame time here)
      vertical_attn_2_trial.frameNStart = frameN;  // exact frame index
      
      vertical_attn_2_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_attn_2_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_attn_2_trial.setAutoDraw(false);
    }
    
    // *horiozntal_top_attn_2_trial* updates
    if (t >= 0.0 && horiozntal_top_attn_2_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horiozntal_top_attn_2_trial.tStart = t;  // (not accounting for frame time here)
      horiozntal_top_attn_2_trial.frameNStart = frameN;  // exact frame index
      
      horiozntal_top_attn_2_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horiozntal_top_attn_2_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horiozntal_top_attn_2_trial.setAutoDraw(false);
    }
    
    // *horizontal_bottom_attn_2_trial* updates
    if (t >= 0.0 && horizontal_bottom_attn_2_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_attn_2_trial.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_attn_2_trial.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_attn_2_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_attn_2_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_attn_2_trial.setAutoDraw(false);
    }

    // *most_pain_attn_2_trial* updates
    if (t >= 0.0 && most_pain_attn_2_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_attn_2_trial.tStart = t;  // (not accounting for frame time here)
      most_pain_attn_2_trial.frameNStart = frameN;  // exact frame index
      
      most_pain_attn_2_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_attn_2_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_attn_2_trial.setAutoDraw(false);
    }
    
    // *least_pain_attn_2_trial* updates
    if (t >= 0.0 && least_pain_attn_2_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_attn_2_trial.tStart = t;  // (not accounting for frame time here)
      least_pain_attn_2_trial.frameNStart = frameN;  // exact frame index
      
      least_pain_attn_2_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_attn_2_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_attn_2_trial.setAutoDraw(false);
    }

      // *slider_attn_2_trial* updates
    if (t >= 0.0 && slider_attn_2_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_attn_2_trial.tStart = t;  // (not accounting for frame time here)
      slider_attn_2_trial.frameNStart = frameN;  // exact frame index
      
      slider_attn_2_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_attn_2_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_attn_2_trial.setAutoDraw(false);
    }

    // *mouse_attn_2_trial* updates
    if (t >= 0.0 && mouse_attn_2_trial.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        mouse_attn_2_trial.tStart = t;  // (not accounting for frame time here)
        mouse_attn_2_trial.frameNStart = frameN;  // exact frame index
        
        mouse_attn_2_trial.status = PsychoJS.Status.STARTED;
        prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
        }
      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (mouse_attn_2_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        mouse_attn_2_trial.status = PsychoJS.Status.FINISHED;
    }
      if (mouse_attn_2_trial.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
          _mouseButtons = mouse_attn_2_trial.getPressed();
          _mouseXYs = mouse_attn_2_trial.getPos();
          mouse_attn_2_trial.x.push(_mouseXYs[0]);
          mouse_attn_2_trial.y.push(_mouseXYs[1]);
          mouse_attn_2_trial.leftButton.push(_mouseButtons[0]);
          mouse_attn_2_trial.midButton.push(_mouseButtons[1]);
          mouse_attn_2_trial.rightButton.push(_mouseButtons[2]);
          mouse_attn_2_trial.time.push(mouse_attn_2_trial.mouseClock.getTime());
          }
  

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attn_check_2_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attn_check_2_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attn_check_2_trial' ---
    for (const thisComponent of attn_check_2_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    // the Routine "attn_check_2_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var attn_check_3_trialComponents;
function attn_check_3_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attn_check_3_trial' ---
    t = 0;
    attn_check_3_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_attn_3_trial.x = [];
    mouse_attn_3_trial.y = [];
    mouse_attn_3_trial.leftButton = [];
    mouse_attn_3_trial.midButton = [];
    mouse_attn_3_trial.rightButton = [];
    mouse_attn_3_trial.time = [];
    mouse_attn_3_trial.clicked_name = [];
    gotValidClick = false; // until a click is received
    //slider_attn_3_trial.markerPos = (mouse_attn_3_trial.getPos()[1] - bottom)/(top - bottom);
    // keep track of which components have finished
    attn_check_3_trialComponents = [];
    attn_check_3_trialComponents.push(mouse_attn_3_trial);
    attn_check_3_trialComponents.push(attn_check_image_3_trial);
    attn_check_3_trialComponents.push(attn_check_instructions_3_trial);
    attn_check_3_trialComponents.push(horizontal_bottom_attn_3_trial);
    attn_check_3_trialComponents.push(horiozntal_top_attn_3_trial);
    attn_check_3_trialComponents.push(vertical_attn_3_trial);
    attn_check_3_trialComponents.push(most_pain_attn_3_trial);
    attn_check_3_trialComponents.push(least_pain_attn_3_trial);
    attn_check_3_trialComponents.push(slider_attn_3_trial);

    
    for (const thisComponent of attn_check_3_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attn_check_3_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attn_check_3_trial' ---
    // get current time
    t = attn_check_3_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_attn_3_trial* updates
    if (t >= 0.0 && mouse_attn_3_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_attn_3_trial.tStart = t;  // (not accounting for frame time here)
      mouse_attn_3_trial.frameNStart = frameN;  // exact frame index
      
      mouse_attn_3_trial.status = PsychoJS.Status.STARTED;
      mouse_attn_3_trial.mouseClock.reset();
      prevButtonState = mouse_attn_3_trial.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_attn_3_trial.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_attn_3_trial.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [attn_check_image_3_trial]) {
            if (obj.contains(mouse_attn_3_trial)) {
              gotValidClick = true;
              mouse_attn_3_trial.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_attn_3_trial.getPos();
          mouse_attn_3_trial.x.push(_mouseXYs[0]);
          mouse_attn_3_trial.y.push(_mouseXYs[1]);
          mouse_attn_3_trial.leftButton.push(_mouseButtons[0]);
          mouse_attn_3_trial.midButton.push(_mouseButtons[1]);
          mouse_attn_3_trial.rightButton.push(_mouseButtons[2]);
          mouse_attn_3_trial.time.push(mouse_attn_3_trial.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }

    
    // *attn_check_image_3_trial* updates
    if (t >= 0.0 && attn_check_image_3_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_image_3_trial.tStart = t;  // (not accounting for frame time here)
      attn_check_image_3_trial.frameNStart = frameN;  // exact frame index
      
      attn_check_image_3_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_image_3_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_image_3_trial.setAutoDraw(false);
    }

    
    // *attn_check_instructions_3_trial* updates
    if (t >= 0.0 && attn_check_instructions_3_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_instructions_3_trial.tStart = t;  // (not accounting for frame time here)
      attn_check_instructions_3_trial.frameNStart = frameN;  // exact frame index
      
      attn_check_instructions_3_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_instructions_3_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_instructions_3_trial.setAutoDraw(false);
    }

      // *vertical_attn_3_trial* updates
    if (t >= 0.0 && vertical_attn_3_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_attn_3_trial.tStart = t;  // (not accounting for frame time here)
      vertical_attn_3_trial.frameNStart = frameN;  // exact frame index
      
      vertical_attn_3_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_attn_3_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_attn_3_trial.setAutoDraw(false);
    }
    
    // *horiozntal_top_attn_3_trial* updates
    if (t >= 0.0 && horiozntal_top_attn_3_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horiozntal_top_attn_3_trial.tStart = t;  // (not accounting for frame time here)
      horiozntal_top_attn_3_trial.frameNStart = frameN;  // exact frame index
      
      horiozntal_top_attn_3_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horiozntal_top_attn_3_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horiozntal_top_attn_3_trial.setAutoDraw(false);
    }
    
    // *horizontal_bottom_attn_3_trial* updates
    if (t >= 0.0 && horizontal_bottom_attn_3_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_attn_3_trial.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_attn_3_trial.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_attn_3_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_attn_3_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_attn_3_trial.setAutoDraw(false);
    }
    
    // *most_pain_attn_3_trial* updates
    if (t >= 0.0 && most_pain_attn_3_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_attn_3_trial.tStart = t;  // (not accounting for frame time here)
      most_pain_attn_3_trial.frameNStart = frameN;  // exact frame index
      
      most_pain_attn_3_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_attn_3_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_attn_3_trial.setAutoDraw(false);
    }
    
    // *least_pain_attn_3_trial* updates
    if (t >= 0.0 && least_pain_attn_3_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_attn_3_trial.tStart = t;  // (not accounting for frame time here)
      least_pain_attn_3_trial.frameNStart = frameN;  // exact frame index
      
      least_pain_attn_3_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_attn_3_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_attn_3_trial.setAutoDraw(false);
    }

      // *slider_attn_3_trial* updates
    if (t >= 0.0 && slider_attn_3_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_attn_3_trial.tStart = t;  // (not accounting for frame time here)
      slider_attn_3_trial.frameNStart = frameN;  // exact frame index
      
      slider_attn_3_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_attn_3_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_attn_3_trial.setAutoDraw(false);
    }

      // *mouse_attn_3_trial* updates
    if (t >= 0.0 && mouse_attn_3_trial.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        mouse_attn_3_trial.tStart = t;  // (not accounting for frame time here)
        mouse_attn_3_trial.frameNStart = frameN;  // exact frame index
        
        mouse_attn_3_trial.status = PsychoJS.Status.STARTED;
        prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
        }
      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (mouse_attn_3_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        mouse_attn_3_trial.status = PsychoJS.Status.FINISHED;
    }
      if (mouse_attn_3_trial.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
          _mouseButtons = mouse_attn_3_trial.getPressed();
          _mouseXYs = mouse_attn_3_trial.getPos();
          mouse_attn_3_trial.x.push(_mouseXYs[0]);
          mouse_attn_3_trial.y.push(_mouseXYs[1]);
          mouse_attn_3_trial.leftButton.push(_mouseButtons[0]);
          mouse_attn_3_trial.midButton.push(_mouseButtons[1]);
          mouse_attn_3_trial.rightButton.push(_mouseButtons[2]);
          mouse_attn_3_trial.time.push(mouse_attn_3_trial.mouseClock.getTime());
          }
  

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attn_check_3_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attn_check_3_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attn_check_3_trial' ---
    for (const thisComponent of attn_check_3_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    // the Routine "attn_check_3_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


/*
var instruction_2Components;
function instruction_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2' ---
    t = 0;
    instruction_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instruction_2Components = [];
    instruction_2Components.push(next_button_2);
    instruction_2Components.push(mouse_2);
    instruction_2Components.push(slider_2);
    instruction_2Components.push(text_2);
    
    for (const thisComponent of instruction_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2' ---
    // get current time
    t = instruction_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *next_button_2* updates
    if (t >= 0.0 && next_button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_2.tStart = t;  // (not accounting for frame time here)
      next_button_2.frameNStart = frameN;  // exact frame index
      
      next_button_2.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_button_2]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *slider_2* updates
    if (t >= 0.0 && slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2.tStart = t;  // (not accounting for frame time here)
      slider_2.frameNStart = frameN;  // exact frame index
      
      slider_2.setAutoDraw(true);
    }

    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2' ---
    for (const thisComponent of instruction_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    //if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    //if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    //if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    //if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    //if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    //if (mouse_2.clicked_name) {  psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name[0])};
    
    // the Routine "instruction_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_3Components;
function instruction_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_3' ---
    t = 0;
    instruction_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instruction_3Components = [];
    instruction_3Components.push(mouse_3);
    instruction_3Components.push(start_button);
    instruction_3Components.push(slider_3);
    instruction_3Components.push(instruction_3_text);
    instruction_3Components.push(quiz_3_text);
    
    for (const thisComponent of instruction_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_3' ---
    // get current time
    t = instruction_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [start_button]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *start_button* updates
    if (t >= 0.0 && start_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_button.tStart = t;  // (not accounting for frame time here)
      start_button.frameNStart = frameN;  // exact frame index
      
      start_button.setAutoDraw(true);
    }

    
    // *slider_3* updates
    if (t >= 0.0 && slider_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_3.tStart = t;  // (not accounting for frame time here)
      slider_3.frameNStart = frameN;  // exact frame index
      
      slider_3.setAutoDraw(true);
    }

    
    // *instruction_3_text* updates
    if (t >= 0.0 && instruction_3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_3_text.tStart = t;  // (not accounting for frame time here)
      instruction_3_text.frameNStart = frameN;  // exact frame index
      
      instruction_3_text.setAutoDraw(true);
    }

    // *quiz_3_text* updates
    if (t >= 0.0 && quiz_3_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        quiz_3_text.tStart = t;  // (not accounting for frame time here)
        quiz_3_text.frameNStart = frameN;  // exact frame index
        
        quiz_3_text.setAutoDraw(true);
      }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_3' ---
    for (const thisComponent of instruction_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
    //if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
    //if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
    //if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
    //if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
    //if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
    //if (mouse_3.clicked_name) {  psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])};
    
    // the Routine "instruction_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}
*/
// Add example page routine
var exampleComponents;
function exampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_1' ---
    t = 0;
    exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_1
    // current position of the mouse:
    mouse_example.x = [];
    mouse_example.y = [];
    mouse_example.leftButton = [];
    mouse_example.midButton = [];
    mouse_example.rightButton = [];
    mouse_example.time = [];
    mouse_example.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    exampleComponents = [];
    exampleComponents.push(next_button_example);
    exampleComponents.push(mouse_example);
    exampleComponents.push(slider_example);
    exampleComponents.push(instruction_example_text);
    exampleComponents.push(quiz_end);
    
    for (const thisComponent of exampleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exampleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'example' ---
    // get current time
    t = exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *next_button_example* updates
    if (t >= 0.0 && next_button_example.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_example.tStart = t;  // (not accounting for frame time here)
      next_button_example.frameNStart = frameN;  // exact frame index
      
      next_button_example.setAutoDraw(true);
    }

    // *mouse_example* updates
    if (t >= 0.0 && mouse_example.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_example.tStart = t;  // (not accounting for frame time here)
      mouse_example.frameNStart = frameN;  // exact frame index
      
      mouse_example.status = PsychoJS.Status.STARTED;
      mouse_example.mouseClock.reset();
      prevButtonState = mouse_example.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_example.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_example.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_button_example]) {
            if (obj.contains(mouse_example)) {
              gotValidClick = true;
              mouse_example.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_example.getPos();
          mouse_example.x.push(_mouseXYs[0]);
          mouse_example.y.push(_mouseXYs[1]);
          mouse_example.leftButton.push(_mouseButtons[0]);
          mouse_example.midButton.push(_mouseButtons[1]);
          mouse_example.rightButton.push(_mouseButtons[2]);
          mouse_example.time.push(mouse_example.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *slider_example* updates
    if (t >= 0.0 && slider_example.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_example.tStart = t;  // (not accounting for frame time here)
      slider_example.frameNStart = frameN;  // exact frame index
      
      slider_example.setAutoDraw(true);
    }

    
    // *instruction_example_text* updates
    if (t >= 0.0 && instruction_example_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_example_text.tStart = t;  // (not accounting for frame time here)
      instruction_example_text.frameNStart = frameN;  // exact frame index
      
      instruction_example_text.setAutoDraw(true);
    }

     // *quiz_end* updates
     if (t >= 0.0 && quiz_end.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        quiz_end.tStart = t;  // (not accounting for frame time here)
        quiz_end.frameNStart = frameN;  // exact frame index
        
        quiz_end.setAutoDraw(true);
      }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exampleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exampleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'example' ---
    for (const thisComponent of exampleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse_example.x) {  psychoJS.experiment.addData('mouse_example.x', mouse_example.x[0])};
    //if (mouse_example.y) {  psychoJS.experiment.addData('mouse_example.y', mouse_example.y[0])};
    //if (mouse_example.leftButton) {  psychoJS.experiment.addData('mouse_example.leftButton', mouse_example.leftButton[0])};
    //if (mouse_example.midButton) {  psychoJS.experiment.addData('mouse_example.midButton', mouse_example.midButton[0])};
    //if (mouse_example.rightButton) {  psychoJS.experiment.addData('mouse_example.rightButton', mouse_example.rightButton[0])};
    //if (mouse_example.time) {  psychoJS.experiment.addData('mouse_example.time', mouse_example.time[0])};
    //if (mouse_example.clicked_name) {  psychoJS.experiment.addData('mouse_example.clicked_name', mouse_example.clicked_name[0])};
    
    // the Routine "example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

// Add question slider routine

var question_slider_predictionComponents;
function question_slider_predictionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'question_slider_prediction' ---
    t = 0;
    question_slider_predictionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    question_slider_prediction.reset()
    // keep track of which components have finished
    question_slider_predictionComponents = [];
    question_slider_predictionComponents.push(vertical_question_prediction);
    question_slider_predictionComponents.push(horizontal_bottom_question_prediction);
    question_slider_predictionComponents.push(horizontal_top_question_prediction);
    question_slider_predictionComponents.push(question_slider_prediction_text);
    question_slider_predictionComponents.push(most_pain_question_prediction);
    question_slider_predictionComponents.push(least_pain_question_prediction);
    question_slider_predictionComponents.push(question_slider_prediction);
    
    for (const thisComponent of question_slider_predictionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function question_slider_predictionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'question_slider_prediction' ---
    // get current time
    t = question_slider_predictionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vertical_question_prediction* updates
    if (t >= 0.0 && vertical_question_prediction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_question_prediction.tStart = t;  // (not accounting for frame time here)
      vertical_question_prediction.frameNStart = frameN;  // exact frame index
      
      vertical_question_prediction.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_question_prediction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_question_prediction.setAutoDraw(false);
    }

    
    // *horizontal_bottom_question_prediction* updates
    if (t >= 0.0 && horizontal_bottom_question_prediction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_question_prediction.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_question_prediction.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_question_prediction.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_question_prediction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_question_prediction.setAutoDraw(false);
    }

    
    // *horizontal_top_question_prediction* updates
    if (t >= 0.0 && horizontal_top_question_prediction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_top_question_prediction.tStart = t;  // (not accounting for frame time here)
      horizontal_top_question_prediction.frameNStart = frameN;  // exact frame index
      
      horizontal_top_question_prediction.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_top_question_prediction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_top_question_prediction.setAutoDraw(false);
    }

    
    // *question_slider_prediction_text* updates
    if (t >= 0.0 && question_slider_prediction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_slider_prediction_text.tStart = t;  // (not accounting for frame time here)
      question_slider_prediction_text.frameNStart = frameN;  // exact frame index
      
      question_slider_prediction_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (question_slider_prediction_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        question_slider_prediction_text.setAutoDraw(false);
    }

    
    // *most_pain_question_prediction* updates
    if (t >= 0.0 && most_pain_question_prediction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_question_prediction.tStart = t;  // (not accounting for frame time here)
      most_pain_question_prediction.frameNStart = frameN;  // exact frame index
      
      most_pain_question_prediction.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_question_prediction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_question_prediction.setAutoDraw(false);
    }

    
    // *least_pain_question_prediction* updates
    if (t >= 0.0 && least_pain_question_prediction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_question_prediction.tStart = t;  // (not accounting for frame time here)
      least_pain_question_prediction.frameNStart = frameN;  // exact frame index
      
      least_pain_question_prediction.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_question_prediction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_question_prediction.setAutoDraw(false);
    }

    
    // *question_slider_prediction* updates
    if (t >= 0.0 && question_slider_prediction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_slider_prediction.tStart = t;  // (not accounting for frame time here)
      question_slider_prediction.frameNStart = frameN;  // exact frame index
      
      question_slider_prediction.setAutoDraw(true);
    }
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (question_slider_prediction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        question_slider_prediction.setAutoDraw(false);
    }

    // Check question_slider_prediction for response to end routine
    if (question_slider_prediction.getRating() !== undefined && question_slider_prediction.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }


    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of question_slider_predictionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function question_slider_predictionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'question_slider_prediction' ---
    for (const thisComponent of question_slider_predictionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //psychoJS.experiment.addData('question_slider_prediction.response', question_slider_prediction.getRating());
    //psychoJS.experiment.addData('question_slider_prediction.rt', question_slider_prediction.getRT());
    //psychoJS.experiment.addData('question_slider_prediction.history', question_slider_prediction.getHistory());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

/*
//add confidence question

var pain_confidence_questionComponents;
function pain_confidence_questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pain_confidence_question' ---
    t = 0;
    pain_confidence_questionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    confidence_slider_question.reset()
    // keep track of which components have finished
    pain_confidence_questionComponents = [];
    pain_confidence_questionComponents.push(horizontal_central_confidence_question);
    pain_confidence_questionComponents.push(vertical_right_confidence_question);
    pain_confidence_questionComponents.push(vertical_left_confidence_question);
    pain_confidence_questionComponents.push(confidence_image_question);
    pain_confidence_questionComponents.push(confidence_slider_question);
    
    for (const thisComponent of pain_confidence_questionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pain_confidence_questionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pain_confidence_question' ---
    // get current time
    t = pain_confidence_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *horizontal_central_confidence_question* updates
    if (t >= 0.0 && horizontal_central_confidence_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_central_confidence_question.tStart = t;  // (not accounting for frame time here)
      horizontal_central_confidence_question.frameNStart = frameN;  // exact frame index
      
      horizontal_central_confidence_question.setAutoDraw(true);
    }
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_central_confidence_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_central_confidence_question.setAutoDraw(false);
    }

    
    // *vertical_right_confidence_question* updates
    if (t >= 0.0 && vertical_right_confidence_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_right_confidence_question.tStart = t;  // (not accounting for frame time here)
      vertical_right_confidence_question.frameNStart = frameN;  // exact frame index
      
      vertical_right_confidence_question.setAutoDraw(true);
    }
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_right_confidence_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_right_confidence_question.setAutoDraw(false);
    }

    
    // *vertical_left_confidence_question* updates
    if (t >= 0.0 && vertical_left_confidence_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_left_confidence_question.tStart = t;  // (not accounting for frame time here)
      vertical_left_confidence_question.frameNStart = frameN;  // exact frame index
      
      vertical_left_confidence_question.setAutoDraw(true);
    }
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_left_confidence_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_left_confidence_question.setAutoDraw(false);
    }

    
    // *confidence_image_question* updates
    if (t >= 0.0 && confidence_image_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_image_question.tStart = t;  // (not accounting for frame time here)
      confidence_image_question.frameNStart = frameN;  // exact frame index
      
      confidence_image_question.setAutoDraw(true);
    }
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (confidence_image_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      confidence_image_question.setAutoDraw(false);
    }

    
    // *confidence_slider_question* updates
    if (t >= 0 && confidence_slider_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_slider_question.tStart = t;  // (not accounting for frame time here)
      confidence_slider_question.frameNStart = frameN;  // exact frame index
      
      confidence_slider_question.setAutoDraw(true);
    }
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (confidence_slider_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      confidence_slider_question.setAutoDraw(false);
    }

    // Check confidence_slider_question for response to end routine
    if (confidence_slider_question.getRating() !== undefined && confidence_slider_question.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }

    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pain_confidence_questionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pain_confidence_questionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pain_confidence_question' ---
    for (const thisComponent of pain_confidence_questionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //psychoJS.experiment.addData('confidence_slider_2.response', confidence_slider_2.getRating());
    //psychoJS.experiment.addData('confidence_slider_2.rt', confidence_slider_2.getRT());
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}
*/
//add pass screen

var pass_screenComponents;
function pass_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pass_screen' ---
    t = 0;
    pass_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse_pass.x = [];
    mouse_pass.y = [];
    mouse_pass.leftButton = [];
    mouse_pass.midButton = [];
    mouse_pass.rightButton = [];
    mouse_pass.time = [];
    mouse_pass.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    pass_screenComponents = [];
    pass_screenComponents.push(pass);
    pass_screenComponents.push(start_button_pass);
    pass_screenComponents.push(mouse_pass);
    
    for (const thisComponent of pass_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pass_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pass_screen' ---
    // get current time
    t = pass_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pass* updates
    if (t >= 0.0 && pass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pass.tStart = t;  // (not accounting for frame time here)
      pass.frameNStart = frameN;  // exact frame index
      
      pass.setAutoDraw(true);
    }

    
    // *start_button_pass* updates
    if (t >= 0.0 && start_button_pass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_button_pass.tStart = t;  // (not accounting for frame time here)
      start_button_pass.frameNStart = frameN;  // exact frame index
      
      start_button_pass.setAutoDraw(true);
    }

    // *mouse_pass* updates
    if (t >= 0.0 && mouse_pass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pass.tStart = t;  // (not accounting for frame time here)
      mouse_pass.frameNStart = frameN;  // exact frame index
      
      mouse_pass.status = PsychoJS.Status.STARTED;
      mouse_pass.mouseClock.reset();
      prevButtonState = mouse_pass.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_pass.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pass.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [start_button_pass]) {
            if (obj.contains(mouse_pass)) {
              gotValidClick = true;
              mouse_pass.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_pass.getPos();
          mouse_pass.x.push(_mouseXYs[0]);
          mouse_pass.y.push(_mouseXYs[1]);
          mouse_pass.leftButton.push(_mouseButtons[0]);
          mouse_pass.midButton.push(_mouseButtons[1]);
          mouse_pass.rightButton.push(_mouseButtons[2]);
          mouse_pass.time.push(mouse_pass.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pass_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pass_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pass_screen' ---
    for (const thisComponent of pass_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    //if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    //if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    //if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    //if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    //if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    //if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // the Routine "pass_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

//add redirect screen

var redirect_screenComponents;
function redirect_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'redirect_screen' ---
    t = 0;
    redirect_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse_redirect.x = [];
    mouse_redirect.y = [];
    mouse_redirect.leftButton = [];
    mouse_redirect.midButton = [];
    mouse_redirect.rightButton = [];
    mouse_redirect.time = [];
    mouse_redirect.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    redirect_screenComponents = [];
    redirect_screenComponents.push(redirect);
    redirect_screenComponents.push(next_button_redirect);
    redirect_screenComponents.push(mouse_redirect);
    
    for (const thisComponent of redirect_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function redirect_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'redirect_screen' ---
    // get current time
    t = redirect_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *redirect* updates
    if (t >= 0.0 && redirect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redirect.tStart = t;  // (not accounting for frame time here)
      redirect.frameNStart = frameN;  // exact frame index
      
      redirect.setAutoDraw(true);
    }

    
    // *next_button_redirect* updates
    if (t >= 0.0 && next_button_redirect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_redirect.tStart = t;  // (not accounting for frame time here)
      next_button_redirect.frameNStart = frameN;  // exact frame index
      
      next_button_redirect.setAutoDraw(true);
    }

    // *mouse_redirect* updates
    if (t >= 0.0 && mouse_redirect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_redirect.tStart = t;  // (not accounting for frame time here)
      mouse_redirect.frameNStart = frameN;  // exact frame index
      
      mouse_redirect.status = PsychoJS.Status.STARTED;
      mouse_redirect.mouseClock.reset();
      prevButtonState = mouse_redirect.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_redirect.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_redirect.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_button_redirect]) {
            if (obj.contains(mouse_redirect)) {
              gotValidClick = true;
              mouse_redirect.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_redirect.getPos();
          mouse_redirect.x.push(_mouseXYs[0]);
          mouse_redirect.y.push(_mouseXYs[1]);
          mouse_redirect.leftButton.push(_mouseButtons[0]);
          mouse_redirect.midButton.push(_mouseButtons[1]);
          mouse_redirect.rightButton.push(_mouseButtons[2]);
          mouse_redirect.time.push(mouse_redirect.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of redirect_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function redirect_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'redirect_screen' ---
    for (const thisComponent of redirect_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    //if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    //if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    //if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    //if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    //if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    //if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // the Routine "redirect_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var continuous_pain_ratingComponents;
function continuous_pain_ratingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'continuous_pain_rating' ---
    t = 0;
    rand_int = getRndInteger(90, 120)
    continuous_pain_ratingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(rand_int);
    // update component parameters for each repeat
    continuous_pain_slider.reset()
    // setup some python lists for storing info about the mouse_slider
    // current position of the mouse:
    mouse_slider.x = [];
    mouse_slider.y = [];
    //new
    mouse_slider.top=[];
    mouse_slider.bottom=[];
    mouse_slider.width=[];
    mouse_slider.height=[];
    //
    mouse_slider.leftButton = [];
    mouse_slider.midButton = [];
    mouse_slider.rightButton = [];
    mouse_slider.time = [];
    gotValidClick = false; // until a click is received
    mouse_slider.mouseClock.reset();
    // keep track of which components have finished
    continuous_pain_ratingComponents = [];
    continuous_pain_ratingComponents.push(dummy);
    continuous_pain_ratingComponents.push(vertical_1);
    continuous_pain_ratingComponents.push(horiozntal_top_1);
    continuous_pain_ratingComponents.push(horizontal_bottom_1);
    continuous_pain_ratingComponents.push(pain_continuous_image);
    continuous_pain_ratingComponents.push(most_pain_1);
    continuous_pain_ratingComponents.push(least_pain_1);
    continuous_pain_ratingComponents.push(continuous_pain_slider);
    continuous_pain_ratingComponents.push(mouse_slider);
    
    for (const thisComponent of continuous_pain_ratingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function continuous_pain_ratingRoutineEachFrame() {
  return async function () {
    
    //--- Loop for each frame of Routine 'continuous_pain_rating' ---
    // get current time
    t = continuous_pain_ratingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    //*dummy* updates
    if (t >= 0.0 && dummy.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        dummy.tStart = t;  // (not accounting for frame time here)
        dummy.frameNStart = frameN;  // exact frame index
        
        dummy.setAutoDraw(true);
      }
  
      frameRemains = 0.0 + rand_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (dummy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        dummy.setAutoDraw(false);
      }
    // *vertical_1* updates
    if (t >= 0.0 && vertical_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_1.tStart = t;  // (not accounting for frame time here)
      vertical_1.frameNStart = frameN;  // exact frame index
      
      vertical_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_1.setAutoDraw(false);
    }
    
    // *horiozntal_top_1* updates
    if (t >= 0.0 && horiozntal_top_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horiozntal_top_1.tStart = t;  // (not accounting for frame time here)
      horiozntal_top_1.frameNStart = frameN;  // exact frame index
      
      horiozntal_top_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horiozntal_top_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horiozntal_top_1.setAutoDraw(false);
    }
    
    // *horizontal_bottom_1* updates
    if (t >= 0.0 && horizontal_bottom_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_1.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_1.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_1.setAutoDraw(false);
    }
    
    // *pain_continuous_image* updates
    if (t >= 0.0 && pain_continuous_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pain_continuous_image.tStart = t;  // (not accounting for frame time here)
      pain_continuous_image.frameNStart = frameN;  // exact frame index
      
      pain_continuous_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pain_continuous_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pain_continuous_image.setAutoDraw(false);
    }
    
    // *most_pain_1* updates
    if (t >= 0.0 && most_pain_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_1.tStart = t;  // (not accounting for frame time here)
      most_pain_1.frameNStart = frameN;  // exact frame index
      
      most_pain_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_1.setAutoDraw(false);
    }
    
    // *least_pain_1* updates
    if (t >= 0.0 && least_pain_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_1.tStart = t;  // (not accounting for frame time here)
      least_pain_1.frameNStart = frameN;  // exact frame index
      
      least_pain_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_1.setAutoDraw(false);
    }
    
    // *continuous_pain_slider* updates
    if (t >= 0.0 && continuous_pain_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continuous_pain_slider.tStart = t;  // (not accounting for frame time here)
      continuous_pain_slider.frameNStart = frameN;  // exact frame index
      
      continuous_pain_slider.setAutoDraw(true);
    }

    frameRemains = 0.0 + rand_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (continuous_pain_slider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      continuous_pain_slider.setAutoDraw(false);
    }
    // *mouse_slider* updates
    if (t >= 0.0 && mouse_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_slider.tStart = t;  // (not accounting for frame time here)
      mouse_slider.frameNStart = frameN;  // exact frame index
      
      mouse_slider.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    frameRemains = 0.0 + rand_int - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_slider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_slider.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_slider.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
        if (continuous_pain_slider.contains(mouse_slider) || dummy.contains(mouse_slider)){
        _mouseButtons = mouse_slider.getPressed();
        _mouseXYs = mouse_slider.getPos();
        mouse_slider.x.push(_mouseXYs[0]);
        mouse_slider.y.push(_mouseXYs[1]);
        mouse_slider.leftButton.push(_mouseButtons[0]);
        mouse_slider.midButton.push(_mouseButtons[1]);
        mouse_slider.rightButton.push(_mouseButtons[2]);
        mouse_slider.time.push(mouse_slider.mouseClock.getTime());
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of continuous_pain_ratingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function continuous_pain_ratingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'continuous_pain_rating' ---
    for (const thisComponent of continuous_pain_ratingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //psychoJS.experiment.addData('continuous_pain_slider.response', continuous_pain_slider.getRating());
    //psychoJS.experiment.addData('continuous_pain_slider.rt', continuous_pain_slider.getRT());
    //psychoJS.experiment.addData('continuous_pain_slider.history', continuous_pain_slider.getHistory());
    // store data for psychoJS.experiment (ExperimentHandler)
    //new
    mouse_slider.top.push((0.3+landscape)*height);
    mouse_slider.bottom.push((-0.4-landscape)*height);
    psychoJS.experiment.addData('mouse_slider.top', mouse_slider.top[0]);
    psychoJS.experiment.addData('mouse_slider.bottom', mouse_slider.bottom[0]);
    mouse_slider.width.push(width);
    mouse_slider.height.push(height);
    psychoJS.experiment.addData('mouse_slider.width',mouse_slider.width[0]);
    psychoJS.experiment.addData('mouse_slider.height',mouse_slider.height[0]);
    //
    psychoJS.experiment.addData('mouse_slider.x', mouse_slider.x);
    psychoJS.experiment.addData('mouse_slider.y', mouse_slider.y);
    //psychoJS.experiment.addData('mouse_slider.leftButton', mouse_slider.leftButton);
    //psychoJS.experiment.addData('mouse_slider.midButton', mouse_slider.midButton);
    //psychoJS.experiment.addData('mouse_slider.rightButton', mouse_slider.rightButton);
    psychoJS.experiment.addData('mouse_slider.time', mouse_slider.time);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var attn_checkComponents;
function attn_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attn_check' ---
    t = 0;
    attn_checkClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_attn.x = [];
    mouse_attn.y = [];
    mouse_attn.leftButton = [];
    mouse_attn.midButton = [];
    mouse_attn.rightButton = [];
    mouse_attn.time = [];
    mouse_attn.clicked_name = [];
    gotValidClick = false; // until a click is received
    //slider_attn.markerPos = (mouse_attn.getPos()[1] - bottom)/(top - bottom);
    // keep track of which components have finished
    attn_checkComponents = [];
    attn_checkComponents.push(mouse_attn);
    attn_checkComponents.push(attn_check_image);
    attn_checkComponents.push(attn_check_instructions);
    //attn_checkComponents.push(rectangle);
    //attn_checkComponents.push(circle);
    attn_checkComponents.push(horizontal_bottom_attn);
    attn_checkComponents.push(horiozntal_top_attn);
    attn_checkComponents.push(vertical_attn);
    //attn_checkComponents.push(pain_continuous_image_attn);
    attn_checkComponents.push(most_pain_attn);
    attn_checkComponents.push(least_pain_attn);
    attn_checkComponents.push(slider_attn);
    

    
    for (const thisComponent of attn_checkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attn_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attn_check' ---
    // get current time
    t = attn_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_attn* updates
    if (t >= 0.0 && mouse_attn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_attn.tStart = t;  // (not accounting for frame time here)
      mouse_attn.frameNStart = frameN;  // exact frame index
      
      mouse_attn.status = PsychoJS.Status.STARTED;
      mouse_attn.mouseClock.reset();
      prevButtonState = mouse_attn.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_attn.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_attn.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [attn_check_image]) {
            if (obj.contains(mouse_attn)) {
              gotValidClick = true;
              mouse_attn.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_attn.getPos();
          mouse_attn.x.push(_mouseXYs[0]);
          mouse_attn.y.push(_mouseXYs[1]);
          mouse_attn.leftButton.push(_mouseButtons[0]);
          mouse_attn.midButton.push(_mouseButtons[1]);
          mouse_attn.rightButton.push(_mouseButtons[2]);
          mouse_attn.time.push(mouse_attn.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
            
          }
        }
      }
    }

    
    // *attn_check_image* updates
    if (t >= 0.0 && attn_check_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_image.tStart = t;  // (not accounting for frame time here)
      attn_check_image.frameNStart = frameN;  // exact frame index
      
      attn_check_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_image.setAutoDraw(false);
    }

    
    // *attn_check_instructions* updates
    if (t >= 0.0 && attn_check_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_instructions.tStart = t;  // (not accounting for frame time here)
      attn_check_instructions.frameNStart = frameN;  // exact frame index
      
      attn_check_instructions.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_instructions.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_instructions.setAutoDraw(false);
    }

/*
    // *rectangle* updates
    if (t >= 0.0 && rectangle.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        rectangle.tStart = t;  // (not accounting for frame time here)
        rectangle.frameNStart = frameN;  // exact frame index
        
        rectangle.setAutoDraw(true);
      }
  
      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (rectangle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          rectangle.setAutoDraw(false);
      }

      
      // *circle* updates
    if (t >= 0.0 && circle.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        circle.tStart = t;  // (not accounting for frame time here)
        circle.frameNStart = frameN;  // exact frame index
        
        circle.setAutoDraw(true);
      }

      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          circle.setAutoDraw(false);
      }
  */

      // *vertical_attn* updates
    if (t >= 0.0 && vertical_attn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_attn.tStart = t;  // (not accounting for frame time here)
      vertical_attn.frameNStart = frameN;  // exact frame index
      
      vertical_attn.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_attn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_attn.setAutoDraw(false);
    }
    
    // *horiozntal_top_attn* updates
    if (t >= 0.0 && horiozntal_top_attn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horiozntal_top_attn.tStart = t;  // (not accounting for frame time here)
      horiozntal_top_attn.frameNStart = frameN;  // exact frame index
      
      horiozntal_top_attn.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horiozntal_top_attn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horiozntal_top_attn.setAutoDraw(false);
    }
    
    // *horizontal_bottom_attn* updates
    if (t >= 0.0 && horizontal_bottom_attn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_attn.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_attn.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_attn.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_attn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_attn.setAutoDraw(false);
    }
/*
    // *pain_continuous_image_attn* updates
    if (t >= 0.0 && pain_continuous_image_attn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pain_continuous_image_attn.tStart = t;  // (not accounting for frame time here)
      pain_continuous_image_attn.frameNStart = frameN;  // exact frame index
      
      pain_continuous_image_attn.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pain_continuous_image_attn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pain_continuous_image_attn.setAutoDraw(false);
    }
  */
    
    // *most_pain_attn* updates
    if (t >= 0.0 && most_pain_attn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_attn.tStart = t;  // (not accounting for frame time here)
      most_pain_attn.frameNStart = frameN;  // exact frame index
      
      most_pain_attn.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_attn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_attn.setAutoDraw(false);
    }
    
    // *least_pain_attn* updates
    if (t >= 0.0 && least_pain_attn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_attn.tStart = t;  // (not accounting for frame time here)
      least_pain_attn.frameNStart = frameN;  // exact frame index
      
      least_pain_attn.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_attn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_attn.setAutoDraw(false);
    }

      // *slider_attn* updates
    if (t >= 0.0 && slider_attn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_attn.tStart = t;  // (not accounting for frame time here)
      slider_attn.frameNStart = frameN;  // exact frame index
      
      slider_attn.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_attn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_attn.setAutoDraw(false);
    }

      // *mouse_attn* updates
    if (t >= 0.0 && mouse_attn.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        mouse_attn.tStart = t;  // (not accounting for frame time here)
        mouse_attn.frameNStart = frameN;  // exact frame index
        
        mouse_attn.status = PsychoJS.Status.STARTED;
        prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
        }
      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (mouse_attn.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        mouse_attn.status = PsychoJS.Status.FINISHED;
    }
      if (mouse_attn.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
          _mouseButtons = mouse_attn.getPressed();
          _mouseXYs = mouse_attn.getPos();
          mouse_attn.x.push(_mouseXYs[0]);
          mouse_attn.y.push(_mouseXYs[1]);
          mouse_attn.leftButton.push(_mouseButtons[0]);
          mouse_attn.midButton.push(_mouseButtons[1]);
          mouse_attn.rightButton.push(_mouseButtons[2]);
          mouse_attn.time.push(mouse_attn.mouseClock.getTime());
          }


    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attn_checkComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attn_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attn_check' ---
    for (const thisComponent of attn_checkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
    //if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
    //if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
    //if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
    //if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
    //if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
    //if (mouse_3.clicked_name) {  psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])};
    
    // the Routine "attn_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var attn_check_2Components;
function attn_check_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attn_check_2' ---
    t = 0;
    attn_check_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_attn_2.x = [];
    mouse_attn_2.y = [];
    mouse_attn_2.leftButton = [];
    mouse_attn_2.midButton = [];
    mouse_attn_2.rightButton = [];
    mouse_attn_2.time = [];
    mouse_attn_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    //slider_attn_2.markerPos = (mouse_attn_2.getPos()[1] - bottom)/(top - bottom);
    // keep track of which components have finished
    attn_check_2Components = [];
    attn_check_2Components.push(mouse_attn_2);
    attn_check_2Components.push(attn_check_image_2);
    attn_check_2Components.push(attn_check_instructions_2);
    attn_check_2Components.push(horizontal_bottom_attn_2);
    attn_check_2Components.push(horiozntal_top_attn_2);
    attn_check_2Components.push(vertical_attn_2);
    attn_check_2Components.push(most_pain_attn_2);
    attn_check_2Components.push(least_pain_attn_2);
    attn_check_2Components.push(slider_attn_2);

    
    for (const thisComponent of attn_check_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attn_check_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attn_check_2' ---
    // get current time
    t = attn_check_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_attn_2* updates
    if (t >= 0.0 && mouse_attn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_attn_2.tStart = t;  // (not accounting for frame time here)
      mouse_attn_2.frameNStart = frameN;  // exact frame index
      
      mouse_attn_2.status = PsychoJS.Status.STARTED;
      mouse_attn_2.mouseClock.reset();
      prevButtonState = mouse_attn_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_attn_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_attn_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [attn_check_image_2]) {
            if (obj.contains(mouse_attn_2)) {
              gotValidClick = true;
              mouse_attn_2.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_attn_2.getPos();
          mouse_attn_2.x.push(_mouseXYs[0]);
          mouse_attn_2.y.push(_mouseXYs[1]);
          mouse_attn_2.leftButton.push(_mouseButtons[0]);
          mouse_attn_2.midButton.push(_mouseButtons[1]);
          mouse_attn_2.rightButton.push(_mouseButtons[2]);
          mouse_attn_2.time.push(mouse_attn_2.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }

    
    // *attn_check_image_2* updates
    if (t >= 0.0 && attn_check_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_image_2.tStart = t;  // (not accounting for frame time here)
      attn_check_image_2.frameNStart = frameN;  // exact frame index
      
      attn_check_image_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_image_2.setAutoDraw(false);
    }

    
    // *attn_check_instructions_2* updates
    if (t >= 0.0 && attn_check_instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_instructions_2.tStart = t;  // (not accounting for frame time here)
      attn_check_instructions_2.frameNStart = frameN;  // exact frame index
      
      attn_check_instructions_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_instructions_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_instructions_2.setAutoDraw(false);
    }

/*
    // *rectangle_2* updates
    if (t >= 0.0 && rectangle_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        rectangle_2.tStart = t;  // (not accounting for frame time here)
        rectangle_2.frameNStart = frameN;  // exact frame index
        
        rectangle_2.setAutoDraw(true);
      }
  
      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (rectangle_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          rectangle_2.setAutoDraw(false);
      }
  
      
      // *circle_2* updates
    if (t >= 0.0 && circle_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        circle_2.tStart = t;  // (not accounting for frame time here)
        circle_2.frameNStart = frameN;  // exact frame index
        
        circle_2.setAutoDraw(true);
      }
  
      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (circle_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          circle_2.setAutoDraw(false);
      }
*/

      // *vertical_attn_2* updates
    if (t >= 0.0 && vertical_attn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_attn_2.tStart = t;  // (not accounting for frame time here)
      vertical_attn_2.frameNStart = frameN;  // exact frame index
      
      vertical_attn_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_attn_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_attn_2.setAutoDraw(false);
    }
    
    // *horiozntal_top_attn_2* updates
    if (t >= 0.0 && horiozntal_top_attn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horiozntal_top_attn_2.tStart = t;  // (not accounting for frame time here)
      horiozntal_top_attn_2.frameNStart = frameN;  // exact frame index
      
      horiozntal_top_attn_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horiozntal_top_attn_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horiozntal_top_attn_2.setAutoDraw(false);
    }
    
    // *horizontal_bottom_attn_2* updates
    if (t >= 0.0 && horizontal_bottom_attn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_attn_2.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_attn_2.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_attn_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_attn_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_attn_2.setAutoDraw(false);
    }
/*
    // *pain_continuous_image_attn_2* updates
    if (t >= 0.0 && pain_continuous_image_attn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pain_continuous_image_attn_2.tStart = t;  // (not accounting for frame time here)
      pain_continuous_image_attn_2.frameNStart = frameN;  // exact frame index
      
      pain_continuous_image_attn_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pain_continuous_image_attn_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pain_continuous_image_attn_2.setAutoDraw(false);
    }
  */ 
    // *most_pain_attn_2* updates
    if (t >= 0.0 && most_pain_attn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_attn_2.tStart = t;  // (not accounting for frame time here)
      most_pain_attn_2.frameNStart = frameN;  // exact frame index
      
      most_pain_attn_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_attn_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_attn_2.setAutoDraw(false);
    }
    
    // *least_pain_attn_2* updates
    if (t >= 0.0 && least_pain_attn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_attn_2.tStart = t;  // (not accounting for frame time here)
      least_pain_attn_2.frameNStart = frameN;  // exact frame index
      
      least_pain_attn_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_attn_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_attn_2.setAutoDraw(false);
    }

      // *slider_attn_2* updates
    if (t >= 0.0 && slider_attn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_attn_2.tStart = t;  // (not accounting for frame time here)
      slider_attn_2.frameNStart = frameN;  // exact frame index
      
      slider_attn_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_attn_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_attn_2.setAutoDraw(false);
    }

    // *mouse_attn_2* updates
    if (t >= 0.0 && mouse_attn_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        mouse_attn_2.tStart = t;  // (not accounting for frame time here)
        mouse_attn_2.frameNStart = frameN;  // exact frame index
        
        mouse_attn_2.status = PsychoJS.Status.STARTED;
        prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
        }
      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (mouse_attn_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        mouse_attn_2.status = PsychoJS.Status.FINISHED;
    }
      if (mouse_attn_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
          _mouseButtons = mouse_attn_2.getPressed();
          _mouseXYs = mouse_attn_2.getPos();
          mouse_attn_2.x.push(_mouseXYs[0]);
          mouse_attn_2.y.push(_mouseXYs[1]);
          mouse_attn_2.leftButton.push(_mouseButtons[0]);
          mouse_attn_2.midButton.push(_mouseButtons[1]);
          mouse_attn_2.rightButton.push(_mouseButtons[2]);
          mouse_attn_2.time.push(mouse_attn_2.mouseClock.getTime());
          }
  

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attn_check_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attn_check_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attn_check_2' ---
    for (const thisComponent of attn_check_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "attn_check_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var attn_check_3Components;
function attn_check_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attn_check_3' ---
    t = 0;
    attn_check_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_attn_3.x = [];
    mouse_attn_3.y = [];
    mouse_attn_3.leftButton = [];
    mouse_attn_3.midButton = [];
    mouse_attn_3.rightButton = [];
    mouse_attn_3.time = [];
    mouse_attn_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    //slider_attn_3.markerPos = (mouse_attn_3.getPos()[1] - bottom)/(top - bottom);
    // keep track of which components have finished
    attn_check_3Components = [];
    attn_check_3Components.push(mouse_attn_3);
    attn_check_3Components.push(attn_check_image_3);
    attn_check_3Components.push(attn_check_instructions_3);
    attn_check_3Components.push(horizontal_bottom_attn_3);
    attn_check_3Components.push(horiozntal_top_attn_3);
    attn_check_3Components.push(vertical_attn_3);
    attn_check_3Components.push(most_pain_attn_3);
    attn_check_3Components.push(least_pain_attn_3);
    attn_check_3Components.push(slider_attn_3);

    
    for (const thisComponent of attn_check_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attn_check_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attn_check_3' ---
    // get current time
    t = attn_check_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_attn_3* updates
    if (t >= 0.0 && mouse_attn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_attn_3.tStart = t;  // (not accounting for frame time here)
      mouse_attn_3.frameNStart = frameN;  // exact frame index
      
      mouse_attn_3.status = PsychoJS.Status.STARTED;
      mouse_attn_3.mouseClock.reset();
      prevButtonState = mouse_attn_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_attn_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_attn_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [attn_check_image_3]) {
            if (obj.contains(mouse_attn_3)) {
              gotValidClick = true;
              mouse_attn_3.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_attn_3.getPos();
          mouse_attn_3.x.push(_mouseXYs[0]);
          mouse_attn_3.y.push(_mouseXYs[1]);
          mouse_attn_3.leftButton.push(_mouseButtons[0]);
          mouse_attn_3.midButton.push(_mouseButtons[1]);
          mouse_attn_3.rightButton.push(_mouseButtons[2]);
          mouse_attn_3.time.push(mouse_attn_3.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }

    
    // *attn_check_image_3* updates
    if (t >= 0.0 && attn_check_image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_image_3.tStart = t;  // (not accounting for frame time here)
      attn_check_image_3.frameNStart = frameN;  // exact frame index
      
      attn_check_image_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_image_3.setAutoDraw(false);
    }

    
    // *attn_check_instructions_3* updates
    if (t >= 0.0 && attn_check_instructions_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attn_check_instructions_3.tStart = t;  // (not accounting for frame time here)
      attn_check_instructions_3.frameNStart = frameN;  // exact frame index
      
      attn_check_instructions_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attn_check_instructions_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        attn_check_instructions_3.setAutoDraw(false);
    }

      // *vertical_attn_3* updates
    if (t >= 0.0 && vertical_attn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_attn_3.tStart = t;  // (not accounting for frame time here)
      vertical_attn_3.frameNStart = frameN;  // exact frame index
      
      vertical_attn_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_attn_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_attn_3.setAutoDraw(false);
    }
    
    // *horiozntal_top_attn_3* updates
    if (t >= 0.0 && horiozntal_top_attn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horiozntal_top_attn_3.tStart = t;  // (not accounting for frame time here)
      horiozntal_top_attn_3.frameNStart = frameN;  // exact frame index
      
      horiozntal_top_attn_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horiozntal_top_attn_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horiozntal_top_attn_3.setAutoDraw(false);
    }
    
    // *horizontal_bottom_attn_3* updates
    if (t >= 0.0 && horizontal_bottom_attn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_attn_3.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_attn_3.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_attn_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_attn_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_attn_3.setAutoDraw(false);
    }
    
    // *most_pain_attn_3* updates
    if (t >= 0.0 && most_pain_attn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_attn_3.tStart = t;  // (not accounting for frame time here)
      most_pain_attn_3.frameNStart = frameN;  // exact frame index
      
      most_pain_attn_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_attn_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_attn_3.setAutoDraw(false);
    }
    
    // *least_pain_attn_3* updates
    if (t >= 0.0 && least_pain_attn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_attn_3.tStart = t;  // (not accounting for frame time here)
      least_pain_attn_3.frameNStart = frameN;  // exact frame index
      
      least_pain_attn_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_attn_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_attn_3.setAutoDraw(false);
    }

      // *slider_attn_3* updates
    if (t >= 0.0 && slider_attn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_attn_3.tStart = t;  // (not accounting for frame time here)
      slider_attn_3.frameNStart = frameN;  // exact frame index
      
      slider_attn_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_attn_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_attn_3.setAutoDraw(false);
    }

      // *mouse_attn_3* updates
    if (t >= 0.0 && mouse_attn_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        mouse_attn_3.tStart = t;  // (not accounting for frame time here)
        mouse_attn_3.frameNStart = frameN;  // exact frame index
        
        mouse_attn_3.status = PsychoJS.Status.STARTED;
        prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
        }
      frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
      if (mouse_attn_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        mouse_attn_3.status = PsychoJS.Status.FINISHED;
    }
      if (mouse_attn_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
          _mouseButtons = mouse_attn_3.getPressed();
          _mouseXYs = mouse_attn_3.getPos();
          mouse_attn_3.x.push(_mouseXYs[0]);
          mouse_attn_3.y.push(_mouseXYs[1]);
          mouse_attn_3.leftButton.push(_mouseButtons[0]);
          mouse_attn_3.midButton.push(_mouseButtons[1]);
          mouse_attn_3.rightButton.push(_mouseButtons[2]);
          mouse_attn_3.time.push(mouse_attn_3.mouseClock.getTime());
          }
  

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attn_check_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attn_check_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attn_check_3' ---
    for (const thisComponent of attn_check_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
   
    // the Routine "attn_check_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pain_predictionComponents;
function pain_predictionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pain_prediction' ---
    t = 0;
    pain_predictionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    pain_predict_slider.reset()
    // keep track of which components have finished
    pain_predictionComponents = [];
    pain_predictionComponents.push(vertical_2);
    pain_predictionComponents.push(horizontal_bottom_2);
    pain_predictionComponents.push(horizontal_top_2);
    pain_predictionComponents.push(pain_predict_image);
    pain_predictionComponents.push(most_pain_2);
    pain_predictionComponents.push(least_pain_2);
    pain_predictionComponents.push(pain_predict_slider);
    
    for (const thisComponent of pain_predictionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pain_predictionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pain_prediction' ---
    // get current time
    t = pain_predictionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vertical_2* updates
    if (t >= 0.0 && vertical_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_2.tStart = t;  // (not accounting for frame time here)
      vertical_2.frameNStart = frameN;  // exact frame index
      
      vertical_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_2.setAutoDraw(false);
    }

    
    // *horizontal_bottom_2* updates
    if (t >= 0.0 && horizontal_bottom_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_2.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_2.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_bottom_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_bottom_2.setAutoDraw(false);
    }

    
    // *horizontal_top_2* updates
    if (t >= 0.0 && horizontal_top_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_top_2.tStart = t;  // (not accounting for frame time here)
      horizontal_top_2.frameNStart = frameN;  // exact frame index
      
      horizontal_top_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_top_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_top_2.setAutoDraw(false);
    }

    
    // *pain_predict_image* updates
    if (t >= 0.0 && pain_predict_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pain_predict_image.tStart = t;  // (not accounting for frame time here)
      pain_predict_image.frameNStart = frameN;  // exact frame index
      
      pain_predict_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pain_predict_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pain_predict_image.setAutoDraw(false);
    }

    
    // *most_pain_2* updates
    if (t >= 0.0 && most_pain_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_2.tStart = t;  // (not accounting for frame time here)
      most_pain_2.frameNStart = frameN;  // exact frame index
      
      most_pain_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (most_pain_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      most_pain_2.setAutoDraw(false);
    }

    
    // *least_pain_2* updates
    if (t >= 0.0 && least_pain_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_2.tStart = t;  // (not accounting for frame time here)
      least_pain_2.frameNStart = frameN;  // exact frame index
      
      least_pain_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (least_pain_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      least_pain_2.setAutoDraw(false);
    }

    
    // *pain_predict_slider* updates
    if (t >= 0.0 && pain_predict_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pain_predict_slider.tStart = t;  // (not accounting for frame time here)
      pain_predict_slider.frameNStart = frameN;  // exact frame index
      
      pain_predict_slider.setAutoDraw(true);
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pain_predict_slider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pain_predict_slider.setAutoDraw(false);
    }

    // Check pain_predict_slider for response to end routine
    if (pain_predict_slider.getRating() !== undefined && pain_predict_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }


    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pain_predictionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pain_predictionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pain_prediction' ---
    for (const thisComponent of pain_predictionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pain_predict_slider.response', pain_predict_slider.getRating());
    psychoJS.experiment.addData('pain_predict_slider.rt', pain_predict_slider.getRT());
    psychoJS.experiment.addData('pain_predict_slider.history', pain_predict_slider.getHistory());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}



var pain_confidenceComponents;
function pain_confidenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pain_confidence' ---
    t = 0;
    pain_confidenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    confidence_slider_2.reset()
    // keep track of which components have finished
    pain_confidenceComponents = [];
    pain_confidenceComponents.push(horizontal_central);
    pain_confidenceComponents.push(vertical_right);
    pain_confidenceComponents.push(vertical_left);
    pain_confidenceComponents.push(confidence_image);
    pain_confidenceComponents.push(confidence_slider_2);
    
    for (const thisComponent of pain_confidenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pain_confidenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pain_confidence' ---
    // get current time
    t = pain_confidenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *horizontal_central* updates
    if (t >= 0.0 && horizontal_central.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_central.tStart = t;  // (not accounting for frame time here)
      horizontal_central.frameNStart = frameN;  // exact frame index
      
      horizontal_central.setAutoDraw(true);
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (horizontal_central.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      horizontal_central.setAutoDraw(false);
    }

    
    // *vertical_right* updates
    if (t >= 0.0 && vertical_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_right.tStart = t;  // (not accounting for frame time here)
      vertical_right.frameNStart = frameN;  // exact frame index
      
      vertical_right.setAutoDraw(true);
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_right.setAutoDraw(false);
    }

    
    // *vertical_left* updates
    if (t >= 0.0 && vertical_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_left.tStart = t;  // (not accounting for frame time here)
      vertical_left.frameNStart = frameN;  // exact frame index
      
      vertical_left.setAutoDraw(true);
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vertical_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vertical_left.setAutoDraw(false);
    }

    
    // *confidence_image* updates
    if (t >= 0.0 && confidence_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_image.tStart = t;  // (not accounting for frame time here)
      confidence_image.frameNStart = frameN;  // exact frame index
      
      confidence_image.setAutoDraw(true);
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (confidence_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      confidence_image.setAutoDraw(false);
    }

    
    // *confidence_slider_2* updates
    if (t >= 0 && confidence_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_slider_2.tStart = t;  // (not accounting for frame time here)
      confidence_slider_2.frameNStart = frameN;  // exact frame index
      
      confidence_slider_2.setAutoDraw(true);
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (confidence_slider_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      confidence_slider_2.setAutoDraw(false);
    }

    // Check confidence_slider_2 for response to end routine
    if (confidence_slider_2.getRating() !== undefined && confidence_slider_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }

    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pain_confidenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pain_confidenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pain_confidence' ---
    for (const thisComponent of pain_confidenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('confidence_slider_2.response', confidence_slider_2.getRating());
    psychoJS.experiment.addData('confidence_slider_2.rt', confidence_slider_2.getRT());
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_2_endComponents;
function instruction_2_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2' ---
    t = 0;
    instruction_2_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2_end.x = [];
    mouse_2_end.y = [];
    mouse_2_end.leftButton = [];
    mouse_2_end.midButton = [];
    mouse_2_end.rightButton = [];
    mouse_2_end.time = [];
    mouse_2_end.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instruction_2_endComponents = [];
    instruction_2_endComponents.push(next_button_2_end);
    instruction_2_endComponents.push(mouse_2_end);
    instruction_2_endComponents.push(slider_2_end);
    instruction_2_endComponents.push(text_2_end);
    
    for (const thisComponent of instruction_2_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_2_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2_end' ---
    // get current time
    t = instruction_2_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *next_button_2* updates
    if (t >= 0.0 && next_button_2_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_2_end.tStart = t;  // (not accounting for frame time here)
      next_button_2_end.frameNStart = frameN;  // exact frame index
      
      next_button_2_end.setAutoDraw(true);
    }

    // *mouse_2_end* updates
    if (t >= 0.0 && mouse_2_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2_end.tStart = t;  // (not accounting for frame time here)
      mouse_2_end.frameNStart = frameN;  // exact frame index
      
      mouse_2_end.status = PsychoJS.Status.STARTED;
      mouse_2_end.mouseClock.reset();
      prevButtonState = mouse_2_end.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2_end.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2_end.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_button_2_end]) {
            if (obj.contains(mouse_2_end)) {
              gotValidClick = true;
              mouse_2_end.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_2_end.getPos();
          mouse_2_end.x.push(_mouseXYs[0]);
          mouse_2_end.y.push(_mouseXYs[1]);
          mouse_2_end.leftButton.push(_mouseButtons[0]);
          mouse_2_end.midButton.push(_mouseButtons[1]);
          mouse_2_end.rightButton.push(_mouseButtons[2]);
          mouse_2_end.time.push(mouse_2_end.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *slider_2_end* updates
    if (t >= 0.0 && slider_2_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2_end.tStart = t;  // (not accounting for frame time here)
      slider_2_end.frameNStart = frameN;  // exact frame index
      
      slider_2_end.setAutoDraw(true);
    }

    
    // *text_2_end* updates
    if (t >= 0.0 && text_2_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2_end.tStart = t;  // (not accounting for frame time here)
      text_2_end.frameNStart = frameN;  // exact frame index
      
      text_2_end.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_2_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_2_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2_end' ---
    for (const thisComponent of instruction_2_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    //if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    //if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    //if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    //if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    //if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    //if (mouse_2.clicked_name) {  psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name[0])};
    
    // the Routine "instruction_2_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var end_screenComponents;
function end_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_screen' ---
    t = 0;
    end_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    end_screenComponents = [];
    end_screenComponents.push(ending);
    end_screenComponents.push(finish_button);
    end_screenComponents.push(mouse);
    
    for (const thisComponent of end_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_screen' ---
    // get current time
    t = end_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ending* updates
    if (t >= 0.0 && ending.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ending.tStart = t;  // (not accounting for frame time here)
      ending.frameNStart = frameN;  // exact frame index
      
      ending.setAutoDraw(true);
    }

    
    // *finish_button* updates
    if (t >= 0.0 && finish_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_button.tStart = t;  // (not accounting for frame time here)
      finish_button.frameNStart = frameN;  // exact frame index
      
      finish_button.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [finish_button]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function end_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_screen' ---
    for (const thisComponent of end_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    //if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    //if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    //if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    //if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    //if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    //if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // the Routine "end_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

//add end failed 

var end_failedComponents;
function end_failedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_failed' ---
    t = 0;
    end_failedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse_failed.x = [];
    mouse_failed.y = [];
    mouse_failed.leftButton = [];
    mouse_failed.midButton = [];
    mouse_failed.rightButton = [];
    mouse_failed.time = [];
    mouse_failed.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    end_failedComponents = [];
    end_failedComponents.push(end_failed);
    end_failedComponents.push(finish_button_failed);
    end_failedComponents.push(mouse_failed);
    
    for (const thisComponent of end_failedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_failedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_failed' ---
    // get current time
    t = end_failedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_failed* updates
    if (t >= 0.0 && end_failed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_failed.tStart = t;  // (not accounting for frame time here)
      end_failed.frameNStart = frameN;  // exact frame index
      
      end_failed.setAutoDraw(true);
    }

    
    // *finish_button_failed* updates
    if (t >= 0.0 && finish_button_failed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_button_failed.tStart = t;  // (not accounting for frame time here)
      finish_button_failed.frameNStart = frameN;  // exact frame index
      
      finish_button_failed.setAutoDraw(true);
    }

    // *mouse_failed* updates
    if (t >= 0.0 && mouse_failed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_failed.tStart = t;  // (not accounting for frame time here)
      mouse_failed.frameNStart = frameN;  // exact frame index
      
      mouse_failed.status = PsychoJS.Status.STARTED;
      mouse_failed.mouseClock.reset();
      prevButtonState = mouse_failed.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_failed.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_failed.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [finish_button_failed]) {
            if (obj.contains(mouse_failed)) {
              gotValidClick = true;
              mouse_failed.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_failed.getPos();
          mouse_failed.x.push(_mouseXYs[0]);
          mouse_failed.y.push(_mouseXYs[1]);
          mouse_failed.leftButton.push(_mouseButtons[0]);
          mouse_failed.midButton.push(_mouseButtons[1]);
          mouse_failed.rightButton.push(_mouseButtons[2]);
          mouse_failed.time.push(mouse_failed.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_failedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_failedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_failed' ---
    for (const thisComponent of end_failedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    //if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    //if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    //if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    //if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    //if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    //if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    //if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // the Routine "end_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
