FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY backend/package*.json ./backend/

# Install dependencies
RUN cd backend && npm install

# Copy backend source code
COPY backend/ ./backend/

# Expose port
EXPOSE 5001

# Start the application
WORKDIR /app/backend
CMD ["npm", "start"] 