
# Diagrams Web

A modern web app for generating and visualizing [Diagrams](https://diagrams.mingrammer.com/) using Pyodide and a local API server.

## Features

- **Side-by-side layout:** Code editor (Python) on the left, generated diagram image (PNG) on the right, always top-aligned.
- **Generate from description:** Enter a natural language description and click **Generate** to call your local API server (`/generate`).
- **Auto-load code:** The code editor is automatically populated with the generated Python code from the API response.
- **Seamless diagram preview:** Only one PNG image is shown at a time, blending smoothly with the background.
- **Clear button:** Instantly clears the input, code editor, error messages, and diagram preview.
- **Error handling:** Only error messages are shown under the Generate section.

## Running Locally

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Start your API server:**
   Make sure your API server is running at `http://localhost:5050` and exposes a `/generate` endpoint as described below.
4. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000)

## API Contract

The app expects the `/generate` endpoint to accept POST requests like:

```
POST http://localhost:5050/generate
Content-Type: application/json
{
  "description": "Draw a VPC with two EC2 instances...",
  "provider": "aws"
}
```

And respond with:

```
{
  "diagram_files": {
    "png": "/diagrams/generated_diagram.png",
    ...
  },
  "raw_code_url": "/diagrams/generated_diagram_raw.py",
  ...
}
```

## Usage

1. Enter a description and click **Generate**.
2. The code editor will be filled with the generated Python code.
3. The diagram PNG will appear on the right, aligned with the code.
