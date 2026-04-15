import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"

export function TaskList({ tasks }) {
  const SectionTag = HTML_TAGS.SECTION
  const TitleTag = HTML_TAGS.H3
  const ListTag = HTML_TAGS.UL
  const ListItemTag = HTML_TAGS.LI
  const ParagraphTag = HTML_TAGS.P

  return (
    <SectionTag>
      <TitleTag>{TASK_UI_TEXT.LIST_TITLE}</TitleTag>

      {tasks.length === 0 ? (
        <ParagraphTag>{TASK_UI_TEXT.EMPTY_MESSAGE}</ParagraphTag>
      ) : (
        <ListTag>
          {tasks.map((task) => (
            <ListItemTag key={task.id}>{task.title}</ListItemTag>
          ))}
        </ListTag>
      )}
    </SectionTag>
  )
}