package tech.fitcom.app.home

class TrainingdayInfo(val trainingdayId: String, val title: String, val desc: String, val info: String){
    override fun toString(): String {
        return title
    }
}
