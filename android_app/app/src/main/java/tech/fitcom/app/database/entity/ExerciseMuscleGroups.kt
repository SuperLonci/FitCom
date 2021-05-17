package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity

@Entity(tableName = "exercise_muscle_group", primaryKeys = ["exercise_id", "muscle_group_id"])
data class ExerciseMuscleGroups(
    @ColumnInfo(name = "exercise_id")
    var id: String,

    @ColumnInfo(name = "muscle_group_id")
    var muscleGroupId: String,

    @ColumnInfo(name = "effectivity")
    var effectivity: String
)