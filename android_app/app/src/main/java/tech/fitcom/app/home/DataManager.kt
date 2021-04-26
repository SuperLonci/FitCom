package tech.fitcom.app.home

class DataManager {
    val trainingplans = HashMap<String, TrainingplanInfo>()
    val trainingday = ArrayList<TrainingplanInfo>()

    init {
        initializeTrainingplans()
    }

    private fun initializeTrainingplans() {
        var trainingplan = TrainingplanInfo("3er_split" ,"3er Split", "Alle wichtigen Übungen in drei spannenden Trainingstagen", "Empfehlung des Trainers")
        trainingplans.set(trainingplan.trainingplanId, trainingplan)

        trainingplan = TrainingplanInfo("5er_split","5er Split", "Jeder Muskelpartie wird an einem Tag die volle Aufmerksamkeit geschenkt", "")
        trainingplans.set(trainingplan.trainingplanId, trainingplan)
    }
}