# NWB Assistant

An experimental AI chat assistant for the NWB (Neurodata Without Borders) ecosystem. This tool is designed to help users navigate NWB documentation and find relevant information quickly through an intuitive chat interface.

## 🚀 Live Demo

**Try it now:** [https://magland.github.io/nwb-assistant/chat](https://magland.github.io/nwb-assistant/chat)

## 📖 About

The NWB Assistant provides AI-powered assistance for:
- Understanding the NWB format
- Working with the pynwb library
- Exploring the neurodata ecosystem
- Accessing documentation for related tools

The assistant has access to documentation from:
- [pynwb](https://pynwb.readthedocs.io)
- [neuroconv](https://neuroconv.readthedocs.io)
- [nwbinspector](https://nwbinspector.readthedocs.io)
- [hdmf](https://hdmf.readthedocs.io)

## 🛠️ Local Development

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/magland/nwb-assistant.git
   cd nwb-assistant
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/nwb-assistant/` to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
nwb-assistant/
├── src/
│   ├── chat/           # Chat interface components
│   ├── components/     # Reusable UI components
│   ├── config/         # Configuration constants
│   ├── pages/          # Page components
│   └── assets/         # Static assets
├── public/             # Public assets
├── nextjs/             # Next.js API backend
└── docs/               # Documentation
```

## ⚙️ Configuration

### API Keys

For advanced AI models, you may need to provide your own OpenRouter API key:

1. Visit [OpenRouter](https://openrouter.ai/) to get an API key
2. Click the gear icon in the application
3. Enter your API key in the settings dialog

Basic models (like Gemini Flash) work without requiring your own API key.

## 🤝 Contributing

We welcome contributions to improve the NWB Assistant!

### Reporting Issues

Found a bug or have a feature request? Please [submit an issue on GitHub](https://github.com/magland/nwb-assistant/issues).

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📚 Documentation Index

The documentation index is assembled and maintained at: [nwb-doc-index](https://github.com/magland/nwb-doc-index)