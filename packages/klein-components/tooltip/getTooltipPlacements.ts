import placements, {
  BuildInPlacements,
} from '../components/rc-tooltip/placements';

function getTooltipPlacements(arrowPointAtCenter?: boolean) {
  const horizontalArrowShift = 16;
  const arrowWidth = 4;
  const verticalArrowShift = 8;

  const arrowCenterPlacement: BuildInPlacements = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0],
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0],
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4],
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4],
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4],
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)],
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4],
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)],
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4],
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth],
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4],
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth],
    },
  };

  return arrowPointAtCenter ? arrowCenterPlacement : placements;
}

export default getTooltipPlacements;
