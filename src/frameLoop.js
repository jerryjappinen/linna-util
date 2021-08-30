// Frame loop runs a recurring update routine with a maximum frame rate
const defaultFps = 60

let lastStartTime = 0
let lastEvaluationTime = 0 // Time of last provided requestAnimationFrame
let lastUpdateTime = 0 // Time of last update. Increments by exactly 1 frameInterval
let lastRenderTime = 0 // Time of last render. Increments in multiples of frameInterval
let frameInterval = 0 // how frequently the game state updates in ms. It is 20 Hz (50ms) here
let frameLoopId = null // requestAnimationFrame will store the reset callback here

// User callbacks
let onEvaluationCallback = null // runs as fast as the computer can
let onUpdateCallback = null // always runs for every frame
let onRenderCallback = null // runs only on the last frame, when frames are skipped
let onPauseCallback = null // runs when a loop is paused
let onResetCallback = null // runs when a loop is reset

// Getters
const getFrameTime = () => {
  return frameInterval
}

const getFps = () => {
  return 1000 / frameInterval
}

const getLastStartTime = () => {
  return lastStartTime
}

const getLastRenderTime = () => {
  return lastRenderTime
}

const getLastUpdateTime = () => {
  return lastUpdateTime
}

const getLastEvaluationTime = () => {
  return lastEvaluationTime
}

// Set FPS as frameInterval (in ms)
const setFrameTime = (frameTimeInMs) => {
  frameInterval = frameTimeInMs
}

const setFps = (fps) => {
  return setFrameTime(1000 / fps)
}

// User-defined options and callbacks
const setOptions = ({
  fps,
  frameInterval,
  onEvaluation,
  onUpdate,
  onRender,
  onPause,
  onReset
}) => {
  // Frame time can be set in FPS or MS
  if (fps) {
    setFps(fps)
  } else if (frameInterval) {
    setFrameTime(frameInterval)
  }

  if (onEvaluation) {
    onEvaluationCallback = onEvaluation
  }

  if (onUpdate) {
    onUpdateCallback = onUpdate
  }

  if (onRender) {
    onRenderCallback = onRender
  }

  if (onPause) {
    onPauseCallback = onPause
  }

  if (onReset) {
    onResetCallback = onReset
  }
}

const setInitialValues = () => {
  lastEvaluationTime = 0
  lastUpdateTime = 0
  lastRenderTime = 0
}

const setDefaults = () => {
  setFps(defaultFps)
}

// Loop handling

// Now lastUpdateTime is this tick
const queueFrameStateUpdates = (frameCount) => {
  console.log('queueFrameStateUpdates', frameCount)

  for (var i = 0; i < frameCount; i++) {
    lastUpdateTime = lastUpdateTime + frameInterval

    // Run (all) frame updates
    if (onUpdateCallback) {
      onUpdateCallback(lastUpdateTime)
    }
  }
}

// If tFrame < nextFrameTime then 0 ticks need to be updated (0 is default for frameCount)
// If tFrame = nextFrameTime then 1 tick needs to be updated (and so forth)
const onEvaluation = (timeElapsedAbsolute) => {
  const timeElapsed = timeElapsedAbsolute - lastStartTime

  // How many updates should have happened between these two rendered frames. Not all frames are rendered.
  // If frameCount is large, then game was asleep, or the machine cannot keep up
  let frameCount = 0

  const nextFrameTime = lastUpdateTime + frameInterval
  if (timeElapsed > nextFrameTime) {
    // time between requestAnimationFrame callback and last update
    // const timeSinceTick = timeElapsed - lastUpdateTime

    // Increment total
    frameCount = Math.floor((timeElapsed - lastUpdateTime) / frameInterval)
  }

  console.log('onEvaluation', lastUpdateTime, frameCount, timeElapsed)

  // NOTE: Runs before update and render. Timestamp will not match framerate targets
  if (onEvaluationCallback) {
    onEvaluationCallback(timeElapsed)
  }

  if (frameCount) {
    // Run frame routine for each tick that has passed
    queueFrameStateUpdates(frameCount)

    // Run frame update (only once, in case of skipped frames)
    // FIXME: should we update timestamp after callback?
    lastRenderTime = lastUpdateTime

    if (onRenderCallback) {
      onRenderCallback(lastUpdateTime)
    }
  }

  lastEvaluationTime = timeElapsed

  return pauseFrameLoop
}

// Loop while
const frameLoop = (timeElapsedAbsolute) => {
  console.log('frameLoop', timeElapsedAbsolute)

  // Register next frame
  // NOTE: requestAnimationFrame will always pass a timestamp to callback
  frameLoopId = window.requestAnimationFrame(frameLoop)

  // Execute frame
  onEvaluation(timeElapsedAbsolute)

  return pauseFrameLoop
}

// Playback

const pauseFrameLoop = () => {
  if (frameLoopId) {
    window.cancelAnimationFrame(frameLoopId)
    frameLoopId = null

    if (onPauseCallback) {
      onPauseCallback()
    }

    return true
  }

  return false
}

const resetFrameLoop = () => {
  const frameLoopWasRunning = !!frameLoopId

  pauseFrameLoop()

  setInitialValues()

  console.log('resetFrameLoop', lastUpdateTime, lastEvaluationTime)

  // Callback will be passed info whether or not loop was running and will be restarted
  if (onResetCallback) {
    onResetCallback(frameLoopWasRunning)
  }

  // Restart after reset if loop was playing when reset was called
  if (frameLoopWasRunning) {
    startFrameLoop()
  }
}

// Start cycle
const startFrameLoop = (options) => {
  lastStartTime = window.performance.now()

  console.log('startFrameLoop', lastEvaluationTime)

  if (options) {
    setOptions(options)
  }

  return frameLoop(lastEvaluationTime)
}

// Prepare
// We run resets here to always have sensible initial values
resetFrameLoop()
setDefaults()

export {
  setOptions,

  getFps,
  getFrameTime,
  getLastEvaluationTime,
  getLastUpdateTime,
  getLastRenderTime,
  getLastStartTime,

  pauseFrameLoop,
  resetFrameLoop,
  startFrameLoop
}
