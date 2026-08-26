import React, { Fragment } from 'react';
import {
  isAndroid,
  isBrowser,
  isIOS,
  isMobile,
  isIE,
  isWinPhone,
  isSmartTV,
  isMobileOnly,
  isWearable,
  isConsole,
  isTablet,
} from '../lib/selectors';

export const AndroidView = ({ renderWithFragment, children, device, viewClassName, className, ...props }) => {
  const show = device !== undefined ? device : isAndroid;
  return show ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName || className} {...props}>{children}</div>
    )
  ) : null;
};

export const BrowserView = ({ renderWithFragment, children, device, viewClassName, className, ...props }) => {
  const show = device !== undefined ? device : isBrowser;
  return show ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName || className} {...props}>{children}</div>
    )
  ) : null;
};

export const IEView = ({ renderWithFragment, children, device, viewClassName, className, ...props }) => {
  const show = device !== undefined ? device : isIE;
  return show ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName || className} {...props}>{children}</div>
    )
  ) : null;
};

export const IOSView = ({ renderWithFragment, children, device, viewClassName, className, ...props }) => {
  const show = device !== undefined ? device : isIOS;
  return show ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName || className} {...props}>{children}</div>
    )
  ) : null;
};

export const MobileView = ({ renderWithFragment, children, device, viewClassName, className, ...props }) => {
  const show = device !== undefined ? device : isMobile;
  return show ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName || className} {...props}>{children}</div>
    )
  ) : null;
};

export const TabletView = ({ renderWithFragment, children, device, viewClassName, className, ...props }) => {
  const show = device !== undefined ? device : isTablet;
  return show ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName || className} {...props}>{children}</div>
    )
  ) : null;
};

export const WinPhoneView = ({ renderWithFragment, children, device, viewClassName, className, ...props }) => {
  const show = device !== undefined ? device : isWinPhone;
  return show ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName || className} {...props}>{children}</div>
    )
  ) : null;
};

export const MobileOnlyView = ({
  renderWithFragment,
  children,
  viewClassName,
  style,
  ...props
}) => {
  return isMobileOnly ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const SmartTVView = ({ renderWithFragment, children, ...props }) => {
  return isSmartTV ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const ConsoleView = ({ renderWithFragment, children, ...props }) => {
  return isConsole ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const WearableView = ({ renderWithFragment, children, ...props }) => {
  return isWearable ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const CustomView = ({
  renderWithFragment,
  children,
  viewClassName,
  style,
  condition,
  ...props
}) => {
  return condition ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};
