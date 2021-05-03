
export interface Trainingsplan {
    id: string
    creatorId: string
    title: string
    description: string
    trainingsDays: {
        id: string
        index: number
        title: string
        description: string
        trainingsExercises: {
            id: string
            index: number
            exerciseId: string
            exerciseTitle: string
            exerciseDescription: string
            // exerciseMediaUrl
            exerciseSets: {
                id: string
                index: number
                weight: number
                repeatments: number
            }[]
        }[]
    }[]
}

const heroWorkout: Trainingsplan = {
    id: '3d1bab34-95d3-4f81-bf3b-3c10dd7200d2',
    creatorId: 'da709608-6935-4a6b-a636-c8a588306c42',
    title: 'Hero Workout',
    description: 'Diese Workout ist für besonders erfahrene Sportler gedacht und für Anfänger abzuratn ...',
    trainingsDays: [
        {
            id: 'cc0c498a-fdb6-4460-9947-900dd4afe096',
            index: 0,
            title: 'Leg Day',
            description: 'Der Tag zum Beine zerfetzen',
            trainingsExercises: [
                {
                    id: 'cdd5a726-33dc-47fd-b604-b2ed1c5aca36',
                    index: 0,
                    exerciseId: '777a1ec8-c857-4612-962b-08d4f9e289de',
                    exerciseTitle: 'Beinpresse',
                    exerciseDescription: 'Die Beinpresse ist hervorragend geingnet für ... bei der Ausführung ist zu beachten ...',
                    exerciseSets: [
                        {
                            id: '51310609-f260-438b-864c-3797d723e9a6',
                            index: 0,
                            weight: 60,
                            repeatments: 10
                        },
                        {
                            id: 'b5f60fbe-70cc-49fc-a325-048852fe5d0e',
                            index: 1,
                            weight: 65,
                            repeatments: 12
                        },
                        {
                            id: '9f4123d5-71e7-498e-8f0a-8ad51d9c49e6',
                            index: 2,
                            weight: 70,
                            repeatments: 15
                        }
                    ]
                },
                {
                    id: '3ae81647-d16a-4851-aa51-e4d77fc0ddd3',
                    index: 0,
                    exerciseId: 'c90190e1-10ce-4667-8d13-9d35e75688ff',
                    exerciseTitle: 'Kniebeugen',
                    exerciseDescription: 'Beschreibung von Kniebeugen',
                    exerciseSets: [
                        {
                            id: 'b3ecae57-3575-422a-a1b8-d94f415537a5',
                            index: 0,
                            weight: 0,
                            repeatments: 20
                        },
                        {
                            id: 'e82eea28-4236-4d4e-8f68-d482fb581704',
                            index: 1,
                            weight: 0,
                            repeatments: 25
                        },
                        {
                            id: '8b384df4-81d6-43b2-9b46-69e0dc0d2842',
                            index: 2,
                            weight: 0,
                            repeatments: 30
                        }
                    ]
                }
            ]
        },
        {
            id: '4ab07180-ff43-416e-a648-690f6039918e',
            index: 1,
            title: 'Chest Day',
            description: 'Der Tag zum Brust zerfetzen',
            trainingsExercises: [
                {
                    id: '14ed4a02-ad5b-44e7-aaed-346b693ea6bb',
                    index: 0,
                    exerciseId: '2b3d9332-d893-4ae5-99b8-717fed12f5c1',
                    exerciseTitle: 'Bankdrücken',
                    exerciseDescription: 'Beschreibung für Bankdrücken',
                    exerciseSets: [
                        {
                            id: '7d9bca56-97e2-43c3-aed1-15a2d4403c20',
                            index: 0,
                            weight: 60,
                            repeatments: 12
                        },
                        {
                            id: '507bcf63-b194-4109-a4aa-3506fa97250b',
                            index: 1,
                            weight: 70,
                            repeatments: 15
                        }
                    ]
                }
            ]
        }
    ]
};
