  

JsDoc ReferenceClass Index
File Index
  

 
Classes
$
fn
swipe
defaults
directions
fingers
pageScroll
phases
_global_
 
 1./*
2.* @fileOverview TouchSwipe - jQuery Plugin
3.* @version 1.6.2
4.*
5.* @author Matt Bryson http://www.github.com/mattbryson
6.* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
7.* @see http://labs.skinkers.com/touchSwipe/
8.* @see http://plugins.jquery.com/project/touchSwipe
9.*
10.* Copyright (c) 2010 Matt Bryson
11.* Dual licensed under the MIT or GPL Version 2 licenses.
12.*
13.*
14.* Changelog
15.* $Date: 2010-12-12 (Wed, 12 Dec 2010) $
16.* $version: 1.0.0
17.* $version: 1.0.1 - removed multibyte comments
18.*
19.* $Date: 2011-21-02 (Mon, 21 Feb 2011) $
20.* $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
21.*					- changed handler signatures so one handler can be used for multiple events
22.* $Date: 2011-23-02 (Wed, 23 Feb 2011) $
23.* $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
24.*					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
25.* $version: 1.2.1 	- removed console log!
26.*
27.* $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
28.*
29.* $Date: 2011-28-04 (Thurs, 28 April 2011) $
30.* $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
31.*
32.* $Date: 2011-27-09 (Tues, 27 September 2011) $
33.* $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
34.*
35.* $Date: 2012-14-05 (Mon, 14 May 2012) $
36.* $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
37.*
38.* $Date: 2012-05-06 (Tues, 05 June 2012) $
39.* $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
40.*
41.* $Date: 2012-05-06 (Tues, 05 June 2012) $
42.* $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
43.*
44.* $Date: 2012-06-06 (Wed, 06 June 2012) $
45.* $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
46.*
47.* $Date: 2012-05-06 (Fri, 05 June 2012) $
48.* $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
49.*
50.* $Date: 2012-29-07 (Sun, 29 July 2012) $
51.* $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
52.* 			- Added "all" fingers value to the fingers property, so any combinatin of fingers triggers the swipe, allowing event handlers to check the finger count
53.*
54.* $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
55.* $version: 1.3.3	- Code tidy prep for minified version
56.*
57.* $Date: 2012-04-10 (wed, 4 Oct 2012) $
58.* $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
59.*
60.* $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
61.* $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.
62.*
63.* $Date: 2012-22-10 (Mon, 22 Oct 2012) $
64.* $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
65.*					- Fixed bug with IE and eventPreventDefault()
66.* $Date: 2013-01-12 (Fri, 12 Jan 2013) $
67.* $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
68.*					- made the demo site all static local HTML pages so they can be run locally by a developer
69.*					- added jsDoc comments and added documentation for the plugin	
70.*					- code tidy
71.*					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
72.* $Date: 2013-03-23 (Sat, 23 Mar 2013) $
73.* $version: 1.6.1	- Added support for ie8 touch events
74.* $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
75.*                   - Deprecated the 'click' handler in favour of tap.
76.*                   - added cancelThreshold property
77.*                   - added option method to update init options at runtime
78.*
79.* $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
80.*/
81. 
82./**
83. * See (http://jquery.com/).
84. * @name $
85. * @class 
86. * See the jQuery Library  (http://jquery.com/) for full details.  This just
87. * documents the function and classes that are added to jQuery by this plug-in.
88. */
89. 
90./**
91. * See (http://jquery.com/)
92. * @name fn
93. * @class 
94. * See the jQuery Library  (http://jquery.com/) for full details.  This just
95. * documents the function and classes that are added to jQuery by this plug-in.
96. * @memberOf $
97. */
98. 
99. 
100. 
101.(function ($) {
102.	"use strict";
103. 
104.	//Constants
105.	var LEFT = "left",
106.		RIGHT = "right",
107.		UP = "up",
108.		DOWN = "down",
109.		IN = "in",
110.		OUT = "out",
111. 
112.		NONE = "none",
113.		AUTO = "auto",
114.		
115.		SWIPE = "swipe",
116.		PINCH = "pinch",
117.		TAP = "tap",
118.		DOUBLE_TAP = "doubletap",
119.		LONG_TAP = "longtap",
120.		
121.		HORIZONTAL = "horizontal",
122.		VERTICAL = "vertical",
123. 
124.		ALL_FINGERS = "all",
125.		
126.		DOUBLE_TAP_THRESHOLD = 10,
127. 
128.		PHASE_START = "start",
129.		PHASE_MOVE = "move",
130.		PHASE_END = "end",
131.		PHASE_CANCEL = "cancel",
132. 
133.		SUPPORTS_TOUCH = 'ontouchstart' in window,
134. 
135.		PLUGIN_NS = 'TouchSwipe';
136. 
137. 
138. 
139.	/**
140.	* The default configuration, and available options to configure touch swipe with.
141.	* You can set the default values by updating any of the properties prior to instantiation.
142.	* @name $.fn.swipe.defaults
143.	* @namespace
144.	* @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
145.	* @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe. 
146.	* @property {int} [cancelThreshold=25] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
147.	* @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch. 
148.	* @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe. 
149.	* @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release. 
150.	* @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
151.    * @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a doubletap
152.	* @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
153.	* @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
154.	* @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
155.	* @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
156.	* @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
157.	* @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
158.	* @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
159.	* @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
160.	* @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
161.	* @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not. 
162.	* @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
163.	* @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
164.	* @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically. 
165.	* @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers. 
166.	* @property {string} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
167.										<code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
168.										<code>"none"</code> : the page will not scroll when user swipes. <br/>
169.										<code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
170.										<code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
171.	* @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices. 
172.	* @property {string} [excludedElements="button, input, select, textarea, a, .noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes all form, input, select, button, anchor and .noSwipe elements. 
173.	
174.	*/
175.	var defaults = {
176.		fingers: 1, 		
177.		threshold: 75, 	
178.		cancelThreshold:25,	
179.		pinchThreshold:20,
180.		maxTimeThreshold: null, 
181.		fingerReleaseThreshold:250, 
182.		longTapThreshold:500,
183.		doubleTapThreshold:200,
184.		swipe: null, 		
185.		swipeLeft: null, 	
186.		swipeRight: null, 	
187.		swipeUp: null, 		
188.		swipeDown: null, 	
189.		swipeStatus: null, 	
190.		pinchIn:null,		
191.		pinchOut:null,		
192.		pinchStatus:null,	
193.		click:null, //Deprecated since 1.6.2
194.		tap:null,
195.		doubleTap:null,
196.		longTap:null, 		
197.		triggerOnTouchEnd: true, 
198.		triggerOnTouchLeave:false, 
199.		allowPageScroll: "auto", 
200.		fallbackToMouseEvents: true,	
201.		excludedElements:"button, input, select, textarea, a, .noSwipe"
202.	};
203. 
204. 
205. 
206.	/**
207.	* Applies TouchSwipe behaviour to one or more jQuery objects.
208.	* The TouchSwipe plugin can be instantiated via this method, or methods within 
209.	* TouchSwipe can be executed via this method as per jQuery plugin architecture.
210.	* @see TouchSwipe
211.	* @class
212.	* @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
213.	* the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
214.	* If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the 
215.	* configuration properties defined in the object. See TouchSwipe
216.	*
217.	*/
218.	$.fn.swipe = function (method) {
219.		var $this = $(this),
220.			plugin = $this.data(PLUGIN_NS);
221. 
222.		//Check if we are already instantiated and trying to execute a method	
223.		if (plugin && typeof method === 'string') {
224.			if (plugin[method]) {
225.				return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
226.			} else {
227.				$.error('Method ' + method + ' does not exist on jQuery.swipe');
228.			}
229.		}
230.		//Else not instantiated and trying to pass init object (or nothing)
231.		else if (!plugin && (typeof method === 'object' || !method)) {
232.			return init.apply(this, arguments);
233.		}
234. 
235.		return $this;
236.	};
237. 
238.	//Expose our defaults so a user could override the plugin defaults
239.	$.fn.swipe.defaults = defaults;
240. 
241.	/**
242.	* The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers. 
243.	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
244.	* @namespace
245.	* @readonly
246.	* @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
247.	* @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
248.	* @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
249.	* @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
250.	*/
251.	$.fn.swipe.phases = {
252.		PHASE_START: PHASE_START,
253.		PHASE_MOVE: PHASE_MOVE,
254.		PHASE_END: PHASE_END,
255.		PHASE_CANCEL: PHASE_CANCEL
256.	};
257. 
258.	/**
259.	* The direction constants that are passed to the event handlers. 
260.	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
261.	* @namespace
262.	* @readonly
263.	* @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
264.	* @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
265.	* @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
266.	* @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
267.	* @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
268.	* @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
269.	*/
270.	$.fn.swipe.directions = {
271.		LEFT: LEFT,
272.		RIGHT: RIGHT,
273.		UP: UP,
274.		DOWN: DOWN,
275.		IN : IN,
276.		OUT: OUT
277.	};
278.	
279.	/**
280.	* The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
281.	* These properties are read only
282.	* @namespace
283.	* @readonly
284.	* @see $.fn.swipe.defaults#allowPageScroll
285.	* @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
286.	* @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
287.	* @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
288.	* @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
289.	*/
290.	$.fn.swipe.pageScroll = {
291.		NONE: NONE,
292.		HORIZONTAL: HORIZONTAL,
293.		VERTICAL: VERTICAL,
294.		AUTO: AUTO
295.	};
296. 
297.	/**
298.	* Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the 
299.	* options object, as well as the value of the <code>fingers</code> event property.
300.	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
301.	* @namespace
302.	* @readonly
303.	* @see $.fn.swipe.defaults#fingers
304.	* @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
305.	* @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>1</code>.
306.	* @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>1</code>.
307.	* @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
308.	*/
309.	$.fn.swipe.fingers = {
310.		ONE: 1,
311.		TWO: 2,
312.		THREE: 3,
313.		ALL: ALL_FINGERS
314.	};
315. 
316.	/**
317.	* Initialise the plugin for each DOM element matched
318.	* This creates a new instance of the main TouchSwipe class for each DOM element, and then
319.	* saves a reference to that instance in the elements data property.
320.	* @internal
321.	*/
322.	function init(options) {
323.		//Prep and extend the options
324.		if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
325.			options.allowPageScroll = NONE;
326.		}
327.		
328.        //Check for deprecated options
329.		//Ensure that any old click handlers are assigned to the new tap, unless we have a tap
330.		if(options.click!==undefined && options.tap===undefined) {
331.		    options.tap = options.click;
332.		}
333. 
334.		if (!options) {
335.			options = {};
336.		}
337.		
338.        //pass empty object so we dont modify the defaults
339.		options = $.extend({}, $.fn.swipe.defaults, options);
340. 
341.		//For each element instantiate the plugin
342.		return this.each(function () {
343.			var $this = $(this);
344. 
345.			//Check we havent already initialised the plugin
346.			var plugin = $this.data(PLUGIN_NS);
347. 
348.			if (!plugin) {
349.				plugin = new TouchSwipe(this, options);
350.				$this.data(PLUGIN_NS, plugin);
351.			}
352.		});
353.	}
354. 
355.	/**
356.	* Main TouchSwipe Plugin Class.
357.	* Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
358.	* @private
359.	* @name TouchSwipe
360.	* @param {DOMNode} element The HTML DOM object to apply to plugin to
361.	* @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
362.	* @see $.fh.swipe.defaults
363.	* @see $.fh.swipe
364.    * @class
365.	*/
366.	function TouchSwipe(element, options) {
367.		var useTouchEvents = (SUPPORTS_TOUCH || !options.fallbackToMouseEvents),
368.			START_EV = useTouchEvents ? 'touchstart' : 'mousedown',
369.			MOVE_EV = useTouchEvents ? 'touchmove' : 'mousemove',
370.			END_EV = useTouchEvents ? 'touchend' : 'mouseup',
371.			LEAVE_EV = useTouchEvents ? null : 'mouseleave', //we manually detect leave on touch devices, so null event here
372.			CANCEL_EV = 'touchcancel';
373. 
374. 
375. 
376.		//touch properties
377.		var distance = 0,
378.			direction = null,
379.			duration = 0,
380.			startTouchesDistance = 0,
381.			endTouchesDistance = 0,
382.			pinchZoom = 1,
383.			pinchDistance = 0,
384.			pinchDirection = 0,
385.			maximumsMap=null;
386. 
387.		
388.		
389.		//jQuery wrapped element for this instance
390.		var $element = $(element);
391.		
392.		//Current phase of th touch cycle
393.		var phase = "start";
394. 
395.		// the current number of fingers being used.
396.		var fingerCount = 0; 			
397. 
398.		//track mouse points / delta
399.		var fingerData=null;
400. 
401.		//track times
402.		var startTime = 0,
403.			endTime = 0,
404.			previousTouchEndTime=0,
405.			previousTouchFingerCount=0,
406.			doubleTapStartTime=0;
407. 
408.        //Timeouts
409.        var singleTapTimeout=null;
410.        
411.		// Add gestures to all swipable areas if supported
412.		try {
413.			$element.bind(START_EV, touchStart);
414.			$element.bind(CANCEL_EV, touchCancel);
415.		}
416.		catch (e) {
417.			$.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
418.		}
419. 
420.		//
421.		//Public methods
422.		//
423.		
424.		/**
425.		* re-enables the swipe plugin with the previous configuration
426.		* @function
427.		* @name $.fn.swipe#enable
428.		* @return {DOMNode} The Dom element that was registered with TouchSwipe 
429.		* @example $("#element").swipe("enable");
430.		*/
431.		this.enable = function () {
432.			$element.bind(START_EV, touchStart);
433.			$element.bind(CANCEL_EV, touchCancel);
434.			return $element;
435.		};
436. 
437.		/**
438.		* disables the swipe plugin
439.		* @function
440.		* @name $.fn.swipe#disable
441.		* @return {DOMNode} The Dom element that is now registered with TouchSwipe
442.	    * @example $("#element").swipe("disable");
443.		*/
444.		this.disable = function () {
445.			removeListeners();
446.			return $element;
447.		};
448. 
449.		/**
450.		* Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
451.		* @function
452.		* @name $.fn.swipe#destroy
453.		* @return {DOMNode} The Dom element that was registered with TouchSwipe 
454.		* @example $("#element").swipe("destroy");
455.		*/
456.		this.destroy = function () {
457.			removeListeners();
458.			$element.data(PLUGIN_NS, null);
459.			return $element;
460.		};
461. 
462. 
463.        /**
464.         * Allows run time updating of the swipe configuration options.
465.         * @function
466.    	 * @name $.fn.swipe#option
467.    	 * @param {String} property The option property to get or set
468.         * @param {Object} [value] The value to set the property to
469.		 * @return {Object} If only a property name is passed, then that property value is returned.
470.		 * @example $("#element").swipe("option", "threshold"); // return the threshold
471.         * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
472.         * @see $.fn.swipe.defaults
473.         *
474.         */
475.        this.option = function (property, value) {
476.            if(options[property]!==undefined) {
477.                if(value===undefined) {
478.                    return options[property];
479.                } else {
480.                    options[property] = value;
481.                }
482.            } else {
483.                $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
484.            }
485.        }
486. 
487.		//
488.		// Private methods
489.		//
490.		
491.		//
492.		// EVENTS
493.		//
494.		/**
495.		* Event handler for a touch start event.
496.		* Stops the default click event from triggering and stores where we touched
497.		* @inner
498.		* @param {object} jqEvent The normalised jQuery event object.
499.		*/
500.		function touchStart(jqEvent) {
501.			//If we already in a touch event (a finger already in use) then ignore subsequent ones..
502.			if( getTouchInProgress() )
503.				return;
504.			
505.			//Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DONT swipe
506.			if( $(jqEvent.target).closest( options.excludedElements, $element ).length>0 ) 
507.				return;
508.				
509.			//As we use Jquery bind for events, we need to target the original event object
510.			//If these events are being programatically triggered, we dont have an orignal event object, so use the Jq one.
511.			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
512.			
513.			var ret,
514.				evt = SUPPORTS_TOUCH ? event.touches[0] : event;
515. 
516.			phase = PHASE_START;
517. 
518.			//If we support touches, get the finger count
519.			if (SUPPORTS_TOUCH) {
520.				// get the total number of fingers touching the screen
521.				fingerCount = event.touches.length;
522.			}
523.			//Else this is the desktop, so stop the browser from dragging the image
524.			else {
525.				jqEvent.preventDefault(); //call this on jq event so we are cross browser
526.			}
527. 
528.			//clear vars..
529.			distance = 0;
530.			direction = null;
531.			pinchDirection=null;
532.			duration = 0;
533.			startTouchesDistance=0;
534.			endTouchesDistance=0;
535.			pinchZoom = 1;
536.			pinchDistance = 0;
537.			fingerData=createAllFingerData();
538.			maximumsMap=createMaximumsData();
539.			cancelMultiFingerRelease();
540. 
541.			
542.			// check the number of fingers is what we are looking for, or we are capturing pinches
543.			if (!SUPPORTS_TOUCH || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
544.				// get the coordinates of the touch
545.				createFingerData( 0, evt );
546.				startTime = getTimeStamp();
547.				
548.				if(fingerCount==2) {
549.					//Keep track of the initial pinch distance, so we can calculate the diff later
550.					//Store second finger data as start
551.					createFingerData( 1, event.touches[1] );
552.					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
553.				}
554.				
555.				if (options.swipeStatus || options.pinchStatus) {
556.					ret = triggerHandler(event, phase);
557.				}
558.			}
559.			else {
560.				//A touch with more or less than the fingers we are looking for, so cancel
561.				ret = false; 
562.			}
563. 
564.			//If we have a return value from the users handler, then return and cancel
565.			if (ret === false) {
566.				phase = PHASE_CANCEL;
567.				triggerHandler(event, phase);
568.				return ret;
569.			}
570.			else {
571.				setTouchInProgress(true);
572.			}
573.		};
574.		
575.		
576.		
577.		/**
578.		* Event handler for a touch move event. 
579.		* If we change fingers during move, then cancel the event
580.		* @inner
581.		* @param {object} jqEvent The normalised jQuery event object.
582.		*/
583.		function touchMove(jqEvent) {
584.			
585.			//As we use Jquery bind for events, we need to target the original event object
586.			//If these events are being programatically triggered, we dont have an orignal event object, so use the Jq one.
587.			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
588.			
589.			//If we are ending, cancelling, or within the threshold of 2 fingers being released, dont track anything..
590.			if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
591.				return;
592. 
593.			var ret,
594.				evt = SUPPORTS_TOUCH ? event.touches[0] : event;
595.			
596. 
597.			//Update the  finger data 
598.			var currentFinger = updateFingerData(evt);
599.			endTime = getTimeStamp();
600.			
601.			if (SUPPORTS_TOUCH) {
602.				fingerCount = event.touches.length;
603.			}
604. 
605.			phase = PHASE_MOVE;
606. 
607.			//If we have 2 fingers get Touches distance as well
608.			if(fingerCount==2) {
609.				
610.				//Keep track of the initial pinch distance, so we can calculate the diff later
611.				//We do this here as well as the start event, incase they start with 1 finger, and the press 2 fingers
612.				if(startTouchesDistance==0) {
613.					//Create second finger if this is the first time...
614.					createFingerData( 1, event.touches[1] );
615.					
616.					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
617.				} else {
618.					//Else just update the second finger
619.					updateFingerData(event.touches[1]);
620.				
621.					endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
622.					pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
623.				}
624.				
625.				
626.				pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
627.				pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
628.			}
629.			
630.			
631.			if ( (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH || hasPinches() ) {
632.				
633.				direction = calculateDirection(currentFinger.start, currentFinger.end);
634.				
635.				//Check if we need to prevent default evnet (page scroll / pinch zoom) or not
636.				validateDefaultEvent(jqEvent, direction);
637. 
638.				//Distance and duration are all off the main finger
639.				distance = calculateDistance(currentFinger.start, currentFinger.end);
640.				duration = calculateDuration();
641. 
642.                //Cache the maximum distance we made in this direction
643.                setMaxDistance(direction, distance);
644. 
645. 
646.				if (options.swipeStatus || options.pinchStatus) {
647.					ret = triggerHandler(event, phase);
648.				}
649.				
650.				
651.				//If we trigger end events when threshold are met, or trigger events when touch leves element
652.				if(!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
653.					
654.					var inBounds = true;
655.					
656.					//If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
657.					if(options.triggerOnTouchLeave) {
658.						var bounds = getbounds( this );
659.						inBounds = isInBounds( currentFinger.end, bounds );
660.					}
661.					
662.					//Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
663.					if(!options.triggerOnTouchEnd && inBounds) {
664.						phase = getNextPhase( PHASE_MOVE );
665.					} 
666.					//We end if out of bounds here, so set current phase to END, and check if its modified 
667.					else if(options.triggerOnTouchLeave && !inBounds ) {
668.						phase = getNextPhase( PHASE_END );
669.					}
670.						
671.					if(phase==PHASE_CANCEL || phase==PHASE_END)	{
672.						triggerHandler(event, phase);
673.					}				
674.				}
675.			}
676.			else {
677.				phase = PHASE_CANCEL;
678.				triggerHandler(event, phase);
679.			}
680. 
681.			if (ret === false) {
682.				phase = PHASE_CANCEL;
683.				triggerHandler(event, phase);
684.			}
685.		}
686. 
687. 
688. 
689.		/**
690.		* Event handler for a touch end event. 
691.		* Calculate the direction and trigger events
692.		* @inner
693.		* @param {object} jqEvent The normalised jQuery event object.
694.		*/
695.		function touchEnd(jqEvent) {
696.			//As we use Jquery bind for events, we need to target the original event object
697.			var event = jqEvent.originalEvent;
698.				
699. 
700.			//If we are still in a touch with another finger return
701.			//This allows us to wait a fraction and see if the other finger comes up, if it does within the threshold, then we treat it as a multi release, not a single release.
702.			if (SUPPORTS_TOUCH) {
703.				if(event.touches.length>0) {
704.					startMultiFingerRelease();
705.					return true;
706.				}
707.			}
708.			
709.			//If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
710.			//This is used to allow 2 fingers to release fractionally after each other, whilst maintainig the event as containg 2 fingers, not 1
711.			if(inMultiFingerRelease()) {	
712.				fingerCount=previousTouchFingerCount;
713.			}	
714.				 
715.			//call this on jq event so we are cross browser 
716.			jqEvent.preventDefault(); 
717.			
718.			//Set end of swipe
719.			endTime = getTimeStamp();
720.			
721.			//Get duration incase move was never fired
722.			duration = calculateDuration();
723.			
724.			//If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
725.			if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd == false && phase === PHASE_MOVE)) {
726.				phase = PHASE_END;
727.                triggerHandler(event, phase);
728.			}
729.			//Special cases - A tap should always fire on touch end regardless,
730.			//So here we manually trigger the tap end handler by itself
731.			//We dont run trigger handler as it will re-trigger events that may have fired already
732.			else if (!options.triggerOnTouchEnd && hasTap()) {
733.                //Trigger the pinch events...
734.			    phase = PHASE_END;
735.			    triggerHandlerForGesture(event, phase, TAP);
736.			}
737.			else if (phase === PHASE_MOVE) {
738.				phase = PHASE_CANCEL;
739.				triggerHandler(event, phase);
740.			}
741. 
742.			setTouchInProgress(false);
743.		}
744. 
745. 
746. 
747.		/**
748.		* Event handler for a touch cancel event. 
749.		* Clears current vars
750.		* @inner
751.		*/
752.		function touchCancel() {
753.			// reset the variables back to default values
754.			fingerCount = 0;
755.			endTime = 0;
756.			startTime = 0;
757.			startTouchesDistance=0;
758.			endTouchesDistance=0;
759.			pinchZoom=1;
760.			
761.			//If we were in progress of tracking a possible multi touch end, then re set it.
762.			cancelMultiFingerRelease();
763.			
764.			setTouchInProgress(false);
765.		}
766.		
767.		
768.		/**
769.		* Event handler for a touch leave event. 
770.		* This is only triggered on desktops, in touch we work this out manually
771.		* as the touchleave event is not supported in webkit
772.		* @inner
773.		*/
774.		function touchLeave(jqEvent) {
775.			var event = jqEvent.originalEvent;
776.			
777.			//If we have the trigger on leve property set....
778.			if(options.triggerOnTouchLeave) {
779.				phase = getNextPhase( PHASE_END );
780.				triggerHandler(event, phase);
781.			}
782.		}
783.		
784.		/**
785.		* Removes all listeners that were associated with the plugin
786.		* @inner
787.		*/
788.		function removeListeners() {
789.			$element.unbind(START_EV, touchStart);
790.			$element.unbind(CANCEL_EV, touchCancel);
791.			$element.unbind(MOVE_EV, touchMove);
792.			$element.unbind(END_EV, touchEnd);
793.			
794.			//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
795.			if(LEAVE_EV) { 
796.				$element.unbind(LEAVE_EV, touchLeave);
797.			}
798.			
799.			setTouchInProgress(false);
800.		}
801. 
802.		
803.		/**
804.		 * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
805.		 */
806.		function getNextPhase(currentPhase) {
807.			
808.			var nextPhase = currentPhase;
809.			
810.			// Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
811.			var validTime = validateSwipeTime();
812.			var validDistance = validateSwipeDistance();
813.			
814.						
815.			//If we have exceeded our time, then cancel	
816.			if(!validTime) {
817.				nextPhase = PHASE_CANCEL;
818.			}
819.			//Else if we are moving, and have reached distance then end
820.			else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) ) {
821.				nextPhase = PHASE_END;
822.			} 
823.			//Else if we have ended by leaving and didnt reach distance, then cancel
824.			else if (!validDistance && currentPhase==PHASE_END && options.triggerOnTouchLeave) {
825.				nextPhase = PHASE_CANCEL;
826.			}
827.			
828.			
829.			return nextPhase;
830.		}
831.		
832.		
833.		/**
834.		* Trigger the relevant event handler
835.		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
836.		* @param {object} event the original event object
837.		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
838.		* @inner
839.		*/
840.		function triggerHandler(event, phase) {
841.			
842.			var ret = undefined;
843.			
844.			// SWIPE GESTURES
845.			if(didSwipe()) {
846.				//Trigger the swipe events...
847.				ret = triggerHandlerForGesture(event, phase, SWIPE);
848.			}
849.			
850.			// PINCH GESTURES (if the above didnt cancel)
851.			else if(didPinch() && ret!==false) {
852.				//Trigger the pinch events...
853.				ret = triggerHandlerForGesture(event, phase, PINCH);
854.			}
855.			
856.			// CLICK / TAP (if the above didnt cancel)
857.			if(didDoubleTap() && ret!==false) {
858.				//Trigger the tap events...
859.				ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
860.			}
861.			
862.			// CLICK / TAP (if the above didnt cancel)
863.			else if(didLongTap() && ret!==false) {
864.				//Trigger the tap events...
865.				ret = triggerHandlerForGesture(event, phase, LONG_TAP);
866.			}
867. 
868.			// CLICK / TAP (if the above didnt cancel)
869.			else if(didTap() && ret!==false) {
870.				//Trigger the tap event..
871.				ret = triggerHandlerForGesture(event, phase, TAP);
872.	    	}
873.			
874.			
875.			
876.			// If we are cancelling the gesture, then manually trigger the reset handler
877.			if (phase === PHASE_CANCEL) {
878.				touchCancel(event);
879.			}
880.			
881.			// If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
882.			if(phase === PHASE_END) {
883.				//If we support touch, then check that all fingers are off before we cancel
884.				if (SUPPORTS_TOUCH) {
885.					if(event.touches.length==0) {
886.						touchCancel(event);	
887.					}
888.				} 
889.				else {
890.					touchCancel(event);
891.				}
892.			}
893.					
894.			return ret;
895.		}
896.		
897.		
898.		
899.		/**
900.		* Trigger the relevant event handler
901.		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
902.		* @param {object} event the original event object
903.		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
904.		* @param {string} gesture the gesture to triger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
905.		* @return Boolean False, to indicate that the event should stop propagation, or void.
906.		* @inner
907.		*/
908.		function triggerHandlerForGesture(event, phase, gesture) {	
909.			
910.			var ret=undefined;
911.			
912.			//SWIPES....
913.			if(gesture==SWIPE) {
914.				//Trigger status every time..
915.				
916.				//Trigger the event...
917.				$element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount]);
918.				
919.				//Fire the callback
920.				if (options.swipeStatus) {
921.					ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount);
922.					//If the status cancels, then dont run the subsequent event handlers..
923.					if(ret===false) return false;
924.				}
925.				
926.				
927.				
928.				
929.				if (phase == PHASE_END && validateSwipe()) {
930.					//Fire the catch all event
931.					$element.trigger('swipe', [direction, distance, duration, fingerCount]);
932.					
933.					//Fire catch all callback
934.					if (options.swipe) {
935.						ret = options.swipe.call($element, event, direction, distance, duration, fingerCount);
936.						//If the status cancels, then dont run the subsequent event handlers..
937.						if(ret===false) return false;
938.					}
939.					
940.					//trigger direction specific event handlers	
941.					switch (direction) {
942.						case LEFT:
943.							//Trigger the event
944.							$element.trigger('swipeLeft', [direction, distance, duration, fingerCount]);
945.					
946.					        //Fire the callback
947.							if (options.swipeLeft) {
948.								ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount);
949.							}
950.							break;
951.	
952.						case RIGHT:
953.							//Trigger the event
954.					        $element.trigger('swipeRight', [direction, distance, duration, fingerCount]);
955.					
956.					        //Fire the callback
957.							if (options.swipeRight) {
958.								ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount);
959.							}
960.							break;
961.	
962.						case UP:
963.							//Trigger the event
964.					        $element.trigger('swipeUp', [direction, distance, duration, fingerCount]);
965.					
966.					        //Fire the callback
967.							if (options.swipeUp) {
968.								ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount);
969.							}
970.							break;
971.	
972.						case DOWN:
973.							//Trigger the event
974.					        $element.trigger('swipeDown', [direction, distance, duration, fingerCount]);
975.					
976.					        //Fire the callback
977.							if (options.swipeDown) {
978.								ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount);
979.							}
980.							break;
981.					}
982.				}
983.			}
984.			
985.			
986.			//PINCHES....
987.			if(gesture==PINCH) {
988.				//Trigger the event
989.			     $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom]);
990.					
991.                //Fire the callback
992.				if (options.pinchStatus) {
993.					ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom);
994.					//If the status cancels, then dont run the subsequent event handlers..
995.					if(ret===false) return false;
996.				}
997.				
998.				if(phase==PHASE_END && validatePinch()) {
999.					
1000.					switch (pinchDirection) {
1001.						case IN:
1002.							//Trigger the event
1003.                            $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom]);
1004.                    
1005.                            //Fire the callback
1006.                            if (options.pinchIn) {
1007.								ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom);
1008.							}
1009.							break;
1010.						
1011.						case OUT:
1012.							//Trigger the event
1013.                            $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom]);
1014.                    
1015.                            //Fire the callback
1016.                            if (options.pinchOut) {
1017.								ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom);
1018.							}
1019.							break;	
1020.					}
1021.				}
1022.			}
1023.			
1024. 
1025. 
1026.                
1027.	    		
1028.			if(gesture==TAP) {
1029.				if(phase === PHASE_CANCEL || phase === PHASE_END) {
1030.					
1031.    			    
1032.    			    //Cancel any existing double tap
1033.				    clearTimeout(singleTapTimeout);
1034.				           
1035.					//If we are also looking for doubelTaps, wait incase this is one...
1036.				    if(hasDoubleTap() && !inDoubleTap()) {
1037.				        //Cache the time of this tap
1038.                        doubleTapStartTime = getTimeStamp();
1039.                       
1040.				        //Now wait for the double tap timeout, and trigger this single tap
1041.				        //if its not cancelled by a double tap
1042.				        singleTapTimeout = setTimeout($.proxy(function() {
1043.        			        doubleTapStartTime=null;
1044.        			        //Trigger the event
1045.                            $element.trigger('tap', [event.target]);
1046. 
1047.                        
1048.                            //Fire the callback
1049.                            if(options.tap) {
1050.                                ret = options.tap.call($element, event, event.target);
1051.                            }
1052.    			        }, this), options.doubleTapThreshold );
1053.    			    	
1054.    			    } else {
1055.                        doubleTapStartTime=null;
1056.                        
1057.                        //Trigger the event
1058.                        $element.trigger('tap', [event.target]);
1059. 
1060.                        
1061.                        //Fire the callback
1062.                        if(options.tap) {
1063.                            ret = options.tap.call($element, event, event.target);
1064.                        }
1065.	    		    }
1066.	    		}
1067.			}
1068.			
1069.			else if (gesture==DOUBLE_TAP) {
1070.				if(phase === PHASE_CANCEL || phase === PHASE_END) {
1071.					//Cancel any pending singletap 
1072.				    clearTimeout(singleTapTimeout);
1073.				    doubleTapStartTime=null;
1074.				        
1075.                    //Trigger the event
1076.                    $element.trigger('doubletap', [event.target]);
1077.                
1078.                    //Fire the callback
1079.                    if(options.doubleTap) {
1080.                        ret = options.doubleTap.call($element, event, event.target);
1081.                    }
1082.	    		}
1083.			}
1084.			
1085.			else if (gesture==LONG_TAP) {
1086.				if(phase === PHASE_CANCEL || phase === PHASE_END) {
1087.					//Cancel any pending singletap (shouldnt be one)
1088.				    clearTimeout(singleTapTimeout);
1089.				    doubleTapStartTime=null;
1090.				        
1091.                    //Trigger the event
1092.                    $element.trigger('longtap', [event.target]);
1093.                
1094.                    //Fire the callback
1095.                    if(options.longTap) {
1096.                        ret = options.longTap.call($element, event, event.target);
1097.                    }
1098.	    		}
1099.			}				
1100.				
1101.			return ret;
1102.		}
1103. 
1104. 
1105. 
1106.		
1107.		//
1108.		// GESTURE VALIDATION
1109.		//
1110.		
1111.		/**
1112.		* Checks the user has swipe far enough
1113.		* @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
1114.		* If no threshold was set, then we return true.
1115.		* @inner
1116.		*/
1117.		function validateSwipeDistance() {
1118.			var valid = true;
1119.			//If we made it past the min swipe distance..
1120.			if (options.threshold !== null) {
1121.				valid = distance >= options.threshold;
1122.			}
1123.			
1124.            //And we didn't swipe back to cancel...
1125.			if(valid && options.cancelThreshold !== null) {
1126.    			valid =  (getMaxDistance( direction ) - distance) < options.cancelThreshold;
1127.			}
1128.			
1129.			return valid;
1130.		}
1131. 
1132.		/**
1133.		* Checks the user has pinched far enough
1134.		* @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
1135.		* If no threshold was set, then we return true.
1136.		* @inner
1137.		*/
1138.		function validatePinchDistance() {
1139.			if (options.pinchThreshold !== null) {
1140.				return pinchDistance >= options.pinchThreshold;
1141.			}
1142.			return true;
1143.		}
1144. 
1145.		/**
1146.		* Checks that the time taken to swipe meets the minimum / maximum requirements
1147.		* @return Boolean
1148.		* @inner
1149.		*/
1150.		function validateSwipeTime() {
1151.			var result;
1152.			//If no time set, then return true
1153. 
1154.			if (options.maxTimeThreshold) {
1155.				if (duration >= options.maxTimeThreshold) {
1156.					result = false;
1157.				} else {
1158.					result = true;
1159.				}
1160.			}
1161.			else {
1162.				result = true;
1163.			}
1164. 
1165.			return result;
1166.		}
1167. 
1168. 
1169.		/**
1170.		* Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
1171.		* This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
1172.		* @param {object} jqEvent The normalised jQuery representation of the event object.
1173.		* @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
1174.		* @see $.fn.swipe.directions
1175.		* @inner
1176.		*/
1177.		function validateDefaultEvent(jqEvent, direction) {
1178.			if (options.allowPageScroll === NONE || hasPinches()) {
1179.				jqEvent.preventDefault();
1180.			} else {
1181.				var auto = options.allowPageScroll === AUTO;
1182. 
1183.				switch (direction) {
1184.					case LEFT:
1185.						if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
1186.							jqEvent.preventDefault();
1187.						}
1188.						break;
1189. 
1190.					case RIGHT:
1191.						if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
1192.							jqEvent.preventDefault();
1193.						}
1194.						break;
1195. 
1196.					case UP:
1197.						if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
1198.							jqEvent.preventDefault();
1199.						}
1200.						break;
1201. 
1202.					case DOWN:
1203.						if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
1204.							jqEvent.preventDefault();
1205.						}
1206.						break;
1207.				}
1208.			}
1209. 
1210.		}
1211. 
1212. 
1213.		// PINCHES
1214.		/**
1215.		 * Returns true of the current pinch meets the thresholds
1216.		 * @return Boolean
1217.		 * @inner
1218.		*/
1219.		function validatePinch() {
1220.		    var hasCorrectFingerCount = validateFingers();
1221.		    var hasEndPoint = validateEndPoint();
1222.			var hasCorrectDistance = validatePinchDistance();
1223.			return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
1224.			
1225.		}
1226.		
1227.		/**
1228.		 * Returns true if any Pinch events have been registered
1229.		 * @return Boolean
1230.		 * @inner
1231.		*/
1232.		function hasPinches() {
1233.			//Enure we dont return 0 or null for false values
1234.			return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
1235.		}
1236.		
1237.		/**
1238.		 * Returns true if we are detecting pinches, and have one
1239.		 * @return Boolean
1240.		 * @inner
1241.		 */
1242.		function didPinch() {
1243.			//Enure we dont return 0 or null for false values
1244.			return !!(validatePinch() && hasPinches());
1245.		}
1246. 
1247. 
1248. 
1249. 
1250.		// SWIPES
1251.		/**
1252.		 * Returns true if the current swipe meets the thresholds
1253.		 * @return Boolean
1254.		 * @inner
1255.		*/
1256.		function validateSwipe() {
1257.			//Check validity of swipe
1258.			var hasValidTime = validateSwipeTime();
1259.			var hasValidDistance = validateSwipeDistance();		
1260.		    var hasCorrectFingerCount = validateFingers();
1261.		    var hasEndPoint = validateEndPoint();
1262.		    
1263.			// if the user swiped more than the minimum length, perform the appropriate action
1264.			// hasValidDistance is null when no distance is set 
1265.			var valid =  hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
1266.			
1267.			return valid;
1268.		}
1269.		
1270.		/**
1271.		 * Returns true if any Swipe events have been registered
1272.		 * @return Boolean
1273.		 * @inner
1274.		*/
1275.		function hasSwipes() {
1276.			//Enure we dont return 0 or null for false values
1277.			return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
1278.		}
1279.		
1280.		
1281.		/**
1282.		 * Returns true if we are detecting swipes and have one
1283.		 * @return Boolean
1284.		 * @inner
1285.		*/
1286.		function didSwipe() {
1287.			//Enure we dont return 0 or null for false values
1288.			return !!(validateSwipe() && hasSwipes());
1289.		}
1290. 
1291.        /**
1292.		 * Returns true if we have matched the number of fingers we are looking for
1293.		 * @return Boolean
1294.		 * @inner
1295.		*/
1296.        function validateFingers() {
1297.            //The number of fingers we want were matched, or on desktop we ignore
1298.    		return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
1299.    	}
1300.        
1301.        /**
1302.		 * Returns true if we have an end point for the swipe
1303.		 * @return Boolean
1304.		 * @inner
1305.		*/
1306.        function validateEndPoint() {
1307.            //We have an end value for the finger
1308.		    return fingerData[0].end.x !== 0;
1309.        }
1310. 
1311.		// TAP / CLICK
1312.		/**
1313.		 * Returns true if a click / tap events have been registered
1314.		 * @return Boolean
1315.		 * @inner
1316.		*/
1317.		function hasTap() {
1318.			//Enure we dont return 0 or null for false values
1319.			return !!(options.tap) ;
1320.		}
1321.		
1322.		/**
1323.		 * Returns true if a double tap events have been registered
1324.		 * @return Boolean
1325.		 * @inner
1326.		*/
1327.		function hasDoubleTap() {
1328.			//Enure we dont return 0 or null for false values
1329.			return !!(options.doubleTap) ;
1330.		}
1331.		
1332.		/**
1333.		 * Returns true if any long tap events have been registered
1334.		 * @return Boolean
1335.		 * @inner
1336.		*/
1337.		function hasLongTap() {
1338.			//Enure we dont return 0 or null for false values
1339.			return !!(options.longTap) ;
1340.		}
1341.		
1342.		/**
1343.		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
1344.		 * @return Boolean
1345.		 * @inner
1346.		*/
1347.		function validateDoubleTap() {
1348.		    if(doubleTapStartTime==null){
1349.		        return false;
1350.		    }
1351.		    var now = getTimeStamp();
1352.		    return (hasDoubleTap() && ((now-doubleTapStartTime) <= options.doubleTapThreshold));
1353.		}
1354.		
1355.		/**
1356.		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
1357.		 * @return Boolean
1358.		 * @inner
1359.		*/
1360.		function inDoubleTap() {
1361.		    return validateDoubleTap();
1362.		}
1363.		
1364.		
1365.		/**
1366.		 * Returns true if we have a valid tap
1367.		 * @return Boolean
1368.		 * @inner
1369.		*/
1370.		function validateTap() {
1371.		    return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance === 0));
1372.		}
1373.		
1374.		/**
1375.		 * Returns true if we have a valid long tap
1376.		 * @return Boolean
1377.		 * @inner
1378.		*/
1379.		function validateLongTap() {
1380.		    //slight threshold on moving finger
1381.            return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD)); 
1382.		}
1383.		
1384.		/**
1385.		 * Returns true if we are detecting taps and have one
1386.		 * @return Boolean
1387.		 * @inner
1388.		*/
1389.		function didTap() {
1390.		    //Enure we dont return 0 or null for false values
1391.			return !!(validateTap() && hasTap());
1392.		}
1393.		
1394.		
1395.		/**
1396.		 * Returns true if we are detecting double taps and have one
1397.		 * @return Boolean
1398.		 * @inner
1399.		*/
1400.		function didDoubleTap() {
1401.		    //Enure we dont return 0 or null for false values
1402.			return !!(validateDoubleTap() && hasDoubleTap());
1403.		}
1404.		
1405.		/**
1406.		 * Returns true if we are detecting long taps and have one
1407.		 * @return Boolean
1408.		 * @inner
1409.		*/
1410.		function didLongTap() {
1411.		    //Enure we dont return 0 or null for false values
1412.			return !!(validateLongTap() && hasLongTap());
1413.		}
1414.		
1415.		
1416.		
1417.		
1418.		// MULTI FINGER TOUCH
1419.		/**
1420.		 * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
1421.		 * @inner
1422.		*/
1423.		function startMultiFingerRelease() {
1424.			previousTouchEndTime = getTimeStamp();
1425.			previousTouchFingerCount = event.touches.length+1;
1426.		}
1427.		
1428.		/**
1429.		 * Cancels the tracking of time between 2 finger releases, and resets counters
1430.		 * @inner
1431.		*/
1432.		function cancelMultiFingerRelease() {
1433.			previousTouchEndTime = 0;
1434.			previousTouchFingerCount = 0;
1435.		}
1436.		
1437.		/**
1438.		 * Checks if we are in the threshold between 2 fingers being released 
1439.		 * @return Boolean
1440.		 * @inner
1441.		*/
1442.		function inMultiFingerRelease() {
1443.			
1444.			var withinThreshold = false;
1445.			
1446.			if(previousTouchEndTime) {	
1447.				var diff = getTimeStamp() - previousTouchEndTime	
1448.				if( diff<=options.fingerReleaseThreshold ) {
1449.					withinThreshold = true;
1450.				}
1451.			}
1452.			
1453.			return withinThreshold;	
1454.		}
1455.		
1456. 
1457.		/**
1458.		* gets a data flag to indicate that a touch is in progress
1459.		* @return Boolean
1460.		* @inner
1461.		*/
1462.		function getTouchInProgress() {
1463.			//strict equality to ensure only true and false are returned
1464.			return !!($element.data(PLUGIN_NS+'_intouch') === true);
1465.		}
1466.		
1467.		/**
1468.		* Sets a data flag to indicate that a touch is in progress
1469.		* @param {boolean} val The value to set the property to
1470.		* @inner
1471.		*/
1472.		function setTouchInProgress(val) {
1473.			
1474.			//Add or remove event listeners depending on touch status
1475.			if(val===true) {
1476.				$element.bind(MOVE_EV, touchMove);
1477.				$element.bind(END_EV, touchEnd);
1478.				
1479.				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
1480.				if(LEAVE_EV) { 
1481.					$element.bind(LEAVE_EV, touchLeave);
1482.				}
1483.			} else {
1484.				$element.unbind(MOVE_EV, touchMove, false);
1485.				$element.unbind(END_EV, touchEnd, false);
1486.			
1487.				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
1488.				if(LEAVE_EV) { 
1489.					$element.unbind(LEAVE_EV, touchLeave, false);
1490.				}
1491.			}
1492.			
1493.		
1494.			//strict equality to ensure only true and false can update the value
1495.			$element.data(PLUGIN_NS+'_intouch', val === true);
1496.		}
1497.		
1498.		
1499.		/**
1500.		 * Creates the finger data for the touch/finger in the event object.
1501.		 * @param {int} index The index in the array to store the finger data (usually the order the fingers were pressed)
1502.		 * @param {object} evt The event object containing finger data
1503.		 * @return finger data object
1504.		 * @inner
1505.		*/
1506.		function createFingerData( index, evt ) {
1507.			var id = evt.identifier!==undefined ? evt.identifier : 0; 
1508.			
1509.			fingerData[index].identifier = id;
1510.			fingerData[index].start.x = fingerData[index].end.x = evt.pageX||evt.clientX;
1511.			fingerData[index].start.y = fingerData[index].end.y = evt.pageY||evt.clientY;
1512.			
1513.			return fingerData[index];
1514.		}
1515.		
1516.		/**
1517.		 * Updates the finger data for a particular event object
1518.		 * @param {object} evt The event object containing the touch/finger data to upadte
1519.		 * @return a finger data object.
1520.		 * @inner
1521.		*/
1522.		function updateFingerData(evt) {
1523.			
1524.			var id = evt.identifier!==undefined ? evt.identifier : 0; 
1525.			var f = getFingerData( id );
1526.			
1527.			f.end.x = evt.pageX||evt.clientX;
1528.			f.end.y = evt.pageY||evt.clientY;
1529.			
1530.			return f;
1531.		}
1532.		
1533.		/**
1534.		 * Returns a finger data object by its event ID.
1535.		 * Each touch event has an identifier property, which is used 
1536.		 * to track repeat touches
1537.		 * @param {int} id The unique id of the finger in the sequence of touch events.
1538.		 * @return a finger data object.
1539.		 * @inner
1540.		*/
1541.		function getFingerData( id ) {
1542.			for(var i=0; i<fingerData.length; i++) {
1543.				if(fingerData[i].identifier == id) {
1544.					return fingerData[i];	
1545.				}
1546.			}
1547.		}
1548.		
1549.		/**
1550.		 * Creats all the finger onjects and returns an array of finger data
1551.		 * @return Array of finger objects
1552.		 * @inner
1553.		*/
1554.		function createAllFingerData() {
1555.			var fingerData=[];
1556.			for (var i=0; i<=5; i++) {
1557.				fingerData.push({
1558.					start:{ x: 0, y: 0 },
1559.					end:{ x: 0, y: 0 },
1560.					identifier:0
1561.				});
1562.			}
1563.			
1564.			return fingerData;
1565.		}
1566.		
1567.		/**
1568.		 * Sets the maximum distance swiped in the given direction. 
1569.		 * If the new value is lower than the current value, the max value is not changed.
1570.		 * @param {string}  direction The direction of the swipe
1571.		 * @param {int}  distance The distance of the swipe
1572.		 * @inner
1573.		*/
1574.		function setMaxDistance(direction, distance) {
1575.    		distance = Math.max(distance, getMaxDistance(direction) );
1576.    		maximumsMap[direction].distance = distance;
1577.		}
1578.        
1579.        /**
1580.		 * gets the maximum distance swiped in the given direction. 
1581.		 * @param {string}  direction The direction of the swipe
1582.		 * @return int  The distance of the swipe
1583.		 * @inner
1584.		*/        
1585.        function getMaxDistance(direction) {
1586.            return maximumsMap[direction].distance;
1587.        }
1588.		
1589.		/**
1590.		 * Creats a map of directions to maximum swiped values.
1591.		 * @return Object A dictionary of maximum values, indexed by direction.
1592.		 * @inner
1593.		*/
1594.		function createMaximumsData() {
1595.			var maxData={};
1596.			maxData[LEFT]=createMaximumVO(LEFT);
1597.			maxData[RIGHT]=createMaximumVO(RIGHT);
1598.			maxData[UP]=createMaximumVO(UP);
1599.			maxData[DOWN]=createMaximumVO(DOWN);
1600.			
1601.			return maxData;
1602.		}
1603.		
1604.		/**
1605.		 * Creates a map maximum swiped values for a given swipe direction
1606.		 * @param {string} The direction that these values will be associated with
1607.		 * @return Object Maximum values
1608.		 * @inner
1609.		*/
1610.		function createMaximumVO(dir) {
1611.		    return { 
1612.		        direction:dir, 
1613.		        distance:0
1614.		    }
1615.		}
1616.		
1617.		
1618.		//
1619.		// MATHS / UTILS
1620.		//
1621. 
1622.		/**
1623.		* Calculate the duration of the swipe
1624.		* @return int
1625.		* @inner
1626.		*/
1627.		function calculateDuration() {
1628.			return endTime - startTime;
1629.		}
1630.		
1631.		/**
1632.		* Calculate the distance between 2 touches (pinch)
1633.		* @param {point} startPoint A point object containing x and y co-ordinates
1634.	    * @param {point} endPoint A point object containing x and y co-ordinates
1635.	    * @return int;
1636.		* @inner
1637.		*/
1638.		function calculateTouchesDistance(startPoint, endPoint) {
1639.			var diffX = Math.abs(startPoint.x - endPoint.x);
1640.			var diffY = Math.abs(startPoint.y - endPoint.y);
1641.				
1642.			return Math.round(Math.sqrt(diffX*diffX+diffY*diffY));
1643.		}
1644.		
1645.		/**
1646.		* Calculate the zoom factor between the start and end distances
1647.		* @param {int} startDistance Distance (between 2 fingers) the user started pinching at
1648.	    * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
1649.	    * @return float The zoom value from 0 to 1.
1650.		* @inner
1651.		*/
1652.		function calculatePinchZoom(startDistance, endDistance) {
1653.			var percent = (endDistance/startDistance) * 1;
1654.			return percent.toFixed(2);
1655.		}
1656.		
1657.		
1658.		/**
1659.		* Returns the pinch direction, either IN or OUT for the given points
1660.		* @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
1661.		* @see $.fn.swipe.directions
1662.		* @inner
1663.		*/
1664.		function calculatePinchDirection() {
1665.			if(pinchZoom<1) {
1666.				return OUT;
1667.			}
1668.			else {
1669.				return IN;
1670.			}
1671.		}
1672.		
1673.		
1674.		/**
1675.		* Calculate the length / distance of the swipe
1676.		* @param {point} startPoint A point object containing x and y co-ordinates
1677.	    * @param {point} endPoint A point object containing x and y co-ordinates
1678.	    * @return int
1679.		* @inner
1680.		*/
1681.		function calculateDistance(startPoint, endPoint) {
1682.			return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
1683.		}
1684. 
1685.		/**
1686.		* Calculate the angle of the swipe
1687.		* @param {point} startPoint A point object containing x and y co-ordinates
1688.	    * @param {point} endPoint A point object containing x and y co-ordinates
1689.	    * @return int
1690.		* @inner
1691.		*/
1692.		function calculateAngle(startPoint, endPoint) {
1693.			var x = startPoint.x - endPoint.x;
1694.			var y = endPoint.y - startPoint.y;
1695.			var r = Math.atan2(y, x); //radians
1696.			var angle = Math.round(r * 180 / Math.PI); //degrees
1697. 
1698.			//ensure value is positive
1699.			if (angle < 0) {
1700.				angle = 360 - Math.abs(angle);
1701.			}
1702. 
1703.			return angle;
1704.		}
1705. 
1706.		/**
1707.		* Calculate the direction of the swipe
1708.		* This will also call calculateAngle to get the latest angle of swipe
1709.		* @param {point} startPoint A point object containing x and y co-ordinates
1710.	    * @param {point} endPoint A point object containing x and y co-ordinates
1711.	    * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
1712.		* @see $.fn.swipe.directions
1713.		* @inner
1714.		*/
1715.		function calculateDirection(startPoint, endPoint ) {
1716.			var angle = calculateAngle(startPoint, endPoint);
1717. 
1718.			if ((angle <= 45) && (angle >= 0)) {
1719.				return LEFT;
1720.			} else if ((angle <= 360) && (angle >= 315)) {
1721.				return LEFT;
1722.			} else if ((angle >= 135) && (angle <= 225)) {
1723.				return RIGHT;
1724.			} else if ((angle > 45) && (angle < 135)) {
1725.				return DOWN;
1726.			} else {
1727.				return UP;
1728.			}
1729.		}
1730.		
1731. 
1732.		/**
1733.		* Returns a MS time stamp of the current time
1734.		* @return int
1735.		* @inner
1736.		*/
1737.		function getTimeStamp() {
1738.			var now = new Date();
1739.			return now.getTime();
1740.		}
1741.		
1742.		
1743.		
1744.		/**
1745.		 * Returns a bounds object with left, right, top and bottom properties for the element specified.
1746.		 * @param {DomNode} The DOM node to get the bounds for.
1747.		 */
1748.		function getbounds( el ) {
1749.			el = $(el);
1750.			var offset = el.offset();
1751.			
1752.			var bounds = {	
1753.					left:offset.left,
1754.					right:offset.left+el.outerWidth(),
1755.					top:offset.top,
1756.					bottom:offset.top+el.outerHeight()
1757.					}
1758.			
1759.			return bounds;	
1760.		}
1761.		
1762.		
1763.		/**
1764.		 * Checks if the point object is in the bounds object.
1765.		 * @param {object} point A point object.
1766.		 * @param {int} point.x The x value of the point.
1767.		 * @param {int} point.y The x value of the point.
1768.		 * @param {object} bounds The bounds object to test
1769.		 * @param {int} bounds.left The leftmost value
1770.		 * @param {int} bounds.right The righttmost value
1771.		 * @param {int} bounds.top The topmost value
1772.		* @param {int} bounds.bottom The bottommost value
1773.		 */
1774.		function isInBounds(point, bounds) {
1775.			return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
1776.		};
1777.	
1778.	
1779.	}
1780.	
1781.	
1782. 
1783. 
1784./**
1785. * A catch all handler that is triggered for all swipe directions. 
1786. * @name $.fn.swipe#swipe
1787. * @event
1788. * @default null
1789. * @param {EventObject} event The original event object
1790. * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
1791. * @param {int} distance The distance the user swiped
1792. * @param {int} duration The duration of the swipe in milliseconds
1793. * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
1794. */
1795. 
1796. 
1797. 
1798. 
1799./**
1800. * A handler that is triggered for "left" swipes.
1801. * @name $.fn.swipe#swipeLeft
1802. * @event
1803. * @default null
1804. * @param {EventObject} event The original event object
1805. * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
1806. * @param {int} distance The distance the user swiped
1807. * @param {int} duration The duration of the swipe in milliseconds
1808. * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
1809. */
1810. 
1811./**
1812. * A handler that is triggered for "right" swipes.
1813. * @name $.fn.swipe#swipeRight
1814. * @event
1815. * @default null
1816. * @param {EventObject} event The original event object
1817. * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
1818. * @param {int} distance The distance the user swiped
1819. * @param {int} duration The duration of the swipe in milliseconds
1820. * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
1821. */
1822. 
1823./**
1824. * A handler that is triggered for "up" swipes.
1825. * @name $.fn.swipe#swipeUp
1826. * @event
1827. * @default null
1828. * @param {EventObject} event The original event object
1829. * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
1830. * @param {int} distance The distance the user swiped
1831. * @param {int} duration The duration of the swipe in milliseconds
1832. * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
1833. */
1834. 
1835./**
1836. * A handler that is triggered for "down" swipes.
1837. * @name $.fn.swipe#swipeDown
1838. * @event
1839. * @default null
1840. * @param {EventObject} event The original event object
1841. * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
1842. * @param {int} distance The distance the user swiped
1843. * @param {int} duration The duration of the swipe in milliseconds
1844. * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
1845. */
1846. 
1847./**
1848. * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
1849. * This is triggered regardless of swipe thresholds.
1850. * @name $.fn.swipe#swipeStatus
1851. * @event
1852. * @default null
1853. * @param {EventObject} event The original event object
1854. * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
1855. * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
1856. * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
1857. * @param {int} duration The duration of the swipe in milliseconds
1858. * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
1859. */
1860. 
1861./**
1862. * A handler triggered for pinch in events.
1863. * @name $.fn.swipe#pinchIn
1864. * @event
1865. * @default null
1866. * @param {EventObject} event The original event object
1867. * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
1868. * @param {int} distance The distance the user pinched
1869. * @param {int} duration The duration of the swipe in milliseconds
1870. * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
1871. * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
1872. */
1873. 
1874./**
1875. * A handler triggered for pinch out events.
1876. * @name $.fn.swipe#pinchOut
1877. * @event
1878. * @default null
1879. * @param {EventObject} event The original event object
1880. * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
1881. * @param {int} distance The distance the user pinched
1882. * @param {int} duration The duration of the swipe in milliseconds
1883. * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
1884. * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
1885. */ 
1886. 
1887./**
1888. * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
1889. * @name $.fn.swipe#pinchStatus
1890. * @event
1891. * @default null
1892. * @param {EventObject} event The original event object
1893. * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
1894. * @param {int} distance The distance the user pinched
1895. * @param {int} duration The duration of the swipe in milliseconds
1896. * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
1897. * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
1898. */
1899. 
1900./**
1901. * A click handler triggered when a user simply clicks, rather than swipes on an element.
1902. * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
1903. * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
1904. * Use the <code>tap</code> event instead.
1905. * @name $.fn.swipe#click
1906. * @event
1907. * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead 
1908. * @default null
1909. * @param {EventObject} event The original event object
1910. * @param {DomObject} target The element clicked on.
1911. */
1912. 
1913. /**
1914. * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
1915. * @name $.fn.swipe#tap
1916. * @event
1917. * @default null
1918. * @param {EventObject} event The original event object
1919. * @param {DomObject} target The element clicked on.
1920. */
1921. 
1922./**
1923. * A double tap handler triggered when a user double clicks or taps on an element.
1924. * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property. 
1925. * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
1926. * as the script needs to check if its a double tap.
1927. * @name $.fn.swipe#doubleTap
1928. * @see  $.fn.swipe.defaults#doubleTapThreshold
1929. * @event
1930. * @default null
1931. * @param {EventObject} event The original event object
1932. * @param {DomObject} target The element clicked on.
1933. */
1934. 
1935. /**
1936. * A long tap handler triggered when a user long clicks or taps on an element.
1937. * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property. 
1938. * @name $.fn.swipe#longTap
1939. * @see  $.fn.swipe.defaults#longTapThreshold
1940. * @event
1941. * @default null
1942. * @param {EventObject} event The original event object
1943. * @param {DomObject} target The element clicked on.
1944. */
1945. 
1946.})(jQuery);

 
Documentation generated by JsDoc Toolkit 2.4.0 on Mon Apr 01 2013 18:48:20 GMT+0100 (BST)
 