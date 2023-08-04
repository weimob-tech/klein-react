import React, { useCallback, useState } from 'react'
import cx from 'classnames'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Icon, message } from '@klein-design/klein-react'
import './basic.less'

type IconGroups = Array<{
  name: string
  icons: IconGroups | string[]
}>

const iconGroups: IconGroups = [
  {
    name: '线性风格',
    icons: [
      {
        name: '编辑器',
        icons: [
          'AdvancedFeaturesLine',
          'AfterParagraphLine',
          'BeforeParagraphLine',
          'BoldLine',
          'BorderOuterLine',
          'ClearFormatLine',
          'DividingLineLine',
          'FontColorsLine',
          'FormatBrushLine',
          'FrameLine',
          'HighLightLine',
          'IndentDecreaseLine',
          'IndentIncreaseLine',
          'ItalicLine',
          'JustifyCenterLine',
          'JustifyLeftLine',
          'JustifyRightLine',
          'JustifyTextBothLine',
          'LineHeightLine',
          'OrderedListLine',
          'QuoteLine',
          'RedoLine',
          'SourceCodeLine',
          'TableLine',
          'TextPasteLine',
          'TextStrikeThroughLine',
          'TittleLine',
          'UnderLineLine',
          'UndoLine',
          'UnorderedListLine',
        ],
      },
      {
        name: '方向类',
        icons: [
          'DoubleLeftLine',
          'DoubleRightLine',
          'DownLine',
          'LeftLine',
          'PointCircleDownLine',
          'PointCircleLeftLine',
          'PointCircleRightLine',
          'PointCircleUpLine',
          'PointDownLine',
          'PointRightLine',
          'PointUpLine',
          'PointleftLine',
          'RightLine',
          'UpLine',
        ],
      },
      {
        name: '交互类',
        icons: [
          'BookMarkLine',
          'ChooseLine',
          'CircleAddLine',
          'CloseLine',
          'ContainerLine',
          'CopyLine',
          'DeleteLine',
          'EditLine',
          'EditOutLine',
          'ExitFullScreenLine',
          'ExportLine',
          'FilterLine',
          'FolderNewLine',
          'FolderSearchLine',
          'FullScreenLine',
          'HiddenFill',
          'LinkDisconnectLine',
          'LoadingLine',
          'MinusLine',
          'NavigationLine',
          'PersonAddLine',
          'PersonDeleteLine',
          'PersonSearchLine',
          'PlusLine',
          'ProportionLine',
          'ReloadLine',
          'RemoveLine',
          'RotateLeftOutlinedLine',
          'RotateRightOutlinedLine',
          'SaveLine',
          'ScanLine',
          'SearchLine',
          'ShareLine',
          'ShoppingCartLine',
          'ShowFill',
          'SortLine',
          'SwapLine',
          'ThumbUpLine',
          'UploadLine',
          'VolumeMuteLine',
          'VolumeNoticeLine',
          'VolumeSmallLine',
          'ZoomInLine',
          'ZoomOutLine',
        ],
      },
      {
        name: '提示类',
        icons: [
          'AttentionLine',
          'EmotionFrownLine',
          'EmotionHappyLine',
          'EmotionMehLine',
          'EmotionSmileLine',
          'ErrorLine',
          'InfoLine',
          'QuestionLine',
          'SuccessLine',
          'WaringLine',
        ],
      },
      {
        name: '通用类',
        icons: [
          'AllDoneLine',
          'AttachmentLine',
          'AudioLine',
          'BluetoothLine',
          'BoxAngleLine',
          'BoxLine',
          'BuildingSkycraperLine',
          'CalendarCheckLine',
          'CalendarLine',
          'CameraLine',
          'CleanLine',
          'ClockAlarmLine',
          'CodeLine',
          'Commodity02Line',
          'CommodityLine',
          'CompassLine',
          'CouponCheckLine',
          'CrownLine',
          'CustomLine',
          'CustomerServiceLine',
          'DataHistogramLine',
          'DateLine',
          'DeliverTruckLine',
          'DeviceKeyboardLine',
          'DeviceLaptopLine',
          'DeviceMonitorLine',
          'DeviceSmartPhoneLine',
          'DiamondLine',
          'EllipsisLine',
          'FileArticleLine',
          'FolderLine',
          'FolderOpenLine',
          'GeneralSituationLine',
          'GraphicLine',
          'HeartLine',
          'HomeLine',
          'IrrigationDitchLine',
          'LinkLine',
          'LocalLine',
          'LockLine',
          'MarketingLine',
          'MassageLine',
          'MoneyLine',
          'OrderForGoodsLine',
          'OrderRefundLine',
          'OrderReplaceLine',
          'OrderReturnIn15DaysLine',
          'OrderReturnIn7DaysLine',
          'OrderReturnLine',
          'PayLine',
          'PersonSalesLine',
          'PhoneLine',
          'PictureLine',
          'PrinterLine',
          'ProtectLine',
          'QRCodeLine',
          'RedEnvelopeLine',
          'RemindLine',
          'ReplyLine',
          'SalesroomLineLine',
          'SettingLine',
          'SettingNutLine',
          'ShopLine',
          'StarLine',
          'StockLine',
          'TabsLine',
          'TextFill',
          'TimeLine',
          'TrophyLine',
          'UserInfoLine',
          'VideoLine',
          'VideoSquareLine',
          'VoiceLine',
          'VoucherLine',
          'WalletLine',
          'WriteLine',
        ],
      },
    ],
  },
  {
    name: '面性风格',
    icons: [
      {
        name: '方向类',
        icons: [
          'ArrowDownFill',
          'ArrowLeftFill',
          'ArrowRightFill',
          'ArrowUpFill',
          'DownFill',
          'LeftFill',
          'RightFill',
          'UpFill',
        ],
      },
      {
        name: '交互类',
        icons: [
          'BookMarkFill',
          'CloseFill',
          'DeleteFill',
          'EditFill',
          'PlusCircleFill',
          'RemoveFill',
          'ScreenFill',
          'ShareCircleFill',
          'ShoppingCartFill',
          'ThumbUpFill',
          'VolumeMuteFill',
          'VolumeNoticeFill',
          'VolumeSmallFill',
        ],
      },
      {
        name: '品牌类',
        icons: [
          'AliPayFill',
          'BaiduFill',
          'QQFill',
          'SnackVideoFill',
          'TikTokFill',
          'WeChatFill',
          'WeChatMiniAppFill',
          'WeChatMomentsFill',
          'WeChatPaymentFill',
          'WeiboFill',
          'XiaoHongShuFill',
        ],
      },
      {
        name: '提示类',
        icons: [
          'EmotionFrownFill',
          'EmotionMehFill',
          'EmotionSmileFill',
          'ErrorFill',
          'ExpressionFill',
          'InfoFill',
          'LoadFailFill',
          'QuestionFill',
          'SignAttentionFill',
          'SuccessFill',
          'WaringFill',
        ],
      },
      {
        name: '通用类',
        icons: [
          'BandCardFill',
          'BuildingStoreFill',
          'CalendarCheckFill',
          'CalendarFill',
          'CameraFill',
          'ClockAlarmFill',
          'ClockFill',
          'CommodityFill',
          'CompassFill',
          'CouponCheckFill',
          'CouponFill',
          'CrownFill',
          'CustomerServiceFill',
          'DeliverTruckFill',
          'DeviceKeyboardFill',
          'DiamondFill',
          'FileArticleFill',
          'FilePictureFill',
          'FileVideoFill',
          'FileVideoSquareFill',
          'GiftFill',
          'HeartFill',
          'HomeFill',
          'LocalFill',
          'MagicFill',
          'MassageFill',
          'OrderFill',
          'PersonCostumerFill',
          'PersonSalesFill',
          'PhoneFill',
          'ProtectFill',
          'RedEnvelopeFill',
          'RemindFill',
          'ReplyFill',
          'SettingFill',
          'SettingNutFill',
          'StarFill',
          'TrophyFill',
          'UserInfoFill',
          'VoiceFill',
          'WalletFill',
        ],
      },
    ],
  },
]

