package tech.fitcom.app.training

import android.os.Build
import android.widget.Button
import android.widget.EditText
import androidx.annotation.RequiresApi
import androidx.core.view.isVisible
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import tech.fitcom.app.DataManager
import tech.fitcom.app.R
import java.time.Instant
import java.time.format.DateTimeFormatter

class TrainingInputViewModel: ViewModel() {

    //Exercise Structure
    private var currentExercise = 0
    private val exercises: List<ExerciseData> = DataManager().exercises.values.toList()
    var exercise: ExerciseData = exercises[currentExercise]

    init {
    }

    fun setValue1(int: Int){
        exercise.value1 = int
    }

    fun setValue2(int: Int){
        exercise.value2 = int
    }

    fun setStep1(int: Int){
        exercise.value1step = int
    }

    fun setStep2(int: Int){
        exercise.value2step = int
    }

    fun onAddValue1() {
        exercise.value1 += exercise.value1step
    }

    fun onSubValue1() {
        exercise.value1 -= exercise.value1step
        if (exercise.value1 < 0) exercise.value1 = 0
    }

    fun onAddValue2() {
        exercise.value2 = exercise?.value2step?.let { exercise.value2?.plus(it) }
    }

    fun onSubValue2() {
        exercise.value2 = exercise.value2step?.let { exercise.value2?.minus(it) }
        if (exercise.value2!! < 0) exercise.value2 = 0
    }

    fun onSafe(dm: DataManager) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            dm.histories.add(HistoryData(
                exercise.title,
                exercise.value1,
                exercise.value1type,
                exercise.value2,
                exercise.value2type,
                DateTimeFormatter.ISO_INSTANT.format(Instant.now())
    //            System.currentTimeMillis().toString()
            ))
        }
    }

    fun nextExercise() {
        if (currentExercise < exercises.size - 1) {
            currentExercise++
        } else currentExercise = 0

        exercise = exercises[currentExercise]
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