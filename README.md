# Gideon's Portfolio Website

Welcome to the repository for my personal portfolio website. This project showcases my skills and experience as a software developer, and it's designed to be a living document that evolves as I continue to learn and grow.

## Live Demo

[Check out the live version of my portfolio here!](https://portfolio.gideonjacob.in)

## Screenshots

![Screenshot of the portfolio website's home page.](https://via.placeholder.com/800x400.png?text=Portfolio+Screenshot)

## About This Project

This portfolio is built with a modern tech stack, including:

*   **React:** For building a dynamic and responsive user interface.
*   **TypeScript:** For writing clean, maintainable, and type-safe code.
*   **Vite:** For a fast and efficient development experience.
*   **Sass:** For writing modular and reusable styles.

## Features

*   **Project Showcase:** A dedicated section to highlight my most recent and relevant projects.
*   **Interactive Timeline:** A visual representation of my career journey and key milestones.
*   **Contact Information:** Easy access to my email and social media profiles.

## Get in Touch

I'm always open to new opportunities, collaborations, and interesting ideas. If you'd like to connect, please feel free to reach out to me at [gideonjacob.in@gmail.com](mailto:gideonjacob.in@gmail.com).

## Running the Project Locally

To run this project locally, you'll need to have Node.js and Docker installed. Then, follow these steps:

1.  Clone this repository:

    ```bash
    git clone https://github.com/gideonkoh/gideon-portfolio-website.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd gideon-portfolio-website
    ```

3.  Run the following Docker command:

    ```bash
    docker run --rm -p 3000:3000 -v $(pwd):/workspace -w /workspace mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm /bin/bash -c "npm install && npm run dev"
    ```

4.  Open your browser and navigate to `http://localhost:3000`.
