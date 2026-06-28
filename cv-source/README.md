# CV source

Editable source for the two résumé PDFs shown on the portfolio
(`src/assets/CV_Ilya_Aleksin_RU.pdf` and `…_EN.pdf`).

- `cv.css` — shared print stylesheet (A4, Inter font).
- `cv_ru.html` — Russian version.
- `cv_en.html` — English version (tuned for international remote / relocation).

## Regenerate the PDFs

Rendered with headless Chrome (high fidelity, keeps fonts/colors):

```bash
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
DIR="<absolute path to this folder, forward slashes>"

for L in ru en; do
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$DIR/cv_$L.pdf" "file:///$DIR/cv_$L.html"
done
```

Then copy `cv_ru.pdf` / `cv_en.pdf` over the files in `src/assets/`
(`CV_Ilya_Aleksin_RU.pdf` / `CV_Ilya_Aleksin_EN.pdf`).
