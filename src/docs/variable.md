---
title: 设计变量
nav:
  title: 设计变量
  path: /question
group:
  title:
---

# 设计变量

设计变量是构建和维护设计系统的视觉设计原子，可以有效的保障组件库的可扩展性和一致性的视觉体系、在这里查看组件库内置的设计变量和默认值。

## 主色

| 变量名                                             | 变量值  | less 变量      | 描述                 |
| :------------------------------------------------- | :------ | :------------- | :------------------- |
| <ColorTag color="#006AFF"></ColorTag>brand-color-6 | #006AFF | @brand-color-6 | 常规                 |
| <ColorTag color="#4D9AFF"></ColorTag>brand-color-5 | #4D9AFF | @brand-color-5 | 悬浮                 |
| <ColorTag color="#0055CC"></ColorTag>brand-color-7 | #0055CC | @brand-color-7 | 点击                 |
| <ColorTag color="#CAE2FF"></ColorTag>brand-color-3 | #CAE2FF | @brand-color-3 | 边框线/禁用/全局提示 |
| <ColorTag color="#F2F8FF"></ColorTag>brand-color-1 | #F2F8FF | @brand-color-1 | 背景                 |

## 成功色

| 变量名                                               | 变量值  | less 变量        | 描述                 |
| :--------------------------------------------------- | :------ | :--------------- | :------------------- |
| <ColorTag color="#00C261"></ColorTag>success-color-6 | #00C261 | @success-color-1 | 常规                 |
| <ColorTag color="#40D488"></ColorTag>success-color-5 | #40D488 | @success-color-4 | 悬浮                 |
| <ColorTag color="#009E4F"></ColorTag>success-color-7 | #009E4F | @success-color-5 | 点击                 |
| <ColorTag color="#BFF1D6"></ColorTag>success-color-3 | #BFF1D6 | @success-color-2 | 边框线/禁用/全局提示 |
| <ColorTag color="#EDFAF3"></ColorTag>success-color-1 | #EDFAF3 | @success-color-3 | 背景                 |

## 警示色

| 变量名                                               | 变量值  | less 变量        | 描述                 |
| :--------------------------------------------------- | :------ | :--------------- | :------------------- |
| <ColorTag color="#FF7700"></ColorTag>warning-color-6 | #FF7700 | @warning-color-1 | 常规                 |
| <ColorTag color="#FF9D4D"></ColorTag>warning-color-5 | #FF9D4D | @warning-color-5 | 悬浮                 |
| <ColorTag color="#CC5F00"></ColorTag>warning-color-7 | #CC5F00 | @warning-color-7 | 点击                 |
| <ColorTag color="#FFE1CA"></ColorTag>warning-color-3 | #FFE1CA | @warning-color-2 | 边框线/禁用/全局提示 |
| <ColorTag color="#FFF8F2"></ColorTag>warning-color-1 | #FFF8F2 | @warning-color-3 | 背景                 |

## 错误色

| 变量名                                              | 变量值  | less 变量       | 描述                 |
| :-------------------------------------------------- | :------ | :-------------- | :------------------- |
| <ColorTag color="#FF2626"></ColorTag>danger-color-6 | #FF2626 | @danger-color-1 | 常规                 |
| <ColorTag color="#FF6164"></ColorTag>danger-color-5 | #FF6164 | @danger-color-4 | 悬浮                 |
| <ColorTag color="#CC1F1F"></ColorTag>danger-color-7 | #CC1F1F | @danger-color-5 | 点击                 |
| <ColorTag color="#FFCCCE"></ColorTag>danger-color-3 | #FFCCCE | @danger-color-2 | 边框线/禁用/全局提示 |
| <ColorTag color="#FFF2F2"></ColorTag>danger-color-1 | #FFF2F2 | @danger-color-3 | 背景                 |

## 链接色

| 变量名                                            | 变量值         | less 变量              | 描述                 |
| :------------------------------------------------ | :------------- | :--------------------- | :------------------- |
| <ColorTag color="#006AFF"></ColorTag>link-color-6 | @brand-color-6 | @brand-link-color      | 常规                 |
| <ColorTag color="#4D9AFF"></ColorTag>link-color-5 | @brand-color-5 | @brand-hover-color     | 悬浮                 |
| <ColorTag color="#0055CC"></ColorTag>link-color-7 | @brand-color-7 | @brand-active-color    | 点击                 |
| <ColorTag color="#CAE2FF"></ColorTag>link-color-3 | @brand-color-3 | @brand-border-color    | 边框线/禁用/全局提示 |
| <ColorTag color="#F2F8FF"></ColorTag>link-color-1 | @brand-color-1 | @brand-active-bg-color | 背景                 |

## 边框颜色

| 变量名                                              | 变量值          | less 变量      | 描述      |
| :-------------------------------------------------- | :-------------- | :------------- | :-------- |
| <ColorTag color="#E9ECF0"></ColorTag>border-color-1 | @normal-color-4 | @divider-color | 一般      |
| <ColorTag color="#DFE2E6"></ColorTag>border-color-2 | @normal-color-5 | @border-color  | 深色/悬浮 |

