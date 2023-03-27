## 概要
- ポーカーのハンドレンジ構築アプリ

## ターゲット
- イマイチレンジ対レンジで考えられない人
- ハンドレビューでメモを取るときに「AT+,67s,89o,..」みたいにわざわざテキストを入力することが面倒な人

## 実装予定の機能
- [Notion](https://veil-marjoram-47c.notion.site/38a0b255390b4e6092ca90ca38963a53?v=b747904428e641899e5609c727c9f7de)

## 紹介動画
- [Youtube](https://youtu.be/pZ9CXSozfZQ)

## 使用技術とその理由

- React
- Nextjs DynamicRoutingやSSRなどが便利だが、SPAでも良かったかもしれない。Vercelでのデプロイが容易。
- Vercel
- TypeScript
- ChakraUI tailwindにはないuseDisclosureなどのhooksが便利
- firebase authentication 簡単に認証機能を実装出来る。ただし、フロントエンドでの認証なのでなりすまし出来てしまうのではないか心配。本アプリではSSRで認証している。
- firebase firestore ツリー状のデータ構造をそのままsaveすることが出来る。RDBでツリー構造を実現しようとすると少々面倒。
- storybook ボトムアップの開発形式で有用。storybook7がslableになったらアップデートしてunitテストを導入予定
- eslint
- prettier
- immer ネストが深いobjectをimmutableに扱うことが出来る。
- lodash
- nookies サーバーサイドクッキーの設定に利用。認証をサーバーサイドで行う工夫をした。
- recoil reduxほど大規模なグローバルState管理が必要でなかったためrecoilを採用。
- swr 現在はクライアントサイドでデータfetchしているが、サーバーサイドに移行中。CSRではキャッシュを取っておきたい。SSRでも使えるらしい。
- hygen

- Figma
  [figmaファイル](https://www.figma.com/file/Np9CVTNeGCy35JAmpoOhNE/review-house?node-id=0%3A1&t=HzAgrMs7k1ANm3QD-1)
- ChatGPT 便利

## ある程度触れるが使用しなかった技術

- GraphQL 複雑なCRUDをしないため、オーバースペック。そもそもfirestoreでGraphQLを使う方法がわからない
- supabase 今回はRDBは使わないことにした
- tailwindCSS 今のところChakraのほうが使いやすい。
- MantineUI
- Redux
- React Query

## 工夫した点
- ディレクトリ構成 
  
  component配下のcommonはページをまたいで使われるコンポーネント、component配下のpageはそれぞれのページでしか使われないコンポーネントを入れている。
atomicデザインよりもあえてゆるくしている。今回のアプリはそこまで大きくないため、コンポーネントが多少ごちゃごちゃしてもディレクトリを大きくまたぐ移動が少ないほうがよいと考えた。


- firestoreのzodによる型チェック
  
  prismaなどを使えばデータベースのを同期的に取得出来るが、firestoreではそうはいかない。firestoreへの送信時とfirestoreからの取得時のvalidationチェックを出来るだけきれいにするためにzodを導入
  lib/firestore/converter参照