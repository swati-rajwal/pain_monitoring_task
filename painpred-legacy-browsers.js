/***************** 
 * Painpred Test *
 *****************/


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
const calibration_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(calibration_loopLoopBegin(calibration_loopLoopScheduler));
flowScheduler.add(calibration_loopLoopScheduler);
flowScheduler.add(calibration_loopLoopEnd);
flowScheduler.add(instruction_1RoutineBegin());
flowScheduler.add(instruction_1RoutineEachFrame());
flowScheduler.add(instruction_1RoutineEnd());
flowScheduler.add(instruction_2RoutineBegin());
flowScheduler.add(instruction_2RoutineEachFrame());
flowScheduler.add(instruction_2RoutineEnd());
flowScheduler.add(instruction_3RoutineBegin());
flowScheduler.add(instruction_3RoutineEachFrame());
flowScheduler.add(instruction_3RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
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
    {'name': 'instruction_images/second_slider_image.png', 'path': 'instruction_images/second_slider_image.png'},
    {'name': 'instruction_images/vertical_white_rectangle.png', 'path': 'instruction_images/vertical_white_rectangle.png'},
    {'name': 'instruction_images/calibration_bottom.png', 'path': 'instruction_images/calibration_bottom.png'},
    {'name': 'instruction_images/hori_white_rectangle.png', 'path': 'instruction_images/hori_white_rectangle.png'},
    {'name': 'instruction_images/next_button.png', 'path': 'instruction_images/next_button.png'},
    {'name': 'instruction_images/start_button.png', 'path': 'instruction_images/start_button.png'},
    {'name': 'instruction_images/finish_button.png', 'path': 'instruction_images/finish_button.png'},
    {'name': 'instruction_images/confidence_slider.png', 'path': 'instruction_images/confidence_slider.png'},
    {'name': 'instruction_images/confidence.PNG', 'path': 'instruction_images/confidence.PNG'},
    {'name': 'instruction_images/calibration_top.png', 'path': 'instruction_images/calibration_top.png'},
    {'name': 'instruction_images/pain_pred.PNG', 'path': 'instruction_images/pain_pred.PNG'},
    {'name': 'instruction_images/pain_expect.PNG', 'path': 'instruction_images/pain_expect.PNG'},
    {'name': 'instruction_images/first_slider_image.png', 'path': 'instruction_images/first_slider_image.png'}
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
  
  return Scheduler.Event.NEXT;
}


