import React, { useCallback, useMemo } from 'react';
import { ConfigContext } from '../config-provider/context';
import classnames from 'classnames';
import Tooltip from '../tooltip';

export interface StarProps {
  character: React.ReactNode;
  value: number;
  index: number;
  allowHalf: boolean;
  tooltips?: string[];
  onMouseMove: (event: React.MouseEventHandler, index: number) => void;
  onClick: (event: React.MouseEventHandler, index: number) => void;
}

const Star: React.FC<StarProps> = ({
  character,
  value,
  index,
  allowHalf,
  tooltips,
  onMouseMove,
  onClick,
}) => {
  const { getPrefixClassName } = React.useContext(ConfigContext);

  const rateCls = getPrefixClassName('rate');

  const classNames = useMemo(() => {
    return classnames(`${rateCls}-star`, {
      [`${rateCls}-star-full`]: value >= index + 1,
      [`${rateCls}-star-half`]: allowHalf && value === index + 0.5,
    });
  }, [rateCls, value, index, allowHalf]);

  const handleMouseMove = useCallback(
    (event) => {
      onMouseMove(event, index);
    },
    [index, onMouseMove],
  );

  const handleClick = useCallback(
    (event) => {
      onClick(event, index);
    },
    [index, onClick],
  );

  const tooltip = useMemo(() => {
    if (Array.isArray(tooltips) && index < tooltips.length) {
      return tooltips[index];
    }

    return undefined;
  }, [tooltips, index]);

  const characterNode = useMemo(() => {
    if (typeof character === 'function') {
      return character({ index });
    }

    return character;
  }, [character, index]);

  const starContent = useMemo(
    () => (
      <div
        className={classNames}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        <div className={`${rateCls}-star-background`}>{characterNode}</div>
        <div className={`${rateCls}-star-content`}>{characterNode}</div>
      </div>
    ),
    [characterNode, classNames, handleClick, handleMouseMove, rateCls],
  );

  return tooltip ? (
    <Tooltip overlay={tooltip}>{starContent}</Tooltip>
  ) : (
    starContent
  );
};

export default Star;
