---
title: 常见问题
nav:
  title: 常见问题
  path: /question
group:
  title:
---

# 图标

### 概述

图标作为 UI 构成中重要的元素，在设计工作中使用率极高、我们建立了一套公共的图标素材库，用以规范 B 端所有基础类图标的图形内容与风格，解决不同平台复劳动问题的同时，消除差异形成统一的品牌体验与认知

### 原则

使用图标的目标是通过将概念信息转换成清晰易懂的图形，降低理解成本提升界面视觉感受，基于对目标的理解我们确定了「从简」「易读」「平衡」3 个原则

- 从简：简化参数，尽量消除小数点以及非整数角度，删除多余锚点及不必要装饰

- 易读：选择表意准确的图形，避免过渡抽象而对用户认知造成困扰

- 平衡：控制图标线条疏密及图形搭配的节奏，避免无序与压迫感

### 规范

#### 画布与网格

画布与网格是绘制的底层结构，是一切属性的基础，线条长短粗细、图标大小比例等关键参数均在此基础上制定。常见尺寸为 16/20/24/32，这四种尺寸均可清晰呈现在屏幕上。基于通用性与可控性的考量，最终选择以 16px 的尺寸作为图标绘制的统一栅格尺寸。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-01.png)

#### 出血位

在画板的周围留有 1px 的出血位，中心 14px 才是实际操作区域。在一些特殊情况下如图标过长或者有突出的边角等，允许内容适当延展，以确保视觉重量上的统一（ 超出部分建议为多边形的边角，不宜超过 0.5px ）。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-02.png)

#### 辅助线

辅助线由对角线及一些常用的基础图形组成，并根据出血位的尺寸进行了调整。帮助设计师在绘制时约束图标的外形及线条走向，保持各图标间视觉重量的统一。根据绘制对象的形象特征去选择辅助线，在必要时，可以将内容扩展到辅助线之外。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-03.png)

#### 线宽

绘制图标时使用宽度为 1px、属性居中的线条，即使在小尺寸画板内也能完成复杂图标的绘制需求。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-04.png)

#### 圆角

基础圆角为 1px，在处理一些小转折时可以改用 0.5px。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-05.png)

#### 角度

线条倾斜基础角度为 45°，保持与画板内对角辅助线相平行，或以 15° 为基数进行增减。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-06.png)

#### 节点

线条节点外侧为圆角，内侧方角，外柔内刚。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-07.png)

#### 端点

线条端点不做额外延伸，部分场景需要兼容线宽调整后依然保持对齐可改为延伸。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-08.png)

#### 断口

断口尺寸建议为 2px，可以按 0.5px 进行增减。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-09.png)

#### 一致性

在图标的设计过程中，相同元素的图形与衍生结构需要尽量保持一致，在体系内建立起一个比较舒适的韵律节奏。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-10.png)

#### 繁简度

在保证可读性的基础上尽量简化图形，让图标在视觉上更加简约、现代、友好。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-11.png)

### 应用

在默认图标的基础上可以通过调节变量快速应对不同需求。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-12.png)

### 尺寸

在设计中可以根据所处场景级搭配元素的大小调整图标的尺寸。建议最小尺寸不小于 12px，最大尺寸不大于 24px，并以 2 为最小单位进行尺寸的增减。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/icon-13.png)
