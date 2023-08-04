import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Notification } from 'klein';

const clickCallbackTest = (type: string) => {
  let isClick = false;
  const baseConfig: any = {
    message: 'Message',
    description: 'notification description',
    showBtns: true,
    key: 'close callback',
  };
  baseConfig[type] = () => {
    isClick = true;
  };
  Notification.open(baseConfig);
  const target = type === 'cancel' ? 0 : 1;
  const btn = screen.getAllByRole('button')[target];
  userEvent.click(btn);
  expect(isClick).toBe(true);
  Notification.destroy();
};

describe('Notification', () => {
  test('it should be closed correctly', () => {
    Notification.open({
      message: 'Message',
      description: 'notification description',
      duration: null,
      key: 'notiKey',
    });
    Notification.close('notiKey');
    const notiLen = document.querySelectorAll('.klein-notification-notice')
      .length;
    expect(notiLen).toBe(0);
  });

  test('it should be destroyed correctly', () => {
    Notification.open({
      message: 'Message',
      description: 'notification description',
      duration: null,
    });
    Notification.open({
      message: 'Message',
      description: 'notification description',
      duration: null,
    });
    const notifyLen = document.querySelectorAll('.klein-notification').length;
    const noticeLen = document.querySelectorAll('.klein-notification-notice')
      .length;
    expect(notifyLen).toBe(1);
    expect(noticeLen).toBe(2);
    Notification.destroy();
    const notifyDestoryLen = document.querySelectorAll('.klein-notification')
      .length;
    const noticeDestoryLen = document.querySelectorAll(
      '.klein-notification-notice',
    ).length;
    expect(notifyDestoryLen).toBe(0);
    expect(noticeDestoryLen).toBe(0);
  });

  test('notification with icon', () => {
    const notifyTypes = ['success', 'info', 'warn', 'error'];
    notifyTypes.forEach((type) => {
      Notification[type]({
        message: 'Message',
        description: 'notification description',
        duration: null,
      });
    });
    const len = document.querySelectorAll('.klein-notification-content-status')
      .length;
    expect(len).toBe(4);
    Notification.destroy();
  });

  test('notification with colorBorder', () => {
    const notifyTypes = ['success', 'info', 'warn', 'error'];
    notifyTypes.forEach((type) => {
      Notification[type]({
        message: 'Message',
        description: 'notification description',
        showColorBorder: true,
        duration: null,
      });
    });
    const len = document.querySelectorAll('.klein-notification-color-border')
      .length;
    expect(len).toBe(4);
    Notification.destroy();
  });

  test('notification with default buttons', () => {
    Notification.open({
      message: 'Message',
      description: 'notification description',
      showBtns: true,
    });
    const len = document.querySelectorAll('.klein-notification-content-btns')
      .length;
    expect(len).toBe(1);
    Notification.destroy();
  });

  test('notification cancel callback should be called', () => {
    clickCallbackTest('cancel');
  });

  test('notification confirm callback should be called', () => {
    clickCallbackTest('confirm');
  });

  test('notification with custom buttons', () => {
    Notification.open({
      message: 'Message',
      description: 'notification description',
      showBtns: true,
      btn: (
        <a href="###" className="custom-button">
          自定义按钮
        </a>
      ),
    });
    const len = document.querySelectorAll('.custom-button').length;
    expect(len).toBe(1);
    Notification.destroy();
  });

  test('notification should render correctly', () => {
    const custCls = 'custom-div';
    const { container } = render(
      <div className={`${custCls}`}>Hello World</div>,
    );
    Notification.open({
      message: 'Message',
      description: 'notification description',
      getContainer: () => container.querySelector(`.${custCls}`),
    });
    const mountedDivCls = document.querySelector('.klein-notification')
      ?.parentElement?.parentElement?.className;
    expect(mountedDivCls).toBe(custCls);
    Notification.destroy();
    Notification.config({});
  });

  test('global getContainer config', () => {
    const custCls = 'custom-div';
    const { container } = render(
      <div className={`${custCls}`}>Hello World</div>,
    );
    Notification.config({
      getContainer: () => container.querySelector(`.${custCls}`),
    });
    Notification.open({
      message: 'Message',
      description: 'notification description',
      duration: null,
    });
    const mountedDivCls = document.querySelector('.klein-notification')
      ?.parentElement?.parentElement?.className;
    expect(mountedDivCls).toBe(custCls);
    Notification.destroy();
    Notification.config({});
  });

  test('global prefix config', () => {
    Notification.config({
      prefix: 'custom-prefix',
    });
    Notification.open({
      message: 'Message',
      description: 'notification description',
      duration: null,
    });
    const customPrefixNotify = document.querySelectorAll(
      '.custom-prefix-notification',
    );
    const kleinNotify = document.querySelectorAll('.klein-notification');
    expect(customPrefixNotify.length).toBe(1);
    expect(kleinNotify.length).toBe(0);
    Notification.destroy();
    Notification.config({});
  });

  test('global duration config', () => {
    Notification.config({
      duration: null,
    });
    Notification.open({
      message: 'Message',
      description: 'notification description',
    });
    const kleinNotify = document.querySelectorAll('.klein-notification');
    expect(kleinNotify.length).toBe(1);
    Notification.destroy();
    Notification.config({});
  });
});
