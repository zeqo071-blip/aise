# 9 Ay Mübarək, sevgilim ♡

Bu, 9 aylıq xatirə saytıdır. Tək bir `index.html` və yanındakı fayllardan ibarətdir, əlavə proqram və ya quraşdırma lazım deyil.

## Fayllar

```
index.html      → səhifənin özü
style.css       → görünüş
script.js       → animasiyalar, qalereya, video
.nojekyll       → GitHub Pages üçün (silmə)
assets/
  img/          → bütün şəkillər
  video/        → bütün videolar (9-cu-ay.mp4 əsas videodur)
  audio/        → fon mahnısı
```

## GitHub-a yükləmək və link almaq

1. https://github.com saytında **New repository** düyməsinə bas, ad ver (məsələn `9ay`), **Public** seç və yarat.
2. **uploading an existing file** linkinə bas. Bu qovluğun **içindəkiləri** (`index.html`, `style.css`, `script.js`, `assets` qovluğu və `.nojekyll`) sürüşdürüb at. Qovluğun özünü yox, içindəkiləri at.
   - `.nojekyll` gizli fayl olduğu üçün görünməyə bilər. Görünmürsə, narahat olma, onsuz da işləyir.
   - Bir dəfəyə 100 fayldan çox yükləmək olmur. Burada 75 fayl var, yəni bir dəfəyə yetər.
3. **Commit changes** düyməsinə bas.
4. **Settings → Pages** bölməsinə get. **Source** altında **Deploy from a branch**, **Branch** altında `main` və `/ (root)` seç, **Save** de.
5. 1-2 dəqiqə sonra sayt bu ünvanda açılır:
   `https://GITHUB_ADIN.github.io/REPO_ADI/`

Həmin linki sevgilinlə paylaşa bilərsən.

## Məsləhətlər

- Link açıq olacaq, kimdə varsa görə bilər. Yalnız ona göndər.
- Fon mahnısı (`assets/audio/mahni.mp3`) müəllif hüquqlu ola bilər. Açıq (Public) repoda saxlayırsansa, GitHub onu sildirə bilər. Belə olsa, saytın qalanı işləməyə davam edir.
- Telefonda ilk açılışda videolar yüklənə bilər, ona görə Wi-Fi ilə aç.
- Bir şəkli və ya videonu dəyişmək üçün `assets` içindəki faylı eyni adla əvəz et.
