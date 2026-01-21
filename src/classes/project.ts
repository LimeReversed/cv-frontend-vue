export interface ProjectResponseItem {
  id: number
  name: string
  description: string
  link: string
}

export interface ImagePathResponseItem {
  projectId: number
  path: string
}

export class Project {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public imagepaths: ImagePathResponseItem[],
    public link: string,
  ) {}
}

export default Project
