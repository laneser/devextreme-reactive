import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'clsx';
import { styled } from '@mui/material';
import { getStickyCellStyle, getBorder } from './utils';

const PREFIX = 'TableFixedCell';
export const classes = {
  dividerRight: `${PREFIX}-dividerRight`,
  dividerLeft: `${PREFIX}-dividerLeft`,
  fixedCell: `${PREFIX}-fixedCell`,
  selected: `${PREFIX}-selected`,
};
const styles = ({ theme }) => ({
  [`&.${classes.dividerRight}`]: {
    borderRight: getBorder(theme),
  },
  [`&.${classes.dividerLeft}`]: {
    borderLeft: getBorder(theme),
  },
  [`&.${classes.fixedCell}`]: getStickyCellStyle(theme),
  [`&.${classes.selected}`]: {
    backgroundColor: 'inherit',
  },
});
class FixedCellBase extends React.PureComponent {
  render() {
    const {
      className = undefined,
      component: CellPlaceholder,
      position = undefined,
      selected = false,
      showLeftDivider = false,
      showRightDivider = false,
      side,
      style = null,
      ...restProps
    } = this.props;

    return (
      <CellPlaceholder
        className={classNames({
          [classes.dividerLeft]: showLeftDivider,
          [classes.dividerRight]: showRightDivider,
          [classes.fixedCell]: true,
          [classes.selected]: selected,
        }, className)}
        style={{
          ...style,
          [side]: position,
        }}
        {...restProps}
      />
    );
  }
}

FixedCellBase.propTypes = {
  component: PropTypes.func.isRequired,
  className: PropTypes.string,
  position: PropTypes.number,
  selected: PropTypes.bool,
  showLeftDivider: PropTypes.bool,
  showRightDivider: PropTypes.bool,
  side: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export const FixedCell = styled(FixedCellBase)(styles);
