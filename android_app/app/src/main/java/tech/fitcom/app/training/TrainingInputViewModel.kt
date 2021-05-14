package tech.fitcom.app.training

import android.os.Build
import android.widget.Button
import android.widget.EditText
import androidx.annotation.RequiresApi
import androidx.core.view.isVisible
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import tech.fitcom.app.DataManager
import tech.fitcom.app.R
import java.time.Instant
import java.time.format.DateTimeFormatter

class TrainingInputViewModel: ViewModel() {

    //Exercise Structure
//    private var currentExercise = 0
    val currentExercise = MutableLiveData<Int>(0)
    private val exercises: List<ExerciseData> = DataManager().exercises
//    var exercise: ExerciseData = exercises[currentExercise.value!!]
    val exercise = MutableLiveData<ExerciseData>(exercises[currentExercise.value!!])

    private val _eventGameFinished = MutableLiveData<Boolean>()
    val eventTrainingFinished: LiveData<Boolean>
        get() = _eventGameFinished


    init {
        currentExercise.value = 0
        _eventGameFinished.value = false
    }

    fun setValue1(int: Int){
        exercise.value?.value1 = int
    }

    fun setValue2(int: Int){
        exercise.value?.value2 = int
    }

    fun setStep1(int: Int){
        exercise.value?.value1step = int
    }

    fun setStep2(int: Int){
        exercise.value?.value2step = int
    }

    fun onAddValue1() {
        exercise.value?.value1 = exercise.value?.value1?.plus(exercise.value?.value1step ?: 0) ?: 0
    }

    fun onSubValue1() {
        exercise.value?.value1 = exercise.value?.value1?.minus(exercise.value?.value1step ?: 0) ?: 0
        if (exercise.value?.value1!! < 0) exercise.value?.value1 = 0
    }

    fun onAddValue2() {
//        exercise.value2 = exercise?.value2step?.let { exercise.value2?.plus(it) }
        exercise.value?.value2 = (exercise.value?.value2)?.plus(exercise.value?.value2step!!)
    }

    fun onSubValue2() {
        exercise.value?.value2 = exercise.value?.value2step?.let { exercise.value?.value2?.minus(it) }
        if (exercise.value?.value2!! < 0) exercise.value?.value2 = 0
    }

    fun onSafe(dm: DataManager) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            dm.histories.add(HistoryData(
                exercise.value!!.title,
                exercise.value!!.value1,
                exercise.value!!.value1type,
                exercise.value?.value2,
                exercise.value?.value2type,
                DateTimeFormatter.ISO_INSTANT.format(Instant.now())
    //            System.currentTimeMillis().toString()
            ))
        }
    }

    fun nextExercise() {
        if (currentExercise.value!! < exercises.size - 1) {
            currentExercise.value = currentExercise.value?.plus(1)
        } else _eventGameFinished.value = true

        exercise.value = exercises[currentExercise.value!!]
    }

    fun prevExercise(){
        if (currentExercise.value!! > 0) {
            currentExercise.value = currentExercise.value?.minus(1)
            exercise.value = exercises[currentExercise.value!!]
//        } else currentExercise.value = exercises.size - 1
        }
    }

    fun onTrainingFinishComplete() {
        _eventGameFinished.value = false
    }

    /*private fun reassingValues(){
        value1 = exercise.value1
        if (exercise.value2 != null) {
            value2 = exercise.value2!!
        }
    }*/

}