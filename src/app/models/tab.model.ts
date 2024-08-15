export interface TabModel {
    id: number;
    name: string;
    filter: 'all' | 'done' | 'undone';
}