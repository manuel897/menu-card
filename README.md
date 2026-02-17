# What is this?

A simple static react website that pulls data from a firebase realtime database. The website can be customised to an extent using environment variables.

# How to get started?

- Create a `.env.local` file at the root.

```env
NEXT_PUBLIC_BACKEND_URL=https://backend/url
TITLE_1=JAVA
TITLE_2=BAKERY
MOBILE_1=1234567890
MOBILE_2=1234567890
INSTAGRAM_TAG_1=tag_1
INSTAGRAM_URL_1=https://www.instagram.com/url_1
INSTAGRAM_TAG_2=tag_2
INSTAGRAM_URL_2=https://www.instagram.com/url_1
GOOGLE_MAPS_URL=https://maps.app.goo.gl/
```

- Use `nvm use node` and then `npm i` to install the packages. Finally use `npm run dev`.
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# How to prepare the contents of the menu card?

1. Set up a A [Firebase Realtime Database](https://firebase.google.com/docs/database) that returns the contents of the menu card. See `src/sample-data/sample-items.json` for an example.
2. Provide images for each category in the menu card. They are stored in the `public` folder. For instance, if a category called "hot beverages" exists, then its image should be available as `public/hot-beverages.jpeg`.

# What can be improved?

- Contents of the _about_ page are hardcoded.
- Images of categories could be retrieved from firebase.
