# Store Icons Placeholder

This directory contains placeholder information for app store icons used in the download modal.

## Required Store Icon Images

Replace the current icon implementations with these image files:

### 1. App Store Icon
- **File:** `app-store-icon.png`
- **Size:** 32x32px (minimum), preferably 64x64px for retina displays
- **Format:** PNG with transparency
- **Description:** Official Apple App Store icon
- **Usage:** iOS app downloads

### 2. Google Play Icon  
- **File:** `google-play-icon.png`
- **Size:** 32x32px (minimum), preferably 64x64px for retina displays
- **Format:** PNG with transparency
- **Description:** Official Google Play Store icon
- **Usage:** Android app downloads

### 3. Huawei AppGallery Icon
- **File:** `huawei-appgallery-icon.png` 
- **Size:** 32x32px (minimum), preferably 64x64px for retina displays
- **Format:** PNG with transparency
- **Description:** Official Huawei AppGallery icon
- **Usage:** Huawei device app downloads

### 4. RuStore Icon
- **File:** `rustore-icon.png`
- **Size:** 32x32px (minimum), preferably 64x64px for retina displays
- **Format:** PNG with transparency  
- **Description:** Official RuStore icon
- **Usage:** Russian market app downloads

## Implementation

Once you have the actual store icon images, update the HTML in `script.js` by replacing the current icon implementations:

### App Store
Replace:
```html
<div class="store-icon">
    <i class="fab fa-apple"></i>
</div>
```

With:
```html
<div class="store-icon">
    <img src="images/app-store-icon.png" alt="App Store">
</div>
```

### Google Play
Replace:
```html
<div class="store-icon google-icon">
    <div class="play-icon"></div>
</div>
```

With:
```html
<div class="store-icon">
    <img src="images/google-play-icon.png" alt="Google Play">
</div>
```

### Huawei AppGallery
Replace:
```html
<div class="store-icon huawei-icon">
    <span>H</span>
</div>
```

With:
```html
<div class="store-icon">
    <img src="images/huawei-appgallery-icon.png" alt="AppGallery">
</div>
```

### RuStore
Replace:
```html
<div class="store-icon ru-icon">
    <div class="ru-logo"></div>
</div>
```

With:
```html
<div class="store-icon">
    <img src="images/rustore-icon.png" alt="RuStore">
</div>
```

## CSS Notes

The CSS is already prepared to handle image icons with:
- Proper sizing (`width: 100%; height: 100%`)
- Object-fit contain for proper scaling
- Border-radius for consistent appearance

All store buttons now have black backgrounds with white text, except the Direct Download button which maintains its blue gradient. 