export default () => {
  const [tab, setTab] = useState(0)
  const tabData = iconGroups[tab].icons

  const handleClick = (name: string) => {
    message.success(`${name} 复制成功`)
  }

  const handleTabClick = useCallback((i) => {
    setTab(i)
  }, [])

  return (
    <div className='klein-icon-wapper'>
      <div className='klein-icon-tabs'>
        {iconGroups.map((o, i) => (
          <div
            key={i}
            className={cx('klein-icon-tab', i === tab ? 'klein-icon-tab-active' : null)}
            onClick={() => handleTabClick(i)}
          >
            {o.name}
          </div>
        ))}
      </div>

      {tabData.map((o, i) => {
        if (typeof o === 'string') return null

        return (
          <div className='klein-icon-cont' key={i}>
            <div className='klein-icon-cont-title'>{o.name}</div>
            <div className='klein-icon-cont-icons'>
              {o.icons.map((iconName, j) => {
                if (typeof iconName !== 'string') return null

                const Comp = Icon[iconName]
                return Comp ? (
                  <CopyToClipboard text={`<${Comp.displayName} />`} onCopy={handleClick}>
                    <div key={j} className='klein-icon-cont-icon-wrapper transition-bg'>
                      <Comp className='klein-icon-cont-icon' />
                      <span id={`${Comp.displayName}`} className='klein-icon-cont-name'>
                        {Comp.displayName}
                      </span>
                    </div>
                  </CopyToClipboard>
                ) : null
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
