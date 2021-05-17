package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "trainings_plan_day_exercises")
data class TrainingsPlanDayExercises(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "trainings_plan_day_id")
    var trainingsPlanDayId: String,

    @ColumnInfo(name = "exercise_id")
    var exerciseId: String,

    @ColumnInfo(name = "index")
    var index: Int
)