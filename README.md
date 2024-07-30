# My Kitty Party App

My Kitty Party is a group-based application where users can form groups, pool money monthly, and select a winner each month through a lucky spin. The application includes backend services for authentication, chat, user management, and transactions. It uses a combination of PostgreSQL and MongoDB databases.

## Project Structure

The project is organized as a monorepo with the following structure:


### Apps

- **backend**: Contains the user services, including authentication, user management, and transactions. Uses Express.js and Prisma for PostgreSQL.
- **chat**: Handles real-time messaging using WebSockets and stores messages in MongoDB for faster reads.
- **web**: The web frontend built with Next.js.
- **native**: The mobile application built with React Native.

### Packages

- **eslint-config**: Shared ESLint configuration for consistent code quality.
- **tsconfig**: Shared TypeScript configuration for all projects.
- **zod**: Shared Zod schemas for validation across different services.
- **database**: Database configurations and migrations using Prisma for PostgreSQL and Mongoose for MongoDB.
- **shared-ui**: Shared UI components used across web and native applications.

## Databases

- **PostgreSQL**: Used for storing user information, groups, and transactions.
- **MongoDB**: Used for storing chat messages and group messages for faster reads.

## Yarn Workspaces

This project uses Yarn workspaces to manage dependencies across multiple packages. To install dependencies, run:

```sh
yarn install
