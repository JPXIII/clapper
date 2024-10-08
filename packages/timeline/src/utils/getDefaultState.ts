import { newClap } from "@aitube/clap"

import { DEFAULT_NB_TRACKS, pastel, PROMPT_STEP_HEIGHT_IN_PX } from "@/constants"
import { TimelineStorePreferencesState, TimelineStoreProjectState, TimelineStoreState } from "@/types/timeline"
import { NB_MAX_SHOTS } from "@/constants/grid"


// those settings will change between .clap project reloads
export function getDefaultProjectState(): TimelineStoreProjectState {
  return {
    meta: newClap().meta,
    scenes: [],
    segments: [],
    totalDurationInMs: 0,
    loadedSegments: [],
    visibleSegments: [],
    lineNumberToMentionedSegments: {},

    entities: [],
    entityIndex: {},
    entitiesChanged: 0,

    isEmpty: true,
    isLoading: false,

    initialized: false,
    timeout: 0 as unknown as NodeJS.Timeout,

    minHorizontalZoomLevel: 6,
    maxHorizontalZoomLevel: 100,
    originalHorizontalZoomLevel: PROMPT_STEP_HEIGHT_IN_PX,
    
    nbMaxShots: NB_MAX_SHOTS,
    nbMaxTracks: DEFAULT_NB_TRACKS,
    nbIdentifiedTracks: 0,
    contentWidth: 4096,
    contentHeight: 800,
    cellWidth: PROMPT_STEP_HEIGHT_IN_PX,
    tracks: [],
    defaultCellHeight: PROMPT_STEP_HEIGHT_IN_PX,
    defaultSegmentDurationInSteps: 4,
    defaultSegmentLengthInPixels: 4 * PROMPT_STEP_HEIGHT_IN_PX,
    defaultMediaRatio: 896 / 512,
    defaultPreviewHeight: PROMPT_STEP_HEIGHT_IN_PX,
    typicalSegmentDurationInSteps: 4,

    // @deprecated, we now use a static WebGL camera zoom level set at 1.0
    currentZoomLevel: 1.0, 

    // for developer convenience, the information about hovered, edited, selected..
    // is both present inside each segment and also aliased here, for fast access
    hoveredSegment: undefined,
    editedSegment: undefined,
    selectedSegments: [],
    
    allSegmentsChanged: 0,
    atLeastOneSegmentChanged: 0,
  
    // the purpose is to allow an external component
    // to modify the segments in-line, and then trigger a redraw
    silentChangesInSegment: {},

    scrollX: 0,
    scrollY: 450,
    resizeStartedAt: 0,
    isResizing: false,

    finalVideo: undefined,
    
    cursorTimestampAtInMs: 0,
    isDraggingCursor: false,
  }
}

// those settings will NOT changes between .clap project reloads
export function getDefaultPreferencesState(): TimelineStorePreferencesState {
  return {
    canvas: undefined,
    isReady: false,
    width: 1800,
    height: 800,
    theme: pastel,
    timelineControls: undefined,
    topBarTimeScale: undefined,
    leftBarTrackScale: undefined,
    timelineCursor: undefined,

    // note: those are stateless functions, use as empty
    // mocls that are normally overriden at runtime
    segmentResolver: async (segment) => segment,
    jumpAt: () => {},
    isPlaying: () => false,
    togglePlayback: () => ({ wasPlaying: false, isPlaying: false })
  }
}

export function getDefaultState(): TimelineStoreState {
  return {
    ...getDefaultProjectState(),
    ...getDefaultPreferencesState(),
  }
}