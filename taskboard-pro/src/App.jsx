import './App.css'
import { HTML_TAGS } from './shared/constants/html-tags.constants'
import { TaskBoard } from './features/tasks/components/TaskBoard'

function App() {
  const MainTag = HTML_TAGS.MAIN
  const TitleTag = HTML_TAGS.H1
  
  return (
    <div>
      <h1>TaskBoard Hooks Lab</h1>
      <TaskBoard />
    </div>
  )
}

export default App
