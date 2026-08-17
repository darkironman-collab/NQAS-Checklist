# AAM-SC NQAS Android App

This module wraps the repository's mobile web checklist in an Android WebView using `WebViewAssetLoader`.

The website files (`index.html`, `manifest.webmanifest`, `sw.js` and `data/`) are copied into generated Android assets during the build, so the checklist works from the APK without requiring GitHub Pages.

Build locally with Gradle 8.9 + JDK 17:

```bash
gradle :app:assembleDebug
```

The GitHub Actions workflow uploads an installable debug APK as the `AAM-SC-NQAS-APK` artifact.
