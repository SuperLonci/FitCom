package tech.fitcom.app.training

class ExerciseData(val exerciseId: String, val title: String, val desc: String, var value1:Int, val value1type: String, var value2: Int?, val value2type: String?){
    override fun toString(): String {
        return title
    }
}
