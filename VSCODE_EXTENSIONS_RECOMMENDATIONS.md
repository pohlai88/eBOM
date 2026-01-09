# VS Code Extensions Recommendations

Based on your existing platform stack (Next.js 15+, React 19, TypeScript, Tailwind CSS, Supabase, shadcn/ui), here are the recommended VS Code extensions organized by category:

## 🚀 Core Development Extensions

### Next.js & React
- **TypeScript and JavaScript Language Features** (`ms-vscode.vscode-typescript-next`)
  - Enhanced TypeScript support for Next.js 15+ and React 19
  - Better IntelliSense and error detection

- **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
  - Quick code snippets for React components, hooks, and patterns
  - Speeds up development with common React patterns

### TypeScript & JavaScript
- **ESLint** (`dbaeumer.vscode-eslint`)
  - Real-time linting for your code
  - Integrates with your existing ESLint config
  - Auto-fixes on save

- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
  - Consistent code formatting
  - Works with TypeScript, JavaScript, JSON, CSS
  - Auto-format on save

### Tailwind CSS
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) ⭐ **ESSENTIAL**
  - Autocomplete for Tailwind classes
  - Hover previews for colors and spacing
  - Linting for Tailwind classes
  - Works with your custom theme configuration

- **Headwind** (`heybourn.headwind`)
  - Automatically sorts Tailwind classes in the recommended order
  - Keeps your code consistent and readable

## 🎨 UI Component Development

### shadcn/ui Support
- **Path Intellisense** (`christian-kohler.path-intellisense`)
  - Autocomplete for file paths
  - Essential for `@/components` imports

- **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
  - Automatically renames paired HTML/JSX tags
  - Speeds up component refactoring

- **Auto Close Tag** (`formulahendry.auto-close-tag`)
  - Automatically closes HTML/JSX tags

## 🔐 Supabase Integration

- **Supabase** (`supabase.supabase-vscode`)
  - Direct integration with Supabase
  - Database schema viewing
  - Query execution
  - Environment variable management

## 🛠️ Code Quality & Productivity

### Error Detection
- **Error Lens** (`usernamehw.errorlens`)
  - Inline error and warning messages
  - Real-time feedback without opening problems panel

### Import Management
- **Auto Import - ES6, TS, JSX, TSX** (`steoates.autoimport`)
  - Automatically finds and adds import statements
  - Works with your path aliases (`@/*`)

- **Import Cost** (`wix.vscode-import-cost`)
  - Shows the size of imported packages
  - Helps identify heavy dependencies

- **npm Intellisense** (`christian-kohler.npm-intellisense`)
  - Autocomplete for npm modules in import statements

### Code Organization
- **TODO Highlight** (`wayou.vscode-todo-highlight`)
  - Highlights TODO, FIXME, and other annotations
  - Keeps track of technical debt

- **Todo Tree** (`gruntfuggly.todo-tree`)
  - Tree view of all TODO comments
  - Quick navigation to todos

## 📦 Environment & Configuration

- **DotENV** (`mikestead.dotenv`)
  - Syntax highlighting for `.env` files
  - Helps manage Supabase environment variables

- **EditorConfig for VS Code** (`editorconfig.editorconfig`)
  - Consistent coding styles across team
  - Works with EditorConfig files

## 🔍 Git & Version Control

- **GitLens** (`eamodio.gitlens`)
  - Enhanced Git capabilities
  - Blame annotations, file history, commit search
  - Code authorship tracking

- **Git Graph** (`mhutchie.git-graph`)
  - Visualize Git repository history
  - Branch management and merging

## 🧪 Testing & Debugging

- **Jest Runner** (`firsttris.vscode-jest-runner`)
  - Run and debug Jest tests directly from VS Code
  - Test status indicators

- **Jest** (`orta.vscode-jest`)
  - Full Jest integration
  - Test discovery and execution

## 📁 Project Management

- **Project Manager** (`alefragnani.project-manager`)
  - Quick access to projects
  - Save and switch between workspaces

- **Code Runner** (`formulahendry.code-runner`)
  - Run code snippets quickly
  - Useful for testing small pieces of code

## 🎯 Priority Installation Order

### Must-Have (Install First)
1. ✅ Tailwind CSS IntelliSense
2. ✅ ESLint
3. ✅ Prettier
4. ✅ Path Intellisense
5. ✅ Error Lens

### Highly Recommended
6. ✅ Supabase extension
7. ✅ Auto Import
8. ✅ GitLens
9. ✅ Headwind
10. ✅ ES7+ React snippets

### Nice to Have
11. ✅ Todo Tree
12. ✅ Import Cost
13. ✅ Git Graph
14. ✅ Jest Runner

## 📝 Installation Instructions

1. **Automatic Installation** (Recommended):
   - Open VS Code in this workspace
   - VS Code will prompt you to install recommended extensions
   - Click "Install All" or install individually

2. **Manual Installation**:
   - Open Extensions view (`Ctrl+Shift+X`)
   - Search for extension ID (e.g., `bradlc.vscode-tailwindcss`)
   - Click Install

3. **Command Line Installation**:
   ```bash
   code --install-extension bradlc.vscode-tailwindcss
   code --install-extension dbaeumer.vscode-eslint
   code --install-extension esbenp.prettier-vscode
   # ... and so on
   ```

## ⚙️ Configuration

The workspace settings (`.vscode/settings.json`) have been configured to:
- ✅ Enable ESLint auto-fix on save
- ✅ Enable Prettier formatting on save
- ✅ Configure Tailwind CSS IntelliSense
- ✅ Set up TypeScript path aliases
- ✅ Configure file associations

## 🔄 After Installation

1. **Restart VS Code** to ensure all extensions are loaded
2. **Reload Window** (`Ctrl+Shift+P` → "Developer: Reload Window")
3. **Verify Tailwind CSS IntelliSense** by typing a Tailwind class in a component
4. **Check ESLint** is working by looking for error indicators
5. **Test Prettier** by saving a file and seeing it auto-format

## 📚 Additional Resources

- [VS Code Extension Marketplace](https://marketplace.visualstudio.com/)
- [Tailwind CSS IntelliSense Docs](https://github.com/tailwindlabs/tailwindcss-intellisense)
- [ESLint VS Code Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Supabase VS Code Extension](https://marketplace.visualstudio.com/items?itemName=supabase.supabase-vscode)

---

**Note**: All recommended extensions are listed in `.vscode/extensions.json` and will be suggested automatically when you open this workspace in VS Code.
