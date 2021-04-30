package tech.fitcom.app.home

class TrainingplanInfo(val trainingplanId: String, val title: String, val desc: String, val info: String){
    override fun toString(): String {
        return title
    }
}
