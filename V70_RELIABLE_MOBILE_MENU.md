# V70 — Reliable mobile navigation

## Fix

- Replaces the header-injected mobile control with a fixed menu rendered directly in the page.
- Keeps the menu visible above the generator on Android, iPhone, tablets and narrow browser windows.
- Provides direct access to Generator, Gallery, Favorites, Tutorial, Settings, Log In/Create Account and Appearance.
- Uses the existing desktop actions, so account state and saved content remain shared across desktop and mobile.
- Closes when an item is selected, outside the menu is tapped, or Escape is pressed.

## Deploy

Upload the complete V70 package to the existing GitHub repository, commit the replacement files, then wait for the Render deployment to finish. On the phone, close the old tab and open `https://mixolabs.art` again. If an old cached page appears, use a private/incognito tab once.
