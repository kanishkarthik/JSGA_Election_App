export type student = {
    id: number,
    name: string,
    rollno: string,
    grade: string,
    academic_year: number,
    total_votes: number,
    category_id: number,
    category_name: string,
    image?: string | ArrayBuffer | null  | Blob,
    elected?: string
}

