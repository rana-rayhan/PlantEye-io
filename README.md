# PlantEye 🌿

Take a photo of a plant and get its name and care guide in seconds. PlantEye uses Google Gemini to recognise the plant in your image and shows the result as an easy-to-read card.

It also has two more modes with the same flow: **Pet Identifier** and **Clothe Identifier**.

## Features

- Upload a photo and see it right away
- AI image recognition with Google Gemini (`gemini-1.5-flash`)
- **Plant mode:** common name, scientific name, description, origin, sunlight, watering, soil type and special care tips
- **Pet mode:** breed, description, origin, diet, exercise, temperament, lifespan, grooming and health tips
- **Clothe mode:** description, material, fabric content, colour, and care, washing and drying guide
- The AI's text answer is parsed into clear labelled sections and lists
- Loading ("Identifying...") and error states
- Responsive layout with a navbar, info cards and footer

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) and React 18
- TypeScript
- Tailwind CSS
- [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai) (Gemini)
- Font Awesome, Heroicons and Lucide icons

## Getting started

### 1. Requirements

- Node.js 18 or newer
- A Google Gemini API key ([get one here](https://aistudio.google.com/app/apikey))

### 2. Install

```bash
npm install
```

### 3. Add your API key

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your_api_key_here
```

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route     | Page              |
| --------- | ----------------- |
| `/`       | Plant Identifier  |
| `/pet`    | Pet Identifier    |
| `/clothe` | Clothe Identifier |

## Project structure

```
app/
├── page.tsx            # Plant Identifier page
├── layout.tsx          # Root layout and metadata
├── globals.css         # Tailwind and global styles
├── components/         # Navbar, ImageUpload, PlantInfo, InfoCard, Footer
├── pet/                # Pet Identifier page and components
└── clothe/             # Clothe Identifier page and components
```

## How it works

1. You pick an image in `ImageUpload`.
2. The image is read as base64 and sent to Gemini with a prompt that asks for the info in a fixed structure.
3. `PlantInfo` splits the answer into `key: value` pairs and lists, and shows them in a card.

## Scripts

| Command         | What it does             |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Build for production     |
| `npm start`     | Run the production build |
| `npm run lint`  | Run ESLint               |

## Note on the API key

The Gemini call runs in the browser, so the `NEXT_PUBLIC_` key is visible to users. That's fine for a demo. For production, move the call into a Next.js API route and keep the key on the server.
