package tech.fitcom.app.home

class DataManager {
    val trainingplans = HashMap<String, TrainingplanInfo>()
    val trainingdays = HashMap<String, TrainingdayInfo>()

    val homeItems = HashMap<String, HomeItemData>()

    init {
        initializeTrainingplans()
        initializeTrainingdays()
        initializeHome()
    }

    private fun initializeTrainingplans() {
        var trainingplan = TrainingplanInfo("3er_split" ,"3er Split", "Alle wichtigen Übungen in drei spannenden Trainingstagen", "Empfehlung deines Trainers")
        trainingplans.set(trainingplan.trainingplanId, trainingplan)

        trainingplan = TrainingplanInfo("5er_split","5er Split", "Jeder Muskelpartie wird an einem Tag die volle Aufmerksamkeit geschenkt", "")
        trainingplans.set(trainingplan.trainingplanId, trainingplan)

    }

    private fun initializeTrainingdays() {
        var trainingday = TrainingdayInfo("3er_split_1" ,"Brust", "Drück alles weg!", "")
        trainingdays.set(trainingday.trainingdayId, trainingday)

        trainingday = TrainingdayInfo("3er_split_2","Rücken", "Ziehen mal anders", "")
        trainingdays.set(trainingday.trainingdayId, trainingday)

        trainingday = TrainingdayInfo("3er_split_3","Bauch Beine Po", "Für unser Cardiomäuschen", "")
        trainingdays.set(trainingday.trainingdayId, trainingday)

    }

    private fun initializeHome() {
        var homeItem = HomeItemData("homeItem_1" ,"Trainer Thorsten fordert dich heraus!", "100 Liegestütze", "Bild")
        homeItems.set(homeItem.homeitemId, homeItem)

        homeItem = HomeItemData("homeItem_2","Marc hat einen neuen Rekord!", "100kg Bankdrücken - gratuliere ihm!", "")
        homeItems.set(homeItem.homeitemId, homeItem)

    }
}