import Project from '@classes/project'
import Tag from '@classes/tag'

export class Experience {
  constructor(
    public title: string,
    public orgName: string,
    public location: string,
    public from: Date,
    public to: Date | null,
    public tldr: string,
    public description: string,
    public projects: Project[],
    public tags: Tag[],
  ) {}
}

export default Experience
