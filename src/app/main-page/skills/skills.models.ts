import { TagInfo } from '../../commons/tags/tags.models';

export class Skills {
    backend: TagInfo[];
    frontend: TagInfo[];
    patterns: TagInfo[];
    tools: TagInfo[];

    constructor() {
        this.backend = [];
        this.frontend = [];
        this.patterns = [];
        this.tools = [];
    }
}
