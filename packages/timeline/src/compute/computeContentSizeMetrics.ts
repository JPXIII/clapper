import { ClapMeta, ClapTracks } from "@aitube/clap"

import { ContentSizeMetrics } from "@/types/timeline"

import { computeCellHeight } from "./computeCellHeight"
import { DEFAULT_COLUMNS_PER_SLICE, DEFAULT_DURATION_IN_MS_PER_STEP, DEFAULT_NB_TRACKS, NB_MAX_SHOTS, PROMPT_STEP_HEIGHT_IN_PX } from "@/constants/grid"

export function computeContentSizeMetrics({
  meta,
  tracks,
  cellWidth,
  defaultSegmentDurationInSteps,
  totalDurationInMs,
}: {
  meta: ClapMeta
  tracks: ClapTracks
  cellWidth: number
  defaultSegmentDurationInSteps: number
  totalDurationInMs: number
}): ContentSizeMetrics {

  // in the future those might be dynamic / coming from settings
  const nbMaxShots = NB_MAX_SHOTS
  const nbMaxTracks = DEFAULT_NB_TRACKS
  const defaultCellHeight = PROMPT_STEP_HEIGHT_IN_PX

  const defaultSegmentLengthInPixels = cellWidth * defaultSegmentDurationInSteps

  // TODO: compute the exact image ratio instead of using the media orientation,
  // since it might not match the actual assets
  const defaultMediaRatio =
    (meta.width || 896) / (meta.height || 512)
  
  // also storyboards and videos might have different sizes / ratios
  const defaultPreviewHeight = Math.round(
    defaultSegmentLengthInPixels / defaultMediaRatio
  )
  
  let contentHeight = 0
  const newTracks: ClapTracks = tracks.map((track: any) => {
    contentHeight += computeCellHeight({
      trackNumber: track.id,
      tracks,
      defaultCellHeight,
      defaultPreviewHeight
    })
    return {
      ...track,
      contentHeight,
    }
  })
  return {
    nbMaxShots,
    nbMaxTracks,
    nbIdentifiedTracks: newTracks.length,

    // node: content width and height are in pixels
    contentWidth: (totalDurationInMs / DEFAULT_DURATION_IN_MS_PER_STEP) * cellWidth,
    contentHeight,

    tracks: newTracks,
    cellWidth,
    defaultCellHeight,
    defaultSegmentDurationInSteps,
    defaultSegmentLengthInPixels,
    defaultMediaRatio,
    defaultPreviewHeight,
  }
}