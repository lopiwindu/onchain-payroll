# Onchain Payroll

An open-source payroll management system built with Next.js 16, React 19, and Tailwind CSS. Manage employee payments on-chain with full self-custody.

## Features

- 📊 **Dashboard** - Overview of payroll and treasury
- 💰 **Treasury Management** - Multi-account treasury tracking
- 👥 **Employee Management** - Employee records and salary management
- 📝 **Payment History** - Track all on-chain payment transactions
- ⚙️ **Settings** - User preferences and security settings
- 🔐 **Self-Custody** - Full control over treasury accounts
- 🌐 **Web3 Integration** - Farcaster mini-app support

## Tech Stack

- **Framework**: Next.js 16 (with Turbopack)
- **Runtime**: Bun
- **UI**: React 19
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Database**: Prisma + PostgreSQL
- **Blockchain**: Farcaster MiniApp SDK

## Prerequisites

- Bun >= 1.0
- Node.js 18+ (for development)
- PostgreSQL (for database)

## Getting Started

### Installation

```bash
# Install dependencies with Bun
bun install
```

### Development

```bash
# Start development server
bun dev

# Open http://localhost:3000 in your browser
```

### Build

```bash
# Build for production
bun build

# Start production server
bun start
```

### Linting

```bash
# Run ESLint
bun lint
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── dashboard.tsx
│   ├── employee-management.tsx
│   ├── payment-history.tsx
│   ├── sidebar.tsx
│   ├── treasury-accounts.tsx
│   ├── user-settings.tsx
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Global styles
```

## Database

Setup Prisma with your database:

```bash
# Generate Prisma client
bun run prisma generate

# Run migrations
bun run prisma migrate dev

# Open Prisma Studio
bun run prisma studio
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/onchain_payroll"

# Farcaster
NEXT_PUBLIC_FARCASTER_APP_ID="your_app_id"

# API Keys
NEXT_PUBLIC_API_URL="https://api.example.com"
```

## Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun run prisma generate` - Generate Prisma client
- `bun run prisma migrate dev` - Run database migrations
- `bun run prisma studio` - Open Prisma Studio

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For support, please open an issue on GitHub or contact us at support@example.com
