package tech.fitcom.app.training

class ExerciseData(
    val exerciseId: String,
    val title: String,
    val desc: String,
    var value1: Int,
    val value1type: String,
    var value1step:Int,
    var value2: Int?,
    val value2type: String?,
    var value2step:Int?,
    val primaryGroup:String,
    val secondaryGroup:String?

    ){
        override fun toString(): String {
            return title
    }
}
