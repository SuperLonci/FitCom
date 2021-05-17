package tech.fitcom.app

import tech.fitcom.app.home.HomeItemData
import tech.fitcom.app.home.TrainingdayInfo
import tech.fitcom.app.home.TrainingplanInfo
import tech.fitcom.app.home.TrophyItemData
import tech.fitcom.app.training.ExerciseData
import tech.fitcom.app.training.HistoryData

class DataManager {
    val trainingplans = HashMap<String, TrainingplanInfo>()
    val trainingdays = HashMap<String, TrainingdayInfo>()

    val homeItems = HashMap<String, HomeItemData>()

    val exercises = ArrayList<ExerciseData>()

    val histories = ArrayList<HistoryData>()

    val steps = ArrayList<String>()

    val trophies = ArrayList<TrophyItemData>()


    init {
        initializeTrainingplans()
        initializeTrainingdays()
        initializeHome()
        initializeExercises()
        initializeHistory()
        initializeSteps()
        initializeTrophies()
    }

    private fun initializeTrainingplans() {
        var trainingplan = TrainingplanInfo(
            "3er_split",
            "3er Split",
            "Alle wichtigen Übungen an drei spannenden Trainingstagen",
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
        var trainingday = TrainingdayInfo("3er_split_1", "Brust", "Drück alles weg!", "vor 2 Tagen")
        trainingdays.set(trainingday.trainingdayId, trainingday)

        trainingday = TrainingdayInfo("3er_split_2", "Rücken", "Ziehen mal anders", "gerade eben")
        trainingdays.set(trainingday.trainingdayId, trainingday)

        trainingday =
            TrainingdayInfo("3er_split_3", "Bauch Beine Po", "Für unsere Cardiomäuschen", "vor 1 Tag")
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
            10,
            8,
            "Wdh",
            1,
            "Brust",
            "Trizeps"

        )
        exercises.add(exercise)

        exercise = ExerciseData(
            "exercise_pull_up",
            "Klimmzüge",
            "Hoch und runter",
            10,
            "Wdh",
            1,
            null,
            null,
            null,
            "Rücken",
            "Bizeps"
        )
        exercises.add(exercise)

        exercise = ExerciseData(
            "exercise_push_up",
            "Liegestütze",
            "Hoch und runter",
            50,
            "Wdh",
            1,
            null,
            null,
            null,
            "Brust",
            "Trizeps"
        )
        exercises.add(exercise)

        exercise = ExerciseData(
            "exercise_bizeps_curl",
            "Bizeps-Curls",
            "Hoch und runter",
            15,
            "kg",
            10,
            12,
            "Wdh",
            1,
            "Brust",
            null
        )
        exercises.add(exercise)

        exercise = ExerciseData(
            "exercise_squat",
            "Kniebeuge",
            "Hoch und runter",
            120,
            "kg",
            10,
            15,
            "Wdh",
            1,
            "Beine",
            "Gluteus Maximus"
        )
        exercises.add(exercise)

        exercise = ExerciseData(
            "exercise_leg_press",
            "Beinpresse",
            "Hoch und runter",
            150,
            "kg",
            10,
            6,
            "Wdh",
            1,
            "Beine",
            "Oberschenkel"
        )
        exercises.add(exercise)

    }

    private fun initializeHistory() {
        var history = HistoryData(
            "Bankdrücken",
            100,
            "kg",
            12,
            "Wdh",
            "gerade"
        )
        histories.add(history)

        history = HistoryData(
            "Bankdrücken",
            90,
            "kg",
            10,
            "Wdh",
            "vor 10 Minuten"
        )
        histories.add(history)

        history = HistoryData(
            "Bankdrücken",
            80,
            "kg",
            8,
            "Wdh",
            "vor 3 Tagen"
        )
        histories.add(history)
    }

    private fun initializeSteps() {
        steps.add("1")
        steps.add("2")
        steps.add("5")
        steps.add("10")
        steps.add("20")
    }

    private fun initializeTrophies() {
        var trophy = TrophyItemData(
            "Trophäe 1",
            "mache tolle Dinge",
            R.drawable.baseline_emoji_events_24
        )
        trophies.add(trophy)

        trophy = TrophyItemData(
            "Trophäe 2",
            "mache tolle Dinge",
            R.drawable.baseline_emoji_events_24
        )
        trophies.add(trophy)

        trophy = TrophyItemData(
            "Trophäe 3",
            "mache tolle Dinge",
            R.drawable.baseline_emoji_events_24
        )
        trophies.add(trophy)

        trophy = TrophyItemData(
            "Trophäe 4",
            "mache tolle Dinge",
            R.drawable.baseline_emoji_events_24
        )
        trophies.add(trophy)

        trophy = TrophyItemData(
            "Trophäe 5",
            "mache tolle Dinge",
            R.drawable.baseline_emoji_events_24
        )
        trophies.add(trophy)

        trophy = TrophyItemData(
            "Trophäe 5",
            "mache tolle Dinge",
            R.drawable.baseline_emoji_events_24
        )
        trophies.add(trophy)

        trophy = TrophyItemData(
            "Trophäe 5",
            "mache tolle Dinge",
            R.drawable.baseline_emoji_events_24
        )
        trophies.add(trophy)

        trophy = TrophyItemData(
            "Trophäe 5",
            "mache tolle Dinge",
            R.drawable.baseline_emoji_events_24
        )
        trophies.add(trophy)
    }
}