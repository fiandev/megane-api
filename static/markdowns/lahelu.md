# lahelu API documentation

## get memes
get each random memes with pagination

### example response
```javascript
{
  "name": "megane",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "prettier": "prettier ./src/**/*.{js,ts,jsx,tsx,css} -w"
  },
  "dependencies": {
    "@mdx-js/react": "^3.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.11.0",
    "react-router-dom": "^6.18.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.31",
    "sass": "^1.69.5",
    "tailwindcss": "^3.3.5",
    "vite": "^4.5.0",
    "web-vitals": "^3.5.0"
  }
}

```

###  API endpoints
The following API endpoints are available for the Lalahelu API

#### general
```shell
/api/lahelu/all
```

#### with pagination
```shell
/api/lahelu/all?page=<pageNumber>
```

