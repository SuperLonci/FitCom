
export interface TrainingsplanForPostRequest {
    title: string
    description: string
    trainingsplanDays: {
        index: number
        title: string
        description: string
        trainingsplanDayExercises: {
            index: number
            exerciseId: string
            trainingsplanDayExerciseSets: {
                index: number
                weight: number
                repeatments: number
            }[]
        }[]
    }[]
}
