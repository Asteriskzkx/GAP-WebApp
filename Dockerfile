# Stage 1: Install dependencies
FROM node:20-alpine AS deps

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Stage 2: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma client
RUN npx prisma generate

# (ถ้าอยาก build Next.js สำหรับ Production ค่อยเปิดบรรทัดนี้)
# RUN npm run build

# Stage 3: Run the app
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV development

# Copy only necessary files for running the app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src
COPY --from=builder /app/.env ./  

EXPOSE 3000

CMD ["npm", "run", "dev"]
