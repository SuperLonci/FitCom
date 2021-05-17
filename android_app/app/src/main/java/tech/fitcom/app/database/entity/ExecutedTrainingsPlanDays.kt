package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "executed_trainings_plan_days")
data class ExecutedTrainingsPlanDays (
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "trainings_plans_day_id")
    var trainingsPlansDayId: String,

    @ColumnInfo(name = "date")
    var date: String
    )