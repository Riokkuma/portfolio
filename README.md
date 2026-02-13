# 🐻 Veronica's Portfolio

高度専門士情報技術科の学生、Veronicaのポートフォリオサイトです。

**🔗 公開URL:** https://yourusername.github.io/ *(GitHub Pagesで公開)*

---

## 📝 概要

このポートフォリオサイトでは、以下の内容を紹介しています：

- 🌟 **About Me** - 自己紹介・好きなこと
- 🏆 **保有資格** - 国家資格・MOS・サーティファイ等
- 💻 **授業で触れてきた技術** - プログラミング言語・Web開発・データベース等
- 📁 **Projects** - 制作したプロジェクト4件
  - 🤖 半自動メイクブラシ洗浄ロボット
  - 🌐 データベース連携Webアプリ
  - 📱 モバイルアプリ UXデザイン（A評価🏆）
  - 💄 美容垢 SNS運用
- ✉️ **Contact** - SNSリンク・お問い合わせ

---

## 🎨 デザインコンセプト

**テーマ:** クマとブラウンカラー

- **カラースキーム:**
  - ベージュ背景: `#F8EBDD`
  - カード背景: `#FFF9F4`
  - プライマリー: `#A47148` (ブラウン)
  - ダーク: `#5C4033`
  - アクセント: ピンク・イエロー

- **デザイン要素:**
  - 🐻 クマの絵文字で統一
  - 丸みのあるカード
  - ふわっとしたアニメーション
  - 温かみのあるカラーパレット

---

## 🛠️ 技術スタック

### フロントエンド
- **HTML5** - セマンティックマークアップ
- **Tailwind CSS** - CDN版を使用
- **JavaScript** - バニラJS

### ホスティング
- **GitHub Pages** - 静的サイトホスティング

### ツール
- **Git/GitHub** - バージョン管理
- **Visual Studio Code** - コードエディタ

---

## 📂 ファイル構成

```
portfolio/
├── index.html                      # トップページ
├── robot.html                      # ロボットプロジェクト詳細
├── ux-design.html                  # UXデザインプロジェクト詳細
├── beauty-sns.html                 # 美容垢SNS運用詳細
├── pege1.html                      # データベースプロジェクト詳細
├── photo/                          # 画像・PDFフォルダ
│   ├── photo1.jpg                  # About Me写真1
│   ├── photo2.jpg                  # About Me写真2
│   ├── robot-main.jpg              # ロボットメイン写真
│   ├── plate-before.jpg            # 初期プレート
│   ├── plate-after.jpg             # 改良プレート
│   ├── bear-cad.jpg                # CADのクマ
│   ├── demo.jpg                    # デモ写真
│   └── robot-presentation.pdf      # ロボットのプレゼン資料
├── README.md                       # このファイル
├── CHANGELOG.md                    # 変更履歴
└── PROJECT-EDIT-GUIDE.md           # プロジェクト編集ガイド
```

---

## 🚀 セットアップ方法

### ローカルで確認

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **index.htmlを開く**
   - ブラウザでindex.htmlをダブルクリック
   - または右クリック→「プログラムから開く」→ブラウザを選択

### GitHub Pagesで公開

1. **GitHubリポジトリを作成**
   - リポジトリ名: `yourusername.github.io` (推奨)
   - または任意の名前

2. **ファイルをプッシュ**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **GitHub Pagesを有効化**
   - リポジトリの「Settings」→「Pages」
   - Source: `main` ブランチ
   - Save

4. **公開URLにアクセス**
   - `https://yourusername.github.io/`
   - または `https://yourusername.github.io/repository-name/`

---

## ✏️ 編集方法

### プロジェクトを追加・編集する

詳しくは [PROJECT-EDIT-GUIDE.md](PROJECT-EDIT-GUIDE.md) をご覧ください。

**簡単な手順:**
1. `index.html` をテキストエディタで開く
2. コメント `<!-- ✏️ ここを編集 -->` を探す
3. 内容を変更
4. 保存してブラウザで確認

### 写真を追加する

1. 画像ファイルを準備（推奨サイズ: 800x800px）
2. ファイル名を変更（例: `photo1.jpg`）
3. `photo` フォルダに配置
   ```
   portfolio/
   └── photo/
       └── photo1.jpg  ← ここに配置
   ```
4. HTMLファイルで画像パスを確認（`photo/photo1.jpg`）

---

## 🔧 カスタマイズ

### カラーを変更

`index.html` の `<script>` タグ内で変更：

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'bg-main': '#F8EBDD',      // 背景色
        'primary': '#A47148',       // メインカラー
        'dark': '#5C4033',          // ダークカラー
        // ...
      }
    }
  }
}
```

### フォントを変更

Google Fontsを使用する場合：

1. `<head>` タグ内に追加：
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
   ```

2. CSSでフォントを適用：
   ```html
   <style>
   body {
     font-family: 'Noto Sans JP', sans-serif;
   }
   </style>
   ```

---

## 📱 SNS・外部リンク

- **X (Twitter):** [@Veronica_kuma](https://twitter.com/Veronica_kuma)
- **LIPS:** [veronica_kuma](https://lipscosme.com/members/veronica_kuma)
- **GitHub:** [@yourusername](https://github.com/yourusername)

---

## 📋 To Do

- [ ] プロジェクト画像の追加
- [ ] About Meの写真2枚を追加
- [ ] ファビコンの設定
- [ ] OGP画像の設定（SNSシェア用）
- [ ] アクセシビリティの改善
- [ ] レスポンシブデザインの最終確認

---

## 🐻 制作者

**Veronica** - 高度専門士情報技術科

- デザインと開発のスキルを活かしたものづくりが好き
- コスメ・クリエイティブな表現が趣味
- リラックマが大好き🧸

---

## 📄 ライセンス

このプロジェクトは個人ポートフォリオです。コードは自由に参考にしていただけますが、
写真やデザインの無断転用はご遠慮ください。

---

## 🙏 謝辞

- **Tailwind CSS** - スタイリングフレームワーク
- **GitHub Pages** - ホスティング
- **Anthropic Claude** - コーディング支援

---

**Last Updated:** 2026年2月13日
