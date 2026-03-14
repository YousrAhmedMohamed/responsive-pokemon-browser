# ⚡ Pokédex App - Senior Frontend Task

A high-performance, pixel-perfect Pokédex application built with **React 18**, **TanStack Query**, and **TypeScript**. This project demonstrates advanced frontend patterns including concurrent rendering, modular architecture, and dual-mode navigation.

## 🚀 Key Features

* **Pixel-Perfect UI:** Meticulously matched reference designs for both List and Detail views, including custom gradients and themed layouts.
* **Dual-View Navigation:** Toggle between **Standard Pagination** and **Infinite Scroll** seamlessly within the same interface.
* **Dedicated Detail Routing:** Functional dedicated detail pages for every Pokémon with unique URLs, allowing for deep linking and browser history support.
* **Optimized Loading States:** Custom **Rectangular Shimmer Skeletons** designed to match the specific layout dimensions, minimizing Cumulative Layout Shift (CLS).
* **Modern Data Fetching:** Fully implemented using `useSuspenseQuery` and `useSuspenseInfiniteQuery` for a declarative, high-performance data-fetching strategy.

## 🛠 Tech Stack

* **Framework:** React 18 (Vite)
* **State & Fetching:** TanStack Query (React Query) v5
* **Routing:** React Router v6
* **Styling:** CSS Modules (Scoped, zero-dependency styles)
* **Type Safety:** TypeScript (Strict Mode with custom Interfaces)

## 🏗 Architectural Decisions

### 1. Suspense & Concurrent Rendering
I utilized React 18's `Suspense` in conjunction with `useTransition`. This ensures that when switching between "Page Controls" and "Infinite Scroll," the application maintains the current UI until the data for the next view is fully ready, providing a fluid, app-like experience.

### 2. Modular Hook Pattern
Business logic is decoupled from the UI layer. All API interactions are encapsulated within custom hooks (e.g., `usePokemonInfinite`, `usePokemonDetail`). This modularity ensures the code is clean, reusable, and easy to unit test.

### 3. Pixel-Perfect CSS Modules
To achieve exact design matching without the overhead of heavy UI libraries, I used **CSS Modules**. This allowed for:
* Precise control over the "Mint Green" Pokédex theme.
* Custom-built Shimmer animations.
* Responsive Grid layouts using `auto-fill` and `minmax`.

### 4. Robust Type System
The project uses a strict TypeScript implementation. I defined comprehensive interfaces for Pokémon data structures (Stats, Abilities, Sprites) to eliminate the use of `any` and ensure build-time stability.

## 📖 How to Run

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 📈 Future Improvements
* Implementation of **Unit/Integration Tests** using Vitest and React Testing Library.
* Adding **Framer Motion** for smoother page transitions.
* Support for **Dark Mode** using CSS variables.