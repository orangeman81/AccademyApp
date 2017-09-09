export interface Courses {
    title: string;
    description: string;
    requirements?: string;
    access?: string;
    certificate?: string;
    goals: string;
    job?: string;
    program?: string;
    programII?: string;
    programIII?: string;
    tag: string;
    type: string;
    fileName: string;
    docName?: string;
    createdAt?: Date;
    updatedAt?: Date;
    data: Array<any>;
    total: number;
}
