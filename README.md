# Veronica のポートフォリオサイト 🧸

このポートフォリオサイトをGitHubにアップロードして公開する手順です。

## 📁 ファイル構成

- `index.html` - ポートフォリオサイト（これをGitHubにアップロードします）
- `portfolio.jsx` - React版（参考用）

## 🚀 GitHubにアップロードする方法

### 1. GitHubリポジトリを作成

1. [GitHub](https://github.com)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力（例：`portfolio` または `yourusername.github.io`）
   - `yourusername.github.io`という名前にすると、自動的に`https://yourusername.github.io`でアクセスできます
4. 「Public」を選択
5. 「Create repository」をクリック

### 2. ファイルをアップロード

**方法A: Webインターフェースから（簡単）**

1. 作成したリポジトリのページで「uploading an existing file」をクリック
2. `index.html`ファイルをドラッグ&ドロップ
3. 下部の「Commit changes」をクリック

**方法B: コマンドライン（慣れている方向け）**

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# index.htmlをコピー
# （ダウンロードしたindex.htmlをこのフォルダに移動）

# Gitにコミット
git add index.html
git commit -m "Add portfolio website"
git push origin main
```

### 3. GitHub Pagesで公開

1. リポジトリの「Settings」タブをクリック
2. 左メニューから「Pages」を選択
3. 「Source」で「Deploy from a branch」を選択
4. 「Branch」で「main」を選択し、フォルダは「/ (root)」を選択
5. 「Save」をクリック

数分待つと、`https://yourusername.github.io/your-repo-name/`でサイトが公開されます！

## ✏️ カスタマイズ方法

`index.html`をテキストエディタで開いて、以下を編集してください：

### 必須の編集箇所

1. **LIPSリンク**（50行目あたり）
   ```html
   <a href="https://lipscosme.com/members/veronica_kuma" ...>
   ```
   → 正しいLIPSのプロフィールURLに変更してください

2. **GitHubリンク**（60行目あたり）
   ```html
   <a href="https://github.com/yourusername" ...>
   ```
   → `yourusername`を自分のGitHubユーザー名に変更

3. **メールアドレス**（281行目あたり）
   ```html
   <a href="mailto:your.email@example.com" ...>
   ```
   → `your.email@example.com`を自分のメールアドレスに変更

### プロジェクトの追加・編集

**Aboutセクション**（100行目あたり）の自己紹介文を編集してください。

**Projectsセクション**（134行目あたり）のプロジェクトカードを編集：

```html
<h3>プロジェクト名</h3>
<p>プロジェクトの説明</p>
<span>技術タグ</span>
<a href="#">詳しく見る</a>
```

- プロジェクト名、説明、技術タグを変更
- リンク先（`href="#"`）を実際のプロジェクトページに変更
- プロジェクトを増やしたい場合は、カード全体（`<div class="group...">...</div>`）をコピーして追加

## 🎨 デザインについて

- ピンク・パープル・ブルーの柔らかいグラデーション配色
- マウスに追従する背景エフェクト
- スムーズなアニメーション効果
- レスポンシブデザイン（スマホでも見やすい）

## 💡 次のステップ

1. プロジェクトの実績を追加
2. スクリーンショットや画像を追加したい場合は、画像ファイルも一緒にアップロード
3. カスタムドメインの設定（GitHub Pagesで可能）
4. アクセス解析の追加（Google Analyticsなど）

## 📝 メモ

- HTMLファイル1つだけで動作するので管理が簡単
- TailwindCSSをCDN経由で読み込んでいるので、別ファイル不要
- カスタマイズは`index.html`を直接編集するだけでOK

---

何か困ったことがあれば、Xで質問してください！ @Veronica_kuma
