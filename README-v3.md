# Veronica のポートフォリオサイト 🧸✨

クマの装飾が可愛い、学習してきた技術をアピールできるポートフォリオサイトです！

## 🎨 デザインカラー

- **Background**: #F8EBDD（温かみのあるベージュ）
- **Card**: #FFF9F4（オフホワイト）
- **Primary**: #A47148（落ち着いたブラウン）
- **Dark**: #5C4033（ダークブラウン）
- **Accent Pink**: #F7C6C7（優しいピンク）
- **Accent Yellow**: #F4C430（ゴールドイエロー）
- **Text**: #6E5C4F（読みやすいブラウン）

## 🐻 新しい特徴

### クマだらけのヒーローセクション！
- 🧸 ふわふわ浮かぶクマたち
- 🐻 ゆらゆら揺れるクマたち
- 🐾 可愛い足跡
- アニメーション付きで動きのあるデザイン

### 授業で触れてきた技術を整理
学習レポートをもとに、2年間で触れてきた技術を6つのカテゴリーに整理：

1. **プログラミング言語** 🐍
   - Python, JavaScript, Node.js

2. **Web開発** 🌐
   - HTML/CSS, Express, EJS, RESTful API

3. **データベース** 💾
   - MySQL, SQLite3, Prisma (ORM)

4. **クラウド・インフラ** ☁️
   - AWS (EC2, S3, Lambda), Linux, Apache

5. **IoT・組み込み** 🤖
   - Raspberry Pi, センサー制御, GPIO/I2C/PWM

6. **設計・開発手法** 📐
   - UML (8種類), アジャイル開発, PMBOK

### 実践的なプロジェクト例
学習内容をもとに2つのプロジェクト例を用意：

1. **IoTセンサーシステム** 🤖
   - Raspberry Piを使った組み込みシステム
   - センサー制御からWeb表示まで

2. **データベース連携Webアプリ** 🌐
   - Node.js + Express + MySQL
   - CRUD操作の実装

### 写真は2枚に最適化
- 正方形の写真2枚を並べて表示
- シンプルで見やすいレイアウト

## 📁 ファイル

- `portfolio-v3.html` - 最新版（クマ装飾＋学習技術追加）
- `portfolio-v2.html` - 前バージョン
- `README-v3.md` - このファイル

## 🚀 GitHubにアップロードする方法

### 1. GitHubリポジトリを作成

1. [GitHub](https://github.com)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力
   - **おすすめ**: `yourusername.github.io`
4. 「Public」を選択
5. 「Create repository」をクリック

### 2. ファイルをアップロード

1. リポジトリページで「uploading an existing file」をクリック
2. `portfolio-v3.html`をドラッグ&ドロップ
3. **重要**: ファイル名を`index.html`に変更
4. 写真2枚（`photo1.jpg`, `photo2.jpg`）もアップロード
5. 「Commit changes」をクリック

### 3. GitHub Pagesで公開

1. リポジトリの「Settings」タブ
2. 左メニュー「Pages」
3. 「Source」で「Deploy from a branch」
4. 「Branch」で「main」→「/ (root)」
5. 「Save」をクリック

数分後、`https://yourusername.github.io`で公開！

## ✏️ カスタマイズ方法

### 必須の編集

#### 1. 顔写真を追加（110-120行目）

**写真の準備：**
- 2枚の写真を用意（正方形推奨）
- ファイル名：`photo1.jpg`, `photo2.jpg`
- HTMLファイルと同じフォルダに配置

#### 2. SNSリンク（65-90行目）

```html
<!-- X (Twitter) -->
<a href="https://twitter.com/Veronica_kuma" ...>

<!-- lit.link -->
<a href="https://lit.link/veronica_kuma" ...>

<!-- GitHub -->
<a href="https://github.com/yourusername" ...>
```

→ GitHubのユーザー名を変更

#### 3. メールアドレス（500行目あたり）

```html
<a href="mailto:your.email@example.com" ...>
```

→ 自分のメールアドレスに変更

### 技術スタックの編集（160-280行目）

各カテゴリーに技術を追加・削除できます：

```html
<div class="flex items-center gap-2">
    <span class="text-2xl">🐻</span>
    <span class="text-text-main">技術名</span>
</div>
```

### プロジェクトの追加・編集（300-500行目）

プロジェクトカード全体をコピーして新しいプロジェクトを追加：

```html
<div class="bg-card-bg rounded-3xl p-10 shadow-xl mb-12 ...">
    <h3>プロジェクト名</h3>
    <!-- タグ、Role、Background、Result、Reflection -->
</div>
```

## 🐻 クマの装飾をカスタマイズ

### クマの数を増やす・減らす

ヒーローセクション（50-60行目）で調整：

```html
<!-- クマを追加 -->
<div class="bear-decoration text-8xl top-10 right-10 float">🧸</div>

<!-- 削除したい場合は行ごと削除 -->
```

### アニメーションの速度を変更

CSSで調整（30-50行目）：

```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
```

→ `-10px`の数値を変えると動く距離が変わります

### 足跡を変更

足跡の絵文字を変えたり、位置を調整：

```html
<div class="bear-decoration text-5xl top-1/4 left-1/3">🐾</div>
```

→ `text-5xl`でサイズ、`top-1/4 left-1/3`で位置を変更

## 💡 使い方のコツ

### プロジェクト説明のポイント

**具体的な数字を入れる：**
- ❌ 「成功しました」
- ✅ 「LEDを10個制御するシステムを構築しました」

**技術を明記する：**
- ❌ 「プログラミングで作りました」
- ✅ 「Node.js + Express + MySQLで実装しました」

**学びを書く：**
- 技術的な学び
- 困難だったこと
- どう乗り越えたか

## 📷 写真について

### おすすめの写真構成

- **photo1.jpg**: プロフィール写真（顔がはっきり）
- **photo2.jpg**: 作業中の写真 or 作品と一緒

### 写真のサイズ

- **推奨**: 800px × 800px 以上
- **ファイルサイズ**: 1MB以下
- **形式**: JPG または PNG

### 写真が表示されない場合

1. ファイル名を確認（`photo1.jpg`小文字、スペースなし）
2. HTMLと同じフォルダにあるか確認
3. GitHubにアップロードされているか確認

## 🎯 アピールポイント

このポートフォリオの強み：

1. **幅広い技術スタック**
   - Web、IoT、クラウド、データベース

2. **実践的な経験**
   - 実際に手を動かして作ったプロジェクト

3. **体系的な学習**
   - 基礎から応用まで段階的に成長

4. **個性的なデザイン**
   - クマの装飾で親しみやすさをアピール

## 🌟 次のステップ

1. **写真を追加する**
   - 自分の写真2枚を用意してアップロード

2. **GitHubユーザー名を変更**
   - リンクを正しいものに修正

3. **実際のプロジェクトを追加**
   - 学校で作ったものを詳しく書く

4. **GitHub Pagesで公開**
   - 世界中からアクセスできるようにする

5. **SNSでシェア**
   - Xやlit.linkでポートフォリオをアピール

## 📝 メモ

- 単一HTMLファイルで動作
- TailwindCSS（CDN使用）
- アニメーション多数
- レスポンシブ対応
- クマがいっぱい🐻✨

---

## 🧸 困ったら

何か分からないことがあれば：

1. README-v3.mdを確認
2. PHOTO-GUIDE.mdで写真の追加方法を確認
3. Xで質問 @Veronica_kuma

可愛くて、技術力もアピールできるポートフォリオで、就活やインターンを成功させよう！🐻💕
