---
title: 常见问题
nav:
  title: 常见问题
  path: /question
group:
  title:
---

# 色彩

### 概述

Klein Design 基于 WOS 中后台的使用场景，定义了一套完整的系统色彩体系，充分考虑了色彩设计规范需符合无障碍标准，配置清晰能满足用户使用诉求，且产品调性能够准确传达；色板采用 HSB 色彩模型进行设计，基于颜色类型和功能，分为主题色、功能色、中性色、扩展色 4 部分，是一套广泛适用于中后台业务场景的默认配色。

### 主题色

主题色具有表达产品特性和形象的功能，是视觉感受中最核心和直观的一部分，一般与品牌色密切相关，常用于信息的强调、操作的引导、重点操作状态等，有明确的使用场景及范围。 Klein 使用#006AFF 作为默认主题色，符合稳健中性的品牌气质，并基于使用场景的需求，衍生出一整套不同状态下的颜色。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color0001.png)

### 基础色板

以色相表示分类是最简单直接，也被普遍认可的的方式、而在众多色彩模式中，能最直观控制色相，饱和度，亮度的模式为 HSB，因此采用 HSB 色彩模型进行设计。

#### 取色

以品牌色#006AFF（H215/S100/B100）为起点，保持饱和度（S）和明度（B）不变，以 15° 为梯度生成 24 色色板，作为选取辅助色的依据。取色原则是以品牌色为起点，选取邻近色以保证整体色调的清爽，同时利用对比色及互补色选取更加丰富多元的色相，以保证能够满足各种使用场景下对色彩的需求。最终组成 8 个基础色相，尽可能提升色相区分度，符合人眼可识别颜色的阈值，最大程度确保基础色板的辨识度。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color0002.png)

#### 颜色矫正

虽然保持相同的饱和度和明度得到了较为合适的色相，但由于色彩本身自带感官明度属性，导致在视觉感受上并不同频、所以引入图像灰度模式与 CIELab 色彩空间下的亮度 L 值（Lightness）来检验选取的颜色，在保证色彩主观感受舒适下的前提下，以品牌色亮度为基准，通过对 HSB 数值的调整矫正过于跳跃的主色，使 8 个基础主色的亮度过渡尽量平缓自然。

校正原则：

- 色相须保持同类色（色相环 15° 角范围内）

- 感官明度趋近同频

![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color0003.png)

同时通过 CIELab ΔE（Delta-E）值来检验选取的主色相互之间是否具备足够的清晰度与辨识度，目前的研究认为当 ΔE>=30 时，人眼是比较容易能区分的颜色的差值，所以任意 2 个主色间的 ΔE 值大于 30 即可满足需求。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color0004.png)

### 色彩延展

以选择好的 8 个主色为基础，每个颜色建立 10 级色阶以满足不同场景下颜色使用需求。

#### 扩展原则

以品牌色为例，将品牌色作为 6 号色，饱和度（S）值定为 100。通过对现有使用场景的梳理，结合人眼最小可识别的色差值，将 1 号色的饱和度（S）值定为 5。利用色板生成工具设定饱和度（S）的起止数值、曲线参数、色相偏转参数等，可以得到 6 个基础色阶，对数值进行微调后得到最终的 1-6 号色。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color0005.png)

6-10 号色如果也采用函数曲线会造成深色过于接近无法区分的缺陷，因而采取等序差值的方式，将明度（B）值从 100 开始每级降低 20。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color0006.png)

将 2 部分合并就可以得到完整的 10 级色阶，通过同样的原理推导出完整的 8x10 色板。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color0007.png)

### 功能色

功能色主要是借助用户对于色彩的认知，向用户反馈操作结果、系统状态等信息，有表达特殊语义的功能，例如成功、失败、告警、链接等状态，需要符合用户的认知习惯。基于用户对色彩的认知，结合与品牌色视觉的一致性关系，我们定义了 4 种功能色，帮助用户快速直观的获取信息状态。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color0008.png)

### 中性色

中性色又称为无彩色系，中性灰色是色彩体系中至关重要的一部分，被大量的应用在界面的文字、背景、边框、分割线等元素，为产品界面创造结构、表达边界、有助于拉开内容层次衬和托出其它色彩，起到调和的作用，使界面具备良好的主次关系，有更好的阅读体验。

中性色直接使用色板梯度模型的逻辑去处理，往往会有很多问题，极易造成视觉层级混乱，所以我们基于中性色的使用场景，对中性色进行了场景分类并分别处理色彩梯度，以保证在混合使用时，有足够的对比度，能够明确区分信息层级。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color0009.png)

#### 带有主题色倾向的中性色

为了更好的突出品牌氛围，我们通过混色在各层级的灰色中融入了品牌色（#006AFF）的色相（H 215），并按照 WCAG 2.1 标准对色板进行可用性测试，常用文字颜色与背景颜色对比度均大于 4.5，满足 WCAG2.1 标准。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color00010.png)

### 扩展色

扩展色是基于功能色进一步扩展而成的一些列颜色，除了功能色蓝、红、黄、绿之外， 色彩体系扩展至 8 种主要颜色，保证了与功能色协调性，可以在有更多颜色需求的场景中使用，基本可以满足中后台设计中对于颜色的需求。
![](https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/274/Color00011.png)
