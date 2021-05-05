
export enum ExerciseType {
    weight = 'weight', 
    repetition = 'repetition', 
    duration = 'duration', 
    distance = 'distance'
}

export interface Exercise {
    id: string
    type: ExerciseType
    requiresEquipment: boolean
    requiresTrainingspartner: boolean
    title: string
    description: string
}

export interface ExerciseForPostRequest {
    type: ExerciseType
    requiresEquipment: boolean
    requiresTrainingspartner: boolean
    title: string
    description: string    
}
