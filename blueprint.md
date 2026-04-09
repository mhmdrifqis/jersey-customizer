# Project Blueprint: 2.5D Jersey Customizer Plugin (Advanced 5-Layer Engine)

## 1. Project Context & Objective
You are an expert Full-Stack Developer specializing in interactive web applications. Your task is to build a "2.5D Jersey Customizer" module. This is an independent sandbox project that will eventually be integrated into a larger Laravel application. 

The goal is to create a UI where users can customize sports jerseys in real-time. We are using an advanced 2.5D Canvas approach (stacking 5 distinct 2D image layers with specific blending modes to create a highly realistic 3D fabric illusion), NOT WebGL/Three.js.

## 2. Tech Stack
* **Backend / Framework:** Laravel (Sandbox setup)
* **Styling:** Tailwind CSS
* **Interactivity (UI):** Alpine.js or Vanilla JavaScript
* **Canvas Engine:** Fabric.js (Core requirement for rendering)

## 3. UI/UX Architecture (3-Column Layout)
The interface must be fully responsive, spanning the full width of the screen.
* **Column 1 (Left Sidebar - Narrow):** Navigation menu containing icons for: `Color`, `Pattern/Motif`, `Number`, `Name`, `Logo`. 
* **Column 2 (Middle Panel - Dynamic):** Displays the options based on the active menu in Column 1. 
    * If `Color` is active -> Show Color Picker to change Layer 0.
    * If `Pattern` is active -> Show a grid of pattern thumbnails to change Layer 1.
    * If `Text/Name` is active -> Show text input fields and font selection.
* **Column 3 (Right Area - Main Stage):** The Fabric.js `<canvas>` element taking up the remaining space, displaying the live preview.

## 4. Canvas Layering Logic (The 5-Layer Magic Engine)
This is the absolute core of the application. Inside Fabric.js (or wrapped in a container), objects must be strictly layered from bottom to top (Index 0 to 4):

* **Layer 0 (Base Mask & Color):** A solid T-shirt shape PNG. This dictates the primary color of the jersey (tintable via user input). CRITICAL: This layer MUST act as a clipping mask (using `globalCompositeOperation = 'source-in/source-atop'` or Fabric's `clipPath`) for Layer 1, ensuring nothing bleeds outside the shirt boundaries.
* **Layer 1 (Pattern / Motif):** An image layer for textures or patterns (e.g., abstract shapes, stripes). The user selects the pattern from the UI. This layer is clipped by Layer 0.
* **Layer 2 (User Objects):** Dynamic Fabric.js objects representing user designs (Text for Names/Numbers, and uploaded Images/Logos). These are the ONLY interactive elements on the canvas. They must be draggable, resizable, and selectable.
* **Layer 3 (Shadows Mask):** A transparent PNG containing ONLY the dark fabric shadows and deep folds.
    * **Constraint 1:** Must use blend mode `linear-burn` (via CSS `mix-blend-mode: linear-burn` on a layered DOM canvas, or Fabric's native blend filters).
    * **Constraint 2:** Must be locked (`evented: false` and `selectable: false`).
* **Layer 4 (Highlights Mask):** A transparent PNG containing ONLY the light reflections and bright fabric highlights.
    * **Constraint 1:** Must use blend mode `screen` (via CSS `mix-blend-mode: screen` or Canvas equivalent).
    * **Constraint 2:** Must be locked (`evented: false` and `selectable: false`) so it does not block the user from clicking the text/logos underneath it.

## 5. Required Features & Behaviors
1.  **Dynamic Text:** User types in Column 2, the text on the Canvas (Layer 2) updates in real-time. 
2.  **Logo Upload:** `<input type="file">` that converts a local PNG/JPG into a Fabric.js Image object on Layer 2.
3.  **Color Tinting:** Applying a hex color code to Layer 0.
4.  **Pattern Swapping:** Loading external image URLs to replace the content of Layer 1.
5.  **Export/Save Function:** A "Checkout/Save" button that triggers `canvas.toJSON()` to export the exact coordinates, text values, selected pattern, and colors used.

## 6. Initial Task
Please scaffold the initial HTML/Tailwind layout for the 3 columns. Then, initialize the Fabric.js canvas in the right column and explicitly set up the rendering logic or HTML structure to support these 5 strict layers (especially the specific blend modes for Layer 3 and Layer 4). Use placeholder divs/images for now.