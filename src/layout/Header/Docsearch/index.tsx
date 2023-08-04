import React from 'react'
// https://docsearch.algolia.com/docs/api
import { DocSearch } from '@docsearch/react'
import '@docsearch/css'

import styles from './index.module.less'

const Docsearch: React.FC = () => {
  return (
    <div className={styles.Docsearch}>
      <DocSearch
        appId='ERW1SVPTY5'
        indexName='klein-site'
        apiKey='943fd355d5f4361c64d799f7d287306c'
        placeholder=''
        transformItems={(items) => {
          // const data = items.map((o) => {
          //   const d = {...o}

          //   if (!d._snippetResult) {
          //     d.type = 'lvl1'
          //     d.hierarchy.lvl1 = o.hierarchy.lvl0
          //   }

          //   return d
          // })

          const data = items.filter((o) => {
            return !!o._snippetResult
          })

          return data;
        }}
        translations={{
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询',
              resetButtonAriaLabel: '清除查询',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消',
            },
            startScreen: {
              recentSearchesTitle: '最近搜索',
              noRecentSearchesText: '暂无最近搜索',
              saveRecentSearchButtonTitle: '收藏',
              removeRecentSearchButtonTitle: '删除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '删除',
            },
            errorScreen: {
              titleText: '无法获取数据',
              helpText: '网络错误',
            },
            noResultsScreen: {
              noResultsText: '暂无数据',
              suggestedQueryText: '尝试搜索',
            },
          },
        }}
      />
    </div>
  )
}

export default Docsearch
