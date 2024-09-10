#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on November 18, 2022, at 00:28
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.4'
expName = 'painpred'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\Sharon Ho\\Documents\\Camb\\Engineering\\Part_IIB\\project\\part_iib_project\\newest\\painpred_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "instruction_1" ---
next_button_1 = visual.ImageStim(
    win=win,
    name='next_button_1', 
    image='instruction_images/next_button.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.45), size=(0.1, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
mouse_1 = event.Mouse(win=win)
x, y = [None, None]
mouse_1.mouseClock = core.Clock()
slider_1 = visual.ImageStim(
    win=win,
    name='slider_1', 
    image='instruction_images/first_slider_image.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.12), size=(0.3, 0.55),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
instruction_1_text_new = visual.TextStim(win=win, name='instruction_1_text_new',
    text='Thank you for agreeing to participate in our study. \n\nYou will be asked to rate how much pain you feel \nin real time, using a slider like this. \n\nPlease rate pain continuously and ensure to always \nhave your finger on the screen \neven if the pain level is not changing.',
    font='Arial',
    pos=(0, 0.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "instruction_2" ---
next_button_2 = visual.ImageStim(
    win=win,
    name='next_button_2', 
    image='instruction_images/next_button.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.45), size=(0.1, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()
slider_2 = visual.ImageStim(
    win=win,
    name='slider_2', 
    image='instruction_images/second_slider_image.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.12), size=(0.3, 0.55),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
text_2 = visual.TextStim(win=win, name='text_2',
    text='Sometimes, you will be asked to predict how much pain \nyou will experience in one minute from now, \non a slider like this. Don’toverthink it, \nwe will collect your first response.',
    font='Arial',
    pos=(0, 0.30), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "instruction_3" ---
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()
start_button = visual.ImageStim(
    win=win,
    name='start_button', 
    image='instruction_images/start_button.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.45), size=(0.1, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
slider_3 = visual.ImageStim(
    win=win,
    name='slider_3', 
    image='instruction_images/confidence_slider.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.375, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
instruction_3_text_ = visual.TextStim(win=win, name='instruction_3_text_',
    text='Next, you will be asked to rate how confident you are \nin your prediction, on a scale ranging from unsure to sure.',
    font='Arial',
    pos=(0, 0.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "blank500ms" ---
text = visual.TextStim(win=win, name='text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "continuous_pain_rating" ---
vertical_1 = visual.ImageStim(
    win=win,
    name='vertical_1', 
    image='instruction_images/vertical_white_rectangle.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.05), size=(0.025, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
horiozntal_top_1 = visual.ImageStim(
    win=win,
    name='horiozntal_top_1', 
    image='instruction_images/hori_white_rectangle.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.35), size=(0.1, 0.02),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
horizontal_bottom_1 = visual.ImageStim(
    win=win,
    name='horizontal_bottom_1', 
    image='instruction_images/hori_white_rectangle.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.45), size=(0.1, 0.02),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
pain_continuous_image = visual.ImageStim(
    win=win,
    name='pain_continuous_image', 
    image='instruction_images/pain_pred.PNG', mask=None, anchor='center',
    ori=0.0, pos=(0.0, 0.45), size=(0.627, 0.09405),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
most_pain_1 = visual.TextStim(win=win, name='most_pain_1',
    text='Most Pain',
    font='Arial',
    pos=(-0.15, 0.352), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
least_pain_1 = visual.TextStim(win=win, name='least_pain_1',
    text='Least Pain',
    font='Arial',
    pos=(-0.15, -0.445), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
continuous_pain_slider = visual.Slider(win=win, name='continuous_pain_slider',
    startValue=None, size=(0.1, 0.8), pos=(0, -0.05), units=None,
    labels=None, ticks=(1, 2), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='white', markerColor=[1.0000, 0.6000, -1.0000], lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-6, readOnly=False)

# --- Initialize components for Routine "blank500ms" ---
text = visual.TextStim(win=win, name='text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "pain_prediction" ---
vertical_2 = visual.ImageStim(
    win=win,
    name='vertical_2', 
    image='instruction_images/vertical_white_rectangle.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.05), size=(0.025, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
horizontal_bottom_2 = visual.ImageStim(
    win=win,
    name='horizontal_bottom_2', 
    image='instruction_images/hori_white_rectangle.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.45), size=(0.1, 0.02),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
horizontal_top_2 = visual.ImageStim(
    win=win,
    name='horizontal_top_2', 
    image='instruction_images/hori_white_rectangle.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.35), size=(0.1, 0.02),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
pain_predict_image = visual.ImageStim(
    win=win,
    name='pain_predict_image', 
    image='instruction_images/pain_expect.PNG', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.45), size=(0.5544, 0.1188),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
most_pain_2 = visual.TextStim(win=win, name='most_pain_2',
    text='Most Pain',
    font='Arial',
    pos=(-0.15, 0.352), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
least_pain_2 = visual.TextStim(win=win, name='least_pain_2',
    text='Least Pain',
    font='Arial',
    pos=(-0.15, -0.445), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
pain_predict_slider = visual.Slider(win=win, name='pain_predict_slider',
    startValue=None, size=(0.1, 0.8), pos=(0, -0.05), units=None,
    labels=None, ticks=(1, 2), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='white', markerColor=[0.3333, 0.3333, 1.0000], lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-6, readOnly=False)

# --- Initialize components for Routine "blank500ms" ---
text = visual.TextStim(win=win, name='text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "pain_confidence" ---
horizontal_central = visual.ImageStim(
    win=win,
    name='horizontal_central', 
    image='instruction_images/hori_white_rectangle.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.6, 0.025),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
vertical_right = visual.ImageStim(
    win=win,
    name='vertical_right', 
    image='instruction_images/vertical_white_rectangle.png', mask=None, anchor='center',
    ori=0.0, pos=(0.3, 0), size=(0.02, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
vertical_left = visual.ImageStim(
    win=win,
    name='vertical_left', 
    image='instruction_images/vertical_white_rectangle.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.3, 0), size=(0.02, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
confidence_image = visual.ImageStim(
    win=win,
    name='confidence_image', 
    image='instruction_images/confidence.PNG', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.35), size=(0.5544, 0.1188),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
confidence_slider_2 = visual.Slider(win=win, name='confidence_slider_2',
    startValue=None, size=(0.6, 0.1), pos=(0, 0), units=None,
    labels=['Unsure', 'Sure'], ticks=(1, 2), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor=[-1.0000, 1.0000, 1.0000], lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-4, readOnly=False)

# --- Initialize components for Routine "end_screen" ---
ending = visual.TextStim(win=win, name='ending',
    text='The session is over! \nThank you for completing the task. \n\nPlease click on the button below to \nfinish the game.',
    font='Arial',
    pos=(0, 0.2), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
finish_button = visual.ImageStim(
    win=win,
    name='finish_button', 
    image='instruction_images/finish_button.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.45), size=(0.1, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "instruction_1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_1
mouse_1.x = []
mouse_1.y = []
mouse_1.leftButton = []
mouse_1.midButton = []
mouse_1.rightButton = []
mouse_1.time = []
mouse_1.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instruction_1Components = [next_button_1, mouse_1, slider_1, instruction_1_text_new]
for thisComponent in instruction_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instruction_1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *next_button_1* updates
    if next_button_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_button_1.frameNStart = frameN  # exact frame index
        next_button_1.tStart = t  # local t and not account for scr refresh
        next_button_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_button_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'next_button_1.started')
        next_button_1.setAutoDraw(True)
    # *mouse_1* updates
    if mouse_1.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_1.frameNStart = frameN  # exact frame index
        mouse_1.tStart = t  # local t and not account for scr refresh
        mouse_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_1.started', t)
        mouse_1.status = STARTED
        mouse_1.mouseClock.reset()
        prevButtonState = mouse_1.getPressed()  # if button is down already this ISN'T a new click
    if mouse_1.status == STARTED:  # only update if started and not finished!
        buttons = mouse_1.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(next_button_1)
                    clickableList = next_button_1
                except:
                    clickableList = [next_button_1]
                for obj in clickableList:
                    if obj.contains(mouse_1):
                        gotValidClick = True
                        mouse_1.clicked_name.append(obj.name)
                x, y = mouse_1.getPos()
                mouse_1.x.append(x)
                mouse_1.y.append(y)
                buttons = mouse_1.getPressed()
                mouse_1.leftButton.append(buttons[0])
                mouse_1.midButton.append(buttons[1])
                mouse_1.rightButton.append(buttons[2])
                mouse_1.time.append(mouse_1.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    
    # *slider_1* updates
    if slider_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider_1.frameNStart = frameN  # exact frame index
        slider_1.tStart = t  # local t and not account for scr refresh
        slider_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'slider_1.started')
        slider_1.setAutoDraw(True)
    
    # *instruction_1_text_new* updates
    if instruction_1_text_new.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_1_text_new.frameNStart = frameN  # exact frame index
        instruction_1_text_new.tStart = t  # local t and not account for scr refresh
        instruction_1_text_new.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_1_text_new, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instruction_1_text_new.started')
        instruction_1_text_new.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instruction_1" ---
for thisComponent in instruction_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_1.x', mouse_1.x)
thisExp.addData('mouse_1.y', mouse_1.y)
thisExp.addData('mouse_1.leftButton', mouse_1.leftButton)
thisExp.addData('mouse_1.midButton', mouse_1.midButton)
thisExp.addData('mouse_1.rightButton', mouse_1.rightButton)
thisExp.addData('mouse_1.time', mouse_1.time)
thisExp.addData('mouse_1.clicked_name', mouse_1.clicked_name)
thisExp.nextEntry()
# the Routine "instruction_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instruction_2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_2
mouse_2.x = []
mouse_2.y = []
mouse_2.leftButton = []
mouse_2.midButton = []
mouse_2.rightButton = []
mouse_2.time = []
mouse_2.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instruction_2Components = [next_button_2, mouse_2, slider_2, text_2]
for thisComponent in instruction_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instruction_2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *next_button_2* updates
    if next_button_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_button_2.frameNStart = frameN  # exact frame index
        next_button_2.tStart = t  # local t and not account for scr refresh
        next_button_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_button_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'next_button_2.started')
        next_button_2.setAutoDraw(True)
    # *mouse_2* updates
    if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_2.frameNStart = frameN  # exact frame index
        mouse_2.tStart = t  # local t and not account for scr refresh
        mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_2.started', t)
        mouse_2.status = STARTED
        mouse_2.mouseClock.reset()
        prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
    if mouse_2.status == STARTED:  # only update if started and not finished!
        buttons = mouse_2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(next_button_2)
                    clickableList = next_button_2
                except:
                    clickableList = [next_button_2]
                for obj in clickableList:
                    if obj.contains(mouse_2):
                        gotValidClick = True
                        mouse_2.clicked_name.append(obj.name)
                x, y = mouse_2.getPos()
                mouse_2.x.append(x)
                mouse_2.y.append(y)
                buttons = mouse_2.getPressed()
                mouse_2.leftButton.append(buttons[0])
                mouse_2.midButton.append(buttons[1])
                mouse_2.rightButton.append(buttons[2])
                mouse_2.time.append(mouse_2.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    
    # *slider_2* updates
    if slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider_2.frameNStart = frameN  # exact frame index
        slider_2.tStart = t  # local t and not account for scr refresh
        slider_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'slider_2.started')
        slider_2.setAutoDraw(True)
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_2.started')
        text_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instruction_2" ---
for thisComponent in instruction_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_2.x', mouse_2.x)
thisExp.addData('mouse_2.y', mouse_2.y)
thisExp.addData('mouse_2.leftButton', mouse_2.leftButton)
thisExp.addData('mouse_2.midButton', mouse_2.midButton)
thisExp.addData('mouse_2.rightButton', mouse_2.rightButton)
thisExp.addData('mouse_2.time', mouse_2.time)
thisExp.addData('mouse_2.clicked_name', mouse_2.clicked_name)
thisExp.nextEntry()
# the Routine "instruction_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instruction_3" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_3
mouse_3.x = []
mouse_3.y = []
mouse_3.leftButton = []
mouse_3.midButton = []
mouse_3.rightButton = []
mouse_3.time = []
mouse_3.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instruction_3Components = [mouse_3, start_button, slider_3, instruction_3_text_]
for thisComponent in instruction_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instruction_3" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # *mouse_3* updates
    if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_3.frameNStart = frameN  # exact frame index
        mouse_3.tStart = t  # local t and not account for scr refresh
        mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_3.started', t)
        mouse_3.status = STARTED
        mouse_3.mouseClock.reset()
        prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
    if mouse_3.status == STARTED:  # only update if started and not finished!
        buttons = mouse_3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(start_button)
                    clickableList = start_button
                except:
                    clickableList = [start_button]
                for obj in clickableList:
                    if obj.contains(mouse_3):
                        gotValidClick = True
                        mouse_3.clicked_name.append(obj.name)
                x, y = mouse_3.getPos()
                mouse_3.x.append(x)
                mouse_3.y.append(y)
                buttons = mouse_3.getPressed()
                mouse_3.leftButton.append(buttons[0])
                mouse_3.midButton.append(buttons[1])
                mouse_3.rightButton.append(buttons[2])
                mouse_3.time.append(mouse_3.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    
    # *start_button* updates
    if start_button.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        start_button.frameNStart = frameN  # exact frame index
        start_button.tStart = t  # local t and not account for scr refresh
        start_button.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(start_button, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'start_button.started')
        start_button.setAutoDraw(True)
    
    # *slider_3* updates
    if slider_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider_3.frameNStart = frameN  # exact frame index
        slider_3.tStart = t  # local t and not account for scr refresh
        slider_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'slider_3.started')
        slider_3.setAutoDraw(True)
    
    # *instruction_3_text_* updates
    if instruction_3_text_.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_3_text_.frameNStart = frameN  # exact frame index
        instruction_3_text_.tStart = t  # local t and not account for scr refresh
        instruction_3_text_.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_3_text_, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instruction_3_text_.started')
        instruction_3_text_.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instruction_3" ---
for thisComponent in instruction_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_3.x', mouse_3.x)
thisExp.addData('mouse_3.y', mouse_3.y)
thisExp.addData('mouse_3.leftButton', mouse_3.leftButton)
thisExp.addData('mouse_3.midButton', mouse_3.midButton)
thisExp.addData('mouse_3.rightButton', mouse_3.rightButton)
thisExp.addData('mouse_3.time', mouse_3.time)
thisExp.addData('mouse_3.clicked_name', mouse_3.clicked_name)
thisExp.nextEntry()
# the Routine "instruction_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=5.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "blank500ms" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    blank500msComponents = [text]
    for thisComponent in blank500msComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "blank500ms" ---
    while continueRoutine and routineTimer.getTime() < 0.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text.stopped')
                text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blank500msComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "blank500ms" ---
    for thisComponent in blank500msComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-0.500000)
    
    # --- Prepare to start Routine "continuous_pain_rating" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    continuous_pain_slider.reset()
    # keep track of which components have finished
    continuous_pain_ratingComponents = [vertical_1, horiozntal_top_1, horizontal_bottom_1, pain_continuous_image, most_pain_1, least_pain_1, continuous_pain_slider]
    for thisComponent in continuous_pain_ratingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "continuous_pain_rating" ---
    while continueRoutine and routineTimer.getTime() < 10.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *vertical_1* updates
        if vertical_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            vertical_1.frameNStart = frameN  # exact frame index
            vertical_1.tStart = t  # local t and not account for scr refresh
            vertical_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(vertical_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'vertical_1.started')
            vertical_1.setAutoDraw(True)
        if vertical_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > vertical_1.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                vertical_1.tStop = t  # not accounting for scr refresh
                vertical_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vertical_1.stopped')
                vertical_1.setAutoDraw(False)
        
        # *horiozntal_top_1* updates
        if horiozntal_top_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            horiozntal_top_1.frameNStart = frameN  # exact frame index
            horiozntal_top_1.tStart = t  # local t and not account for scr refresh
            horiozntal_top_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(horiozntal_top_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'horiozntal_top_1.started')
            horiozntal_top_1.setAutoDraw(True)
        if horiozntal_top_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > horiozntal_top_1.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                horiozntal_top_1.tStop = t  # not accounting for scr refresh
                horiozntal_top_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'horiozntal_top_1.stopped')
                horiozntal_top_1.setAutoDraw(False)
        
        # *horizontal_bottom_1* updates
        if horizontal_bottom_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            horizontal_bottom_1.frameNStart = frameN  # exact frame index
            horizontal_bottom_1.tStart = t  # local t and not account for scr refresh
            horizontal_bottom_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(horizontal_bottom_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'horizontal_bottom_1.started')
            horizontal_bottom_1.setAutoDraw(True)
        if horizontal_bottom_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > horizontal_bottom_1.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                horizontal_bottom_1.tStop = t  # not accounting for scr refresh
                horizontal_bottom_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'horizontal_bottom_1.stopped')
                horizontal_bottom_1.setAutoDraw(False)
        
        # *pain_continuous_image* updates
        if pain_continuous_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pain_continuous_image.frameNStart = frameN  # exact frame index
            pain_continuous_image.tStart = t  # local t and not account for scr refresh
            pain_continuous_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pain_continuous_image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'pain_continuous_image.started')
            pain_continuous_image.setAutoDraw(True)
        if pain_continuous_image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > pain_continuous_image.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                pain_continuous_image.tStop = t  # not accounting for scr refresh
                pain_continuous_image.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'pain_continuous_image.stopped')
                pain_continuous_image.setAutoDraw(False)
        
        # *most_pain_1* updates
        if most_pain_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            most_pain_1.frameNStart = frameN  # exact frame index
            most_pain_1.tStart = t  # local t and not account for scr refresh
            most_pain_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(most_pain_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'most_pain_1.started')
            most_pain_1.setAutoDraw(True)
        if most_pain_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > most_pain_1.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                most_pain_1.tStop = t  # not accounting for scr refresh
                most_pain_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'most_pain_1.stopped')
                most_pain_1.setAutoDraw(False)
        
        # *least_pain_1* updates
        if least_pain_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            least_pain_1.frameNStart = frameN  # exact frame index
            least_pain_1.tStart = t  # local t and not account for scr refresh
            least_pain_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(least_pain_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'least_pain_1.started')
            least_pain_1.setAutoDraw(True)
        if least_pain_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > least_pain_1.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                least_pain_1.tStop = t  # not accounting for scr refresh
                least_pain_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'least_pain_1.stopped')
                least_pain_1.setAutoDraw(False)
        
        # *continuous_pain_slider* updates
        if continuous_pain_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            continuous_pain_slider.frameNStart = frameN  # exact frame index
            continuous_pain_slider.tStart = t  # local t and not account for scr refresh
            continuous_pain_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(continuous_pain_slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'continuous_pain_slider.started')
            continuous_pain_slider.setAutoDraw(True)
        if continuous_pain_slider.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > continuous_pain_slider.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                continuous_pain_slider.tStop = t  # not accounting for scr refresh
                continuous_pain_slider.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'continuous_pain_slider.stopped')
                continuous_pain_slider.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in continuous_pain_ratingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "continuous_pain_rating" ---
    for thisComponent in continuous_pain_ratingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('continuous_pain_slider.response', continuous_pain_slider.getRating())
    trials.addData('continuous_pain_slider.rt', continuous_pain_slider.getRT())
    trials.addData('continuous_pain_slider.history', continuous_pain_slider.getHistory())
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-10.000000)
    
    # --- Prepare to start Routine "blank500ms" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    blank500msComponents = [text]
    for thisComponent in blank500msComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "blank500ms" ---
    while continueRoutine and routineTimer.getTime() < 0.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text.stopped')
                text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blank500msComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "blank500ms" ---
    for thisComponent in blank500msComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-0.500000)
    
    # --- Prepare to start Routine "pain_prediction" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    pain_predict_slider.reset()
    # keep track of which components have finished
    pain_predictionComponents = [vertical_2, horizontal_bottom_2, horizontal_top_2, pain_predict_image, most_pain_2, least_pain_2, pain_predict_slider]
    for thisComponent in pain_predictionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "pain_prediction" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *vertical_2* updates
        if vertical_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            vertical_2.frameNStart = frameN  # exact frame index
            vertical_2.tStart = t  # local t and not account for scr refresh
            vertical_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(vertical_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'vertical_2.started')
            vertical_2.setAutoDraw(True)
        
        # *horizontal_bottom_2* updates
        if horizontal_bottom_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            horizontal_bottom_2.frameNStart = frameN  # exact frame index
            horizontal_bottom_2.tStart = t  # local t and not account for scr refresh
            horizontal_bottom_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(horizontal_bottom_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'horizontal_bottom_2.started')
            horizontal_bottom_2.setAutoDraw(True)
        
        # *horizontal_top_2* updates
        if horizontal_top_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            horizontal_top_2.frameNStart = frameN  # exact frame index
            horizontal_top_2.tStart = t  # local t and not account for scr refresh
            horizontal_top_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(horizontal_top_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'horizontal_top_2.started')
            horizontal_top_2.setAutoDraw(True)
        
        # *pain_predict_image* updates
        if pain_predict_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pain_predict_image.frameNStart = frameN  # exact frame index
            pain_predict_image.tStart = t  # local t and not account for scr refresh
            pain_predict_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pain_predict_image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'pain_predict_image.started')
            pain_predict_image.setAutoDraw(True)
        
        # *most_pain_2* updates
        if most_pain_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            most_pain_2.frameNStart = frameN  # exact frame index
            most_pain_2.tStart = t  # local t and not account for scr refresh
            most_pain_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(most_pain_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'most_pain_2.started')
            most_pain_2.setAutoDraw(True)
        
        # *least_pain_2* updates
        if least_pain_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            least_pain_2.frameNStart = frameN  # exact frame index
            least_pain_2.tStart = t  # local t and not account for scr refresh
            least_pain_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(least_pain_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'least_pain_2.started')
            least_pain_2.setAutoDraw(True)
        
        # *pain_predict_slider* updates
        if pain_predict_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pain_predict_slider.frameNStart = frameN  # exact frame index
            pain_predict_slider.tStart = t  # local t and not account for scr refresh
            pain_predict_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pain_predict_slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'pain_predict_slider.started')
            pain_predict_slider.setAutoDraw(True)
        
        # Check pain_predict_slider for response to end routine
        if pain_predict_slider.getRating() is not None and pain_predict_slider.status == STARTED:
            continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in pain_predictionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "pain_prediction" ---
    for thisComponent in pain_predictionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('pain_predict_slider.response', pain_predict_slider.getRating())
    trials.addData('pain_predict_slider.rt', pain_predict_slider.getRT())
    trials.addData('pain_predict_slider.history', pain_predict_slider.getHistory())
    # the Routine "pain_prediction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "blank500ms" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    blank500msComponents = [text]
    for thisComponent in blank500msComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "blank500ms" ---
    while continueRoutine and routineTimer.getTime() < 0.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text.stopped')
                text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blank500msComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "blank500ms" ---
    for thisComponent in blank500msComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-0.500000)
    
    # --- Prepare to start Routine "pain_confidence" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    confidence_slider_2.reset()
    # keep track of which components have finished
    pain_confidenceComponents = [horizontal_central, vertical_right, vertical_left, confidence_image, confidence_slider_2]
    for thisComponent in pain_confidenceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "pain_confidence" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *horizontal_central* updates
        if horizontal_central.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            horizontal_central.frameNStart = frameN  # exact frame index
            horizontal_central.tStart = t  # local t and not account for scr refresh
            horizontal_central.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(horizontal_central, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'horizontal_central.started')
            horizontal_central.setAutoDraw(True)
        
        # *vertical_right* updates
        if vertical_right.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            vertical_right.frameNStart = frameN  # exact frame index
            vertical_right.tStart = t  # local t and not account for scr refresh
            vertical_right.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(vertical_right, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'vertical_right.started')
            vertical_right.setAutoDraw(True)
        
        # *vertical_left* updates
        if vertical_left.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            vertical_left.frameNStart = frameN  # exact frame index
            vertical_left.tStart = t  # local t and not account for scr refresh
            vertical_left.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(vertical_left, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'vertical_left.started')
            vertical_left.setAutoDraw(True)
        
        # *confidence_image* updates
        if confidence_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            confidence_image.frameNStart = frameN  # exact frame index
            confidence_image.tStart = t  # local t and not account for scr refresh
            confidence_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(confidence_image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'confidence_image.started')
            confidence_image.setAutoDraw(True)
        
        # *confidence_slider_2* updates
        if confidence_slider_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            confidence_slider_2.frameNStart = frameN  # exact frame index
            confidence_slider_2.tStart = t  # local t and not account for scr refresh
            confidence_slider_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(confidence_slider_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'confidence_slider_2.started')
            confidence_slider_2.setAutoDraw(True)
        
        # Check confidence_slider_2 for response to end routine
        if confidence_slider_2.getRating() is not None and confidence_slider_2.status == STARTED:
            continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in pain_confidenceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "pain_confidence" ---
    for thisComponent in pain_confidenceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('confidence_slider_2.response', confidence_slider_2.getRating())
    trials.addData('confidence_slider_2.rt', confidence_slider_2.getRT())
    # the Routine "pain_confidence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 5.0 repeats of 'trials'


# --- Prepare to start Routine "end_screen" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# setup some python lists for storing info about the mouse
mouse.x = []
mouse.y = []
mouse.leftButton = []
mouse.midButton = []
mouse.rightButton = []
mouse.time = []
mouse.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
end_screenComponents = [ending, finish_button, mouse]
for thisComponent in end_screenComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "end_screen" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ending* updates
    if ending.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ending.frameNStart = frameN  # exact frame index
        ending.tStart = t  # local t and not account for scr refresh
        ending.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ending, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ending.started')
        ending.setAutoDraw(True)
    
    # *finish_button* updates
    if finish_button.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        finish_button.frameNStart = frameN  # exact frame index
        finish_button.tStart = t  # local t and not account for scr refresh
        finish_button.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(finish_button, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'finish_button.started')
        finish_button.setAutoDraw(True)
    # *mouse* updates
    if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse.frameNStart = frameN  # exact frame index
        mouse.tStart = t  # local t and not account for scr refresh
        mouse.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse.started', t)
        mouse.status = STARTED
        mouse.mouseClock.reset()
        prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
    if mouse.status == STARTED:  # only update if started and not finished!
        buttons = mouse.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(finish_button)
                    clickableList = finish_button
                except:
                    clickableList = [finish_button]
                for obj in clickableList:
                    if obj.contains(mouse):
                        gotValidClick = True
                        mouse.clicked_name.append(obj.name)
                x, y = mouse.getPos()
                mouse.x.append(x)
                mouse.y.append(y)
                buttons = mouse.getPressed()
                mouse.leftButton.append(buttons[0])
                mouse.midButton.append(buttons[1])
                mouse.rightButton.append(buttons[2])
                mouse.time.append(mouse.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_screenComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "end_screen" ---
for thisComponent in end_screenComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse.x', mouse.x)
thisExp.addData('mouse.y', mouse.y)
thisExp.addData('mouse.leftButton', mouse.leftButton)
thisExp.addData('mouse.midButton', mouse.midButton)
thisExp.addData('mouse.rightButton', mouse.rightButton)
thisExp.addData('mouse.time', mouse.time)
thisExp.addData('mouse.clicked_name', mouse.clicked_name)
thisExp.nextEntry()
# the Routine "end_screen" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
