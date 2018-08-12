## data-import-scripts

家計簿データをMySQLにインポートするためのスクリプト



## 使い方 

#### 前提

* ローカルにMySQLがセットアップ済みであること
* 家計簿データをcsvでexportし、`google-drive-kakeibo-with-slack/data-import-script/scripts/csvdata`配下に`export.csv`という名称で格納していること
* exportしたcsvファイルのヘッダーは下記に書き換えること
  * タイムスタンプ -> timestamp
  * 支払い者 -> user
  * 項目 -> item
  * 金額 -> price



#### DBセットアップ

```
### 開発環境でのセットアップ ###
# DB作成
yarn run db:create development

# migration
yarn run db:migrate development
```



#### データ取り込み

```
# スクリプト実行は"scripts"配下で実施する
cd data-import-script/scripts

# インポートスクリプト実行
node csv-import.js
```



#### DB接続について

デフォルトの設定だとDBは下記内容で接続しにいくため、適宜`config/config.json`を書き換える

```
username: root
password: password
database: kakeibo_dev, kakeibo_test, kakeibo(環境によって異なる)
host: 127.0.0.1
```

