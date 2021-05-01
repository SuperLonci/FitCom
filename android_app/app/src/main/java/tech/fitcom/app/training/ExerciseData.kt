package tech.fitcom.app.training

class ExerciseData(val exerciseId: String, val title: String, val desc: String){
    override fun toString(): String {
        return title
    }
}
