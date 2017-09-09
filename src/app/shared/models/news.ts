export interface News {
    _id: string;
    title: string;
    description: string;
    tag: string;
    fileName: string;
    createdAt: Date;
    updatedAt: Date;
    data: Array<any>;
    total: number;
}
