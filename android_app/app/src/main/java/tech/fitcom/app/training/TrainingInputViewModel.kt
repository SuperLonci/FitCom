package tech.fitcom.app.training

import android.widget.Button
import android.widget.EditText
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import tech.fitcom.app.DataManager
import tech.fitcom.app.R

class TrainingInputViewModel: ViewModel() {

    // current value1
    private var value1_steps = 10

    // current value2
    private var value2_steps = 1

    //Exercise Structure
    private var currentExercise = 0
    private val exercises: List<ExerciseData> = DataManager().exercises.values.toList()
    var exercise: ExerciseData = exercises[currentExercise]

    init {
    }

    fun onAddValue1() {
        exercise.value1 += value1_steps
    }

    fun onSubValue1() {
        exercise.value1 -= value1_steps
        if (exercise.value1 < 0) exercise.value1 = 0
    }

    fun onAddValue2() {
        exercise.value2 = exercise.value2?.plus(value2_steps)
    }

    fun onSubValue2() {
        exercise.value2 = exercise.value2?.minus(value2_steps)
        if (exercise.value2!! < 0) exercise.value2 = 0
    }

    fun nextExercise() {
        if (currentExercise < exercises.size - 1) {
            currentExercise++
        } else currentExercise = 0

        exercise = exercises[currentExercise]

        value1 = exercise.value1
    }

    fun prevExercise(){
        if (currentExercise > 0) {
            currentExercise--
        } else currentExercise = exercises.size - 1

        exercise = exercises[currentExercise]
    }

    /*private fun reassingValues(){
        value1 = exercise.value1
        if (exercise.value2 != null) {
            value2 = exercise.value2!!
        }
    }*/

}