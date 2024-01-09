FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Ensure that the npm run build command has all the necessary dependencies available
RUN npm install

# Build the Next.js app
RUN npm run build

# Run the app
CMD ["npm", "start"]