## 填充颜色

| 变量名                                            | 变量值  | less 变量       | 描述 |
| :------------------------------------------------ | :------ | :-------------- | :--- |
| <ColorTag color="#F5F7FA"></ColorTag>fill-color-1 | #F5F7FA | @normal-color-2 | 浅色 |
| <ColorTag color="#F0F2F5"></ColorTag>fill-color-2 | #F0F2F5 | @normal-color-3 | 禁用 |

## 文字颜色

| 变量名                                            | 变量值          | less 变量             | 描述            |
| :------------------------------------------------ | :-------------- | :-------------------- | :-------------- |
| <ColorTag color="#1E2226"></ColorTag>text-color-1 | @normal-color-9 | @primary-text-color   | 强调/正文标题   |
| <ColorTag color="#626973"></ColorTag>text-color-2 | @normal-color-8 | -                     | 次强调/正文标题 |
| <ColorTag color="#8A9099"></ColorTag>text-color-3 | @normal-color-7 | @secondary-text-color | 次要信息        |
| <ColorTag color="#B6BABF"></ColorTag>text-color-4 | @normal-color-6 | @disable-color        | 置灰信息        |

## 背景颜色

| 变量名                                          | 变量值  | less 变量       | 描述                               |
| :---------------------------------------------- | :------ | :-------------- | :--------------------------------- |
| <ColorTag color="white"></ColorTag>bg-color-1   | @white  | @normal-color-1 | 白色背景/一级容器背景/三级容器背景 |
| <ColorTag color="#F5F7FA"></ColorTag>bg-color-2 | #F5F7FA | @normal-color-2 | 整体背景/二级容器背景              |

## 字体大小

| 变量名             | 变量值 | less 变量       | 描述      |
| :----------------- | :----- | :-------------- | :-------- |
| font-size-body-2   | 14px   | @font-size-md   | 正文-常规 |
| font-size-body-1   | 12px   | @font-size-sm   | 正文-小   |
| font-size-body-3   | 16px   | @font-size-lg   | 正文-大   |
| font-size-tittle-1 | 16px   | @font-size-lg   | 标题-小   |
| font-size-tittle-2 | 20px   | @font-size-lg-1 | 标题-中   |
| font-size-tittle-3 | 24px   | @font-size-lg-2 | 标题-大   |

## 字重

| 变量名          | 变量值 | less 变量           | 描述 |
| :-------------- | :----- | :------------------ | :--- |
| font-weight-400 | 400    | @font-weight-base   | 常规 |
| font-weight-500 | 500    | @font-weight-medium | 中等 |
| font-weight-600 | 600    | @font-weight-semi   | 粗体 |

## 尺寸

| 变量名    | 变量值        | less 变量 | 描述                              |
| :-------- | :------------ | :-------- | :-------------------------------- |
| size-none | 0             | -         | 0                                 |
| size-1    | 4px           | -         | 4px                               |
| size-2    | 8px           | -         | 8px                               |
| size-3    | 12px          | -         | 12px                              |
| size-4    | 20px          | -         | 20px                              |
| size-5    | 32px          | -         | 32px                              |
| size-6    | 52px          | -         | 52px                              |
| size-N    | (N-1) + (N-2) | -         | 变量对应的值为（N-1）+（N-2）大小 |

## 组件尺寸

| 变量名       | 变量值       | less 变量 | 描述       |
| :----------- | :----------- | :-------- | :--------- |
| size-small   | size-small   | -         | 小（24px） |
| size-default | size-default | -         | 中（32px） |
| size-large   | size-large   | -         | 大（40px） |

## 边框宽度

| 变量名      | 变量值 | less 变量          | 描述   |
| :---------- | :----- | :----------------- | :----- |
| border-none | 0      | -                  | 无边框 |
| border-1    | 1px    | @border-width-base | 常规   |

## 边框圆角

| 变量名               | 变量值 | less 变量            | 描述        |
| :------------------- | :----- | :------------------- | :---------- |
| border-radius-none   | 0      | -                    | 直角        |
| border-radius-1      | 2px    | @border-radius-sm    | 圆角-常规   |
| border-radius-2      | 4px    | @border-radius-basic | 圆角-中等   |
| border-radius-circle | 50%    | -                    | 圆角-全圆角 |

## 阴影

| 变量名   | 变量值                 | less 变量 | 描述         |
| :------- | :--------------------- | :-------- | :----------- |
| shadow-1 | 0 2 12px（0,0,0,0.12） | @shadow-1 | 阴影-小      |
| shadow-2 | 0 4 24px（0,0,0,0.1）  | @shadow-2 | 阴影-中      |
| shadow-3 | 0 6 36px（0,0,0,0.08） | @shadow-3 | 阴影-大      |
| shadow-4 | 0 4 16px（0,0,0,0.16） | @shadow-4 | 深色卡片阴影 |
| shadow-5 | 0 2 4px（ 0,0,0,0.5）  | @shadow-5 | 文字阴影     |
