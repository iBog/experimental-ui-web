# Reception App Releases

This folder contains the build files for Reception App across different platforms.

## Folder Structure

```
releases/
├── android/          # Android APK files
├── macos/           # macOS DMG files  
├── windows/         # Windows EXE files
└── README.md        # This file
```

## Adding New Builds

When you have actual build files, replace the placeholder `.txt` files with the real application files:

### Android ✅ Available
- Current build: `Reception-Local-0.7.11.apk`
- Status: Available for download

### macOS ✅ Available
- Current build: `ReceptionLocal-0.7.11.dmg`
- Status: Available for download

### Windows ⏳ Coming Soon
- Place your EXE file in `windows/` folder  
- Recommended filename: `reception-app-windows.exe`
- Update the `available` flag in `script.js` for Windows platform

## Website Integration

The website automatically detects the user's platform and offers the appropriate download. To enable downloads for a platform:

1. Add the build file to the appropriate folder
2. Update the `getAvailableReleases()` method in `script.js`
3. Set `available: true` for the platform

## File Naming Convention

- Android: `Reception-Local-[version].apk` (e.g., `Reception-Local-0.7.11.apk`)
- macOS: `ReceptionLocal-[version].dmg` (e.g., `ReceptionLocal-0.7.11.dmg`)
- Windows: `reception-app-windows.exe` (or versioned: `Reception-Local-[version].exe`)

## Security Notes

- Ensure all build files are properly signed
- Test downloads on different browsers
- Consider adding checksums for build verification 