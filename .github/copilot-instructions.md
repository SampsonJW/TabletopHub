<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This project is called TabletopHub. It contains a React + TypeScript frontend (Vite) and a C# ASP.NET Core Web API backend. The backend should be ready for integration with SQL Server, SQLite, or PostgreSQL. The app is for finding and booking local tabletop games and tables at venues. Prioritize a fully responsive UI (mobile, tablet, desktop) and clean API design.

The backend follows Domain Driven Design (DDD) and Clean Architecture principles:

- Organize code into Domain, Application, Infrastructure, and API layers.
- Place core business logic, entities, value objects, and domain events in the Domain layer.
- Use the Application layer for use cases, DTOs, and application services.
- Infrastructure contains data access, repositories, and external service implementations.
- API layer contains controllers and dependency injection setup.
- Keep dependencies flowing inward: API → Application → Domain (never outward).
- Favor interfaces and dependency inversion for testability and maintainability.
- Use clear folder structure and separation of concerns throughout the backend.

Frontend UI/UX:

- All frontend code must be fully responsive and accessible, adapting gracefully to mobile, tablet, and desktop devices.
- Use modern CSS (Flexbox, Grid, media queries) and semantic HTML.
- Prioritize clean, maintainable, and scalable component structure.
- Avoid device-specific hacks; use best practices for universal responsiveness.
