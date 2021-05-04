package tech.fitcom.app

import tech.fitcom.app.home.HomeItemData
import tech.fitcom.app.home.TrainingdayInfo
import tech.fitcom.app.home.TrainingplanInfo
import tech.fitcom.app.training.ExerciseData
import tech.fitcom.app.training.HistoryData

class DataManager {
    val trainingplans = HashMap<String, TrainingplanInfo>()
    val trainingdays = HashMap<String, TrainingdayInfo>()

    val homeItems = HashMap<String, HomeItemData>()

    val exercises = HashMap<String, ExerciseData>()

    val histories = ArrayList<HistoryData>()

    init {
        initializeTrainingplans()
        initializeTrainingdays()
        initializeHome()
        initializeExercises()
        initializeHistory()
    }

    private fun initializeTrainingplans() {
        var trainingplan = TrainingplanInfo(
            "3er_split",
            "3er Split",
            "Alle wichtigen Übungen in drei spannenden Trainingstagen",
            "Empfehlung deines Trainers"
        )
        trainingplans.set(trainingplan.trainingplanId, trainingplan)

        trainingplan = TrainingplanInfo(
            "5er_split",
            "5er Split",
            "Jeder Muskelpartie wird an einem Tag die volle Aufmerksamkeit geschenkt",
            ""
        )
        trainingplans.set(trainingplan.trainingplanId, trainingplan)

    }

    private fun initializeTrainingdays() {
        var trainingday = TrainingdayInfo("3er_split_1", "Brust", "Drück alles weg!", "")
        trainingdays.set(trainingday.trainingdayId, trainingday)

        trainingday = TrainingdayInfo("3er_split_2", "Rücken", "Ziehen mal anders", "")
        trainingdays.set(trainingday.trainingdayId, trainingday)

        trainingday =
            TrainingdayInfo("3er_split_3", "Bauch Beine Po", "Für unser Cardiomäuschen", "")
        trainingdays.set(trainingday.trainingdayId, trainingday)

    }

    private fun initializeHome() {
        var homeItem = HomeItemData(
            "homeItem_1",
            "Trainer Thorsten fordert dich heraus!",
            "100 Liegestütze",
            "Bild"
        )
        homeItems.set(homeItem.homeitemId, homeItem)

        homeItem = HomeItemData(
            "homeItem_2",
            "Marc hat einen neuen Rekord!",
            "100kg Bankdrücken - gratuliere ihm!",
            ""
        )
        homeItems.set(homeItem.homeitemId, homeItem)

    }

    private fun initializeExercises(){
        var exercise = ExerciseData(
            "exercise_bench_press",
            "Bankdrücken",
            "Auf und ab",
            100,
            "kg",
            8,
            "Wdh"
        )
        exercises.set(exercise.exerciseId, exercise)

        exercise = ExerciseData(
            "exercise_pull_up",
            "Klimmzüge",
            "Hoch und runter",
            10,
            "Wdh",
            null,
            null
        )
        exercises.set(exercise.exerciseId, exercise)

        exercise = ExerciseData(
            "exercise_push_up",
            "Liegestütze",
            "Hoch und runter",
            50,
            "Wdh",
            null,
            null
        )
        exercises.set(exercise.exerciseId, exercise)

        exercise = ExerciseData(
            "exercise_bizeps_curl",
            "Bizeps-Curls",
            "Hoch und runter",
            15,
            "kg",
            12,
            "Wdh"
        )
        exercises.set(exercise.exerciseId, exercise)

        exercise = ExerciseData(
            "exercise_squat",
            "Kniebeuge",
            "Hoch und runter",
            120,
            "kg",
            15,
            "Wdh"
        )
        exercises.set(exercise.exerciseId, exercise)

        exercise = ExerciseData(
            "exercise_leg_press",
            "Beinpresse",
            "Hoch und runter",
            150,
            "kg",
            6,
            "Wdh"
        )
        exercises.set(exercise.exerciseId, exercise)

    }

    private fun initializeHistory() {
        var history = HistoryData(
            "Bankdrücken",
            "100kg",
            "12",
            "gerade"
        )
        histories.add(history)

        history = HistoryData(
            "Bankdrücken",
            "90kg",
            "10",
            "vor 10 Minuten"
        )
        histories.add(history)

        history = HistoryData(
            "Bankdrücken",
            "80kg",
            "8",
            "vor 3 Tagen"
        )
        histories.add(history)
    }
}