var sitClock;
var instruction_sit_text;
var next_button_sit;
var mouse_sit;
var calibration_topClock;
var vertical_calibration_top;
var horizontal_calibration_top_top;
var horizontal_calibration_top_bottom;
var continuous_slider_calibrate_top;
var mouse_top;
var calibration_top_instructions;
var blank1sClock;
var text;
var calibration_bottomClock;
var vertical_calibration_bottom;
var horizontal_calibration_bottom_bottom;
var horizontal_calibration_bottom_top;
var continuous_slider_calibrate_bottom;
var mouse_bottom;
var calibration_bottom_instructions;
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
var continuous_pain_ratingClock;
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
var end_screenClock;
var ending;
var finish_button;
var mouse;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "sit"
  sitClock = new util.Clock();
  instruction_sit_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_sit_text',
    text: 'Thank you for agreeing to participate in our study, \n\nplease ensure that you are sitting down for the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  next_button_sit = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_button_sit', units : undefined, 
    image : 'instruction_images/next_button.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_sit = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_sit.mouseClock = new util.Clock();
  // Initialize components for Routine "calibration_top"
  calibration_topClock = new util.Clock();
  vertical_calibration_top = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_calibration_top', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horizontal_calibration_top_top = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_calibration_top_top', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_calibration_top_bottom = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_calibration_top_bottom', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  continuous_slider_calibrate_top = new visual.Slider({
    win: psychoJS.window, name: 'continuous_slider_calibrate_top',
    startValue: undefined,
    size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([0.3333, 0.3333, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  mouse_top = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_top.mouseClock = new util.Clock();
  calibration_top_instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'calibration_top_instructions', units : undefined, 
    image : 'instruction_images/calibration_top.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
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
  
  // Initialize components for Routine "calibration_bottom"
  calibration_bottomClock = new util.Clock();
  vertical_calibration_bottom = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_calibration_bottom', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horizontal_calibration_bottom_bottom = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_calibration_bottom_bottom', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_calibration_bottom_top = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_calibration_bottom_top', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  continuous_slider_calibrate_bottom = new visual.Slider({
    win: psychoJS.window, name: 'continuous_slider_calibrate_bottom',
    startValue: undefined,
    size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  mouse_bottom = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_bottom.mouseClock = new util.Clock();
  calibration_bottom_instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'calibration_bottom_instructions', units : undefined, 
    image : 'instruction_images/calibration_bottom.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "instruction_1"
  instruction_1Clock = new util.Clock();
  next_button_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_button_1', units : undefined, 
    image : 'instruction_images/next_button.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_1.mouseClock = new util.Clock();
  slider_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_1', units : undefined, 
    image : 'instruction_images/first_slider_image.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.12)], size : [0.3, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  instruction_1_text_new = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_1_text_new',
    text: 'You will be asked to rate how much pain you feel \nin real time, using a slider like this. \n\nPlease rate pain continuously and ensure to always \nhave your finger on the screen \neven if the pain level is not changing.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instruction_2"
  instruction_2Clock = new util.Clock();
  next_button_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_button_2', units : undefined, 
    image : 'instruction_images/next_button.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
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
    ori : 0.0, pos : [0, (- 0.12)], size : [0.3, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Sometimes, you will be asked to predict how much pain \nyou will experience in one minute from now, \non a slider like this. Don’toverthink it, \nwe will collect your first response.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
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
    ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  slider_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_3', units : undefined, 
    image : 'instruction_images/confidence_slider.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.375, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  instruction_3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_3_text',
    text: 'Next, you will be asked to rate how confident you are \nin your prediction, on a scale ranging from unsure to sure.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "continuous_pain_rating"
  continuous_pain_ratingClock = new util.Clock();
  vertical_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_1', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horiozntal_top_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horiozntal_top_1', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_bottom_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_1', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  pain_continuous_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pain_continuous_image', units : undefined, 
    image : 'instruction_images/pain_pred.PNG', mask : undefined,
    ori : 0.0, pos : [0.0, 0.45], size : [0.627, 0.09405],
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
    pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
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
    pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  continuous_pain_slider = new visual.Slider({
    win: psychoJS.window, name: 'continuous_pain_slider',
    startValue: undefined,
    size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([1.0, 0.6, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  mouse_slider = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_slider.mouseClock = new util.Clock();
  // Initialize components for Routine "pain_prediction"
  pain_predictionClock = new util.Clock();
  vertical_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_2', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)], size : [0.025, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  horizontal_bottom_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_bottom_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  horizontal_top_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_top_2', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, 0.35], size : [0.1, 0.02],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  pain_predict_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pain_predict_image', units : undefined, 
    image : 'instruction_images/pain_expect.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0.45], size : [0.5544, 0.1188],
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
    pos: [(- 0.15), 0.352], height: 0.03,  wrapWidth: undefined, ori: 0.0,
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
    pos: [(- 0.15), (- 0.445)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  pain_predict_slider = new visual.Slider({
    win: psychoJS.window, name: 'pain_predict_slider',
    startValue: undefined,
    size: [0.1, 0.8], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('white'), markerColor: new util.Color([0.3333, 0.3333, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  // Initialize components for Routine "pain_confidence"
  pain_confidenceClock = new util.Clock();
  horizontal_central = new visual.ImageStim({
    win : psychoJS.window,
    name : 'horizontal_central', units : undefined, 
    image : 'instruction_images/hori_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.6, 0.025],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  vertical_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_right', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [0.3, 0], size : [0.02, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  vertical_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vertical_left', units : undefined, 
    image : 'instruction_images/vertical_white_rectangle.png', mask : undefined,
    ori : 0.0, pos : [(- 0.3), 0], size : [0.02, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  confidence_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'confidence_image', units : undefined, 
    image : 'instruction_images/confidence.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0.35], size : [0.5544, 0.1188],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  confidence_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'confidence_slider_2',
    startValue: undefined,
    size: [0.6, 0.1], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["Unsure", "Sure"], fontSize: 0.03, ticks: [1, 2],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  // Initialize components for Routine "end_screen"
  end_screenClock = new util.Clock();
  ending = new visual.TextStim({
    win: psychoJS.window,
    name: 'ending',
    text: 'The session is over! \nThank you for completing the task. \n\nPlease click on the button below to \nfinish the game.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  finish_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'finish_button', units : undefined, 
    image : 'instruction_images/finish_button.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
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
    
    sitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    sitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    sitComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_sit.x) {  psychoJS.experiment.addData('mouse_sit.x', mouse_sit.x[0])};
    if (mouse_sit.y) {  psychoJS.experiment.addData('mouse_sit.y', mouse_sit.y[0])};
    if (mouse_sit.leftButton) {  psychoJS.experiment.addData('mouse_sit.leftButton', mouse_sit.leftButton[0])};
    if (mouse_sit.midButton) {  psychoJS.experiment.addData('mouse_sit.midButton', mouse_sit.midButton[0])};
    if (mouse_sit.rightButton) {  psychoJS.experiment.addData('mouse_sit.rightButton', mouse_sit.rightButton[0])};
    if (mouse_sit.time) {  psychoJS.experiment.addData('mouse_sit.time', mouse_sit.time[0])};
    if (mouse_sit.clicked_name) {  psychoJS.experiment.addData('mouse_sit.clicked_name', mouse_sit.clicked_name[0])};
    
    // the Routine "sit" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var calibration_loop;
function calibration_loopLoopBegin(calibration_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    calibration_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'calibration_loop'
    });
    psychoJS.experiment.addLoop(calibration_loop); // add the loop to the experiment
    currentLoop = calibration_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    calibration_loop.forEach(function() {
      snapshot = calibration_loop.getSnapshot();
    
      calibration_loopLoopScheduler.add(importConditions(snapshot));
      calibration_loopLoopScheduler.add(calibration_topRoutineBegin(snapshot));
      calibration_loopLoopScheduler.add(calibration_topRoutineEachFrame());
      calibration_loopLoopScheduler.add(calibration_topRoutineEnd(snapshot));
      calibration_loopLoopScheduler.add(blank1sRoutineBegin(snapshot));
      calibration_loopLoopScheduler.add(blank1sRoutineEachFrame());
      calibration_loopLoopScheduler.add(blank1sRoutineEnd(snapshot));
      calibration_loopLoopScheduler.add(calibration_bottomRoutineBegin(snapshot));
      calibration_loopLoopScheduler.add(calibration_bottomRoutineEachFrame());
      calibration_loopLoopScheduler.add(calibration_bottomRoutineEnd(snapshot));
      calibration_loopLoopScheduler.add(calibration_loopLoopEndIteration(calibration_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function calibration_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(calibration_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function calibration_loopLoopEndIteration(scheduler, snapshot) {
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


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 20, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      trialsLoopScheduler.add(continuous_pain_ratingRoutineBegin(snapshot));
      trialsLoopScheduler.add(continuous_pain_ratingRoutineEachFrame());
      trialsLoopScheduler.add(continuous_pain_ratingRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      trialsLoopScheduler.add(pain_predictionRoutineBegin(snapshot));
      trialsLoopScheduler.add(pain_predictionRoutineEachFrame());
      trialsLoopScheduler.add(pain_predictionRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank1sRoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1sRoutineEachFrame());
      trialsLoopScheduler.add(blank1sRoutineEnd(snapshot));
      trialsLoopScheduler.add(pain_confidenceRoutineBegin(snapshot));
      trialsLoopScheduler.add(pain_confidenceRoutineEachFrame());
      trialsLoopScheduler.add(pain_confidenceRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
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


var calibration_topComponents;
function calibration_topRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'calibration_top' ---
    t = 0;
    calibration_topClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    continuous_slider_calibrate_top.reset()
    // setup some python lists for storing info about the mouse_top
    // current position of the mouse:
    mouse_top.x = [];
    mouse_top.y = [];
    mouse_top.leftButton = [];
    mouse_top.midButton = [];
    mouse_top.rightButton = [];
    mouse_top.time = [];
    mouse_top.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_top.mouseClock.reset();
    // keep track of which components have finished
    calibration_topComponents = [];
    calibration_topComponents.push(vertical_calibration_top);
    calibration_topComponents.push(horizontal_calibration_top_top);
    calibration_topComponents.push(horizontal_calibration_top_bottom);
    calibration_topComponents.push(continuous_slider_calibrate_top);
    calibration_topComponents.push(mouse_top);
    calibration_topComponents.push(calibration_top_instructions);
    
    calibration_topComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function calibration_topRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'calibration_top' ---
    // get current time
    t = calibration_topClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vertical_calibration_top* updates
    if (t >= 0.0 && vertical_calibration_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_calibration_top.tStart = t;  // (not accounting for frame time here)
      vertical_calibration_top.frameNStart = frameN;  // exact frame index
      
      vertical_calibration_top.setAutoDraw(true);
    }

    
    // *horizontal_calibration_top_top* updates
    if (t >= 0.0 && horizontal_calibration_top_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_calibration_top_top.tStart = t;  // (not accounting for frame time here)
      horizontal_calibration_top_top.frameNStart = frameN;  // exact frame index
      
      horizontal_calibration_top_top.setAutoDraw(true);
    }

    
    // *horizontal_calibration_top_bottom* updates
    if (t >= 0.0 && horizontal_calibration_top_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_calibration_top_bottom.tStart = t;  // (not accounting for frame time here)
      horizontal_calibration_top_bottom.frameNStart = frameN;  // exact frame index
      
      horizontal_calibration_top_bottom.setAutoDraw(true);
    }

    
    // *continuous_slider_calibrate_top* updates
    if (t >= 0.0 && continuous_slider_calibrate_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continuous_slider_calibrate_top.tStart = t;  // (not accounting for frame time here)
      continuous_slider_calibrate_top.frameNStart = frameN;  // exact frame index
      
      continuous_slider_calibrate_top.setAutoDraw(true);
    }

    // *mouse_top* updates
    if (t >= 0.0 && mouse_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_top.tStart = t;  // (not accounting for frame time here)
      mouse_top.frameNStart = frameN;  // exact frame index
      
      mouse_top.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_top.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_top.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [horizontal_calibration_top_top]) {
            if (obj.contains(mouse_top)) {
              gotValidClick = true;
              mouse_top.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_top.getPos();
            mouse_top.x.push(_mouseXYs[0]);
            mouse_top.y.push(_mouseXYs[1]);
            mouse_top.leftButton.push(_mouseButtons[0]);
            mouse_top.midButton.push(_mouseButtons[1]);
            mouse_top.rightButton.push(_mouseButtons[2]);
            mouse_top.time.push(mouse_top.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *calibration_top_instructions* updates
    if (t >= 0.0 && calibration_top_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibration_top_instructions.tStart = t;  // (not accounting for frame time here)
      calibration_top_instructions.frameNStart = frameN;  // exact frame index
      
      calibration_top_instructions.setAutoDraw(true);
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
    calibration_topComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function calibration_topRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'calibration_top' ---
    calibration_topComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continuous_slider_calibrate_top.response', continuous_slider_calibrate_top.getRating());
    psychoJS.experiment.addData('continuous_slider_calibrate_top.rt', continuous_slider_calibrate_top.getRT());
    psychoJS.experiment.addData('continuous_slider_calibrate_top.history', continuous_slider_calibrate_top.getHistory());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_top.x) {  psychoJS.experiment.addData('mouse_top.x', mouse_top.x[0])};
    if (mouse_top.y) {  psychoJS.experiment.addData('mouse_top.y', mouse_top.y[0])};
    if (mouse_top.leftButton) {  psychoJS.experiment.addData('mouse_top.leftButton', mouse_top.leftButton[0])};
    if (mouse_top.midButton) {  psychoJS.experiment.addData('mouse_top.midButton', mouse_top.midButton[0])};
    if (mouse_top.rightButton) {  psychoJS.experiment.addData('mouse_top.rightButton', mouse_top.rightButton[0])};
    if (mouse_top.time) {  psychoJS.experiment.addData('mouse_top.time', mouse_top.time[0])};
    if (mouse_top.clicked_name) {  psychoJS.experiment.addData('mouse_top.clicked_name', mouse_top.clicked_name[0])};
    
    // the Routine "calibration_top" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
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
    
    blank1sComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    blank1sComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    blank1sComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var calibration_bottomComponents;
function calibration_bottomRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'calibration_bottom' ---
    t = 0;
    calibration_bottomClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    continuous_slider_calibrate_bottom.reset()
    // setup some python lists for storing info about the mouse_bottom
    // current position of the mouse:
    mouse_bottom.x = [];
    mouse_bottom.y = [];
    mouse_bottom.leftButton = [];
    mouse_bottom.midButton = [];
    mouse_bottom.rightButton = [];
    mouse_bottom.time = [];
    mouse_bottom.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_bottom.mouseClock.reset();
    // keep track of which components have finished
    calibration_bottomComponents = [];
    calibration_bottomComponents.push(vertical_calibration_bottom);
    calibration_bottomComponents.push(horizontal_calibration_bottom_bottom);
    calibration_bottomComponents.push(horizontal_calibration_bottom_top);
    calibration_bottomComponents.push(continuous_slider_calibrate_bottom);
    calibration_bottomComponents.push(mouse_bottom);
    calibration_bottomComponents.push(calibration_bottom_instructions);
    
    calibration_bottomComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function calibration_bottomRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'calibration_bottom' ---
    // get current time
    t = calibration_bottomClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vertical_calibration_bottom* updates
    if (t >= 0.0 && vertical_calibration_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_calibration_bottom.tStart = t;  // (not accounting for frame time here)
      vertical_calibration_bottom.frameNStart = frameN;  // exact frame index
      
      vertical_calibration_bottom.setAutoDraw(true);
    }

    
    // *horizontal_calibration_bottom_bottom* updates
    if (t >= 0.0 && horizontal_calibration_bottom_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_calibration_bottom_bottom.tStart = t;  // (not accounting for frame time here)
      horizontal_calibration_bottom_bottom.frameNStart = frameN;  // exact frame index
      
      horizontal_calibration_bottom_bottom.setAutoDraw(true);
    }

    
    // *horizontal_calibration_bottom_top* updates
    if (t >= 0.0 && horizontal_calibration_bottom_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_calibration_bottom_top.tStart = t;  // (not accounting for frame time here)
      horizontal_calibration_bottom_top.frameNStart = frameN;  // exact frame index
      
      horizontal_calibration_bottom_top.setAutoDraw(true);
    }

    
    // *continuous_slider_calibrate_bottom* updates
    if (t >= 0.0 && continuous_slider_calibrate_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continuous_slider_calibrate_bottom.tStart = t;  // (not accounting for frame time here)
      continuous_slider_calibrate_bottom.frameNStart = frameN;  // exact frame index
      
      continuous_slider_calibrate_bottom.setAutoDraw(true);
    }

    // *mouse_bottom* updates
    if (t >= 0.0 && mouse_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_bottom.tStart = t;  // (not accounting for frame time here)
      mouse_bottom.frameNStart = frameN;  // exact frame index
      
      mouse_bottom.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_bottom.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_bottom.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_bottom.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [horizontal_calibration_bottom_bottom]) {
            if (obj.contains(mouse_bottom)) {
              gotValidClick = true;
              mouse_bottom.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_bottom.getPos();
            mouse_bottom.x.push(_mouseXYs[0]);
            mouse_bottom.y.push(_mouseXYs[1]);
            mouse_bottom.leftButton.push(_mouseButtons[0]);
            mouse_bottom.midButton.push(_mouseButtons[1]);
            mouse_bottom.rightButton.push(_mouseButtons[2]);
            mouse_bottom.time.push(mouse_bottom.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *calibration_bottom_instructions* updates
    if (t >= 0.0 && calibration_bottom_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibration_bottom_instructions.tStart = t;  // (not accounting for frame time here)
      calibration_bottom_instructions.frameNStart = frameN;  // exact frame index
      
      calibration_bottom_instructions.setAutoDraw(true);
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
    calibration_bottomComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function calibration_bottomRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'calibration_bottom' ---
    calibration_bottomComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continuous_slider_calibrate_bottom.response', continuous_slider_calibrate_bottom.getRating());
    psychoJS.experiment.addData('continuous_slider_calibrate_bottom.rt', continuous_slider_calibrate_bottom.getRT());
    psychoJS.experiment.addData('continuous_slider_calibrate_bottom.history', continuous_slider_calibrate_bottom.getHistory());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_bottom.x) {  psychoJS.experiment.addData('mouse_bottom.x', mouse_bottom.x[0])};
    if (mouse_bottom.y) {  psychoJS.experiment.addData('mouse_bottom.y', mouse_bottom.y[0])};
    if (mouse_bottom.leftButton) {  psychoJS.experiment.addData('mouse_bottom.leftButton', mouse_bottom.leftButton[0])};
    if (mouse_bottom.midButton) {  psychoJS.experiment.addData('mouse_bottom.midButton', mouse_bottom.midButton[0])};
    if (mouse_bottom.rightButton) {  psychoJS.experiment.addData('mouse_bottom.rightButton', mouse_bottom.rightButton[0])};
    if (mouse_bottom.time) {  psychoJS.experiment.addData('mouse_bottom.time', mouse_bottom.time[0])};
    if (mouse_bottom.clicked_name) {  psychoJS.experiment.addData('mouse_bottom.clicked_name', mouse_bottom.clicked_name[0])};
    
    // the Routine "calibration_bottom" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
    
    instruction_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    instruction_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    instruction_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_1.x) {  psychoJS.experiment.addData('mouse_1.x', mouse_1.x[0])};
    if (mouse_1.y) {  psychoJS.experiment.addData('mouse_1.y', mouse_1.y[0])};
    if (mouse_1.leftButton) {  psychoJS.experiment.addData('mouse_1.leftButton', mouse_1.leftButton[0])};
    if (mouse_1.midButton) {  psychoJS.experiment.addData('mouse_1.midButton', mouse_1.midButton[0])};
    if (mouse_1.rightButton) {  psychoJS.experiment.addData('mouse_1.rightButton', mouse_1.rightButton[0])};
    if (mouse_1.time) {  psychoJS.experiment.addData('mouse_1.time', mouse_1.time[0])};
    if (mouse_1.clicked_name) {  psychoJS.experiment.addData('mouse_1.clicked_name', mouse_1.clicked_name[0])};
    
    // the Routine "instruction_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


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
    
    instruction_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    instruction_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    instruction_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    if (mouse_2.clicked_name) {  psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name[0])};
    
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
    
    instruction_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    instruction_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
    if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
    if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
    if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
    if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
    if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
    if (mouse_3.clicked_name) {  psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])};
    
    // the Routine "instruction_3" was not non-slip safe, so reset the non-slip timer
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
    continuous_pain_ratingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    continuous_pain_slider.reset()
    // setup some python lists for storing info about the mouse_slider
    // current position of the mouse:
    mouse_slider.x = [];
    mouse_slider.y = [];
    mouse_slider.leftButton = [];
    mouse_slider.midButton = [];
    mouse_slider.rightButton = [];
    mouse_slider.time = [];
    gotValidClick = false; // until a click is received
    mouse_slider.mouseClock.reset();
    // keep track of which components have finished
    continuous_pain_ratingComponents = [];
    continuous_pain_ratingComponents.push(vertical_1);
    continuous_pain_ratingComponents.push(horiozntal_top_1);
    continuous_pain_ratingComponents.push(horizontal_bottom_1);
    continuous_pain_ratingComponents.push(pain_continuous_image);
    continuous_pain_ratingComponents.push(most_pain_1);
    continuous_pain_ratingComponents.push(least_pain_1);
    continuous_pain_ratingComponents.push(continuous_pain_slider);
    continuous_pain_ratingComponents.push(mouse_slider);
    
    continuous_pain_ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *vertical_1* updates
    if (t >= 0.0 && vertical_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_1.tStart = t;  // (not accounting for frame time here)
      vertical_1.frameNStart = frameN;  // exact frame index
      
      vertical_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_slider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_slider.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_slider.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_slider.getPressed();
      _mouseXYs = mouse_slider.getPos();
      mouse_slider.x.push(_mouseXYs[0]);
      mouse_slider.y.push(_mouseXYs[1]);
      mouse_slider.leftButton.push(_mouseButtons[0]);
      mouse_slider.midButton.push(_mouseButtons[1]);
      mouse_slider.rightButton.push(_mouseButtons[2]);
      mouse_slider.time.push(mouse_slider.mouseClock.getTime());
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
    continuous_pain_ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    continuous_pain_ratingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continuous_pain_slider.response', continuous_pain_slider.getRating());
    psychoJS.experiment.addData('continuous_pain_slider.rt', continuous_pain_slider.getRT());
    psychoJS.experiment.addData('continuous_pain_slider.history', continuous_pain_slider.getHistory());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_slider.x', mouse_slider.x);
    psychoJS.experiment.addData('mouse_slider.y', mouse_slider.y);
    psychoJS.experiment.addData('mouse_slider.leftButton', mouse_slider.leftButton);
    psychoJS.experiment.addData('mouse_slider.midButton', mouse_slider.midButton);
    psychoJS.experiment.addData('mouse_slider.rightButton', mouse_slider.rightButton);
    psychoJS.experiment.addData('mouse_slider.time', mouse_slider.time);
    
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
    
    pain_predictionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    
    // *horizontal_bottom_2* updates
    if (t >= 0.0 && horizontal_bottom_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_bottom_2.tStart = t;  // (not accounting for frame time here)
      horizontal_bottom_2.frameNStart = frameN;  // exact frame index
      
      horizontal_bottom_2.setAutoDraw(true);
    }

    
    // *horizontal_top_2* updates
    if (t >= 0.0 && horizontal_top_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      horizontal_top_2.tStart = t;  // (not accounting for frame time here)
      horizontal_top_2.frameNStart = frameN;  // exact frame index
      
      horizontal_top_2.setAutoDraw(true);
    }

    
    // *pain_predict_image* updates
    if (t >= 0.0 && pain_predict_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pain_predict_image.tStart = t;  // (not accounting for frame time here)
      pain_predict_image.frameNStart = frameN;  // exact frame index
      
      pain_predict_image.setAutoDraw(true);
    }

    
    // *most_pain_2* updates
    if (t >= 0.0 && most_pain_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      most_pain_2.tStart = t;  // (not accounting for frame time here)
      most_pain_2.frameNStart = frameN;  // exact frame index
      
      most_pain_2.setAutoDraw(true);
    }

    
    // *least_pain_2* updates
    if (t >= 0.0 && least_pain_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      least_pain_2.tStart = t;  // (not accounting for frame time here)
      least_pain_2.frameNStart = frameN;  // exact frame index
      
      least_pain_2.setAutoDraw(true);
    }

    
    // *pain_predict_slider* updates
    if (t >= 0.0 && pain_predict_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pain_predict_slider.tStart = t;  // (not accounting for frame time here)
      pain_predict_slider.frameNStart = frameN;  // exact frame index
      
      pain_predict_slider.setAutoDraw(true);
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
    pain_predictionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pain_predictionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pain_prediction' ---
    pain_predictionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('pain_predict_slider.response', pain_predict_slider.getRating());
    psychoJS.experiment.addData('pain_predict_slider.rt', pain_predict_slider.getRT());
    psychoJS.experiment.addData('pain_predict_slider.history', pain_predict_slider.getHistory());
    // the Routine "pain_prediction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
    // update component parameters for each repeat
    confidence_slider_2.reset()
    // keep track of which components have finished
    pain_confidenceComponents = [];
    pain_confidenceComponents.push(horizontal_central);
    pain_confidenceComponents.push(vertical_right);
    pain_confidenceComponents.push(vertical_left);
    pain_confidenceComponents.push(confidence_image);
    pain_confidenceComponents.push(confidence_slider_2);
    
    pain_confidenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    
    // *vertical_right* updates
    if (t >= 0.0 && vertical_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_right.tStart = t;  // (not accounting for frame time here)
      vertical_right.frameNStart = frameN;  // exact frame index
      
      vertical_right.setAutoDraw(true);
    }

    
    // *vertical_left* updates
    if (t >= 0.0 && vertical_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vertical_left.tStart = t;  // (not accounting for frame time here)
      vertical_left.frameNStart = frameN;  // exact frame index
      
      vertical_left.setAutoDraw(true);
    }

    
    // *confidence_image* updates
    if (t >= 0.0 && confidence_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_image.tStart = t;  // (not accounting for frame time here)
      confidence_image.frameNStart = frameN;  // exact frame index
      
      confidence_image.setAutoDraw(true);
    }

    
    // *confidence_slider_2* updates
    if (t >= 0 && confidence_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_slider_2.tStart = t;  // (not accounting for frame time here)
      confidence_slider_2.frameNStart = frameN;  // exact frame index
      
      confidence_slider_2.setAutoDraw(true);
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
    pain_confidenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pain_confidenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pain_confidence' ---
    pain_confidenceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('confidence_slider_2.response', confidence_slider_2.getRating());
    psychoJS.experiment.addData('confidence_slider_2.rt', confidence_slider_2.getRT());
    // the Routine "pain_confidence" was not non-slip safe, so reset the non-slip timer
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
    
    end_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    end_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    end_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
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
