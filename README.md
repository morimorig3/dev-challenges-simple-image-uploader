# Simple Image Uploader - 画像アップロードアプリ

画像のアップロード、表示、共有、ダウンロード機能を持つフルスタックアプリケーション

<!-- Devchallenge Badge -->
[![DevChallenges](https://img.shields.io/badge/DevChallenges-Image%20Upload%20App-3b3b4f?style=flat-square)](https://devchallenges.io/challenge/image-upload-app)

## デザイン

### Desktop View (1350px)
![Desktop Design](./design/Desktop_1350px.jpg)

### Mobile View (412px)
![Mobile Design](./design/Mobile_412px.jpg)

## ドキュメント

- [要件定義書](./docs/requirements.md)

## 主な機能

- ドラッグ&ドロップまたはファイル選択による画像アップロード
- 対応フォーマット: JPG, PNG, GIF（最大2MB）
- アップロード中のローディング表示
- 画像表示ページ（`/image/:id`）
- 共有URLのクリップボードコピー機能
- 画像ダウンロード機能
- ダークモード/ライトモード切り替え（オプション）
- レスポンシブデザイン対応

## 技術スタック

### Frontend
- **フレームワーク**: React (Vite)
- **ルーティング**: React Router v6
- **スタイリング**: Tailwind CSS
- **ファイルハンドリング**: react-dropzone

### Backend
- **フレームワーク**: NestJS
- **ランタイム**: Node.js
- **データベース**: Supabase (PostgreSQL)
- **ストレージ**: Cloudinary

### Deployment
- **フロントエンド**: Vercel
- **バックエンド**: Render

## アーキテクチャ

```
[ユーザー]
    |
    v
[Vercel - React Frontend]
    |
    | (API Request)
    v
[Render - NestJS Backend]
    |
    +----> [Supabase - PostgreSQL]
    |      (画像メタデータ保存)
    |
    +----> [Cloudinary]
           (画像ストレージ)
```

### データフロー

1. ユーザーが画像をアップロード
2. バックエンドがCloudinaryに画像を保存
3. CloudinaryからURLを取得
4. Supabaseに画像メタデータ（ID、URL、作成日時）を保存
5. フロントエンドに `/image/:id` のURLを返却
6. ユーザーがShareボタンでURLをコピー
7. 誰かがURLにアクセス → SupabaseからCloudinary URLを取得 → 画像表示

## デモ

<!-- TODO: デプロイ後にURLを追加 -->
- [Live Demo](#)
- [API Documentation](#)

## ライセンス

MIT

## 参考

- [DevChallenges - Image Upload App](https://devchallenges.io/challenge/image-upload-app)
