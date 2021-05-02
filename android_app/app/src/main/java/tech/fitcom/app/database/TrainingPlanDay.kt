package tech.fitcom.app.database

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class TrainingPlanDay(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "trainings_plan_id")
    var trainingsPlanId: String
)