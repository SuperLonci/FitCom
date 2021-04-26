package tech.fitcom.app.home

class DataManager {
    val trainingplans = HashMap<String, TrainingplanInfo>()
    val trainingdays = ArrayList<TrainingplanInfo>()

    val homeItems = HashMap<String, HomeItemData>()

    init {
        initializeTrainingplans()
        initializeHome()
    }

    private fun initializeTrainingplans() {
        var trainingplan = TrainingplanInfo("3er_split" ,"3er Split", "Alle wichtigen Übungen in drei spannenden Trainingstagen", "Empfehlung deines Trainers")
        trainingplans.set(trainingplan.trainingplanId, trainingplan)

        trainingplan = TrainingplanInfo("5er_split","5er Split", "Jeder Muskelpartie wird an einem Tag die volle Aufmerksamkeit geschenkt", "")
        trainingplans.set(trainingplan.trainingplanId, trainingplan)

    }

    private fun initializeHome() {
        var homeItem = HomeItemData("homeItem_1" ,"Trainer Thorsten fordert dich heraus!", "100 Liegestütze", "Bild")
        homeItems.set(homeItem.homeitemId, homeItem)

        homeItem = HomeItemData("homeItem_2","Marc hat einen neuen Rekord!", "100kg Bankdrücken - gratuliere ihm!", "")
        homeItems.set(homeItem.homeitemId, homeItem)

    }
}