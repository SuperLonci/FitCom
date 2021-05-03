package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "trainings_plan_day_exercise", primaryKeys = ["trainings_plan_day_id", "exercise_id"])
data class TrainingsPlanDayExercises(
    @ColumnInfo(name = "trainings_plan_day_id")
    var trainingsPlanDayId: String,

    @ColumnInfo(name = "exercise_id")
    var exerciseId: String,

    @ColumnInfo(name = "repetitions")
    var repetitions: String,

    @ColumnInfo(name = "sets")
    var sets: Int,

    @ColumnInfo(name = "weight")
    var weight: Int
)