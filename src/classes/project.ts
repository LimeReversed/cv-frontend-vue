export interface ProjectResponseItem {
  name: string
  description: string
  link: string
}

export interface ImagePathResponseItem {
  projectId: number
  imagePath: string
}

export class Project {
  constructor(
    public name: string,
    public description: string,
    public imagepaths: string[],
    public link: string,
  ) {}
}

export default Project
