
# The Neural Shell - Interactive Portfolio

> A cyberpunk-themed portfolio website with GUI navigation and an optional interactive terminal.

## 🚀 Quick Start

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Local Server**:
    ```bash
    npm run dev
    ```
    Then open [http://localhost:5173](http://localhost:5173) in your browser.

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 🎯 How to Use the Website

The portfolio features **two ways to navigate**:

### GUI Mode (Primary)
- Click navigation buttons at the top to switch between sections
- Sections include: About, Projects, Skills, Experience, Education, Contact
- The terminal at the bottom is **optional** and can be expanded for terminal commands

### Terminal Mode (Optional)
- Click **"[ EXPAND ]"** at the bottom to open the interactive terminal
- Type commands like `help`, `ls`, `cd projects`, `cat about.md`
- Power users can navigate entirely via terminal if preferred

## 📝 How to Edit Your Data

All your personal content is located in the `src/data/content/` folder.

### 1. Profile & Bio (`src/data/content/profile.ts`)
-   **profileImage**: Path to your profile picture (place image in `public/` folder)
-   **aboutMe**: Your bio and "system info"
-   **skills**: Update skills or add new categories using ASCII progress bars
-   **contactInfo**: Update your email and social links

### 2. Projects (`src/data/content/projects.ts`)
-   Edit the `projects` array
-   Each project has:
    -   `id`: Unique identifier
    -   `title`: Display name
    -   `description`: Short summary (shown on card)
    -   `fullDescription`: Detailed info (shown when expanded)
    -   `technologies`: List of tech stack tags
    -   `links`: GitHub and Demo URLs

### 3. Experience (`src/data/content/experience.ts`)
-   **experienceLog**: Add work entries using the `[DATE] [LEVEL] Message` format
-   **educationData**: Update university, courses, and activities

## 🖼️ Adding Your Profile Picture

1. Place your image in the `public/` folder (e.g., `public/my-photo.jpg`)
2. Update `src/data/content/profile.ts`:
   ```typescript
   export const profileImage = '/my-photo.jpg';
   ```

## 🎨 Customizing the Look

-   **Colors**: Edit `tailwind.config.js` to change `neon-green`, `neon-cyan`, `neon-pink`
-   **ASCII Art**: Edit `src/data/ascii.ts` to change the banner

## ⌨️ Terminal Commands (Optional Feature)

When terminal is expanded:
-   `help`: List available commands
-   `ls`: List directory contents
-   `cd <directory>`: Navigate (e.g., `cd projects`)
-   `cat <file>`: View file contents (e.g., `cat about.md`)
-   `ask <question>`: Ask the AI assistant
-   `clear`: Clear terminal screen

## 🌟 Visual Features

- **Auto-login**: No manual login required - boots directly to content
- **Mock Terminal**: Animated command display at top for aesthetics
- **Collapsible Terminal**: Real interactive shell hidden at bottom
- **Profile Picture**: Displays in About section with fallback ASCII art
- **Responsive Design**: Works on desktop and mobile

Enjoy your Neural Shell portfolio!
