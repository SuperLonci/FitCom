package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "trainings_plan_day_exercises_sets")
data class TrainingsPlanDayExercisesSets(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "trainings_plan_day_exercise_id")
    var trainingsPlanDayExerciseId: String,

    @ColumnInfo(name = "value_1")
    var value1: Int,

    @ColumnInfo(name = "value_2")
    var value2: Int
)