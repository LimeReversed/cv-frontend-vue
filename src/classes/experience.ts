import Project from '@classes/project'
import Tag from '@classes/tag'

// Projects and tags do come with the response
// Try going with only this interface?
export interface ExperienceResponseItem {
  title: string
  orgName: string
  location: string
  from: string
  to: string
  tldr: string
  description: string
  projects: Project[]
  tags: Tag[]
  type: string
}
