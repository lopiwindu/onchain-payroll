# Onchain Payroll Contributing Guide

Thank you for your interest in contributing to Onchain Payroll! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions with other contributors and maintainers.

## How to Contribute

### 1. Fork the Repository

Fork the repository on GitHub and clone it locally:

```bash
git clone https://github.com/your-username/onchain-payroll.git
cd onchain-payroll
```

### 2. Create a Branch

Create a new branch for your feature or fix:

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names like:
- `feature/add-export-functionality`
- `fix/payment-calculation-bug`
- `docs/update-readme`

### 3. Install Dependencies

```bash
bun install
```

### 4. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add tests for new functionality
- Update documentation as needed

### 5. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add export payment history feature"
```

Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for code style changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

### 6. Test Your Changes

```bash
bun run build
bun run lint
```

### 7. Push and Create a Pull Request

```bash
git push origin feature/your-feature-name
```

Create a Pull Request on GitHub with a clear description of your changes.

## Pull Request Guidelines

- Provide a clear description of what you've changed and why
- Link any related issues
- Include screenshots for UI changes
- Ensure all tests pass
- Keep pull requests focused and reasonably sized

## Reporting Issues

When reporting issues, please include:

- A clear description of the issue
- Steps to reproduce the problem
- Expected behavior vs actual behavior
- Your environment (OS, Bun version, etc.)
- Screenshots or error messages if applicable

## Development Setup

### Recommended Tools

- VS Code with ESLint and Prettier extensions
- Bun for package management
- Git for version control

### Project Structure

Follow the existing project structure when adding new files or components:

```
src/
├── app/           # Next.js app directory
├── components/    # React components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── types/         # TypeScript type definitions
```

## Coding Standards

- Use TypeScript for type safety
- Follow ESLint rules
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components focused and reusable

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing!
