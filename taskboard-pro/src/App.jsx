import './App.css'
import { HTML_TAGS } from './shared/constants/html-tags.constants'
import { TaskBoard } from './features/tasks/components/TaskBoard'
import { ThemeToggle } from './features/Theme/components/ThemeToggle'
import { ThemeProvider } from './features/Theme/context/ThemeProvider'
import { useTheme } from './features/Theme/hooks/useTheme'

function AppContent() {
  const MainTag = HTML_TAGS.MAIN
  const TitleTag = HTML_TAGS.H1
const { theme } = useTheme()

  return (
    <div>
      <h1>TaskBoard Hooks Lab</h1>
      <ThemeToggle />
      <TaskBoard />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
