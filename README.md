# Pastel Portfolio Showcase

A futuristic, pastel-themed portfolio website built for **Shloka Kamdar**. This project showcases creative work with a unique blend of modern web technologies and interactive design elements.

## ✨ Features

- **Futuristic Pastel Design**: A visually striking UI with a soft, modern color palette.
- **Interactive Elements**:
  - Mouse-following sparkle trail effect.
  - Floating themed icons throughout the site.
  - Interactive "Built with love and cookies" footer that simulates eating cookies when clicked.
- **Blog-Style Projects**: A transformed projects section that displays work in a detailed, blog-post format with reading times and publication dates.
- **Responsive Layout**: Fully optimized for various screen sizes.
- **Modern Animations**: Smooth transitions and engaging motion effects including navbar text animations.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn-ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <YOUR_GIT_URL>
    ```
2.  Navigate to the project directory:
    ```bash
    cd pastel-portfolio-showcase
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:8080` or `http://localhost:5173`) to view the application.

### Build

To build the project for production:

```bash
npm run build
```

## 🌐 Server Deployment

To host this application on a server (VPS, EC2, DigitalOcean, etc.):

1.  **Ensure System Requirements**:
    - Consult `requirements.txt` for Node.js and npm version details.
    - Ideally use Node.js v18 LTS or higher.

2.  **Environment Setup**:
    - Install Node.js & npm on your server.
    - Install a process manager like `pm2` or a simple static server like `serve`.

3.  **Deploying the Build**:
    - Run the build command: `npm run build`
    - The output will be in the `dist/` folder.
    - Serve the `dist` folder using a web server.
    
    Example using `serve`:
    ```bash
    npm install -g serve
    serve -s dist -l 3000
    ```
    
    Example using Nginx:
    - Point your Nginx root to the `/absolute/path/to/dist` folder.
    - Ensure `try_files $uri $uri/ /index.html;` is set for SPA routing.

## 📂 Project Structure

- `src/components`: Reusable UI components.
- `src/pages`: Main route components.
- `src/data`: Static data files (e.g., project content).
- `src/hooks`: Custom React hooks.

