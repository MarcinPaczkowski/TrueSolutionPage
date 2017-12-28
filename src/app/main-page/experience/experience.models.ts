import { TagInfo } from '../../commons/tags/tags.models';

export class ExperienceCompanyDetails {
    companyName: string;
    positon: string;
    startOfWork: string;
    endOfWork: string;
    experienceDescriptions: string[];

    constructor() {
        this.experienceDescriptions = [];
    }
}

export class Project {
    description: string;
    technologies: TagInfo[];

    constructor() {
        this.technologies = [];
    }
}
