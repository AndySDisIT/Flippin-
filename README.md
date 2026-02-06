# Flippin

Full-stack starter for a web experience, a Node/Express API, and an Expo mobile
shell for APK and iOS delivery.

## Quick start

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Optional: point the frontend to a hosted API by setting `VITE_API_BASE_URL`
in a `.env` file inside `frontend/` (defaults to `http://localhost:4000`).

### Mobile (Expo)

```bash
cd mobile
npm install
npm run start
```

## Deployment checklist

- Configure API hosting (Render, Fly.io, or any Node-friendly host).
- Point the frontend to the hosted API.
- Configure Expo build profiles for Android (APK/AAB) and iOS.

## Build APK and iOS files (Expo EAS)

These steps create Android APK/AAB and iOS builds using Expo Application
Services.

1. Install the EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
2. Authenticate with Expo:
   ```bash
   eas login
   ```
3. Initialize EAS in the mobile app folder:
   ```bash
   cd mobile
   eas build:configure
   ```
4. Build Android (APK or AAB):
   ```bash
   npm run build:android
   ```
5. Build iOS (IPA):
   ```bash
   npm run build:ios
   ```

After each build, EAS provides a downloadable artifact link in the terminal.

## Marketplace focus

Prioritize local and easy-to-fulfill marketplaces first, then expand to broader
channels once pricing and workflow are proven.

- Local-first: Facebook Marketplace, OfferUp, Nextdoor, local consignment.
- National reach: eBay, Mercari, Poshmark.
- Niche/style: Etsy, Depop, Grailed, StockX.
