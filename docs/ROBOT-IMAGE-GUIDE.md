# 🤖 ロボットプロジェクト 画像配置ガイド

## 📁 必要なファイル

### 画像ファイル（すべて`photo`フォルダに配置）

1. **robot-main.jpg** - メイン写真（ロボットの全体像）
   - 推奨サイズ: 1200x800px 以上
   - 表紙の写真を使用

2. **plate-before.jpg** - 初期の3Dプリントプレート
   - 推奨サイズ: 800x800px（正方形）
   - プラン2の左側の写真

3. **plate-after.jpg** - 改良後の3Dプリントプレート
   - 推奨サイズ: 800x800px（正方形）
   - プラン2の右側の写真（オレンジ色のプレート）

4. **bear-cad.jpg** - CADで作ったクマのデザイン
   - 推奨サイズ: 800x800px（正方形）
   - チャームポイントのページの写真

5. **demo.jpg** - デモ写真
   - 推奨サイズ: 1200x800px
   - 最後のページのロボット動作写真

### PDFファイル

6. **robot-presentation.pdf** - プレゼンテーション資料
   - アップロードされたPDFファイルをこのファイル名にリネーム

---

## 📂 ファイル構成

```
ポートフォリオフォルダ/
├── index.html                  ← トップページ
├── robot.html                  ← ロボットプロジェクト詳細ページ
├── pege1.html                  ← 他のプロジェクト詳細ページ
└── photo/                      ← 画像・PDFフォルダ
    ├── robot-main.jpg          ← 画像1
    ├── plate-before.jpg        ← 画像2
    ├── plate-after.jpg         ← 画像3
    ├── bear-cad.jpg            ← 画像4
    ├── demo.jpg                ← 画像5
    └── robot-presentation.pdf  ← プレゼンテーション資料
```

---

## 🖼️ 画像の準備方法

### PDFから画像を抽出する

#### 方法1: スクリーンショット（簡単）

1. PDFを開く
2. 必要なページを表示
3. スクリーンショットを撮る
   - **Windows**: `Win + Shift + S`
   - **Mac**: `Cmd + Shift + 4`
4. 画像を保存

#### 方法2: PDFツールを使う

**オンラインツール:**
- [PDF to Image Converter](https://www.ilovepdf.com/pdf_to_jpg)
- [Smallpdf](https://smallpdf.com/pdf-to-jpg)

**使い方:**
1. PDFをアップロード
2. ページを選択
3. JPG形式でダウンロード
4. ファイル名を変更

---

## 📝 画像の配置手順

### ステップ1: photoフォルダを作成

ポートフォリオフォルダ内に`photo`フォルダを作成：

```
ポートフォリオフォルダ/
├── index.html
├── robot.html
└── photo/  ← このフォルダを作成
```

### ステップ2: 画像ファイル名を変更

PDFから抽出した画像を、以下のファイル名に変更：

| PDFのページ | 内容 | ファイル名 |
|-----------|------|-----------|
| 1ページ目 | 表紙（ロボット全体） | `robot-main.jpg` |
| 3ページ目 | 左の黒いプレート | `plate-before.jpg` |
| 3ページ目 | 右のオレンジプレート | `plate-after.jpg` |
| 4ページ目 | クマのデザイン | `bear-cad.jpg` |
| 6ページ目 | デモ写真 | `demo.jpg` |

### ステップ3: PDFファイル名を変更

```
半自動メイクブラシ洗浄ロボット__3Dプリント洗濯板プレートによる物理洗浄_.pdf
↓
robot-presentation.pdf
```

### ステップ4: ファイルを配置

すべてのファイルを `photo` フォルダに配置

```
📁 ポートフォリオフォルダ/
  ├── 📄 index.html
  ├── 📄 robot.html
  └── 📁 photo/
      ├── 🖼️ robot-main.jpg
      ├── 🖼️ plate-before.jpg
      ├── 🖼️ plate-after.jpg
      ├── 🖼️ bear-cad.jpg
      ├── 🖼️ demo.jpg
      └── 📄 robot-presentation.pdf
```

---

## ✅ 確認方法

### ローカルで確認

1. `robot.html` をブラウザで開く
2. 画像が表示されているか確認
3. PDFが埋め込まれているか確認

### GitHub Pagesで確認

1. すべてのファイルをGitHubにアップロード
2. GitHub Pagesのサイトを開く
3. `https://yourusername.github.io/robot.html` にアクセス

---

## 🔧 画像が表示されない場合

### チェックリスト

1. **ファイル名は正確か？**
   - 大文字・小文字を確認
   - スペースが入っていないか
   - `.jpg` の拡張子は正しいか

2. **ファイルは同じフォルダにあるか？**
   - `robot.html` と同じ場所に配置されているか

3. **画像サイズは大きすぎないか？**
   - 1ファイル 2MB以下に抑える
   - 必要なら画像圧縮サイトで圧縮
   - [TinyPNG](https://tinypng.com/) などを使用

4. **ファイル形式は正しいか？**
   - `.jpg` または `.png` 形式
   - `.pdf` や `.docx` ではない

---

## 🎨 画像編集（オプション）

### 推奨サイズにリサイズ

**オンラインツール:**
- [iLoveIMG](https://www.iloveimg.com/resize-image)
- [Canva](https://www.canva.com/)

**推奨サイズ:**
- メイン画像: 1200x800px
- プレート画像: 800x800px
- デモ画像: 1200x800px

### 画像圧縮

**オンラインツール:**
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

**目標:**
- 1ファイル 500KB以下

---

## 📤 GitHubへのアップロード

### 手順

1. **GitHubリポジトリを開く**

2. **photoフォルダを作成**
   - 「Add file」→「Create new file」
   - ファイル名に `photo/.gitkeep` と入力
   - 「Commit new file」

3. **ファイルをアップロード**
   - `photo` フォルダを開く
   - 「Add file」→「Upload files」をクリック
   - すべての画像とPDFをドラッグ&ドロップ
   - `robot.html` と `index.html` もアップロード（更新版）

4. **コミット**
   - コミットメッセージ: "Add robot project images and PDF"
   - 「Commit changes」をクリック

5. **確認**
   - 数分待つ
   - `https://yourusername.github.io/robot.html` にアクセス

---

## 💡 よくある質問

### Q1: 画像が表示されません

**A:** ファイル名を確認してください。
- `Robot-main.jpg` ❌（大文字）
- `robot-main.jpg` ✅（小文字）

### Q2: PDFが表示されません

**A:** ブラウザによってはPDF埋め込みが表示されない場合があります。
その場合、「資料をダウンロード」ボタンからダウンロードできます。

### Q3: 画像が大きすぎてページが重い

**A:** 画像を圧縮してください。
1. [TinyPNG](https://tinypng.com/) にアクセス
2. 画像をアップロード
3. 圧縮された画像をダウンロード
4. 元のファイルと置き換え

### Q4: PDFのページ数が多くて重い

**A:** 必要なページだけを抽出するか、画像として保存してください。

---

## 🌟 完成したら

1. ✅ すべての画像が表示されている
2. ✅ PDFが埋め込まれている
3. ✅ リンクが正しく動作する
4. ✅ スマホでも見やすい

完璧です！あなたのロボットプロジェクトが美しく表示されます🐻✨

---

## 📞 困ったら

1. ファイル名をもう一度確認
2. ファイルの場所を確認
3. ブラウザをリロード（F5）
4. Xで質問 @Veronica_kuma

がんばってください！🤖💕
